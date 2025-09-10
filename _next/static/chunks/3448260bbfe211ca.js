(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    736506: (t) => {
      "use strict";
      t.s(
        { SHA224: () => d, SHA256: () => h, sha224: () => g, sha256: () => y },
        736506
      );
      var e = t.i(90621);
      class r extends e.Hash {
        update(t) {
          (0, e.aexists)(this), (t = (0, e.toBytes)(t)), (0, e.abytes)(t);
          let { view: r, buffer: s, blockLen: n } = this,
            i = t.length;
          for (let a = 0; a < i; ) {
            let o = Math.min(n - this.pos, i - a);
            if (o === n) {
              let r = (0, e.createView)(t);
              for (; n <= i - a; a += n) this.process(r, a);
              continue;
            }
            s.set(t.subarray(a, a + o), this.pos),
              (this.pos += o),
              (a += o),
              this.pos === n && (this.process(r, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, e.aexists)(this), (0, e.aoutput)(t, this), (this.finished = !0);
          let { buffer: r, view: s, blockLen: n, isLE: i } = this,
            { pos: a } = this;
          (r[a++] = 128),
            (0, e.clean)(this.buffer.subarray(a)),
            this.padOffset > n - a && (this.process(s, 0), (a = 0));
          for (let t = a; t < n; t++) r[t] = 0;
          !(function (t, e, r, s) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, r, s);
            let n = BigInt(32),
              i = BigInt(0xffffffff),
              a = Number((r >> n) & i),
              o = Number(r & i),
              c = 4 * !!s,
              f = 4 * !s;
            t.setUint32(e + c, a, s), t.setUint32(e + f, o, s);
          })(s, n - 8, BigInt(8 * this.length), i),
            this.process(s, 0);
          let o = (0, e.createView)(t),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let f = c / 4,
            h = this.get();
          if (f > h.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < f; t++) o.setUint32(4 * t, h[t], i);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let r = t.slice(0, e);
          return this.destroy(), r;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: r,
            length: s,
            finished: n,
            destroyed: i,
            pos: a,
          } = this;
          return (
            (t.destroyed = i),
            (t.finished = n),
            (t.length = s),
            (t.pos = a),
            s % e && t.buffer.set(r),
            t
          );
        }
        clone() {
          return this._cloneInto();
        }
        constructor(t, r, s, n) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = t),
            (this.outputLen = r),
            (this.padOffset = s),
            (this.isLE = n),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, e.createView)(this.buffer));
        }
      }
      let s = Uint32Array.from([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        n = Uint32Array.from([
          0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31,
          0x68581511, 0x64f98fa7, 0xbefa4fa4,
        ]),
        i = Uint32Array.from([
          0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a,
          0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31,
          0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d,
          0xbefa4fa4,
        ]),
        a = Uint32Array.from([
          0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372,
          0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1,
          0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19,
          0x137e2179,
        ]);
      var o = t.i(501393);
      let c = Uint32Array.from([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        f = new Uint32Array(64);
      class h extends r {
        get() {
          let { A: t, B: e, C: r, D: s, E: n, F: i, G: a, H: o } = this;
          return [t, e, r, s, n, i, a, o];
        }
        set(t, e, r, s, n, i, a, o) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | s),
            (this.E = 0 | n),
            (this.F = 0 | i),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(t, r) {
          for (let e = 0; e < 16; e++, r += 4) f[e] = t.getUint32(r, !1);
          for (let t = 16; t < 64; t++) {
            let r = f[t - 15],
              s = f[t - 2],
              n = (0, e.rotr)(r, 7) ^ (0, e.rotr)(r, 18) ^ (r >>> 3),
              i = (0, e.rotr)(s, 17) ^ (0, e.rotr)(s, 19) ^ (s >>> 10);
            f[t] = (i + f[t - 7] + n + f[t - 16]) | 0;
          }
          let { A: s, B: n, C: i, D: a, E: o, F: h, G: d, H: x } = this;
          for (let t = 0; t < 64; t++) {
            var b, l, u, p;
            let r =
                (x +
                  ((0, e.rotr)(o, 6) ^
                    (0, e.rotr)(o, 11) ^
                    (0, e.rotr)(o, 25)) +
                  (((b = o) & h) ^ (~b & d)) +
                  c[t] +
                  f[t]) |
                0,
              y =
                (((0, e.rotr)(s, 2) ^ (0, e.rotr)(s, 13) ^ (0, e.rotr)(s, 22)) +
                  (((l = s) & (u = n)) ^ (l & (p = i)) ^ (u & p))) |
                0;
            (x = d),
              (d = h),
              (h = o),
              (o = (a + r) | 0),
              (a = i),
              (i = n),
              (n = s),
              (s = (r + y) | 0);
          }
          (s = (s + this.A) | 0),
            (n = (n + this.B) | 0),
            (i = (i + this.C) | 0),
            (a = (a + this.D) | 0),
            (o = (o + this.E) | 0),
            (h = (h + this.F) | 0),
            (d = (d + this.G) | 0),
            (x = (x + this.H) | 0),
            this.set(s, n, i, a, o, h, d, x);
        }
        roundClean() {
          (0, e.clean)(f);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, e.clean)(this.buffer);
        }
        constructor(t = 32) {
          super(64, t, 8, !1),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]),
            (this.F = 0 | s[5]),
            (this.G = 0 | s[6]),
            (this.H = 0 | s[7]);
        }
      }
      class d extends h {
        constructor() {
          super(28),
            (this.A = 0 | n[0]),
            (this.B = 0 | n[1]),
            (this.C = 0 | n[2]),
            (this.D = 0 | n[3]),
            (this.E = 0 | n[4]),
            (this.F = 0 | n[5]),
            (this.G = 0 | n[6]),
            (this.H = 0 | n[7]);
        }
      }
      let x = o.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((t) => BigInt(t))
        ),
        b = x[0],
        l = x[1],
        u = new Uint32Array(80),
        p = new Uint32Array(80);
      let y = (0, e.createHasher)(() => new h()),
        g = (0, e.createHasher)(() => new d());
    },
    901058: (t) => {
      "use strict";
      var { m: e, e: r } = t;
      {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.toBig =
            r.shrSL =
            r.shrSH =
            r.rotrSL =
            r.rotrSH =
            r.rotrBL =
            r.rotrBH =
            r.rotr32L =
            r.rotr32H =
            r.rotlSL =
            r.rotlSH =
            r.rotlBL =
            r.rotlBH =
            r.add5L =
            r.add5H =
            r.add4L =
            r.add4H =
            r.add3L =
            r.add3H =
              void 0),
          (r.add = i),
          (r.fromBig = s),
          (r.split = n);
        let t = BigInt(0x100000000 - 1),
          e = BigInt(32);
        function s(r) {
          let s =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return s
            ? { h: Number(r & t), l: Number((r >> e) & t) }
            : { h: 0 | Number((r >> e) & t), l: 0 | Number(r & t) };
        }
        function n(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = t.length,
            n = new Uint32Array(r),
            i = new Uint32Array(r);
          for (let a = 0; a < r; a++) {
            let { h: r, l: o } = s(t[a], e);
            [n[a], i[a]] = [r, o];
          }
          return [n, i];
        }
        let a = (t, r) => (BigInt(t >>> 0) << e) | BigInt(r >>> 0);
        r.toBig = a;
        let o = (t, e, r) => t >>> r;
        r.shrSH = o;
        let c = (t, e, r) => (t << (32 - r)) | (e >>> r);
        r.shrSL = c;
        let f = (t, e, r) => (t >>> r) | (e << (32 - r));
        r.rotrSH = f;
        let h = (t, e, r) => (t << (32 - r)) | (e >>> r);
        r.rotrSL = h;
        let d = (t, e, r) => (t << (64 - r)) | (e >>> (r - 32));
        r.rotrBH = d;
        let x = (t, e, r) => (t >>> (r - 32)) | (e << (64 - r));
        r.rotrBL = x;
        let b = (t, e) => e;
        r.rotr32H = b;
        let l = (t, e) => t;
        r.rotr32L = l;
        let u = (t, e, r) => (t << r) | (e >>> (32 - r));
        r.rotlSH = u;
        let p = (t, e, r) => (e << r) | (t >>> (32 - r));
        r.rotlSL = p;
        let y = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r));
        r.rotlBH = y;
        let g = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r));
        function i(t, e, r, s) {
          let n = (e >>> 0) + (s >>> 0);
          return { h: (t + r + ((n / 0x100000000) | 0)) | 0, l: 0 | n };
        }
        r.rotlBL = g;
        let w = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0);
        r.add3L = w;
        let B = (t, e, r, s) => (e + r + s + ((t / 0x100000000) | 0)) | 0;
        r.add3H = B;
        let L = (t, e, r, s) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (s >>> 0);
        r.add4L = L;
        let k = (t, e, r, s, n) =>
          (e + r + s + n + ((t / 0x100000000) | 0)) | 0;
        r.add4H = k;
        let A = (t, e, r, s, n) =>
          (t >>> 0) + (e >>> 0) + (r >>> 0) + (s >>> 0) + (n >>> 0);
        r.add5L = A;
        let H = (t, e, r, s, n, i) =>
          (e + r + s + n + i + ((t / 0x100000000) | 0)) | 0;
        (r.add5H = H),
          (r.default = {
            fromBig: s,
            split: n,
            toBig: a,
            shrSH: o,
            shrSL: c,
            rotrSH: f,
            rotrSL: h,
            rotrBH: d,
            rotrBL: x,
            rotr32H: b,
            rotr32L: l,
            rotlSH: u,
            rotlSL: p,
            rotlBH: y,
            rotlBL: g,
            add: i,
            add3L: w,
            add3H: B,
            add4L: L,
            add4H: k,
            add5H: H,
            add5L: A,
          });
      }
    },
    630462: (t) => {
      "use strict";
      var { m: e, e: r } = t;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.crypto = void 0),
        (r.crypto =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0);
    },
    233504: (t) => {
      "use strict";
      var { m: e, e: r } = t;
      {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.wrapXOFConstructorWithOpts =
            r.wrapConstructorWithOpts =
            r.wrapConstructor =
            r.Hash =
            r.nextTick =
            r.swap32IfBE =
            r.byteSwapIfBE =
            r.swap8IfBE =
            r.isLE =
              void 0),
          (r.isBytes = s),
          (r.anumber = n),
          (r.abytes = i),
          (r.ahash = function (t) {
            if ("function" != typeof t || "function" != typeof t.create)
              throw Error("Hash should be wrapped by utils.createHasher");
            n(t.outputLen), n(t.blockLen);
          }),
          (r.aexists = function (t) {
            let e =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1];
            if (t.destroyed) throw Error("Hash instance has been destroyed");
            if (e && t.finished)
              throw Error("Hash#digest() has already been called");
          }),
          (r.aoutput = function (t, e) {
            i(t);
            let r = e.outputLen;
            if (t.length < r)
              throw Error(
                "digestInto() expects output buffer of length at least " + r
              );
          }),
          (r.u8 = function (t) {
            return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
          }),
          (r.u32 = function (t) {
            return new Uint32Array(
              t.buffer,
              t.byteOffset,
              Math.floor(t.byteLength / 4)
            );
          }),
          (r.clean = function () {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            for (let t = 0; t < e.length; t++) e[t].fill(0);
          }),
          (r.createView = function (t) {
            return new DataView(t.buffer, t.byteOffset, t.byteLength);
          }),
          (r.rotr = function (t, e) {
            return (t << (32 - e)) | (t >>> e);
          }),
          (r.rotl = function (t, e) {
            return (t << e) | ((t >>> (32 - e)) >>> 0);
          }),
          (r.byteSwap = a),
          (r.byteSwap32 = o),
          (r.bytesToHex = function (t) {
            if ((i(t), u)) return t.toHex();
            let e = "";
            for (let r = 0; r < t.length; r++) e += p[t[r]];
            return e;
          }),
          (r.hexToBytes = function (t) {
            if ("string" != typeof t)
              throw Error("hex string expected, got " + typeof t);
            if (u) return Uint8Array.fromHex(t);
            let e = t.length,
              r = e / 2;
            if (e % 2)
              throw Error(
                "hex string expected, got unpadded hex of length " + e
              );
            let s = new Uint8Array(r);
            for (let e = 0, n = 0; e < r; e++, n += 2) {
              let r = c(t.charCodeAt(n)),
                i = c(t.charCodeAt(n + 1));
              if (void 0 === r || void 0 === i)
                throw Error(
                  'hex string expected, got non-hex character "' +
                    (t[n] + t[n + 1]) +
                    '" at index ' +
                    n
                );
              s[e] = 16 * r + i;
            }
            return s;
          }),
          (r.asyncLoop = f),
          (r.utf8ToBytes = h),
          (r.bytesToUtf8 = function (t) {
            return new TextDecoder().decode(t);
          }),
          (r.toBytes = d),
          (r.kdfInputToBytes = function (t) {
            return "string" == typeof t && (t = h(t)), i(t), t;
          }),
          (r.concatBytes = function () {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            let s = 0;
            for (let t = 0; t < e.length; t++) {
              let r = e[t];
              i(r), (s += r.length);
            }
            let n = new Uint8Array(s);
            for (let t = 0, r = 0; t < e.length; t++) {
              let s = e[t];
              n.set(s, r), (r += s.length);
            }
            return n;
          }),
          (r.checkOpts = function (t, e) {
            if (void 0 !== e && "[object Object]" !== {}.toString.call(e))
              throw Error("options should be object or undefined");
            return Object.assign(t, e);
          }),
          (r.createHasher = x),
          (r.createOptHasher = b),
          (r.createXOFer = l),
          (r.randomBytes = function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 32;
            if (e.crypto && "function" == typeof e.crypto.getRandomValues)
              return e.crypto.getRandomValues(new Uint8Array(t));
            if (e.crypto && "function" == typeof e.crypto.randomBytes)
              return Uint8Array.from(e.crypto.randomBytes(t));
            throw Error("crypto.getRandomValues must be defined");
          });
        let e = t.r(630462);
        function s(t) {
          return (
            t instanceof Uint8Array ||
            (ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name)
          );
        }
        function n(t) {
          if (!Number.isSafeInteger(t) || t < 0)
            throw Error("positive integer expected, got " + t);
        }
        function i(t) {
          for (
            var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
            n < e;
            n++
          )
            r[n - 1] = arguments[n];
          if (!s(t)) throw Error("Uint8Array expected");
          if (r.length > 0 && !r.includes(t.length))
            throw Error(
              "Uint8Array expected of length " + r + ", got length=" + t.length
            );
        }
        function a(t) {
          return (
            ((t << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255)
          );
        }
        function o(t) {
          for (let e = 0; e < t.length; e++) t[e] = a(t[e]);
          return t;
        }
        (r.isLE =
          68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]),
          (r.swap8IfBE = r.isLE ? (t) => t : (t) => a(t)),
          (r.byteSwapIfBE = r.swap8IfBE),
          (r.swap32IfBE = r.isLE ? (t) => t : o);
        let u =
            "function" == typeof Uint8Array.from([]).toHex &&
            "function" == typeof Uint8Array.fromHex,
          p = Array.from({ length: 256 }, (t, e) =>
            e.toString(16).padStart(2, "0")
          ),
          y = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
        function c(t) {
          return t >= y._0 && t <= y._9
            ? t - y._0
            : t >= y.A && t <= y.F
            ? t - (y.A - 10)
            : t >= y.a && t <= y.f
            ? t - (y.a - 10)
            : void 0;
        }
        async function f(t, e, s) {
          let n = Date.now();
          for (let i = 0; i < t; i++) {
            s(i);
            let t = Date.now() - n;
            (t >= 0 && t < e) || (await (0, r.nextTick)(), (n += t));
          }
        }
        function h(t) {
          if ("string" != typeof t) throw Error("string expected");
          return new Uint8Array(new TextEncoder().encode(t));
        }
        function d(t) {
          return "string" == typeof t && (t = h(t)), i(t), t;
        }
        function x(t) {
          let e = (e) => t().update(d(e)).digest(),
            r = t();
          return (
            (e.outputLen = r.outputLen),
            (e.blockLen = r.blockLen),
            (e.create = () => t()),
            e
          );
        }
        function b(t) {
          let e = (e, r) => t(r).update(d(e)).digest(),
            r = t({});
          return (
            (e.outputLen = r.outputLen),
            (e.blockLen = r.blockLen),
            (e.create = (e) => t(e)),
            e
          );
        }
        function l(t) {
          let e = (e, r) => t(r).update(d(e)).digest(),
            r = t({});
          return (
            (e.outputLen = r.outputLen),
            (e.blockLen = r.blockLen),
            (e.create = (e) => t(e)),
            e
          );
        }
        (r.nextTick = async () => {}),
          (r.Hash = class {}),
          (r.wrapConstructor = x),
          (r.wrapConstructorWithOpts = b),
          (r.wrapXOFConstructorWithOpts = l);
      }
    },
    66759: (t) => {
      "use strict";
      var { m: e, e: r } = t;
      {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.shake256 =
            r.shake128 =
            r.keccak_512 =
            r.keccak_384 =
            r.keccak_256 =
            r.keccak_224 =
            r.sha3_512 =
            r.sha3_384 =
            r.sha3_256 =
            r.sha3_224 =
            r.Keccak =
              void 0),
          (r.keccakP = s);
        let e = t.r(901058),
          n = t.r(233504),
          i = BigInt(0),
          a = BigInt(1),
          o = BigInt(2),
          c = BigInt(7),
          f = BigInt(256),
          h = BigInt(113),
          d = [],
          x = [],
          b = [];
        for (let t = 0, e = a, r = 1, s = 0; t < 24; t++) {
          ([r, s] = [s, (2 * r + 3 * s) % 5]),
            d.push(2 * (5 * s + r)),
            x.push((((t + 1) * (t + 2)) / 2) % 64);
          let n = i;
          for (let t = 0; t < 7; t++)
            (e = ((e << a) ^ ((e >> c) * h)) % f) & o &&
              (n ^= a << ((a << BigInt(t)) - a));
          b.push(n);
        }
        let l = (0, e.split)(b, !0),
          u = l[0],
          p = l[1],
          y = (t, r, s) =>
            s > 32 ? (0, e.rotlBH)(t, r, s) : (0, e.rotlSH)(t, r, s),
          g = (t, r, s) =>
            s > 32 ? (0, e.rotlBL)(t, r, s) : (0, e.rotlSL)(t, r, s);
        function s(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 24,
            r = new Uint32Array(10);
          for (let s = 24 - e; s < 24; s++) {
            for (let e = 0; e < 10; e++)
              r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
            for (let e = 0; e < 10; e += 2) {
              let s = (e + 8) % 10,
                n = (e + 2) % 10,
                i = r[n],
                a = r[n + 1],
                o = y(i, a, 1) ^ r[s],
                c = g(i, a, 1) ^ r[s + 1];
              for (let r = 0; r < 50; r += 10)
                (t[e + r] ^= o), (t[e + r + 1] ^= c);
            }
            let e = t[2],
              n = t[3];
            for (let r = 0; r < 24; r++) {
              let s = x[r],
                i = y(e, n, s),
                a = g(e, n, s),
                o = d[r];
              (e = t[o]), (n = t[o + 1]), (t[o] = i), (t[o + 1] = a);
            }
            for (let e = 0; e < 50; e += 10) {
              for (let s = 0; s < 10; s++) r[s] = t[e + s];
              for (let s = 0; s < 10; s++)
                t[e + s] ^= ~r[(s + 2) % 10] & r[(s + 4) % 10];
            }
            (t[0] ^= u[s]), (t[1] ^= p[s]);
          }
          (0, n.clean)(r);
        }
        class w extends n.Hash {
          clone() {
            return this._cloneInto();
          }
          keccak() {
            (0, n.swap32IfBE)(this.state32),
              s(this.state32, this.rounds),
              (0, n.swap32IfBE)(this.state32),
              (this.posOut = 0),
              (this.pos = 0);
          }
          update(t) {
            (0, n.aexists)(this), (t = (0, n.toBytes)(t)), (0, n.abytes)(t);
            let { blockLen: e, state: r } = this,
              s = t.length;
            for (let n = 0; n < s; ) {
              let i = Math.min(e - this.pos, s - n);
              for (let e = 0; e < i; e++) r[this.pos++] ^= t[n++];
              this.pos === e && this.keccak();
            }
            return this;
          }
          finish() {
            if (this.finished) return;
            this.finished = !0;
            let { state: t, suffix: e, pos: r, blockLen: s } = this;
            (t[r] ^= e),
              (128 & e) != 0 && r === s - 1 && this.keccak(),
              (t[s - 1] ^= 128),
              this.keccak();
          }
          writeInto(t) {
            (0, n.aexists)(this, !1), (0, n.abytes)(t), this.finish();
            let e = this.state,
              { blockLen: r } = this;
            for (let s = 0, n = t.length; s < n; ) {
              this.posOut >= r && this.keccak();
              let i = Math.min(r - this.posOut, n - s);
              t.set(e.subarray(this.posOut, this.posOut + i), s),
                (this.posOut += i),
                (s += i);
            }
            return t;
          }
          xofInto(t) {
            if (!this.enableXOF)
              throw Error("XOF is not possible for this instance");
            return this.writeInto(t);
          }
          xof(t) {
            return (0, n.anumber)(t), this.xofInto(new Uint8Array(t));
          }
          digestInto(t) {
            if (((0, n.aoutput)(t, this), this.finished))
              throw Error("digest() was already called");
            return this.writeInto(t), this.destroy(), t;
          }
          digest() {
            return this.digestInto(new Uint8Array(this.outputLen));
          }
          destroy() {
            (this.destroyed = !0), (0, n.clean)(this.state);
          }
          _cloneInto(t) {
            let {
              blockLen: e,
              suffix: r,
              outputLen: s,
              rounds: n,
              enableXOF: i,
            } = this;
            return (
              t || (t = new w(e, r, s, i, n)),
              t.state32.set(this.state32),
              (t.pos = this.pos),
              (t.posOut = this.posOut),
              (t.finished = this.finished),
              (t.rounds = n),
              (t.suffix = r),
              (t.outputLen = s),
              (t.enableXOF = i),
              (t.destroyed = this.destroyed),
              t
            );
          }
          constructor(t, e, r, s = !1, i = 24) {
            if (
              (super(),
              (this.pos = 0),
              (this.posOut = 0),
              (this.finished = !1),
              (this.destroyed = !1),
              (this.enableXOF = !1),
              (this.blockLen = t),
              (this.suffix = e),
              (this.outputLen = r),
              (this.enableXOF = s),
              (this.rounds = i),
              (0, n.anumber)(r),
              !(0 < t && t < 200))
            )
              throw Error("only keccak-f1600 function is supported");
            (this.state = new Uint8Array(200)),
              (this.state32 = (0, n.u32)(this.state));
          }
        }
        r.Keccak = w;
        let B = (t, e, r) => (0, n.createHasher)(() => new w(e, t, r));
        (r.sha3_224 = B(6, 144, 28)),
          (r.sha3_256 = B(6, 136, 32)),
          (r.sha3_384 = B(6, 104, 48)),
          (r.sha3_512 = B(6, 72, 64)),
          (r.keccak_224 = B(1, 144, 28)),
          (r.keccak_256 = B(1, 136, 32)),
          (r.keccak_384 = B(1, 104, 48)),
          (r.keccak_512 = B(1, 72, 64));
        let L = (t, e, r) =>
          (0, n.createXOFer)(function () {
            let s =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return new w(e, t, void 0 === s.dkLen ? r : s.dkLen, !0);
          });
        (r.shake128 = L(31, 168, 16)), (r.shake256 = L(31, 136, 32));
      }
    },
  },
]);

//# sourceMappingURL=3568198de3b98c63.js.map
