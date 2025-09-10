(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    95437: [
      (t) => {
        "use strict";
        let e;
        t.s({ useGasData: () => n }, 95437);
        var i = t.i(838653),
          s = t.i(487568),
          a = t.i(288041);
        function n(t) {
          let {
              rpcUrl: e,
              blockCount: n = 31,
              percentiles: r = [10, 50, 90],
            } = t,
            [o, l] = (0, i.useState)({
              baseFeePerGas: [],
              gasUsedRatio: [],
              reward: [],
              oldestBlock: null,
            }),
            [h, d] = (0, i.useState)(!0),
            [c, u] = (0, i.useState)(null);
          return (
            (0, i.useEffect)(() => {
              if (!e) {
                u(Error("No rpcUrl provided")), d(!1);
                return;
              }
              let t = new s.JsonRpcProvider("https://eth.llamarpc.com");
              !(async function () {
                d(!0), u(null);
                try {
                  let e = await t.send("eth_feeHistory", [n, "latest", r]);
                  console.log(e),
                    l({
                      oldestBlock: parseInt(e.oldestBlock, 16),
                      baseFeePerGas: e.baseFeePerGas.map(
                        (t) => new a.default(t)
                      ),
                      gasUsedRatio: e.gasUsedRatio,
                      reward: e.reward.map((t) =>
                        t.map((t) => new a.default(t))
                      ),
                    });
                } catch (t) {
                  console.error(t), u(t);
                } finally {
                  d(!1);
                }
              })();
            }, [e, n, JSON.stringify(r)]),
            { data: o, loading: h, error: c }
          );
        }
        t.s(
          {
            BarController: () => ip,
            BubbleController: () => im,
            CategoryScale: () => ap,
            Chart: () => sP,
            DoughnutController: () => ib,
            Filler: () => s8,
            Legend: () => s9,
            LineController: () => ix,
            LineElement: () => sV,
            LinearScale: () => ax,
            PieController: () => iy,
            PointElement: () => sB,
            PolarAreaController: () => i_,
            RadarController: () => iv,
            ScatterController: () => iM,
            Title: () => ae,
            Tooltip: () => af,
          },
          763674
        );
        var r = t.i(825285);
        function o(t) {
          return (t + 0.5) | 0;
        }
        let l = (t, e, i) => Math.max(Math.min(t, i), e);
        function h(t) {
          return l(o(2.55 * t), 0, 255);
        }
        function d(t) {
          return l(o(255 * t), 0, 255);
        }
        function c(t) {
          return l(o(t / 2.55) / 100, 0, 1);
        }
        function u(t) {
          return l(o(100 * t), 0, 100);
        }
        let f = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15,
          },
          g = [..."0123456789ABCDEF"],
          p = (t) => g[15 & t],
          m = (t) => g[(240 & t) >> 4] + g[15 & t],
          b = (t) => (240 & t) >> 4 == (15 & t),
          x =
            /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
        function _(t, e, i) {
          let s = e * Math.min(i, 1 - i),
            a = function (e) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : (e + t / 30) % 12;
              return i - s * Math.max(Math.min(a - 3, 9 - a, 1), -1);
            };
          return [a(0), a(8), a(4)];
        }
        function y(t, e, i) {
          let s = function (s) {
            let a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (s + t / 60) % 6;
            return i - i * e * Math.max(Math.min(a, 4 - a, 1), 0);
          };
          return [s(5), s(3), s(1)];
        }
        function v(t, e, i) {
          let s,
            a = _(t, 1, 0.5);
          for (
            e + i > 1 && ((s = 1 / (e + i)), (e *= s), (i *= s)), s = 0;
            s < 3;
            s++
          )
            (a[s] *= 1 - e - i), (a[s] += e);
          return a;
        }
        function M(t) {
          let e,
            i,
            s,
            a = t.r / 255,
            n = t.g / 255,
            r = t.b / 255,
            o = Math.max(a, n, r),
            l = Math.min(a, n, r),
            h = (o + l) / 2;
          o !== l &&
            ((s = o - l),
            (i = h > 0.5 ? s / (2 - o - l) : s / (o + l)),
            (e =
              60 *
                (e =
                  a === o
                    ? (n - r) / s + 6 * (n < r)
                    : n === o
                    ? (r - a) / s + 2
                    : (a - n) / s + 4) +
              0.5));
          return [0 | e, i || 0, h];
        }
        function w(t, e, i, s) {
          return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(d);
        }
        function k(t) {
          return ((t % 360) + 360) % 360;
        }
        let P = {
            x: "dark",
            Z: "light",
            Y: "re",
            X: "blu",
            W: "gr",
            V: "medium",
            U: "slate",
            A: "ee",
            T: "ol",
            S: "or",
            B: "ra",
            C: "lateg",
            D: "ights",
            R: "in",
            Q: "turquois",
            E: "hi",
            P: "ro",
            O: "al",
            N: "le",
            M: "de",
            L: "yello",
            F: "en",
            K: "ch",
            G: "arks",
            H: "ea",
            I: "ightg",
            J: "wh",
          },
          S = {
            OiceXe: "f0f8ff",
            antiquewEte: "faebd7",
            aqua: "ffff",
            aquamarRe: "7fffd4",
            azuY: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "0",
            blanKedOmond: "ffebcd",
            Xe: "ff",
            XeviTet: "8a2be2",
            bPwn: "a52a2a",
            burlywood: "deb887",
            caMtXe: "5f9ea0",
            KartYuse: "7fff00",
            KocTate: "d2691e",
            cSO: "ff7f50",
            cSnflowerXe: "6495ed",
            cSnsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "ffff",
            xXe: "8b",
            xcyan: "8b8b",
            xgTMnPd: "b8860b",
            xWay: "a9a9a9",
            xgYF: "6400",
            xgYy: "a9a9a9",
            xkhaki: "bdb76b",
            xmagFta: "8b008b",
            xTivegYF: "556b2f",
            xSange: "ff8c00",
            xScEd: "9932cc",
            xYd: "8b0000",
            xsOmon: "e9967a",
            xsHgYF: "8fbc8f",
            xUXe: "483d8b",
            xUWay: "2f4f4f",
            xUgYy: "2f4f4f",
            xQe: "ced1",
            xviTet: "9400d3",
            dAppRk: "ff1493",
            dApskyXe: "bfff",
            dimWay: "696969",
            dimgYy: "696969",
            dodgerXe: "1e90ff",
            fiYbrick: "b22222",
            flSOwEte: "fffaf0",
            foYstWAn: "228b22",
            fuKsia: "ff00ff",
            gaRsbSo: "dcdcdc",
            ghostwEte: "f8f8ff",
            gTd: "ffd700",
            gTMnPd: "daa520",
            Way: "808080",
            gYF: "8000",
            gYFLw: "adff2f",
            gYy: "808080",
            honeyMw: "f0fff0",
            hotpRk: "ff69b4",
            RdianYd: "cd5c5c",
            Rdigo: "4b0082",
            ivSy: "fffff0",
            khaki: "f0e68c",
            lavFMr: "e6e6fa",
            lavFMrXsh: "fff0f5",
            lawngYF: "7cfc00",
            NmoncEffon: "fffacd",
            ZXe: "add8e6",
            ZcSO: "f08080",
            Zcyan: "e0ffff",
            ZgTMnPdLw: "fafad2",
            ZWay: "d3d3d3",
            ZgYF: "90ee90",
            ZgYy: "d3d3d3",
            ZpRk: "ffb6c1",
            ZsOmon: "ffa07a",
            ZsHgYF: "20b2aa",
            ZskyXe: "87cefa",
            ZUWay: "778899",
            ZUgYy: "778899",
            ZstAlXe: "b0c4de",
            ZLw: "ffffe0",
            lime: "ff00",
            limegYF: "32cd32",
            lRF: "faf0e6",
            magFta: "ff00ff",
            maPon: "800000",
            VaquamarRe: "66cdaa",
            VXe: "cd",
            VScEd: "ba55d3",
            VpurpN: "9370db",
            VsHgYF: "3cb371",
            VUXe: "7b68ee",
            VsprRggYF: "fa9a",
            VQe: "48d1cc",
            VviTetYd: "c71585",
            midnightXe: "191970",
            mRtcYam: "f5fffa",
            mistyPse: "ffe4e1",
            moccasR: "ffe4b5",
            navajowEte: "ffdead",
            navy: "80",
            Tdlace: "fdf5e6",
            Tive: "808000",
            TivedBb: "6b8e23",
            Sange: "ffa500",
            SangeYd: "ff4500",
            ScEd: "da70d6",
            pOegTMnPd: "eee8aa",
            pOegYF: "98fb98",
            pOeQe: "afeeee",
            pOeviTetYd: "db7093",
            papayawEp: "ffefd5",
            pHKpuff: "ffdab9",
            peru: "cd853f",
            pRk: "ffc0cb",
            plum: "dda0dd",
            powMrXe: "b0e0e6",
            purpN: "800080",
            YbeccapurpN: "663399",
            Yd: "ff0000",
            Psybrown: "bc8f8f",
            PyOXe: "4169e1",
            saddNbPwn: "8b4513",
            sOmon: "fa8072",
            sandybPwn: "f4a460",
            sHgYF: "2e8b57",
            sHshell: "fff5ee",
            siFna: "a0522d",
            silver: "c0c0c0",
            skyXe: "87ceeb",
            UXe: "6a5acd",
            UWay: "708090",
            UgYy: "708090",
            snow: "fffafa",
            sprRggYF: "ff7f",
            stAlXe: "4682b4",
            tan: "d2b48c",
            teO: "8080",
            tEstN: "d8bfd8",
            tomato: "ff6347",
            Qe: "40e0d0",
            viTet: "ee82ee",
            JHt: "f5deb3",
            wEte: "ffffff",
            wEtesmoke: "f5f5f5",
            Lw: "ffff00",
            LwgYF: "9acd32",
          },
          D =
            /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
          C = (t) =>
            t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
          O = (t) =>
            t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
        function A(t, e, i) {
          if (t) {
            let s = M(t);
            (s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1))),
              (t.r = (s = w(_, s, void 0, void 0))[0]),
              (t.g = s[1]),
              (t.b = s[2]);
          }
        }
        function L(t, e) {
          return t ? Object.assign(e || {}, t) : t;
        }
        function T(t) {
          var e = { r: 0, g: 0, b: 0, a: 255 };
          return (
            Array.isArray(t)
              ? t.length >= 3 &&
                ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
                t.length > 3 && (e.a = d(t[3])))
              : ((e = L(t, { r: 0, g: 0, b: 0, a: 1 })).a = d(e.a)),
            e
          );
        }
        class E {
          get valid() {
            return this._valid;
          }
          get rgb() {
            var t = L(this._rgb);
            return t && (t.a = c(t.a)), t;
          }
          set rgb(t) {
            this._rgb = T(t);
          }
          rgbString() {
            var t;
            return this._valid
              ? (t = this._rgb) &&
                  (t.a < 255
                    ? "rgba("
                        .concat(t.r, ", ")
                        .concat(t.g, ", ")
                        .concat(t.b, ", ")
                        .concat(c(t.a), ")")
                    : "rgb("
                        .concat(t.r, ", ")
                        .concat(t.g, ", ")
                        .concat(t.b, ")"))
              : void 0;
          }
          hexString() {
            var t, e;
            let i, s;
            return this._valid
              ? ((e =
                  b((i = t = this._rgb).r) && b(i.g) && b(i.b) && b(i.a)
                    ? p
                    : m),
                t
                  ? "#" +
                    e(t.r) +
                    e(t.g) +
                    e(t.b) +
                    ((s = t.a), s < 255 ? e(s) : "")
                  : void 0)
              : void 0;
          }
          hslString() {
            return this._valid
              ? (function (t) {
                  if (!t) return;
                  let e = M(t),
                    i = e[0],
                    s = u(e[1]),
                    a = u(e[2]);
                  return t.a < 255
                    ? "hsla("
                        .concat(i, ", ")
                        .concat(s, "%, ")
                        .concat(a, "%, ")
                        .concat(c(t.a), ")")
                    : "hsl(".concat(i, ", ").concat(s, "%, ").concat(a, "%)");
                })(this._rgb)
              : void 0;
          }
          mix(t, e) {
            if (t) {
              let i,
                s = this.rgb,
                a = t.rgb,
                n = e === i ? 0.5 : e,
                r = 2 * n - 1,
                o = s.a - a.a,
                l = ((r * o == -1 ? r : (r + o) / (1 + r * o)) + 1) / 2;
              (i = 1 - l),
                (s.r = 255 & (l * s.r + i * a.r + 0.5)),
                (s.g = 255 & (l * s.g + i * a.g + 0.5)),
                (s.b = 255 & (l * s.b + i * a.b + 0.5)),
                (s.a = n * s.a + (1 - n) * a.a),
                (this.rgb = s);
            }
            return this;
          }
          interpolate(t, e) {
            return (
              t &&
                (this._rgb = (function (t, e, i) {
                  let s = O(c(t.r)),
                    a = O(c(t.g)),
                    n = O(c(t.b));
                  return {
                    r: d(C(s + i * (O(c(e.r)) - s))),
                    g: d(C(a + i * (O(c(e.g)) - a))),
                    b: d(C(n + i * (O(c(e.b)) - n))),
                    a: t.a + i * (e.a - t.a),
                  };
                })(this._rgb, t._rgb, e)),
              this
            );
          }
          clone() {
            return new E(this.rgb);
          }
          alpha(t) {
            return (this._rgb.a = d(t)), this;
          }
          clearer(t) {
            let e = this._rgb;
            return (e.a *= 1 - t), this;
          }
          greyscale() {
            let t = this._rgb,
              e = o(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
            return (t.r = t.g = t.b = e), this;
          }
          opaquer(t) {
            let e = this._rgb;
            return (e.a *= 1 + t), this;
          }
          negate() {
            let t = this._rgb;
            return (
              (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
            );
          }
          lighten(t) {
            return A(this._rgb, 2, t), this;
          }
          darken(t) {
            return A(this._rgb, 2, -t), this;
          }
          saturate(t) {
            return A(this._rgb, 1, t), this;
          }
          desaturate(t) {
            return A(this._rgb, 1, -t), this;
          }
          rotate(t) {
            var e, i;
            return (
              (e = this._rgb),
              ((i = M(e))[0] = k(i[0] + t)),
              (e.r = (i = w(_, i, void 0, void 0))[0]),
              (e.g = i[1]),
              (e.b = i[2]),
              this
            );
          }
          constructor(t) {
            let i;
            if (t instanceof E) return t;
            let s = typeof t;
            "object" === s
              ? (i = T(t))
              : "string" === s &&
                (i =
                  (function (t) {
                    var e,
                      i = t.length;
                    return (
                      "#" === t[0] &&
                        (4 === i || 5 === i
                          ? (e = {
                              r: 255 & (17 * f[t[1]]),
                              g: 255 & (17 * f[t[2]]),
                              b: 255 & (17 * f[t[3]]),
                              a: 5 === i ? 17 * f[t[4]] : 255,
                            })
                          : (7 === i || 9 === i) &&
                            (e = {
                              r: (f[t[1]] << 4) | f[t[2]],
                              g: (f[t[3]] << 4) | f[t[4]],
                              b: (f[t[5]] << 4) | f[t[6]],
                              a: 9 === i ? (f[t[7]] << 4) | f[t[8]] : 255,
                            })),
                      e
                    );
                  })(t) ||
                  (function (t) {
                    e ||
                      ((e = (function () {
                        let t,
                          e,
                          i,
                          s,
                          a,
                          n = {},
                          r = Object.keys(S),
                          o = Object.keys(P);
                        for (t = 0; t < r.length; t++) {
                          for (e = 0, s = a = r[t]; e < o.length; e++)
                            (i = o[e]), (a = a.replace(i, P[i]));
                          (i = parseInt(S[s], 16)),
                            (n[a] = [(i >> 16) & 255, (i >> 8) & 255, 255 & i]);
                        }
                        return n;
                      })()).transparent = [0, 0, 0, 0]);
                    let i = e[t.toLowerCase()];
                    return (
                      i && {
                        r: i[0],
                        g: i[1],
                        b: i[2],
                        a: 4 === i.length ? i[3] : 255,
                      }
                    );
                  })(t) ||
                  (function (t) {
                    return "r" === t.charAt(0)
                      ? (function (t) {
                          let e,
                            i,
                            s,
                            a = D.exec(t),
                            n = 255;
                          if (a) {
                            if (a[7] !== e) {
                              let t = +a[7];
                              n = a[8] ? h(t) : l(255 * t, 0, 255);
                            }
                            return (
                              (e = +a[1]),
                              (i = +a[3]),
                              (s = +a[5]),
                              (e = 255 & (a[2] ? h(e) : l(e, 0, 255))),
                              {
                                r: e,
                                g: (i = 255 & (a[4] ? h(i) : l(i, 0, 255))),
                                b: (s = 255 & (a[6] ? h(s) : l(s, 0, 255))),
                                a: n,
                              }
                            );
                          }
                        })(t)
                      : (function (t) {
                          let e,
                            i = x.exec(t),
                            s = 255;
                          if (!i) return;
                          i[5] !== e && (s = i[6] ? h(+i[5]) : d(+i[5]));
                          let a = k(+i[2]),
                            n = i[3] / 100,
                            r = i[4] / 100;
                          return {
                            r: (e =
                              "hwb" === i[1]
                                ? w(v, a, n, r)
                                : "hsv" === i[1]
                                ? w(y, a, n, r)
                                : w(_, a, n, r))[0],
                            g: e[1],
                            b: e[2],
                            a: s,
                          };
                        })(t);
                  })(t)),
              (this._rgb = i),
              (this._valid = !!i);
          }
        }
        function R() {}
        let F = (() => {
          let t = 0;
          return () => t++;
        })();
        function z(t) {
          return null == t;
        }
        function V(t) {
          if (Array.isArray && Array.isArray(t)) return !0;
          let e = Object.prototype.toString.call(t);
          return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
        }
        function I(t) {
          return (
            null !== t &&
            "[object Object]" === Object.prototype.toString.call(t)
          );
        }
        function B(t) {
          return ("number" == typeof t || t instanceof Number) && isFinite(+t);
        }
        function W(t, e) {
          return B(t) ? t : e;
        }
        function H(t, e) {
          return void 0 === t ? e : t;
        }
        let j = (t, e) =>
          "string" == typeof t && t.endsWith("%")
            ? (parseFloat(t) / 100) * e
            : +t;
        function N(t, e, i) {
          if (t && "function" == typeof t.call) return t.apply(i, e);
        }
        function U(t, e, i, s) {
          let a, n, r;
          if (V(t))
            if (((n = t.length), s))
              for (a = n - 1; a >= 0; a--) e.call(i, t[a], a);
            else for (a = 0; a < n; a++) e.call(i, t[a], a);
          else if (I(t))
            for (a = 0, n = (r = Object.keys(t)).length; a < n; a++)
              e.call(i, t[r[a]], r[a]);
        }
        function $(t, e) {
          let i, s, a, n;
          if (!t || !e || t.length !== e.length) return !1;
          for (i = 0, s = t.length; i < s; ++i)
            if (
              ((a = t[i]),
              (n = e[i]),
              a.datasetIndex !== n.datasetIndex || a.index !== n.index)
            )
              return !1;
          return !0;
        }
        function Y(t) {
          if (V(t)) return t.map(Y);
          if (I(t)) {
            let e = Object.create(null),
              i = Object.keys(t),
              s = i.length,
              a = 0;
            for (; a < s; ++a) e[i[a]] = Y(t[i[a]]);
            return e;
          }
          return t;
        }
        function X(t) {
          return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
        }
        function q(t, e, i, s) {
          if (!X(t)) return;
          let a = e[t],
            n = i[t];
          I(a) && I(n) ? K(a, n, s) : (e[t] = Y(n));
        }
        function K(t, e, i) {
          let s,
            a = V(e) ? e : [e],
            n = a.length;
          if (!I(t)) return t;
          let r = (i = i || {}).merger || q;
          for (let e = 0; e < n; ++e) {
            if (!I((s = a[e]))) continue;
            let n = Object.keys(s);
            for (let e = 0, a = n.length; e < a; ++e) r(n[e], t, s, i);
          }
          return t;
        }
        function J(t, e) {
          return K(t, e, { merger: G });
        }
        function G(t, e, i) {
          if (!X(t)) return;
          let s = e[t],
            a = i[t];
          I(s) && I(a)
            ? J(s, a)
            : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Y(a));
        }
        let Z = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
        function Q(t, e) {
          return (
            Z[e] ||
            (Z[e] = (function (t) {
              let e = (function (t) {
                let e = t.split("."),
                  i = [],
                  s = "";
                for (let t of e)
                  (s += t).endsWith("\\")
                    ? (s = s.slice(0, -1) + ".")
                    : (i.push(s), (s = ""));
                return i;
              })(t);
              return (t) => {
                for (let i of e) {
                  if ("" === i) break;
                  t = t && t[i];
                }
                return t;
              };
            })(e))
          )(t);
        }
        function tt(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }
        let te = (t) => void 0 !== t,
          ti = (t) => "function" == typeof t,
          ts = (t, e) => {
            if (t.size !== e.size) return !1;
            for (let i of t) if (!e.has(i)) return !1;
            return !0;
          },
          ta = Math.PI,
          tn = 2 * ta,
          tr = tn + ta,
          to = 1 / 0,
          tl = ta / 180,
          th = ta / 2,
          td = ta / 4,
          tc = (2 * ta) / 3,
          tu = Math.log10,
          tf = Math.sign;
        function tg(t, e, i) {
          return Math.abs(t - e) < i;
        }
        function tp(t) {
          let e = Math.round(t),
            i = Math.pow(10, Math.floor(tu((t = tg(t, e, t / 1e3) ? e : t)))),
            s = t / i;
          return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
        }
        function tm(t) {
          return (
            "symbol" != typeof t &&
            ("object" != typeof t ||
              null === t ||
              !!(
                Symbol.toPrimitive in t ||
                "toString" in t ||
                "valueOf" in t
              )) &&
            !isNaN(parseFloat(t)) &&
            isFinite(t)
          );
        }
        function tb(t, e, i) {
          let s, a, n;
          for (s = 0, a = t.length; s < a; s++)
            isNaN((n = t[s][i])) ||
              ((e.min = Math.min(e.min, n)), (e.max = Math.max(e.max, n)));
        }
        function tx(t) {
          return (ta / 180) * t;
        }
        function t_(t) {
          if (!B(t)) return;
          let e = 1,
            i = 0;
          for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
          return i;
        }
        function ty(t, e) {
          let i = e.x - t.x,
            s = e.y - t.y,
            a = Math.sqrt(i * i + s * s),
            n = Math.atan2(s, i);
          return n < -0.5 * ta && (n += tn), { angle: n, distance: a };
        }
        function tv(t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }
        function tM(t, e) {
          return ((t - e + tr) % tn) - ta;
        }
        function tw(t) {
          return ((t % tn) + tn) % tn;
        }
        function tk(t, e, i, s) {
          let a = tw(t),
            n = tw(e),
            r = tw(i),
            o = tw(n - a),
            l = tw(r - a),
            h = tw(a - n),
            d = tw(a - r);
          return a === n || a === r || (s && n === r) || (o > l && h < d);
        }
        function tP(t, e, i) {
          return Math.max(e, Math.min(i, t));
        }
        function tS(t, e, i) {
          let s =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 1e-6;
          return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
        }
        function tD(t, e, i) {
          let s;
          i = i || ((i) => t[i] < e);
          let a = t.length - 1,
            n = 0;
          for (; a - n > 1; ) i((s = (n + a) >> 1)) ? (n = s) : (a = s);
          return { lo: n, hi: a };
        }
        let tC = (t, e, i, s) =>
            tD(
              t,
              i,
              s
                ? (s) => {
                    let a = t[s][e];
                    return a < i || (a === i && t[s + 1][e] === i);
                  }
                : (s) => t[s][e] < i
            ),
          tO = (t, e, i) => tD(t, i, (s) => t[s][e] >= i),
          tA = ["push", "pop", "shift", "splice", "unshift"];
        function tL(t, e) {
          let i = t._chartjs;
          if (!i) return;
          let s = i.listeners,
            a = s.indexOf(e);
          -1 !== a && s.splice(a, 1),
            s.length > 0 ||
              (tA.forEach((e) => {
                delete t[e];
              }),
              delete t._chartjs);
        }
        function tT(t) {
          let e = new Set(t);
          return e.size === t.length ? t : Array.from(e);
        }
        let tE =
          "undefined" == typeof window
            ? function (t) {
                return t();
              }
            : window.requestAnimationFrame;
        function tR(t, e) {
          let i = [],
            s = !1;
          return function () {
            for (var a = arguments.length, n = Array(a), r = 0; r < a; r++)
              n[r] = arguments[r];
            (i = n),
              s ||
                ((s = !0),
                tE.call(window, () => {
                  (s = !1), t.apply(e, i);
                }));
          };
        }
        let tF = (t) =>
            "start" === t ? "left" : "end" === t ? "right" : "center",
          tz = (t, e, i) => ("start" === t ? e : "end" === t ? i : (e + i) / 2);
        function tV(t, e, i) {
          let s = e.length,
            a = 0,
            n = s;
          if (t._sorted) {
            let { iScale: r, vScale: o, _parsed: l } = t,
              h =
                t.dataset && t.dataset.options
                  ? t.dataset.options.spanGaps
                  : null,
              d = r.axis,
              {
                min: c,
                max: u,
                minDefined: f,
                maxDefined: g,
              } = r.getUserBounds();
            if (f) {
              if (
                ((a = Math.min(
                  tC(l, d, c).lo,
                  i ? s : tC(e, d, r.getPixelForValue(c)).lo
                )),
                h)
              ) {
                let t = l
                  .slice(0, a + 1)
                  .reverse()
                  .findIndex((t) => !z(t[o.axis]));
                a -= Math.max(0, t);
              }
              a = tP(a, 0, s - 1);
            }
            if (g) {
              let t = Math.max(
                tC(l, r.axis, u, !0).hi + 1,
                i ? 0 : tC(e, d, r.getPixelForValue(u), !0).hi + 1
              );
              if (h) {
                let e = l.slice(t - 1).findIndex((t) => !z(t[o.axis]));
                t += Math.max(0, e);
              }
              n = tP(t, a, s) - a;
            } else n = s - a;
          }
          return { start: a, count: n };
        }
        function tI(t) {
          let { xScale: e, yScale: i, _scaleRanges: s } = t,
            a = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
          if (!s) return (t._scaleRanges = a), !0;
          let n =
            s.xmin !== e.min ||
            s.xmax !== e.max ||
            s.ymin !== i.min ||
            s.ymax !== i.max;
          return Object.assign(s, a), n;
        }
        let tB = (t) => 0 === t || 1 === t,
          tW = (t, e, i) =>
            -(Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * tn) / i)),
          tH = (t, e, i) =>
            Math.pow(2, -10 * t) * Math.sin(((t - e) * tn) / i) + 1,
          tj = {
            linear: (t) => t,
            easeInQuad: (t) => t * t,
            easeOutQuad: (t) => -t * (t - 2),
            easeInOutQuad: (t) =>
              (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
            easeInCubic: (t) => t * t * t,
            easeOutCubic: (t) => (t -= 1) * t * t + 1,
            easeInOutCubic: (t) =>
              (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
            easeInQuart: (t) => t * t * t * t,
            easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
            easeInOutQuart: (t) =>
              (t /= 0.5) < 1
                ? 0.5 * t * t * t * t
                : -0.5 * ((t -= 2) * t * t * t - 2),
            easeInQuint: (t) => t * t * t * t * t,
            easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
            easeInOutQuint: (t) =>
              (t /= 0.5) < 1
                ? 0.5 * t * t * t * t * t
                : 0.5 * ((t -= 2) * t * t * t * t + 2),
            easeInSine: (t) => -Math.cos(t * th) + 1,
            easeOutSine: (t) => Math.sin(t * th),
            easeInOutSine: (t) => -0.5 * (Math.cos(ta * t) - 1),
            easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
            easeOutExpo: (t) => (1 === t ? 1 : -Math.pow(2, -10 * t) + 1),
            easeInOutExpo: (t) =>
              tB(t)
                ? t
                : t < 0.5
                ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
                : 0.5 * (-Math.pow(2, -10 * (2 * t - 1)) + 2),
            easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
            easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
            easeInOutCirc: (t) =>
              (t /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
            easeInElastic: (t) => (tB(t) ? t : tW(t, 0.075, 0.3)),
            easeOutElastic: (t) => (tB(t) ? t : tH(t, 0.075, 0.3)),
            easeInOutElastic: (t) =>
              tB(t)
                ? t
                : t < 0.5
                ? 0.5 * tW(2 * t, 0.1125, 0.45)
                : 0.5 + 0.5 * tH(2 * t - 1, 0.1125, 0.45),
            easeInBack: (t) => t * t * (2.70158 * t - 1.70158),
            easeOutBack: (t) => (t -= 1) * t * (2.70158 * t + 1.70158) + 1,
            easeInOutBack(t) {
              let e = 1.70158;
              return (t /= 0.5) < 1
                ? 0.5 * (t * t * (((e *= 1.525) + 1) * t - e))
                : 0.5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
            },
            easeInBounce: (t) => 1 - tj.easeOutBounce(1 - t),
            easeOutBounce: (t) =>
              t < 0.36363636363636365
                ? 7.5625 * t * t
                : t < 0.7272727272727273
                ? 7.5625 * (t -= 0.5454545454545454) * t + 0.75
                : t < 0.9090909090909091
                ? 7.5625 * (t -= 0.8181818181818182) * t + 0.9375
                : 7.5625 * (t -= 0.9545454545454546) * t + 0.984375,
            easeInOutBounce: (t) =>
              t < 0.5
                ? 0.5 * tj.easeInBounce(2 * t)
                : 0.5 * tj.easeOutBounce(2 * t - 1) + 0.5,
          };
        function tN(t) {
          if (t && "object" == typeof t) {
            let e = t.toString();
            return (
              "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
            );
          }
          return !1;
        }
        function tU(t) {
          return tN(t) ? t : new E(t);
        }
        function t$(t) {
          return tN(t) ? t : new E(t).saturate(0.5).darken(0.1).hexString();
        }
        let tY = ["x", "y", "borderWidth", "radius", "tension"],
          tX = ["color", "borderColor", "backgroundColor"],
          tq = new Map();
        function tK(t, e, i) {
          return (function (t, e) {
            let i = t + JSON.stringify((e = e || {})),
              s = tq.get(i);
            return s || ((s = new Intl.NumberFormat(t, e)), tq.set(i, s)), s;
          })(e, i).format(t);
        }
        let tJ = {
          values: (t) => (V(t) ? t : "" + t),
          numeric(t, e, i) {
            let s;
            if (0 === t) return "0";
            let a = this.chart.options.locale,
              n = t;
            if (i.length > 1) {
              var r, o;
              let e,
                a = Math.max(
                  Math.abs(i[0].value),
                  Math.abs(i[i.length - 1].value)
                );
              (a < 1e-4 || a > 1e15) && (s = "scientific"),
                (r = t),
                Math.abs(
                  (e =
                    (o = i).length > 3
                      ? o[2].value - o[1].value
                      : o[1].value - o[0].value)
                ) >= 1 &&
                  r !== Math.floor(r) &&
                  (e = r - Math.floor(r)),
                (n = e);
            }
            let l = tu(Math.abs(n)),
              h = isNaN(l) ? 1 : Math.max(Math.min(-1 * Math.floor(l), 20), 0),
              d = {
                notation: s,
                minimumFractionDigits: h,
                maximumFractionDigits: h,
              };
            return Object.assign(d, this.options.ticks.format), tK(t, a, d);
          },
          logarithmic(t, e, i) {
            return 0 === t
              ? "0"
              : [1, 2, 3, 5, 10, 15].includes(
                  i[e].significand || t / Math.pow(10, Math.floor(tu(t)))
                ) || e > 0.8 * i.length
              ? tJ.numeric.call(this, t, e, i)
              : "";
          },
        };
        var tG = { formatters: tJ };
        let tZ = Object.create(null),
          tQ = Object.create(null);
        function t0(t, e) {
          if (!e) return t;
          let i = e.split(".");
          for (let e = 0, s = i.length; e < s; ++e) {
            let s = i[e];
            t = t[s] || (t[s] = Object.create(null));
          }
          return t;
        }
        function t1(t, e, i) {
          return "string" == typeof e ? K(t0(t, e), i) : K(t0(t, ""), e);
        }
        var t2 = new (class {
          set(t, e) {
            return t1(this, t, e);
          }
          get(t) {
            return t0(this, t);
          }
          describe(t, e) {
            return t1(tQ, t, e);
          }
          override(t, e) {
            return t1(tZ, t, e);
          }
          route(t, e, i, s) {
            let a = t0(this, t),
              n = t0(this, i),
              r = "_" + e;
            Object.defineProperties(a, {
              [r]: { value: a[e], writable: !0 },
              [e]: {
                enumerable: !0,
                get() {
                  let t = this[r],
                    e = n[s];
                  return I(t) ? Object.assign({}, e, t) : H(t, e);
                },
                set(t) {
                  this[r] = t;
                },
              },
            });
          }
          apply(t) {
            t.forEach((t) => t(this));
          }
          constructor(t, e) {
            (this.animation = void 0),
              (this.backgroundColor = "rgba(0,0,0,0.1)"),
              (this.borderColor = "rgba(0,0,0,0.1)"),
              (this.color = "#666"),
              (this.datasets = {}),
              (this.devicePixelRatio = (t) =>
                t.chart.platform.getDevicePixelRatio()),
              (this.elements = {}),
              (this.events = [
                "mousemove",
                "mouseout",
                "click",
                "touchstart",
                "touchmove",
              ]),
              (this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null,
              }),
              (this.hover = {}),
              (this.hoverBackgroundColor = (t, e) => t$(e.backgroundColor)),
              (this.hoverBorderColor = (t, e) => t$(e.borderColor)),
              (this.hoverColor = (t, e) => t$(e.color)),
              (this.indexAxis = "x"),
              (this.interaction = {
                mode: "nearest",
                intersect: !0,
                includeInvisible: !1,
              }),
              (this.maintainAspectRatio = !0),
              (this.onHover = null),
              (this.onClick = null),
              (this.parsing = !0),
              (this.plugins = {}),
              (this.responsive = !0),
              (this.scale = void 0),
              (this.scales = {}),
              (this.showLine = !0),
              (this.drawActiveElementsOnTop = !0),
              this.describe(t),
              this.apply(e);
          }
        })(
          {
            _scriptable: (t) => !t.startsWith("on"),
            _indexable: (t) => "events" !== t,
            hover: { _fallback: "interaction" },
            interaction: { _scriptable: !1, _indexable: !1 },
          },
          [
            function (t) {
              t.set("animation", {
                delay: void 0,
                duration: 1e3,
                easing: "easeOutQuart",
                fn: void 0,
                from: void 0,
                loop: void 0,
                to: void 0,
                type: void 0,
              }),
                t.describe("animation", {
                  _fallback: !1,
                  _indexable: !1,
                  _scriptable: (t) =>
                    "onProgress" !== t && "onComplete" !== t && "fn" !== t,
                }),
                t.set("animations", {
                  colors: { type: "color", properties: tX },
                  numbers: { type: "number", properties: tY },
                }),
                t.describe("animations", { _fallback: "animation" }),
                t.set("transitions", {
                  active: { animation: { duration: 400 } },
                  resize: { animation: { duration: 0 } },
                  show: {
                    animations: {
                      colors: { from: "transparent" },
                      visible: { type: "boolean", duration: 0 },
                    },
                  },
                  hide: {
                    animations: {
                      colors: { to: "transparent" },
                      visible: {
                        type: "boolean",
                        easing: "linear",
                        fn: (t) => 0 | t,
                      },
                    },
                  },
                });
            },
            function (t) {
              t.set("layout", {
                autoPadding: !0,
                padding: { top: 0, right: 0, bottom: 0, left: 0 },
              });
            },
            function (t) {
              t.set("scale", {
                display: !0,
                offset: !1,
                reverse: !1,
                beginAtZero: !1,
                bounds: "ticks",
                clip: !0,
                grace: 0,
                grid: {
                  display: !0,
                  lineWidth: 1,
                  drawOnChartArea: !0,
                  drawTicks: !0,
                  tickLength: 8,
                  tickWidth: (t, e) => e.lineWidth,
                  tickColor: (t, e) => e.color,
                  offset: !1,
                },
                border: { display: !0, dash: [], dashOffset: 0, width: 1 },
                title: {
                  display: !1,
                  text: "",
                  padding: { top: 4, bottom: 4 },
                },
                ticks: {
                  minRotation: 0,
                  maxRotation: 50,
                  mirror: !1,
                  textStrokeWidth: 0,
                  textStrokeColor: "",
                  padding: 3,
                  display: !0,
                  autoSkip: !0,
                  autoSkipPadding: 3,
                  labelOffset: 0,
                  callback: tG.formatters.values,
                  minor: {},
                  major: {},
                  align: "center",
                  crossAlign: "near",
                  showLabelBackdrop: !1,
                  backdropColor: "rgba(255, 255, 255, 0.75)",
                  backdropPadding: 2,
                },
              }),
                t.route("scale.ticks", "color", "", "color"),
                t.route("scale.grid", "color", "", "borderColor"),
                t.route("scale.border", "color", "", "borderColor"),
                t.route("scale.title", "color", "", "color"),
                t.describe("scale", {
                  _fallback: !1,
                  _scriptable: (t) =>
                    !t.startsWith("before") &&
                    !t.startsWith("after") &&
                    "callback" !== t &&
                    "parser" !== t,
                  _indexable: (t) =>
                    "borderDash" !== t &&
                    "tickBorderDash" !== t &&
                    "dash" !== t,
                }),
                t.describe("scales", { _fallback: "scale" }),
                t.describe("scale.ticks", {
                  _scriptable: (t) =>
                    "backdropPadding" !== t && "callback" !== t,
                  _indexable: (t) => "backdropPadding" !== t,
                });
            },
          ]
        );
        function t5(t, e, i, s, a) {
          let n = e[a];
          return (
            n || ((n = e[a] = t.measureText(a).width), i.push(a)),
            n > s && (s = n),
            s
          );
        }
        function t3(t, e, i) {
          let s = t.currentDevicePixelRatio,
            a = 0 !== i ? Math.max(i / 2, 0.5) : 0;
          return Math.round((e - a) * s) / s + a;
        }
        function t8(t, e) {
          (e || t) &&
            ((e = e || t.getContext("2d")).save(),
            e.resetTransform(),
            e.clearRect(0, 0, t.width, t.height),
            e.restore());
        }
        function t4(t, e, i, s) {
          t6(t, e, i, s, null);
        }
        function t6(t, e, i, s, a) {
          let n,
            r,
            o,
            l,
            h,
            d,
            c,
            u,
            f = e.pointStyle,
            g = e.rotation,
            p = e.radius,
            m = (g || 0) * tl;
          if (
            f &&
            "object" == typeof f &&
            ("[object HTMLImageElement]" === (n = f.toString()) ||
              "[object HTMLCanvasElement]" === n)
          ) {
            t.save(),
              t.translate(i, s),
              t.rotate(m),
              t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
              t.restore();
            return;
          }
          if (!isNaN(p) && !(p <= 0)) {
            switch ((t.beginPath(), f)) {
              default:
                a ? t.ellipse(i, s, a / 2, p, 0, 0, tn) : t.arc(i, s, p, 0, tn),
                  t.closePath();
                break;
              case "triangle":
                (d = a ? a / 2 : p),
                  t.moveTo(i + Math.sin(m) * d, s - Math.cos(m) * p),
                  (m += tc),
                  t.lineTo(i + Math.sin(m) * d, s - Math.cos(m) * p),
                  (m += tc),
                  t.lineTo(i + Math.sin(m) * d, s - Math.cos(m) * p),
                  t.closePath();
                break;
              case "rectRounded":
                (h = 0.516 * p),
                  (r = Math.cos(m + td) * (l = p - h)),
                  (c = Math.cos(m + td) * (a ? a / 2 - h : l)),
                  (o = Math.sin(m + td) * l),
                  (u = Math.sin(m + td) * (a ? a / 2 - h : l)),
                  t.arc(i - c, s - o, h, m - ta, m - th),
                  t.arc(i + u, s - r, h, m - th, m),
                  t.arc(i + c, s + o, h, m, m + th),
                  t.arc(i - u, s + r, h, m + th, m + ta),
                  t.closePath();
                break;
              case "rect":
                if (!g) {
                  (l = Math.SQRT1_2 * p),
                    (d = a ? a / 2 : l),
                    t.rect(i - d, s - l, 2 * d, 2 * l);
                  break;
                }
                m += td;
              case "rectRot":
                (c = Math.cos(m) * (a ? a / 2 : p)),
                  (r = Math.cos(m) * p),
                  (o = Math.sin(m) * p),
                  (u = Math.sin(m) * (a ? a / 2 : p)),
                  t.moveTo(i - c, s - o),
                  t.lineTo(i + u, s - r),
                  t.lineTo(i + c, s + o),
                  t.lineTo(i - u, s + r),
                  t.closePath();
                break;
              case "crossRot":
                m += td;
              case "cross":
                (c = Math.cos(m) * (a ? a / 2 : p)),
                  (r = Math.cos(m) * p),
                  (o = Math.sin(m) * p),
                  (u = Math.sin(m) * (a ? a / 2 : p)),
                  t.moveTo(i - c, s - o),
                  t.lineTo(i + c, s + o),
                  t.moveTo(i + u, s - r),
                  t.lineTo(i - u, s + r);
                break;
              case "star":
                (c = Math.cos(m) * (a ? a / 2 : p)),
                  (r = Math.cos(m) * p),
                  (o = Math.sin(m) * p),
                  (u = Math.sin(m) * (a ? a / 2 : p)),
                  t.moveTo(i - c, s - o),
                  t.lineTo(i + c, s + o),
                  t.moveTo(i + u, s - r),
                  t.lineTo(i - u, s + r),
                  (m += td),
                  (c = Math.cos(m) * (a ? a / 2 : p)),
                  (r = Math.cos(m) * p),
                  (o = Math.sin(m) * p),
                  (u = Math.sin(m) * (a ? a / 2 : p)),
                  t.moveTo(i - c, s - o),
                  t.lineTo(i + c, s + o),
                  t.moveTo(i + u, s - r),
                  t.lineTo(i - u, s + r);
                break;
              case "line":
                (r = a ? a / 2 : Math.cos(m) * p),
                  (o = Math.sin(m) * p),
                  t.moveTo(i - r, s - o),
                  t.lineTo(i + r, s + o);
                break;
              case "dash":
                t.moveTo(i, s),
                  t.lineTo(
                    i + Math.cos(m) * (a ? a / 2 : p),
                    s + Math.sin(m) * p
                  );
                break;
              case !1:
                t.closePath();
            }
            t.fill(), e.borderWidth > 0 && t.stroke();
          }
        }
        function t7(t, e, i) {
          return (
            (i = i || 0.5),
            !e ||
              (t &&
                t.x > e.left - i &&
                t.x < e.right + i &&
                t.y > e.top - i &&
                t.y < e.bottom + i)
          );
        }
        function t9(t, e) {
          t.save(),
            t.beginPath(),
            t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
            t.clip();
        }
        function et(t) {
          t.restore();
        }
        function ee(t, e, i, s, a) {
          if (!e) return t.lineTo(i.x, i.y);
          if ("middle" === a) {
            let s = (e.x + i.x) / 2;
            t.lineTo(s, e.y), t.lineTo(s, i.y);
          } else
            ("after" === a) != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
          t.lineTo(i.x, i.y);
        }
        function ei(t, e, i, s) {
          if (!e) return t.lineTo(i.x, i.y);
          t.bezierCurveTo(
            s ? e.cp1x : e.cp2x,
            s ? e.cp1y : e.cp2y,
            s ? i.cp2x : i.cp1x,
            s ? i.cp2y : i.cp1y,
            i.x,
            i.y
          );
        }
        function es(t, e, i, s, a) {
          let n,
            r,
            o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            l = V(e) ? e : [e],
            h = o.strokeWidth > 0 && "" !== o.strokeColor;
          for (
            t.save(),
              t.font = a.string,
              o.translation && t.translate(o.translation[0], o.translation[1]),
              z(o.rotation) || t.rotate(o.rotation),
              o.color && (t.fillStyle = o.color),
              o.textAlign && (t.textAlign = o.textAlign),
              o.textBaseline && (t.textBaseline = o.textBaseline),
              n = 0;
            n < l.length;
            ++n
          )
            (r = l[n]),
              o.backdrop &&
                (function (t, e) {
                  let i = t.fillStyle;
                  (t.fillStyle = e.color),
                    t.fillRect(e.left, e.top, e.width, e.height),
                    (t.fillStyle = i);
                })(t, o.backdrop),
              h &&
                (o.strokeColor && (t.strokeStyle = o.strokeColor),
                z(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
                t.strokeText(r, i, s, o.maxWidth)),
              t.fillText(r, i, s, o.maxWidth),
              (function (t, e, i, s, a) {
                if (a.strikethrough || a.underline) {
                  let n = t.measureText(s),
                    r = e - n.actualBoundingBoxLeft,
                    o = e + n.actualBoundingBoxRight,
                    l = i - n.actualBoundingBoxAscent,
                    h = i + n.actualBoundingBoxDescent,
                    d = a.strikethrough ? (l + h) / 2 : h;
                  (t.strokeStyle = t.fillStyle),
                    t.beginPath(),
                    (t.lineWidth = a.decorationWidth || 2),
                    t.moveTo(r, d),
                    t.lineTo(o, d),
                    t.stroke();
                }
              })(t, i, s, r, o),
              (s += Number(a.lineHeight));
          t.restore();
        }
        function ea(t, e) {
          let { x: i, y: s, w: a, h: n, radius: r } = e;
          t.arc(i + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * ta, ta, !0),
            t.lineTo(i, s + n - r.bottomLeft),
            t.arc(
              i + r.bottomLeft,
              s + n - r.bottomLeft,
              r.bottomLeft,
              ta,
              th,
              !0
            ),
            t.lineTo(i + a - r.bottomRight, s + n),
            t.arc(
              i + a - r.bottomRight,
              s + n - r.bottomRight,
              r.bottomRight,
              th,
              0,
              !0
            ),
            t.lineTo(i + a, s + r.topRight),
            t.arc(i + a - r.topRight, s + r.topRight, r.topRight, 0, -th, !0),
            t.lineTo(i + r.topLeft, s);
        }
        let en = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
          er =
            /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,
          eo = (t) => +t || 0;
        function el(t, e) {
          let i = {},
            s = I(e),
            a = s ? Object.keys(e) : e,
            n = I(t) ? (s ? (i) => H(t[i], t[e[i]]) : (e) => t[e]) : () => t;
          for (let t of a) i[t] = eo(n(t));
          return i;
        }
        function eh(t) {
          return el(t, { top: "y", right: "x", bottom: "y", left: "x" });
        }
        function ed(t) {
          return el(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
        }
        function ec(t) {
          let e = eh(t);
          return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
        }
        function eu(t, e) {
          (t = t || {}), (e = e || t2.font);
          let i = H(t.size, e.size);
          "string" == typeof i && (i = parseInt(i, 10));
          let s = H(t.style, e.style);
          s &&
            !("" + s).match(er) &&
            (console.warn('Invalid font style specified: "' + s + '"'),
            (s = void 0));
          let a = {
            family: H(t.family, e.family),
            lineHeight: (function (t, e) {
              let i = ("" + t).match(en);
              if (!i || "normal" === i[1]) return 1.2 * e;
              switch (((t = +i[2]), i[3])) {
                case "px":
                  return t;
                case "%":
                  t /= 100;
              }
              return e * t;
            })(H(t.lineHeight, e.lineHeight), i),
            size: i,
            style: s,
            weight: H(t.weight, e.weight),
            string: "",
          };
          return (
            (a.string =
              !a || z(a.size) || z(a.family)
                ? null
                : (a.style ? a.style + " " : "") +
                  (a.weight ? a.weight + " " : "") +
                  a.size +
                  "px " +
                  a.family),
            a
          );
        }
        function ef(t, e, i, s) {
          let a,
            n,
            r,
            o = !0;
          for (a = 0, n = t.length; a < n; ++a)
            if (
              void 0 !== (r = t[a]) &&
              (void 0 !== e && "function" == typeof r && ((r = r(e)), (o = !1)),
              void 0 !== i && V(r) && ((r = r[i % r.length]), (o = !1)),
              void 0 !== r)
            )
              return s && !o && (s.cacheable = !1), r;
        }
        function eg(t, e) {
          return Object.assign(Object.create(t), e);
        }
        function ep(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [""],
            i = arguments.length > 2 ? arguments[2] : void 0,
            s = arguments.length > 3 ? arguments[3] : void 0,
            a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : () => t[0],
            n = i || t;
          return (
            void 0 === s && (s = ek("_fallback", t)),
            new Proxy(
              {
                [Symbol.toStringTag]: "Object",
                _cacheable: !0,
                _scopes: t,
                _rootScopes: n,
                _fallback: s,
                _getTarget: a,
                override: (i) => ep([i, ...t], e, n, s),
              },
              {
                deleteProperty: (e, i) => (
                  delete e[i], delete e._keys, delete t[0][i], !0
                ),
                get: (i, s) =>
                  ey(i, s, () =>
                    (function (t, e, i, s) {
                      let a;
                      for (let n of e)
                        if (void 0 !== (a = ek(ex(n, t), i)))
                          return e_(t, a) ? eM(i, s, t, a) : a;
                    })(s, e, t, i)
                  ),
                getOwnPropertyDescriptor: (t, e) =>
                  Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
                getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
                has: (t, e) => eP(t).includes(e),
                ownKeys: (t) => eP(t),
                set(t, e, i) {
                  let s = t._storage || (t._storage = a());
                  return (t[e] = s[e] = i), delete t._keys, !0;
                },
              }
            )
          );
        }
        function em(t, e, i, s) {
          return new Proxy(
            {
              _cacheable: !1,
              _proxy: t,
              _context: e,
              _subProxy: i,
              _stack: new Set(),
              _descriptors: eb(t, s),
              setContext: (e) => em(t, e, i, s),
              override: (a) => em(t.override(a), e, i, s),
            },
            {
              deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
              get: (t, e, i) =>
                ey(t, e, () =>
                  (function (t, e, i) {
                    let {
                        _proxy: s,
                        _context: a,
                        _subProxy: n,
                        _descriptors: r,
                      } = t,
                      o = s[e];
                    return (
                      ti(o) &&
                        r.isScriptable(e) &&
                        (o = (function (t, e, i, s) {
                          let {
                            _proxy: a,
                            _context: n,
                            _subProxy: r,
                            _stack: o,
                          } = i;
                          if (o.has(t))
                            throw Error(
                              "Recursion detected: " +
                                Array.from(o).join("->") +
                                "->" +
                                t
                            );
                          o.add(t);
                          let l = e(n, r || s);
                          return (
                            o.delete(t),
                            e_(t, l) && (l = eM(a._scopes, a, t, l)),
                            l
                          );
                        })(e, o, t, i)),
                      V(o) &&
                        o.length &&
                        (o = (function (t, e, i, s) {
                          let {
                            _proxy: a,
                            _context: n,
                            _subProxy: r,
                            _descriptors: o,
                          } = i;
                          if (void 0 !== n.index && s(t))
                            return e[n.index % e.length];
                          if (I(e[0])) {
                            let i = e,
                              s = a._scopes.filter((t) => t !== i);
                            for (let l of ((e = []), i)) {
                              let i = eM(s, a, t, l);
                              e.push(em(i, n, r && r[t], o));
                            }
                          }
                          return e;
                        })(e, o, t, r.isIndexable)),
                      e_(e, o) && (o = em(o, a, n && n[e], r)),
                      o
                    );
                  })(t, e, i)
                ),
              getOwnPropertyDescriptor: (e, i) =>
                e._descriptors.allKeys
                  ? Reflect.has(t, i)
                    ? { enumerable: !0, configurable: !0 }
                    : void 0
                  : Reflect.getOwnPropertyDescriptor(t, i),
              getPrototypeOf: () => Reflect.getPrototypeOf(t),
              has: (e, i) => Reflect.has(t, i),
              ownKeys: () => Reflect.ownKeys(t),
              set: (e, i, s) => ((t[i] = s), delete e[i], !0),
            }
          );
        }
        function eb(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { scriptable: !0, indexable: !0 },
            {
              _scriptable: i = e.scriptable,
              _indexable: s = e.indexable,
              _allKeys: a = e.allKeys,
            } = t;
          return {
            allKeys: a,
            scriptable: i,
            indexable: s,
            isScriptable: ti(i) ? i : () => i,
            isIndexable: ti(s) ? s : () => s,
          };
        }
        let ex = (t, e) => (t ? t + tt(e) : e),
          e_ = (t, e) =>
            I(e) &&
            "adapters" !== t &&
            (null === Object.getPrototypeOf(e) || e.constructor === Object);
        function ey(t, e, i) {
          if (Object.prototype.hasOwnProperty.call(t, e) || "constructor" === e)
            return t[e];
          let s = i();
          return (t[e] = s), s;
        }
        let ev = (t, e) =>
          !0 === t ? e : "string" == typeof t ? Q(e, t) : void 0;
        function eM(t, e, i, s) {
          var a;
          let n = e._rootScopes,
            r = ((a = e._fallback), ti(a) ? a(i, s) : a),
            o = [...t, ...n],
            l = new Set();
          l.add(s);
          let h = ew(l, o, i, r || i, s);
          return (
            null !== h &&
            (void 0 === r || r === i || null !== (h = ew(l, o, r, h, s))) &&
            ep(Array.from(l), [""], n, r, () =>
              (function (t, e, i) {
                let s = t._getTarget();
                e in s || (s[e] = {});
                let a = s[e];
                return V(a) && I(i) ? i : a || {};
              })(e, i, s)
            )
          );
        }
        function ew(t, e, i, s, a) {
          for (; i; )
            i = (function (t, e, i, s, a) {
              for (let r of e) {
                let e = ev(i, r);
                if (e) {
                  var n;
                  t.add(e);
                  let r = ((n = e._fallback), ti(n) ? n(i, a) : n);
                  if (void 0 !== r && r !== i && r !== s) return r;
                } else if (!1 === e && void 0 !== s && i !== s) return null;
              }
              return !1;
            })(t, e, i, s, a);
          return i;
        }
        function ek(t, e) {
          for (let i of e) {
            if (!i) continue;
            let e = i[t];
            if (void 0 !== e) return e;
          }
        }
        function eP(t) {
          let e = t._keys;
          return (
            e ||
              (e = t._keys =
                (function (t) {
                  let e = new Set();
                  for (let i of t)
                    for (let t of Object.keys(i).filter(
                      (t) => !t.startsWith("_")
                    ))
                      e.add(t);
                  return Array.from(e);
                })(t._scopes)),
            e
          );
        }
        function eS(t, e, i, s) {
          let a,
            n,
            r,
            { iScale: o } = t,
            { key: l = "r" } = this._parsing,
            h = Array(s);
          for (a = 0; a < s; ++a)
            (r = e[(n = a + i)]), (h[a] = { r: o.parse(Q(r, l), n) });
          return h;
        }
        let eD = Number.EPSILON || 1e-14,
          eC = (t, e) => e < t.length && !t[e].skip && t[e],
          eO = (t) => ("x" === t ? "y" : "x");
        function eA(t, e, i) {
          return Math.max(Math.min(t, i), e);
        }
        function eL() {
          return "undefined" != typeof window && "undefined" != typeof document;
        }
        function eT(t) {
          let e = t.parentNode;
          return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
        }
        function eE(t, e, i) {
          let s;
          return (
            "string" == typeof t
              ? ((s = parseInt(t, 10)),
                -1 !== t.indexOf("%") && (s = (s / 100) * e.parentNode[i]))
              : (s = t),
            s
          );
        }
        let eR = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null),
          eF = ["top", "right", "bottom", "left"];
        function ez(t, e, i) {
          let s = {};
          i = i ? "-" + i : "";
          for (let a = 0; a < 4; a++) {
            let n = eF[a];
            s[n] = parseFloat(t[e + "-" + n + i]) || 0;
          }
          return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
        }
        function eV(t, e) {
          if ("native" in t) return t;
          let { canvas: i, currentDevicePixelRatio: s } = e,
            a = eR(i),
            n = "border-box" === a.boxSizing,
            r = ez(a, "padding"),
            o = ez(a, "border", "width"),
            {
              x: l,
              y: h,
              box: d,
            } = (function (t, e) {
              let i,
                s,
                a,
                n = t.touches,
                r = n && n.length ? n[0] : t,
                { offsetX: o, offsetY: l } = r,
                h = !1;
              if (((a = t.target), (o > 0 || l > 0) && (!a || !a.shadowRoot)))
                (i = o), (s = l);
              else {
                let t = e.getBoundingClientRect();
                (i = r.clientX - t.left), (s = r.clientY - t.top), (h = !0);
              }
              return { x: i, y: s, box: h };
            })(t, i),
            c = r.left + (d && o.left),
            u = r.top + (d && o.top),
            { width: f, height: g } = e;
          return (
            n && ((f -= r.width + o.width), (g -= r.height + o.height)),
            {
              x: Math.round((((l - c) / f) * i.width) / s),
              y: Math.round((((h - u) / g) * i.height) / s),
            }
          );
        }
        let eI = (t) => Math.round(10 * t) / 10;
        function eB(t, e, i) {
          let s = e || 1,
            a = Math.floor(t.height * s),
            n = Math.floor(t.width * s);
          (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
          let r = t.canvas;
          return (
            r.style &&
              (i || (!r.style.height && !r.style.width)) &&
              ((r.style.height = "".concat(t.height, "px")),
              (r.style.width = "".concat(t.width, "px"))),
            (t.currentDevicePixelRatio !== s ||
              r.height !== a ||
              r.width !== n) &&
              ((t.currentDevicePixelRatio = s),
              (r.height = a),
              (r.width = n),
              t.ctx.setTransform(s, 0, 0, s, 0, 0),
              !0)
          );
        }
        let eW = (function () {
          let t = !1;
          try {
            let e = {
              get passive() {
                return (t = !0), !1;
              },
            };
            eL() &&
              (window.addEventListener("test", null, e),
              window.removeEventListener("test", null, e));
          } catch (t) {}
          return t;
        })();
        function eH(t, e) {
          let i = eR(t).getPropertyValue(e),
            s = i && i.match(/^(\d+)(\.\d+)?px$/);
          return s ? +s[1] : void 0;
        }
        function ej(t, e, i, s) {
          return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
        }
        function eN(t, e, i, s) {
          return {
            x: t.x + i * (e.x - t.x),
            y:
              "middle" === s
                ? i < 0.5
                  ? t.y
                  : e.y
                : "after" === s
                ? i < 1
                  ? t.y
                  : e.y
                : i > 0
                ? e.y
                : t.y,
          };
        }
        function eU(t, e, i, s) {
          let a = { x: t.cp2x, y: t.cp2y },
            n = { x: e.cp1x, y: e.cp1y },
            r = ej(t, a, i),
            o = ej(a, n, i),
            l = ej(n, e, i),
            h = ej(r, o, i),
            d = ej(o, l, i);
          return ej(h, d, i);
        }
        function e$(t, e, i) {
          var s;
          return t
            ? ((s = i),
              {
                x: (t) => e + e + s - t,
                setWidth(t) {
                  s = t;
                },
                textAlign: (t) =>
                  "center" === t ? t : "right" === t ? "left" : "right",
                xPlus: (t, e) => t - e,
                leftForLtr: (t, e) => t - e,
              })
            : {
                x: (t) => t,
                setWidth(t) {},
                textAlign: (t) => t,
                xPlus: (t, e) => t + e,
                leftForLtr: (t, e) => t,
              };
        }
        function eY(t, e) {
          let i, s;
          ("ltr" === e || "rtl" === e) &&
            ((s = [
              (i = t.canvas.style).getPropertyValue("direction"),
              i.getPropertyPriority("direction"),
            ]),
            i.setProperty("direction", e, "important"),
            (t.prevTextDirection = s));
        }
        function eX(t, e) {
          void 0 !== e &&
            (delete t.prevTextDirection,
            t.canvas.style.setProperty("direction", e[0], e[1]));
        }
        function eq(t) {
          return "angle" === t
            ? { between: tk, compare: tM, normalize: tw }
            : { between: tS, compare: (t, e) => t - e, normalize: (t) => t };
        }
        function eK(t) {
          let { start: e, end: i, count: s, loop: a, style: n } = t;
          return {
            start: e % s,
            end: i % s,
            loop: a && (i - e + 1) % s == 0,
            style: n,
          };
        }
        function eJ(t, e, i) {
          let s, a, n;
          if (!i) return [t];
          let { property: r, start: o, end: l } = i,
            h = e.length,
            { compare: d, between: c, normalize: u } = eq(r),
            {
              start: f,
              end: g,
              loop: p,
              style: m,
            } = (function (t, e, i) {
              let s,
                { property: a, start: n, end: r } = i,
                { between: o, normalize: l } = eq(a),
                h = e.length,
                { start: d, end: c, loop: u } = t;
              if (u) {
                for (
                  d += h, c += h, s = 0;
                  s < h && o(l(e[d % h][a]), n, r);
                  ++s
                )
                  d--, c--;
                (d %= h), (c %= h);
              }
              return (
                c < d && (c += h), { start: d, end: c, loop: u, style: t.style }
              );
            })(t, e, i),
            b = [],
            x = !1,
            _ = null,
            y = () => x || (c(o, n, s) && 0 !== d(o, n)),
            v = () => !x || 0 === d(l, s) || c(l, n, s);
          for (let t = f, i = f; t <= g; ++t)
            (a = e[t % h]).skip ||
              ((s = u(a[r])) !== n &&
                ((x = c(s, o, l)),
                null === _ && y() && (_ = 0 === d(s, o) ? t : i),
                null !== _ &&
                  v() &&
                  (b.push(
                    eK({ start: _, end: t, loop: p, count: h, style: m })
                  ),
                  (_ = null)),
                (i = t),
                (n = s)));
          return (
            null !== _ &&
              b.push(eK({ start: _, end: g, loop: p, count: h, style: m })),
            b
          );
        }
        function eG(t, e) {
          let i = [],
            s = t.segments;
          for (let a = 0; a < s.length; a++) {
            let n = eJ(s[a], t.points, e);
            n.length && i.push(...n);
          }
          return i;
        }
        function eZ(t, e, i, s) {
          return s && s.setContext && i
            ? (function (t, e, i, s) {
                let a = t._chart.getContext(),
                  n = eQ(t.options),
                  {
                    _datasetIndex: r,
                    options: { spanGaps: o },
                  } = t,
                  l = i.length,
                  h = [],
                  d = n,
                  c = e[0].start,
                  u = c;
                function f(t, e, s, a) {
                  let n = o ? -1 : 1;
                  if (t !== e) {
                    for (t += l; i[t % l].skip; ) t -= n;
                    for (; i[e % l].skip; ) e += n;
                    t % l != e % l &&
                      (h.push({ start: t % l, end: e % l, loop: s, style: a }),
                      (d = a),
                      (c = e % l));
                  }
                }
                for (let t of e) {
                  let e,
                    n = i[(c = o ? c : t.start) % l];
                  for (u = c + 1; u <= t.end; u++) {
                    let o = i[u % l];
                    (function (t, e) {
                      if (!e) return !1;
                      let i = [],
                        s = function (t, e) {
                          return tN(e)
                            ? (i.includes(e) || i.push(e), i.indexOf(e))
                            : e;
                        };
                      return JSON.stringify(t, s) !== JSON.stringify(e, s);
                    })(
                      (e = eQ(
                        s.setContext(
                          eg(a, {
                            type: "segment",
                            p0: n,
                            p1: o,
                            p0DataIndex: (u - 1) % l,
                            p1DataIndex: u % l,
                            datasetIndex: r,
                          })
                        )
                      )),
                      d
                    ) && f(c, u - 1, t.loop, d),
                      (n = o),
                      (d = e);
                  }
                  c < u - 1 && f(c, u - 1, t.loop, d);
                }
                return h;
              })(t, e, i, s)
            : e;
        }
        function eQ(t) {
          return {
            backgroundColor: t.backgroundColor,
            borderCapStyle: t.borderCapStyle,
            borderDash: t.borderDash,
            borderDashOffset: t.borderDashOffset,
            borderJoinStyle: t.borderJoinStyle,
            borderWidth: t.borderWidth,
            borderColor: t.borderColor,
          };
        }
        function e0(t, e, i) {
          return t.options.clip ? t[i] : e[i];
        }
        function e1(t, e) {
          let i = e._clip;
          if (i.disabled) return !1;
          let s = (function (t, e) {
            let { xScale: i, yScale: s } = t;
            return i && s
              ? {
                  left: e0(i, e, "left"),
                  right: e0(i, e, "right"),
                  top: e0(s, e, "top"),
                  bottom: e0(s, e, "bottom"),
                }
              : e;
          })(e, t.chartArea);
          return {
            left: !1 === i.left ? 0 : s.left - (!0 === i.left ? 0 : i.left),
            right:
              !1 === i.right
                ? t.width
                : s.right + (!0 === i.right ? 0 : i.right),
            top: !1 === i.top ? 0 : s.top - (!0 === i.top ? 0 : i.top),
            bottom:
              !1 === i.bottom
                ? t.height
                : s.bottom + (!0 === i.bottom ? 0 : i.bottom),
          };
        }
        var e2 = new (class {
          _notify(t, e, i, s) {
            let a = e.listeners[s],
              n = e.duration;
            a.forEach((s) =>
              s({
                chart: t,
                initial: e.initial,
                numSteps: n,
                currentStep: Math.min(i - e.start, n),
              })
            );
          }
          _refresh() {
            this._request ||
              ((this._running = !0),
              (this._request = tE.call(window, () => {
                this._update(),
                  (this._request = null),
                  this._running && this._refresh();
              })));
          }
          _update() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Date.now(),
              e = 0;
            this._charts.forEach((i, s) => {
              let a;
              if (!i.running || !i.items.length) return;
              let n = i.items,
                r = n.length - 1,
                o = !1;
              for (; r >= 0; --r)
                (a = n[r])._active
                  ? (a._total > i.duration && (i.duration = a._total),
                    a.tick(t),
                    (o = !0))
                  : ((n[r] = n[n.length - 1]), n.pop());
              o && (s.draw(), this._notify(s, i, t, "progress")),
                n.length ||
                  ((i.running = !1),
                  this._notify(s, i, t, "complete"),
                  (i.initial = !1)),
                (e += n.length);
            }),
              (this._lastDate = t),
              0 === e && (this._running = !1);
          }
          _getAnims(t) {
            let e = this._charts,
              i = e.get(t);
            return (
              i ||
                ((i = {
                  running: !1,
                  initial: !0,
                  items: [],
                  listeners: { complete: [], progress: [] },
                }),
                e.set(t, i)),
              i
            );
          }
          listen(t, e, i) {
            this._getAnims(t).listeners[e].push(i);
          }
          add(t, e) {
            e && e.length && this._getAnims(t).items.push(...e);
          }
          has(t) {
            return this._getAnims(t).items.length > 0;
          }
          start(t) {
            let e = this._charts.get(t);
            e &&
              ((e.running = !0),
              (e.start = Date.now()),
              (e.duration = e.items.reduce(
                (t, e) => Math.max(t, e._duration),
                0
              )),
              this._refresh());
          }
          running(t) {
            if (!this._running) return !1;
            let e = this._charts.get(t);
            return !!e && !!e.running && !!e.items.length;
          }
          stop(t) {
            let e = this._charts.get(t);
            if (!e || !e.items.length) return;
            let i = e.items,
              s = i.length - 1;
            for (; s >= 0; --s) i[s].cancel();
            (e.items = []), this._notify(t, e, Date.now(), "complete");
          }
          remove(t) {
            return this._charts.delete(t);
          }
          constructor() {
            (this._request = null),
              (this._charts = new Map()),
              (this._running = !1),
              (this._lastDate = void 0);
          }
        })();
        let e5 = "transparent",
          e3 = {
            boolean: (t, e, i) => (i > 0.5 ? e : t),
            color(t, e, i) {
              let s = tU(t || e5),
                a = s.valid && tU(e || e5);
              return a && a.valid ? a.mix(s, i).hexString() : e;
            },
            number: (t, e, i) => t + (e - t) * i,
          };
        class e8 {
          active() {
            return this._active;
          }
          update(t, e, i) {
            if (this._active) {
              this._notify(!1);
              let s = this._target[this._prop],
                a = i - this._start,
                n = this._duration - a;
              (this._start = i),
                (this._duration = Math.floor(Math.max(n, t.duration))),
                (this._total += a),
                (this._loop = !!t.loop),
                (this._to = ef([t.to, e, s, t.from])),
                (this._from = ef([t.from, s, e]));
            }
          }
          cancel() {
            this._active &&
              (this.tick(Date.now()), (this._active = !1), this._notify(!1));
          }
          tick(t) {
            let e,
              i = t - this._start,
              s = this._duration,
              a = this._prop,
              n = this._from,
              r = this._loop,
              o = this._to;
            if (((this._active = n !== o && (r || i < s)), !this._active)) {
              (this._target[a] = o), this._notify(!0);
              return;
            }
            if (i < 0) {
              this._target[a] = n;
              return;
            }
            (e = (i / s) % 2),
              (e = r && e > 1 ? 2 - e : e),
              (e = this._easing(Math.min(1, Math.max(0, e)))),
              (this._target[a] = this._fn(n, o, e));
          }
          wait() {
            let t = this._promises || (this._promises = []);
            return new Promise((e, i) => {
              t.push({ res: e, rej: i });
            });
          }
          _notify(t) {
            let e = t ? "res" : "rej",
              i = this._promises || [];
            for (let t = 0; t < i.length; t++) i[t][e]();
          }
          constructor(t, e, i, s) {
            let a = e[i];
            s = ef([t.to, s, a, t.from]);
            let n = ef([t.from, a, s]);
            (this._active = !0),
              (this._fn = t.fn || e3[t.type || typeof n]),
              (this._easing = tj[t.easing] || tj.linear),
              (this._start = Math.floor(Date.now() + (t.delay || 0))),
              (this._duration = this._total = Math.floor(t.duration)),
              (this._loop = !!t.loop),
              (this._target = e),
              (this._prop = i),
              (this._from = n),
              (this._to = s),
              (this._promises = void 0);
          }
        }
        class e4 {
          configure(t) {
            if (!I(t)) return;
            let e = Object.keys(t2.animation),
              i = this._properties;
            Object.getOwnPropertyNames(t).forEach((s) => {
              let a = t[s];
              if (!I(a)) return;
              let n = {};
              for (let t of e) n[t] = a[t];
              ((V(a.properties) && a.properties) || [s]).forEach((t) => {
                (t !== s && i.has(t)) || i.set(t, n);
              });
            });
          }
          _animateOptions(t, e) {
            let i = e.options,
              s = (function (t, e) {
                if (!e) return;
                let i = t.options;
                if (!i) {
                  t.options = e;
                  return;
                }
                return (
                  i.$shared &&
                    (t.options = i =
                      Object.assign({}, i, { $shared: !1, $animations: {} })),
                  i
                );
              })(t, i);
            if (!s) return [];
            let a = this._createAnimations(s, i);
            return (
              i.$shared &&
                (function (t, e) {
                  let i = [],
                    s = Object.keys(e);
                  for (let e = 0; e < s.length; e++) {
                    let a = t[s[e]];
                    a && a.active() && i.push(a.wait());
                  }
                  return Promise.all(i);
                })(t.options.$animations, i).then(
                  () => {
                    t.options = i;
                  },
                  () => {}
                ),
              a
            );
          }
          _createAnimations(t, e) {
            let i,
              s = this._properties,
              a = [],
              n = t.$animations || (t.$animations = {}),
              r = Object.keys(e),
              o = Date.now();
            for (i = r.length - 1; i >= 0; --i) {
              let l = r[i];
              if ("$" === l.charAt(0)) continue;
              if ("options" === l) {
                a.push(...this._animateOptions(t, e));
                continue;
              }
              let h = e[l],
                d = n[l],
                c = s.get(l);
              if (d)
                if (c && d.active()) {
                  d.update(c, h, o);
                  continue;
                } else d.cancel();
              if (!c || !c.duration) {
                t[l] = h;
                continue;
              }
              (n[l] = d = new e8(c, t, l, h)), a.push(d);
            }
            return a;
          }
          update(t, e) {
            if (0 === this._properties.size) return void Object.assign(t, e);
            let i = this._createAnimations(t, e);
            if (i.length) return e2.add(this._chart, i), !0;
          }
          constructor(t, e) {
            (this._chart = t),
              (this._properties = new Map()),
              this.configure(e);
          }
        }
        function e6(t, e) {
          let i = (t && t.options) || {},
            s = i.reverse,
            a = void 0 === i.min ? e : 0,
            n = void 0 === i.max ? e : 0;
          return { start: s ? n : a, end: s ? a : n };
        }
        function e7(t, e) {
          let i,
            s,
            a = [],
            n = t._getSortedDatasetMetas(e);
          for (i = 0, s = n.length; i < s; ++i) a.push(n[i].index);
          return a;
        }
        function e9(t, e, i) {
          let s,
            a,
            n,
            r,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            l = t.keys,
            h = "single" === o.mode;
          if (null === e) return;
          let d = !1;
          for (s = 0, a = l.length; s < a; ++s) {
            if ((n = +l[s]) === i) {
              if (((d = !0), o.all)) continue;
              break;
            }
            B((r = t.values[n])) &&
              (h || 0 === e || tf(e) === tf(r)) &&
              (e += r);
          }
          return d || o.all ? e : 0;
        }
        function it(t, e) {
          let i = t && t.options.stacked;
          return i || (void 0 === i && void 0 !== e.stack);
        }
        function ie(t, e, i, s) {
          for (let a of e.getMatchingVisibleMetas(s).reverse()) {
            let e = t[a.index];
            if ((i && e > 0) || (!i && e < 0)) return a.index;
          }
          return null;
        }
        function ii(t, e) {
          let i,
            { chart: s, _cachedMeta: a } = t,
            n = s._stacks || (s._stacks = {}),
            { iScale: r, vScale: o, index: l } = a,
            h = r.axis,
            d = o.axis,
            c = ""
              .concat(r.id, ".")
              .concat(o.id, ".")
              .concat(a.stack || a.type),
            u = e.length;
          for (let t = 0; t < u; ++t) {
            let s = e[t],
              { [h]: r, [d]: u } = s;
            ((i = (s._stacks || (s._stacks = {}))[d] =
              (function (t, e, i) {
                let s = t[e] || (t[e] = {});
                return s[i] || (s[i] = {});
              })(n, c, r))[l] = u),
              (i._top = ie(i, o, !0, a.type)),
              (i._bottom = ie(i, o, !1, a.type)),
              ((i._visualValues || (i._visualValues = {}))[l] = u);
          }
        }
        function is(t, e) {
          let i = t.scales;
          return Object.keys(i)
            .filter((t) => i[t].axis === e)
            .shift();
        }
        function ia(t, e) {
          let i = t.controller.index,
            s = t.vScale && t.vScale.axis;
          if (s)
            for (let a of (e = e || t._parsed)) {
              let t = a._stacks;
              if (!t || void 0 === t[s] || void 0 === t[s][i]) return;
              delete t[s][i],
                void 0 !== t[s]._visualValues &&
                  void 0 !== t[s]._visualValues[i] &&
                  delete t[s]._visualValues[i];
            }
        }
        let ir = (t) => "reset" === t || "none" === t,
          io = (t, e) => (e ? t : Object.assign({}, t));
        class il {
          initialize() {
            let t = this._cachedMeta;
            this.configure(),
              this.linkScales(),
              (t._stacked = it(t.vScale, t)),
              this.addElements(),
              this.options.fill &&
                !this.chart.isPluginEnabled("filler") &&
                console.warn(
                  "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
                );
          }
          updateIndex(t) {
            this.index !== t && ia(this._cachedMeta), (this.index = t);
          }
          linkScales() {
            let t = this.chart,
              e = this._cachedMeta,
              i = this.getDataset(),
              s = (t, e, i, s) => ("x" === t ? e : "r" === t ? s : i),
              a = (e.xAxisID = H(i.xAxisID, is(t, "x"))),
              n = (e.yAxisID = H(i.yAxisID, is(t, "y"))),
              r = (e.rAxisID = H(i.rAxisID, is(t, "r"))),
              o = e.indexAxis,
              l = (e.iAxisID = s(o, a, n, r)),
              h = (e.vAxisID = s(o, n, a, r));
            (e.xScale = this.getScaleForId(a)),
              (e.yScale = this.getScaleForId(n)),
              (e.rScale = this.getScaleForId(r)),
              (e.iScale = this.getScaleForId(l)),
              (e.vScale = this.getScaleForId(h));
          }
          getDataset() {
            return this.chart.data.datasets[this.index];
          }
          getMeta() {
            return this.chart.getDatasetMeta(this.index);
          }
          getScaleForId(t) {
            return this.chart.scales[t];
          }
          _getOtherScale(t) {
            let e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale;
          }
          reset() {
            this._update("reset");
          }
          _destroy() {
            let t = this._cachedMeta;
            this._data && tL(this._data, this), t._stacked && ia(t);
          }
          _dataCheck() {
            let t = this.getDataset(),
              e = t.data || (t.data = []),
              i = this._data;
            if (I(e)) {
              let t = this._cachedMeta;
              this._data = (function (t, e) {
                let i,
                  s,
                  a,
                  { iScale: n, vScale: r } = e,
                  o = "x" === n.axis ? "x" : "y",
                  l = "x" === r.axis ? "x" : "y",
                  h = Object.keys(t),
                  d = Array(h.length);
                for (i = 0, s = h.length; i < s; ++i)
                  (a = h[i]), (d[i] = { [o]: a, [l]: t[a] });
                return d;
              })(e, t);
            } else if (i !== e) {
              if (i) {
                tL(i, this);
                let t = this._cachedMeta;
                ia(t), (t._parsed = []);
              }
              e &&
                Object.isExtensible(e) &&
                (function (t, e) {
                  if (t._chartjs) return t._chartjs.listeners.push(e);
                  Object.defineProperty(t, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: { listeners: [e] },
                  }),
                    tA.forEach((e) => {
                      let i = "_onData" + tt(e),
                        s = t[e];
                      Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value() {
                          for (
                            var e = arguments.length, a = Array(e), n = 0;
                            n < e;
                            n++
                          )
                            a[n] = arguments[n];
                          let r = s.apply(this, a);
                          return (
                            t._chartjs.listeners.forEach((t) => {
                              "function" == typeof t[i] && t[i](...a);
                            }),
                            r
                          );
                        },
                      });
                    });
                })(e, this),
                (this._syncList = []),
                (this._data = e);
            }
          }
          addElements() {
            let t = this._cachedMeta;
            this._dataCheck(),
              this.datasetElementType &&
                (t.dataset = new this.datasetElementType());
          }
          buildOrUpdateElements(t) {
            let e = this._cachedMeta,
              i = this.getDataset(),
              s = !1;
            this._dataCheck();
            let a = e._stacked;
            (e._stacked = it(e.vScale, e)),
              e.stack !== i.stack && ((s = !0), ia(e), (e.stack = i.stack)),
              this._resyncElements(t),
              (s || a !== e._stacked) &&
                (ii(this, e._parsed), (e._stacked = it(e.vScale, e)));
          }
          configure() {
            let t = this.chart.config,
              e = t.datasetScopeKeys(this._type),
              i = t.getOptionScopes(this.getDataset(), e, !0);
            (this.options = t.createResolver(i, this.getContext())),
              (this._parsing = this.options.parsing),
              (this._cachedDataOpts = {});
          }
          parse(t, e) {
            let i,
              s,
              a,
              { _cachedMeta: n, _data: r } = this,
              { iScale: o, _stacked: l } = n,
              h = o.axis,
              d = (0 === t && e === r.length) || n._sorted,
              c = t > 0 && n._parsed[t - 1];
            if (!1 === this._parsing)
              (n._parsed = r), (n._sorted = !0), (a = r);
            else {
              a = V(r[t])
                ? this.parseArrayData(n, r, t, e)
                : I(r[t])
                ? this.parseObjectData(n, r, t, e)
                : this.parsePrimitiveData(n, r, t, e);
              let o = () => null === s[h] || (c && s[h] < c[h]);
              for (i = 0; i < e; ++i)
                (n._parsed[i + t] = s = a[i]), d && (o() && (d = !1), (c = s));
              n._sorted = d;
            }
            l && ii(this, a);
          }
          parsePrimitiveData(t, e, i, s) {
            let a,
              n,
              { iScale: r, vScale: o } = t,
              l = r.axis,
              h = o.axis,
              d = r.getLabels(),
              c = r === o,
              u = Array(s);
            for (a = 0; a < s; ++a)
              (n = a + i),
                (u[a] = { [l]: c || r.parse(d[n], n), [h]: o.parse(e[n], n) });
            return u;
          }
          parseArrayData(t, e, i, s) {
            let a,
              n,
              r,
              { xScale: o, yScale: l } = t,
              h = Array(s);
            for (a = 0; a < s; ++a)
              (r = e[(n = a + i)]),
                (h[a] = { x: o.parse(r[0], n), y: l.parse(r[1], n) });
            return h;
          }
          parseObjectData(t, e, i, s) {
            let a,
              n,
              r,
              { xScale: o, yScale: l } = t,
              { xAxisKey: h = "x", yAxisKey: d = "y" } = this._parsing,
              c = Array(s);
            for (a = 0; a < s; ++a)
              (r = e[(n = a + i)]),
                (c[a] = { x: o.parse(Q(r, h), n), y: l.parse(Q(r, d), n) });
            return c;
          }
          getParsed(t) {
            return this._cachedMeta._parsed[t];
          }
          getDataElement(t) {
            return this._cachedMeta.data[t];
          }
          applyStack(t, e, i) {
            let s = this.chart,
              a = this._cachedMeta,
              n = e[t.axis];
            return e9(
              { keys: e7(s, !0), values: e._stacks[t.axis]._visualValues },
              n,
              a.index,
              { mode: i }
            );
          }
          updateRangeFromParsed(t, e, i, s) {
            let a = i[e.axis],
              n = null === a ? NaN : a,
              r = s && i._stacks[e.axis];
            s && r && ((s.values = r), (n = e9(s, a, this._cachedMeta.index))),
              (t.min = Math.min(t.min, n)),
              (t.max = Math.max(t.max, n));
          }
          getMinMax(t, e) {
            let i,
              s,
              a,
              n = this._cachedMeta,
              r = n._parsed,
              o = n._sorted && t === n.iScale,
              l = r.length,
              h = this._getOtherScale(t),
              d =
                ((a = this.chart),
                e &&
                  !n.hidden &&
                  n._stacked && { keys: e7(a, !0), values: null }),
              c = { min: 1 / 0, max: -1 / 0 },
              { min: u, max: f } = (function (t) {
                let {
                  min: e,
                  max: i,
                  minDefined: s,
                  maxDefined: a,
                } = t.getUserBounds();
                return { min: s ? e : -1 / 0, max: a ? i : 1 / 0 };
              })(h);
            function g() {
              let e = (s = r[i])[h.axis];
              return !B(s[t.axis]) || u > e || f < e;
            }
            for (
              i = 0;
              i < l && (g() || (this.updateRangeFromParsed(c, t, s, d), !o));
              ++i
            );
            if (o) {
              for (i = l - 1; i >= 0; --i)
                if (!g()) {
                  this.updateRangeFromParsed(c, t, s, d);
                  break;
                }
            }
            return c;
          }
          getAllParsedValues(t) {
            let e,
              i,
              s,
              a = this._cachedMeta._parsed,
              n = [];
            for (e = 0, i = a.length; e < i; ++e)
              B((s = a[e][t.axis])) && n.push(s);
            return n;
          }
          getMaxOverflow() {
            return !1;
          }
          getLabelAndValue(t) {
            let e = this._cachedMeta,
              i = e.iScale,
              s = e.vScale,
              a = this.getParsed(t);
            return {
              label: i ? "" + i.getLabelForValue(a[i.axis]) : "",
              value: s ? "" + s.getLabelForValue(a[s.axis]) : "",
            };
          }
          _update(t) {
            var e;
            let i,
              s,
              a,
              n,
              r = this._cachedMeta;
            this.update(t || "default"),
              I(
                (e = H(
                  this.options.clip,
                  (function (t, e, i) {
                    if (!1 === i) return !1;
                    let s = e6(t, i),
                      a = e6(e, i);
                    return {
                      top: a.end,
                      right: s.end,
                      bottom: a.start,
                      left: s.start,
                    };
                  })(r.xScale, r.yScale, this.getMaxOverflow())
                ))
              )
                ? ((i = e.top), (s = e.right), (a = e.bottom), (n = e.left))
                : (i = s = a = n = e),
              (r._clip = {
                top: i,
                right: s,
                bottom: a,
                left: n,
                disabled: !1 === e,
              });
          }
          update(t) {}
          draw() {
            let t,
              e = this._ctx,
              i = this.chart,
              s = this._cachedMeta,
              a = s.data || [],
              n = i.chartArea,
              r = [],
              o = this._drawStart || 0,
              l = this._drawCount || a.length - o,
              h = this.options.drawActiveElementsOnTop;
            for (
              s.dataset && s.dataset.draw(e, n, o, l), t = o;
              t < o + l;
              ++t
            ) {
              let i = a[t];
              i.hidden || (i.active && h ? r.push(i) : i.draw(e, n));
            }
            for (t = 0; t < r.length; ++t) r[t].draw(e, n);
          }
          getStyle(t, e) {
            let i = e ? "active" : "default";
            return void 0 === t && this._cachedMeta.dataset
              ? this.resolveDatasetElementOptions(i)
              : this.resolveDataElementOptions(t || 0, i);
          }
          getContext(t, e, i) {
            var s, a;
            let n,
              r = this.getDataset();
            if (t >= 0 && t < this._cachedMeta.data.length) {
              let e = this._cachedMeta.data[t];
              ((n =
                e.$context ||
                ((s = this.getContext()),
                (e.$context = eg(s, {
                  active: !1,
                  dataIndex: t,
                  parsed: void 0,
                  raw: void 0,
                  element: e,
                  index: t,
                  mode: "default",
                  type: "data",
                })))).parsed = this.getParsed(t)),
                (n.raw = r.data[t]),
                (n.index = n.dataIndex = t);
            } else
              ((n =
                this.$context ||
                (this.$context = eg(this.chart.getContext(), {
                  active: !1,
                  dataset: void 0,
                  datasetIndex: (a = this.index),
                  index: a,
                  mode: "default",
                  type: "dataset",
                }))).dataset = r),
                (n.index = n.datasetIndex = this.index);
            return (n.active = !!e), (n.mode = i), n;
          }
          resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t);
          }
          resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t);
          }
          _resolveElementOptions(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "default",
              i = arguments.length > 2 ? arguments[2] : void 0,
              s = "active" === e,
              a = this._cachedDataOpts,
              n = t + "-" + e,
              r = a[n],
              o = this.enableOptionSharing && te(i);
            if (r) return io(r, o);
            let l = this.chart.config,
              h = l.datasetElementScopeKeys(this._type, t),
              d = l.getOptionScopes(this.getDataset(), h),
              c = Object.keys(t2.elements[t]),
              u = l.resolveNamedOptions(
                d,
                c,
                () => this.getContext(i, s, e),
                s ? ["".concat(t, "Hover"), "hover", t, ""] : [t, ""]
              );
            return (
              u.$shared && ((u.$shared = o), (a[n] = Object.freeze(io(u, o)))),
              u
            );
          }
          _resolveAnimations(t, e, i) {
            let s,
              a = this.chart,
              n = this._cachedDataOpts,
              r = "animation-".concat(e),
              o = n[r];
            if (o) return o;
            if (!1 !== a.options.animation) {
              let a = this.chart.config,
                n = a.datasetAnimationScopeKeys(this._type, e),
                r = a.getOptionScopes(this.getDataset(), n);
              s = a.createResolver(r, this.getContext(t, i, e));
            }
            let l = new e4(a, s && s.animations);
            return s && s._cacheable && (n[r] = Object.freeze(l)), l;
          }
          getSharedOptions(t) {
            if (t.$shared)
              return (
                this._sharedOptions ||
                (this._sharedOptions = Object.assign({}, t))
              );
          }
          includeOptions(t, e) {
            return !e || ir(t) || this.chart._animationsDisabled;
          }
          _getSharedOptions(t, e) {
            let i = this.resolveDataElementOptions(t, e),
              s = this._sharedOptions,
              a = this.getSharedOptions(i),
              n = this.includeOptions(e, a) || a !== s;
            return (
              this.updateSharedOptions(a, e, i),
              { sharedOptions: a, includeOptions: n }
            );
          }
          updateElement(t, e, i, s) {
            ir(s)
              ? Object.assign(t, i)
              : this._resolveAnimations(e, s).update(t, i);
          }
          updateSharedOptions(t, e, i) {
            t && !ir(e) && this._resolveAnimations(void 0, e).update(t, i);
          }
          _setStyle(t, e, i, s) {
            t.active = s;
            let a = this.getStyle(e, s);
            this._resolveAnimations(e, i, s).update(t, {
              options: (!s && this.getSharedOptions(a)) || a,
            });
          }
          removeHoverStyle(t, e, i) {
            this._setStyle(t, i, "active", !1);
          }
          setHoverStyle(t, e, i) {
            this._setStyle(t, i, "active", !0);
          }
          _removeDatasetHoverStyle() {
            let t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1);
          }
          _setDatasetHoverStyle() {
            let t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0);
          }
          _resyncElements(t) {
            let e = this._data,
              i = this._cachedMeta.data;
            for (let [t, e, i] of this._syncList) this[t](e, i);
            this._syncList = [];
            let s = i.length,
              a = e.length,
              n = Math.min(a, s);
            n && this.parse(0, n),
              a > s
                ? this._insertElements(s, a - s, t)
                : a < s && this._removeElements(a, s - a);
          }
          _insertElements(t, e) {
            let i,
              s =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              a = this._cachedMeta,
              n = a.data,
              r = t + e,
              o = (t) => {
                for (t.length += e, i = t.length - 1; i >= r; i--)
                  t[i] = t[i - e];
              };
            for (o(n), i = t; i < r; ++i) n[i] = new this.dataElementType();
            this._parsing && o(a._parsed),
              this.parse(t, e),
              s && this.updateElements(n, t, e, "reset");
          }
          updateElements(t, e, i, s) {}
          _removeElements(t, e) {
            let i = this._cachedMeta;
            if (this._parsing) {
              let s = i._parsed.splice(t, e);
              i._stacked && ia(i, s);
            }
            i.data.splice(t, e);
          }
          _sync(t) {
            if (this._parsing) this._syncList.push(t);
            else {
              let [e, i, s] = t;
              this[e](i, s);
            }
            this.chart._dataChanges.push([this.index, ...t]);
          }
          _onDataPush() {
            let t = arguments.length;
            this._sync([
              "_insertElements",
              this.getDataset().data.length - t,
              t,
            ]);
          }
          _onDataPop() {
            this._sync([
              "_removeElements",
              this._cachedMeta.data.length - 1,
              1,
            ]);
          }
          _onDataShift() {
            this._sync(["_removeElements", 0, 1]);
          }
          _onDataSplice(t, e) {
            e && this._sync(["_removeElements", t, e]);
            let i = arguments.length - 2;
            i && this._sync(["_insertElements", t, i]);
          }
          _onDataUnshift() {
            this._sync(["_insertElements", 0, arguments.length]);
          }
          constructor(t, e) {
            (this.chart = t),
              (this._ctx = t.ctx),
              (this.index = e),
              (this._cachedDataOpts = {}),
              (this._cachedMeta = this.getMeta()),
              (this._type = this._cachedMeta.type),
              (this.options = void 0),
              (this._parsing = !1),
              (this._data = void 0),
              (this._objectData = void 0),
              (this._sharedOptions = void 0),
              (this._drawStart = void 0),
              (this._drawCount = void 0),
              (this.enableOptionSharing = !1),
              (this.supportsDecimation = !1),
              (this.$context = void 0),
              (this._syncList = []),
              (this.datasetElementType = new.target.datasetElementType),
              (this.dataElementType = new.target.dataElementType),
              this.initialize();
          }
        }
        function ih(t, e, i, s) {
          return (
            V(t)
              ? !(function (t, e, i, s) {
                  let a = i.parse(t[0], s),
                    n = i.parse(t[1], s),
                    r = Math.min(a, n),
                    o = Math.max(a, n),
                    l = r,
                    h = o;
                  Math.abs(r) > Math.abs(o) && ((l = o), (h = r)),
                    (e[i.axis] = h),
                    (e._custom = {
                      barStart: l,
                      barEnd: h,
                      start: a,
                      end: n,
                      min: r,
                      max: o,
                    });
                })(t, e, i, s)
              : (e[i.axis] = i.parse(t, s)),
            e
          );
        }
        function id(t, e, i, s) {
          let a,
            n,
            r,
            o,
            l = t.iScale,
            h = t.vScale,
            d = l.getLabels(),
            c = l === h,
            u = [];
          for (a = i, n = i + s; a < n; ++a)
            (o = e[a]),
              ((r = {})[l.axis] = c || l.parse(d[a], a)),
              u.push(ih(o, r, h, a));
          return u;
        }
        function ic(t) {
          return t && void 0 !== t.barStart && void 0 !== t.barEnd;
        }
        function iu(t, e, i, s) {
          var a, n, r;
          return (t = s
            ? ig(
                ((a = t),
                (n = e),
                (r = i),
                (t = a === n ? r : a === r ? n : a)),
                i,
                e
              )
            : ig(t, e, i));
        }
        function ig(t, e, i) {
          return "start" === t ? e : "end" === t ? i : t;
        }
        (0, r._)(il, "defaults", {}),
          (0, r._)(il, "datasetElementType", null),
          (0, r._)(il, "dataElementType", null);
        class ip extends il {
          parsePrimitiveData(t, e, i, s) {
            return id(t, e, i, s);
          }
          parseArrayData(t, e, i, s) {
            return id(t, e, i, s);
          }
          parseObjectData(t, e, i, s) {
            let a,
              n,
              r,
              o,
              { iScale: l, vScale: h } = t,
              { xAxisKey: d = "x", yAxisKey: c = "y" } = this._parsing,
              u = "x" === l.axis ? d : c,
              f = "x" === h.axis ? d : c,
              g = [];
            for (a = i, n = i + s; a < n; ++a)
              (o = e[a]),
                ((r = {})[l.axis] = l.parse(Q(o, u), a)),
                g.push(ih(Q(o, f), r, h, a));
            return g;
          }
          updateRangeFromParsed(t, e, i, s) {
            super.updateRangeFromParsed(t, e, i, s);
            let a = i._custom;
            a &&
              e === this._cachedMeta.vScale &&
              ((t.min = Math.min(t.min, a.min)),
              (t.max = Math.max(t.max, a.max)));
          }
          getMaxOverflow() {
            return 0;
          }
          getLabelAndValue(t) {
            let { iScale: e, vScale: i } = this._cachedMeta,
              s = this.getParsed(t),
              a = s._custom,
              n = ic(a)
                ? "[" + a.start + ", " + a.end + "]"
                : "" + i.getLabelForValue(s[i.axis]);
            return { label: "" + e.getLabelForValue(s[e.axis]), value: n };
          }
          initialize() {
            (this.enableOptionSharing = !0),
              super.initialize(),
              (this._cachedMeta.stack = this.getDataset().stack);
          }
          update(t) {
            let e = this._cachedMeta;
            this.updateElements(e.data, 0, e.data.length, t);
          }
          updateElements(t, e, i, s) {
            let a = "reset" === s,
              {
                index: n,
                _cachedMeta: { vScale: r },
              } = this,
              o = r.getBasePixel(),
              l = r.isHorizontal(),
              h = this._getRuler(),
              { sharedOptions: d, includeOptions: c } = this._getSharedOptions(
                e,
                s
              );
            for (let u = e; u < e + i; u++) {
              let e = this.getParsed(u),
                i =
                  a || z(e[r.axis])
                    ? { base: o, head: o }
                    : this._calculateBarValuePixels(u),
                f = this._calculateBarIndexPixels(u, h),
                g = (e._stacks || {})[r.axis],
                p = {
                  horizontal: l,
                  base: i.base,
                  enableBorderRadius:
                    !g || ic(e._custom) || n === g._top || n === g._bottom,
                  x: l ? i.head : f.center,
                  y: l ? f.center : i.head,
                  height: l ? f.size : Math.abs(i.size),
                  width: l ? Math.abs(i.size) : f.size,
                };
              c &&
                (p.options =
                  d ||
                  this.resolveDataElementOptions(
                    u,
                    t[u].active ? "active" : s
                  ));
              let m = p.options || t[u].options;
              !(function (t, e, i, s) {
                let a,
                  n,
                  r,
                  o,
                  l,
                  h = e.borderSkipped,
                  d = {};
                if (!h) {
                  t.borderSkipped = d;
                  return;
                }
                if (!0 === h) {
                  t.borderSkipped = {
                    top: !0,
                    right: !0,
                    bottom: !0,
                    left: !0,
                  };
                  return;
                }
                let {
                  start: c,
                  end: u,
                  reverse: f,
                  top: g,
                  bottom: p,
                } = (t.horizontal
                  ? ((a = t.base > t.x), (n = "left"), (r = "right"))
                  : ((a = t.base < t.y), (n = "bottom"), (r = "top")),
                a ? ((o = "end"), (l = "start")) : ((o = "start"), (l = "end")),
                { start: n, end: r, reverse: a, top: o, bottom: l });
                "middle" === h &&
                  i &&
                  ((t.enableBorderRadius = !0),
                  (i._top || 0) === s
                    ? (h = g)
                    : (i._bottom || 0) === s
                    ? (h = p)
                    : ((d[iu(p, c, u, f)] = !0), (h = g))),
                  (d[iu(h, c, u, f)] = !0),
                  (t.borderSkipped = d);
              })(p, m, g, n),
                (function (t, e, i) {
                  let { inflateAmount: s } = e;
                  t.inflateAmount = "auto" === s ? 0.33 * (1 === i) : s;
                })(p, m, h.ratio),
                this.updateElement(t[u], u, p, s);
            }
          }
          _getStacks(t, e) {
            let { iScale: i } = this._cachedMeta,
              s = i
                .getMatchingVisibleMetas(this._type)
                .filter((t) => t.controller.options.grouped),
              a = i.options.stacked,
              n = [],
              r = this._cachedMeta.controller.getParsed(e),
              o = r && r[i.axis],
              l = (t) => {
                let e = t._parsed.find((t) => t[i.axis] === o),
                  s = e && e[t.vScale.axis];
                if (z(s) || isNaN(s)) return !0;
              };
            for (let i of s)
              if (
                !(void 0 !== e && l(i)) &&
                ((!1 === a ||
                  -1 === n.indexOf(i.stack) ||
                  (void 0 === a && void 0 === i.stack)) &&
                  n.push(i.stack),
                i.index === t)
              )
                break;
            return n.length || n.push(void 0), n;
          }
          _getStackCount(t) {
            return this._getStacks(void 0, t).length;
          }
          _getAxisCount() {
            return this._getAxis().length;
          }
          getFirstScaleIdForIndexAxis() {
            let t = this.chart.scales,
              e = this.chart.options.indexAxis;
            return Object.keys(t)
              .filter((i) => t[i].axis === e)
              .shift();
          }
          _getAxis() {
            let t = {},
              e = this.getFirstScaleIdForIndexAxis();
            for (let i of this.chart.data.datasets)
              t[
                H(
                  "x" === this.chart.options.indexAxis ? i.xAxisID : i.yAxisID,
                  e
                )
              ] = !0;
            return Object.keys(t);
          }
          _getStackIndex(t, e, i) {
            let s = this._getStacks(t, i),
              a = void 0 !== e ? s.indexOf(e) : -1;
            return -1 === a ? s.length - 1 : a;
          }
          _getRuler() {
            let t,
              e,
              i = this.options,
              s = this._cachedMeta,
              a = s.iScale,
              n = [];
            for (t = 0, e = s.data.length; t < e; ++t)
              n.push(a.getPixelForValue(this.getParsed(t)[a.axis], t));
            let r = i.barThickness;
            return {
              min:
                r ||
                (function (t) {
                  let e,
                    i,
                    s,
                    a,
                    n = t.iScale,
                    r = (function (t, e) {
                      if (!t._cache.$bar) {
                        let i = t.getMatchingVisibleMetas(e),
                          s = [];
                        for (let e = 0, a = i.length; e < a; e++)
                          s = s.concat(i[e].controller.getAllParsedValues(t));
                        t._cache.$bar = tT(s.sort((t, e) => t - e));
                      }
                      return t._cache.$bar;
                    })(n, t.type),
                    o = n._length,
                    l = () => {
                      32767 !== s &&
                        -32768 !== s &&
                        (te(a) && (o = Math.min(o, Math.abs(s - a) || o)),
                        (a = s));
                    };
                  for (e = 0, i = r.length; e < i; ++e)
                    (s = n.getPixelForValue(r[e])), l();
                  for (e = 0, a = void 0, i = n.ticks.length; e < i; ++e)
                    (s = n.getPixelForTick(e)), l();
                  return o;
                })(s),
              pixels: n,
              start: a._startPixel,
              end: a._endPixel,
              stackCount: this._getStackCount(),
              scale: a,
              grouped: i.grouped,
              ratio: r ? 1 : i.categoryPercentage * i.barPercentage,
            };
          }
          _calculateBarValuePixels(t) {
            let e,
              i,
              {
                _cachedMeta: { vScale: s, _stacked: a, index: n },
                options: { base: r, minBarLength: o },
              } = this,
              l = r || 0,
              h = this.getParsed(t),
              d = h._custom,
              c = ic(d),
              u = h[s.axis],
              f = 0,
              g = a ? this.applyStack(s, h, a) : u;
            g !== u && ((f = g - u), (g = u)),
              c &&
                ((u = d.barStart),
                (g = d.barEnd - d.barStart),
                0 !== u && tf(u) !== tf(d.barEnd) && (f = 0),
                (f += u));
            let p = z(r) || c ? f : r,
              m = s.getPixelForValue(p);
            if (
              Math.abs(
                (i =
                  (e = this.chart.getDataVisibility(t)
                    ? s.getPixelForValue(f + g)
                    : m) - m)
              ) < o
            ) {
              var b;
              (i =
                (0 !== (b = i)
                  ? tf(b)
                  : (s.isHorizontal() ? 1 : -1) * (s.min >= l ? 1 : -1)) * o),
                u === l && (m -= i / 2);
              let t = s.getPixelForDecimal(0),
                r = s.getPixelForDecimal(1),
                d = Math.min(t, r);
              (e = (m = Math.max(Math.min(m, Math.max(t, r)), d)) + i),
                a &&
                  !c &&
                  (h._stacks[s.axis]._visualValues[n] =
                    s.getValueForPixel(e) - s.getValueForPixel(m));
            }
            if (m === s.getPixelForValue(l)) {
              let t = (tf(i) * s.getLineWidthForValue(l)) / 2;
              (m += t), (i -= t);
            }
            return { size: i, base: m, head: e, center: e + i / 2 };
          }
          _calculateBarIndexPixels(t, e) {
            let i,
              s,
              a = e.scale,
              n = this.options,
              r = n.skipNull,
              o = H(n.maxBarThickness, 1 / 0),
              l = this._getAxisCount();
            if (e.grouped) {
              let a = r ? this._getStackCount(t) : e.stackCount,
                h =
                  "flex" === n.barThickness
                    ? (function (t, e, i, s) {
                        let a = e.pixels,
                          n = a[t],
                          r = t > 0 ? a[t - 1] : null,
                          o = t < a.length - 1 ? a[t + 1] : null,
                          l = i.categoryPercentage;
                        null === r &&
                          (r = n - (null === o ? e.end - e.start : o - n)),
                          null === o && (o = n + n - r);
                        let h = n - ((n - Math.min(r, o)) / 2) * l;
                        return {
                          chunk: ((Math.abs(o - r) / 2) * l) / s,
                          ratio: i.barPercentage,
                          start: h,
                        };
                      })(t, e, n, a * l)
                    : (function (t, e, i, s) {
                        let a,
                          n,
                          r = i.barThickness;
                        return (
                          z(r)
                            ? ((a = e.min * i.categoryPercentage),
                              (n = i.barPercentage))
                            : ((a = r * s), (n = 1)),
                          { chunk: a / s, ratio: n, start: e.pixels[t] - a / 2 }
                        );
                      })(t, e, n, a * l),
                d =
                  "x" === this.chart.options.indexAxis
                    ? this.getDataset().xAxisID
                    : this.getDataset().yAxisID,
                c = this._getAxis().indexOf(
                  H(d, this.getFirstScaleIdForIndexAxis())
                ),
                u =
                  this._getStackIndex(
                    this.index,
                    this._cachedMeta.stack,
                    r ? t : void 0
                  ) + c;
              (i = h.start + h.chunk * u + h.chunk / 2),
                (s = Math.min(o, h.chunk * h.ratio));
            } else
              (i = a.getPixelForValue(this.getParsed(t)[a.axis], t)),
                (s = Math.min(o, e.min * e.ratio));
            return { base: i - s / 2, head: i + s / 2, center: i, size: s };
          }
          draw() {
            let t = this._cachedMeta,
              e = t.vScale,
              i = t.data,
              s = i.length,
              a = 0;
            for (; a < s; ++a)
              null === this.getParsed(a)[e.axis] ||
                i[a].hidden ||
                i[a].draw(this._ctx);
          }
        }
        (0, r._)(ip, "id", "bar"),
          (0, r._)(ip, "defaults", {
            datasetElementType: !1,
            dataElementType: "bar",
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            grouped: !0,
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "base", "width", "height"],
              },
            },
          }),
          (0, r._)(ip, "overrides", {
            scales: {
              _index_: { type: "category", offset: !0, grid: { offset: !0 } },
              _value_: { type: "linear", beginAtZero: !0 },
            },
          });
        class im extends il {
          initialize() {
            (this.enableOptionSharing = !0), super.initialize();
          }
          parsePrimitiveData(t, e, i, s) {
            let a = super.parsePrimitiveData(t, e, i, s);
            for (let t = 0; t < a.length; t++)
              a[t]._custom = this.resolveDataElementOptions(t + i).radius;
            return a;
          }
          parseArrayData(t, e, i, s) {
            let a = super.parseArrayData(t, e, i, s);
            for (let t = 0; t < a.length; t++) {
              let s = e[i + t];
              a[t]._custom = H(
                s[2],
                this.resolveDataElementOptions(t + i).radius
              );
            }
            return a;
          }
          parseObjectData(t, e, i, s) {
            let a = super.parseObjectData(t, e, i, s);
            for (let t = 0; t < a.length; t++) {
              let s = e[i + t];
              a[t]._custom = H(
                s && s.r && +s.r,
                this.resolveDataElementOptions(t + i).radius
              );
            }
            return a;
          }
          getMaxOverflow() {
            let t = this._cachedMeta.data,
              e = 0;
            for (let i = t.length - 1; i >= 0; --i)
              e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
            return e > 0 && e;
          }
          getLabelAndValue(t) {
            let e = this._cachedMeta,
              i = this.chart.data.labels || [],
              { xScale: s, yScale: a } = e,
              n = this.getParsed(t),
              r = s.getLabelForValue(n.x),
              o = a.getLabelForValue(n.y),
              l = n._custom;
            return {
              label: i[t] || "",
              value: "(" + r + ", " + o + (l ? ", " + l : "") + ")",
            };
          }
          update(t) {
            let e = this._cachedMeta.data;
            this.updateElements(e, 0, e.length, t);
          }
          updateElements(t, e, i, s) {
            let a = "reset" === s,
              { iScale: n, vScale: r } = this._cachedMeta,
              { sharedOptions: o, includeOptions: l } = this._getSharedOptions(
                e,
                s
              ),
              h = n.axis,
              d = r.axis;
            for (let c = e; c < e + i; c++) {
              let e = t[c],
                i = !a && this.getParsed(c),
                u = {},
                f = (u[h] = a
                  ? n.getPixelForDecimal(0.5)
                  : n.getPixelForValue(i[h])),
                g = (u[d] = a ? r.getBasePixel() : r.getPixelForValue(i[d]));
              (u.skip = isNaN(f) || isNaN(g)),
                l &&
                  ((u.options =
                    o ||
                    this.resolveDataElementOptions(c, e.active ? "active" : s)),
                  a && (u.options.radius = 0)),
                this.updateElement(e, c, u, s);
            }
          }
          resolveDataElementOptions(t, e) {
            let i = this.getParsed(t),
              s = super.resolveDataElementOptions(t, e);
            s.$shared && (s = Object.assign({}, s, { $shared: !1 }));
            let a = s.radius;
            return (
              "active" !== e && (s.radius = 0),
              (s.radius += H(i && i._custom, a)),
              s
            );
          }
        }
        (0, r._)(im, "id", "bubble"),
          (0, r._)(im, "defaults", {
            datasetElementType: !1,
            dataElementType: "point",
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "borderWidth", "radius"],
              },
            },
          }),
          (0, r._)(im, "overrides", {
            scales: { x: { type: "linear" }, y: { type: "linear" } },
          });
        class ib extends il {
          linkScales() {}
          parse(t, e) {
            let i = this.getDataset().data,
              s = this._cachedMeta;
            if (!1 === this._parsing) s._parsed = i;
            else {
              let a,
                n,
                r = (t) => +i[t];
              if (I(i[t])) {
                let { key: t = "value" } = this._parsing;
                r = (e) => +Q(i[e], t);
              }
              for (a = t, n = t + e; a < n; ++a) s._parsed[a] = r(a);
            }
          }
          _getRotation() {
            return tx(this.options.rotation - 90);
          }
          _getCircumference() {
            return tx(this.options.circumference);
          }
          _getRotationExtents() {
            let t = tn,
              e = -tn;
            for (let i = 0; i < this.chart.data.datasets.length; ++i)
              if (
                this.chart.isDatasetVisible(i) &&
                this.chart.getDatasetMeta(i).type === this._type
              ) {
                let s = this.chart.getDatasetMeta(i).controller,
                  a = s._getRotation(),
                  n = s._getCircumference();
                (t = Math.min(t, a)), (e = Math.max(e, a + n));
              }
            return { rotation: t, circumference: e - t };
          }
          update(t) {
            let e,
              { chartArea: i } = this.chart,
              s = this._cachedMeta,
              a = s.data,
              n =
                this.getMaxBorderWidth() +
                this.getMaxOffset(a) +
                this.options.spacing,
              r = Math.max((Math.min(i.width, i.height) - n) / 2, 0),
              o = Math.min(
                ((e = this.options.cutout),
                "string" == typeof e && e.endsWith("%")
                  ? parseFloat(e) / 100
                  : e / r),
                1
              ),
              l = this._getRingWeight(this.index),
              { circumference: h, rotation: d } = this._getRotationExtents(),
              {
                ratioX: c,
                ratioY: u,
                offsetX: f,
                offsetY: g,
              } = (function (t, e, i) {
                let s = 1,
                  a = 1,
                  n = 0,
                  r = 0;
                if (e < tn) {
                  let o = t + e,
                    l = Math.cos(t),
                    h = Math.sin(t),
                    d = Math.cos(o),
                    c = Math.sin(o),
                    u = (e, s, a) =>
                      tk(e, t, o, !0) ? 1 : Math.max(s, s * i, a, a * i),
                    f = (e, s, a) =>
                      tk(e, t, o, !0) ? -1 : Math.min(s, s * i, a, a * i),
                    g = u(0, l, d),
                    p = u(th, h, c),
                    m = f(ta, l, d),
                    b = f(ta + th, h, c);
                  (s = (g - m) / 2),
                    (a = (p - b) / 2),
                    (n = -(g + m) / 2),
                    (r = -(p + b) / 2);
                }
                return { ratioX: s, ratioY: a, offsetX: n, offsetY: r };
              })(d, h, o),
              p = Math.max(
                Math.min((i.width - n) / c, (i.height - n) / u) / 2,
                0
              ),
              m = j(this.options.radius, p),
              b = Math.max(m * o, 0),
              x = (m - b) / this._getVisibleDatasetWeightTotal();
            (this.offsetX = f * m),
              (this.offsetY = g * m),
              (s.total = this.calculateTotal()),
              (this.outerRadius =
                m - x * this._getRingWeightOffset(this.index)),
              (this.innerRadius = Math.max(this.outerRadius - x * l, 0)),
              this.updateElements(a, 0, a.length, t);
          }
          _circumference(t, e) {
            let i = this.options,
              s = this._cachedMeta,
              a = this._getCircumference();
            return (e && i.animation.animateRotate) ||
              !this.chart.getDataVisibility(t) ||
              null === s._parsed[t] ||
              s.data[t].hidden
              ? 0
              : this.calculateCircumference((s._parsed[t] * a) / tn);
          }
          updateElements(t, e, i, s) {
            let a,
              n = "reset" === s,
              r = this.chart,
              o = r.chartArea,
              l = r.options.animation,
              h = (o.left + o.right) / 2,
              d = (o.top + o.bottom) / 2,
              c = n && l.animateScale,
              u = c ? 0 : this.innerRadius,
              f = c ? 0 : this.outerRadius,
              { sharedOptions: g, includeOptions: p } = this._getSharedOptions(
                e,
                s
              ),
              m = this._getRotation();
            for (a = 0; a < e; ++a) m += this._circumference(a, n);
            for (a = e; a < e + i; ++a) {
              let e = this._circumference(a, n),
                i = t[a],
                r = {
                  x: h + this.offsetX,
                  y: d + this.offsetY,
                  startAngle: m,
                  endAngle: m + e,
                  circumference: e,
                  outerRadius: f,
                  innerRadius: u,
                };
              p &&
                (r.options =
                  g ||
                  this.resolveDataElementOptions(a, i.active ? "active" : s)),
                (m += e),
                this.updateElement(i, a, r, s);
            }
          }
          calculateTotal() {
            let t,
              e = this._cachedMeta,
              i = e.data,
              s = 0;
            for (t = 0; t < i.length; t++) {
              let a = e._parsed[t];
              null !== a &&
                !isNaN(a) &&
                this.chart.getDataVisibility(t) &&
                !i[t].hidden &&
                (s += Math.abs(a));
            }
            return s;
          }
          calculateCircumference(t) {
            let e = this._cachedMeta.total;
            return e > 0 && !isNaN(t) ? (Math.abs(t) / e) * tn : 0;
          }
          getLabelAndValue(t) {
            let e = this._cachedMeta,
              i = this.chart,
              s = i.data.labels || [],
              a = tK(e._parsed[t], i.options.locale);
            return { label: s[t] || "", value: a };
          }
          getMaxBorderWidth(t) {
            let e,
              i,
              s,
              a,
              n,
              r = 0,
              o = this.chart;
            if (!t) {
              for (e = 0, i = o.data.datasets.length; e < i; ++e)
                if (o.isDatasetVisible(e)) {
                  (t = (s = o.getDatasetMeta(e)).data), (a = s.controller);
                  break;
                }
            }
            if (!t) return 0;
            for (e = 0, i = t.length; e < i; ++e)
              "inner" !== (n = a.resolveDataElementOptions(e)).borderAlign &&
                (r = Math.max(r, n.borderWidth || 0, n.hoverBorderWidth || 0));
            return r;
          }
          getMaxOffset(t) {
            let e = 0;
            for (let i = 0, s = t.length; i < s; ++i) {
              let t = this.resolveDataElementOptions(i);
              e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
            }
            return e;
          }
          _getRingWeightOffset(t) {
            let e = 0;
            for (let i = 0; i < t; ++i)
              this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
            return e;
          }
          _getRingWeight(t) {
            return Math.max(H(this.chart.data.datasets[t].weight, 1), 0);
          }
          _getVisibleDatasetWeightTotal() {
            return (
              this._getRingWeightOffset(this.chart.data.datasets.length) || 1
            );
          }
          constructor(t, e) {
            super(t, e),
              (this.enableOptionSharing = !0),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0),
              (this.offsetX = void 0),
              (this.offsetY = void 0);
          }
        }
        (0, r._)(ib, "id", "doughnut"),
          (0, r._)(ib, "defaults", {
            datasetElementType: !1,
            dataElementType: "arc",
            animation: { animateRotate: !0, animateScale: !1 },
            animations: {
              numbers: {
                type: "number",
                properties: [
                  "circumference",
                  "endAngle",
                  "innerRadius",
                  "outerRadius",
                  "startAngle",
                  "x",
                  "y",
                  "offset",
                  "borderWidth",
                  "spacing",
                ],
              },
            },
            cutout: "50%",
            rotation: 0,
            circumference: 360,
            radius: "100%",
            spacing: 0,
            indexAxis: "r",
          }),
          (0, r._)(ib, "descriptors", {
            _scriptable: (t) => "spacing" !== t,
            _indexable: (t) =>
              "spacing" !== t &&
              !t.startsWith("borderDash") &&
              !t.startsWith("hoverBorderDash"),
          }),
          (0, r._)(ib, "overrides", {
            aspectRatio: 1,
            plugins: {
              legend: {
                labels: {
                  generateLabels(t) {
                    let e = t.data;
                    if (e.labels.length && e.datasets.length) {
                      let {
                        labels: { pointStyle: i, color: s },
                      } = t.legend.options;
                      return e.labels.map((e, a) => {
                        let n = t.getDatasetMeta(0).controller.getStyle(a);
                        return {
                          text: e,
                          fillStyle: n.backgroundColor,
                          strokeStyle: n.borderColor,
                          fontColor: s,
                          lineWidth: n.borderWidth,
                          pointStyle: i,
                          hidden: !t.getDataVisibility(a),
                          index: a,
                        };
                      });
                    }
                    return [];
                  },
                },
                onClick(t, e, i) {
                  i.chart.toggleDataVisibility(e.index), i.chart.update();
                },
              },
            },
          });
        class ix extends il {
          initialize() {
            (this.enableOptionSharing = !0),
              (this.supportsDecimation = !0),
              super.initialize();
          }
          update(t) {
            let e = this._cachedMeta,
              { dataset: i, data: s = [], _dataset: a } = e,
              n = this.chart._animationsDisabled,
              { start: r, count: o } = tV(e, s, n);
            (this._drawStart = r),
              (this._drawCount = o),
              tI(e) && ((r = 0), (o = s.length)),
              (i._chart = this.chart),
              (i._datasetIndex = this.index),
              (i._decimated = !!a._decimated),
              (i.points = s);
            let l = this.resolveDatasetElementOptions(t);
            this.options.showLine || (l.borderWidth = 0),
              (l.segment = this.options.segment),
              this.updateElement(i, void 0, { animated: !n, options: l }, t),
              this.updateElements(s, r, o, t);
          }
          updateElements(t, e, i, s) {
            let a = "reset" === s,
              {
                iScale: n,
                vScale: r,
                _stacked: o,
                _dataset: l,
              } = this._cachedMeta,
              { sharedOptions: h, includeOptions: d } = this._getSharedOptions(
                e,
                s
              ),
              c = n.axis,
              u = r.axis,
              { spanGaps: f, segment: g } = this.options,
              p = tm(f) ? f : 1 / 0,
              m = this.chart._animationsDisabled || a || "none" === s,
              b = e + i,
              x = t.length,
              _ = e > 0 && this.getParsed(e - 1);
            for (let i = 0; i < x; ++i) {
              let f = t[i],
                x = m ? f : {};
              if (i < e || i >= b) {
                x.skip = !0;
                continue;
              }
              let y = this.getParsed(i),
                v = z(y[u]),
                M = (x[c] = n.getPixelForValue(y[c], i)),
                w = (x[u] =
                  a || v
                    ? r.getBasePixel()
                    : r.getPixelForValue(
                        o ? this.applyStack(r, y, o) : y[u],
                        i
                      ));
              (x.skip = isNaN(M) || isNaN(w) || v),
                (x.stop = i > 0 && Math.abs(y[c] - _[c]) > p),
                g && ((x.parsed = y), (x.raw = l.data[i])),
                d &&
                  (x.options =
                    h ||
                    this.resolveDataElementOptions(i, f.active ? "active" : s)),
                m || this.updateElement(f, i, x, s),
                (_ = y);
            }
          }
          getMaxOverflow() {
            let t = this._cachedMeta,
              e = t.dataset,
              i = (e.options && e.options.borderWidth) || 0,
              s = t.data || [];
            return s.length
              ? Math.max(
                  i,
                  s[0].size(this.resolveDataElementOptions(0)),
                  s[s.length - 1].size(
                    this.resolveDataElementOptions(s.length - 1)
                  )
                ) / 2
              : i;
          }
          draw() {
            let t = this._cachedMeta;
            t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
              super.draw();
          }
        }
        (0, r._)(ix, "id", "line"),
          (0, r._)(ix, "defaults", {
            datasetElementType: "line",
            dataElementType: "point",
            showLine: !0,
            spanGaps: !1,
          }),
          (0, r._)(ix, "overrides", {
            scales: {
              _index_: { type: "category" },
              _value_: { type: "linear" },
            },
          });
        class i_ extends il {
          getLabelAndValue(t) {
            let e = this._cachedMeta,
              i = this.chart,
              s = i.data.labels || [],
              a = tK(e._parsed[t].r, i.options.locale);
            return { label: s[t] || "", value: a };
          }
          parseObjectData(t, e, i, s) {
            return eS.bind(this)(t, e, i, s);
          }
          update(t) {
            let e = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(e, 0, e.length, t);
          }
          getMinMax() {
            let t = this._cachedMeta,
              e = { min: 1 / 0, max: -1 / 0 };
            return (
              t.data.forEach((t, i) => {
                let s = this.getParsed(i).r;
                !isNaN(s) &&
                  this.chart.getDataVisibility(i) &&
                  (s < e.min && (e.min = s), s > e.max && (e.max = s));
              }),
              e
            );
          }
          _updateRadius() {
            let t = this.chart,
              e = t.chartArea,
              i = t.options,
              s = Math.max(Math.min(e.right - e.left, e.bottom - e.top) / 2, 0),
              a = Math.max(
                i.cutoutPercentage ? (s / 100) * i.cutoutPercentage : 1,
                0
              ),
              n = (s - a) / t.getVisibleDatasetCount();
            (this.outerRadius = s - n * this.index),
              (this.innerRadius = this.outerRadius - n);
          }
          updateElements(t, e, i, s) {
            let a,
              n = "reset" === s,
              r = this.chart,
              o = r.options.animation,
              l = this._cachedMeta.rScale,
              h = l.xCenter,
              d = l.yCenter,
              c = l.getIndexAngle(0) - 0.5 * ta,
              u = c,
              f = 360 / this.countVisibleElements();
            for (a = 0; a < e; ++a) u += this._computeAngle(a, s, f);
            for (a = e; a < e + i; a++) {
              let e = t[a],
                i = u,
                g = u + this._computeAngle(a, s, f),
                p = r.getDataVisibility(a)
                  ? l.getDistanceFromCenterForValue(this.getParsed(a).r)
                  : 0;
              (u = g),
                n &&
                  (o.animateScale && (p = 0), o.animateRotate && (i = g = c));
              let m = {
                x: h,
                y: d,
                innerRadius: 0,
                outerRadius: p,
                startAngle: i,
                endAngle: g,
                options: this.resolveDataElementOptions(
                  a,
                  e.active ? "active" : s
                ),
              };
              this.updateElement(e, a, m, s);
            }
          }
          countVisibleElements() {
            let t = this._cachedMeta,
              e = 0;
            return (
              t.data.forEach((t, i) => {
                !isNaN(this.getParsed(i).r) &&
                  this.chart.getDataVisibility(i) &&
                  e++;
              }),
              e
            );
          }
          _computeAngle(t, e, i) {
            return this.chart.getDataVisibility(t)
              ? tx(this.resolveDataElementOptions(t, e).angle || i)
              : 0;
          }
          constructor(t, e) {
            super(t, e),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0);
          }
        }
        (0, r._)(i_, "id", "polarArea"),
          (0, r._)(i_, "defaults", {
            dataElementType: "arc",
            animation: { animateRotate: !0, animateScale: !0 },
            animations: {
              numbers: {
                type: "number",
                properties: [
                  "x",
                  "y",
                  "startAngle",
                  "endAngle",
                  "innerRadius",
                  "outerRadius",
                ],
              },
            },
            indexAxis: "r",
            startAngle: 0,
          }),
          (0, r._)(i_, "overrides", {
            aspectRatio: 1,
            plugins: {
              legend: {
                labels: {
                  generateLabels(t) {
                    let e = t.data;
                    if (e.labels.length && e.datasets.length) {
                      let {
                        labels: { pointStyle: i, color: s },
                      } = t.legend.options;
                      return e.labels.map((e, a) => {
                        let n = t.getDatasetMeta(0).controller.getStyle(a);
                        return {
                          text: e,
                          fillStyle: n.backgroundColor,
                          strokeStyle: n.borderColor,
                          fontColor: s,
                          lineWidth: n.borderWidth,
                          pointStyle: i,
                          hidden: !t.getDataVisibility(a),
                          index: a,
                        };
                      });
                    }
                    return [];
                  },
                },
                onClick(t, e, i) {
                  i.chart.toggleDataVisibility(e.index), i.chart.update();
                },
              },
            },
            scales: {
              r: {
                type: "radialLinear",
                angleLines: { display: !1 },
                beginAtZero: !0,
                grid: { circular: !0 },
                pointLabels: { display: !1 },
                startAngle: 0,
              },
            },
          });
        class iy extends ib {}
        (0, r._)(iy, "id", "pie"),
          (0, r._)(iy, "defaults", {
            cutout: 0,
            rotation: 0,
            circumference: 360,
            radius: "100%",
          });
        class iv extends il {
          getLabelAndValue(t) {
            let e = this._cachedMeta.vScale,
              i = this.getParsed(t);
            return {
              label: e.getLabels()[t],
              value: "" + e.getLabelForValue(i[e.axis]),
            };
          }
          parseObjectData(t, e, i, s) {
            return eS.bind(this)(t, e, i, s);
          }
          update(t) {
            let e = this._cachedMeta,
              i = e.dataset,
              s = e.data || [],
              a = e.iScale.getLabels();
            if (((i.points = s), "resize" !== t)) {
              let e = this.resolveDatasetElementOptions(t);
              this.options.showLine || (e.borderWidth = 0);
              let n = {
                _loop: !0,
                _fullLoop: a.length === s.length,
                options: e,
              };
              this.updateElement(i, void 0, n, t);
            }
            this.updateElements(s, 0, s.length, t);
          }
          updateElements(t, e, i, s) {
            let a = this._cachedMeta.rScale,
              n = "reset" === s;
            for (let r = e; r < e + i; r++) {
              let e = t[r],
                i = this.resolveDataElementOptions(r, e.active ? "active" : s),
                o = a.getPointPositionForValue(r, this.getParsed(r).r),
                l = n ? a.xCenter : o.x,
                h = n ? a.yCenter : o.y,
                d = {
                  x: l,
                  y: h,
                  angle: o.angle,
                  skip: isNaN(l) || isNaN(h),
                  options: i,
                };
              this.updateElement(e, r, d, s);
            }
          }
        }
        (0, r._)(iv, "id", "radar"),
          (0, r._)(iv, "defaults", {
            datasetElementType: "line",
            dataElementType: "point",
            indexAxis: "r",
            showLine: !0,
            elements: { line: { fill: "start" } },
          }),
          (0, r._)(iv, "overrides", {
            aspectRatio: 1,
            scales: { r: { type: "radialLinear" } },
          });
        class iM extends il {
          getLabelAndValue(t) {
            let e = this._cachedMeta,
              i = this.chart.data.labels || [],
              { xScale: s, yScale: a } = e,
              n = this.getParsed(t),
              r = s.getLabelForValue(n.x),
              o = a.getLabelForValue(n.y);
            return { label: i[t] || "", value: "(" + r + ", " + o + ")" };
          }
          update(t) {
            let e = this._cachedMeta,
              { data: i = [] } = e,
              s = this.chart._animationsDisabled,
              { start: a, count: n } = tV(e, i, s);
            if (
              ((this._drawStart = a),
              (this._drawCount = n),
              tI(e) && ((a = 0), (n = i.length)),
              this.options.showLine)
            ) {
              this.datasetElementType || this.addElements();
              let { dataset: a, _dataset: n } = e;
              (a._chart = this.chart),
                (a._datasetIndex = this.index),
                (a._decimated = !!n._decimated),
                (a.points = i);
              let r = this.resolveDatasetElementOptions(t);
              (r.segment = this.options.segment),
                this.updateElement(a, void 0, { animated: !s, options: r }, t);
            } else
              this.datasetElementType &&
                (delete e.dataset, (this.datasetElementType = !1));
            this.updateElements(i, a, n, t);
          }
          addElements() {
            let { showLine: t } = this.options;
            !this.datasetElementType &&
              t &&
              (this.datasetElementType =
                this.chart.registry.getElement("line")),
              super.addElements();
          }
          updateElements(t, e, i, s) {
            let a = "reset" === s,
              {
                iScale: n,
                vScale: r,
                _stacked: o,
                _dataset: l,
              } = this._cachedMeta,
              h = this.resolveDataElementOptions(e, s),
              d = this.getSharedOptions(h),
              c = this.includeOptions(s, d),
              u = n.axis,
              f = r.axis,
              { spanGaps: g, segment: p } = this.options,
              m = tm(g) ? g : 1 / 0,
              b = this.chart._animationsDisabled || a || "none" === s,
              x = e > 0 && this.getParsed(e - 1);
            for (let h = e; h < e + i; ++h) {
              let e = t[h],
                i = this.getParsed(h),
                g = b ? e : {},
                _ = z(i[f]),
                y = (g[u] = n.getPixelForValue(i[u], h)),
                v = (g[f] =
                  a || _
                    ? r.getBasePixel()
                    : r.getPixelForValue(
                        o ? this.applyStack(r, i, o) : i[f],
                        h
                      ));
              (g.skip = isNaN(y) || isNaN(v) || _),
                (g.stop = h > 0 && Math.abs(i[u] - x[u]) > m),
                p && ((g.parsed = i), (g.raw = l.data[h])),
                c &&
                  (g.options =
                    d ||
                    this.resolveDataElementOptions(h, e.active ? "active" : s)),
                b || this.updateElement(e, h, g, s),
                (x = i);
            }
            this.updateSharedOptions(d, s, h);
          }
          getMaxOverflow() {
            let t = this._cachedMeta,
              e = t.data || [];
            if (!this.options.showLine) {
              let t = 0;
              for (let i = e.length - 1; i >= 0; --i)
                t = Math.max(
                  t,
                  e[i].size(this.resolveDataElementOptions(i)) / 2
                );
              return t > 0 && t;
            }
            let i = t.dataset,
              s = (i.options && i.options.borderWidth) || 0;
            return e.length
              ? Math.max(
                  s,
                  e[0].size(this.resolveDataElementOptions(0)),
                  e[e.length - 1].size(
                    this.resolveDataElementOptions(e.length - 1)
                  )
                ) / 2
              : s;
          }
        }
        function iw() {
          throw Error(
            "This method is not implemented: Check that a complete date adapter is provided."
          );
        }
        (0, r._)(iM, "id", "scatter"),
          (0, r._)(iM, "defaults", {
            datasetElementType: !1,
            dataElementType: "point",
            showLine: !1,
            fill: !1,
          }),
          (0, r._)(iM, "overrides", {
            interaction: { mode: "point" },
            scales: { x: { type: "linear" }, y: { type: "linear" } },
          });
        class ik {
          static override(t) {
            Object.assign(ik.prototype, t);
          }
          init() {}
          formats() {
            return iw();
          }
          parse() {
            return iw();
          }
          format() {
            return iw();
          }
          add() {
            return iw();
          }
          diff() {
            return iw();
          }
          startOf() {
            return iw();
          }
          endOf() {
            return iw();
          }
          constructor(t) {
            (0, r._)(this, "options", void 0), (this.options = t || {});
          }
        }
        var iP = { _date: ik };
        function iS(t, e, i, s, a) {
          let n = t.getSortedVisibleDatasetMetas(),
            r = i[e];
          for (let t = 0, i = n.length; t < i; ++t) {
            let { index: i, data: o } = n[t],
              { lo: l, hi: h } = (function (t, e, i, s) {
                let { controller: a, data: n, _sorted: r } = t,
                  o = a._cachedMeta.iScale,
                  l =
                    t.dataset && t.dataset.options
                      ? t.dataset.options.spanGaps
                      : null;
                if (o && e === o.axis && "r" !== e && r && n.length) {
                  let r = o._reversePixels ? tO : tC;
                  if (s) {
                    if (a._sharedOptions) {
                      let t = n[0],
                        s = "function" == typeof t.getRange && t.getRange(e);
                      if (s) {
                        let t = r(n, e, i - s),
                          a = r(n, e, i + s);
                        return { lo: t.lo, hi: a.hi };
                      }
                    }
                  } else {
                    let s = r(n, e, i);
                    if (l) {
                      let { vScale: e } = a._cachedMeta,
                        { _parsed: i } = t,
                        n = i
                          .slice(0, s.lo + 1)
                          .reverse()
                          .findIndex((t) => !z(t[e.axis]));
                      s.lo -= Math.max(0, n);
                      let r = i.slice(s.hi).findIndex((t) => !z(t[e.axis]));
                      s.hi += Math.max(0, r);
                    }
                    return s;
                  }
                }
                return { lo: 0, hi: n.length - 1 };
              })(n[t], e, r, a);
            for (let t = l; t <= h; ++t) {
              let e = o[t];
              e.skip || s(e, i, t);
            }
          }
        }
        function iD(t, e, i, s, a) {
          let n = [];
          return (
            (a || t.isPointInArea(e)) &&
              iS(
                t,
                i,
                e,
                function (i, r, o) {
                  (a || t7(i, t.chartArea, 0)) &&
                    i.inRange(e.x, e.y, s) &&
                    n.push({ element: i, datasetIndex: r, index: o });
                },
                !0
              ),
            n
          );
        }
        function iC(t, e, i, s, a, n) {
          let r;
          return n || t.isPointInArea(e)
            ? "r" !== i || s
              ? (function (t, e, i, s, a, n) {
                  let r = [],
                    o = (function (t) {
                      let e = -1 !== t.indexOf("x"),
                        i = -1 !== t.indexOf("y");
                      return function (t, s) {
                        return Math.sqrt(
                          Math.pow(e ? Math.abs(t.x - s.x) : 0, 2) +
                            Math.pow(i ? Math.abs(t.y - s.y) : 0, 2)
                        );
                      };
                    })(i),
                    l = 1 / 0;
                  return (
                    iS(t, i, e, function (i, h, d) {
                      let c = i.inRange(e.x, e.y, a);
                      if (s && !c) return;
                      let u = i.getCenterPoint(a);
                      if (!(n || t.isPointInArea(u)) && !c) return;
                      let f = o(e, u);
                      f < l
                        ? ((r = [{ element: i, datasetIndex: h, index: d }]),
                          (l = f))
                        : f === l &&
                          r.push({ element: i, datasetIndex: h, index: d });
                    }),
                    r
                  );
                })(t, e, i, s, a, n)
              : ((r = []),
                iS(t, i, e, function (t, i, s) {
                  let { startAngle: n, endAngle: o } = t.getProps(
                      ["startAngle", "endAngle"],
                      a
                    ),
                    { angle: l } = ty(t, { x: e.x, y: e.y });
                  tk(l, n, o) &&
                    r.push({ element: t, datasetIndex: i, index: s });
                }),
                r)
            : [];
        }
        function iO(t, e, i, s, a) {
          let n = [],
            r = "x" === i ? "inXRange" : "inYRange",
            o = !1;
          return (iS(t, i, e, (t, s, l) => {
            t[r] &&
              t[r](e[i], a) &&
              (n.push({ element: t, datasetIndex: s, index: l }),
              (o = o || t.inRange(e.x, e.y, a)));
          }),
          s && !o)
            ? []
            : n;
        }
        var iA = {
          modes: {
            index(t, e, i, s) {
              let a = eV(e, t),
                n = i.axis || "x",
                r = i.includeInvisible || !1,
                o = i.intersect ? iD(t, a, n, s, r) : iC(t, a, n, !1, s, r),
                l = [];
              return o.length
                ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                    let e = o[0].index,
                      i = t.data[e];
                    i &&
                      !i.skip &&
                      l.push({ element: i, datasetIndex: t.index, index: e });
                  }),
                  l)
                : [];
            },
            dataset(t, e, i, s) {
              let a = eV(e, t),
                n = i.axis || "xy",
                r = i.includeInvisible || !1,
                o = i.intersect ? iD(t, a, n, s, r) : iC(t, a, n, !1, s, r);
              if (o.length > 0) {
                let e = o[0].datasetIndex,
                  i = t.getDatasetMeta(e).data;
                o = [];
                for (let t = 0; t < i.length; ++t)
                  o.push({ element: i[t], datasetIndex: e, index: t });
              }
              return o;
            },
            point(t, e, i, s) {
              let a = eV(e, t);
              return iD(t, a, i.axis || "xy", s, i.includeInvisible || !1);
            },
            nearest(t, e, i, s) {
              let a = eV(e, t),
                n = i.axis || "xy",
                r = i.includeInvisible || !1;
              return iC(t, a, n, i.intersect, s, r);
            },
            x(t, e, i, s) {
              let a = eV(e, t);
              return iO(t, a, "x", i.intersect, s);
            },
            y(t, e, i, s) {
              let a = eV(e, t);
              return iO(t, a, "y", i.intersect, s);
            },
          },
        };
        let iL = ["left", "top", "right", "bottom"];
        function iT(t, e) {
          return t.filter((t) => t.pos === e);
        }
        function iE(t, e) {
          return t.filter((t) => -1 === iL.indexOf(t.pos) && t.box.axis === e);
        }
        function iR(t, e) {
          return t.sort((t, i) => {
            let s = e ? i : t,
              a = e ? t : i;
            return s.weight === a.weight
              ? s.index - a.index
              : s.weight - a.weight;
          });
        }
        function iF(t, e, i, s) {
          return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
        }
        function iz(t, e) {
          (t.top = Math.max(t.top, e.top)),
            (t.left = Math.max(t.left, e.left)),
            (t.bottom = Math.max(t.bottom, e.bottom)),
            (t.right = Math.max(t.right, e.right));
        }
        function iV(t, e, i, s) {
          let a,
            n,
            r,
            o,
            l,
            h,
            d = [];
          for (a = 0, n = t.length, l = 0; a < n; ++a) {
            (o = (r = t[a]).box).update(
              r.width || e.w,
              r.height || e.h,
              (function (t, e) {
                let i = e.maxPadding;
                var s = t ? ["left", "right"] : ["top", "bottom"];
                let a = { left: 0, top: 0, right: 0, bottom: 0 };
                return (
                  s.forEach((t) => {
                    a[t] = Math.max(e[t], i[t]);
                  }),
                  a
                );
              })(r.horizontal, e)
            );
            let { same: n, other: c } = (function (t, e, i, s) {
              let { pos: a, box: n } = i,
                r = t.maxPadding;
              if (!I(a)) {
                i.size && (t[a] -= i.size);
                let e = s[i.stack] || { size: 0, count: 1 };
                (e.size = Math.max(e.size, i.horizontal ? n.height : n.width)),
                  (i.size = e.size / e.count),
                  (t[a] += i.size);
              }
              n.getPadding && iz(r, n.getPadding());
              let o = Math.max(0, e.outerWidth - iF(r, t, "left", "right")),
                l = Math.max(0, e.outerHeight - iF(r, t, "top", "bottom")),
                h = o !== t.w,
                d = l !== t.h;
              return (
                (t.w = o),
                (t.h = l),
                i.horizontal ? { same: h, other: d } : { same: d, other: h }
              );
            })(e, i, r, s);
            (l |= n && d.length), (h = h || c), o.fullSize || d.push(r);
          }
          return (l && iV(d, e, i, s)) || h;
        }
        function iI(t, e, i, s, a) {
          (t.top = i),
            (t.left = e),
            (t.right = e + s),
            (t.bottom = i + a),
            (t.width = s),
            (t.height = a);
        }
        function iB(t, e, i, s) {
          let a = i.padding,
            { x: n, y: r } = e;
          for (let o of t) {
            let t = o.box,
              l = s[o.stack] || { count: 1, placed: 0, weight: 1 },
              h = o.stackWeight / l.weight || 1;
            if (o.horizontal) {
              let s = e.w * h,
                n = l.size || t.height;
              te(l.start) && (r = l.start),
                t.fullSize
                  ? iI(t, a.left, r, i.outerWidth - a.right - a.left, n)
                  : iI(t, e.left + l.placed, r, s, n),
                (l.start = r),
                (l.placed += s),
                (r = t.bottom);
            } else {
              let s = e.h * h,
                r = l.size || t.width;
              te(l.start) && (n = l.start),
                t.fullSize
                  ? iI(t, n, a.top, r, i.outerHeight - a.bottom - a.top)
                  : iI(t, n, e.top + l.placed, r, s),
                (l.start = n),
                (l.placed += s),
                (n = t.right);
            }
          }
          (e.x = n), (e.y = r);
        }
        var iW = {
          addBox(t, e) {
            t.boxes || (t.boxes = []),
              (e.fullSize = e.fullSize || !1),
              (e.position = e.position || "top"),
              (e.weight = e.weight || 0),
              (e._layers =
                e._layers ||
                function () {
                  return [
                    {
                      z: 0,
                      draw(t) {
                        e.draw(t);
                      },
                    },
                  ];
                }),
              t.boxes.push(e);
          },
          removeBox(t, e) {
            let i = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== i && t.boxes.splice(i, 1);
          },
          configure(t, e, i) {
            (e.fullSize = i.fullSize),
              (e.position = i.position),
              (e.weight = i.weight);
          },
          update(t, e, i, s) {
            if (!t) return;
            let a = ec(t.options.layout.padding),
              n = Math.max(e - a.width, 0),
              r = Math.max(i - a.height, 0),
              o = (function (t) {
                let e = (function (t) {
                    let e,
                      i,
                      s,
                      a,
                      n,
                      r,
                      o = [];
                    for (e = 0, i = (t || []).length; e < i; ++e)
                      (s = t[e]),
                        ({
                          position: a,
                          options: { stack: n, stackWeight: r = 1 },
                        } = s),
                        o.push({
                          index: e,
                          box: s,
                          pos: a,
                          horizontal: s.isHorizontal(),
                          weight: s.weight,
                          stack: n && a + n,
                          stackWeight: r,
                        });
                    return o;
                  })(t),
                  i = iR(
                    e.filter((t) => t.box.fullSize),
                    !0
                  ),
                  s = iR(iT(e, "left"), !0),
                  a = iR(iT(e, "right")),
                  n = iR(iT(e, "top"), !0),
                  r = iR(iT(e, "bottom")),
                  o = iE(e, "x"),
                  l = iE(e, "y");
                return {
                  fullSize: i,
                  leftAndTop: s.concat(n),
                  rightAndBottom: a.concat(l).concat(r).concat(o),
                  chartArea: iT(e, "chartArea"),
                  vertical: s.concat(a).concat(l),
                  horizontal: n.concat(r).concat(o),
                };
              })(t.boxes),
              l = o.vertical,
              h = o.horizontal;
            U(t.boxes, (t) => {
              "function" == typeof t.beforeLayout && t.beforeLayout();
            });
            let d = Object.freeze({
                outerWidth: e,
                outerHeight: i,
                padding: a,
                availableWidth: n,
                availableHeight: r,
                vBoxMaxWidth:
                  n /
                  2 /
                  (l.reduce(
                    (t, e) =>
                      e.box.options && !1 === e.box.options.display ? t : t + 1,
                    0
                  ) || 1),
                hBoxMaxHeight: r / 2,
              }),
              c = Object.assign({}, a);
            iz(c, ec(s));
            let u = Object.assign(
                { maxPadding: c, w: n, h: r, x: a.left, y: a.top },
                a
              ),
              f = (function (t, e) {
                let i,
                  s,
                  a,
                  n = (function (t) {
                    let e = {};
                    for (let i of t) {
                      let { stack: t, pos: s, stackWeight: a } = i;
                      if (!t || !iL.includes(s)) continue;
                      let n =
                        e[t] ||
                        (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
                      n.count++, (n.weight += a);
                    }
                    return e;
                  })(t),
                  { vBoxMaxWidth: r, hBoxMaxHeight: o } = e;
                for (i = 0, s = t.length; i < s; ++i) {
                  let { fullSize: s } = (a = t[i]).box,
                    l = n[a.stack],
                    h = l && a.stackWeight / l.weight;
                  a.horizontal
                    ? ((a.width = h ? h * r : s && e.availableWidth),
                      (a.height = o))
                    : ((a.width = r),
                      (a.height = h ? h * o : s && e.availableHeight));
                }
                return n;
              })(l.concat(h), d);
            iV(o.fullSize, u, d, f),
              iV(l, u, d, f),
              iV(h, u, d, f) && iV(l, u, d, f);
            let g = u.maxPadding;
            function p(t) {
              let e = Math.max(g[t] - u[t], 0);
              return (u[t] += e), e;
            }
            (u.y += p("top")),
              (u.x += p("left")),
              p("right"),
              p("bottom"),
              iB(o.leftAndTop, u, d, f),
              (u.x += u.w),
              (u.y += u.h),
              iB(o.rightAndBottom, u, d, f),
              (t.chartArea = {
                left: u.left,
                top: u.top,
                right: u.left + u.w,
                bottom: u.top + u.h,
                height: u.h,
                width: u.w,
              }),
              U(o.chartArea, (e) => {
                let i = e.box;
                Object.assign(i, t.chartArea),
                  i.update(u.w, u.h, { left: 0, top: 0, right: 0, bottom: 0 });
              });
          },
        };
        class iH {
          acquireContext(t, e) {}
          releaseContext(t) {
            return !1;
          }
          addEventListener(t, e, i) {}
          removeEventListener(t, e, i) {}
          getDevicePixelRatio() {
            return 1;
          }
          getMaximumSize(t, e, i, s) {
            return (
              (e = Math.max(0, e || t.width)),
              (i = i || t.height),
              { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) }
            );
          }
          isAttached(t) {
            return !0;
          }
          updateConfig(t) {}
        }
        class ij extends iH {
          acquireContext(t) {
            return (t && t.getContext && t.getContext("2d")) || null;
          }
          updateConfig(t) {
            t.options.animation = !1;
          }
        }
        let iN = "$chartjs",
          iU = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout",
          },
          i$ = (t) => null === t || "" === t,
          iY = !!eW && { passive: !0 };
        function iX(t, e) {
          for (let i of t) if (i === e || i.contains(e)) return !0;
        }
        function iq(t, e, i) {
          let s = t.canvas,
            a = new MutationObserver((t) => {
              let e = !1;
              for (let i of t)
                e = (e = e || iX(i.addedNodes, s)) && !iX(i.removedNodes, s);
              e && i();
            });
          return a.observe(document, { childList: !0, subtree: !0 }), a;
        }
        function iK(t, e, i) {
          let s = t.canvas,
            a = new MutationObserver((t) => {
              let e = !1;
              for (let i of t)
                e = (e = e || iX(i.removedNodes, s)) && !iX(i.addedNodes, s);
              e && i();
            });
          return a.observe(document, { childList: !0, subtree: !0 }), a;
        }
        let iJ = new Map(),
          iG = 0;
        function iZ() {
          let t = window.devicePixelRatio;
          t !== iG &&
            ((iG = t),
            iJ.forEach((e, i) => {
              i.currentDevicePixelRatio !== t && e();
            }));
        }
        function iQ(t, e, i) {
          let s = t.canvas,
            a = s && eT(s);
          if (!a) return;
          let n = tR((t, e) => {
              let s = a.clientWidth;
              i(t, e), s < a.clientWidth && i();
            }, window),
            r = new ResizeObserver((t) => {
              let e = t[0],
                i = e.contentRect.width,
                s = e.contentRect.height;
              (0 !== i || 0 !== s) && n(i, s);
            });
          return (
            r.observe(a),
            iJ.size || window.addEventListener("resize", iZ),
            iJ.set(t, n),
            r
          );
        }
        function i0(t, e, i) {
          i && i.disconnect(),
            "resize" === e &&
              (iJ.delete(t),
              iJ.size || window.removeEventListener("resize", iZ));
        }
        function i1(t, e, i) {
          let s = t.canvas,
            a = tR((e) => {
              null !== t.ctx &&
                i(
                  (function (t, e) {
                    let i = iU[t.type] || t.type,
                      { x: s, y: a } = eV(t, e);
                    return {
                      type: i,
                      chart: e,
                      native: t,
                      x: void 0 !== s ? s : null,
                      y: void 0 !== a ? a : null,
                    };
                  })(e, t)
                );
            }, t);
          return s && s.addEventListener(e, a, iY), a;
        }
        class i2 extends iH {
          acquireContext(t, e) {
            let i = t && t.getContext && t.getContext("2d");
            return i && i.canvas === t
              ? (!(function (t, e) {
                  let i = t.style,
                    s = t.getAttribute("height"),
                    a = t.getAttribute("width");
                  if (
                    ((t[iN] = {
                      initial: {
                        height: s,
                        width: a,
                        style: {
                          display: i.display,
                          height: i.height,
                          width: i.width,
                        },
                      },
                    }),
                    (i.display = i.display || "block"),
                    (i.boxSizing = i.boxSizing || "border-box"),
                    i$(a))
                  ) {
                    let e = eH(t, "width");
                    void 0 !== e && (t.width = e);
                  }
                  if (i$(s))
                    if ("" === t.style.height) t.height = t.width / (e || 2);
                    else {
                      let e = eH(t, "height");
                      void 0 !== e && (t.height = e);
                    }
                })(t, e),
                i)
              : null;
          }
          releaseContext(t) {
            let e = t.canvas;
            if (!e[iN]) return !1;
            let i = e[iN].initial;
            ["height", "width"].forEach((t) => {
              let s = i[t];
              z(s) ? e.removeAttribute(t) : e.setAttribute(t, s);
            });
            let s = i.style || {};
            return (
              Object.keys(s).forEach((t) => {
                e.style[t] = s[t];
              }),
              (e.width = e.width),
              delete e[iN],
              !0
            );
          }
          addEventListener(t, e, i) {
            this.removeEventListener(t, e);
            let s = t.$proxies || (t.$proxies = {}),
              a = { attach: iq, detach: iK, resize: iQ }[e] || i1;
            s[e] = a(t, e, i);
          }
          removeEventListener(t, e) {
            let i = t.$proxies || (t.$proxies = {}),
              s = i[e];
            s &&
              ((
                { attach: i0, detach: i0, resize: i0 }[e] ||
                function (t, e, i) {
                  t && t.canvas && t.canvas.removeEventListener(e, i, iY);
                }
              )(t, e, s),
              (i[e] = void 0));
          }
          getDevicePixelRatio() {
            return window.devicePixelRatio;
          }
          getMaximumSize(t, e, i, s) {
            return (function (t, e, i, s) {
              let a = eR(t),
                n = ez(a, "margin"),
                r = eE(a.maxWidth, t, "clientWidth") || to,
                o = eE(a.maxHeight, t, "clientHeight") || to,
                l = (function (t, e, i) {
                  let s, a;
                  if (void 0 === e || void 0 === i) {
                    let n = t && eT(t);
                    if (n) {
                      let t = n.getBoundingClientRect(),
                        r = eR(n),
                        o = ez(r, "border", "width"),
                        l = ez(r, "padding");
                      (e = t.width - l.width - o.width),
                        (i = t.height - l.height - o.height),
                        (s = eE(r.maxWidth, n, "clientWidth")),
                        (a = eE(r.maxHeight, n, "clientHeight"));
                    } else (e = t.clientWidth), (i = t.clientHeight);
                  }
                  return {
                    width: e,
                    height: i,
                    maxWidth: s || to,
                    maxHeight: a || to,
                  };
                })(t, e, i),
                { width: h, height: d } = l;
              if ("content-box" === a.boxSizing) {
                let t = ez(a, "border", "width"),
                  e = ez(a, "padding");
                (h -= e.width + t.width), (d -= e.height + t.height);
              }
              return (
                (h = Math.max(0, h - n.width)),
                (d = Math.max(0, s ? h / s : d - n.height)),
                (h = eI(Math.min(h, r, l.maxWidth))),
                (d = eI(Math.min(d, o, l.maxHeight))),
                h && !d && (d = eI(h / 2)),
                (void 0 !== e || void 0 !== i) &&
                  s &&
                  l.height &&
                  d > l.height &&
                  (h = eI(Math.floor((d = l.height) * s))),
                { width: h, height: d }
              );
            })(t, e, i, s);
          }
          isAttached(t) {
            let e = t && eT(t);
            return !!(e && e.isConnected);
          }
        }
        class i5 {
          tooltipPosition(t) {
            let { x: e, y: i } = this.getProps(["x", "y"], t);
            return { x: e, y: i };
          }
          hasValue() {
            return tm(this.x) && tm(this.y);
          }
          getProps(t, e) {
            let i = this.$animations;
            if (!e || !i) return this;
            let s = {};
            return (
              t.forEach((t) => {
                s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
              }),
              s
            );
          }
          constructor() {
            (0, r._)(this, "x", void 0),
              (0, r._)(this, "y", void 0),
              (0, r._)(this, "active", !1),
              (0, r._)(this, "options", void 0),
              (0, r._)(this, "$animations", void 0);
          }
        }
        function i3(t, e, i, s, a) {
          let n,
            r,
            o,
            l = H(s, 0),
            h = Math.min(H(a, t.length), t.length),
            d = 0;
          for (
            i = Math.ceil(i), a && (i = (n = a - s) / Math.floor(n / i)), o = l;
            o < 0;

          )
            o = Math.round(l + ++d * i);
          for (r = Math.max(l, 0); r < h; r++)
            r === o && (e.push(t[r]), (o = Math.round(l + ++d * i)));
        }
        (0, r._)(i5, "defaults", {}), (0, r._)(i5, "defaultRoutes", void 0);
        let i8 = (t, e, i) =>
            "top" === e || "left" === e ? t[e] + i : t[e] - i,
          i4 = (t, e) => Math.min(e || t, t);
        function i6(t, e) {
          let i = [],
            s = t.length / e,
            a = t.length,
            n = 0;
          for (; n < a; n += s) i.push(t[Math.floor(n)]);
          return i;
        }
        function i7(t) {
          return t.drawTicks ? t.tickLength : 0;
        }
        function i9(t, e) {
          if (!t.display) return 0;
          let i = eu(t.font, e),
            s = ec(t.padding);
          return (V(t.text) ? t.text.length : 1) * i.lineHeight + s.height;
        }
        class st extends i5 {
          init(t) {
            (this.options = t.setContext(this.getContext())),
              (this.axis = t.axis),
              (this._userMin = this.parse(t.min)),
              (this._userMax = this.parse(t.max)),
              (this._suggestedMin = this.parse(t.suggestedMin)),
              (this._suggestedMax = this.parse(t.suggestedMax));
          }
          parse(t, e) {
            return t;
          }
          getUserBounds() {
            let {
              _userMin: t,
              _userMax: e,
              _suggestedMin: i,
              _suggestedMax: s,
            } = this;
            return (
              (t = W(t, 1 / 0)),
              (e = W(e, -1 / 0)),
              (i = W(i, 1 / 0)),
              (s = W(s, -1 / 0)),
              { min: W(t, i), max: W(e, s), minDefined: B(t), maxDefined: B(e) }
            );
          }
          getMinMax(t) {
            let e,
              {
                min: i,
                max: s,
                minDefined: a,
                maxDefined: n,
              } = this.getUserBounds();
            if (a && n) return { min: i, max: s };
            let r = this.getMatchingVisibleMetas();
            for (let o = 0, l = r.length; o < l; ++o)
              (e = r[o].controller.getMinMax(this, t)),
                a || (i = Math.min(i, e.min)),
                n || (s = Math.max(s, e.max));
            return (
              (i = n && i > s ? s : i),
              (s = a && i > s ? i : s),
              { min: W(i, W(s, i)), max: W(s, W(i, s)) }
            );
          }
          getPadding() {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0,
            };
          }
          getTicks() {
            return this.ticks;
          }
          getLabels() {
            let t = this.chart.data;
            return (
              this.options.labels ||
              (this.isHorizontal() ? t.xLabels : t.yLabels) ||
              t.labels ||
              []
            );
          }
          getLabelItems() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.chart.chartArea;
            return (
              this._labelItems ||
              (this._labelItems = this._computeLabelItems(t))
            );
          }
          beforeLayout() {
            (this._cache = {}), (this._dataLimitsCached = !1);
          }
          beforeUpdate() {
            N(this.options.beforeUpdate, [this]);
          }
          update(t, e, i) {
            let { beginAtZero: s, grace: a, ticks: n } = this.options,
              r = n.sampleSize;
            this.beforeUpdate(),
              (this.maxWidth = t),
              (this.maxHeight = e),
              (this._margins = i =
                Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
              (this.ticks = null),
              (this._labelSizes = null),
              (this._gridLineItems = null),
              (this._labelItems = null),
              this.beforeSetDimensions(),
              this.setDimensions(),
              this.afterSetDimensions(),
              (this._maxLength = this.isHorizontal()
                ? this.width + i.left + i.right
                : this.height + i.top + i.bottom),
              this._dataLimitsCached ||
                (this.beforeDataLimits(),
                this.determineDataLimits(),
                this.afterDataLimits(),
                (this._range = (function (t, e, i) {
                  let { min: s, max: a } = t,
                    n = j(e, (a - s) / 2),
                    r = (t, e) => (i && 0 === t ? 0 : t + e);
                  return { min: r(s, -Math.abs(n)), max: r(a, n) };
                })(this, a, s)),
                (this._dataLimitsCached = !0)),
              this.beforeBuildTicks(),
              (this.ticks = this.buildTicks() || []),
              this.afterBuildTicks();
            let o = r < this.ticks.length;
            this._convertTicksToLabels(o ? i6(this.ticks, r) : this.ticks),
              this.configure(),
              this.beforeCalculateLabelRotation(),
              this.calculateLabelRotation(),
              this.afterCalculateLabelRotation(),
              n.display &&
                (n.autoSkip || "auto" === n.source) &&
                ((this.ticks = (function (t, e) {
                  let i = t.options.ticks,
                    s = (function (t) {
                      let e = t.options.offset,
                        i = t._tickSize();
                      return Math.floor(
                        Math.min(t._length / i + +!e, t._maxLength / i)
                      );
                    })(t),
                    a = Math.min(i.maxTicksLimit || s, s),
                    n = i.major.enabled
                      ? (function (t) {
                          let e,
                            i,
                            s = [];
                          for (e = 0, i = t.length; e < i; e++)
                            t[e].major && s.push(e);
                          return s;
                        })(e)
                      : [],
                    r = n.length,
                    o = n[0],
                    l = n[r - 1],
                    h = [];
                  if (r > a)
                    return (
                      (function (t, e, i, s) {
                        let a,
                          n = 0,
                          r = i[0];
                        for (a = 0, s = Math.ceil(s); a < t.length; a++)
                          a === r && (e.push(t[a]), (r = i[++n * s]));
                      })(e, h, n, r / a),
                      h
                    );
                  let d = (function (t, e, i) {
                    let s = (function (t) {
                        let e,
                          i,
                          s = t.length;
                        if (s < 2) return !1;
                        for (i = t[0], e = 1; e < s; ++e)
                          if (t[e] - t[e - 1] !== i) return !1;
                        return i;
                      })(t),
                      a = e.length / i;
                    if (!s) return Math.max(a, 1);
                    let n = (function (t) {
                      let e,
                        i = [],
                        s = Math.sqrt(t);
                      for (e = 1; e < s; e++)
                        t % e == 0 && (i.push(e), i.push(t / e));
                      return (
                        s === (0 | s) && i.push(s),
                        i.sort((t, e) => t - e).pop(),
                        i
                      );
                    })(s);
                    for (let t = 0, e = n.length - 1; t < e; t++) {
                      let e = n[t];
                      if (e > a) return e;
                    }
                    return Math.max(a, 1);
                  })(n, e, a);
                  if (r > 0) {
                    let t,
                      i,
                      s = r > 1 ? Math.round((l - o) / (r - 1)) : null;
                    for (
                      i3(e, h, d, z(s) ? 0 : o - s, o), t = 0, i = r - 1;
                      t < i;
                      t++
                    )
                      i3(e, h, d, n[t], n[t + 1]);
                    return i3(e, h, d, l, z(s) ? e.length : l + s), h;
                  }
                  return i3(e, h, d), h;
                })(this, this.ticks)),
                (this._labelSizes = null),
                this.afterAutoSkip()),
              o && this._convertTicksToLabels(this.ticks),
              this.beforeFit(),
              this.fit(),
              this.afterFit(),
              this.afterUpdate();
          }
          configure() {
            let t,
              e,
              i = this.options.reverse;
            this.isHorizontal()
              ? ((t = this.left), (e = this.right))
              : ((t = this.top), (e = this.bottom), (i = !i)),
              (this._startPixel = t),
              (this._endPixel = e),
              (this._reversePixels = i),
              (this._length = e - t),
              (this._alignToPixels = this.options.alignToPixels);
          }
          afterUpdate() {
            N(this.options.afterUpdate, [this]);
          }
          beforeSetDimensions() {
            N(this.options.beforeSetDimensions, [this]);
          }
          setDimensions() {
            this.isHorizontal()
              ? ((this.width = this.maxWidth),
                (this.left = 0),
                (this.right = this.width))
              : ((this.height = this.maxHeight),
                (this.top = 0),
                (this.bottom = this.height)),
              (this.paddingLeft = 0),
              (this.paddingTop = 0),
              (this.paddingRight = 0),
              (this.paddingBottom = 0);
          }
          afterSetDimensions() {
            N(this.options.afterSetDimensions, [this]);
          }
          _callHooks(t) {
            this.chart.notifyPlugins(t, this.getContext()),
              N(this.options[t], [this]);
          }
          beforeDataLimits() {
            this._callHooks("beforeDataLimits");
          }
          determineDataLimits() {}
          afterDataLimits() {
            this._callHooks("afterDataLimits");
          }
          beforeBuildTicks() {
            this._callHooks("beforeBuildTicks");
          }
          buildTicks() {
            return [];
          }
          afterBuildTicks() {
            this._callHooks("afterBuildTicks");
          }
          beforeTickToLabelConversion() {
            N(this.options.beforeTickToLabelConversion, [this]);
          }
          generateTickLabels(t) {
            let e,
              i,
              s,
              a = this.options.ticks;
            for (e = 0, i = t.length; e < i; e++)
              (s = t[e]).label = N(a.callback, [s.value, e, t], this);
          }
          afterTickToLabelConversion() {
            N(this.options.afterTickToLabelConversion, [this]);
          }
          beforeCalculateLabelRotation() {
            N(this.options.beforeCalculateLabelRotation, [this]);
          }
          calculateLabelRotation() {
            let t,
              e,
              i,
              s = this.options,
              a = s.ticks,
              n = i4(this.ticks.length, s.ticks.maxTicksLimit),
              r = a.minRotation || 0,
              o = a.maxRotation,
              l = r;
            if (
              !this._isVisible() ||
              !a.display ||
              r >= o ||
              n <= 1 ||
              !this.isHorizontal()
            ) {
              this.labelRotation = r;
              return;
            }
            let h = this._getLabelSizes(),
              d = h.widest.width,
              c = h.highest.height,
              u = tP(this.chart.width - d, 0, this.maxWidth);
            d + 6 > (t = s.offset ? this.maxWidth / n : u / (n - 1)) &&
              ((t = u / (n - (s.offset ? 0.5 : 1))),
              (e =
                this.maxHeight -
                i7(s.grid) -
                a.padding -
                i9(s.title, this.chart.options.font)),
              (i = Math.sqrt(d * d + c * c)),
              (l = Math.max(
                r,
                Math.min(
                  o,
                  (l =
                    (180 / ta) *
                    Math.min(
                      Math.asin(tP((h.highest.height + 6) / t, -1, 1)),
                      Math.asin(tP(e / i, -1, 1)) - Math.asin(tP(c / i, -1, 1))
                    ))
                )
              ))),
              (this.labelRotation = l);
          }
          afterCalculateLabelRotation() {
            N(this.options.afterCalculateLabelRotation, [this]);
          }
          afterAutoSkip() {}
          beforeFit() {
            N(this.options.beforeFit, [this]);
          }
          fit() {
            let t = { width: 0, height: 0 },
              {
                chart: e,
                options: { ticks: i, title: s, grid: a },
              } = this,
              n = this._isVisible(),
              r = this.isHorizontal();
            if (n) {
              let n = i9(s, e.options.font);
              if (
                (r
                  ? ((t.width = this.maxWidth), (t.height = i7(a) + n))
                  : ((t.height = this.maxHeight), (t.width = i7(a) + n)),
                i.display && this.ticks.length)
              ) {
                let {
                    first: e,
                    last: s,
                    widest: a,
                    highest: n,
                  } = this._getLabelSizes(),
                  o = 2 * i.padding,
                  l = tx(this.labelRotation),
                  h = Math.cos(l),
                  d = Math.sin(l);
                if (r) {
                  let e = i.mirror ? 0 : d * a.width + h * n.height;
                  t.height = Math.min(this.maxHeight, t.height + e + o);
                } else {
                  let e = i.mirror ? 0 : h * a.width + d * n.height;
                  t.width = Math.min(this.maxWidth, t.width + e + o);
                }
                this._calculatePadding(e, s, d, h);
              }
            }
            this._handleMargins(),
              r
                ? ((this.width = this._length =
                    e.width - this._margins.left - this._margins.right),
                  (this.height = t.height))
                : ((this.width = t.width),
                  (this.height = this._length =
                    e.height - this._margins.top - this._margins.bottom));
          }
          _calculatePadding(t, e, i, s) {
            let {
                ticks: { align: a, padding: n },
                position: r,
              } = this.options,
              o = 0 !== this.labelRotation,
              l = "top" !== r && "x" === this.axis;
            if (this.isHorizontal()) {
              let r = this.getPixelForTick(0) - this.left,
                h = this.right - this.getPixelForTick(this.ticks.length - 1),
                d = 0,
                c = 0;
              o
                ? l
                  ? ((d = s * t.width), (c = i * e.height))
                  : ((d = i * t.height), (c = s * e.width))
                : "start" === a
                ? (c = e.width)
                : "end" === a
                ? (d = t.width)
                : "inner" !== a && ((d = t.width / 2), (c = e.width / 2)),
                (this.paddingLeft = Math.max(
                  ((d - r + n) * this.width) / (this.width - r),
                  0
                )),
                (this.paddingRight = Math.max(
                  ((c - h + n) * this.width) / (this.width - h),
                  0
                ));
            } else {
              let i = e.height / 2,
                s = t.height / 2;
              "start" === a
                ? ((i = 0), (s = t.height))
                : "end" === a && ((i = e.height), (s = 0)),
                (this.paddingTop = i + n),
                (this.paddingBottom = s + n);
            }
          }
          _handleMargins() {
            this._margins &&
              ((this._margins.left = Math.max(
                this.paddingLeft,
                this._margins.left
              )),
              (this._margins.top = Math.max(
                this.paddingTop,
                this._margins.top
              )),
              (this._margins.right = Math.max(
                this.paddingRight,
                this._margins.right
              )),
              (this._margins.bottom = Math.max(
                this.paddingBottom,
                this._margins.bottom
              )));
          }
          afterFit() {
            N(this.options.afterFit, [this]);
          }
          isHorizontal() {
            let { axis: t, position: e } = this.options;
            return "top" === e || "bottom" === e || "x" === t;
          }
          isFullSize() {
            return this.options.fullSize;
          }
          _convertTicksToLabels(t) {
            let e, i;
            for (
              this.beforeTickToLabelConversion(),
                this.generateTickLabels(t),
                e = 0,
                i = t.length;
              e < i;
              e++
            )
              z(t[e].label) && (t.splice(e, 1), i--, e--);
            this.afterTickToLabelConversion();
          }
          _getLabelSizes() {
            let t = this._labelSizes;
            if (!t) {
              let e = this.options.ticks.sampleSize,
                i = this.ticks;
              e < i.length && (i = i6(i, e)),
                (this._labelSizes = t =
                  this._computeLabelSizes(
                    i,
                    i.length,
                    this.options.ticks.maxTicksLimit
                  ));
            }
            return t;
          }
          _computeLabelSizes(t, e, i) {
            let s,
              a,
              n,
              r,
              o,
              l,
              h,
              d,
              c,
              u,
              f,
              { ctx: g, _longestTextCache: p } = this,
              m = [],
              b = [],
              x = Math.floor(e / i4(e, i)),
              _ = 0,
              y = 0;
            for (s = 0; s < e; s += x) {
              if (
                ((r = t[s].label),
                (g.font = l = (o = this._resolveTickFontOptions(s)).string),
                (h = p[l] = p[l] || { data: {}, gc: [] }),
                (d = o.lineHeight),
                (c = u = 0),
                z(r) || V(r))
              ) {
                if (V(r))
                  for (a = 0, n = r.length; a < n; ++a)
                    z((f = r[a])) ||
                      V(f) ||
                      ((c = t5(g, h.data, h.gc, c, f)), (u += d));
              } else (c = t5(g, h.data, h.gc, c, r)), (u = d);
              m.push(c), b.push(u), (_ = Math.max(c, _)), (y = Math.max(u, y));
            }
            U(p, (t) => {
              let i,
                s = t.gc,
                a = s.length / 2;
              if (a > e) {
                for (i = 0; i < a; ++i) delete t.data[s[i]];
                s.splice(0, a);
              }
            });
            let v = m.indexOf(_),
              M = b.indexOf(y),
              w = (t) => ({ width: m[t] || 0, height: b[t] || 0 });
            return {
              first: w(0),
              last: w(e - 1),
              widest: w(v),
              highest: w(M),
              widths: m,
              heights: b,
            };
          }
          getLabelForValue(t) {
            return t;
          }
          getPixelForValue(t, e) {
            return NaN;
          }
          getValueForPixel(t) {}
          getPixelForTick(t) {
            let e = this.ticks;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t].value);
          }
          getPixelForDecimal(t) {
            this._reversePixels && (t = 1 - t);
            let e = this._startPixel + t * this._length;
            return tP(
              this._alignToPixels ? t3(this.chart, e, 0) : e,
              -32768,
              32767
            );
          }
          getDecimalForPixel(t) {
            let e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e;
          }
          getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
          }
          getBaseValue() {
            let { min: t, max: e } = this;
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
          }
          getContext(t) {
            var e, i;
            let s = this.ticks || [];
            if (t >= 0 && t < s.length) {
              let i = s[t];
              return (
                i.$context ||
                ((e = this.getContext()),
                (i.$context = eg(e, { tick: i, index: t, type: "tick" })))
              );
            }
            return (
              this.$context ||
              (this.$context =
                ((i = this.chart.getContext()),
                eg(i, { scale: this, type: "scale" })))
            );
          }
          _tickSize() {
            let t = this.options.ticks,
              e = tx(this.labelRotation),
              i = Math.abs(Math.cos(e)),
              s = Math.abs(Math.sin(e)),
              a = this._getLabelSizes(),
              n = t.autoSkipPadding || 0,
              r = a ? a.widest.width + n : 0,
              o = a ? a.highest.height + n : 0;
            return this.isHorizontal()
              ? o * i > r * s
                ? r / i
                : o / s
              : o * s < r * i
              ? o / i
              : r / s;
          }
          _isVisible() {
            let t = this.options.display;
            return "auto" !== t
              ? !!t
              : this.getMatchingVisibleMetas().length > 0;
          }
          _computeGridLineItems(t) {
            let e,
              i,
              s,
              a,
              n,
              r,
              o,
              l,
              h,
              d,
              c,
              u,
              f = this.axis,
              g = this.chart,
              p = this.options,
              { grid: m, position: b, border: x } = p,
              _ = m.offset,
              y = this.isHorizontal(),
              v = this.ticks.length + +!!_,
              M = i7(m),
              w = [],
              k = x.setContext(this.getContext()),
              P = k.display ? k.width : 0,
              S = P / 2,
              D = function (t) {
                return t3(g, t, P);
              };
            if ("top" === b)
              (e = D(this.bottom)),
                (r = this.bottom - M),
                (l = e - S),
                (d = D(t.top) + S),
                (u = t.bottom);
            else if ("bottom" === b)
              (e = D(this.top)),
                (d = t.top),
                (u = D(t.bottom) - S),
                (r = e + S),
                (l = this.top + M);
            else if ("left" === b)
              (e = D(this.right)),
                (n = this.right - M),
                (o = e - S),
                (h = D(t.left) + S),
                (c = t.right);
            else if ("right" === b)
              (e = D(this.left)),
                (h = t.left),
                (c = D(t.right) - S),
                (n = e + S),
                (o = this.left + M);
            else if ("x" === f) {
              if ("center" === b) e = D((t.top + t.bottom) / 2 + 0.5);
              else if (I(b)) {
                let t = Object.keys(b)[0],
                  i = b[t];
                e = D(this.chart.scales[t].getPixelForValue(i));
              }
              (d = t.top), (u = t.bottom), (l = (r = e + S) + M);
            } else if ("y" === f) {
              if ("center" === b) e = D((t.left + t.right) / 2);
              else if (I(b)) {
                let t = Object.keys(b)[0],
                  i = b[t];
                e = D(this.chart.scales[t].getPixelForValue(i));
              }
              (o = (n = e - S) - M), (h = t.left), (c = t.right);
            }
            let C = H(p.ticks.maxTicksLimit, v),
              O = Math.max(1, Math.ceil(v / C));
            for (i = 0; i < v; i += O) {
              let t = this.getContext(i),
                e = m.setContext(t),
                f = x.setContext(t),
                p = e.lineWidth,
                b = e.color,
                v = f.dash || [],
                M = f.dashOffset,
                k = e.tickWidth,
                P = e.tickColor,
                S = e.tickBorderDash || [],
                D = e.tickBorderDashOffset;
              void 0 !==
                (s = (function (t, e, i) {
                  let s,
                    a = t.ticks.length,
                    n = Math.min(e, a - 1),
                    r = t._startPixel,
                    o = t._endPixel,
                    l = t.getPixelForTick(n);
                  if (
                    !i ||
                    ((s =
                      1 === a
                        ? Math.max(l - r, o - l)
                        : 0 === e
                        ? (t.getPixelForTick(1) - l) / 2
                        : (l - t.getPixelForTick(n - 1)) / 2),
                    !((l += n < e ? s : -s) < r - 1e-6) && !(l > o + 1e-6))
                  )
                    return l;
                })(this, i, _)) &&
                ((a = t3(g, s, p)),
                y ? (n = o = h = c = a) : (r = l = d = u = a),
                w.push({
                  tx1: n,
                  ty1: r,
                  tx2: o,
                  ty2: l,
                  x1: h,
                  y1: d,
                  x2: c,
                  y2: u,
                  width: p,
                  color: b,
                  borderDash: v,
                  borderDashOffset: M,
                  tickWidth: k,
                  tickColor: P,
                  tickBorderDash: S,
                  tickBorderDashOffset: D,
                }));
            }
            return (this._ticksLength = v), (this._borderValue = e), w;
          }
          _computeLabelItems(t) {
            let e,
              i,
              s,
              a,
              n,
              r,
              o,
              l,
              h,
              d,
              c,
              u = this.axis,
              f = this.options,
              { position: g, ticks: p } = f,
              m = this.isHorizontal(),
              b = this.ticks,
              { align: x, crossAlign: _, padding: y, mirror: v } = p,
              M = i7(f.grid),
              w = M + y,
              k = v ? -y : w,
              P = -tx(this.labelRotation),
              S = [],
              D = "middle";
            if ("top" === g)
              (n = this.bottom - k), (r = this._getXAxisLabelAlignment());
            else if ("bottom" === g)
              (n = this.top + k), (r = this._getXAxisLabelAlignment());
            else if ("left" === g) {
              let t = this._getYAxisLabelAlignment(M);
              (r = t.textAlign), (a = t.x);
            } else if ("right" === g) {
              let t = this._getYAxisLabelAlignment(M);
              (r = t.textAlign), (a = t.x);
            } else if ("x" === u) {
              if ("center" === g) n = (t.top + t.bottom) / 2 + w;
              else if (I(g)) {
                let t = Object.keys(g)[0],
                  e = g[t];
                n = this.chart.scales[t].getPixelForValue(e) + w;
              }
              r = this._getXAxisLabelAlignment();
            } else if ("y" === u) {
              if ("center" === g) a = (t.left + t.right) / 2 - w;
              else if (I(g)) {
                let t = Object.keys(g)[0],
                  e = g[t];
                a = this.chart.scales[t].getPixelForValue(e);
              }
              r = this._getYAxisLabelAlignment(M).textAlign;
            }
            "y" === u &&
              ("start" === x ? (D = "top") : "end" === x && (D = "bottom"));
            let C = this._getLabelSizes();
            for (e = 0, i = b.length; e < i; ++e) {
              let t;
              s = b[e].label;
              let u = p.setContext(this.getContext(e));
              (o = this.getPixelForTick(e) + p.labelOffset),
                (h = (l = this._resolveTickFontOptions(e)).lineHeight);
              let f = (d = V(s) ? s.length : 1) / 2,
                x = u.color,
                y = u.textStrokeColor,
                M = u.textStrokeWidth,
                w = r;
              if (
                (m
                  ? ((a = o),
                    "inner" === r &&
                      (w =
                        e === i - 1
                          ? this.options.reverse
                            ? "left"
                            : "right"
                          : 0 === e
                          ? this.options.reverse
                            ? "right"
                            : "left"
                          : "center"),
                    (c =
                      "top" === g
                        ? "near" === _ || 0 !== P
                          ? -d * h + h / 2
                          : "center" === _
                          ? -C.highest.height / 2 - f * h + h
                          : -C.highest.height + h / 2
                        : "near" === _ || 0 !== P
                        ? h / 2
                        : "center" === _
                        ? C.highest.height / 2 - f * h
                        : C.highest.height - d * h),
                    v && (c *= -1),
                    0 === P ||
                      u.showLabelBackdrop ||
                      (a += (h / 2) * Math.sin(P)))
                  : ((n = o), (c = ((1 - d) * h) / 2)),
                u.showLabelBackdrop)
              ) {
                let s = ec(u.backdropPadding),
                  a = C.heights[e],
                  n = C.widths[e],
                  o = c - s.top,
                  l = 0 - s.left;
                switch (D) {
                  case "middle":
                    o -= a / 2;
                    break;
                  case "bottom":
                    o -= a;
                }
                switch (r) {
                  case "center":
                    l -= n / 2;
                    break;
                  case "right":
                    l -= n;
                    break;
                  case "inner":
                    e === i - 1 ? (l -= n) : e > 0 && (l -= n / 2);
                }
                t = {
                  left: l,
                  top: o,
                  width: n + s.width,
                  height: a + s.height,
                  color: u.backdropColor,
                };
              }
              S.push({
                label: s,
                font: l,
                textOffset: c,
                options: {
                  rotation: P,
                  color: x,
                  strokeColor: y,
                  strokeWidth: M,
                  textAlign: w,
                  textBaseline: D,
                  translation: [a, n],
                  backdrop: t,
                },
              });
            }
            return S;
          }
          _getXAxisLabelAlignment() {
            let { position: t, ticks: e } = this.options;
            if (-tx(this.labelRotation)) return "top" === t ? "left" : "right";
            let i = "center";
            return (
              "start" === e.align
                ? (i = "left")
                : "end" === e.align
                ? (i = "right")
                : "inner" === e.align && (i = "inner"),
              i
            );
          }
          _getYAxisLabelAlignment(t) {
            let e,
              i,
              {
                position: s,
                ticks: { crossAlign: a, mirror: n, padding: r },
              } = this.options,
              o = this._getLabelSizes(),
              l = t + r,
              h = o.widest.width;
            return (
              "left" === s
                ? n
                  ? ((i = this.right + r),
                    "near" === a
                      ? (e = "left")
                      : "center" === a
                      ? ((e = "center"), (i += h / 2))
                      : ((e = "right"), (i += h)))
                  : ((i = this.right - l),
                    "near" === a
                      ? (e = "right")
                      : "center" === a
                      ? ((e = "center"), (i -= h / 2))
                      : ((e = "left"), (i = this.left)))
                : "right" === s
                ? n
                  ? ((i = this.left + r),
                    "near" === a
                      ? (e = "right")
                      : "center" === a
                      ? ((e = "center"), (i -= h / 2))
                      : ((e = "left"), (i -= h)))
                  : ((i = this.left + l),
                    "near" === a
                      ? (e = "left")
                      : "center" === a
                      ? ((e = "center"), (i += h / 2))
                      : ((e = "right"), (i = this.right)))
                : (e = "right"),
              { textAlign: e, x: i }
            );
          }
          _computeLabelArea() {
            if (this.options.ticks.mirror) return;
            let t = this.chart,
              e = this.options.position;
            return "left" === e || "right" === e
              ? { top: 0, left: this.left, bottom: t.height, right: this.right }
              : "top" === e || "bottom" === e
              ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
              : void 0;
          }
          drawBackground() {
            let {
              ctx: t,
              options: { backgroundColor: e },
              left: i,
              top: s,
              width: a,
              height: n,
            } = this;
            e &&
              (t.save(),
              (t.fillStyle = e),
              t.fillRect(i, s, a, n),
              t.restore());
          }
          getLineWidthForValue(t) {
            let e = this.options.grid;
            if (!this._isVisible() || !e.display) return 0;
            let i = this.ticks.findIndex((e) => e.value === t);
            return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0;
          }
          drawGrid(t) {
            let e,
              i,
              s = this.options.grid,
              a = this.ctx,
              n =
                this._gridLineItems ||
                (this._gridLineItems = this._computeGridLineItems(t)),
              r = (t, e, i) => {
                i.width &&
                  i.color &&
                  (a.save(),
                  (a.lineWidth = i.width),
                  (a.strokeStyle = i.color),
                  a.setLineDash(i.borderDash || []),
                  (a.lineDashOffset = i.borderDashOffset),
                  a.beginPath(),
                  a.moveTo(t.x, t.y),
                  a.lineTo(e.x, e.y),
                  a.stroke(),
                  a.restore());
              };
            if (s.display)
              for (e = 0, i = n.length; e < i; ++e) {
                let t = n[e];
                s.drawOnChartArea &&
                  r({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                  s.drawTicks &&
                    r(
                      { x: t.tx1, y: t.ty1 },
                      { x: t.tx2, y: t.ty2 },
                      {
                        color: t.tickColor,
                        width: t.tickWidth,
                        borderDash: t.tickBorderDash,
                        borderDashOffset: t.tickBorderDashOffset,
                      }
                    );
              }
          }
          drawBorder() {
            let t,
              e,
              i,
              s,
              {
                chart: a,
                ctx: n,
                options: { border: r, grid: o },
              } = this,
              l = r.setContext(this.getContext()),
              h = r.display ? l.width : 0;
            if (!h) return;
            let d = o.setContext(this.getContext(0)).lineWidth,
              c = this._borderValue;
            this.isHorizontal()
              ? ((t = t3(a, this.left, h) - h / 2),
                (e = t3(a, this.right, d) + d / 2),
                (i = s = c))
              : ((i = t3(a, this.top, h) - h / 2),
                (s = t3(a, this.bottom, d) + d / 2),
                (t = e = c)),
              n.save(),
              (n.lineWidth = l.width),
              (n.strokeStyle = l.color),
              n.beginPath(),
              n.moveTo(t, i),
              n.lineTo(e, s),
              n.stroke(),
              n.restore();
          }
          drawLabels(t) {
            if (!this.options.ticks.display) return;
            let e = this.ctx,
              i = this._computeLabelArea();
            for (let s of (i && t9(e, i), this.getLabelItems(t))) {
              let t = s.options,
                i = s.font;
              es(e, s.label, 0, s.textOffset, i, t);
            }
            i && et(e);
          }
          drawTitle() {
            let t,
              e,
              {
                ctx: i,
                options: { position: s, title: a, reverse: n },
              } = this;
            if (!a.display) return;
            let r = eu(a.font),
              o = ec(a.padding),
              l = a.align,
              h = r.lineHeight / 2;
            "bottom" === s || "center" === s || I(s)
              ? ((h += o.bottom),
                V(a.text) && (h += r.lineHeight * (a.text.length - 1)))
              : (h += o.top);
            let {
              titleX: d,
              titleY: c,
              maxWidth: u,
              rotation: f,
            } = (function (t, e, i, s) {
              let a,
                n,
                r,
                { top: o, left: l, bottom: h, right: d, chart: c } = t,
                { chartArea: u, scales: f } = c,
                g = 0,
                p = h - o,
                m = d - l;
              if (t.isHorizontal()) {
                if (((n = tz(s, l, d)), I(i))) {
                  let t = Object.keys(i)[0],
                    s = i[t];
                  r = f[t].getPixelForValue(s) + p - e;
                } else
                  r =
                    "center" === i
                      ? (u.bottom + u.top) / 2 + p - e
                      : i8(t, i, e);
                a = d - l;
              } else {
                if (I(i)) {
                  let t = Object.keys(i)[0],
                    s = i[t];
                  n = f[t].getPixelForValue(s) - m + e;
                } else
                  n =
                    "center" === i
                      ? (u.left + u.right) / 2 - m + e
                      : i8(t, i, e);
                (r = tz(s, h, o)), (g = "left" === i ? -th : th);
              }
              return { titleX: n, titleY: r, maxWidth: a, rotation: g };
            })(this, h, s, l);
            es(i, a.text, 0, 0, r, {
              color: a.color,
              maxWidth: u,
              rotation: f,
              textAlign:
                ((t = tF(l)),
                ((n && "right" !== s) || (!n && "right" === s)) &&
                  (t =
                    "left" === (e = t) ? "right" : "right" === e ? "left" : e),
                t),
              textBaseline: "middle",
              translation: [d, c],
            });
          }
          draw(t) {
            this._isVisible() &&
              (this.drawBackground(),
              this.drawGrid(t),
              this.drawBorder(),
              this.drawTitle(),
              this.drawLabels(t));
          }
          _layers() {
            let t = this.options,
              e = (t.ticks && t.ticks.z) || 0,
              i = H(t.grid && t.grid.z, -1),
              s = H(t.border && t.border.z, 0);
            return this._isVisible() && this.draw === st.prototype.draw
              ? [
                  {
                    z: i,
                    draw: (t) => {
                      this.drawBackground(), this.drawGrid(t), this.drawTitle();
                    },
                  },
                  {
                    z: s,
                    draw: () => {
                      this.drawBorder();
                    },
                  },
                  {
                    z: e,
                    draw: (t) => {
                      this.drawLabels(t);
                    },
                  },
                ]
              : [
                  {
                    z: e,
                    draw: (t) => {
                      this.draw(t);
                    },
                  },
                ];
          }
          getMatchingVisibleMetas(t) {
            let e,
              i,
              s = this.chart.getSortedVisibleDatasetMetas(),
              a = this.axis + "AxisID",
              n = [];
            for (e = 0, i = s.length; e < i; ++e) {
              let i = s[e];
              i[a] !== this.id || (t && i.type !== t) || n.push(i);
            }
            return n;
          }
          _resolveTickFontOptions(t) {
            return eu(this.options.ticks.setContext(this.getContext(t)).font);
          }
          _maxDigits() {
            let t = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / t;
          }
          constructor(t) {
            super(),
              (this.id = t.id),
              (this.type = t.type),
              (this.options = void 0),
              (this.ctx = t.ctx),
              (this.chart = t.chart),
              (this.top = void 0),
              (this.bottom = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
              (this.maxWidth = void 0),
              (this.maxHeight = void 0),
              (this.paddingTop = void 0),
              (this.paddingBottom = void 0),
              (this.paddingLeft = void 0),
              (this.paddingRight = void 0),
              (this.axis = void 0),
              (this.labelRotation = void 0),
              (this.min = void 0),
              (this.max = void 0),
              (this._range = void 0),
              (this.ticks = []),
              (this._gridLineItems = null),
              (this._labelItems = null),
              (this._labelSizes = null),
              (this._length = 0),
              (this._maxLength = 0),
              (this._longestTextCache = {}),
              (this._startPixel = void 0),
              (this._endPixel = void 0),
              (this._reversePixels = !1),
              (this._userMax = void 0),
              (this._userMin = void 0),
              (this._suggestedMax = void 0),
              (this._suggestedMin = void 0),
              (this._ticksLength = 0),
              (this._borderValue = 0),
              (this._cache = {}),
              (this._dataLimitsCached = !1),
              (this.$context = void 0);
          }
        }
        class se {
          isForType(t) {
            return Object.prototype.isPrototypeOf.call(
              this.type.prototype,
              t.prototype
            );
          }
          register(t) {
            var e;
            let i,
              s = Object.getPrototypeOf(t);
            "id" in (e = s) && "defaults" in e && (i = this.register(s));
            let a = this.items,
              n = t.id,
              r = this.scope + "." + n;
            if (!n) throw Error("class does not have id: " + t);
            return (
              n in a ||
                ((a[n] = t),
                (function (t, e, i) {
                  var s, a;
                  let n = K(Object.create(null), [
                    i ? t2.get(i) : {},
                    t2.get(e),
                    t.defaults,
                  ]);
                  t2.set(e, n),
                    t.defaultRoutes &&
                      ((s = e),
                      Object.keys((a = t.defaultRoutes)).forEach((t) => {
                        let e = t.split("."),
                          i = e.pop(),
                          n = [s].concat(e).join("."),
                          r = a[t].split("."),
                          o = r.pop(),
                          l = r.join(".");
                        t2.route(n, i, l, o);
                      })),
                    t.descriptors && t2.describe(e, t.descriptors);
                })(t, r, i),
                this.override && t2.override(t.id, t.overrides)),
              r
            );
          }
          get(t) {
            return this.items[t];
          }
          unregister(t) {
            let e = this.items,
              i = t.id,
              s = this.scope;
            i in e && delete e[i],
              s &&
                i in t2[s] &&
                (delete t2[s][i], this.override && delete tZ[i]);
          }
          constructor(t, e, i) {
            (this.type = t),
              (this.scope = e),
              (this.override = i),
              (this.items = Object.create(null));
          }
        }
        var si = new (class {
          add() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("register", e);
          }
          remove() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("unregister", e);
          }
          addControllers() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("register", e, this.controllers);
          }
          addElements() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("register", e, this.elements);
          }
          addPlugins() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("register", e, this.plugins);
          }
          addScales() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("register", e, this.scales);
          }
          getController(t) {
            return this._get(t, this.controllers, "controller");
          }
          getElement(t) {
            return this._get(t, this.elements, "element");
          }
          getPlugin(t) {
            return this._get(t, this.plugins, "plugin");
          }
          getScale(t) {
            return this._get(t, this.scales, "scale");
          }
          removeControllers() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("unregister", e, this.controllers);
          }
          removeElements() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("unregister", e, this.elements);
          }
          removePlugins() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("unregister", e, this.plugins);
          }
          removeScales() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            this._each("unregister", e, this.scales);
          }
          _each(t, e, i) {
            [...e].forEach((e) => {
              let s = i || this._getRegistryForType(e);
              i || s.isForType(e) || (s === this.plugins && e.id)
                ? this._exec(t, s, e)
                : U(e, (e) => {
                    let s = i || this._getRegistryForType(e);
                    this._exec(t, s, e);
                  });
            });
          }
          _exec(t, e, i) {
            let s = tt(t);
            N(i["before" + s], [], i), e[t](i), N(i["after" + s], [], i);
          }
          _getRegistryForType(t) {
            for (let e = 0; e < this._typedRegistries.length; e++) {
              let i = this._typedRegistries[e];
              if (i.isForType(t)) return i;
            }
            return this.plugins;
          }
          _get(t, e, i) {
            let s = e.get(t);
            if (void 0 === s)
              throw Error('"' + t + '" is not a registered ' + i + ".");
            return s;
          }
          constructor() {
            (this.controllers = new se(il, "datasets", !0)),
              (this.elements = new se(i5, "elements")),
              (this.plugins = new se(Object, "plugins")),
              (this.scales = new se(st, "scales")),
              (this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements,
              ]);
          }
        })();
        class ss {
          notify(t, e, i, s) {
            "beforeInit" === e &&
              ((this._init = this._createDescriptors(t, !0)),
              this._notify(this._init, t, "install"));
            let a = s ? this._descriptors(t).filter(s) : this._descriptors(t),
              n = this._notify(a, t, e, i);
            return (
              "afterDestroy" === e &&
                (this._notify(a, t, "stop"),
                this._notify(this._init, t, "uninstall")),
              n
            );
          }
          _notify(t, e, i, s) {
            for (let a of ((s = s || {}), t)) {
              let t = a.plugin;
              if (!1 === N(t[i], [e, s, a.options], t) && s.cancelable)
                return !1;
            }
            return !0;
          }
          invalidate() {
            z(this._cache) ||
              ((this._oldCache = this._cache), (this._cache = void 0));
          }
          _descriptors(t) {
            if (this._cache) return this._cache;
            let e = (this._cache = this._createDescriptors(t));
            return this._notifyStateChanges(t), e;
          }
          _createDescriptors(t, e) {
            let i = t && t.config,
              s = H(i.options && i.options.plugins, {}),
              a = (function (t) {
                let e = {},
                  i = [],
                  s = Object.keys(si.plugins.items);
                for (let t = 0; t < s.length; t++) i.push(si.getPlugin(s[t]));
                let a = t.plugins || [];
                for (let t = 0; t < a.length; t++) {
                  let s = a[t];
                  -1 === i.indexOf(s) && (i.push(s), (e[s.id] = !0));
                }
                return { plugins: i, localIds: e };
              })(i);
            return !1 !== s || e
              ? (function (t, e, i, s) {
                  let { plugins: a, localIds: n } = e,
                    r = [],
                    o = t.getContext();
                  for (let e of a) {
                    var l;
                    let a = e.id,
                      h =
                        ((l = i[a]),
                        s || !1 !== l ? (!0 === l ? {} : l) : null);
                    null !== h &&
                      r.push({
                        plugin: e,
                        options: (function (t, e, i, s) {
                          let { plugin: a, local: n } = e,
                            r = t.pluginScopeKeys(a),
                            o = t.getOptionScopes(i, r);
                          return (
                            n && a.defaults && o.push(a.defaults),
                            t.createResolver(o, s, [""], {
                              scriptable: !1,
                              indexable: !1,
                              allKeys: !0,
                            })
                          );
                        })(t.config, { plugin: e, local: n[a] }, h, o),
                      });
                  }
                  return r;
                })(t, a, s, e)
              : [];
          }
          _notifyStateChanges(t) {
            let e = this._oldCache || [],
              i = this._cache,
              s = (t, e) =>
                t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
            this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
          }
          constructor() {
            this._init = [];
          }
        }
        function sa(t, e) {
          let i = t2.datasets[t] || {};
          return (
            ((e.datasets || {})[t] || {}).indexAxis ||
            e.indexAxis ||
            i.indexAxis ||
            "x"
          );
        }
        function sn(t) {
          if ("x" === t || "y" === t || "r" === t) return t;
        }
        function sr(t) {
          for (
            var e, i = arguments.length, s = Array(i > 1 ? i - 1 : 0), a = 1;
            a < i;
            a++
          )
            s[a - 1] = arguments[a];
          if (sn(t)) return t;
          for (let i of s) {
            let s =
              i.axis ||
              ("top" === (e = i.position) || "bottom" === e
                ? "x"
                : "left" === e || "right" === e
                ? "y"
                : void 0) ||
              (t.length > 1 && sn(t[0].toLowerCase()));
            if (s) return s;
          }
          throw Error(
            "Cannot determine type of '".concat(
              t,
              "' axis. Please provide 'axis' or 'position' option."
            )
          );
        }
        function so(t, e, i) {
          if (i[e + "AxisID"] === t) return { axis: e };
        }
        function sl(t) {
          let e = t.options || (t.options = {});
          (e.plugins = H(e.plugins, {})),
            (e.scales = (function (t, e) {
              let i = tZ[t.type] || { scales: {} },
                s = e.scales || {},
                a = sa(t.type, e),
                n = Object.create(null);
              return (
                Object.keys(s).forEach((e) => {
                  let r = s[e];
                  if (!I(r))
                    return console.error(
                      "Invalid scale configuration for scale: ".concat(e)
                    );
                  if (r._proxy)
                    return console.warn(
                      "Ignoring resolver passed as options for scale: ".concat(
                        e
                      )
                    );
                  let o = sr(
                      e,
                      r,
                      (function (t, e) {
                        if (e.data && e.data.datasets) {
                          let i = e.data.datasets.filter(
                            (e) => e.xAxisID === t || e.yAxisID === t
                          );
                          if (i.length)
                            return so(t, "x", i[0]) || so(t, "y", i[0]);
                        }
                        return {};
                      })(e, t),
                      t2.scales[r.type]
                    ),
                    l = o === a ? "_index_" : "_value_",
                    h = i.scales || {};
                  n[e] = J(Object.create(null), [{ axis: o }, r, h[o], h[l]]);
                }),
                t.data.datasets.forEach((i) => {
                  let a = i.type || t.type,
                    r = i.indexAxis || sa(a, e),
                    o = (tZ[a] || {}).scales || {};
                  Object.keys(o).forEach((t) => {
                    let e,
                      a =
                        ((e = t),
                        "_index_" === t
                          ? (e = r)
                          : "_value_" === t && (e = "x" === r ? "y" : "x"),
                        e),
                      l = i[a + "AxisID"] || a;
                    (n[l] = n[l] || Object.create(null)),
                      J(n[l], [{ axis: a }, s[l], o[t]]);
                  });
                }),
                Object.keys(n).forEach((t) => {
                  let e = n[t];
                  J(e, [t2.scales[e.type], t2.scale]);
                }),
                n
              );
            })(t, e));
        }
        function sh(t) {
          return (
            ((t = t || {}).datasets = t.datasets || []),
            (t.labels = t.labels || []),
            t
          );
        }
        let sd = new Map(),
          sc = new Set();
        function su(t, e) {
          let i = sd.get(t);
          return i || ((i = e()), sd.set(t, i), sc.add(i)), i;
        }
        let sf = (t, e, i) => {
          let s = Q(e, i);
          void 0 !== s && t.add(s);
        };
        class sg {
          get platform() {
            return this._config.platform;
          }
          get type() {
            return this._config.type;
          }
          set type(t) {
            this._config.type = t;
          }
          get data() {
            return this._config.data;
          }
          set data(t) {
            this._config.data = sh(t);
          }
          get options() {
            return this._config.options;
          }
          set options(t) {
            this._config.options = t;
          }
          get plugins() {
            return this._config.plugins;
          }
          update() {
            let t = this._config;
            this.clearCache(), sl(t);
          }
          clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear();
          }
          datasetScopeKeys(t) {
            return su(t, () => [["datasets.".concat(t), ""]]);
          }
          datasetAnimationScopeKeys(t, e) {
            return su("".concat(t, ".transition.").concat(e), () => [
              [
                "datasets.".concat(t, ".transitions.").concat(e),
                "transitions.".concat(e),
              ],
              ["datasets.".concat(t), ""],
            ]);
          }
          datasetElementScopeKeys(t, e) {
            return su("".concat(t, "-").concat(e), () => [
              [
                "datasets.".concat(t, ".elements.").concat(e),
                "datasets.".concat(t),
                "elements.".concat(e),
                "",
              ],
            ]);
          }
          pluginScopeKeys(t) {
            let e = t.id,
              i = this.type;
            return su("".concat(i, "-plugin-").concat(e), () => [
              ["plugins.".concat(e), ...(t.additionalOptionScopes || [])],
            ]);
          }
          _cachedScopes(t, e) {
            let i = this._scopeCache,
              s = i.get(t);
            return (!s || e) && ((s = new Map()), i.set(t, s)), s;
          }
          getOptionScopes(t, e, i) {
            let { options: s, type: a } = this,
              n = this._cachedScopes(t, i),
              r = n.get(e);
            if (r) return r;
            let o = new Set();
            e.forEach((e) => {
              t && (o.add(t), e.forEach((e) => sf(o, t, e))),
                e.forEach((t) => sf(o, s, t)),
                e.forEach((t) => sf(o, tZ[a] || {}, t)),
                e.forEach((t) => sf(o, t2, t)),
                e.forEach((t) => sf(o, tQ, t));
            });
            let l = Array.from(o);
            return (
              0 === l.length && l.push(Object.create(null)),
              sc.has(e) && n.set(e, l),
              l
            );
          }
          chartOptionScopes() {
            let { options: t, type: e } = this;
            return [t, tZ[e] || {}, t2.datasets[e] || {}, { type: e }, t2, tQ];
          }
          resolveNamedOptions(t, e, i) {
            let s =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : [""],
              a = { $shared: !0 },
              { resolver: n, subPrefixes: r } = sp(this._resolverCache, t, s),
              o = n;
            if (
              (function (t, e) {
                let { isScriptable: i, isIndexable: s } = eb(t);
                for (let a of e) {
                  let e = i(a),
                    n = s(a),
                    r = (n || e) && t[a];
                  if ((e && (ti(r) || sm(r))) || (n && V(r))) return !0;
                }
                return !1;
              })(n, e)
            ) {
              (a.$shared = !1), (i = ti(i) ? i() : i);
              let e = this.createResolver(t, i, r);
              o = em(n, i, e);
            }
            for (let t of e) a[t] = o[t];
            return a;
          }
          createResolver(t, e) {
            let i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [""],
              s = arguments.length > 3 ? arguments[3] : void 0,
              { resolver: a } = sp(this._resolverCache, t, i);
            return I(e) ? em(a, e, void 0, s) : a;
          }
          constructor(t) {
            (this._config = (function (t) {
              return ((t = t || {}).data = sh(t.data)), sl(t), t;
            })(t)),
              (this._scopeCache = new Map()),
              (this._resolverCache = new Map());
          }
        }
        function sp(t, e, i) {
          let s = t.get(e);
          s || ((s = new Map()), t.set(e, s));
          let a = i.join(),
            n = s.get(a);
          return (
            n ||
              ((n = {
                resolver: ep(e, i),
                subPrefixes: i.filter(
                  (t) => !t.toLowerCase().includes("hover")
                ),
              }),
              s.set(a, n)),
            n
          );
        }
        let sm = (t) =>
            I(t) && Object.getOwnPropertyNames(t).some((e) => ti(t[e])),
          sb = ["top", "bottom", "left", "right", "chartArea"];
        function sx(t, e) {
          return (
            "top" === t || "bottom" === t || (-1 === sb.indexOf(t) && "x" === e)
          );
        }
        function s_(t, e) {
          return function (i, s) {
            return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
          };
        }
        function sy(t) {
          let e = t.chart,
            i = e.options.animation;
          e.notifyPlugins("afterRender"), N(i && i.onComplete, [t], e);
        }
        function sv(t) {
          let e = t.chart,
            i = e.options.animation;
          N(i && i.onProgress, [t], e);
        }
        function sM(t) {
          return (
            eL() && "string" == typeof t
              ? (t = document.getElementById(t))
              : t && t.length && (t = t[0]),
            t && t.canvas && (t = t.canvas),
            t
          );
        }
        let sw = {},
          sk = (t) => {
            let e = sM(t);
            return Object.values(sw)
              .filter((t) => t.canvas === e)
              .pop();
          };
        class sP {
          static register() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            si.add(...e), sS();
          }
          static unregister() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            si.remove(...e), sS();
          }
          get aspectRatio() {
            let {
              options: { aspectRatio: t, maintainAspectRatio: e },
              width: i,
              height: s,
              _aspectRatio: a,
            } = this;
            return z(t) ? (e && a ? a : s ? i / s : null) : t;
          }
          get data() {
            return this.config.data;
          }
          set data(t) {
            this.config.data = t;
          }
          get options() {
            return this._options;
          }
          set options(t) {
            this.config.options = t;
          }
          get registry() {
            return si;
          }
          _initialize() {
            return (
              this.notifyPlugins("beforeInit"),
              this.options.responsive
                ? this.resize()
                : eB(this, this.options.devicePixelRatio),
              this.bindEvents(),
              this.notifyPlugins("afterInit"),
              this
            );
          }
          clear() {
            return t8(this.canvas, this.ctx), this;
          }
          stop() {
            return e2.stop(this), this;
          }
          resize(t, e) {
            e2.running(this)
              ? (this._resizeBeforeDraw = { width: t, height: e })
              : this._resize(t, e);
          }
          _resize(t, e) {
            let i = this.options,
              s = this.canvas,
              a = i.maintainAspectRatio && this.aspectRatio,
              n = this.platform.getMaximumSize(s, t, e, a),
              r = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
              o = this.width ? "resize" : "attach";
            (this.width = n.width),
              (this.height = n.height),
              (this._aspectRatio = this.aspectRatio),
              eB(this, r, !0) &&
                (this.notifyPlugins("resize", { size: n }),
                N(i.onResize, [this, n], this),
                this.attached && this._doResize(o) && this.render());
          }
          ensureScalesHaveIDs() {
            U(this.options.scales || {}, (t, e) => {
              t.id = e;
            });
          }
          buildOrUpdateScales() {
            let t = this.options,
              e = t.scales,
              i = this.scales,
              s = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {}),
              a = [];
            e &&
              (a = a.concat(
                Object.keys(e).map((t) => {
                  let i = e[t],
                    s = sr(t, i),
                    a = "r" === s,
                    n = "x" === s;
                  return {
                    options: i,
                    dposition: a ? "chartArea" : n ? "bottom" : "left",
                    dtype: a ? "radialLinear" : n ? "category" : "linear",
                  };
                })
              )),
              U(a, (e) => {
                let a = e.options,
                  n = a.id,
                  r = sr(n, a),
                  o = H(a.type, e.dtype);
                (void 0 === a.position ||
                  sx(a.position, r) !== sx(e.dposition)) &&
                  (a.position = e.dposition),
                  (s[n] = !0);
                let l = null;
                n in i && i[n].type === o
                  ? (l = i[n])
                  : (i[
                      (l = new (si.getScale(o))({
                        id: n,
                        type: o,
                        ctx: this.ctx,
                        chart: this,
                      })).id
                    ] = l),
                  l.init(a, t);
              }),
              U(s, (t, e) => {
                t || delete i[e];
              }),
              U(i, (t) => {
                iW.configure(this, t, t.options), iW.addBox(this, t);
              });
          }
          _updateMetasets() {
            let t = this._metasets,
              e = this.data.datasets.length,
              i = t.length;
            if ((t.sort((t, e) => t.index - e.index), i > e)) {
              for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
              t.splice(e, i - e);
            }
            this._sortedMetasets = t.slice(0).sort(s_("order", "index"));
          }
          _removeUnreferencedMetasets() {
            let {
              _metasets: t,
              data: { datasets: e },
            } = this;
            t.length > e.length && delete this._stacks,
              t.forEach((t, i) => {
                0 === e.filter((e) => e === t._dataset).length &&
                  this._destroyDatasetMeta(i);
              });
          }
          buildOrUpdateControllers() {
            let t,
              e,
              i = [],
              s = this.data.datasets;
            for (
              this._removeUnreferencedMetasets(), t = 0, e = s.length;
              t < e;
              t++
            ) {
              let e = s[t],
                a = this.getDatasetMeta(t),
                n = e.type || this.config.type;
              if (
                (a.type &&
                  a.type !== n &&
                  (this._destroyDatasetMeta(t), (a = this.getDatasetMeta(t))),
                (a.type = n),
                (a.indexAxis = e.indexAxis || sa(n, this.options)),
                (a.order = e.order || 0),
                (a.index = t),
                (a.label = "" + e.label),
                (a.visible = this.isDatasetVisible(t)),
                a.controller)
              )
                a.controller.updateIndex(t), a.controller.linkScales();
              else {
                let e = si.getController(n),
                  { datasetElementType: s, dataElementType: r } =
                    t2.datasets[n];
                Object.assign(e, {
                  dataElementType: si.getElement(r),
                  datasetElementType: s && si.getElement(s),
                }),
                  (a.controller = new e(this, t)),
                  i.push(a.controller);
              }
            }
            return this._updateMetasets(), i;
          }
          _resetElements() {
            U(
              this.data.datasets,
              (t, e) => {
                this.getDatasetMeta(e).controller.reset();
              },
              this
            );
          }
          reset() {
            this._resetElements(), this.notifyPlugins("reset");
          }
          update(t) {
            let e = this.config;
            e.update();
            let i = (this._options = e.createResolver(
                e.chartOptionScopes(),
                this.getContext()
              )),
              s = (this._animationsDisabled = !i.animation);
            if (
              (this._updateScales(),
              this._checkEventBindings(),
              this._updateHiddenIndices(),
              this._plugins.invalidate(),
              !1 ===
                this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
            )
              return;
            let a = this.buildOrUpdateControllers();
            this.notifyPlugins("beforeElementsUpdate");
            let n = 0;
            for (let t = 0, e = this.data.datasets.length; t < e; t++) {
              let { controller: e } = this.getDatasetMeta(t),
                i = !s && -1 === a.indexOf(e);
              e.buildOrUpdateElements(i),
                (n = Math.max(+e.getMaxOverflow(), n));
            }
            (n = this._minPadding = i.layout.autoPadding ? n : 0),
              this._updateLayout(n),
              s ||
                U(a, (t) => {
                  t.reset();
                }),
              this._updateDatasets(t),
              this.notifyPlugins("afterUpdate", { mode: t }),
              this._layers.sort(s_("z", "_idx"));
            let { _active: r, _lastEvent: o } = this;
            o
              ? this._eventHandler(o, !0)
              : r.length && this._updateHoverStyles(r, r, !0),
              this.render();
          }
          _updateScales() {
            U(this.scales, (t) => {
              iW.removeBox(this, t);
            }),
              this.ensureScalesHaveIDs(),
              this.buildOrUpdateScales();
          }
          _checkEventBindings() {
            let t = this.options;
            (ts(new Set(Object.keys(this._listeners)), new Set(t.events)) &&
              !!this._responsiveListeners === t.responsive) ||
              (this.unbindEvents(), this.bindEvents());
          }
          _updateHiddenIndices() {
            let { _hiddenIndices: t } = this;
            for (let {
              method: i,
              start: s,
              count: a,
            } of this._getUniformDataChanges() || []) {
              var e = "_removeElements" === i ? -a : a;
              for (let i of Object.keys(t)) {
                let a = +i;
                if (a >= s) {
                  let n = t[i];
                  delete t[i], (e > 0 || a > s) && (t[a + e] = n);
                }
              }
            }
          }
          _getUniformDataChanges() {
            let t = this._dataChanges;
            if (!t || !t.length) return;
            this._dataChanges = [];
            let e = this.data.datasets.length,
              i = (e) =>
                new Set(
                  t
                    .filter((t) => t[0] === e)
                    .map((t, e) => e + "," + t.splice(1).join(","))
                ),
              s = i(0);
            for (let t = 1; t < e; t++) if (!ts(s, i(t))) return;
            return Array.from(s)
              .map((t) => t.split(","))
              .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
          }
          _updateLayout(t) {
            if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 }))
              return;
            iW.update(this, this.width, this.height, t);
            let e = this.chartArea,
              i = e.width <= 0 || e.height <= 0;
            (this._layers = []),
              U(
                this.boxes,
                (t) => {
                  (i && "chartArea" === t.position) ||
                    (t.configure && t.configure(),
                    this._layers.push(...t._layers()));
                },
                this
              ),
              this._layers.forEach((t, e) => {
                t._idx = e;
              }),
              this.notifyPlugins("afterLayout");
          }
          _updateDatasets(t) {
            if (
              !1 !==
              this.notifyPlugins("beforeDatasetsUpdate", {
                mode: t,
                cancelable: !0,
              })
            ) {
              for (let t = 0, e = this.data.datasets.length; t < e; ++t)
                this.getDatasetMeta(t).controller.configure();
              for (let e = 0, i = this.data.datasets.length; e < i; ++e)
                this._updateDataset(e, ti(t) ? t({ datasetIndex: e }) : t);
              this.notifyPlugins("afterDatasetsUpdate", { mode: t });
            }
          }
          _updateDataset(t, e) {
            let i = this.getDatasetMeta(t),
              s = { meta: i, index: t, mode: e, cancelable: !0 };
            !1 !== this.notifyPlugins("beforeDatasetUpdate", s) &&
              (i.controller._update(e),
              (s.cancelable = !1),
              this.notifyPlugins("afterDatasetUpdate", s));
          }
          render() {
            !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
              (e2.has(this)
                ? this.attached && !e2.running(this) && e2.start(this)
                : (this.draw(), sy({ chart: this })));
          }
          draw() {
            let t;
            if (this._resizeBeforeDraw) {
              let { width: t, height: e } = this._resizeBeforeDraw;
              (this._resizeBeforeDraw = null), this._resize(t, e);
            }
            if (
              (this.clear(),
              this.width <= 0 ||
                this.height <= 0 ||
                !1 === this.notifyPlugins("beforeDraw", { cancelable: !0 }))
            )
              return;
            let e = this._layers;
            for (t = 0; t < e.length && e[t].z <= 0; ++t)
              e[t].draw(this.chartArea);
            for (this._drawDatasets(); t < e.length; ++t)
              e[t].draw(this.chartArea);
            this.notifyPlugins("afterDraw");
          }
          _getSortedDatasetMetas(t) {
            let e,
              i,
              s = this._sortedMetasets,
              a = [];
            for (e = 0, i = s.length; e < i; ++e) {
              let i = s[e];
              (!t || i.visible) && a.push(i);
            }
            return a;
          }
          getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0);
          }
          _drawDatasets() {
            if (
              !1 ===
              this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
            )
              return;
            let t = this.getSortedVisibleDatasetMetas();
            for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
            this.notifyPlugins("afterDatasetsDraw");
          }
          _drawDataset(t) {
            let e = this.ctx,
              i = { meta: t, index: t.index, cancelable: !0 },
              s = e1(this, t);
            !1 !== this.notifyPlugins("beforeDatasetDraw", i) &&
              (s && t9(e, s),
              t.controller.draw(),
              s && et(e),
              (i.cancelable = !1),
              this.notifyPlugins("afterDatasetDraw", i));
          }
          isPointInArea(t) {
            return t7(t, this.chartArea, this._minPadding);
          }
          getElementsAtEventForMode(t, e, i, s) {
            let a = iA.modes[e];
            return "function" == typeof a ? a(this, t, i, s) : [];
          }
          getDatasetMeta(t) {
            let e = this.data.datasets[t],
              i = this._metasets,
              s = i.filter((t) => t && t._dataset === e).pop();
            return (
              s ||
                ((s = {
                  type: null,
                  data: [],
                  dataset: null,
                  controller: null,
                  hidden: null,
                  xAxisID: null,
                  yAxisID: null,
                  order: (e && e.order) || 0,
                  index: t,
                  _dataset: e,
                  _parsed: [],
                  _sorted: !1,
                }),
                i.push(s)),
              s
            );
          }
          getContext() {
            return (
              this.$context ||
              (this.$context = eg(null, { chart: this, type: "chart" }))
            );
          }
          getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length;
          }
          isDatasetVisible(t) {
            let e = this.data.datasets[t];
            if (!e) return !1;
            let i = this.getDatasetMeta(t);
            return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
          }
          setDatasetVisibility(t, e) {
            this.getDatasetMeta(t).hidden = !e;
          }
          toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t];
          }
          getDataVisibility(t) {
            return !this._hiddenIndices[t];
          }
          _updateVisibility(t, e, i) {
            let s = i ? "show" : "hide",
              a = this.getDatasetMeta(t),
              n = a.controller._resolveAnimations(void 0, s);
            te(e)
              ? ((a.data[e].hidden = !i), this.update())
              : (this.setDatasetVisibility(t, i),
                n.update(a, { visible: i }),
                this.update((e) => (e.datasetIndex === t ? s : void 0)));
          }
          hide(t, e) {
            this._updateVisibility(t, e, !1);
          }
          show(t, e) {
            this._updateVisibility(t, e, !0);
          }
          _destroyDatasetMeta(t) {
            let e = this._metasets[t];
            e && e.controller && e.controller._destroy(),
              delete this._metasets[t];
          }
          _stop() {
            let t, e;
            for (
              this.stop(),
                e2.remove(this),
                t = 0,
                e = this.data.datasets.length;
              t < e;
              ++t
            )
              this._destroyDatasetMeta(t);
          }
          destroy() {
            this.notifyPlugins("beforeDestroy");
            let { canvas: t, ctx: e } = this;
            this._stop(),
              this.config.clearCache(),
              t &&
                (this.unbindEvents(),
                t8(t, e),
                this.platform.releaseContext(e),
                (this.canvas = null),
                (this.ctx = null)),
              delete sw[this.id],
              this.notifyPlugins("afterDestroy");
          }
          toBase64Image() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            return this.canvas.toDataURL(...e);
          }
          bindEvents() {
            this.bindUserEvents(),
              this.options.responsive
                ? this.bindResponsiveEvents()
                : (this.attached = !0);
          }
          bindUserEvents() {
            let t = this._listeners,
              e = this.platform,
              i = (t, e, i) => {
                (t.offsetX = e), (t.offsetY = i), this._eventHandler(t);
              };
            U(this.options.events, (s) => {
              e.addEventListener(this, s, i), (t[s] = i);
            });
          }
          bindResponsiveEvents() {
            let t;
            this._responsiveListeners || (this._responsiveListeners = {});
            let e = this._responsiveListeners,
              i = this.platform,
              s = (t, s) => {
                i.addEventListener(this, t, s), (e[t] = s);
              },
              a = (t, s) => {
                e[t] && (i.removeEventListener(this, t, s), delete e[t]);
              },
              n = (t, e) => {
                this.canvas && this.resize(t, e);
              },
              r = () => {
                a("attach", r),
                  (this.attached = !0),
                  this.resize(),
                  s("resize", n),
                  s("detach", t);
              };
            (t = () => {
              (this.attached = !1),
                a("resize", n),
                this._stop(),
                this._resize(0, 0),
                s("attach", r);
            }),
              i.isAttached(this.canvas) ? r() : t();
          }
          unbindEvents() {
            U(this._listeners, (t, e) => {
              this.platform.removeEventListener(this, e, t);
            }),
              (this._listeners = {}),
              U(this._responsiveListeners, (t, e) => {
                this.platform.removeEventListener(this, e, t);
              }),
              (this._responsiveListeners = void 0);
          }
          updateHoverStyle(t, e, i) {
            let s,
              a,
              n,
              r = i ? "set" : "remove";
            for (
              "dataset" === e &&
                this.getDatasetMeta(t[0].datasetIndex).controller[
                  "_" + r + "DatasetHoverStyle"
                ](),
                a = 0,
                n = t.length;
              a < n;
              ++a
            ) {
              let e =
                (s = t[a]) && this.getDatasetMeta(s.datasetIndex).controller;
              e && e[r + "HoverStyle"](s.element, s.datasetIndex, s.index);
            }
          }
          getActiveElements() {
            return this._active || [];
          }
          setActiveElements(t) {
            let e = this._active || [],
              i = t.map((t) => {
                let { datasetIndex: e, index: i } = t,
                  s = this.getDatasetMeta(e);
                if (!s) throw Error("No dataset found at index " + e);
                return { datasetIndex: e, element: s.data[i], index: i };
              });
            $(i, e) ||
              ((this._active = i),
              (this._lastEvent = null),
              this._updateHoverStyles(i, e));
          }
          notifyPlugins(t, e, i) {
            return this._plugins.notify(this, t, e, i);
          }
          isPluginEnabled(t) {
            return (
              1 === this._plugins._cache.filter((e) => e.plugin.id === t).length
            );
          }
          _updateHoverStyles(t, e, i) {
            let s = this.options.hover,
              a = (t, e) =>
                t.filter(
                  (t) =>
                    !e.some(
                      (e) =>
                        t.datasetIndex === e.datasetIndex && t.index === e.index
                    )
                ),
              n = a(e, t),
              r = i ? t : a(t, e);
            n.length && this.updateHoverStyle(n, s.mode, !1),
              r.length && s.mode && this.updateHoverStyle(r, s.mode, !0);
          }
          _eventHandler(t, e) {
            let i = {
                event: t,
                replay: e,
                cancelable: !0,
                inChartArea: this.isPointInArea(t),
              },
              s = (e) =>
                (e.options.events || this.options.events).includes(
                  t.native.type
                );
            if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
            let a = this._handleEvent(t, e, i.inChartArea);
            return (
              (i.cancelable = !1),
              this.notifyPlugins("afterEvent", i, s),
              (a || i.changed) && this.render(),
              this
            );
          }
          _handleEvent(t, e, i) {
            var s;
            let { _active: a = [], options: n } = this,
              r = this._getActiveElements(t, a, i, e),
              o =
                "mouseup" === t.type ||
                "click" === t.type ||
                "contextmenu" === t.type,
              l =
                ((s = this._lastEvent),
                i && "mouseout" !== t.type ? (o ? s : t) : null);
            i &&
              ((this._lastEvent = null),
              N(n.onHover, [t, r, this], this),
              o && N(n.onClick, [t, r, this], this));
            let h = !$(r, a);
            return (
              (h || e) &&
                ((this._active = r), this._updateHoverStyles(r, a, e)),
              (this._lastEvent = l),
              h
            );
          }
          _getActiveElements(t, e, i, s) {
            if ("mouseout" === t.type) return [];
            if (!i) return e;
            let a = this.options.hover;
            return this.getElementsAtEventForMode(t, a.mode, a, s);
          }
          constructor(t, e) {
            let i = (this.config = new sg(e)),
              s = sM(t),
              a = sk(s);
            if (a)
              throw Error(
                "Canvas is already in use. Chart with ID '" +
                  a.id +
                  "' must be destroyed before the canvas with ID '" +
                  a.canvas.id +
                  "' can be reused."
              );
            let n = i.createResolver(i.chartOptionScopes(), this.getContext());
            (this.platform = new (i.platform ||
              (!eL() ||
              ("undefined" != typeof OffscreenCanvas &&
                s instanceof OffscreenCanvas)
                ? ij
                : i2))()),
              this.platform.updateConfig(i);
            let r = this.platform.acquireContext(s, n.aspectRatio),
              o = r && r.canvas,
              l = o && o.height,
              h = o && o.width;
            if (
              ((this.id = F()),
              (this.ctx = r),
              (this.canvas = o),
              (this.width = h),
              (this.height = l),
              (this._options = n),
              (this._aspectRatio = this.aspectRatio),
              (this._layers = []),
              (this._metasets = []),
              (this._stacks = void 0),
              (this.boxes = []),
              (this.currentDevicePixelRatio = void 0),
              (this.chartArea = void 0),
              (this._active = []),
              (this._lastEvent = void 0),
              (this._listeners = {}),
              (this._responsiveListeners = void 0),
              (this._sortedMetasets = []),
              (this.scales = {}),
              (this._plugins = new ss()),
              (this.$proxies = {}),
              (this._hiddenIndices = {}),
              (this.attached = !1),
              (this._animationsDisabled = void 0),
              (this.$context = void 0),
              (this._doResize = (function (t, e) {
                let i;
                return function () {
                  for (
                    var s = arguments.length, a = Array(s), n = 0;
                    n < s;
                    n++
                  )
                    a[n] = arguments[n];
                  return (
                    e
                      ? (clearTimeout(i), (i = setTimeout(t, e, a)))
                      : t.apply(this, a),
                    e
                  );
                };
              })((t) => this.update(t), n.resizeDelay || 0)),
              (this._dataChanges = []),
              (sw[this.id] = this),
              !r || !o)
            )
              return void console.error(
                "Failed to create chart: can't acquire context from the given item"
              );
            e2.listen(this, "complete", sy),
              e2.listen(this, "progress", sv),
              this._initialize(),
              this.attached && this.update();
          }
        }
        function sS() {
          return U(sP.instances, (t) => t._plugins.invalidate());
        }
        function sD(t, e, i, s) {
          return { x: i + t * Math.cos(e), y: s + t * Math.sin(e) };
        }
        function sC(t, e, i, s, a, n) {
          let { x: r, y: o, startAngle: l, pixelMargin: h, innerRadius: d } = e,
            c = Math.max(e.outerRadius + s + i - h, 0),
            u = d > 0 ? d + s + i + h : 0,
            f = 0,
            g = a - l;
          if (s) {
            let t = c > 0 ? c - s : 0,
              e = ((d > 0 ? d - s : 0) + t) / 2;
            f = (g - (0 !== e ? (g * e) / (e + s) : g)) / 2;
          }
          let p = Math.max(0.001, g * c - i / ta) / c,
            m = (g - p) / 2,
            b = l + m + f,
            x = a - m - f,
            {
              outerStart: _,
              outerEnd: y,
              innerStart: v,
              innerEnd: M,
            } = (function (t, e, i, s) {
              let a = el(t.options.borderRadius, [
                  "outerStart",
                  "outerEnd",
                  "innerStart",
                  "innerEnd",
                ]),
                n = (i - e) / 2,
                r = Math.min(n, (s * e) / 2),
                o = (t) => {
                  let e = ((i - Math.min(n, t)) * s) / 2;
                  return tP(t, 0, Math.min(n, e));
                };
              return {
                outerStart: o(a.outerStart),
                outerEnd: o(a.outerEnd),
                innerStart: tP(a.innerStart, 0, r),
                innerEnd: tP(a.innerEnd, 0, r),
              };
            })(e, u, c, x - b),
            w = c - _,
            k = c - y,
            P = b + _ / w,
            S = x - y / k,
            D = u + v,
            C = u + M,
            O = b + v / D,
            A = x - M / C;
          if ((t.beginPath(), n)) {
            let e = (P + S) / 2;
            if ((t.arc(r, o, c, P, e), t.arc(r, o, c, e, S), y > 0)) {
              let e = sD(k, S, r, o);
              t.arc(e.x, e.y, y, S, x + th);
            }
            let i = sD(C, x, r, o);
            if ((t.lineTo(i.x, i.y), M > 0)) {
              let e = sD(C, A, r, o);
              t.arc(e.x, e.y, M, x + th, A + Math.PI);
            }
            let s = (x - M / u + (b + v / u)) / 2;
            if (
              (t.arc(r, o, u, x - M / u, s, !0),
              t.arc(r, o, u, s, b + v / u, !0),
              v > 0)
            ) {
              let e = sD(D, O, r, o);
              t.arc(e.x, e.y, v, O + Math.PI, b - th);
            }
            let a = sD(w, b, r, o);
            if ((t.lineTo(a.x, a.y), _ > 0)) {
              let e = sD(w, P, r, o);
              t.arc(e.x, e.y, _, b - th, P);
            }
          } else {
            t.moveTo(r, o);
            let e = Math.cos(P) * c + r,
              i = Math.sin(P) * c + o;
            t.lineTo(e, i);
            let s = Math.cos(S) * c + r,
              a = Math.sin(S) * c + o;
            t.lineTo(s, a);
          }
          t.closePath();
        }
        (0, r._)(sP, "defaults", t2),
          (0, r._)(sP, "instances", sw),
          (0, r._)(sP, "overrides", tZ),
          (0, r._)(sP, "registry", si),
          (0, r._)(sP, "version", "4.5.0"),
          (0, r._)(sP, "getChart", sk);
        class sO extends i5 {
          inRange(t, e, i) {
            let { angle: s, distance: a } = ty(this.getProps(["x", "y"], i), {
                x: t,
                y: e,
              }),
              {
                startAngle: n,
                endAngle: r,
                innerRadius: o,
                outerRadius: l,
                circumference: h,
              } = this.getProps(
                [
                  "startAngle",
                  "endAngle",
                  "innerRadius",
                  "outerRadius",
                  "circumference",
                ],
                i
              ),
              d = (this.options.spacing + this.options.borderWidth) / 2,
              c = H(h, r - n),
              u = tk(s, n, r) && n !== r,
              f = c >= tn || u,
              g = tS(a, o + d, l + d);
            return f && g;
          }
          getCenterPoint(t) {
            let {
                x: e,
                y: i,
                startAngle: s,
                endAngle: a,
                innerRadius: n,
                outerRadius: r,
              } = this.getProps(
                [
                  "x",
                  "y",
                  "startAngle",
                  "endAngle",
                  "innerRadius",
                  "outerRadius",
                ],
                t
              ),
              { offset: o, spacing: l } = this.options,
              h = (s + a) / 2,
              d = (n + r + l + o) / 2;
            return { x: e + Math.cos(h) * d, y: i + Math.sin(h) * d };
          }
          tooltipPosition(t) {
            return this.getCenterPoint(t);
          }
          draw(t) {
            let { options: e, circumference: i } = this,
              s = (e.offset || 0) / 4,
              a = (e.spacing || 0) / 2,
              n = e.circular;
            if (
              ((this.pixelMargin = 0.33 * ("inner" === e.borderAlign)),
              (this.fullCircles = i > tn ? Math.floor(i / tn) : 0),
              0 === i || this.innerRadius < 0 || this.outerRadius < 0)
            )
              return;
            t.save();
            let r = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(r) * s, Math.sin(r) * s);
            let o = s * (1 - Math.sin(Math.min(ta, i || 0)));
            (t.fillStyle = e.backgroundColor),
              (t.strokeStyle = e.borderColor),
              (function (t, e, i, s, a) {
                let { fullCircles: n, startAngle: r, circumference: o } = e,
                  l = e.endAngle;
                if (n) {
                  sC(t, e, i, s, l, a);
                  for (let e = 0; e < n; ++e) t.fill();
                  isNaN(o) || (l = r + (o % tn || tn));
                }
                sC(t, e, i, s, l, a), t.fill();
              })(t, this, o, a, n),
              (function (t, e, i, s, a) {
                let {
                    fullCircles: n,
                    startAngle: r,
                    circumference: o,
                    options: l,
                  } = e,
                  {
                    borderWidth: h,
                    borderJoinStyle: d,
                    borderDash: c,
                    borderDashOffset: u,
                    borderRadius: f,
                  } = l,
                  g = "inner" === l.borderAlign;
                if (!h) return;
                t.setLineDash(c || []),
                  (t.lineDashOffset = u),
                  g
                    ? ((t.lineWidth = 2 * h), (t.lineJoin = d || "round"))
                    : ((t.lineWidth = h), (t.lineJoin = d || "bevel"));
                let p = e.endAngle;
                if (n) {
                  sC(t, e, i, s, p, a);
                  for (let e = 0; e < n; ++e) t.stroke();
                  isNaN(o) || (p = r + (o % tn || tn));
                }
                g &&
                  (function (t, e, i) {
                    let {
                        startAngle: s,
                        pixelMargin: a,
                        x: n,
                        y: r,
                        outerRadius: o,
                        innerRadius: l,
                      } = e,
                      h = a / o;
                    t.beginPath(),
                      t.arc(n, r, o, s - h, i + h),
                      l > a
                        ? ((h = a / l), t.arc(n, r, l, i + h, s - h, !0))
                        : t.arc(n, r, a, i + th, s - th),
                      t.closePath(),
                      t.clip();
                  })(t, e, p),
                  l.selfJoin &&
                    p - r >= ta &&
                    0 === f &&
                    "miter" !== d &&
                    (function (t, e, i) {
                      let {
                          startAngle: s,
                          x: a,
                          y: n,
                          outerRadius: r,
                          innerRadius: o,
                          options: l,
                        } = e,
                        { borderWidth: h, borderJoinStyle: d } = l,
                        c = Math.min(h / r, tw(s - i));
                      if (
                        (t.beginPath(),
                        t.arc(a, n, r - h / 2, s + c / 2, i - c / 2),
                        o > 0)
                      ) {
                        let e = Math.min(h / o, tw(s - i));
                        t.arc(a, n, o + h / 2, i - e / 2, s + e / 2, !0);
                      } else {
                        let e = Math.min(h / 2, r * tw(s - i));
                        if ("round" === d)
                          t.arc(a, n, e, i - ta / 2, s + ta / 2, !0);
                        else if ("bevel" === d) {
                          let r = 2 * e * e,
                            o = -r * Math.cos(i + ta / 2) + a,
                            l = -r * Math.sin(i + ta / 2) + n,
                            h = r * Math.cos(s + ta / 2) + a,
                            d = r * Math.sin(s + ta / 2) + n;
                          t.lineTo(o, l), t.lineTo(h, d);
                        }
                      }
                      t.closePath(),
                        t.moveTo(0, 0),
                        t.rect(0, 0, t.canvas.width, t.canvas.height),
                        t.clip("evenodd");
                    })(t, e, p),
                  n || (sC(t, e, i, s, p, a), t.stroke());
              })(t, this, o, a, n),
              t.restore();
          }
          constructor(t) {
            super(),
              (0, r._)(this, "circumference", void 0),
              (0, r._)(this, "endAngle", void 0),
              (0, r._)(this, "fullCircles", void 0),
              (0, r._)(this, "innerRadius", void 0),
              (0, r._)(this, "outerRadius", void 0),
              (0, r._)(this, "pixelMargin", void 0),
              (0, r._)(this, "startAngle", void 0),
              (this.options = void 0),
              (this.circumference = void 0),
              (this.startAngle = void 0),
              (this.endAngle = void 0),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0),
              (this.pixelMargin = 0),
              (this.fullCircles = 0),
              t && Object.assign(this, t);
          }
        }
        function sA(t, e) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
          (t.lineCap = H(i.borderCapStyle, e.borderCapStyle)),
            t.setLineDash(H(i.borderDash, e.borderDash)),
            (t.lineDashOffset = H(i.borderDashOffset, e.borderDashOffset)),
            (t.lineJoin = H(i.borderJoinStyle, e.borderJoinStyle)),
            (t.lineWidth = H(i.borderWidth, e.borderWidth)),
            (t.strokeStyle = H(i.borderColor, e.borderColor));
        }
        function sL(t, e, i) {
          t.lineTo(i.x, i.y);
        }
        function sT(t, e) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            s = t.length,
            { start: a = 0, end: n = s - 1 } = i,
            { start: r, end: o } = e,
            l = Math.max(a, r),
            h = Math.min(n, o);
          return {
            count: s,
            start: l,
            loop: e.loop,
            ilen:
              h < l && !((a < r && n < r) || (a > o && n > o))
                ? s + h - l
                : h - l,
          };
        }
        function sE(t, e, i, s) {
          let a,
            n,
            r,
            { points: o, options: l } = e,
            { count: h, start: d, loop: c, ilen: u } = sT(o, i, s),
            f = l.stepped
              ? ee
              : l.tension || "monotone" === l.cubicInterpolationMode
              ? ei
              : sL,
            { move: g = !0, reverse: p } = s || {};
          for (a = 0; a <= u; ++a)
            (n = o[(d + (p ? u - a : a)) % h]).skip ||
              (g ? (t.moveTo(n.x, n.y), (g = !1)) : f(t, r, n, p, l.stepped),
              (r = n));
          return (
            c && f(t, r, (n = o[(d + (p ? u : 0)) % h]), p, l.stepped), !!c
          );
        }
        function sR(t, e, i, s) {
          let a,
            n,
            r,
            o,
            l,
            h,
            d = e.points,
            { count: c, start: u, ilen: f } = sT(d, i, s),
            { move: g = !0, reverse: p } = s || {},
            m = 0,
            b = 0,
            x = (t) => (u + (p ? f - t : t)) % c,
            _ = () => {
              o !== l && (t.lineTo(m, l), t.lineTo(m, o), t.lineTo(m, h));
            };
          for (g && ((n = d[x(0)]), t.moveTo(n.x, n.y)), a = 0; a <= f; ++a) {
            if ((n = d[x(a)]).skip) continue;
            let e = n.x,
              i = n.y,
              s = 0 | e;
            s === r
              ? (i < o ? (o = i) : i > l && (l = i), (m = (b * m + e) / ++b))
              : (_(), t.lineTo(e, i), (r = s), (b = 0), (o = l = i)),
              (h = i);
          }
          _();
        }
        function sF(t) {
          let e = t.options,
            i = e.borderDash && e.borderDash.length;
          return t._decimated ||
            t._loop ||
            e.tension ||
            "monotone" === e.cubicInterpolationMode ||
            e.stepped ||
            i
            ? sE
            : sR;
        }
        (0, r._)(sO, "id", "arc"),
          (0, r._)(sO, "defaults", {
            borderAlign: "center",
            borderColor: "#fff",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: void 0,
            borderRadius: 0,
            borderWidth: 2,
            offset: 0,
            spacing: 0,
            angle: void 0,
            circular: !0,
            selfJoin: !1,
          }),
          (0, r._)(sO, "defaultRoutes", { backgroundColor: "backgroundColor" }),
          (0, r._)(sO, "descriptors", {
            _scriptable: !0,
            _indexable: (t) => "borderDash" !== t,
          });
        let sz = "function" == typeof Path2D;
        class sV extends i5 {
          updateControlPoints(t, e) {
            let i = this.options;
            if (
              (i.tension || "monotone" === i.cubicInterpolationMode) &&
              !i.stepped &&
              !this._pointsUpdated
            ) {
              let s = i.spanGaps ? this._loop : this._fullLoop;
              !(function (t, e, i, s, a) {
                let n, r, o, l;
                if (
                  (e.spanGaps && (t = t.filter((t) => !t.skip)),
                  "monotone" === e.cubicInterpolationMode)
                )
                  !(function (t) {
                    let e,
                      i,
                      s,
                      a =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "x",
                      n = eO(a),
                      r = t.length,
                      o = Array(r).fill(0),
                      l = Array(r),
                      h = eC(t, 0);
                    for (e = 0; e < r; ++e)
                      if (((i = s), (s = h), (h = eC(t, e + 1)), s)) {
                        if (h) {
                          let t = h[a] - s[a];
                          o[e] = 0 !== t ? (h[n] - s[n]) / t : 0;
                        }
                        l[e] = i
                          ? h
                            ? tf(o[e - 1]) !== tf(o[e])
                              ? 0
                              : (o[e - 1] + o[e]) / 2
                            : o[e - 1]
                          : o[e];
                      }
                    !(function (t, e, i) {
                      let s,
                        a,
                        n,
                        r,
                        o,
                        l = t.length,
                        h = eC(t, 0);
                      for (let d = 0; d < l - 1; ++d)
                        if (((o = h), (h = eC(t, d + 1)), o && h)) {
                          if (tg(e[d], 0, eD)) {
                            i[d] = i[d + 1] = 0;
                            continue;
                          }
                          (r =
                            Math.pow((s = i[d] / e[d]), 2) +
                            Math.pow((a = i[d + 1] / e[d]), 2)) <= 9 ||
                            ((n = 3 / Math.sqrt(r)),
                            (i[d] = s * n * e[d]),
                            (i[d + 1] = a * n * e[d]));
                        }
                    })(t, o, l),
                      (function (t, e) {
                        let i,
                          s,
                          a,
                          n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : "x",
                          r = eO(n),
                          o = t.length,
                          l = eC(t, 0);
                        for (let h = 0; h < o; ++h) {
                          if (((s = a), (a = l), (l = eC(t, h + 1)), !a))
                            continue;
                          let o = a[n],
                            d = a[r];
                          s &&
                            ((i = (o - s[n]) / 3),
                            (a["cp1".concat(n)] = o - i),
                            (a["cp1".concat(r)] = d - i * e[h])),
                            l &&
                              ((i = (l[n] - o) / 3),
                              (a["cp2".concat(n)] = o + i),
                              (a["cp2".concat(r)] = d + i * e[h]));
                        }
                      })(t, l, a);
                  })(t, a);
                else {
                  let i = s ? t[t.length - 1] : t[0];
                  for (n = 0, r = t.length; n < r; ++n)
                    (l = (function (t, e, i, s) {
                      let a = t.skip ? e : t,
                        n = i.skip ? e : i,
                        r = tv(e, a),
                        o = tv(n, e),
                        l = r / (r + o),
                        h = o / (r + o);
                      (l = isNaN(l) ? 0 : l), (h = isNaN(h) ? 0 : h);
                      let d = s * l,
                        c = s * h;
                      return {
                        previous: {
                          x: e.x - d * (n.x - a.x),
                          y: e.y - d * (n.y - a.y),
                        },
                        next: {
                          x: e.x + c * (n.x - a.x),
                          y: e.y + c * (n.y - a.y),
                        },
                      };
                    })(
                      i,
                      (o = t[n]),
                      t[Math.min(n + 1, r - !s) % r],
                      e.tension
                    )),
                      (o.cp1x = l.previous.x),
                      (o.cp1y = l.previous.y),
                      (o.cp2x = l.next.x),
                      (o.cp2y = l.next.y),
                      (i = o);
                }
                e.capBezierPoints &&
                  (function (t, e) {
                    let i,
                      s,
                      a,
                      n,
                      r,
                      o = t7(t[0], e);
                    for (i = 0, s = t.length; i < s; ++i)
                      (r = n),
                        (n = o),
                        (o = i < s - 1 && t7(t[i + 1], e)),
                        n &&
                          ((a = t[i]),
                          r &&
                            ((a.cp1x = eA(a.cp1x, e.left, e.right)),
                            (a.cp1y = eA(a.cp1y, e.top, e.bottom))),
                          o &&
                            ((a.cp2x = eA(a.cp2x, e.left, e.right)),
                            (a.cp2y = eA(a.cp2y, e.top, e.bottom))));
                  })(t, i);
              })(this._points, i, t, s, e),
                (this._pointsUpdated = !0);
            }
          }
          set points(t) {
            (this._points = t),
              delete this._segments,
              delete this._path,
              (this._pointsUpdated = !1);
          }
          get points() {
            return this._points;
          }
          get segments() {
            return (
              this._segments ||
              (this._segments = (function (t, e) {
                let i = t.points,
                  s = t.options.spanGaps,
                  a = i.length;
                if (!a) return [];
                let n = !!t._loop,
                  { start: r, end: o } = (function (t, e, i, s) {
                    let a = 0,
                      n = e - 1;
                    if (i && !s) for (; a < e && !t[a].skip; ) a++;
                    for (; a < e && t[a].skip; ) a++;
                    for (a %= e, i && (n += a); n > a && t[n % e].skip; ) n--;
                    return { start: a, end: (n %= e) };
                  })(i, a, n, s);
                if (!0 === s)
                  return eZ(t, [{ start: r, end: o, loop: n }], i, e);
                let l = o < r ? o + a : o,
                  h = !!t._fullLoop && 0 === r && o === a - 1;
                return eZ(
                  t,
                  (function (t, e, i, s) {
                    let a,
                      n = t.length,
                      r = [],
                      o = e,
                      l = t[e];
                    for (a = e + 1; a <= i; ++a) {
                      let i = t[a % n];
                      i.skip || i.stop
                        ? l.skip ||
                          ((s = !1),
                          r.push({ start: e % n, end: (a - 1) % n, loop: s }),
                          (e = o = i.stop ? a : null))
                        : ((o = a), l.skip && (e = a)),
                        (l = i);
                    }
                    return (
                      null !== o &&
                        r.push({ start: e % n, end: o % n, loop: s }),
                      r
                    );
                  })(i, r, l, h),
                  i,
                  e
                );
              })(this, this.options.segment))
            );
          }
          first() {
            let t = this.segments,
              e = this.points;
            return t.length && e[t[0].start];
          }
          last() {
            let t = this.segments,
              e = this.points,
              i = t.length;
            return i && e[t[i - 1].end];
          }
          interpolate(t, e) {
            let i,
              s,
              a = this.options,
              n = t[e],
              r = this.points,
              o = eG(this, { property: e, start: n, end: n });
            if (!o.length) return;
            let l = [],
              h = a.stepped
                ? eN
                : a.tension || "monotone" === a.cubicInterpolationMode
                ? eU
                : ej;
            for (i = 0, s = o.length; i < s; ++i) {
              let { start: s, end: d } = o[i],
                c = r[s],
                u = r[d];
              if (c === u) {
                l.push(c);
                continue;
              }
              let f = Math.abs((n - c[e]) / (u[e] - c[e])),
                g = h(c, u, f, a.stepped);
              (g[e] = t[e]), l.push(g);
            }
            return 1 === l.length ? l[0] : l;
          }
          pathSegment(t, e, i) {
            return sF(this)(t, this, e, i);
          }
          path(t, e, i) {
            let s = this.segments,
              a = sF(this),
              n = this._loop;
            for (let r of ((e = e || 0), (i = i || this.points.length - e), s))
              n &= a(t, this, r, { start: e, end: e + i - 1 });
            return !!n;
          }
          draw(t, e, i, s) {
            let a = this.options || {};
            (this.points || []).length &&
              a.borderWidth &&
              (t.save(),
              (function (t, e, i, s) {
                if (sz && !e.options.segment) {
                  let a;
                  (a = e._path) ||
                    ((a = e._path = new Path2D()),
                    e.path(a, i, s) && a.closePath()),
                    sA(t, e.options),
                    t.stroke(a);
                } else {
                  let { segments: a, options: n } = e,
                    r = sF(e);
                  for (let o of a)
                    sA(t, n, o.style),
                      t.beginPath(),
                      r(t, e, o, { start: i, end: i + s - 1 }) && t.closePath(),
                      t.stroke();
                }
              })(t, this, i, s),
              t.restore()),
              this.animated &&
                ((this._pointsUpdated = !1), (this._path = void 0));
          }
          constructor(t) {
            super(),
              (this.animated = !0),
              (this.options = void 0),
              (this._chart = void 0),
              (this._loop = void 0),
              (this._fullLoop = void 0),
              (this._path = void 0),
              (this._points = void 0),
              (this._segments = void 0),
              (this._decimated = !1),
              (this._pointsUpdated = !1),
              (this._datasetIndex = void 0),
              t && Object.assign(this, t);
          }
        }
        function sI(t, e, i, s) {
          let a = t.options,
            { [i]: n } = t.getProps([i], s);
          return Math.abs(e - n) < a.radius + a.hitRadius;
        }
        (0, r._)(sV, "id", "line"),
          (0, r._)(sV, "defaults", {
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            borderWidth: 3,
            capBezierPoints: !0,
            cubicInterpolationMode: "default",
            fill: !1,
            spanGaps: !1,
            stepped: !1,
            tension: 0,
          }),
          (0, r._)(sV, "defaultRoutes", {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor",
          }),
          (0, r._)(sV, "descriptors", {
            _scriptable: !0,
            _indexable: (t) => "borderDash" !== t && "fill" !== t,
          });
        class sB extends i5 {
          inRange(t, e, i) {
            let s = this.options,
              { x: a, y: n } = this.getProps(["x", "y"], i);
            return (
              Math.pow(t - a, 2) + Math.pow(e - n, 2) <
              Math.pow(s.hitRadius + s.radius, 2)
            );
          }
          inXRange(t, e) {
            return sI(this, t, "x", e);
          }
          inYRange(t, e) {
            return sI(this, t, "y", e);
          }
          getCenterPoint(t) {
            let { x: e, y: i } = this.getProps(["x", "y"], t);
            return { x: e, y: i };
          }
          size(t) {
            let e = (t = t || this.options || {}).radius || 0,
              i =
                ((e = Math.max(e, (e && t.hoverRadius) || 0)) &&
                  t.borderWidth) ||
                0;
            return (e + i) * 2;
          }
          draw(t, e) {
            let i = this.options;
            !this.skip &&
              !(i.radius < 0.1) &&
              t7(this, e, this.size(i) / 2) &&
              ((t.strokeStyle = i.borderColor),
              (t.lineWidth = i.borderWidth),
              (t.fillStyle = i.backgroundColor),
              t4(t, i, this.x, this.y));
          }
          getRange() {
            let t = this.options || {};
            return t.radius + t.hitRadius;
          }
          constructor(t) {
            super(),
              (0, r._)(this, "parsed", void 0),
              (0, r._)(this, "skip", void 0),
              (0, r._)(this, "stop", void 0),
              (this.options = void 0),
              (this.parsed = void 0),
              (this.skip = void 0),
              (this.stop = void 0),
              t && Object.assign(this, t);
          }
        }
        function sW(t, e) {
          let i,
            s,
            a,
            n,
            r,
            {
              x: o,
              y: l,
              base: h,
              width: d,
              height: c,
            } = t.getProps(["x", "y", "base", "width", "height"], e);
          return (
            t.horizontal
              ? ((r = c / 2),
                (i = Math.min(o, h)),
                (s = Math.max(o, h)),
                (a = l - r),
                (n = l + r))
              : ((i = o - (r = d / 2)),
                (s = o + r),
                (a = Math.min(l, h)),
                (n = Math.max(l, h))),
            { left: i, top: a, right: s, bottom: n }
          );
        }
        function sH(t, e, i, s) {
          return t ? 0 : tP(e, i, s);
        }
        function sj(t, e, i, s) {
          let a = null === e,
            n = null === i,
            r = t && !(a && n) && sW(t, s);
          return (
            r && (a || tS(e, r.left, r.right)) && (n || tS(i, r.top, r.bottom))
          );
        }
        function sN(t, e) {
          t.rect(e.x, e.y, e.w, e.h);
        }
        function sU(t, e) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            s = t.x !== i.x ? -e : 0,
            a = t.y !== i.y ? -e : 0,
            n = (t.x + t.w !== i.x + i.w ? e : 0) - s,
            r = (t.y + t.h !== i.y + i.h ? e : 0) - a;
          return {
            x: t.x + s,
            y: t.y + a,
            w: t.w + n,
            h: t.h + r,
            radius: t.radius,
          };
        }
        (0, r._)(sB, "id", "point"),
          (0, r._)(sB, "defaults", {
            borderWidth: 1,
            hitRadius: 1,
            hoverBorderWidth: 1,
            hoverRadius: 4,
            pointStyle: "circle",
            radius: 3,
            rotation: 0,
          }),
          (0, r._)(sB, "defaultRoutes", {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor",
          });
        class s$ extends i5 {
          draw(t) {
            var e;
            let {
                inflateAmount: i,
                options: { borderColor: s, backgroundColor: a },
              } = this,
              { inner: n, outer: r } = (function (t) {
                let e = sW(t),
                  i = e.right - e.left,
                  s = e.bottom - e.top,
                  a = (function (t, e, i) {
                    let s = t.options.borderWidth,
                      a = t.borderSkipped,
                      n = eh(s);
                    return {
                      t: sH(a.top, n.top, 0, i),
                      r: sH(a.right, n.right, 0, e),
                      b: sH(a.bottom, n.bottom, 0, i),
                      l: sH(a.left, n.left, 0, e),
                    };
                  })(t, i / 2, s / 2),
                  n = (function (t, e, i) {
                    let { enableBorderRadius: s } = t.getProps([
                        "enableBorderRadius",
                      ]),
                      a = t.options.borderRadius,
                      n = ed(a),
                      r = Math.min(e, i),
                      o = t.borderSkipped,
                      l = s || I(a);
                    return {
                      topLeft: sH(!l || o.top || o.left, n.topLeft, 0, r),
                      topRight: sH(!l || o.top || o.right, n.topRight, 0, r),
                      bottomLeft: sH(
                        !l || o.bottom || o.left,
                        n.bottomLeft,
                        0,
                        r
                      ),
                      bottomRight: sH(
                        !l || o.bottom || o.right,
                        n.bottomRight,
                        0,
                        r
                      ),
                    };
                  })(t, i / 2, s / 2);
                return {
                  outer: { x: e.left, y: e.top, w: i, h: s, radius: n },
                  inner: {
                    x: e.left + a.l,
                    y: e.top + a.t,
                    w: i - a.l - a.r,
                    h: s - a.t - a.b,
                    radius: {
                      topLeft: Math.max(0, n.topLeft - Math.max(a.t, a.l)),
                      topRight: Math.max(0, n.topRight - Math.max(a.t, a.r)),
                      bottomLeft: Math.max(
                        0,
                        n.bottomLeft - Math.max(a.b, a.l)
                      ),
                      bottomRight: Math.max(
                        0,
                        n.bottomRight - Math.max(a.b, a.r)
                      ),
                    },
                  },
                };
              })(this),
              o =
                (e = r.radius).topLeft ||
                e.topRight ||
                e.bottomLeft ||
                e.bottomRight
                  ? ea
                  : sN;
            t.save(),
              (r.w !== n.w || r.h !== n.h) &&
                (t.beginPath(),
                o(t, sU(r, i, n)),
                t.clip(),
                o(t, sU(n, -i, r)),
                (t.fillStyle = s),
                t.fill("evenodd")),
              t.beginPath(),
              o(t, sU(n, i)),
              (t.fillStyle = a),
              t.fill(),
              t.restore();
          }
          inRange(t, e, i) {
            return sj(this, t, e, i);
          }
          inXRange(t, e) {
            return sj(this, t, null, e);
          }
          inYRange(t, e) {
            return sj(this, null, t, e);
          }
          getCenterPoint(t) {
            let {
              x: e,
              y: i,
              base: s,
              horizontal: a,
            } = this.getProps(["x", "y", "base", "horizontal"], t);
            return { x: a ? (e + s) / 2 : e, y: a ? i : (i + s) / 2 };
          }
          getRange(t) {
            return "x" === t ? this.width / 2 : this.height / 2;
          }
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.horizontal = void 0),
              (this.base = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this.inflateAmount = void 0),
              t && Object.assign(this, t);
          }
        }
        (0, r._)(s$, "id", "bar"),
          (0, r._)(s$, "defaults", {
            borderSkipped: "start",
            borderWidth: 0,
            borderRadius: 0,
            inflateAmount: "auto",
            pointStyle: void 0,
          }),
          (0, r._)(s$, "defaultRoutes", {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor",
          });
        let sY = [
            "rgb(54, 162, 235)",
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          sX = sY.map((t) => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
        function sq(t, e, i, s) {
          if (s) return;
          let a = e[t],
            n = i[t];
          return (
            "angle" === t && ((a = tw(a)), (n = tw(n))),
            { property: t, start: a, end: n }
          );
        }
        function sK(t, e, i) {
          for (; e > t; e--) {
            let t = i[e];
            if (!isNaN(t.x) && !isNaN(t.y)) break;
          }
          return e;
        }
        function sJ(t, e, i, s) {
          return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
        }
        function sG(t, e) {
          let i = [],
            s = !1;
          return (
            V(t)
              ? ((s = !0), (i = t))
              : (i = (function (t, e) {
                  let { x: i = null, y: s = null } = t || {},
                    a = e.points,
                    n = [];
                  return (
                    e.segments.forEach((t) => {
                      let { start: e, end: r } = t;
                      r = sK(e, r, a);
                      let o = a[e],
                        l = a[r];
                      null !== s
                        ? (n.push({ x: o.x, y: s }), n.push({ x: l.x, y: s }))
                        : null !== i &&
                          (n.push({ x: i, y: o.y }), n.push({ x: i, y: l.y }));
                    }),
                    n
                  );
                })(t, e)),
            i.length
              ? new sV({
                  points: i,
                  options: { tension: 0 },
                  _loop: s,
                  _fullLoop: s,
                })
              : null
          );
        }
        function sZ(t) {
          return t && !1 !== t.fill;
        }
        class sQ {
          pathSegment(t, e, i) {
            let { x: s, y: a, radius: n } = this;
            return (
              (e = e || { start: 0, end: tn }),
              t.arc(s, a, n, e.end, e.start, !0),
              !i.bounds
            );
          }
          interpolate(t) {
            let { x: e, y: i, radius: s } = this,
              a = t.angle;
            return { x: e + Math.cos(a) * s, y: i + Math.sin(a) * s, angle: a };
          }
          constructor(t) {
            (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
          }
        }
        function s0(t, e, i) {
          let s = (function (t) {
              let { chart: e, fill: i, line: s } = t;
              if (B(i)) {
                var a,
                  n = e,
                  r = i;
                let t = n.getDatasetMeta(r);
                return t && n.isDatasetVisible(r) ? t.dataset : null;
              }
              if ("stack" === i)
                return (function (t) {
                  let { scale: e, index: i, line: s } = t,
                    a = [],
                    n = s.segments,
                    r = s.points,
                    o = (function (t, e) {
                      let i = [],
                        s = t.getMatchingVisibleMetas("line");
                      for (let t = 0; t < s.length; t++) {
                        let a = s[t];
                        if (a.index === e) break;
                        a.hidden || i.unshift(a.dataset);
                      }
                      return i;
                    })(e, i);
                  o.push(sG({ x: null, y: e.bottom }, s));
                  for (let t = 0; t < n.length; t++) {
                    let e = n[t];
                    for (let t = e.start; t <= e.end; t++)
                      !(function (t, e, i) {
                        let s = [];
                        for (let a = 0; a < i.length; a++) {
                          let {
                            first: n,
                            last: r,
                            point: o,
                          } = (function (t, e, i) {
                            let s = t.interpolate(e, "x");
                            if (!s) return {};
                            let a = s[i],
                              n = t.segments,
                              r = t.points,
                              o = !1,
                              l = !1;
                            for (let t = 0; t < n.length; t++) {
                              let e = n[t],
                                s = r[e.start][i],
                                h = r[e.end][i];
                              if (tS(a, s, h)) {
                                (o = a === s), (l = a === h);
                                break;
                              }
                            }
                            return { first: o, last: l, point: s };
                          })(i[a], e, "x");
                          if (o && (!n || !r)) {
                            if (n) s.unshift(o);
                            else if ((t.push(o), !r)) break;
                          }
                        }
                        t.push(...s);
                      })(a, r[t], o);
                  }
                  return new sV({ points: a, options: {} });
                })(t);
              if ("shape" === i) return !0;
              let o = ((a = t).scale || {}).getPointPositionForValue
                ? (function (t) {
                    let { scale: e, fill: i } = t,
                      s = e.options,
                      a = e.getLabels().length,
                      n = s.reverse ? e.max : e.min,
                      r =
                        "start" === i
                          ? n
                          : "end" === i
                          ? e.options.reverse
                            ? e.min
                            : e.max
                          : I(i)
                          ? i.value
                          : e.getBaseValue(),
                      o = [];
                    if (s.grid.circular) {
                      let t = e.getPointPositionForValue(0, n);
                      return new sQ({
                        x: t.x,
                        y: t.y,
                        radius: e.getDistanceFromCenterForValue(r),
                      });
                    }
                    for (let t = 0; t < a; ++t)
                      o.push(e.getPointPositionForValue(t, r));
                    return o;
                  })(a)
                : (function (t) {
                    let e,
                      { scale: i = {}, fill: s } = t,
                      a =
                        ((e = null),
                        "start" === s
                          ? (e = i.bottom)
                          : "end" === s
                          ? (e = i.top)
                          : I(s)
                          ? (e = i.getPixelForValue(s.value))
                          : i.getBasePixel && (e = i.getBasePixel()),
                        e);
                    if (B(a)) {
                      let t = i.isHorizontal();
                      return { x: t ? a : null, y: t ? null : a };
                    }
                    return null;
                  })(a);
              return o instanceof sQ ? o : sG(o, s);
            })(e),
            { chart: a, index: n, line: r, scale: o, axis: l } = e,
            h = r.options,
            d = h.fill,
            c = h.backgroundColor,
            { above: u = c, below: f = c } = d || {},
            g = a.getDatasetMeta(n),
            p = e1(a, g);
          s &&
            r.points.length &&
            (t9(t, i),
            (function (t, e) {
              let {
                  line: i,
                  target: s,
                  above: a,
                  below: n,
                  area: r,
                  scale: o,
                  clip: l,
                } = e,
                h = i._loop ? "angle" : e.axis;
              t.save();
              let d = n;
              n !== a &&
                ("x" === h
                  ? (s1(t, s, r.top),
                    s5(t, {
                      line: i,
                      target: s,
                      color: a,
                      scale: o,
                      property: h,
                      clip: l,
                    }),
                    t.restore(),
                    t.save(),
                    s1(t, s, r.bottom))
                  : "y" === h &&
                    (s2(t, s, r.left),
                    s5(t, {
                      line: i,
                      target: s,
                      color: n,
                      scale: o,
                      property: h,
                      clip: l,
                    }),
                    t.restore(),
                    t.save(),
                    s2(t, s, r.right),
                    (d = a))),
                s5(t, {
                  line: i,
                  target: s,
                  color: d,
                  scale: o,
                  property: h,
                  clip: l,
                }),
                t.restore();
            })(t, {
              line: r,
              target: s,
              above: u,
              below: f,
              area: i,
              scale: o,
              axis: l,
              clip: p,
            }),
            et(t));
        }
        function s1(t, e, i) {
          let { segments: s, points: a } = e,
            n = !0,
            r = !1;
          for (let o of (t.beginPath(), s)) {
            let { start: s, end: l } = o,
              h = a[s],
              d = a[sK(s, l, a)];
            n
              ? (t.moveTo(h.x, h.y), (n = !1))
              : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)),
              (r = !!e.pathSegment(t, o, { move: r }))
                ? t.closePath()
                : t.lineTo(d.x, i);
          }
          t.lineTo(e.first().x, i), t.closePath(), t.clip();
        }
        function s2(t, e, i) {
          let { segments: s, points: a } = e,
            n = !0,
            r = !1;
          for (let o of (t.beginPath(), s)) {
            let { start: s, end: l } = o,
              h = a[s],
              d = a[sK(s, l, a)];
            n
              ? (t.moveTo(h.x, h.y), (n = !1))
              : (t.lineTo(i, h.y), t.lineTo(h.x, h.y)),
              (r = !!e.pathSegment(t, o, { move: r }))
                ? t.closePath()
                : t.lineTo(i, d.y);
          }
          t.lineTo(i, e.first().y), t.closePath(), t.clip();
        }
        function s5(t, e) {
          let {
            line: i,
            target: s,
            property: a,
            color: n,
            scale: r,
            clip: o,
          } = e;
          for (let { source: e, target: l, start: h, end: d } of (function (
            t,
            e,
            i
          ) {
            let s = t.segments,
              a = t.points,
              n = e.points,
              r = [];
            for (let t of s) {
              let { start: s, end: o } = t;
              o = sK(s, o, a);
              let l = sq(i, a[s], a[o], t.loop);
              if (!e.segments) {
                r.push({ source: t, target: l, start: a[s], end: a[o] });
                continue;
              }
              for (let s of eG(e, l)) {
                let e = sq(i, n[s.start], n[s.end], s.loop);
                for (let n of eJ(t, a, e))
                  r.push({
                    source: n,
                    target: s,
                    start: { [i]: sJ(l, e, "start", Math.max) },
                    end: { [i]: sJ(l, e, "end", Math.min) },
                  });
              }
            }
            return r;
          })(i, s, a)) {
            let c,
              { style: { backgroundColor: u = n } = {} } = e,
              f = !0 !== s;
            t.save(),
              (t.fillStyle = u),
              (function (t, e, i, s) {
                let a = e.chart.chartArea,
                  { property: n, start: r, end: o } = s || {};
                if ("x" === n || "y" === n) {
                  let e, s, l, h;
                  "x" === n
                    ? ((e = r), (s = a.top), (l = o), (h = a.bottom))
                    : ((e = a.left), (s = r), (l = a.right), (h = o)),
                    t.beginPath(),
                    i &&
                      ((e = Math.max(e, i.left)),
                      (l = Math.min(l, i.right)),
                      (s = Math.max(s, i.top)),
                      (h = Math.min(h, i.bottom))),
                    t.rect(e, s, l - e, h - s),
                    t.clip();
                }
              })(t, r, o, f && sq(a, h, d)),
              t.beginPath();
            let g = !!i.pathSegment(t, e);
            if (f) {
              g ? t.closePath() : s3(t, s, d, a);
              let e = !!s.pathSegment(t, l, { move: g, reverse: !0 });
              (c = g && e) || s3(t, s, h, a);
            }
            t.closePath(), t.fill(c ? "evenodd" : "nonzero"), t.restore();
          }
        }
        function s3(t, e, i, s) {
          let a = e.interpolate(i, s);
          a && t.lineTo(a.x, a.y);
        }
        var s8 = {
          id: "filler",
          afterDatasetsUpdate(t, e, i) {
            let s,
              a,
              n,
              r,
              o = (t.data.datasets || []).length,
              l = [];
            for (a = 0; a < o; ++a)
              (n = (s = t.getDatasetMeta(a)).dataset),
                (r = null),
                n &&
                  n.options &&
                  n instanceof sV &&
                  (r = {
                    visible: t.isDatasetVisible(a),
                    index: a,
                    fill: (function (t, e, i) {
                      var s, a, n, r;
                      let o = (function (t) {
                        let e = t.options,
                          i = e.fill,
                          s = H(i && i.target, i);
                        return (
                          void 0 === s && (s = !!e.backgroundColor),
                          !1 !== s && null !== s && (!0 === s ? "origin" : s)
                        );
                      })(t);
                      if (I(o)) return !isNaN(o.value) && o;
                      let l = parseFloat(o);
                      return B(l) && Math.floor(l) === l
                        ? ((s = o[0]),
                          (a = e),
                          (n = l),
                          (r = i),
                          ("-" === s || "+" === s) && (n = a + n),
                          n !== a && !(n < 0) && !(n >= r) && n)
                        : ["origin", "start", "end", "stack", "shape"].indexOf(
                            o
                          ) >= 0 && o;
                    })(n, a, o),
                    chart: t,
                    axis: s.controller.options.indexAxis,
                    scale: s.vScale,
                    line: n,
                  }),
                (s.$filler = r),
                l.push(r);
            for (a = 0; a < o; ++a)
              (r = l[a]) &&
                !1 !== r.fill &&
                (r.fill = (function (t, e, i) {
                  let s,
                    a = t[e].fill,
                    n = [e];
                  if (!i) return a;
                  for (; !1 !== a && -1 === n.indexOf(a); ) {
                    if (!B(a)) return a;
                    if (!(s = t[a])) break;
                    if (s.visible) return a;
                    n.push(a), (a = s.fill);
                  }
                  return !1;
                })(l, a, i.propagate));
          },
          beforeDraw(t, e, i) {
            let s = "beforeDraw" === i.drawTime,
              a = t.getSortedVisibleDatasetMetas(),
              n = t.chartArea;
            for (let e = a.length - 1; e >= 0; --e) {
              let i = a[e].$filler;
              i &&
                (i.line.updateControlPoints(n, i.axis),
                s && i.fill && s0(t.ctx, i, n));
            }
          },
          beforeDatasetsDraw(t, e, i) {
            if ("beforeDatasetsDraw" !== i.drawTime) return;
            let s = t.getSortedVisibleDatasetMetas();
            for (let e = s.length - 1; e >= 0; --e) {
              let i = s[e].$filler;
              sZ(i) && s0(t.ctx, i, t.chartArea);
            }
          },
          beforeDatasetDraw(t, e, i) {
            let s = e.meta.$filler;
            sZ(s) &&
              "beforeDatasetDraw" === i.drawTime &&
              s0(t.ctx, s, t.chartArea);
          },
          defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
        };
        let s4 = (t, e) => {
          let { boxHeight: i = e, boxWidth: s = e } = t;
          return (
            t.usePointStyle &&
              ((i = Math.min(i, e)), (s = t.pointStyleWidth || Math.min(s, e))),
            { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) }
          );
        };
        class s6 extends i5 {
          update(t, e, i) {
            (this.maxWidth = t),
              (this.maxHeight = e),
              (this._margins = i),
              this.setDimensions(),
              this.buildLabels(),
              this.fit();
          }
          setDimensions() {
            this.isHorizontal()
              ? ((this.width = this.maxWidth),
                (this.left = this._margins.left),
                (this.right = this.width))
              : ((this.height = this.maxHeight),
                (this.top = this._margins.top),
                (this.bottom = this.height));
          }
          buildLabels() {
            let t = this.options.labels || {},
              e = N(t.generateLabels, [this.chart], this) || [];
            t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
              t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))),
              this.options.reverse && e.reverse(),
              (this.legendItems = e);
          }
          fit() {
            let t,
              e,
              { options: i, ctx: s } = this;
            if (!i.display) {
              this.width = this.height = 0;
              return;
            }
            let a = i.labels,
              n = eu(a.font),
              r = n.size,
              o = this._computeTitleHeight(),
              { boxWidth: l, itemHeight: h } = s4(a, r);
            (s.font = n.string),
              this.isHorizontal()
                ? ((t = this.maxWidth), (e = this._fitRows(o, r, l, h) + 10))
                : ((e = this.maxHeight), (t = this._fitCols(o, n, l, h) + 10)),
              (this.width = Math.min(t, i.maxWidth || this.maxWidth)),
              (this.height = Math.min(e, i.maxHeight || this.maxHeight));
          }
          _fitRows(t, e, i, s) {
            let {
                ctx: a,
                maxWidth: n,
                options: {
                  labels: { padding: r },
                },
              } = this,
              o = (this.legendHitBoxes = []),
              l = (this.lineWidths = [0]),
              h = s + r,
              d = t;
            (a.textAlign = "left"), (a.textBaseline = "middle");
            let c = -1,
              u = -h;
            return (
              this.legendItems.forEach((t, f) => {
                let g = i + e / 2 + a.measureText(t.text).width;
                (0 === f || l[l.length - 1] + g + 2 * r > n) &&
                  ((d += h),
                  (l[l.length - (f > 0 ? 0 : 1)] = 0),
                  (u += h),
                  c++),
                  (o[f] = { left: 0, top: u, row: c, width: g, height: s }),
                  (l[l.length - 1] += g + r);
              }),
              d
            );
          }
          _fitCols(t, e, i, s) {
            let {
                ctx: a,
                maxHeight: n,
                options: {
                  labels: { padding: r },
                },
              } = this,
              o = (this.legendHitBoxes = []),
              l = (this.columnSizes = []),
              h = n - t,
              d = r,
              c = 0,
              u = 0,
              f = 0,
              g = 0;
            return (
              this.legendItems.forEach((t, n) => {
                var p, m, b, x, _, y, v, M, w, k, P, S;
                let D,
                  C,
                  { itemWidth: O, itemHeight: A } =
                    ((p = i),
                    (m = e),
                    (b = a),
                    (x = t),
                    (_ = s),
                    {
                      itemWidth:
                        ((y = x),
                        (v = p),
                        (M = m),
                        (w = b),
                        (D = y.text) &&
                          "string" != typeof D &&
                          (D = D.reduce((t, e) =>
                            t.length > e.length ? t : e
                          )),
                        v + M.size / 2 + w.measureText(D).width),
                      itemHeight:
                        ((k = _),
                        (P = x),
                        (S = m.lineHeight),
                        (C = k),
                        "string" != typeof P.text && (C = s7(P, S)),
                        C),
                    });
                n > 0 &&
                  u + A + 2 * r > h &&
                  ((d += c + r),
                  l.push({ width: c, height: u }),
                  (f += c + r),
                  g++,
                  (c = u = 0)),
                  (o[n] = { left: f, top: u, col: g, width: O, height: A }),
                  (c = Math.max(c, O)),
                  (u += A + r);
              }),
              (d += c),
              l.push({ width: c, height: u }),
              d
            );
          }
          adjustHitBoxes() {
            if (!this.options.display) return;
            let t = this._computeTitleHeight(),
              {
                legendHitBoxes: e,
                options: {
                  align: i,
                  labels: { padding: s },
                  rtl: a,
                },
              } = this,
              n = e$(a, this.left, this.width);
            if (this.isHorizontal()) {
              let a = 0,
                r = tz(i, this.left + s, this.right - this.lineWidths[a]);
              for (let o of e)
                a !== o.row &&
                  ((a = o.row),
                  (r = tz(i, this.left + s, this.right - this.lineWidths[a]))),
                  (o.top += this.top + t + s),
                  (o.left = n.leftForLtr(n.x(r), o.width)),
                  (r += o.width + s);
            } else {
              let a = 0,
                r = tz(
                  i,
                  this.top + t + s,
                  this.bottom - this.columnSizes[a].height
                );
              for (let o of e)
                o.col !== a &&
                  ((a = o.col),
                  (r = tz(
                    i,
                    this.top + t + s,
                    this.bottom - this.columnSizes[a].height
                  ))),
                  (o.top = r),
                  (o.left += this.left + s),
                  (o.left = n.leftForLtr(n.x(o.left), o.width)),
                  (r += o.height + s);
            }
          }
          isHorizontal() {
            return (
              "top" === this.options.position ||
              "bottom" === this.options.position
            );
          }
          draw() {
            if (this.options.display) {
              let t = this.ctx;
              t9(t, this), this._draw(), et(t);
            }
          }
          _draw() {
            let t,
              { options: e, columnSizes: i, lineWidths: s, ctx: a } = this,
              { align: n, labels: r } = e,
              o = t2.color,
              l = e$(e.rtl, this.left, this.width),
              h = eu(r.font),
              { padding: d } = r,
              c = h.size,
              u = c / 2;
            this.drawTitle(),
              (a.textAlign = l.textAlign("left")),
              (a.textBaseline = "middle"),
              (a.lineWidth = 0.5),
              (a.font = h.string);
            let { boxWidth: f, boxHeight: g, itemHeight: p } = s4(r, c),
              m = function (t, e, i) {
                if (isNaN(f) || f <= 0 || isNaN(g) || g < 0) return;
                a.save();
                let s = H(i.lineWidth, 1);
                if (
                  ((a.fillStyle = H(i.fillStyle, o)),
                  (a.lineCap = H(i.lineCap, "butt")),
                  (a.lineDashOffset = H(i.lineDashOffset, 0)),
                  (a.lineJoin = H(i.lineJoin, "miter")),
                  (a.lineWidth = s),
                  (a.strokeStyle = H(i.strokeStyle, o)),
                  a.setLineDash(H(i.lineDash, [])),
                  r.usePointStyle)
                ) {
                  let n = {
                    radius: (g * Math.SQRT2) / 2,
                    pointStyle: i.pointStyle,
                    rotation: i.rotation,
                    borderWidth: s,
                  };
                  t6(a, n, l.xPlus(t, f / 2), e + u, r.pointStyleWidth && f);
                } else {
                  let n = e + Math.max((c - g) / 2, 0),
                    r = l.leftForLtr(t, f),
                    o = ed(i.borderRadius);
                  a.beginPath(),
                    Object.values(o).some((t) => 0 !== t)
                      ? ea(a, { x: r, y: n, w: f, h: g, radius: o })
                      : a.rect(r, n, f, g),
                    a.fill(),
                    0 !== s && a.stroke();
                }
                a.restore();
              },
              b = function (t, e, i) {
                es(a, i.text, t, e + p / 2, h, {
                  strikethrough: i.hidden,
                  textAlign: l.textAlign(i.textAlign),
                });
              },
              x = this.isHorizontal(),
              _ = this._computeTitleHeight();
            (t = x
              ? {
                  x: tz(n, this.left + d, this.right - s[0]),
                  y: this.top + d + _,
                  line: 0,
                }
              : {
                  x: this.left + d,
                  y: tz(n, this.top + _ + d, this.bottom - i[0].height),
                  line: 0,
                }),
              eY(this.ctx, e.textDirection);
            let y = p + d;
            this.legendItems.forEach((o, c) => {
              var g, p;
              (a.strokeStyle = o.fontColor), (a.fillStyle = o.fontColor);
              let v = a.measureText(o.text).width,
                M = l.textAlign(o.textAlign || (o.textAlign = r.textAlign)),
                w = f + u + v,
                k = t.x,
                P = t.y;
              if (
                (l.setWidth(this.width),
                x
                  ? c > 0 &&
                    k + w + d > this.right &&
                    ((P = t.y += y),
                    t.line++,
                    (k = t.x = tz(n, this.left + d, this.right - s[t.line])))
                  : c > 0 &&
                    P + y > this.bottom &&
                    ((k = t.x = k + i[t.line].width + d),
                    t.line++,
                    (P = t.y =
                      tz(n, this.top + _ + d, this.bottom - i[t.line].height))),
                m(l.x(k), P, o),
                (g = k + f + u),
                (p = x ? k + w : this.right),
                (k =
                  M === (e.rtl ? "left" : "right")
                    ? p
                    : "center" === M
                    ? (g + p) / 2
                    : g),
                b(l.x(k), P, o),
                x)
              )
                t.x += w + d;
              else if ("string" != typeof o.text) {
                let e = h.lineHeight;
                t.y += s7(o, e) + d;
              } else t.y += y;
            }),
              eX(this.ctx, e.textDirection);
          }
          drawTitle() {
            let t,
              e = this.options,
              i = e.title,
              s = eu(i.font),
              a = ec(i.padding);
            if (!i.display) return;
            let n = e$(e.rtl, this.left, this.width),
              r = this.ctx,
              o = i.position,
              l = s.size / 2,
              h = a.top + l,
              d = this.left,
              c = this.width;
            if (this.isHorizontal())
              (c = Math.max(...this.lineWidths)),
                (t = this.top + h),
                (d = tz(e.align, d, this.right - c));
            else {
              let i = this.columnSizes.reduce(
                (t, e) => Math.max(t, e.height),
                0
              );
              t =
                h +
                tz(
                  e.align,
                  this.top,
                  this.bottom -
                    i -
                    e.labels.padding -
                    this._computeTitleHeight()
                );
            }
            let u = tz(o, d, d + c);
            (r.textAlign = n.textAlign(tF(o))),
              (r.textBaseline = "middle"),
              (r.strokeStyle = i.color),
              (r.fillStyle = i.color),
              (r.font = s.string),
              es(r, i.text, u, t, s);
          }
          _computeTitleHeight() {
            let t = this.options.title,
              e = eu(t.font),
              i = ec(t.padding);
            return t.display ? e.lineHeight + i.height : 0;
          }
          _getLegendItemAt(t, e) {
            let i, s, a;
            if (tS(t, this.left, this.right) && tS(e, this.top, this.bottom)) {
              for (i = 0, a = this.legendHitBoxes; i < a.length; ++i)
                if (
                  tS(t, (s = a[i]).left, s.left + s.width) &&
                  tS(e, s.top, s.top + s.height)
                )
                  return this.legendItems[i];
            }
            return null;
          }
          handleEvent(t) {
            var e, i;
            let s = this.options;
            if (
              ((e = t.type),
              (i = s),
              (("mousemove" !== e && "mouseout" !== e) ||
                (!i.onHover && !i.onLeave)) &&
                (!i.onClick || ("click" !== e && "mouseup" !== e)))
            )
              return;
            let a = this._getLegendItemAt(t.x, t.y);
            if ("mousemove" === t.type || "mouseout" === t.type) {
              let e = this._hoveredItem,
                i =
                  null !== e &&
                  null !== a &&
                  e.datasetIndex === a.datasetIndex &&
                  e.index === a.index;
              e && !i && N(s.onLeave, [t, e, this], this),
                (this._hoveredItem = a),
                a && !i && N(s.onHover, [t, a, this], this);
            } else a && N(s.onClick, [t, a, this], this);
          }
          constructor(t) {
            super(),
              (this._added = !1),
              (this.legendHitBoxes = []),
              (this._hoveredItem = null),
              (this.doughnutMode = !1),
              (this.chart = t.chart),
              (this.options = t.options),
              (this.ctx = t.ctx),
              (this.legendItems = void 0),
              (this.columnSizes = void 0),
              (this.lineWidths = void 0),
              (this.maxHeight = void 0),
              (this.maxWidth = void 0),
              (this.top = void 0),
              (this.bottom = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.height = void 0),
              (this.width = void 0),
              (this._margins = void 0),
              (this.position = void 0),
              (this.weight = void 0),
              (this.fullSize = void 0);
          }
        }
        function s7(t, e) {
          return e * (t.text ? t.text.length : 0);
        }
        var s9 = {
          id: "legend",
          _element: s6,
          start(t, e, i) {
            let s = (t.legend = new s6({ ctx: t.ctx, options: i, chart: t }));
            iW.configure(t, s, i), iW.addBox(t, s);
          },
          stop(t) {
            iW.removeBox(t, t.legend), delete t.legend;
          },
          beforeUpdate(t, e, i) {
            let s = t.legend;
            iW.configure(t, s, i), (s.options = i);
          },
          afterUpdate(t) {
            let e = t.legend;
            e.buildLabels(), e.adjustHitBoxes();
          },
          afterEvent(t, e) {
            e.replay || t.legend.handleEvent(e.event);
          },
          defaults: {
            display: !0,
            position: "top",
            align: "center",
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick(t, e, i) {
              let s = e.datasetIndex,
                a = i.chart;
              a.isDatasetVisible(s)
                ? (a.hide(s), (e.hidden = !0))
                : (a.show(s), (e.hidden = !1));
            },
            onHover: null,
            onLeave: null,
            labels: {
              color: (t) => t.chart.options.color,
              boxWidth: 40,
              padding: 10,
              generateLabels(t) {
                let e = t.data.datasets,
                  {
                    labels: {
                      usePointStyle: i,
                      pointStyle: s,
                      textAlign: a,
                      color: n,
                      useBorderRadius: r,
                      borderRadius: o,
                    },
                  } = t.legend.options;
                return t._getSortedDatasetMetas().map((t) => {
                  let l = t.controller.getStyle(i ? 0 : void 0),
                    h = ec(l.borderWidth);
                  return {
                    text: e[t.index].label,
                    fillStyle: l.backgroundColor,
                    fontColor: n,
                    hidden: !t.visible,
                    lineCap: l.borderCapStyle,
                    lineDash: l.borderDash,
                    lineDashOffset: l.borderDashOffset,
                    lineJoin: l.borderJoinStyle,
                    lineWidth: (h.width + h.height) / 4,
                    strokeStyle: l.borderColor,
                    pointStyle: s || l.pointStyle,
                    rotation: l.rotation,
                    textAlign: a || l.textAlign,
                    borderRadius: r && (o || l.borderRadius),
                    datasetIndex: t.index,
                  };
                }, this);
              },
            },
            title: {
              color: (t) => t.chart.options.color,
              display: !1,
              position: "center",
              text: "",
            },
          },
          descriptors: {
            _scriptable: (t) => !t.startsWith("on"),
            labels: {
              _scriptable: (t) =>
                !["generateLabels", "filter", "sort"].includes(t),
            },
          },
        };
        class at extends i5 {
          update(t, e) {
            let i = this.options;
            if (((this.left = 0), (this.top = 0), !i.display)) {
              this.width = this.height = this.right = this.bottom = 0;
              return;
            }
            (this.width = this.right = t), (this.height = this.bottom = e);
            let s = V(i.text) ? i.text.length : 1;
            this._padding = ec(i.padding);
            let a = s * eu(i.font).lineHeight + this._padding.height;
            this.isHorizontal() ? (this.height = a) : (this.width = a);
          }
          isHorizontal() {
            let t = this.options.position;
            return "top" === t || "bottom" === t;
          }
          _drawArgs(t) {
            let e,
              i,
              s,
              { top: a, left: n, bottom: r, right: o, options: l } = this,
              h = l.align,
              d = 0;
            return (
              this.isHorizontal()
                ? ((i = tz(h, n, o)), (s = a + t), (e = o - n))
                : ("left" === l.position
                    ? ((i = n + t), (s = tz(h, r, a)), (d = -0.5 * ta))
                    : ((i = o - t), (s = tz(h, a, r)), (d = 0.5 * ta)),
                  (e = r - a)),
              { titleX: i, titleY: s, maxWidth: e, rotation: d }
            );
          }
          draw() {
            let t = this.ctx,
              e = this.options;
            if (!e.display) return;
            let i = eu(e.font),
              s = i.lineHeight / 2 + this._padding.top,
              {
                titleX: a,
                titleY: n,
                maxWidth: r,
                rotation: o,
              } = this._drawArgs(s);
            es(t, e.text, 0, 0, i, {
              color: e.color,
              maxWidth: r,
              rotation: o,
              textAlign: tF(e.align),
              textBaseline: "middle",
              translation: [a, n],
            });
          }
          constructor(t) {
            super(),
              (this.chart = t.chart),
              (this.options = t.options),
              (this.ctx = t.ctx),
              (this._padding = void 0),
              (this.top = void 0),
              (this.bottom = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this.position = void 0),
              (this.weight = void 0),
              (this.fullSize = void 0);
          }
        }
        var ae = {
          id: "title",
          _element: at,
          start(t, e, i) {
            let s = new at({ ctx: t.ctx, options: i, chart: t });
            iW.configure(t, s, i), iW.addBox(t, s), (t.titleBlock = s);
          },
          stop(t) {
            let e = t.titleBlock;
            iW.removeBox(t, e), delete t.titleBlock;
          },
          beforeUpdate(t, e, i) {
            let s = t.titleBlock;
            iW.configure(t, s, i), (s.options = i);
          },
          defaults: {
            align: "center",
            display: !1,
            font: { weight: "bold" },
            fullSize: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3,
          },
          defaultRoutes: { color: "color" },
          descriptors: { _scriptable: !0, _indexable: !1 },
        };
        new WeakMap();
        let ai = {
          average(t) {
            let e, i;
            if (!t.length) return !1;
            let s = new Set(),
              a = 0,
              n = 0;
            for (e = 0, i = t.length; e < i; ++e) {
              let i = t[e].element;
              if (i && i.hasValue()) {
                let t = i.tooltipPosition();
                s.add(t.x), (a += t.y), ++n;
              }
            }
            return (
              0 !== n &&
              0 !== s.size && {
                x: [...s].reduce((t, e) => t + e) / s.size,
                y: a / n,
              }
            );
          },
          nearest(t, e) {
            let i, s, a;
            if (!t.length) return !1;
            let n = e.x,
              r = e.y,
              o = 1 / 0;
            for (i = 0, s = t.length; i < s; ++i) {
              let s = t[i].element;
              if (s && s.hasValue()) {
                let t = tv(e, s.getCenterPoint());
                t < o && ((o = t), (a = s));
              }
            }
            if (a) {
              let t = a.tooltipPosition();
              (n = t.x), (r = t.y);
            }
            return { x: n, y: r };
          },
        };
        function as(t, e) {
          return e && (V(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }
        function aa(t) {
          return ("string" == typeof t || t instanceof String) &&
            t.indexOf("\n") > -1
            ? t.split("\n")
            : t;
        }
        function an(t, e) {
          let i = t.chart.ctx,
            { body: s, footer: a, title: n } = t,
            { boxWidth: r, boxHeight: o } = e,
            l = eu(e.bodyFont),
            h = eu(e.titleFont),
            d = eu(e.footerFont),
            c = n.length,
            u = a.length,
            f = s.length,
            g = ec(e.padding),
            p = g.height,
            m = 0,
            b = s.reduce(
              (t, e) => t + e.before.length + e.lines.length + e.after.length,
              0
            );
          (b += t.beforeBody.length + t.afterBody.length),
            c &&
              (p +=
                c * h.lineHeight +
                (c - 1) * e.titleSpacing +
                e.titleMarginBottom),
            b &&
              (p +=
                f *
                  (e.displayColors ? Math.max(o, l.lineHeight) : l.lineHeight) +
                (b - f) * l.lineHeight +
                (b - 1) * e.bodySpacing),
            u &&
              (p +=
                e.footerMarginTop +
                u * d.lineHeight +
                (u - 1) * e.footerSpacing);
          let x = 0,
            _ = function (t) {
              m = Math.max(m, i.measureText(t).width + x);
            };
          return (
            i.save(),
            (i.font = h.string),
            U(t.title, _),
            (i.font = l.string),
            U(t.beforeBody.concat(t.afterBody), _),
            (x = e.displayColors ? r + 2 + e.boxPadding : 0),
            U(s, (t) => {
              U(t.before, _), U(t.lines, _), U(t.after, _);
            }),
            (x = 0),
            (i.font = d.string),
            U(t.footer, _),
            i.restore(),
            { width: (m += g.width), height: p }
          );
        }
        function ar(t, e, i) {
          let s =
            i.yAlign ||
            e.yAlign ||
            (function (t, e) {
              let { y: i, height: s } = e;
              return i < s / 2
                ? "top"
                : i > t.height - s / 2
                ? "bottom"
                : "center";
            })(t, i);
          return {
            xAlign:
              i.xAlign ||
              e.xAlign ||
              (function (t, e, i, s) {
                let { x: a, width: n } = i,
                  {
                    width: r,
                    chartArea: { left: o, right: l },
                  } = t,
                  h = "center";
                return (
                  "center" === s
                    ? (h = a <= (o + l) / 2 ? "left" : "right")
                    : a <= n / 2
                    ? (h = "left")
                    : a >= r - n / 2 && (h = "right"),
                  (function (t, e, i, s) {
                    let { x: a, width: n } = s,
                      r = i.caretSize + i.caretPadding;
                    if (
                      ("left" === t && a + n + r > e.width) ||
                      ("right" === t && a - n - r < 0)
                    )
                      return !0;
                  })(h, t, e, i) && (h = "center"),
                  h
                );
              })(t, e, i, s),
            yAlign: s,
          };
        }
        function ao(t, e, i, s) {
          let { caretSize: a, caretPadding: n, cornerRadius: r } = t,
            { xAlign: o, yAlign: l } = i,
            h = a + n,
            { topLeft: d, topRight: c, bottomLeft: u, bottomRight: f } = ed(r),
            g = (function (t, e) {
              let { x: i, width: s } = t;
              return (
                "right" === e ? (i -= s) : "center" === e && (i -= s / 2), i
              );
            })(e, o),
            p = (function (t, e, i) {
              let { y: s, height: a } = t;
              return (
                "top" === e
                  ? (s += i)
                  : "bottom" === e
                  ? (s -= a + i)
                  : (s -= a / 2),
                s
              );
            })(e, l, h);
          return (
            "center" === l
              ? "left" === o
                ? (g += h)
                : "right" === o && (g -= h)
              : "left" === o
              ? (g -= Math.max(d, u) + a)
              : "right" === o && (g += Math.max(c, f) + a),
            { x: tP(g, 0, s.width - e.width), y: tP(p, 0, s.height - e.height) }
          );
        }
        function al(t, e, i) {
          let s = ec(i.padding);
          return "center" === e
            ? t.x + t.width / 2
            : "right" === e
            ? t.x + t.width - s.right
            : t.x + s.left;
        }
        function ah(t, e) {
          let i =
            e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
          return i ? t.override(i) : t;
        }
        let ad = {
          beforeTitle: R,
          title(t) {
            if (t.length > 0) {
              let e = t[0],
                i = e.chart.data.labels,
                s = i ? i.length : 0;
              if (this && this.options && "dataset" === this.options.mode)
                return e.dataset.label || "";
              if (e.label) return e.label;
              if (s > 0 && e.dataIndex < s) return i[e.dataIndex];
            }
            return "";
          },
          afterTitle: R,
          beforeBody: R,
          beforeLabel: R,
          label(t) {
            if (this && this.options && "dataset" === this.options.mode)
              return t.label + ": " + t.formattedValue || t.formattedValue;
            let e = t.dataset.label || "";
            e && (e += ": ");
            let i = t.formattedValue;
            return z(i) || (e += i), e;
          },
          labelColor(t) {
            let e = t.chart
              .getDatasetMeta(t.datasetIndex)
              .controller.getStyle(t.dataIndex);
            return {
              borderColor: e.borderColor,
              backgroundColor: e.backgroundColor,
              borderWidth: e.borderWidth,
              borderDash: e.borderDash,
              borderDashOffset: e.borderDashOffset,
              borderRadius: 0,
            };
          },
          labelTextColor() {
            return this.options.bodyColor;
          },
          labelPointStyle(t) {
            let e = t.chart
              .getDatasetMeta(t.datasetIndex)
              .controller.getStyle(t.dataIndex);
            return { pointStyle: e.pointStyle, rotation: e.rotation };
          },
          afterLabel: R,
          afterBody: R,
          beforeFooter: R,
          footer: R,
          afterFooter: R,
        };
        function ac(t, e, i, s) {
          let a = t[e].call(i, s);
          return void 0 === a ? ad[e].call(i, s) : a;
        }
        class au extends i5 {
          initialize(t) {
            (this.options = t),
              (this._cachedAnimations = void 0),
              (this.$context = void 0);
          }
          _resolveAnimations() {
            let t = this._cachedAnimations;
            if (t) return t;
            let e = this.chart,
              i = this.options.setContext(this.getContext()),
              s = i.enabled && e.options.animation && i.animations,
              a = new e4(this.chart, s);
            return (
              s._cacheable && (this._cachedAnimations = Object.freeze(a)), a
            );
          }
          getContext() {
            var t;
            return (
              this.$context ||
              (this.$context =
                ((t = this.chart.getContext()),
                eg(t, {
                  tooltip: this,
                  tooltipItems: this._tooltipItems,
                  type: "tooltip",
                })))
            );
          }
          getTitle(t, e) {
            let { callbacks: i } = e,
              s = ac(i, "beforeTitle", this, t),
              a = ac(i, "title", this, t),
              n = ac(i, "afterTitle", this, t),
              r = [];
            return (r = as(r, aa(s))), (r = as(r, aa(a))), (r = as(r, aa(n)));
          }
          getBeforeBody(t, e) {
            return as([], aa(ac(e.callbacks, "beforeBody", this, t)));
          }
          getBody(t, e) {
            let { callbacks: i } = e,
              s = [];
            return (
              U(t, (t) => {
                let e = { before: [], lines: [], after: [] },
                  a = ah(i, t);
                as(e.before, aa(ac(a, "beforeLabel", this, t))),
                  as(e.lines, ac(a, "label", this, t)),
                  as(e.after, aa(ac(a, "afterLabel", this, t))),
                  s.push(e);
              }),
              s
            );
          }
          getAfterBody(t, e) {
            return as([], aa(ac(e.callbacks, "afterBody", this, t)));
          }
          getFooter(t, e) {
            let { callbacks: i } = e,
              s = ac(i, "beforeFooter", this, t),
              a = ac(i, "footer", this, t),
              n = ac(i, "afterFooter", this, t),
              r = [];
            return (r = as(r, aa(s))), (r = as(r, aa(a))), (r = as(r, aa(n)));
          }
          _createItems(t) {
            let e,
              i,
              s = this._active,
              a = this.chart.data,
              n = [],
              r = [],
              o = [],
              l = [];
            for (e = 0, i = s.length; e < i; ++e)
              l.push(
                (function (t, e) {
                  let { element: i, datasetIndex: s, index: a } = e,
                    n = t.getDatasetMeta(s).controller,
                    { label: r, value: o } = n.getLabelAndValue(a);
                  return {
                    chart: t,
                    label: r,
                    parsed: n.getParsed(a),
                    raw: t.data.datasets[s].data[a],
                    formattedValue: o,
                    dataset: n.getDataset(),
                    dataIndex: a,
                    datasetIndex: s,
                    element: i,
                  };
                })(this.chart, s[e])
              );
            return (
              t.filter && (l = l.filter((e, i, s) => t.filter(e, i, s, a))),
              t.itemSort && (l = l.sort((e, i) => t.itemSort(e, i, a))),
              U(l, (e) => {
                let i = ah(t.callbacks, e);
                n.push(ac(i, "labelColor", this, e)),
                  r.push(ac(i, "labelPointStyle", this, e)),
                  o.push(ac(i, "labelTextColor", this, e));
              }),
              (this.labelColors = n),
              (this.labelPointStyles = r),
              (this.labelTextColors = o),
              (this.dataPoints = l),
              l
            );
          }
          update(t, e) {
            let i,
              s = this.options.setContext(this.getContext()),
              a = this._active,
              n = [];
            if (a.length) {
              let t = ai[s.position].call(this, a, this._eventPosition);
              (n = this._createItems(s)),
                (this.title = this.getTitle(n, s)),
                (this.beforeBody = this.getBeforeBody(n, s)),
                (this.body = this.getBody(n, s)),
                (this.afterBody = this.getAfterBody(n, s)),
                (this.footer = this.getFooter(n, s));
              let e = (this._size = an(this, s)),
                r = Object.assign({}, t, e),
                o = ar(this.chart, s, r),
                l = ao(s, r, o, this.chart);
              (this.xAlign = o.xAlign),
                (this.yAlign = o.yAlign),
                (i = {
                  opacity: 1,
                  x: l.x,
                  y: l.y,
                  width: e.width,
                  height: e.height,
                  caretX: t.x,
                  caretY: t.y,
                });
            } else 0 !== this.opacity && (i = { opacity: 0 });
            (this._tooltipItems = n),
              (this.$context = void 0),
              i && this._resolveAnimations().update(this, i),
              t &&
                s.external &&
                s.external.call(this, {
                  chart: this.chart,
                  tooltip: this,
                  replay: e,
                });
          }
          drawCaret(t, e, i, s) {
            let a = this.getCaretPosition(t, i, s);
            e.lineTo(a.x1, a.y1), e.lineTo(a.x2, a.y2), e.lineTo(a.x3, a.y3);
          }
          getCaretPosition(t, e, i) {
            let s,
              a,
              n,
              r,
              o,
              l,
              { xAlign: h, yAlign: d } = this,
              { caretSize: c, cornerRadius: u } = i,
              {
                topLeft: f,
                topRight: g,
                bottomLeft: p,
                bottomRight: m,
              } = ed(u),
              { x: b, y: x } = t,
              { width: _, height: y } = e;
            return (
              "center" === d
                ? ((o = x + y / 2),
                  "left" === h
                    ? ((a = (s = b) - c), (r = o + c), (l = o - c))
                    : ((a = (s = b + _) + c), (r = o - c), (l = o + c)),
                  (n = s))
                : ((a =
                    "left" === h
                      ? b + Math.max(f, p) + c
                      : "right" === h
                      ? b + _ - Math.max(g, m) - c
                      : this.caretX),
                  "top" === d
                    ? ((o = (r = x) - c), (s = a - c), (n = a + c))
                    : ((o = (r = x + y) + c), (s = a + c), (n = a - c)),
                  (l = r)),
              { x1: s, x2: a, x3: n, y1: r, y2: o, y3: l }
            );
          }
          drawTitle(t, e, i) {
            let s,
              a,
              n,
              r = this.title,
              o = r.length;
            if (o) {
              let l = e$(i.rtl, this.x, this.width);
              for (
                n = 0,
                  t.x = al(this, i.titleAlign, i),
                  e.textAlign = l.textAlign(i.titleAlign),
                  e.textBaseline = "middle",
                  s = eu(i.titleFont),
                  a = i.titleSpacing,
                  e.fillStyle = i.titleColor,
                  e.font = s.string;
                n < o;
                ++n
              )
                e.fillText(r[n], l.x(t.x), t.y + s.lineHeight / 2),
                  (t.y += s.lineHeight + a),
                  n + 1 === o && (t.y += i.titleMarginBottom - a);
            }
          }
          _drawColorBox(t, e, i, s, a) {
            let n = this.labelColors[i],
              r = this.labelPointStyles[i],
              { boxHeight: o, boxWidth: l } = a,
              h = eu(a.bodyFont),
              d = al(this, "left", a),
              c = s.x(d),
              u = o < h.lineHeight ? (h.lineHeight - o) / 2 : 0,
              f = e.y + u;
            if (a.usePointStyle) {
              let e = {
                  radius: Math.min(l, o) / 2,
                  pointStyle: r.pointStyle,
                  rotation: r.rotation,
                  borderWidth: 1,
                },
                i = s.leftForLtr(c, l) + l / 2,
                h = f + o / 2;
              (t.strokeStyle = a.multiKeyBackground),
                (t.fillStyle = a.multiKeyBackground),
                t4(t, e, i, h),
                (t.strokeStyle = n.borderColor),
                (t.fillStyle = n.backgroundColor),
                t4(t, e, i, h);
            } else {
              (t.lineWidth = I(n.borderWidth)
                ? Math.max(...Object.values(n.borderWidth))
                : n.borderWidth || 1),
                (t.strokeStyle = n.borderColor),
                t.setLineDash(n.borderDash || []),
                (t.lineDashOffset = n.borderDashOffset || 0);
              let e = s.leftForLtr(c, l),
                i = s.leftForLtr(s.xPlus(c, 1), l - 2),
                r = ed(n.borderRadius);
              Object.values(r).some((t) => 0 !== t)
                ? (t.beginPath(),
                  (t.fillStyle = a.multiKeyBackground),
                  ea(t, { x: e, y: f, w: l, h: o, radius: r }),
                  t.fill(),
                  t.stroke(),
                  (t.fillStyle = n.backgroundColor),
                  t.beginPath(),
                  ea(t, { x: i, y: f + 1, w: l - 2, h: o - 2, radius: r }),
                  t.fill())
                : ((t.fillStyle = a.multiKeyBackground),
                  t.fillRect(e, f, l, o),
                  t.strokeRect(e, f, l, o),
                  (t.fillStyle = n.backgroundColor),
                  t.fillRect(i, f + 1, l - 2, o - 2));
            }
            t.fillStyle = this.labelTextColors[i];
          }
          drawBody(t, e, i) {
            let s,
              a,
              n,
              r,
              o,
              l,
              { body: h } = this,
              {
                bodySpacing: d,
                bodyAlign: c,
                displayColors: u,
                boxHeight: f,
                boxWidth: g,
                boxPadding: p,
              } = i,
              m = eu(i.bodyFont),
              b = m.lineHeight,
              x = 0,
              _ = e$(i.rtl, this.x, this.width),
              y = function (i) {
                e.fillText(i, _.x(t.x + x), t.y + b / 2), (t.y += b + d);
              },
              v = _.textAlign(c);
            for (
              e.textAlign = c,
                e.textBaseline = "middle",
                e.font = m.string,
                t.x = al(this, v, i),
                e.fillStyle = i.bodyColor,
                U(this.beforeBody, y),
                x =
                  u && "right" !== v
                    ? "center" === c
                      ? g / 2 + p
                      : g + 2 + p
                    : 0,
                n = 0,
                o = h.length;
              n < o;
              ++n
            ) {
              for (
                s = h[n],
                  e.fillStyle = this.labelTextColors[n],
                  U(s.before, y),
                  a = s.lines,
                  u &&
                    a.length &&
                    (this._drawColorBox(e, t, n, _, i),
                    (b = Math.max(m.lineHeight, f))),
                  r = 0,
                  l = a.length;
                r < l;
                ++r
              )
                y(a[r]), (b = m.lineHeight);
              U(s.after, y);
            }
            (x = 0), (b = m.lineHeight), U(this.afterBody, y), (t.y -= d);
          }
          drawFooter(t, e, i) {
            let s,
              a,
              n = this.footer,
              r = n.length;
            if (r) {
              let o = e$(i.rtl, this.x, this.width);
              for (
                t.x = al(this, i.footerAlign, i),
                  t.y += i.footerMarginTop,
                  e.textAlign = o.textAlign(i.footerAlign),
                  e.textBaseline = "middle",
                  s = eu(i.footerFont),
                  e.fillStyle = i.footerColor,
                  e.font = s.string,
                  a = 0;
                a < r;
                ++a
              )
                e.fillText(n[a], o.x(t.x), t.y + s.lineHeight / 2),
                  (t.y += s.lineHeight + i.footerSpacing);
            }
          }
          drawBackground(t, e, i, s) {
            let { xAlign: a, yAlign: n } = this,
              { x: r, y: o } = t,
              { width: l, height: h } = i,
              {
                topLeft: d,
                topRight: c,
                bottomLeft: u,
                bottomRight: f,
              } = ed(s.cornerRadius);
            (e.fillStyle = s.backgroundColor),
              (e.strokeStyle = s.borderColor),
              (e.lineWidth = s.borderWidth),
              e.beginPath(),
              e.moveTo(r + d, o),
              "top" === n && this.drawCaret(t, e, i, s),
              e.lineTo(r + l - c, o),
              e.quadraticCurveTo(r + l, o, r + l, o + c),
              "center" === n && "right" === a && this.drawCaret(t, e, i, s),
              e.lineTo(r + l, o + h - f),
              e.quadraticCurveTo(r + l, o + h, r + l - f, o + h),
              "bottom" === n && this.drawCaret(t, e, i, s),
              e.lineTo(r + u, o + h),
              e.quadraticCurveTo(r, o + h, r, o + h - u),
              "center" === n && "left" === a && this.drawCaret(t, e, i, s),
              e.lineTo(r, o + d),
              e.quadraticCurveTo(r, o, r + d, o),
              e.closePath(),
              e.fill(),
              s.borderWidth > 0 && e.stroke();
          }
          _updateAnimationTarget(t) {
            let e = this.chart,
              i = this.$animations,
              s = i && i.x,
              a = i && i.y;
            if (s || a) {
              let i = ai[t.position].call(
                this,
                this._active,
                this._eventPosition
              );
              if (!i) return;
              let n = (this._size = an(this, t)),
                r = Object.assign({}, i, this._size),
                o = ar(e, t, r),
                l = ao(t, r, o, e);
              (s._to !== l.x || a._to !== l.y) &&
                ((this.xAlign = o.xAlign),
                (this.yAlign = o.yAlign),
                (this.width = n.width),
                (this.height = n.height),
                (this.caretX = i.x),
                (this.caretY = i.y),
                this._resolveAnimations().update(this, l));
            }
          }
          _willRender() {
            return !!this.opacity;
          }
          draw(t) {
            let e = this.options.setContext(this.getContext()),
              i = this.opacity;
            if (!i) return;
            this._updateAnimationTarget(e);
            let s = { width: this.width, height: this.height },
              a = { x: this.x, y: this.y };
            i = 0.001 > Math.abs(i) ? 0 : i;
            let n = ec(e.padding),
              r =
                this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length;
            e.enabled &&
              r &&
              (t.save(),
              (t.globalAlpha = i),
              this.drawBackground(a, t, s, e),
              eY(t, e.textDirection),
              (a.y += n.top),
              this.drawTitle(a, t, e),
              this.drawBody(a, t, e),
              this.drawFooter(a, t, e),
              eX(t, e.textDirection),
              t.restore());
          }
          getActiveElements() {
            return this._active || [];
          }
          setActiveElements(t, e) {
            let i = this._active,
              s = t.map((t) => {
                let { datasetIndex: e, index: i } = t,
                  s = this.chart.getDatasetMeta(e);
                if (!s) throw Error("Cannot find a dataset at index " + e);
                return { datasetIndex: e, element: s.data[i], index: i };
              }),
              a = !$(i, s),
              n = this._positionChanged(s, e);
            (a || n) &&
              ((this._active = s),
              (this._eventPosition = e),
              (this._ignoreReplayEvents = !0),
              this.update(!0));
          }
          handleEvent(t, e) {
            let i =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
            if (e && this._ignoreReplayEvents) return !1;
            this._ignoreReplayEvents = !1;
            let s = this.options,
              a = this._active || [],
              n = this._getActiveElements(t, a, e, i),
              r = this._positionChanged(n, t),
              o = e || !$(n, a) || r;
            return (
              o &&
                ((this._active = n),
                (s.enabled || s.external) &&
                  ((this._eventPosition = { x: t.x, y: t.y }),
                  this.update(!0, e))),
              o
            );
          }
          _getActiveElements(t, e, i, s) {
            let a = this.options;
            if ("mouseout" === t.type) return [];
            if (!s)
              return e.filter(
                (t) =>
                  this.chart.data.datasets[t.datasetIndex] &&
                  void 0 !==
                    this.chart
                      .getDatasetMeta(t.datasetIndex)
                      .controller.getParsed(t.index)
              );
            let n = this.chart.getElementsAtEventForMode(t, a.mode, a, i);
            return a.reverse && n.reverse(), n;
          }
          _positionChanged(t, e) {
            let { caretX: i, caretY: s, options: a } = this,
              n = ai[a.position].call(this, t, e);
            return !1 !== n && (i !== n.x || s !== n.y);
          }
          constructor(t) {
            super(),
              (this.opacity = 0),
              (this._active = []),
              (this._eventPosition = void 0),
              (this._size = void 0),
              (this._cachedAnimations = void 0),
              (this._tooltipItems = []),
              (this.$animations = void 0),
              (this.$context = void 0),
              (this.chart = t.chart),
              (this.options = t.options),
              (this.dataPoints = void 0),
              (this.title = void 0),
              (this.beforeBody = void 0),
              (this.body = void 0),
              (this.afterBody = void 0),
              (this.footer = void 0),
              (this.xAlign = void 0),
              (this.yAlign = void 0),
              (this.x = void 0),
              (this.y = void 0),
              (this.height = void 0),
              (this.width = void 0),
              (this.caretX = void 0),
              (this.caretY = void 0),
              (this.labelColors = void 0),
              (this.labelPointStyles = void 0),
              (this.labelTextColors = void 0);
          }
        }
        (0, r._)(au, "positioners", ai);
        var af = {
          id: "tooltip",
          _element: au,
          positioners: ai,
          afterInit(t, e, i) {
            i && (t.tooltip = new au({ chart: t, options: i }));
          },
          beforeUpdate(t, e, i) {
            t.tooltip && t.tooltip.initialize(i);
          },
          reset(t, e, i) {
            t.tooltip && t.tooltip.initialize(i);
          },
          afterDraw(t) {
            let e = t.tooltip;
            if (e && e._willRender()) {
              let i = { tooltip: e };
              if (
                !1 ===
                t.notifyPlugins("beforeTooltipDraw", { ...i, cancelable: !0 })
              )
                return;
              e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i);
            }
          },
          afterEvent(t, e) {
            if (t.tooltip) {
              let i = e.replay;
              t.tooltip.handleEvent(e.event, i, e.inChartArea) &&
                (e.changed = !0);
            }
          },
          defaults: {
            enabled: !0,
            external: null,
            position: "average",
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            titleFont: { weight: "bold" },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: "left",
            bodyColor: "#fff",
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: "left",
            footerColor: "#fff",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: { weight: "bold" },
            footerAlign: "left",
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (t, e) => e.bodyFont.size,
            boxWidth: (t, e) => e.bodyFont.size,
            multiKeyBackground: "#fff",
            displayColors: !0,
            boxPadding: 0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            animation: { duration: 400, easing: "easeOutQuart" },
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "width", "height", "caretX", "caretY"],
              },
              opacity: { easing: "linear", duration: 200 },
            },
            callbacks: ad,
          },
          defaultRoutes: {
            bodyFont: "font",
            footerFont: "font",
            titleFont: "font",
          },
          descriptors: {
            _scriptable: (t) =>
              "filter" !== t && "itemSort" !== t && "external" !== t,
            _indexable: !1,
            callbacks: { _scriptable: !1, _indexable: !1 },
            animation: { _fallback: !1 },
            animations: { _fallback: "animation" },
          },
          additionalOptionScopes: ["interaction"],
        };
        function ag(t) {
          let e = this.getLabels();
          return t >= 0 && t < e.length ? e[t] : t;
        }
        class ap extends st {
          init(t) {
            let e = this._addedLabels;
            if (e.length) {
              let t = this.getLabels();
              for (let { index: i, label: s } of e)
                t[i] === s && t.splice(i, 1);
              this._addedLabels = [];
            }
            super.init(t);
          }
          parse(t, e) {
            let i, s;
            if (z(t)) return null;
            let a = this.getLabels();
            return (
              (i = e =
                isFinite(e) && a[e] === t
                  ? e
                  : (function (t, e, i, s) {
                      let a = t.indexOf(e);
                      if (-1 === a) {
                        var n;
                        return (
                          (n = i),
                          "string" == typeof e
                            ? ((n = t.push(e) - 1),
                              s.unshift({ index: n, label: e }))
                            : isNaN(e) && (n = null),
                          n
                        );
                      }
                      return a !== t.lastIndexOf(e) ? i : a;
                    })(a, t, H(e, t), this._addedLabels)),
              (s = a.length - 1),
              null === i ? null : tP(Math.round(i), 0, s)
            );
          }
          determineDataLimits() {
            let { minDefined: t, maxDefined: e } = this.getUserBounds(),
              { min: i, max: s } = this.getMinMax(!0);
            "ticks" === this.options.bounds &&
              (t || (i = 0), e || (s = this.getLabels().length - 1)),
              (this.min = i),
              (this.max = s);
          }
          buildTicks() {
            let t = this.min,
              e = this.max,
              i = this.options.offset,
              s = [],
              a = this.getLabels();
            (a = 0 === t && e === a.length - 1 ? a : a.slice(t, e + 1)),
              (this._valueRange = Math.max(a.length - !i, 1)),
              (this._startValue = this.min - 0.5 * !!i);
            for (let i = t; i <= e; i++) s.push({ value: i });
            return s;
          }
          getLabelForValue(t) {
            return ag.call(this, t);
          }
          configure() {
            super.configure(),
              this.isHorizontal() ||
                (this._reversePixels = !this._reversePixels);
          }
          getPixelForValue(t) {
            return (
              "number" != typeof t && (t = this.parse(t)),
              null === t
                ? NaN
                : this.getPixelForDecimal(
                    (t - this._startValue) / this._valueRange
                  )
            );
          }
          getPixelForTick(t) {
            let e = this.ticks;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t].value);
          }
          getValueForPixel(t) {
            return Math.round(
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
          }
          getBasePixel() {
            return this.bottom;
          }
          constructor(t) {
            super(t),
              (this._startValue = void 0),
              (this._valueRange = 0),
              (this._addedLabels = []);
          }
        }
        function am(t, e, i) {
          let { horizontal: s, minRotation: a } = i,
            n = tx(a),
            r = (s ? Math.sin(n) : Math.cos(n)) || 0.001,
            o = 0.75 * e * ("" + t).length;
          return Math.min(e / r, o);
        }
        (0, r._)(ap, "id", "category"),
          (0, r._)(ap, "defaults", { ticks: { callback: ag } });
        class ab extends st {
          parse(t, e) {
            return z(t) ||
              (("number" == typeof t || t instanceof Number) && !isFinite(+t))
              ? null
              : +t;
          }
          handleTickRangeOptions() {
            let { beginAtZero: t } = this.options,
              { minDefined: e, maxDefined: i } = this.getUserBounds(),
              { min: s, max: a } = this,
              n = (t) => (s = e ? s : t),
              r = (t) => (a = i ? a : t);
            if (t) {
              let t = tf(s),
                e = tf(a);
              t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && n(0);
            }
            if (s === a) {
              let e = 0 === a ? 1 : Math.abs(0.05 * a);
              r(a + e), t || n(s - e);
            }
            (this.min = s), (this.max = a);
          }
          getTickLimit() {
            let t,
              { maxTicksLimit: e, stepSize: i } = this.options.ticks;
            return (
              i
                ? (t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1) >
                    1e3 &&
                  (console.warn(
                    "scales."
                      .concat(this.id, ".ticks.stepSize: ")
                      .concat(i, " would result generating up to ")
                      .concat(t, " ticks. Limiting to 1000.")
                  ),
                  (t = 1e3))
                : ((t = this.computeTickLimit()), (e = e || 11)),
              e && (t = Math.min(e, t)),
              t
            );
          }
          computeTickLimit() {
            return 1 / 0;
          }
          buildTicks() {
            let t = this.options,
              e = t.ticks,
              i = this.getTickLimit(),
              s = (function (t, e) {
                let i,
                  s,
                  a,
                  n,
                  r = [],
                  {
                    bounds: o,
                    step: l,
                    min: h,
                    max: d,
                    precision: c,
                    count: u,
                    maxTicks: f,
                    maxDigits: g,
                    includeBounds: p,
                  } = t,
                  m = l || 1,
                  b = f - 1,
                  { min: x, max: _ } = e,
                  y = !z(h),
                  v = !z(d),
                  M = !z(u),
                  w = (_ - x) / (g + 1),
                  k = tp((_ - x) / b / m) * m;
                if (k < 1e-14 && !y && !v) return [{ value: x }, { value: _ }];
                (n = Math.ceil(_ / k) - Math.floor(x / k)) > b &&
                  (k = tp((n * k) / b / m) * m),
                  z(c) || (k = Math.ceil(k * (i = Math.pow(10, c))) / i),
                  "ticks" === o
                    ? ((s = Math.floor(x / k) * k), (a = Math.ceil(_ / k) * k))
                    : ((s = x), (a = _)),
                  y &&
                  v &&
                  l &&
                  (function (t, e) {
                    let i = Math.round(t);
                    return i - e <= t && i + e >= t;
                  })((d - h) / l, k / 1e3)
                    ? ((n = Math.round(Math.min((d - h) / k, f))),
                      (k = (d - h) / n),
                      (s = h),
                      (a = d))
                    : M
                    ? ((s = y ? h : s),
                      (k = ((a = v ? d : a) - s) / (n = u - 1)))
                    : (n = tg((n = (a - s) / k), Math.round(n), k / 1e3)
                        ? Math.round(n)
                        : Math.ceil(n));
                let P = Math.max(t_(k), t_(s));
                (s = Math.round(s * (i = Math.pow(10, z(c) ? P : c))) / i),
                  (a = Math.round(a * i) / i);
                let S = 0;
                for (
                  y &&
                  (p && s !== h
                    ? (r.push({ value: h }),
                      s < h && S++,
                      tg(Math.round((s + S * k) * i) / i, h, am(h, w, t)) &&
                        S++)
                    : s < h && S++);
                  S < n;
                  ++S
                ) {
                  let t = Math.round((s + S * k) * i) / i;
                  if (v && t > d) break;
                  r.push({ value: t });
                }
                return (
                  v && p && a !== d
                    ? r.length && tg(r[r.length - 1].value, d, am(d, w, t))
                      ? (r[r.length - 1].value = d)
                      : r.push({ value: d })
                    : (v && a !== d) || r.push({ value: a }),
                  r
                );
              })(
                {
                  maxTicks: (i = Math.max(2, i)),
                  bounds: t.bounds,
                  min: t.min,
                  max: t.max,
                  precision: e.precision,
                  step: e.stepSize,
                  count: e.count,
                  maxDigits: this._maxDigits(),
                  horizontal: this.isHorizontal(),
                  minRotation: e.minRotation || 0,
                  includeBounds: !1 !== e.includeBounds,
                },
                this._range || this
              );
            return (
              "ticks" === t.bounds && tb(s, this, "value"),
              t.reverse
                ? (s.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
              s
            );
          }
          configure() {
            let t = this.ticks,
              e = this.min,
              i = this.max;
            if ((super.configure(), this.options.offset && t.length)) {
              let s = (i - e) / Math.max(t.length - 1, 1) / 2;
              (e -= s), (i += s);
            }
            (this._startValue = e),
              (this._endValue = i),
              (this._valueRange = i - e);
          }
          getLabelForValue(t) {
            return tK(t, this.chart.options.locale, this.options.ticks.format);
          }
          constructor(t) {
            super(t),
              (this.start = void 0),
              (this.end = void 0),
              (this._startValue = void 0),
              (this._endValue = void 0),
              (this._valueRange = 0);
          }
        }
        class ax extends ab {
          determineDataLimits() {
            let { min: t, max: e } = this.getMinMax(!0);
            (this.min = B(t) ? t : 0),
              (this.max = B(e) ? e : 1),
              this.handleTickRangeOptions();
          }
          computeTickLimit() {
            let t = this.isHorizontal(),
              e = t ? this.width : this.height,
              i = tx(this.options.ticks.minRotation),
              s = (t ? Math.sin(i) : Math.cos(i)) || 0.001;
            return Math.ceil(
              e / Math.min(40, this._resolveTickFontOptions(0).lineHeight / s)
            );
          }
          getPixelForValue(t) {
            return null === t
              ? NaN
              : this.getPixelForDecimal(
                  (t - this._startValue) / this._valueRange
                );
          }
          getValueForPixel(t) {
            return (
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
          }
        }
        (0, r._)(ax, "id", "linear"),
          (0, r._)(ax, "defaults", {
            ticks: { callback: tG.formatters.numeric },
          });
        let a_ = (t) => Math.floor(tu(t)),
          ay = (t, e) => Math.pow(10, a_(t) + e);
        function av(t) {
          return 1 == t / Math.pow(10, a_(t));
        }
        function aM(t, e, i) {
          let s = Math.pow(10, i),
            a = Math.floor(t / s);
          return Math.ceil(e / s) - a;
        }
        class aw extends st {
          parse(t, e) {
            let i = ab.prototype.parse.apply(this, [t, e]);
            if (0 === i) {
              this._zero = !0;
              return;
            }
            return B(i) && i > 0 ? i : null;
          }
          determineDataLimits() {
            let { min: t, max: e } = this.getMinMax(!0);
            (this.min = B(t) ? Math.max(0, t) : null),
              (this.max = B(e) ? Math.max(0, e) : null),
              this.options.beginAtZero && (this._zero = !0),
              this._zero &&
                this.min !== this._suggestedMin &&
                !B(this._userMin) &&
                (this.min =
                  t === ay(this.min, 0) ? ay(this.min, -1) : ay(this.min, 0)),
              this.handleTickRangeOptions();
          }
          handleTickRangeOptions() {
            let { minDefined: t, maxDefined: e } = this.getUserBounds(),
              i = this.min,
              s = this.max,
              a = (e) => (i = t ? i : e),
              n = (t) => (s = e ? s : t);
            i === s && (i <= 0 ? (a(1), n(10)) : (a(ay(i, -1)), n(ay(s, 1)))),
              i <= 0 && a(ay(s, -1)),
              s <= 0 && n(ay(i, 1)),
              (this.min = i),
              (this.max = s);
          }
          buildTicks() {
            let t = this.options,
              e = (function (t, e) {
                let { min: i, max: s } = e;
                i = W(t.min, i);
                let a = [],
                  n = a_(i),
                  r = (function (t, e) {
                    let i = a_(e - t);
                    for (; aM(t, e, i) > 10; ) i++;
                    for (; 10 > aM(t, e, i); ) i--;
                    return Math.min(i, a_(t));
                  })(i, s),
                  o = r < 0 ? Math.pow(10, Math.abs(r)) : 1,
                  l = Math.pow(10, r),
                  h = n > r ? Math.pow(10, n) : 0,
                  d = Math.round((i - h) * o) / o,
                  c = Math.floor((i - h) / l / 10) * l * 10,
                  u = Math.floor((d - c) / Math.pow(10, r)),
                  f = W(
                    t.min,
                    Math.round((h + c + u * Math.pow(10, r)) * o) / o
                  );
                for (; f < s; )
                  a.push({ value: f, major: av(f), significand: u }),
                    u >= 10 ? (u = u < 15 ? 15 : 20) : u++,
                    u >= 20 && ((u = 2), (o = ++r >= 0 ? 1 : o)),
                    (f = Math.round((h + c + u * Math.pow(10, r)) * o) / o);
                let g = W(t.max, f);
                return a.push({ value: g, major: av(g), significand: u }), a;
              })({ min: this._userMin, max: this._userMax }, this);
            return (
              "ticks" === t.bounds && tb(e, this, "value"),
              t.reverse
                ? (e.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
              e
            );
          }
          getLabelForValue(t) {
            return void 0 === t
              ? "0"
              : tK(t, this.chart.options.locale, this.options.ticks.format);
          }
          configure() {
            let t = this.min;
            super.configure(),
              (this._startValue = tu(t)),
              (this._valueRange = tu(this.max) - tu(t));
          }
          getPixelForValue(t) {
            return ((void 0 === t || 0 === t) && (t = this.min),
            null === t || isNaN(t))
              ? NaN
              : this.getPixelForDecimal(
                  t === this.min
                    ? 0
                    : (tu(t) - this._startValue) / this._valueRange
                );
          }
          getValueForPixel(t) {
            let e = this.getDecimalForPixel(t);
            return Math.pow(10, this._startValue + e * this._valueRange);
          }
          constructor(t) {
            super(t),
              (this.start = void 0),
              (this.end = void 0),
              (this._startValue = void 0),
              (this._valueRange = 0);
          }
        }
        function ak(t) {
          let e = t.ticks;
          if (e.display && t.display) {
            let t = ec(e.backdropPadding);
            return H(e.font && e.font.size, t2.font.size) + t.height;
          }
          return 0;
        }
        function aP(t, e, i, s, a) {
          return t === s || t === a
            ? { start: e - i / 2, end: e + i / 2 }
            : t < s || t > a
            ? { start: e - i, end: e }
            : { start: e, end: e + i };
        }
        function aS(t, e, i, s) {
          let { ctx: a } = t;
          if (i) a.arc(t.xCenter, t.yCenter, e, 0, tn);
          else {
            let i = t.getPointPosition(0, e);
            a.moveTo(i.x, i.y);
            for (let n = 1; n < s; n++)
              (i = t.getPointPosition(n, e)), a.lineTo(i.x, i.y);
          }
        }
        (0, r._)(aw, "id", "logarithmic"),
          (0, r._)(aw, "defaults", {
            ticks: {
              callback: tG.formatters.logarithmic,
              major: { enabled: !0 },
            },
          });
        class aD extends ab {
          setDimensions() {
            let t = (this._padding = ec(ak(this.options) / 2)),
              e = (this.width = this.maxWidth - t.width),
              i = (this.height = this.maxHeight - t.height);
            (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
              (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
              (this.drawingArea = Math.floor(Math.min(e, i) / 2));
          }
          determineDataLimits() {
            let { min: t, max: e } = this.getMinMax(!1);
            (this.min = B(t) && !isNaN(t) ? t : 0),
              (this.max = B(e) && !isNaN(e) ? e : 0),
              this.handleTickRangeOptions();
          }
          computeTickLimit() {
            return Math.ceil(this.drawingArea / ak(this.options));
          }
          generateTickLabels(t) {
            ab.prototype.generateTickLabels.call(this, t),
              (this._pointLabels = this.getLabels()
                .map((t, e) => {
                  let i = N(this.options.pointLabels.callback, [t, e], this);
                  return i || 0 === i ? i : "";
                })
                .filter((t, e) => this.chart.getDataVisibility(e)));
          }
          fit() {
            let t = this.options;
            t.display && t.pointLabels.display
              ? (function (t) {
                  let e = {
                      l: t.left + t._padding.left,
                      r: t.right - t._padding.right,
                      t: t.top + t._padding.top,
                      b: t.bottom - t._padding.bottom,
                    },
                    i = Object.assign({}, e),
                    s = [],
                    a = [],
                    n = t._pointLabels.length,
                    r = t.options.pointLabels,
                    o = r.centerPointLabels ? ta / n : 0;
                  for (let d = 0; d < n; d++) {
                    var l, h;
                    let n = r.setContext(t.getPointLabelContext(d));
                    a[d] = n.padding;
                    let c = t.getPointPosition(d, t.drawingArea + a[d], o),
                      u = eu(n.font),
                      f =
                        ((l = t.ctx),
                        (h = V((h = t._pointLabels[d])) ? h : [h]),
                        {
                          w: (function (t, e, i, s) {
                            let a,
                              n,
                              r,
                              o,
                              l,
                              h = ((s = s || {}).data = s.data || {}),
                              d = (s.garbageCollect = s.garbageCollect || []);
                            s.font !== e &&
                              ((h = s.data = {}),
                              (d = s.garbageCollect = []),
                              (s.font = e)),
                              t.save(),
                              (t.font = e);
                            let c = 0,
                              u = i.length;
                            for (a = 0; a < u; a++)
                              if (null == (o = i[a]) || V(o)) {
                                if (V(o))
                                  for (n = 0, r = o.length; n < r; n++)
                                    null == (l = o[n]) ||
                                      V(l) ||
                                      (c = t5(t, h, d, c, l));
                              } else c = t5(t, h, d, c, o);
                            t.restore();
                            let f = d.length / 2;
                            if (f > i.length) {
                              for (a = 0; a < f; a++) delete h[d[a]];
                              d.splice(0, f);
                            }
                            return c;
                          })(l, u.string, h),
                          h: h.length * u.lineHeight,
                        });
                    s[d] = f;
                    let g = tw(t.getIndexAngle(d) + o),
                      p = Math.round((180 / ta) * g);
                    !(function (t, e, i, s, a) {
                      let n = Math.abs(Math.sin(i)),
                        r = Math.abs(Math.cos(i)),
                        o = 0,
                        l = 0;
                      s.start < e.l
                        ? ((o = (e.l - s.start) / n),
                          (t.l = Math.min(t.l, e.l - o)))
                        : s.end > e.r &&
                          ((o = (s.end - e.r) / n),
                          (t.r = Math.max(t.r, e.r + o))),
                        a.start < e.t
                          ? ((l = (e.t - a.start) / r),
                            (t.t = Math.min(t.t, e.t - l)))
                          : a.end > e.b &&
                            ((l = (a.end - e.b) / r),
                            (t.b = Math.max(t.b, e.b + l)));
                    })(
                      i,
                      e,
                      g,
                      aP(p, c.x, f.w, 0, 180),
                      aP(p, c.y, f.h, 90, 270)
                    );
                  }
                  t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b),
                    (t._pointLabelItems = (function (t, e, i) {
                      let s,
                        a = [],
                        n = t._pointLabels.length,
                        r = t.options,
                        { centerPointLabels: o, display: l } = r.pointLabels,
                        h = {
                          extra: ak(r) / 2,
                          additionalAngle: o ? ta / n : 0,
                        };
                      for (let r = 0; r < n; r++) {
                        (h.padding = i[r]), (h.size = e[r]);
                        let n = (function (t, e, i) {
                          var s, a, n, r, o, l, h;
                          let d = t.drawingArea,
                            {
                              extra: c,
                              additionalAngle: u,
                              padding: f,
                              size: g,
                            } = i,
                            p = t.getPointPosition(e, d + c + f, u),
                            m = Math.round((180 / ta) * tw(p.angle + th)),
                            b =
                              ((s = p.y),
                              (a = g.h),
                              90 === (n = m) || 270 === n
                                ? (s -= a / 2)
                                : (n > 270 || n < 90) && (s -= a),
                              s),
                            x =
                              0 === (r = m) || 180 === r
                                ? "center"
                                : r < 180
                                ? "left"
                                : "right",
                            _ =
                              ((o = p.x),
                              (l = g.w),
                              "right" === (h = x)
                                ? (o -= l)
                                : "center" === h && (o -= l / 2),
                              o);
                          return {
                            visible: !0,
                            x: p.x,
                            y: b,
                            textAlign: x,
                            left: _,
                            top: b,
                            right: _ + g.w,
                            bottom: b + g.h,
                          };
                        })(t, r, h);
                        a.push(n),
                          "auto" === l &&
                            ((n.visible = (function (t, e) {
                              if (!e) return !0;
                              let { left: i, top: s, right: a, bottom: n } = t;
                              return !(
                                t7({ x: i, y: s }, e) ||
                                t7({ x: i, y: n }, e) ||
                                t7({ x: a, y: s }, e) ||
                                t7({ x: a, y: n }, e)
                              );
                            })(n, s)),
                            n.visible && (s = n));
                      }
                      return a;
                    })(t, s, a));
                })(this)
              : this.setCenterPoint(0, 0, 0, 0);
          }
          setCenterPoint(t, e, i, s) {
            (this.xCenter += Math.floor((t - e) / 2)),
              (this.yCenter += Math.floor((i - s) / 2)),
              (this.drawingArea -= Math.min(
                this.drawingArea / 2,
                Math.max(t, e, i, s)
              ));
          }
          getIndexAngle(t) {
            return tw(
              t * (tn / (this._pointLabels.length || 1)) +
                tx(this.options.startAngle || 0)
            );
          }
          getDistanceFromCenterForValue(t) {
            if (z(t)) return NaN;
            let e = this.drawingArea / (this.max - this.min);
            return this.options.reverse
              ? (this.max - t) * e
              : (t - this.min) * e;
          }
          getValueForDistanceFromCenter(t) {
            if (z(t)) return NaN;
            let e = t / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - e : this.min + e;
          }
          getPointLabelContext(t) {
            let e = this._pointLabels || [];
            if (t >= 0 && t < e.length) {
              var i;
              let s = e[t];
              return (
                (i = this.getContext()),
                eg(i, { label: s, index: t, type: "pointLabel" })
              );
            }
          }
          getPointPosition(t, e) {
            let i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              s = this.getIndexAngle(t) - th + i;
            return {
              x: Math.cos(s) * e + this.xCenter,
              y: Math.sin(s) * e + this.yCenter,
              angle: s,
            };
          }
          getPointPositionForValue(t, e) {
            return this.getPointPosition(
              t,
              this.getDistanceFromCenterForValue(e)
            );
          }
          getBasePosition(t) {
            return this.getPointPositionForValue(t || 0, this.getBaseValue());
          }
          getPointLabelPosition(t) {
            let {
              left: e,
              top: i,
              right: s,
              bottom: a,
            } = this._pointLabelItems[t];
            return { left: e, top: i, right: s, bottom: a };
          }
          drawBackground() {
            let {
              backgroundColor: t,
              grid: { circular: e },
            } = this.options;
            if (t) {
              let i = this.ctx;
              i.save(),
                i.beginPath(),
                aS(
                  this,
                  this.getDistanceFromCenterForValue(this._endValue),
                  e,
                  this._pointLabels.length
                ),
                i.closePath(),
                (i.fillStyle = t),
                i.fill(),
                i.restore();
            }
          }
          drawGrid() {
            let t,
              e,
              i,
              s = this.ctx,
              a = this.options,
              { angleLines: n, grid: r, border: o } = a,
              l = this._pointLabels.length;
            if (
              (a.pointLabels.display &&
                (function (t, e) {
                  let {
                    ctx: i,
                    options: { pointLabels: s },
                  } = t;
                  for (let a = e - 1; a >= 0; a--) {
                    let e = t._pointLabelItems[a];
                    if (!e.visible) continue;
                    let n = s.setContext(t.getPointLabelContext(a));
                    !(function (t, e, i) {
                      let { left: s, top: a, right: n, bottom: r } = i,
                        { backdropColor: o } = e;
                      if (!z(o)) {
                        let i = ed(e.borderRadius),
                          l = ec(e.backdropPadding);
                        t.fillStyle = o;
                        let h = s - l.left,
                          d = a - l.top,
                          c = n - s + l.width,
                          u = r - a + l.height;
                        Object.values(i).some((t) => 0 !== t)
                          ? (t.beginPath(),
                            ea(t, { x: h, y: d, w: c, h: u, radius: i }),
                            t.fill())
                          : t.fillRect(h, d, c, u);
                      }
                    })(i, n, e);
                    let r = eu(n.font),
                      { x: o, y: l, textAlign: h } = e;
                    es(i, t._pointLabels[a], o, l + r.lineHeight / 2, r, {
                      color: n.color,
                      textAlign: h,
                      textBaseline: "middle",
                    });
                  }
                })(this, l),
              r.display &&
                this.ticks.forEach((t, i) => {
                  if (0 !== i || (0 === i && this.min < 0)) {
                    e = this.getDistanceFromCenterForValue(t.value);
                    let s = this.getContext(i),
                      a = r.setContext(s),
                      n = o.setContext(s);
                    !(function (t, e, i, s, a) {
                      let n = t.ctx,
                        r = e.circular,
                        { color: o, lineWidth: l } = e;
                      (r || s) &&
                        o &&
                        l &&
                        !(i < 0) &&
                        (n.save(),
                        (n.strokeStyle = o),
                        (n.lineWidth = l),
                        n.setLineDash(a.dash || []),
                        (n.lineDashOffset = a.dashOffset),
                        n.beginPath(),
                        aS(t, i, r, s),
                        n.closePath(),
                        n.stroke(),
                        n.restore());
                    })(this, a, e, l, n);
                  }
                }),
              n.display)
            ) {
              for (s.save(), t = l - 1; t >= 0; t--) {
                let r = n.setContext(this.getPointLabelContext(t)),
                  { color: o, lineWidth: l } = r;
                l &&
                  o &&
                  ((s.lineWidth = l),
                  (s.strokeStyle = o),
                  s.setLineDash(r.borderDash),
                  (s.lineDashOffset = r.borderDashOffset),
                  (e = this.getDistanceFromCenterForValue(
                    a.reverse ? this.min : this.max
                  )),
                  (i = this.getPointPosition(t, e)),
                  s.beginPath(),
                  s.moveTo(this.xCenter, this.yCenter),
                  s.lineTo(i.x, i.y),
                  s.stroke());
              }
              s.restore();
            }
          }
          drawBorder() {}
          drawLabels() {
            let t,
              e,
              i = this.ctx,
              s = this.options,
              a = s.ticks;
            if (!a.display) return;
            let n = this.getIndexAngle(0);
            i.save(),
              i.translate(this.xCenter, this.yCenter),
              i.rotate(n),
              (i.textAlign = "center"),
              (i.textBaseline = "middle"),
              this.ticks.forEach((n, r) => {
                if (0 === r && this.min >= 0 && !s.reverse) return;
                let o = a.setContext(this.getContext(r)),
                  l = eu(o.font);
                if (
                  ((t = this.getDistanceFromCenterForValue(
                    this.ticks[r].value
                  )),
                  o.showLabelBackdrop)
                ) {
                  (i.font = l.string),
                    (e = i.measureText(n.label).width),
                    (i.fillStyle = o.backdropColor);
                  let s = ec(o.backdropPadding);
                  i.fillRect(
                    -e / 2 - s.left,
                    -t - l.size / 2 - s.top,
                    e + s.width,
                    l.size + s.height
                  );
                }
                es(i, n.label, 0, -t, l, {
                  color: o.color,
                  strokeColor: o.textStrokeColor,
                  strokeWidth: o.textStrokeWidth,
                });
              }),
              i.restore();
          }
          drawTitle() {}
          constructor(t) {
            super(t),
              (this.xCenter = void 0),
              (this.yCenter = void 0),
              (this.drawingArea = void 0),
              (this._pointLabels = []),
              (this._pointLabelItems = []);
          }
        }
        (0, r._)(aD, "id", "radialLinear"),
          (0, r._)(aD, "defaults", {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
              display: !0,
              lineWidth: 1,
              borderDash: [],
              borderDashOffset: 0,
            },
            grid: { circular: !1 },
            startAngle: 0,
            ticks: { showLabelBackdrop: !0, callback: tG.formatters.numeric },
            pointLabels: {
              backdropColor: void 0,
              backdropPadding: 2,
              display: !0,
              font: { size: 10 },
              callback: (t) => t,
              padding: 5,
              centerPointLabels: !1,
            },
          }),
          (0, r._)(aD, "defaultRoutes", {
            "angleLines.color": "borderColor",
            "pointLabels.color": "color",
            "ticks.color": "color",
          }),
          (0, r._)(aD, "descriptors", { angleLines: { _fallback: "grid" } });
        let aC = {
            millisecond: { common: !0, size: 1, steps: 1e3 },
            second: { common: !0, size: 1e3, steps: 60 },
            minute: { common: !0, size: 6e4, steps: 60 },
            hour: { common: !0, size: 36e5, steps: 24 },
            day: { common: !0, size: 864e5, steps: 30 },
            week: { common: !1, size: 6048e5, steps: 4 },
            month: { common: !0, size: 2628e6, steps: 12 },
            quarter: { common: !1, size: 7884e6, steps: 4 },
            year: { common: !0, size: 3154e7 },
          },
          aO = Object.keys(aC);
        function aA(t, e) {
          return t - e;
        }
        function aL(t, e) {
          if (z(e)) return null;
          let i = t._adapter,
            { parser: s, round: a, isoWeekday: n } = t._parseOpts,
            r = e;
          return ("function" == typeof s && (r = s(r)),
          B(r) || (r = "string" == typeof s ? i.parse(r, s) : i.parse(r)),
          null === r)
            ? null
            : (a &&
                (r =
                  "week" === a && (tm(n) || !0 === n)
                    ? i.startOf(r, "isoWeek", n)
                    : i.startOf(r, a)),
              +r);
        }
        function aT(t, e, i, s) {
          let a = aO.length;
          for (let n = aO.indexOf(t); n < a - 1; ++n) {
            let t = aC[aO[n]],
              a = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
            if (t.common && Math.ceil((i - e) / (a * t.size)) <= s)
              return aO[n];
          }
          return aO[a - 1];
        }
        function aE(t, e, i) {
          if (i) {
            if (i.length) {
              let { lo: s, hi: a } = tD(i, e);
              t[i[s] >= e ? i[s] : i[a]] = !0;
            }
          } else t[e] = !0;
        }
        function aR(t, e, i) {
          let s,
            a,
            n = [],
            r = {},
            o = e.length;
          for (s = 0; s < o; ++s)
            (r[(a = e[s])] = s), n.push({ value: a, major: !1 });
          return 0 !== o && i
            ? (function (t, e, i, s) {
                let a,
                  n,
                  r = t._adapter,
                  o = +r.startOf(e[0].value, s),
                  l = e[e.length - 1].value;
                for (a = o; a <= l; a = +r.add(a, 1, s))
                  (n = i[a]) >= 0 && (e[n].major = !0);
                return e;
              })(t, n, r, i)
            : n;
        }
        class aF extends st {
          init(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = t.time || (t.time = {}),
              s = (this._adapter = new iP._date(t.adapters.date));
            s.init(e),
              J(i.displayFormats, s.formats()),
              (this._parseOpts = {
                parser: i.parser,
                round: i.round,
                isoWeekday: i.isoWeekday,
              }),
              super.init(t),
              (this._normalized = e.normalized);
          }
          parse(t, e) {
            return void 0 === t ? null : aL(this, t);
          }
          beforeLayout() {
            super.beforeLayout(),
              (this._cache = { data: [], labels: [], all: [] });
          }
          determineDataLimits() {
            let t = this.options,
              e = this._adapter,
              i = t.time.unit || "day",
              {
                min: s,
                max: a,
                minDefined: n,
                maxDefined: r,
              } = this.getUserBounds();
            function o(t) {
              n || isNaN(t.min) || (s = Math.min(s, t.min)),
                r || isNaN(t.max) || (a = Math.max(a, t.max));
            }
            (n && r) ||
              (o(this._getLabelBounds()),
              ("ticks" !== t.bounds || "labels" !== t.ticks.source) &&
                o(this.getMinMax(!1))),
              (s = B(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
              (a = B(a) && !isNaN(a) ? a : +e.endOf(Date.now(), i) + 1),
              (this.min = Math.min(s, a - 1)),
              (this.max = Math.max(s + 1, a));
          }
          _getLabelBounds() {
            let t = this.getLabelTimestamps(),
              e = 1 / 0,
              i = -1 / 0;
            return (
              t.length && ((e = t[0]), (i = t[t.length - 1])),
              { min: e, max: i }
            );
          }
          buildTicks() {
            let t = this.options,
              e = t.time,
              i = t.ticks,
              s =
                "labels" === i.source
                  ? this.getLabelTimestamps()
                  : this._generate();
            "ticks" === t.bounds &&
              s.length &&
              ((this.min = this._userMin || s[0]),
              (this.max = this._userMax || s[s.length - 1]));
            let a = this.min,
              n = (function (t, e, i) {
                let s = 0,
                  a = t.length;
                for (; s < a && t[s] < e; ) s++;
                for (; a > s && t[a - 1] > i; ) a--;
                return s > 0 || a < t.length ? t.slice(s, a) : t;
              })(s, a, this.max);
            return (
              (this._unit =
                e.unit ||
                (i.autoSkip
                  ? aT(e.minUnit, this.min, this.max, this._getLabelCapacity(a))
                  : (function (t, e, i, s, a) {
                      for (let n = aO.length - 1; n >= aO.indexOf(i); n--) {
                        let i = aO[n];
                        if (aC[i].common && t._adapter.diff(a, s, i) >= e - 1)
                          return i;
                      }
                      return aO[i ? aO.indexOf(i) : 0];
                    })(this, n.length, e.minUnit, this.min, this.max))),
              (this._majorUnit =
                i.major.enabled && "year" !== this._unit
                  ? (function (t) {
                      for (let e = aO.indexOf(t) + 1, i = aO.length; e < i; ++e)
                        if (aC[aO[e]].common) return aO[e];
                    })(this._unit)
                  : void 0),
              this.initOffsets(s),
              t.reverse && n.reverse(),
              aR(this, n, this._majorUnit)
            );
          }
          afterAutoSkip() {
            this.options.offsetAfterAutoskip &&
              this.initOffsets(this.ticks.map((t) => +t.value));
          }
          initOffsets() {
            let t,
              e,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              s = 0,
              a = 0;
            this.options.offset &&
              i.length &&
              ((t = this.getDecimalForValue(i[0])),
              (s =
                1 === i.length
                  ? 1 - t
                  : (this.getDecimalForValue(i[1]) - t) / 2),
              (e = this.getDecimalForValue(i[i.length - 1])),
              (a =
                1 === i.length
                  ? e
                  : (e - this.getDecimalForValue(i[i.length - 2])) / 2));
            let n = i.length < 3 ? 0.5 : 0.25;
            (s = tP(s, 0, n)),
              (a = tP(a, 0, n)),
              (this._offsets = { start: s, end: a, factor: 1 / (s + 1 + a) });
          }
          _generate() {
            let t,
              e,
              i = this._adapter,
              s = this.min,
              a = this.max,
              n = this.options,
              r = n.time,
              o = r.unit || aT(r.minUnit, s, a, this._getLabelCapacity(s)),
              l = H(n.ticks.stepSize, 1),
              h = "week" === o && r.isoWeekday,
              d = tm(h) || !0 === h,
              c = {},
              u = s;
            if (
              (d && (u = +i.startOf(u, "isoWeek", h)),
              (u = +i.startOf(u, d ? "day" : o)),
              i.diff(a, s, o) > 1e5 * l)
            )
              throw Error(
                s +
                  " and " +
                  a +
                  " are too far apart with stepSize of " +
                  l +
                  " " +
                  o
              );
            let f = "data" === n.ticks.source && this.getDataTimestamps();
            for (t = u, e = 0; t < a; t = +i.add(t, l, o), e++) aE(c, t, f);
            return (
              (t === a || "ticks" === n.bounds || 1 === e) && aE(c, t, f),
              Object.keys(c)
                .sort(aA)
                .map((t) => +t)
            );
          }
          getLabelForValue(t) {
            let e = this._adapter,
              i = this.options.time;
            return i.tooltipFormat
              ? e.format(t, i.tooltipFormat)
              : e.format(t, i.displayFormats.datetime);
          }
          format(t, e) {
            let i = this.options.time.displayFormats,
              s = this._unit,
              a = e || i[s];
            return this._adapter.format(t, a);
          }
          _tickFormatFunction(t, e, i, s) {
            let a = this.options,
              n = a.ticks.callback;
            if (n) return N(n, [t, e, i], this);
            let r = a.time.displayFormats,
              o = this._unit,
              l = this._majorUnit,
              h = o && r[o],
              d = l && r[l],
              c = i[e],
              u = l && d && c && c.major;
            return this._adapter.format(t, s || (u ? d : h));
          }
          generateTickLabels(t) {
            let e, i, s;
            for (e = 0, i = t.length; e < i; ++e)
              (s = t[e]).label = this._tickFormatFunction(s.value, e, t);
          }
          getDecimalForValue(t) {
            return null === t ? NaN : (t - this.min) / (this.max - this.min);
          }
          getPixelForValue(t) {
            let e = this._offsets,
              i = this.getDecimalForValue(t);
            return this.getPixelForDecimal((e.start + i) * e.factor);
          }
          getValueForPixel(t) {
            let e = this._offsets,
              i = this.getDecimalForPixel(t) / e.factor - e.end;
            return this.min + i * (this.max - this.min);
          }
          _getLabelSize(t) {
            let e = this.options.ticks,
              i = this.ctx.measureText(t).width,
              s = tx(this.isHorizontal() ? e.maxRotation : e.minRotation),
              a = Math.cos(s),
              n = Math.sin(s),
              r = this._resolveTickFontOptions(0).size;
            return { w: i * a + r * n, h: i * n + r * a };
          }
          _getLabelCapacity(t) {
            let e = this.options.time,
              i = e.displayFormats,
              s = i[e.unit] || i.millisecond,
              a = this._tickFormatFunction(
                t,
                0,
                aR(this, [t], this._majorUnit),
                s
              ),
              n = this._getLabelSize(a),
              r =
                Math.floor(
                  this.isHorizontal() ? this.width / n.w : this.height / n.h
                ) - 1;
            return r > 0 ? r : 1;
          }
          getDataTimestamps() {
            let t,
              e,
              i = this._cache.data || [];
            if (i.length) return i;
            let s = this.getMatchingVisibleMetas();
            if (this._normalized && s.length)
              return (this._cache.data =
                s[0].controller.getAllParsedValues(this));
            for (t = 0, e = s.length; t < e; ++t)
              i = i.concat(s[t].controller.getAllParsedValues(this));
            return (this._cache.data = this.normalize(i));
          }
          getLabelTimestamps() {
            let t,
              e,
              i = this._cache.labels || [];
            if (i.length) return i;
            let s = this.getLabels();
            for (t = 0, e = s.length; t < e; ++t) i.push(aL(this, s[t]));
            return (this._cache.labels = this._normalized
              ? i
              : this.normalize(i));
          }
          normalize(t) {
            return tT(t.sort(aA));
          }
          constructor(t) {
            super(t),
              (this._cache = { data: [], labels: [], all: [] }),
              (this._unit = "day"),
              (this._majorUnit = void 0),
              (this._offsets = {}),
              (this._normalized = !1),
              (this._parseOpts = void 0);
          }
        }
        function az(t, e, i) {
          let s,
            a,
            n,
            r,
            o = 0,
            l = t.length - 1;
          i
            ? (e >= t[o].pos &&
                e <= t[l].pos &&
                ({ lo: o, hi: l } = tC(t, "pos", e)),
              ({ pos: s, time: n } = t[o]),
              ({ pos: a, time: r } = t[l]))
            : (e >= t[o].time &&
                e <= t[l].time &&
                ({ lo: o, hi: l } = tC(t, "time", e)),
              ({ time: s, pos: n } = t[o]),
              ({ time: a, pos: r } = t[l]));
          let h = a - s;
          return h ? n + ((r - n) * (e - s)) / h : n;
        }
        (0, r._)(aF, "id", "time"),
          (0, r._)(aF, "defaults", {
            bounds: "data",
            adapters: {},
            time: {
              parser: !1,
              unit: !1,
              round: !1,
              isoWeekday: !1,
              minUnit: "millisecond",
              displayFormats: {},
            },
            ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
          });
        class aV extends aF {
          initOffsets() {
            let t = this._getTimestampsForTable(),
              e = (this._table = this.buildLookupTable(t));
            (this._minPos = az(e, this.min)),
              (this._tableRange = az(e, this.max) - this._minPos),
              super.initOffsets(t);
          }
          buildLookupTable(t) {
            let e,
              i,
              s,
              { min: a, max: n } = this,
              r = [],
              o = [];
            for (e = 0, i = t.length; e < i; ++e)
              (s = t[e]) >= a && s <= n && r.push(s);
            if (r.length < 2)
              return [
                { time: a, pos: 0 },
                { time: n, pos: 1 },
              ];
            for (e = 0, i = r.length; e < i; ++e)
              Math.round((r[e + 1] + r[e - 1]) / 2) !== (s = r[e]) &&
                o.push({ time: s, pos: e / (i - 1) });
            return o;
          }
          _generate() {
            let t = this.min,
              e = this.max,
              i = super.getDataTimestamps();
            return (
              (i.includes(t) && i.length) || i.splice(0, 0, t),
              (i.includes(e) && 1 !== i.length) || i.push(e),
              i.sort((t, e) => t - e)
            );
          }
          _getTimestampsForTable() {
            let t = this._cache.all || [];
            if (t.length) return t;
            let e = this.getDataTimestamps(),
              i = this.getLabelTimestamps();
            return (
              (t =
                e.length && i.length
                  ? this.normalize(e.concat(i))
                  : e.length
                  ? e
                  : i),
              (t = this._cache.all = t)
            );
          }
          getDecimalForValue(t) {
            return (az(this._table, t) - this._minPos) / this._tableRange;
          }
          getValueForPixel(t) {
            let e = this._offsets,
              i = this.getDecimalForPixel(t) / e.factor - e.end;
            return az(this._table, i * this._tableRange + this._minPos, !0);
          }
          constructor(t) {
            super(t),
              (this._table = []),
              (this._minPos = void 0),
              (this._tableRange = void 0);
          }
        }
        (0, r._)(aV, "id", "timeseries"),
          (0, r._)(aV, "defaults", aF.defaults),
          t.s({ Line: () => aj }, 180009);
        let aI = "label";
        function aB(t, e) {
          "function" == typeof t ? t(e) : t && (t.current = e);
        }
        function aW(t, e) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : aI,
            s = [];
          t.datasets = e.map((e) => {
            let a = t.datasets.find((t) => t[i] === e[i]);
            return !a || !e.data || s.includes(a)
              ? { ...e }
              : (s.push(a), Object.assign(a, e), a);
          });
        }
        let aH = (0, i.forwardRef)(function (t, e) {
            let {
                height: s = 150,
                width: a = 300,
                redraw: n = !1,
                datasetIdKey: r,
                type: o,
                data: l,
                options: h,
                plugins: d = [],
                fallbackContent: c,
                updateMode: u,
                ...f
              } = t,
              g = (0, i.useRef)(null),
              p = (0, i.useRef)(null),
              m = () => {
                g.current &&
                  ((p.current = new sP(g.current, {
                    type: o,
                    data: (function (t) {
                      let e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : aI,
                        i = { labels: [], datasets: [] };
                      return (i.labels = t.labels), aW(i, t.datasets, e), i;
                    })(l, r),
                    options: h && { ...h },
                    plugins: d,
                  })),
                  aB(e, p.current));
              },
              b = () => {
                aB(e, null),
                  p.current && (p.current.destroy(), (p.current = null));
              };
            return (
              (0, i.useEffect)(() => {
                !n &&
                  p.current &&
                  h &&
                  (function (t, e) {
                    let i = t.options;
                    i && e && Object.assign(i, e);
                  })(p.current, h);
              }, [n, h]),
              (0, i.useEffect)(() => {
                !n && p.current && (p.current.config.data.labels = l.labels);
              }, [n, l.labels]),
              (0, i.useEffect)(() => {
                !n &&
                  p.current &&
                  l.datasets &&
                  aW(p.current.config.data, l.datasets, r);
              }, [n, l.datasets]),
              (0, i.useEffect)(() => {
                p.current && (n ? (b(), setTimeout(m)) : p.current.update(u));
              }, [n, h, l.labels, l.datasets, u]),
              (0, i.useEffect)(() => {
                p.current && (b(), setTimeout(m));
              }, [o]),
              (0, i.useEffect)(() => (m(), () => b()), []),
              i.default.createElement(
                "canvas",
                { ref: g, role: "img", height: s, width: a, ...f },
                c
              )
            );
          }),
          aj =
            (sP.register(ix),
            (0, i.forwardRef)((t, e) =>
              i.default.createElement(aH, { ...t, ref: e, type: "line" })
            ));
      },
      [763674, 180009],
    ],
  },
]);

//# sourceMappingURL=228e0ac289da0391.js.map
