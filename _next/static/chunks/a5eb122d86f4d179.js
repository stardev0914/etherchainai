(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    288041: (e) => {
      "use strict";
      e.s({ BigNumber: () => p, default: () => w });
      var r = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
        t = Math.ceil,
        n = Math.floor,
        i = "[BigNumber Error] ",
        s = i + "Number primitive has more than 15 significant digits: ",
        o = [
          1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13,
        ];
      function f(e) {
        var r = 0 | e;
        return e > 0 || e === r ? r : r - 1;
      }
      function u(e) {
        for (var r, t, n = 1, i = e.length, s = e[0] + ""; n < i; ) {
          for (t = 14 - (r = e[n++] + "").length; t--; r = "0" + r);
          s += r;
        }
        for (i = s.length; 48 === s.charCodeAt(--i); );
        return s.slice(0, i + 1 || 1);
      }
      function l(e, r) {
        var t,
          n,
          i = e.c,
          s = r.c,
          o = e.s,
          f = r.s,
          u = e.e,
          l = r.e;
        if (!o || !f) return null;
        if (((t = i && !i[0]), (n = s && !s[0]), t || n))
          return t ? (n ? 0 : -f) : o;
        if (o != f) return o;
        if (((t = o < 0), (n = u == l), !i || !s))
          return n ? 0 : !i ^ t ? 1 : -1;
        if (!n) return (u > l) ^ t ? 1 : -1;
        for (o = 0, f = (u = i.length) < (l = s.length) ? u : l; o < f; o++)
          if (i[o] != s[o]) return (i[o] > s[o]) ^ t ? 1 : -1;
        return u == l ? 0 : (u > l) ^ t ? 1 : -1;
      }
      function c(e, r, t, s) {
        if (e < r || e > t || e !== n(e))
          throw Error(
            i +
              (s || "Argument") +
              ("number" == typeof e
                ? e < r || e > t
                  ? " out of range: "
                  : " not an integer: "
                : " not a primitive number: ") +
              String(e)
          );
      }
      function a(e) {
        var r = e.c.length - 1;
        return f(e.e / 14) == r && e.c[r] % 2 != 0;
      }
      function h(e, r) {
        return (
          (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
          (r < 0 ? "e" : "e+") +
          r
        );
      }
      function g(e, r, t) {
        var n, i;
        if (r < 0) {
          for (i = t + "."; ++r; i += t);
          e = i + e;
        } else if (((n = e.length), ++r > n)) {
          for (i = t, r -= n; --r; i += t);
          e += i;
        } else r < n && (e = e.slice(0, r) + "." + e.slice(r));
        return e;
      }
      var p = (function e(p) {
        var w,
          m,
          d,
          v,
          N,
          O,
          b,
          y,
          E,
          A = (G.prototype = { constructor: G, toString: null, valueOf: null }),
          x = new G(1),
          S = 20,
          R = 4,
          B = -7,
          P = 21,
          T = -1e7,
          _ = 1e7,
          D = !1,
          U = 1,
          L = 0,
          C = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: " ",
            suffix: "",
          },
          I = "0123456789abcdefghijklmnopqrstuvwxyz",
          M = !0;
        function G(e, t) {
          var i,
            o,
            f,
            u,
            l,
            a,
            h,
            g,
            p = this;
          if (!(p instanceof G)) return new G(e, t);
          if (null == t) {
            if (e && !0 === e._isBigNumber) {
              (p.s = e.s),
                !e.c || e.e > _
                  ? (p.c = p.e = null)
                  : e.e < T
                  ? (p.c = [(p.e = 0)])
                  : ((p.e = e.e), (p.c = e.c.slice()));
              return;
            }
            if ((a = "number" == typeof e) && 0 * e == 0) {
              if (((p.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                for (u = 0, l = e; l >= 10; l /= 10, u++);
                u > _ ? (p.c = p.e = null) : ((p.e = u), (p.c = [e]));
                return;
              }
              g = String(e);
            } else {
              if (!r.test((g = String(e)))) return E(p, g, a);
              p.s = 45 == g.charCodeAt(0) ? ((g = g.slice(1)), -1) : 1;
            }
            (u = g.indexOf(".")) > -1 && (g = g.replace(".", "")),
              (l = g.search(/e/i)) > 0
                ? (u < 0 && (u = l),
                  (u += +g.slice(l + 1)),
                  (g = g.substring(0, l)))
                : u < 0 && (u = g.length);
          } else {
            if ((c(t, 2, I.length, "Base"), 10 == t && M))
              return q((p = new G(e)), S + p.e + 1, R);
            if (((g = String(e)), (a = "number" == typeof e))) {
              if (0 * e != 0) return E(p, g, a, t);
              if (
                ((p.s = 1 / e < 0 ? ((g = g.slice(1)), -1) : 1),
                G.DEBUG && g.replace(/^0\.0*|\./, "").length > 15)
              )
                throw Error(s + e);
            } else p.s = 45 === g.charCodeAt(0) ? ((g = g.slice(1)), -1) : 1;
            for (i = I.slice(0, t), u = l = 0, h = g.length; l < h; l++)
              if (0 > i.indexOf((o = g.charAt(l)))) {
                if ("." == o) {
                  if (l > u) {
                    u = h;
                    continue;
                  }
                } else if (
                  !f &&
                  ((g == g.toUpperCase() && (g = g.toLowerCase())) ||
                    (g == g.toLowerCase() && (g = g.toUpperCase())))
                ) {
                  (f = !0), (l = -1), (u = 0);
                  continue;
                }
                return E(p, String(e), a, t);
              }
            (a = !1),
              (u = (g = y(g, t, 10, p.s)).indexOf(".")) > -1
                ? (g = g.replace(".", ""))
                : (u = g.length);
          }
          for (l = 0; 48 === g.charCodeAt(l); l++);
          for (h = g.length; 48 === g.charCodeAt(--h); );
          if ((g = g.slice(l, ++h))) {
            if (
              ((h -= l),
              a && G.DEBUG && h > 15 && (e > 0x1fffffffffffff || e !== n(e)))
            )
              throw Error(s + p.s * e);
            if ((u = u - l - 1) > _) p.c = p.e = null;
            else if (u < T) p.c = [(p.e = 0)];
            else {
              if (
                ((p.e = u),
                (p.c = []),
                (l = (u + 1) % 14),
                u < 0 && (l += 14),
                l < h)
              ) {
                for (l && p.c.push(+g.slice(0, l)), h -= 14; l < h; )
                  p.c.push(+g.slice(l, (l += 14)));
                l = 14 - (g = g.slice(l)).length;
              } else l -= h;
              for (; l--; g += "0");
              p.c.push(+g);
            }
          } else p.c = [(p.e = 0)];
        }
        function F(e, r, t, n) {
          var i, s, o, f, l;
          if ((null == t ? (t = R) : c(t, 0, 8), !e.c)) return e.toString();
          if (((i = e.c[0]), (o = e.e), null == r))
            (l = u(e.c)),
              (l =
                1 == n || (2 == n && (o <= B || o >= P))
                  ? h(l, o)
                  : g(l, o, "0"));
          else if (
            ((s = (e = q(new G(e), r, t)).e),
            (f = (l = u(e.c)).length),
            1 == n || (2 == n && (r <= s || s <= B)))
          ) {
            for (; f < r; l += "0", f++);
            l = h(l, s);
          } else if (
            ((r -= o + (2 === n && s > o)), (l = g(l, s, "0")), s + 1 > f)
          ) {
            if (--r > 0) for (l += "."; r--; l += "0");
          } else if ((r += s - f) > 0)
            for (s + 1 == f && (l += "."); r--; l += "0");
          return e.s < 0 && i ? "-" + l : l;
        }
        function k(e, r) {
          for (var t, n, i = 1, s = new G(e[0]); i < e.length; i++)
            ((n = new G(e[i])).s &&
              (t = l(s, n)) !== r &&
              (0 !== t || s.s !== r)) ||
              (s = n);
          return s;
        }
        function j(e, r, t) {
          for (var n = 1, i = r.length; !r[--i]; r.pop());
          for (i = r[0]; i >= 10; i /= 10, n++);
          return (
            (t = n + 14 * t - 1) > _
              ? (e.c = e.e = null)
              : t < T
              ? (e.c = [(e.e = 0)])
              : ((e.e = t), (e.c = r)),
            e
          );
        }
        function q(e, r, i, s) {
          var f,
            u,
            l,
            c,
            a,
            h,
            g,
            p = e.c;
          if (p) {
            e: {
              for (f = 1, c = p[0]; c >= 10; c /= 10, f++);
              if ((u = r - f) < 0)
                (u += 14),
                  (l = r),
                  (g = n(((a = p[(h = 0)]) / o[f - l - 1]) % 10));
              else if ((h = t((u + 1) / 14)) >= p.length)
                if (s) {
                  for (; p.length <= h; p.push(0));
                  (a = g = 0), (f = 1), (u %= 14), (l = u - 14 + 1);
                } else break e;
              else {
                for (f = 1, a = c = p[h]; c >= 10; c /= 10, f++);
                (u %= 14),
                  (g = (l = u - 14 + f) < 0 ? 0 : n((a / o[f - l - 1]) % 10));
              }
              if (
                ((s =
                  s ||
                  r < 0 ||
                  null != p[h + 1] ||
                  (l < 0 ? a : a % o[f - l - 1])),
                (s =
                  i < 4
                    ? (g || s) && (0 == i || i == (e.s < 0 ? 3 : 2))
                    : g > 5 ||
                      (5 == g &&
                        (4 == i ||
                          s ||
                          (6 == i &&
                            (u > 0 ? (l > 0 ? a / o[f - l] : 0) : p[h - 1]) %
                              10 &
                              1) ||
                          i == (e.s < 0 ? 8 : 7)))),
                r < 1 || !p[0])
              )
                return (
                  (p.length = 0),
                  s
                    ? ((r -= e.e + 1),
                      (p[0] = o[(14 - (r % 14)) % 14]),
                      (e.e = -r || 0))
                    : (p[0] = e.e = 0),
                  e
                );
              if (
                (0 == u
                  ? ((p.length = h), (c = 1), h--)
                  : ((p.length = h + 1),
                    (c = o[14 - u]),
                    (p[h] = l > 0 ? n((a / o[f - l]) % o[l]) * c : 0)),
                s)
              )
                for (;;)
                  if (0 == h) {
                    for (u = 1, l = p[0]; l >= 10; l /= 10, u++);
                    for (l = p[0] += c, c = 1; l >= 10; l /= 10, c++);
                    u != c && (e.e++, 1e14 == p[0] && (p[0] = 1));
                    break;
                  } else {
                    if (((p[h] += c), 1e14 != p[h])) break;
                    (p[h--] = 0), (c = 1);
                  }
              for (u = p.length; 0 === p[--u]; p.pop());
            }
            e.e > _ ? (e.c = e.e = null) : e.e < T && (e.c = [(e.e = 0)]);
          }
          return e;
        }
        function $(e) {
          var r,
            t = e.e;
          return null === t
            ? e.toString()
            : ((r = u(e.c)),
              (r = t <= B || t >= P ? h(r, t) : g(r, t, "0")),
              e.s < 0 ? "-" + r : r);
        }
        return (
          (G.clone = e),
          (G.ROUND_UP = 0),
          (G.ROUND_DOWN = 1),
          (G.ROUND_CEIL = 2),
          (G.ROUND_FLOOR = 3),
          (G.ROUND_HALF_UP = 4),
          (G.ROUND_HALF_DOWN = 5),
          (G.ROUND_HALF_EVEN = 6),
          (G.ROUND_HALF_CEIL = 7),
          (G.ROUND_HALF_FLOOR = 8),
          (G.EUCLID = 9),
          (G.config = G.set =
            function (e) {
              var r, t;
              if (null != e)
                if ("object" == typeof e) {
                  if (
                    (e.hasOwnProperty((r = "DECIMAL_PLACES")) &&
                      (c((t = e[r]), 0, 1e9, r), (S = t)),
                    e.hasOwnProperty((r = "ROUNDING_MODE")) &&
                      (c((t = e[r]), 0, 8, r), (R = t)),
                    e.hasOwnProperty((r = "EXPONENTIAL_AT")) &&
                      ((t = e[r]) && t.pop
                        ? (c(t[0], -1e9, 0, r),
                          c(t[1], 0, 1e9, r),
                          (B = t[0]),
                          (P = t[1]))
                        : (c(t, -1e9, 1e9, r), (B = -(P = t < 0 ? -t : t)))),
                    e.hasOwnProperty((r = "RANGE")))
                  )
                    if ((t = e[r]) && t.pop)
                      c(t[0], -1e9, -1, r),
                        c(t[1], 1, 1e9, r),
                        (T = t[0]),
                        (_ = t[1]);
                    else if ((c(t, -1e9, 1e9, r), t)) T = -(_ = t < 0 ? -t : t);
                    else throw Error(i + r + " cannot be zero: " + t);
                  if (e.hasOwnProperty((r = "CRYPTO")))
                    if (!!(t = e[r]) === t)
                      if (t)
                        if (
                          "undefined" != typeof crypto &&
                          crypto &&
                          (crypto.getRandomValues || crypto.randomBytes)
                        )
                          D = t;
                        else throw ((D = !t), Error(i + "crypto unavailable"));
                      else D = t;
                    else throw Error(i + r + " not true or false: " + t);
                  if (
                    (e.hasOwnProperty((r = "MODULO_MODE")) &&
                      (c((t = e[r]), 0, 9, r), (U = t)),
                    e.hasOwnProperty((r = "POW_PRECISION")) &&
                      (c((t = e[r]), 0, 1e9, r), (L = t)),
                    e.hasOwnProperty((r = "FORMAT")))
                  )
                    if ("object" == typeof (t = e[r])) C = t;
                    else throw Error(i + r + " not an object: " + t);
                  if (e.hasOwnProperty((r = "ALPHABET"))) {
                    if (
                      "string" != typeof (t = e[r]) ||
                      /^.?$|[+\-.\s]|(.).*\1/.test(t)
                    )
                      throw Error(i + r + " invalid: " + t);
                    (M = "0123456789" == t.slice(0, 10)), (I = t);
                  }
                } else throw Error(i + "Object expected: " + e);
              return {
                DECIMAL_PLACES: S,
                ROUNDING_MODE: R,
                EXPONENTIAL_AT: [B, P],
                RANGE: [T, _],
                CRYPTO: D,
                MODULO_MODE: U,
                POW_PRECISION: L,
                FORMAT: C,
                ALPHABET: I,
              };
            }),
          (G.isBigNumber = function (e) {
            if (!e || !0 !== e._isBigNumber) return !1;
            if (!G.DEBUG) return !0;
            var r,
              t,
              s = e.c,
              o = e.e,
              f = e.s;
            e: if ("[object Array]" == {}.toString.call(s)) {
              if (
                (1 === f || -1 === f) &&
                o >= -1e9 &&
                o <= 1e9 &&
                o === n(o)
              ) {
                if (0 === s[0]) {
                  if (0 === o && 1 === s.length) return !0;
                  break e;
                }
                if (
                  ((r = (o + 1) % 14) < 1 && (r += 14),
                  String(s[0]).length == r)
                ) {
                  for (r = 0; r < s.length; r++)
                    if ((t = s[r]) < 0 || t >= 1e14 || t !== n(t)) break e;
                  if (0 !== t) return !0;
                }
              }
            } else if (
              null === s &&
              null === o &&
              (null === f || 1 === f || -1 === f)
            )
              return !0;
            throw Error(i + "Invalid BigNumber: " + e);
          }),
          (G.maximum = G.max =
            function () {
              return k(arguments, -1);
            }),
          (G.minimum = G.min =
            function () {
              return k(arguments, 1);
            }),
          (w =
            (0x20000000000000 * Math.random()) & 2097151
              ? function () {
                  return n(0x20000000000000 * Math.random());
                }
              : function () {
                  return (
                    ((0x40000000 * Math.random()) | 0) * 8388608 +
                    ((8388608 * Math.random()) | 0)
                  );
                }),
          (G.random = function (e) {
            var r,
              s,
              f,
              u,
              l,
              a = 0,
              h = [],
              g = new G(x);
            if ((null == e ? (e = S) : c(e, 0, 1e9), (u = t(e / 14)), D))
              if (crypto.getRandomValues) {
                for (
                  r = crypto.getRandomValues(new Uint32Array((u *= 2)));
                  a < u;

                )
                  (l = 131072 * r[a] + (r[a + 1] >>> 11)) >= 9e15
                    ? ((s = crypto.getRandomValues(new Uint32Array(2))),
                      (r[a] = s[0]),
                      (r[a + 1] = s[1]))
                    : (h.push(l % 1e14), (a += 2));
                a = u / 2;
              } else if (crypto.randomBytes) {
                for (r = crypto.randomBytes((u *= 7)); a < u; )
                  (l =
                    (31 & r[a]) * 0x1000000000000 +
                    0x10000000000 * r[a + 1] +
                    0x100000000 * r[a + 2] +
                    0x1000000 * r[a + 3] +
                    (r[a + 4] << 16) +
                    (r[a + 5] << 8) +
                    r[a + 6]) >= 9e15
                    ? crypto.randomBytes(7).copy(r, a)
                    : (h.push(l % 1e14), (a += 7));
                a = u / 7;
              } else throw ((D = !1), Error(i + "crypto unavailable"));
            if (!D) for (; a < u; ) (l = w()) < 9e15 && (h[a++] = l % 1e14);
            for (
              u = h[--a],
                e %= 14,
                u && e && ((l = o[14 - e]), (h[a] = n(u / l) * l));
              0 === h[a];
              h.pop(), a--
            );
            if (a < 0) h = [(f = 0)];
            else {
              for (f = -1; 0 === h[0]; h.splice(0, 1), f -= 14);
              for (a = 1, l = h[0]; l >= 10; l /= 10, a++);
              a < 14 && (f -= 14 - a);
            }
            return (g.e = f), (g.c = h), g;
          }),
          (G.sum = function () {
            for (var e = 1, r = arguments, t = new G(r[0]); e < r.length; )
              t = t.plus(r[e++]);
            return t;
          }),
          (y = (function () {
            var e = "0123456789";
            function r(e, r, t, n) {
              for (var i, s, o = [0], f = 0, u = e.length; f < u; ) {
                for (s = o.length; s--; o[s] *= r);
                for (o[0] += n.indexOf(e.charAt(f++)), i = 0; i < o.length; i++)
                  o[i] > t - 1 &&
                    (null == o[i + 1] && (o[i + 1] = 0),
                    (o[i + 1] += (o[i] / t) | 0),
                    (o[i] %= t));
              }
              return o.reverse();
            }
            return function (t, n, i, s, o) {
              var f,
                l,
                c,
                a,
                h,
                p,
                w,
                m,
                d = t.indexOf("."),
                v = S,
                N = R;
              for (
                d >= 0 &&
                  ((a = L),
                  (L = 0),
                  (t = t.replace(".", "")),
                  (p = (m = new G(n)).pow(t.length - d)),
                  (L = a),
                  (m.c = r(g(u(p.c), p.e, "0"), 10, i, e)),
                  (m.e = m.c.length)),
                  c = a =
                    (w = r(t, n, i, o ? ((f = I), e) : ((f = e), I))).length;
                0 == w[--a];
                w.pop()
              );
              if (!w[0]) return f.charAt(0);
              if (
                (d < 0
                  ? --c
                  : ((p.c = w),
                    (p.e = c),
                    (p.s = s),
                    (w = (p = b(p, m, v, N, i)).c),
                    (h = p.r),
                    (c = p.e)),
                (d = w[(l = c + v + 1)]),
                (a = i / 2),
                (h = h || l < 0 || null != w[l + 1]),
                (h =
                  N < 4
                    ? (null != d || h) && (0 == N || N == (p.s < 0 ? 3 : 2))
                    : d > a ||
                      (d == a &&
                        (4 == N ||
                          h ||
                          (6 == N && 1 & w[l - 1]) ||
                          N == (p.s < 0 ? 8 : 7)))),
                l < 1 || !w[0])
              )
                t = h ? g(f.charAt(1), -v, f.charAt(0)) : f.charAt(0);
              else {
                if (((w.length = l), h))
                  for (--i; ++w[--l] > i; )
                    (w[l] = 0), l || (++c, (w = [1].concat(w)));
                for (a = w.length; !w[--a]; );
                for (d = 0, t = ""; d <= a; t += f.charAt(w[d++]));
                t = g(t, c, f.charAt(0));
              }
              return t;
            };
          })()),
          (b = (function () {
            function e(e, r, t) {
              var n,
                i,
                s,
                o,
                f = 0,
                u = e.length,
                l = r % 1e7,
                c = (r / 1e7) | 0;
              for (e = e.slice(); u--; )
                (n = c * (s = e[u] % 1e7) + (o = (e[u] / 1e7) | 0) * l),
                  (f =
                    (((i = l * s + (n % 1e7) * 1e7 + f) / t) | 0) +
                    ((n / 1e7) | 0) +
                    c * o),
                  (e[u] = i % t);
              return f && (e = [f].concat(e)), e;
            }
            function r(e, r, t, n) {
              var i, s;
              if (t != n) s = t > n ? 1 : -1;
              else
                for (i = s = 0; i < t; i++)
                  if (e[i] != r[i]) {
                    s = e[i] > r[i] ? 1 : -1;
                    break;
                  }
              return s;
            }
            function t(e, r, t, n) {
              for (var i = 0; t--; )
                (e[t] -= i), (i = +(e[t] < r[t])), (e[t] = i * n + e[t] - r[t]);
              for (; !e[0] && e.length > 1; e.splice(0, 1));
            }
            return function (i, s, o, u, l) {
              var c,
                a,
                h,
                g,
                p,
                w,
                m,
                d,
                v,
                N,
                O,
                b,
                y,
                E,
                A,
                x,
                S,
                R = i.s == s.s ? 1 : -1,
                B = i.c,
                P = s.c;
              if (!B || !B[0] || !P || !P[0])
                return new G(
                  !i.s || !s.s || (B ? P && B[0] == P[0] : !P)
                    ? NaN
                    : (B && 0 == B[0]) || !P
                    ? 0 * R
                    : R / 0
                );
              for (
                v = (d = new G(R)).c = [],
                  R = o + (a = i.e - s.e) + 1,
                  l ||
                    ((l = 1e14),
                    (a = f(i.e / 14) - f(s.e / 14)),
                    (R = (R / 14) | 0)),
                  h = 0;
                P[h] == (B[h] || 0);
                h++
              );
              if ((P[h] > (B[h] || 0) && a--, R < 0)) v.push(1), (g = !0);
              else {
                for (
                  E = B.length,
                    x = P.length,
                    h = 0,
                    R += 2,
                    (p = n(l / (P[0] + 1))) > 1 &&
                      ((P = e(P, p, l)),
                      (B = e(B, p, l)),
                      (x = P.length),
                      (E = B.length)),
                    y = x,
                    O = (N = B.slice(0, x)).length;
                  O < x;
                  N[O++] = 0
                );
                (S = [0].concat((S = P.slice()))),
                  (A = P[0]),
                  P[1] >= l / 2 && A++;
                do {
                  if (((p = 0), (c = r(P, N, x, O)) < 0)) {
                    if (
                      ((b = N[0]),
                      x != O && (b = b * l + (N[1] || 0)),
                      (p = n(b / A)) > 1)
                    )
                      for (
                        p >= l && (p = l - 1),
                          m = (w = e(P, p, l)).length,
                          O = N.length;
                        1 == r(w, N, m, O);

                      )
                        p--, t(w, x < m ? S : P, m, l), (m = w.length), (c = 1);
                    else 0 == p && (c = p = 1), (m = (w = P.slice()).length);
                    if (
                      (m < O && (w = [0].concat(w)),
                      t(N, w, O, l),
                      (O = N.length),
                      -1 == c)
                    )
                      for (; 1 > r(P, N, x, O); )
                        p++, t(N, x < O ? S : P, O, l), (O = N.length);
                  } else 0 === c && (p++, (N = [0]));
                  (v[h++] = p),
                    N[0] ? (N[O++] = B[y] || 0) : ((N = [B[y]]), (O = 1));
                } while ((y++ < E || null != N[0]) && R--);
                (g = null != N[0]), v[0] || v.splice(0, 1);
              }
              if (1e14 == l) {
                for (h = 1, R = v[0]; R >= 10; R /= 10, h++);
                q(d, o + (d.e = h + 14 * a - 1) + 1, u, g);
              } else (d.e = a), (d.r = +g);
              return d;
            };
          })()),
          (m = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
          (d = /^([^.]+)\.$/),
          (v = /^\.([^.]+)$/),
          (N = /^-?(Infinity|NaN)$/),
          (O = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
          (E = function (e, r, t, n) {
            var s,
              o = t ? r : r.replace(O, "");
            if (N.test(o)) e.s = isNaN(o) ? null : o < 0 ? -1 : 1;
            else {
              if (
                !t &&
                ((o = o.replace(m, function (e, r, t) {
                  return (
                    (s = "x" == (t = t.toLowerCase()) ? 16 : "b" == t ? 2 : 8),
                    n && n != s ? e : r
                  );
                })),
                n && ((s = n), (o = o.replace(d, "$1").replace(v, "0.$1"))),
                r != o)
              )
                return new G(o, s);
              if (G.DEBUG)
                throw Error(
                  i + "Not a" + (n ? " base " + n : "") + " number: " + r
                );
              e.s = null;
            }
            e.c = e.e = null;
          }),
          (A.absoluteValue = A.abs =
            function () {
              var e = new G(this);
              return e.s < 0 && (e.s = 1), e;
            }),
          (A.comparedTo = function (e, r) {
            return l(this, new G(e, r));
          }),
          (A.decimalPlaces = A.dp =
            function (e, r) {
              var t, n, i;
              if (null != e)
                return (
                  c(e, 0, 1e9),
                  null == r ? (r = R) : c(r, 0, 8),
                  q(new G(this), e + this.e + 1, r)
                );
              if (!(t = this.c)) return null;
              if (
                ((n = ((i = t.length - 1) - f(this.e / 14)) * 14), (i = t[i]))
              )
                for (; i % 10 == 0; i /= 10, n--);
              return n < 0 && (n = 0), n;
            }),
          (A.dividedBy = A.div =
            function (e, r) {
              return b(this, new G(e, r), S, R);
            }),
          (A.dividedToIntegerBy = A.idiv =
            function (e, r) {
              return b(this, new G(e, r), 0, 1);
            }),
          (A.exponentiatedBy = A.pow =
            function (e, r) {
              var s,
                o,
                f,
                u,
                l,
                c,
                h,
                g,
                p,
                w = this;
              if ((e = new G(e)).c && !e.isInteger())
                throw Error(i + "Exponent not an integer: " + $(e));
              if (
                (null != r && (r = new G(r)),
                (c = e.e > 14),
                !w.c ||
                  !w.c[0] ||
                  (1 == w.c[0] && !w.e && 1 == w.c.length) ||
                  !e.c ||
                  !e.c[0])
              )
                return (
                  (p = new G(Math.pow(+$(w), c ? e.s * (2 - a(e)) : +$(e)))),
                  r ? p.mod(r) : p
                );
              if (((h = e.s < 0), r)) {
                if (r.c ? !r.c[0] : !r.s) return new G(NaN);
                (o = !h && w.isInteger() && r.isInteger()) && (w = w.mod(r));
              } else {
                if (
                  e.e > 9 &&
                  (w.e > 0 ||
                    w.e < -1 ||
                    (0 == w.e
                      ? w.c[0] > 1 || (c && w.c[1] >= 24e7)
                      : w.c[0] < 8e13 || (c && w.c[0] <= 9999975e7)))
                )
                  return (
                    (u = w.s < 0 && a(e) ? -0 : 0),
                    w.e > -1 && (u = 1 / u),
                    new G(h ? 1 / u : u)
                  );
                L && (u = t(L / 14 + 2));
              }
              for (
                c
                  ? ((s = new G(0.5)), h && (e.s = 1), (g = a(e)))
                  : (g = (f = Math.abs(+$(e))) % 2),
                  p = new G(x);
                ;

              ) {
                if (g) {
                  if (!(p = p.times(w)).c) break;
                  u ? p.c.length > u && (p.c.length = u) : o && (p = p.mod(r));
                }
                if (f) {
                  if (0 === (f = n(f / 2))) break;
                  g = f % 2;
                } else if ((q((e = e.times(s)), e.e + 1, 1), e.e > 14))
                  g = a(e);
                else {
                  if (0 == (f = +$(e))) break;
                  g = f % 2;
                }
                (w = w.times(w)),
                  u
                    ? w.c && w.c.length > u && (w.c.length = u)
                    : o && (w = w.mod(r));
              }
              return o
                ? p
                : (h && (p = x.div(p)), r ? p.mod(r) : u ? q(p, L, R, l) : p);
            }),
          (A.integerValue = function (e) {
            var r = new G(this);
            return null == e ? (e = R) : c(e, 0, 8), q(r, r.e + 1, e);
          }),
          (A.isEqualTo = A.eq =
            function (e, r) {
              return 0 === l(this, new G(e, r));
            }),
          (A.isFinite = function () {
            return !!this.c;
          }),
          (A.isGreaterThan = A.gt =
            function (e, r) {
              return l(this, new G(e, r)) > 0;
            }),
          (A.isGreaterThanOrEqualTo = A.gte =
            function (e, r) {
              return 1 === (r = l(this, new G(e, r))) || 0 === r;
            }),
          (A.isInteger = function () {
            return !!this.c && f(this.e / 14) > this.c.length - 2;
          }),
          (A.isLessThan = A.lt =
            function (e, r) {
              return 0 > l(this, new G(e, r));
            }),
          (A.isLessThanOrEqualTo = A.lte =
            function (e, r) {
              return -1 === (r = l(this, new G(e, r))) || 0 === r;
            }),
          (A.isNaN = function () {
            return !this.s;
          }),
          (A.isNegative = function () {
            return this.s < 0;
          }),
          (A.isPositive = function () {
            return this.s > 0;
          }),
          (A.isZero = function () {
            return !!this.c && 0 == this.c[0];
          }),
          (A.minus = function (e, r) {
            var t,
              n,
              i,
              s,
              o = this.s;
            if (((r = (e = new G(e, r)).s), !o || !r)) return new G(NaN);
            if (o != r) return (e.s = -r), this.plus(e);
            var u = this.e / 14,
              l = e.e / 14,
              c = this.c,
              a = e.c;
            if (!u || !l) {
              if (!c || !a) return c ? ((e.s = -r), e) : new G(a ? this : NaN);
              if (!c[0] || !a[0])
                return a[0]
                  ? ((e.s = -r), e)
                  : new G(c[0] ? this : 3 == R ? -0 : 0);
            }
            if (((u = f(u)), (l = f(l)), (c = c.slice()), (o = u - l))) {
              for (
                (s = o < 0) ? ((o = -o), (i = c)) : ((l = u), (i = a)),
                  i.reverse(),
                  r = o;
                r--;
                i.push(0)
              );
              i.reverse();
            } else
              for (
                n = (s = (o = c.length) < (r = a.length)) ? o : r, o = r = 0;
                r < n;
                r++
              )
                if (c[r] != a[r]) {
                  s = c[r] < a[r];
                  break;
                }
            if (
              (s && ((i = c), (c = a), (a = i), (e.s = -e.s)),
              (r = (n = a.length) - (t = c.length)) > 0)
            )
              for (; r--; c[t++] = 0);
            for (r = 1e14 - 1; n > o; ) {
              if (c[--n] < a[n]) {
                for (t = n; t && !c[--t]; c[t] = r);
                --c[t], (c[n] += 1e14);
              }
              c[n] -= a[n];
            }
            for (; 0 == c[0]; c.splice(0, 1), --l);
            return c[0]
              ? j(e, c, l)
              : ((e.s = 3 == R ? -1 : 1), (e.c = [(e.e = 0)]), e);
          }),
          (A.modulo = A.mod =
            function (e, r) {
              var t, n;
              return ((e = new G(e, r)), this.c && e.s && (!e.c || e.c[0]))
                ? e.c && (!this.c || this.c[0])
                  ? (9 == U
                      ? ((n = e.s),
                        (e.s = 1),
                        (t = b(this, e, 0, 3)),
                        (e.s = n),
                        (t.s *= n))
                      : (t = b(this, e, 0, U)),
                    (e = this.minus(t.times(e))).c[0] ||
                      1 != U ||
                      (e.s = this.s),
                    e)
                  : new G(this)
                : new G(NaN);
            }),
          (A.multipliedBy = A.times =
            function (e, r) {
              var t,
                n,
                i,
                s,
                o,
                u,
                l,
                c,
                a,
                h,
                g,
                p,
                w,
                m = this.c,
                d = (e = new G(e, r)).c;
              if (!m || !d || !m[0] || !d[0])
                return (
                  this.s && e.s && (!m || m[0] || d) && (!d || d[0] || m)
                    ? ((e.s *= this.s),
                      m && d ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null))
                    : (e.c = e.e = e.s = null),
                  e
                );
              for (
                n = f(this.e / 14) + f(e.e / 14),
                  e.s *= this.s,
                  (l = m.length) < (h = d.length) &&
                    ((w = m), (m = d), (d = w), (i = l), (l = h), (h = i)),
                  i = l + h,
                  w = [];
                i--;
                w.push(0)
              );
              for (i = h; --i >= 0; ) {
                for (
                  t = 0, g = d[i] % 1e7, p = (d[i] / 1e7) | 0, s = i + (o = l);
                  s > i;

                )
                  (u = p * (c = m[--o] % 1e7) + (a = (m[o] / 1e7) | 0) * g),
                    (t =
                      (((c = g * c + (u % 1e7) * 1e7 + w[s] + t) / 1e14) | 0) +
                      ((u / 1e7) | 0) +
                      p * a),
                    (w[s--] = c % 1e14);
                w[s] = t;
              }
              return t ? ++n : w.splice(0, 1), j(e, w, n);
            }),
          (A.negated = function () {
            var e = new G(this);
            return (e.s = -e.s || null), e;
          }),
          (A.plus = function (e, r) {
            var t,
              n = this.s;
            if (((r = (e = new G(e, r)).s), !n || !r)) return new G(NaN);
            if (n != r) return (e.s = -r), this.minus(e);
            var i = this.e / 14,
              s = e.e / 14,
              o = this.c,
              u = e.c;
            if (!i || !s) {
              if (!o || !u) return new G(n / 0);
              if (!o[0] || !u[0]) return u[0] ? e : new G(o[0] ? this : 0 * n);
            }
            if (((i = f(i)), (s = f(s)), (o = o.slice()), (n = i - s))) {
              for (
                n > 0 ? ((s = i), (t = u)) : ((n = -n), (t = o)), t.reverse();
                n--;
                t.push(0)
              );
              t.reverse();
            }
            for (
              (n = o.length) - (r = u.length) < 0 &&
                ((t = u), (u = o), (o = t), (r = n)),
                n = 0;
              r;

            )
              (n = ((o[--r] = o[r] + u[r] + n) / 1e14) | 0),
                (o[r] = 1e14 === o[r] ? 0 : o[r] % 1e14);
            return n && ((o = [n].concat(o)), ++s), j(e, o, s);
          }),
          (A.precision = A.sd =
            function (e, r) {
              var t, n, i;
              if (null != e && !!e !== e)
                return (
                  c(e, 1, 1e9),
                  null == r ? (r = R) : c(r, 0, 8),
                  q(new G(this), e, r)
                );
              if (!(t = this.c)) return null;
              if (((n = 14 * (i = t.length - 1) + 1), (i = t[i]))) {
                for (; i % 10 == 0; i /= 10, n--);
                for (i = t[0]; i >= 10; i /= 10, n++);
              }
              return e && this.e + 1 > n && (n = this.e + 1), n;
            }),
          (A.shiftedBy = function (e) {
            return (
              c(e, -0x1fffffffffffff, 0x1fffffffffffff), this.times("1e" + e)
            );
          }),
          (A.squareRoot = A.sqrt =
            function () {
              var e,
                r,
                t,
                n,
                i,
                s = this.c,
                o = this.s,
                l = this.e,
                c = S + 4,
                a = new G("0.5");
              if (1 !== o || !s || !s[0])
                return new G(
                  !o || (o < 0 && (!s || s[0])) ? NaN : s ? this : 1 / 0
                );
              if (
                (0 == (o = Math.sqrt(+$(this))) || o == 1 / 0
                  ? (((r = u(s)).length + l) % 2 == 0 && (r += "0"),
                    (o = Math.sqrt(+r)),
                    (l = f((l + 1) / 2) - (l < 0 || l % 2)),
                    (t = new G(
                      (r =
                        o == 1 / 0
                          ? "5e" + l
                          : (r = o.toExponential()).slice(
                              0,
                              r.indexOf("e") + 1
                            ) + l)
                    )))
                  : (t = new G(o + "")),
                t.c[0])
              ) {
                for ((o = (l = t.e) + c) < 3 && (o = 0); ; )
                  if (
                    ((i = t),
                    (t = a.times(i.plus(b(this, i, c, 1)))),
                    u(i.c).slice(0, o) === (r = u(t.c)).slice(0, o))
                  ) {
                    if (
                      (t.e < l && --o,
                      "9999" != (r = r.slice(o - 3, o + 1)) &&
                        (n || "4999" != r))
                    ) {
                      (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                        (q(t, t.e + S + 2, 1), (e = !t.times(t).eq(this)));
                      break;
                    }
                    if (!n && (q(i, i.e + S + 2, 0), i.times(i).eq(this))) {
                      t = i;
                      break;
                    }
                    (c += 4), (o += 4), (n = 1);
                  }
              }
              return q(t, t.e + S + 1, R, e);
            }),
          (A.toExponential = function (e, r) {
            return null != e && (c(e, 0, 1e9), e++), F(this, e, r, 1);
          }),
          (A.toFixed = function (e, r) {
            return (
              null != e && (c(e, 0, 1e9), (e = e + this.e + 1)), F(this, e, r)
            );
          }),
          (A.toFormat = function (e, r, t) {
            var n;
            if (null == t)
              null != e && r && "object" == typeof r
                ? ((t = r), (r = null))
                : e && "object" == typeof e
                ? ((t = e), (e = r = null))
                : (t = C);
            else if ("object" != typeof t)
              throw Error(i + "Argument not an object: " + t);
            if (((n = this.toFixed(e, r)), this.c)) {
              var s,
                o = n.split("."),
                f = +t.groupSize,
                u = +t.secondaryGroupSize,
                l = t.groupSeparator || "",
                c = o[0],
                a = o[1],
                h = this.s < 0,
                g = h ? c.slice(1) : c,
                p = g.length;
              if (
                (u && ((s = f), (f = u), (u = s), (p -= s)), f > 0 && p > 0)
              ) {
                for (s = p % f || f, c = g.substr(0, s); s < p; s += f)
                  c += l + g.substr(s, f);
                u > 0 && (c += l + g.slice(s)), h && (c = "-" + c);
              }
              n = a
                ? c +
                  (t.decimalSeparator || "") +
                  ((u = +t.fractionGroupSize)
                    ? a.replace(
                        RegExp("\\d{" + u + "}\\B", "g"),
                        "$&" + (t.fractionGroupSeparator || "")
                      )
                    : a)
                : c;
            }
            return (t.prefix || "") + n + (t.suffix || "");
          }),
          (A.toFraction = function (e) {
            var r,
              t,
              n,
              s,
              f,
              l,
              c,
              a,
              h,
              g,
              p,
              w,
              m = this.c;
            if (
              null != e &&
              ((!(c = new G(e)).isInteger() && (c.c || 1 !== c.s)) || c.lt(x))
            )
              throw Error(
                i +
                  "Argument " +
                  (c.isInteger() ? "out of range: " : "not an integer: ") +
                  $(c)
              );
            if (!m) return new G(this);
            for (
              r = new G(x),
                h = t = new G(x),
                n = a = new G(x),
                w = u(m),
                f = r.e = w.length - this.e - 1,
                r.c[0] = o[(l = f % 14) < 0 ? 14 + l : l],
                e = !e || c.comparedTo(r) > 0 ? (f > 0 ? r : h) : c,
                l = _,
                _ = 1 / 0,
                c = new G(w),
                a.c[0] = 0;
              (g = b(c, r, 0, 1)), 1 != (s = t.plus(g.times(n))).comparedTo(e);

            )
              (t = n),
                (n = s),
                (h = a.plus(g.times((s = h)))),
                (a = s),
                (r = c.minus(g.times((s = r)))),
                (c = s);
            return (
              (s = b(e.minus(t), n, 0, 1)),
              (a = a.plus(s.times(h))),
              (t = t.plus(s.times(n))),
              (a.s = h.s = this.s),
              (f *= 2),
              (p =
                1 >
                b(h, n, f, R)
                  .minus(this)
                  .abs()
                  .comparedTo(b(a, t, f, R).minus(this).abs())
                  ? [h, n]
                  : [a, t]),
              (_ = l),
              p
            );
          }),
          (A.toNumber = function () {
            return +$(this);
          }),
          (A.toPrecision = function (e, r) {
            return null != e && c(e, 1, 1e9), F(this, e, r, 2);
          }),
          (A.toString = function (e) {
            var r,
              t = this,
              n = t.s,
              i = t.e;
            return (
              null === i
                ? n
                  ? ((r = "Infinity"), n < 0 && (r = "-" + r))
                  : (r = "NaN")
                : (null == e
                    ? (r = i <= B || i >= P ? h(u(t.c), i) : g(u(t.c), i, "0"))
                    : 10 === e && M
                    ? (r = g(u((t = q(new G(t), S + i + 1, R)).c), t.e, "0"))
                    : (c(e, 2, I.length, "Base"),
                      (r = y(g(u(t.c), i, "0"), 10, e, n, !0))),
                  n < 0 && t.c[0] && (r = "-" + r)),
              r
            );
          }),
          (A.valueOf = A.toJSON =
            function () {
              return $(this);
            }),
          (A._isBigNumber = !0),
          (A[Symbol.toStringTag] = "BigNumber"),
          (A[Symbol.for("nodejs.util.inspect.custom")] = A.valueOf),
          null != p && G.set(p),
          G
        );
      })();
      let w = p;
    },
  },
]);

//# sourceMappingURL=29a0b7295f160247.js.map
