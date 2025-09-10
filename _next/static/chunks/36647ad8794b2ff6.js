(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    918142: (e) => {
      "use strict";
      e.s({ ethers: () => cd }, 918142),
        e.s(
          {
            AbiCoder: () => u.AbiCoder,
            AbstractProvider: () => ay.AbstractProvider,
            AbstractSigner: () => al.AbstractSigner,
            AlchemyProvider: () => te,
            AnkrProvider: () => e4,
            BaseContract: () => C.BaseContract,
            BaseWallet: () => rs,
            Block: () => ab.Block,
            BlockscoutProvider: () => aA,
            BrowserProvider: () => av.BrowserProvider,
            ChainstackProvider: () => tr,
            CloudflareProvider: () => ts,
            ConstructorFragment: () => h.ConstructorFragment,
            Contract: () => C.Contract,
            ContractEventPayload: () => D.ContractEventPayload,
            ContractFactory: () => U,
            ContractTransactionReceipt: () => D.ContractTransactionReceipt,
            ContractTransactionResponse: () => D.ContractTransactionResponse,
            ContractUnknownEventPayload: () => D.ContractUnknownEventPayload,
            EnsPlugin: () => aS.EnsPlugin,
            EnsResolver: () => aT.EnsResolver,
            ErrorDescription: () => g.ErrorDescription,
            ErrorFragment: () => h.ErrorFragment,
            EtherSymbol: () => _,
            EtherscanPlugin: () => tu,
            EtherscanProvider: () => tm,
            EventFragment: () => h.EventFragment,
            EventLog: () => D.EventLog,
            EventPayload: () => aK.EventPayload,
            FallbackFragment: () => h.FallbackFragment,
            FallbackProvider: () => ac,
            FeeData: () => ab.FeeData,
            FeeDataNetworkPlugin: () => aS.FeeDataNetworkPlugin,
            FetchCancelSignal: () => aW.FetchCancelSignal,
            FetchRequest: () => aW.FetchRequest,
            FetchResponse: () => aW.FetchResponse,
            FetchUrlFeeDataNetworkPlugin: () => aS.FetchUrlFeeDataNetworkPlugin,
            FixedNumber: () => aq.FixedNumber,
            Fragment: () => h.Fragment,
            FunctionFragment: () => h.FunctionFragment,
            GasCostPlugin: () => aS.GasCostPlugin,
            HDNodeVoidWallet: () => r9,
            HDNodeWallet: () => r6,
            Indexed: () => g.Indexed,
            InfuraProvider: () => tW,
            InfuraWebSocketProvider: () => tK,
            Interface: () => g.Interface,
            IpcSocketProvider: () => aP,
            JsonRpcApiProvider: () => aw.JsonRpcApiProvider,
            JsonRpcProvider: () => aw.JsonRpcProvider,
            JsonRpcSigner: () => aw.JsonRpcSigner,
            LangEn: () => a4,
            Log: () => ab.Log,
            LogDescription: () => g.LogDescription,
            MaxInt256: () => P,
            MaxUint256: () => R,
            MessagePrefix: () => S,
            MinInt256: () => N,
            Mnemonic: () => ra,
            MulticoinProviderPlugin: () => aT.MulticoinProviderPlugin,
            N: () => A,
            NamedFragment: () => h.NamedFragment,
            Network: () => a_.Network,
            NetworkPlugin: () => aS.NetworkPlugin,
            NonceManager: () => am,
            ParamType: () => h.ParamType,
            PocketProvider: () => aN,
            QuickNodeProvider: () => tz,
            Result: () => p.Result,
            Signature: () => eF.Signature,
            SigningKey: () => eM.SigningKey,
            SocketBlockSubscriber: () => tT,
            SocketEventSubscriber: () => tC,
            SocketPendingSubscriber: () => t_,
            SocketProvider: () => tU,
            SocketSubscriber: () => tP,
            StructFragment: () => h.StructFragment,
            Transaction: () => aB.Transaction,
            TransactionDescription: () => g.TransactionDescription,
            TransactionReceipt: () => ab.TransactionReceipt,
            TransactionResponse: () => ab.TransactionResponse,
            Typed: () => m.Typed,
            TypedDataEncoder: () => e0.TypedDataEncoder,
            UndecodedEventLog: () => D.UndecodedEventLog,
            UnmanagedSubscriber: () => ay.UnmanagedSubscriber,
            Utf8ErrorFuncs: () => aV.Utf8ErrorFuncs,
            VoidSigner: () => al.VoidSigner,
            Wallet: () => cc,
            WebSocketProvider: () => tM,
            WeiPerEther: () => E,
            Wordlist: () => aQ,
            WordlistOwl: () => a3,
            WordlistOwlA: () => ci,
            ZeroAddress: () => k.ZeroAddress,
            ZeroHash: () => T.ZeroHash,
            accessListify: () => aC.accessListify,
            assert: () => aL.assert,
            assertArgument: () => aL.assertArgument,
            assertArgumentCount: () => aL.assertArgumentCount,
            assertNormalize: () => aL.assertNormalize,
            assertPrivate: () => aL.assertPrivate,
            authorizationify: () => aI.authorizationify,
            checkResultErrors: () => p.checkResultErrors,
            computeAddress: () => aO.computeAddress,
            computeHmac: () => W,
            concat: () => aF.concat,
            copyRequest: () => ab.copyRequest,
            dataLength: () => aF.dataLength,
            dataSlice: () => aF.dataSlice,
            decodeBase58: () => aU.decodeBase58,
            decodeBase64: () => aD.decodeBase64,
            decodeBytes32String: () => l,
            decodeRlp: () => aJ.decodeRlp,
            decryptCrowdsaleJson: () => ca,
            decryptKeystoreJson: () => rV,
            decryptKeystoreJsonSync: () => rG,
            defaultPath: () => rY,
            defineProperties: () => aM.defineProperties,
            dnsEncode: () => eK.dnsEncode,
            encodeBase58: () => aU.encodeBase58,
            encodeBase64: () => aD.encodeBase64,
            encodeBytes32String: () => b,
            encodeRlp: () => a$.encodeRlp,
            encryptKeystoreJson: () => rH,
            encryptKeystoreJsonSync: () => rj,
            ensNormalize: () => eK.ensNormalize,
            formatEther: () => az.formatEther,
            formatUnits: () => az.formatUnits,
            fromTwos: () => aG.fromTwos,
            getAccountPath: () => r7,
            getAddress: () => y.getAddress,
            getBigInt: () => aG.getBigInt,
            getBytes: () => aF.getBytes,
            getBytesCopy: () => aF.getBytesCopy,
            getCreate2Address: () => w.getCreate2Address,
            getCreateAddress: () => w.getCreateAddress,
            getDefaultProvider: () => af,
            getIcapAddress: () => y.getIcapAddress,
            getIndexedAccountPath: () => ce,
            getNumber: () => aG.getNumber,
            getUint: () => aG.getUint,
            hashAuthorization: () => ez,
            hashMessage: () => eJ,
            hexlify: () => aF.hexlify,
            id: () => eL.id,
            isAddress: () => v.isAddress,
            isAddressable: () => v.isAddressable,
            isBytesLike: () => aF.isBytesLike,
            isCallException: () => aL.isCallException,
            isCrowdsaleJson: () => ct,
            isError: () => aL.isError,
            isHexString: () => aF.isHexString,
            isKeystoreJson: () => rK,
            isValidName: () => eK.isValidName,
            keccak256: () => J.keccak256,
            lock: () => eD,
            makeError: () => aL.makeError,
            mask: () => aG.mask,
            namehash: () => eK.namehash,
            parseEther: () => az.parseEther,
            parseUnits: () => az.parseUnits,
            pbkdf2: () => em,
            randomBytes: () => V,
            recoverAddress: () => aO.recoverAddress,
            resolveAddress: () => v.resolveAddress,
            resolveProperties: () => aM.resolveProperties,
            ripemd160: () => el,
            scrypt: () => eB,
            scryptSync: () => eU,
            sha256: () => eu.sha256,
            sha512: () => eu.sha512,
            showThrottleMessage: () => e5,
            solidityPacked: () => eZ,
            solidityPackedKeccak256: () => eX,
            solidityPackedSha256: () => eQ,
            stripZerosLeft: () => aF.stripZerosLeft,
            toBeArray: () => aG.toBeArray,
            toBeHex: () => aG.toBeHex,
            toBigInt: () => aG.toBigInt,
            toNumber: () => aG.toNumber,
            toQuantity: () => aG.toQuantity,
            toTwos: () => aG.toTwos,
            toUtf8Bytes: () => aV.toUtf8Bytes,
            toUtf8CodePoints: () => aV.toUtf8CodePoints,
            toUtf8String: () => aV.toUtf8String,
            uuidV4: () => aj,
            verifyAuthorization: () => eV,
            verifyMessage: () => e$,
            verifyTypedData: () => e0.verifyTypedData,
            version: () => d.version,
            wordlists: () => cx,
            zeroPadBytes: () => aF.zeroPadBytes,
            zeroPadValue: () => aF.zeroPadValue,
          },
          364144
        ),
        e.s({}, 66513),
        e.s(
          {
            AbiCoder: () => u.AbiCoder,
            AbstractProvider: () => ay.AbstractProvider,
            AbstractSigner: () => al.AbstractSigner,
            AlchemyProvider: () => te,
            AnkrProvider: () => e4,
            BaseContract: () => C.BaseContract,
            BaseWallet: () => rs,
            Block: () => ab.Block,
            BlockscoutProvider: () => aA,
            BrowserProvider: () => av.BrowserProvider,
            ChainstackProvider: () => tr,
            CloudflareProvider: () => ts,
            ConstructorFragment: () => h.ConstructorFragment,
            Contract: () => C.Contract,
            ContractEventPayload: () => D.ContractEventPayload,
            ContractFactory: () => U,
            ContractTransactionReceipt: () => D.ContractTransactionReceipt,
            ContractTransactionResponse: () => D.ContractTransactionResponse,
            ContractUnknownEventPayload: () => D.ContractUnknownEventPayload,
            EnsPlugin: () => aS.EnsPlugin,
            EnsResolver: () => aT.EnsResolver,
            ErrorDescription: () => g.ErrorDescription,
            ErrorFragment: () => h.ErrorFragment,
            EtherSymbol: () => _,
            EtherscanPlugin: () => tu,
            EtherscanProvider: () => tm,
            EventFragment: () => h.EventFragment,
            EventLog: () => D.EventLog,
            EventPayload: () => aK.EventPayload,
            FallbackFragment: () => h.FallbackFragment,
            FallbackProvider: () => ac,
            FeeData: () => ab.FeeData,
            FeeDataNetworkPlugin: () => aS.FeeDataNetworkPlugin,
            FetchCancelSignal: () => aW.FetchCancelSignal,
            FetchRequest: () => aW.FetchRequest,
            FetchResponse: () => aW.FetchResponse,
            FetchUrlFeeDataNetworkPlugin: () => aS.FetchUrlFeeDataNetworkPlugin,
            FixedNumber: () => aq.FixedNumber,
            Fragment: () => h.Fragment,
            FunctionFragment: () => h.FunctionFragment,
            GasCostPlugin: () => aS.GasCostPlugin,
            HDNodeVoidWallet: () => r9,
            HDNodeWallet: () => r6,
            Indexed: () => g.Indexed,
            InfuraProvider: () => tW,
            InfuraWebSocketProvider: () => tK,
            Interface: () => g.Interface,
            IpcSocketProvider: () => aP,
            JsonRpcApiProvider: () => aw.JsonRpcApiProvider,
            JsonRpcProvider: () => aw.JsonRpcProvider,
            JsonRpcSigner: () => aw.JsonRpcSigner,
            LangEn: () => a4,
            Log: () => ab.Log,
            LogDescription: () => g.LogDescription,
            MaxInt256: () => P,
            MaxUint256: () => R,
            MessagePrefix: () => S,
            MinInt256: () => N,
            Mnemonic: () => ra,
            MulticoinProviderPlugin: () => aT.MulticoinProviderPlugin,
            N: () => A,
            NamedFragment: () => h.NamedFragment,
            Network: () => a_.Network,
            NetworkPlugin: () => aS.NetworkPlugin,
            NonceManager: () => am,
            ParamType: () => h.ParamType,
            PocketProvider: () => aN,
            QuickNodeProvider: () => tz,
            Result: () => p.Result,
            Signature: () => eF.Signature,
            SigningKey: () => eM.SigningKey,
            SocketBlockSubscriber: () => tT,
            SocketEventSubscriber: () => tC,
            SocketPendingSubscriber: () => t_,
            SocketProvider: () => tU,
            SocketSubscriber: () => tP,
            StructFragment: () => h.StructFragment,
            Transaction: () => aB.Transaction,
            TransactionDescription: () => g.TransactionDescription,
            TransactionReceipt: () => ab.TransactionReceipt,
            TransactionResponse: () => ab.TransactionResponse,
            Typed: () => m.Typed,
            TypedDataEncoder: () => e0.TypedDataEncoder,
            UndecodedEventLog: () => D.UndecodedEventLog,
            UnmanagedSubscriber: () => ay.UnmanagedSubscriber,
            Utf8ErrorFuncs: () => aV.Utf8ErrorFuncs,
            VoidSigner: () => al.VoidSigner,
            Wallet: () => cc,
            WebSocketProvider: () => tM,
            WeiPerEther: () => E,
            Wordlist: () => aQ,
            WordlistOwl: () => a3,
            WordlistOwlA: () => ci,
            ZeroAddress: () => k.ZeroAddress,
            ZeroHash: () => T.ZeroHash,
            accessListify: () => aC.accessListify,
            assert: () => aL.assert,
            assertArgument: () => aL.assertArgument,
            assertArgumentCount: () => aL.assertArgumentCount,
            assertNormalize: () => aL.assertNormalize,
            assertPrivate: () => aL.assertPrivate,
            authorizationify: () => aI.authorizationify,
            checkResultErrors: () => p.checkResultErrors,
            computeAddress: () => aO.computeAddress,
            computeHmac: () => W,
            concat: () => aF.concat,
            copyRequest: () => ab.copyRequest,
            dataLength: () => aF.dataLength,
            dataSlice: () => aF.dataSlice,
            decodeBase58: () => aU.decodeBase58,
            decodeBase64: () => aD.decodeBase64,
            decodeBytes32String: () => l,
            decodeRlp: () => aJ.decodeRlp,
            decryptCrowdsaleJson: () => ca,
            decryptKeystoreJson: () => rV,
            decryptKeystoreJsonSync: () => rG,
            defaultPath: () => rY,
            defineProperties: () => aM.defineProperties,
            dnsEncode: () => eK.dnsEncode,
            encodeBase58: () => aU.encodeBase58,
            encodeBase64: () => aD.encodeBase64,
            encodeBytes32String: () => b,
            encodeRlp: () => a$.encodeRlp,
            encryptKeystoreJson: () => rH,
            encryptKeystoreJsonSync: () => rj,
            ensNormalize: () => eK.ensNormalize,
            formatEther: () => az.formatEther,
            formatUnits: () => az.formatUnits,
            fromTwos: () => aG.fromTwos,
            getAccountPath: () => r7,
            getAddress: () => y.getAddress,
            getBigInt: () => aG.getBigInt,
            getBytes: () => aF.getBytes,
            getBytesCopy: () => aF.getBytesCopy,
            getCreate2Address: () => w.getCreate2Address,
            getCreateAddress: () => w.getCreateAddress,
            getDefaultProvider: () => af,
            getIcapAddress: () => y.getIcapAddress,
            getIndexedAccountPath: () => ce,
            getNumber: () => aG.getNumber,
            getUint: () => aG.getUint,
            hashAuthorization: () => ez,
            hashMessage: () => eJ,
            hexlify: () => aF.hexlify,
            id: () => eL.id,
            isAddress: () => v.isAddress,
            isAddressable: () => v.isAddressable,
            isBytesLike: () => aF.isBytesLike,
            isCallException: () => aL.isCallException,
            isCrowdsaleJson: () => ct,
            isError: () => aL.isError,
            isHexString: () => aF.isHexString,
            isKeystoreJson: () => rK,
            isValidName: () => eK.isValidName,
            keccak256: () => J.keccak256,
            lock: () => eD,
            makeError: () => aL.makeError,
            mask: () => aG.mask,
            namehash: () => eK.namehash,
            parseEther: () => az.parseEther,
            parseUnits: () => az.parseUnits,
            pbkdf2: () => em,
            randomBytes: () => V,
            recoverAddress: () => aO.recoverAddress,
            resolveAddress: () => v.resolveAddress,
            resolveProperties: () => aM.resolveProperties,
            ripemd160: () => el,
            scrypt: () => eB,
            scryptSync: () => eU,
            sha256: () => eu.sha256,
            sha512: () => eu.sha512,
            showThrottleMessage: () => e5,
            solidityPacked: () => eZ,
            solidityPackedKeccak256: () => eX,
            solidityPackedSha256: () => eQ,
            stripZerosLeft: () => aF.stripZerosLeft,
            toBeArray: () => aG.toBeArray,
            toBeHex: () => aG.toBeHex,
            toBigInt: () => aG.toBigInt,
            toNumber: () => aG.toNumber,
            toQuantity: () => aG.toQuantity,
            toTwos: () => aG.toTwos,
            toUtf8Bytes: () => aV.toUtf8Bytes,
            toUtf8CodePoints: () => aV.toUtf8CodePoints,
            toUtf8String: () => aV.toUtf8String,
            uuidV4: () => aj,
            verifyAuthorization: () => eV,
            verifyMessage: () => e$,
            verifyTypedData: () => e0.verifyTypedData,
            version: () => d.version,
            wordlists: () => cx,
            zeroPadBytes: () => aF.zeroPadBytes,
            zeroPadValue: () => aF.zeroPadValue,
          },
          141860
        );
      var t,
        a,
        r,
        c,
        s,
        n,
        i,
        x,
        d = e.i(100146),
        o = e.i(713514),
        f = e.i(853399);
      function b(e) {
        let t = (0, f.toUtf8Bytes)(e);
        if (t.length > 31)
          throw Error("bytes32 string must be less than 32 bytes");
        return (0, o.zeroPadBytes)(t, 32);
      }
      function l(e) {
        let t = (0, o.getBytes)(e, "bytes");
        if (32 !== t.length) throw Error("invalid bytes32 - not 32 bytes long");
        if (0 !== t[31])
          throw Error("invalid bytes32 string - no null terminator");
        let a = 31;
        for (; 0 === t[a - 1]; ) a--;
        return (0, f.toUtf8String)(t.slice(0, a));
      }
      var u = e.i(468265),
        h = e.i(704996),
        p = e.i(99994),
        g = e.i(328282),
        m = e.i(267528),
        y = e.i(978895),
        w = e.i(688519),
        v = e.i(104787),
        k = e.i(17721);
      let A = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        E = BigInt("1000000000000000000"),
        R = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
        N =
          BigInt(
            "0x8000000000000000000000000000000000000000000000000000000000000000"
          ) * BigInt(-1),
        P = BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      var T = e.i(538348);
      let _ = "Ξ",
        S = "\x19Ethereum Signed Message:\n";
      var C = e.i(693667),
        I = e.i(825285),
        O = e.i(551749),
        B = e.i(13517);
      class U {
        attach(e) {
          return new C.BaseContract(e, this.interface, this.runner);
        }
        async getDeployTransaction() {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          let r = {},
            c = this.interface.deploy;
          if (
            (c.inputs.length + 1 === t.length &&
              (r = await (0, C.copyOverrides)(t.pop())),
            c.inputs.length !== t.length)
          )
            throw Error("incorrect number of arguments to constructor");
          let s = await (0, C.resolveArgs)(this.runner, c.inputs, t);
          return Object.assign({}, r, {
            data: (0, o.concat)([
              this.bytecode,
              this.interface.encodeDeploy(s),
            ]),
          });
        }
        async deploy() {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          let r = await this.getDeployTransaction(...t);
          (0, B.assert)(
            this.runner && "function" == typeof this.runner.sendTransaction,
            "factory runner does not support sending transactions",
            "UNSUPPORTED_OPERATION",
            { operation: "sendTransaction" }
          );
          let c = await this.runner.sendTransaction(r),
            s = (0, w.getCreateAddress)(c);
          return new C.BaseContract(s, this.interface, this.runner, c);
        }
        connect(e) {
          return new U(this.interface, this.bytecode, e);
        }
        static fromSolidity(e, t) {
          (0, B.assertArgument)(null != e, "bad compiler output", "output", e),
            "string" == typeof e && (e = JSON.parse(e));
          let a = e.abi,
            r = "";
          return (
            e.bytecode
              ? (r = e.bytecode)
              : e.evm && e.evm.bytecode && (r = e.evm.bytecode),
            new this(a, r, t)
          );
        }
        constructor(e, t, a) {
          (0, I._)(this, "interface", void 0),
            (0, I._)(this, "bytecode", void 0),
            (0, I._)(this, "runner", void 0);
          let r = g.Interface.from(e);
          t instanceof Uint8Array ||
            ("object" == typeof t && (t = t.object),
            t.startsWith("0x") || (t = "0x" + t)),
            (t = (0, o.hexlify)((0, o.getBytes)(t))),
            (0, O.defineProperties)(this, {
              bytecode: t,
              interface: r,
              runner: a || null,
            });
        }
      }
      var D = e.i(458855),
        F = e.i(188313);
      let M = !1,
        L = function (e, t, a) {
          return (0, F.createHmac)(e, t).update(a).digest();
        },
        K = L;
      function W(e, t, a) {
        let r = (0, o.getBytes)(t, "key"),
          c = (0, o.getBytes)(a, "data");
        return (0, o.hexlify)(K(e, r, c));
      }
      (W._ = L),
        (W.lock = function () {
          M = !0;
        }),
        (W.register = function (e) {
          if (M) throw Error("computeHmac is locked");
          K = e;
        }),
        Object.freeze(W);
      let q = !1,
        G = function (e) {
          return new Uint8Array((0, F.randomBytes)(e));
        },
        z = G;
      function V(e) {
        return z(e);
      }
      (V._ = G),
        (V.lock = function () {
          q = !0;
        }),
        (V.register = function (e) {
          if (q) throw Error("randomBytes is locked");
          z = e;
        }),
        Object.freeze(V);
      var J = e.i(749401),
        $ = e.i(966335),
        j = e.i(825423);
      let H = new Uint8Array([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        Y = Uint8Array.from({ length: 16 }, (e, t) => t),
        Z = Y.map((e) => (9 * e + 5) % 16),
        X = [Y],
        Q = [Z];
      for (let e = 0; e < 4; e++)
        for (let t of [X, Q]) t.push(t[e].map((e) => H[e]));
      let ee = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((e) => new Uint8Array(e)),
        et = X.map((e, t) => e.map((e) => ee[t][e])),
        ea = Q.map((e, t) => e.map((e) => ee[t][e])),
        er = new Uint32Array([
          0, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e,
        ]),
        ec = new Uint32Array([
          0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0,
        ]),
        es = (e, t) => (e << t) | (e >>> (32 - t));
      function en(e, t, a, r) {
        return 0 === e
          ? t ^ a ^ r
          : 1 === e
          ? (t & a) | (~t & r)
          : 2 === e
          ? (t | ~a) ^ r
          : 3 === e
          ? (t & r) | (a & ~r)
          : t ^ (a | ~r);
      }
      let ei = new Uint32Array(16);
      class ex extends $.SHA2 {
        get() {
          let { h0: e, h1: t, h2: a, h3: r, h4: c } = this;
          return [e, t, a, r, c];
        }
        set(e, t, a, r, c) {
          (this.h0 = 0 | e),
            (this.h1 = 0 | t),
            (this.h2 = 0 | a),
            (this.h3 = 0 | r),
            (this.h4 = 0 | c);
        }
        process(e, t) {
          for (let a = 0; a < 16; a++, t += 4) ei[a] = e.getUint32(t, !0);
          let a = 0 | this.h0,
            r = a,
            c = 0 | this.h1,
            s = c,
            n = 0 | this.h2,
            i = n,
            x = 0 | this.h3,
            d = x,
            o = 0 | this.h4,
            f = o;
          for (let e = 0; e < 5; e++) {
            let t = 4 - e,
              b = er[e],
              l = ec[e],
              u = X[e],
              h = Q[e],
              p = et[e],
              g = ea[e];
            for (let t = 0; t < 16; t++) {
              let r = (es(a + en(e, c, n, x) + ei[u[t]] + b, p[t]) + o) | 0;
              (a = o), (o = x), (x = 0 | es(n, 10)), (n = c), (c = r);
            }
            for (let e = 0; e < 16; e++) {
              let a = (es(r + en(t, s, i, d) + ei[h[e]] + l, g[e]) + f) | 0;
              (r = f), (f = d), (d = 0 | es(i, 10)), (i = s), (s = a);
            }
          }
          this.set(
            (this.h1 + n + d) | 0,
            (this.h2 + x + f) | 0,
            (this.h3 + o + r) | 0,
            (this.h4 + a + s) | 0,
            (this.h0 + c + i) | 0
          );
        }
        roundClean() {
          ei.fill(0);
        }
        destroy() {
          (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
        }
        constructor() {
          super(64, 20, 8, !0),
            (this.h0 = 0x67452301),
            (this.h1 = -0x10325477),
            (this.h2 = -0x67452302),
            (this.h3 = 0x10325476),
            (this.h4 = -0x3c2d1e10);
        }
      }
      let ed = (0, j.wrapConstructor)(() => new ex()),
        eo = !1,
        ef = function (e) {
          return ed(e);
        },
        eb = ef;
      function el(e) {
        let t = (0, o.getBytes)(e, "data");
        return (0, o.hexlify)(eb(t));
      }
      (el._ = ef),
        (el.lock = function () {
          eo = !0;
        }),
        (el.register = function (e) {
          if (eo) throw TypeError("ripemd160 is locked");
          eb = e;
        }),
        Object.freeze(el);
      var eu = e.i(83870);
      let eh = !1,
        ep = function (e, t, a, r, c) {
          return (0, F.pbkdf2Sync)(e, t, a, r, c);
        },
        eg = ep;
      function em(e, t, a, r, c) {
        let s = (0, o.getBytes)(e, "password"),
          n = (0, o.getBytes)(t, "salt");
        return (0, o.hexlify)(eg(s, n, a, r, c));
      }
      (em._ = ep),
        (em.lock = function () {
          eh = !0;
        }),
        (em.register = function (e) {
          if (eh) throw Error("pbkdf2 is locked");
          eg = e;
        }),
        Object.freeze(em);
      var ey = e.i(951562),
        ew = e.i(239141),
        ev = e.i(820626);
      let ek = (e, t) => (e << t) | (e >>> (32 - t));
      function eA(e, t, a, r, c, s) {
        let n = e[t++] ^ a[r++],
          i = e[t++] ^ a[r++],
          x = e[t++] ^ a[r++],
          d = e[t++] ^ a[r++],
          o = e[t++] ^ a[r++],
          f = e[t++] ^ a[r++],
          b = e[t++] ^ a[r++],
          l = e[t++] ^ a[r++],
          u = e[t++] ^ a[r++],
          h = e[t++] ^ a[r++],
          p = e[t++] ^ a[r++],
          g = e[t++] ^ a[r++],
          m = e[t++] ^ a[r++],
          y = e[t++] ^ a[r++],
          w = e[t++] ^ a[r++],
          v = e[t++] ^ a[r++],
          k = n,
          A = i,
          E = x,
          R = d,
          N = o,
          P = f,
          T = b,
          _ = l,
          S = u,
          C = h,
          I = p,
          O = g,
          B = m,
          U = y,
          D = w,
          F = v;
        for (let e = 0; e < 8; e += 2)
          (N ^= ek((k + B) | 0, 7)),
            (S ^= ek((N + k) | 0, 9)),
            (B ^= ek((S + N) | 0, 13)),
            (k ^= ek((B + S) | 0, 18)),
            (C ^= ek((P + A) | 0, 7)),
            (U ^= ek((C + P) | 0, 9)),
            (A ^= ek((U + C) | 0, 13)),
            (P ^= ek((A + U) | 0, 18)),
            (D ^= ek((I + T) | 0, 7)),
            (E ^= ek((D + I) | 0, 9)),
            (T ^= ek((E + D) | 0, 13)),
            (I ^= ek((T + E) | 0, 18)),
            (R ^= ek((F + O) | 0, 7)),
            (_ ^= ek((R + F) | 0, 9)),
            (O ^= ek((_ + R) | 0, 13)),
            (F ^= ek((O + _) | 0, 18)),
            (A ^= ek((k + R) | 0, 7)),
            (E ^= ek((A + k) | 0, 9)),
            (R ^= ek((E + A) | 0, 13)),
            (k ^= ek((R + E) | 0, 18)),
            (T ^= ek((P + N) | 0, 7)),
            (_ ^= ek((T + P) | 0, 9)),
            (N ^= ek((_ + T) | 0, 13)),
            (P ^= ek((N + _) | 0, 18)),
            (O ^= ek((I + C) | 0, 7)),
            (S ^= ek((O + I) | 0, 9)),
            (C ^= ek((S + O) | 0, 13)),
            (I ^= ek((C + S) | 0, 18)),
            (B ^= ek((F + D) | 0, 7)),
            (U ^= ek((B + F) | 0, 9)),
            (D ^= ek((U + B) | 0, 13)),
            (F ^= ek((D + U) | 0, 18));
        (c[s++] = (n + k) | 0),
          (c[s++] = (i + A) | 0),
          (c[s++] = (x + E) | 0),
          (c[s++] = (d + R) | 0),
          (c[s++] = (o + N) | 0),
          (c[s++] = (f + P) | 0),
          (c[s++] = (b + T) | 0),
          (c[s++] = (l + _) | 0),
          (c[s++] = (u + S) | 0),
          (c[s++] = (h + C) | 0),
          (c[s++] = (p + I) | 0),
          (c[s++] = (g + O) | 0),
          (c[s++] = (m + B) | 0),
          (c[s++] = (y + U) | 0),
          (c[s++] = (w + D) | 0),
          (c[s++] = (v + F) | 0);
      }
      function eE(e, t, a, r, c) {
        let s = r + 0,
          n = r + 16 * c;
        for (let r = 0; r < 16; r++) a[n + r] = e[t + (2 * c - 1) * 16 + r];
        for (let r = 0; r < c; r++, s += 16, t += 16)
          eA(a, n, e, t, a, s),
            r > 0 && (n += 16),
            eA(a, s, e, (t += 16), a, n);
      }
      function eR(e, t, a) {
        let {
          N: r,
          r: c,
          p: s,
          dkLen: n,
          asyncTick: i,
          maxmem: x,
          onProgress: d,
        } = (0, j.checkOpts)(
          { dkLen: 32, asyncTick: 10, maxmem: 0x40000400 },
          a
        );
        if (
          ((0, ey.number)(r),
          (0, ey.number)(c),
          (0, ey.number)(s),
          (0, ey.number)(n),
          (0, ey.number)(i),
          (0, ey.number)(x),
          void 0 !== d && "function" != typeof d)
        )
          throw Error("progressCb should be function");
        let o = 128 * c,
          f = o / 4;
        if (
          r <= 1 ||
          (r & (r - 1)) != 0 ||
          r >= 2 ** (o / 8) ||
          r > 0x100000000
        )
          throw Error(
            "Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32"
          );
        if (s < 0 || s > ((0x100000000 - 1) * 32) / o)
          throw Error(
            "Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)"
          );
        if (n < 0 || n > (0x100000000 - 1) * 32)
          throw Error(
            "Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32"
          );
        let b = o * (r + s);
        if (b > x)
          throw Error(
            "Scrypt: parameters too large, "
              .concat(b, " (128 * r * (N + p)) > ")
              .concat(x, " (maxmem)")
          );
        let l = (0, ev.pbkdf2)(ew.sha256, e, t, { c: 1, dkLen: o * s }),
          u = (0, j.u32)(l),
          h = (0, j.u32)(new Uint8Array(o * r)),
          p = (0, j.u32)(new Uint8Array(o)),
          g = () => {};
        if (d) {
          let e = 2 * r * s,
            t = Math.max(Math.floor(e / 1e4), 1),
            a = 0;
          g = () => {
            a++, d && (!(a % t) || a === e) && d(a / e);
          };
        }
        return {
          N: r,
          r: c,
          p: s,
          dkLen: n,
          blockSize32: f,
          V: h,
          B32: u,
          B: l,
          tmp: p,
          blockMixCb: g,
          asyncTick: i,
        };
      }
      function eN(e, t, a, r, c) {
        let s = (0, ev.pbkdf2)(ew.sha256, e, a, { c: 1, dkLen: t });
        return a.fill(0), r.fill(0), c.fill(0), s;
      }
      async function eP(e, t, a) {
        let {
          N: r,
          r: c,
          p: s,
          dkLen: n,
          blockSize32: i,
          V: x,
          B32: d,
          B: o,
          tmp: f,
          blockMixCb: b,
          asyncTick: l,
        } = eR(e, t, a);
        for (let e = 0; e < s; e++) {
          let t = i * e;
          for (let e = 0; e < i; e++) x[e] = d[t + e];
          let a = 0;
          await (0, j.asyncLoop)(r - 1, l, () => {
            eE(x, a, x, (a += i), c), b();
          }),
            eE(x, (r - 1) * i, d, t, c),
            b(),
            await (0, j.asyncLoop)(r, l, () => {
              let e = d[t + i - 16] % r;
              for (let a = 0; a < i; a++) f[a] = d[t + a] ^ x[e * i + a];
              eE(f, 0, d, t, c), b();
            });
        }
        return eN(e, n, o, x, f);
      }
      let eT = !1,
        e_ = !1,
        eS = async function (e, t, a, r, c, s, n) {
          return await eP(e, t, { N: a, r, p: c, dkLen: s, onProgress: n });
        },
        eC = function (e, t, a, r, c, s) {
          return (function (e, t, a) {
            let {
              N: r,
              r: c,
              p: s,
              dkLen: n,
              blockSize32: i,
              V: x,
              B32: d,
              B: o,
              tmp: f,
              blockMixCb: b,
            } = eR(e, t, a);
            for (let e = 0; e < s; e++) {
              let t = i * e;
              for (let e = 0; e < i; e++) x[e] = d[t + e];
              for (let e = 0, t = 0; e < r - 1; e++)
                eE(x, t, x, (t += i), c), b();
              eE(x, (r - 1) * i, d, t, c), b();
              for (let e = 0; e < r; e++) {
                let e = d[t + i - 16] % r;
                for (let a = 0; a < i; a++) f[a] = d[t + a] ^ x[e * i + a];
                eE(f, 0, d, t, c), b();
              }
            }
            return eN(e, n, o, x, f);
          })(e, t, { N: a, r, p: c, dkLen: s });
        },
        eI = eS,
        eO = eC;
      async function eB(e, t, a, r, c, s, n) {
        let i = (0, o.getBytes)(e, "passwd"),
          x = (0, o.getBytes)(t, "salt");
        return (0, o.hexlify)(await eI(i, x, a, r, c, s, n));
      }
      function eU(e, t, a, r, c, s) {
        let n = (0, o.getBytes)(e, "passwd"),
          i = (0, o.getBytes)(t, "salt");
        return (0, o.hexlify)(eO(n, i, a, r, c, s));
      }
      function eD() {
        W.lock(),
          J.keccak256.lock(),
          em.lock(),
          V.lock(),
          el.lock(),
          eB.lock(),
          eU.lock(),
          eu.sha256.lock(),
          eu.sha512.lock(),
          V.lock();
      }
      (eB._ = eS),
        (eB.lock = function () {
          e_ = !0;
        }),
        (eB.register = function (e) {
          if (e_) throw Error("scrypt is locked");
          eI = e;
        }),
        Object.freeze(eB),
        (eU._ = eC),
        (eU.lock = function () {
          eT = !0;
        }),
        (eU.register = function (e) {
          if (eT) throw Error("scryptSync is locked");
          eO = e;
        }),
        Object.freeze(eU);
      var eF = e.i(599852),
        eM = e.i(821038),
        eL = e.i(721506),
        eK = e.i(131705),
        eW = e.i(256717),
        eq = e.i(55488),
        eG = e.i(219223);
      function ez(e) {
        return (
          (0, B.assertArgument)(
            "string" == typeof e.address,
            "invalid address for hashAuthorization",
            "auth.address",
            e
          ),
          (0, J.keccak256)(
            (0, o.concat)([
              "0x05",
              (0, eq.encodeRlp)([
                null != e.chainId ? (0, eG.toBeArray)(e.chainId) : "0x",
                (0, y.getAddress)(e.address),
                null != e.nonce ? (0, eG.toBeArray)(e.nonce) : "0x",
              ]),
            ])
          )
        );
      }
      function eV(e, t) {
        return (0, eW.recoverAddress)(ez(e), t);
      }
      function eJ(e) {
        return (
          "string" == typeof e && (e = (0, f.toUtf8Bytes)(e)),
          (0, J.keccak256)(
            (0, o.concat)([
              (0, f.toUtf8Bytes)(S),
              (0, f.toUtf8Bytes)(String(e.length)),
              e,
            ])
          )
        );
      }
      function e$(e, t) {
        let a = eJ(e);
        return (0, eW.recoverAddress)(a, t);
      }
      let ej = RegExp("^bytes([0-9]+)$"),
        eH = RegExp("^(u?int)([0-9]*)$"),
        eY = RegExp("^(.*)\\[([0-9]*)\\]$");
      function eZ(e, t) {
        (0, B.assertArgument)(
          e.length === t.length,
          "wrong number of values; expected ${ types.length }",
          "values",
          t
        );
        let a = [];
        return (
          e.forEach(function (e, r) {
            a.push(
              (function e(t, a, r) {
                switch (t) {
                  case "address":
                    if (r) return (0, o.getBytes)((0, o.zeroPadValue)(a, 32));
                    return (0, o.getBytes)((0, y.getAddress)(a));
                  case "string":
                    return (0, f.toUtf8Bytes)(a);
                  case "bytes":
                    return (0, o.getBytes)(a);
                  case "bool":
                    if (((a = a ? "0x01" : "0x00"), r))
                      return (0, o.getBytes)((0, o.zeroPadValue)(a, 32));
                    return (0, o.getBytes)(a);
                }
                let c = t.match(eH);
                if (c) {
                  let e = "int" === c[1],
                    s = parseInt(c[2] || "256");
                  return (
                    (0, B.assertArgument)(
                      (!c[2] || c[2] === String(s)) &&
                        s % 8 == 0 &&
                        0 !== s &&
                        s <= 256,
                      "invalid number type",
                      "type",
                      t
                    ),
                    r && (s = 256),
                    e && (a = (0, eG.toTwos)(a, s)),
                    (0, o.getBytes)(
                      (0, o.zeroPadValue)((0, eG.toBeArray)(a), s / 8)
                    )
                  );
                }
                if ((c = t.match(ej))) {
                  let e = parseInt(c[1]);
                  return ((0, B.assertArgument)(
                    String(e) === c[1] && 0 !== e && e <= 32,
                    "invalid bytes type",
                    "type",
                    t
                  ),
                  (0, B.assertArgument)(
                    (0, o.dataLength)(a) === e,
                    "invalid value for ".concat(t),
                    "value",
                    a
                  ),
                  r)
                    ? (0, o.getBytes)((0, o.zeroPadBytes)(a, 32))
                    : a;
                }
                if ((c = t.match(eY)) && Array.isArray(a)) {
                  let r = c[1],
                    s = parseInt(c[2] || String(a.length));
                  (0, B.assertArgument)(
                    s === a.length,
                    "invalid array length for ".concat(t),
                    "value",
                    a
                  );
                  let n = [];
                  return (
                    a.forEach(function (t) {
                      n.push(e(r, t, !0));
                    }),
                    (0, o.getBytes)((0, o.concat)(n))
                  );
                }
                (0, B.assertArgument)(!1, "invalid type", "type", t);
              })(e, t[r])
            );
          }),
          (0, o.hexlify)((0, o.concat)(a))
        );
      }
      function eX(e, t) {
        return (0, J.keccak256)(eZ(e, t));
      }
      function eQ(e, t) {
        return (0, eu.sha256)(eZ(e, t));
      }
      var e0 = e.i(550313),
        e1 = e.i(940227);
      let e2 = new Set();
      function e5(e) {
        e2.has(e) ||
          (e2.add(e),
          console.log("========= NOTICE ========="),
          console.log(
            "Request-Rate Exceeded for ".concat(
              e,
              " (this message will not be repeated)"
            )
          ),
          console.log(""),
          console.log(
            "The default API keys for each service are provided as a highly-throttled,"
          ),
          console.log(
            "community resource for low-traffic projects and early prototyping."
          ),
          console.log(""),
          console.log(
            "While your application will continue to function, we highly recommended"
          ),
          console.log(
            "signing up for your own API keys to improve performance, increase your"
          ),
          console.log(
            "request rate/limit and enable other perks, such as metrics and advanced APIs."
          ),
          console.log(""),
          console.log("For more details: https://docs.ethers.org/api-keys/"),
          console.log("=========================="));
      }
      var e3 = e.i(399964),
        e6 = e.i(487568);
      let e8 =
        "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
      class e4 extends e6.JsonRpcProvider {
        _getProvider(e) {
          try {
            return new e4(e, this.apiKey);
          } catch (e) {}
          return super._getProvider(e);
        }
        static getRequest(e, t) {
          null == t && (t = e8);
          let a = new e1.FetchRequest(
            "https://"
              .concat(
                (function (e) {
                  switch (e) {
                    case "mainnet":
                      return "rpc.ankr.com/eth";
                    case "goerli":
                      return "rpc.ankr.com/eth_goerli";
                    case "sepolia":
                      return "rpc.ankr.com/eth_sepolia";
                    case "arbitrum":
                      return "rpc.ankr.com/arbitrum";
                    case "base":
                      return "rpc.ankr.com/base";
                    case "base-goerli":
                      return "rpc.ankr.com/base_goerli";
                    case "base-sepolia":
                      return "rpc.ankr.com/base_sepolia";
                    case "bnb":
                      return "rpc.ankr.com/bsc";
                    case "bnbt":
                      return "rpc.ankr.com/bsc_testnet_chapel";
                    case "matic":
                      return "rpc.ankr.com/polygon";
                    case "matic-mumbai":
                      return "rpc.ankr.com/polygon_mumbai";
                    case "optimism":
                      return "rpc.ankr.com/optimism";
                    case "optimism-goerli":
                      return "rpc.ankr.com/optimism_testnet";
                    case "optimism-sepolia":
                      return "rpc.ankr.com/optimism_sepolia";
                  }
                  (0, B.assertArgument)(
                    !1,
                    "unsupported network",
                    "network",
                    e
                  );
                })(e.name),
                "/"
              )
              .concat(t)
          );
          return (
            (a.allowGzip = !0),
            t === e8 &&
              (a.retryFunc = async (e, t, a) => (e5("AnkrProvider"), !0)),
            a
          );
        }
        getRpcError(e, t) {
          return (
            "eth_sendRawTransaction" === e.method &&
              t &&
              t.error &&
              "INTERNAL_ERROR: could not replace existing tx" ===
                t.error.message &&
              (t.error.message = "replacement transaction underpriced"),
            super.getRpcError(e, t)
          );
        }
        isCommunityResource() {
          return this.apiKey === e8;
        }
        constructor(e, t) {
          null == e && (e = "mainnet");
          let a = e3.Network.from(e);
          null == t && (t = e8),
            super(e4.getRequest(a, t), a, { polling: !0, staticNetwork: a }),
            (0, I._)(this, "apiKey", void 0),
            (0, O.defineProperties)(this, { apiKey: t });
        }
      }
      var e9 = e6;
      let e7 = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
      class te extends e9.JsonRpcProvider {
        _getProvider(e) {
          try {
            return new te(e, this.apiKey);
          } catch (e) {}
          return super._getProvider(e);
        }
        async _perform(e) {
          if ("getTransactionResult" === e.method) {
            let t,
              { trace: a, tx: r } = await (0, O.resolveProperties)({
                trace: this.send("trace_transaction", [e.hash]),
                tx: this.getTransaction(e.hash),
              });
            if (null == a || null == r) return null;
            let c = !1;
            try {
              (t = a[0].result.output), (c = "Reverted" === a[0].error);
            } catch (e) {}
            if (t)
              return (
                (0, B.assert)(
                  !c,
                  "an error occurred during transaction executions",
                  "CALL_EXCEPTION",
                  {
                    action: "getTransactionResult",
                    data: t,
                    reason: null,
                    transaction: r,
                    invocation: null,
                    revert: null,
                  }
                ),
                t
              );
            (0, B.assert)(!1, "could not parse trace result", "BAD_DATA", {
              value: a,
            });
          }
          return await super._perform(e);
        }
        isCommunityResource() {
          return this.apiKey === e7;
        }
        static getRequest(e, t) {
          null == t && (t = e7);
          let a = new e1.FetchRequest(
            "https://"
              .concat(
                (function (e) {
                  switch (e) {
                    case "mainnet":
                      return "eth-mainnet.alchemyapi.io";
                    case "goerli":
                      return "eth-goerli.g.alchemy.com";
                    case "sepolia":
                      return "eth-sepolia.g.alchemy.com";
                    case "arbitrum":
                      return "arb-mainnet.g.alchemy.com";
                    case "arbitrum-goerli":
                      return "arb-goerli.g.alchemy.com";
                    case "arbitrum-sepolia":
                      return "arb-sepolia.g.alchemy.com";
                    case "base":
                      return "base-mainnet.g.alchemy.com";
                    case "base-goerli":
                      return "base-goerli.g.alchemy.com";
                    case "base-sepolia":
                      return "base-sepolia.g.alchemy.com";
                    case "matic":
                      return "polygon-mainnet.g.alchemy.com";
                    case "matic-amoy":
                      return "polygon-amoy.g.alchemy.com";
                    case "matic-mumbai":
                      return "polygon-mumbai.g.alchemy.com";
                    case "optimism":
                      return "opt-mainnet.g.alchemy.com";
                    case "optimism-goerli":
                      return "opt-goerli.g.alchemy.com";
                    case "optimism-sepolia":
                      return "opt-sepolia.g.alchemy.com";
                  }
                  (0, B.assertArgument)(
                    !1,
                    "unsupported network",
                    "network",
                    e
                  );
                })(e.name),
                "/v2/"
              )
              .concat(t)
          );
          return (
            (a.allowGzip = !0),
            t === e7 && (a.retryFunc = async (e, t, a) => (e5("alchemy"), !0)),
            a
          );
        }
        constructor(e, t) {
          null == e && (e = "mainnet");
          let a = e3.Network.from(e);
          null == t && (t = e7),
            super(te.getRequest(a, t), a, { staticNetwork: a }),
            (0, I._)(this, "apiKey", void 0),
            (0, O.defineProperties)(this, { apiKey: t });
        }
      }
      var tt = e6;
      function ta(e) {
        switch (e) {
          case "mainnet":
            return "39f1d67cedf8b7831010a665328c9197";
          case "arbitrum":
            return "0550c209db33c3abf4cc927e1e18cea1";
          case "bnb":
            return "98b5a77e531614387366f6fc5da097f8";
          case "matic":
            return "cd9d4d70377471aa7c142ec4a4205249";
        }
        (0, B.assertArgument)(!1, "unsupported network", "network", e);
      }
      class tr extends tt.JsonRpcProvider {
        _getProvider(e) {
          try {
            return new tr(e, this.apiKey);
          } catch (e) {}
          return super._getProvider(e);
        }
        isCommunityResource() {
          return this.apiKey === ta(this._network.name);
        }
        static getRequest(e, t) {
          null == t && (t = ta(e.name));
          let a = new e1.FetchRequest(
            "https://"
              .concat(
                (function (e) {
                  switch (e) {
                    case "mainnet":
                      return "ethereum-mainnet.core.chainstack.com";
                    case "arbitrum":
                      return "arbitrum-mainnet.core.chainstack.com";
                    case "bnb":
                      return "bsc-mainnet.core.chainstack.com";
                    case "matic":
                      return "polygon-mainnet.core.chainstack.com";
                  }
                  (0, B.assertArgument)(
                    !1,
                    "unsupported network",
                    "network",
                    e
                  );
                })(e.name),
                "/"
              )
              .concat(t)
          );
          return (
            (a.allowGzip = !0),
            t === ta(e.name) &&
              (a.retryFunc = async (e, t, a) => (e5("ChainstackProvider"), !0)),
            a
          );
        }
        constructor(e, t) {
          null == e && (e = "mainnet");
          let a = e3.Network.from(e);
          null == t && (t = ta(a.name)),
            super(tr.getRequest(a, t), a, { staticNetwork: a }),
            (0, I._)(this, "apiKey", void 0),
            (0, O.defineProperties)(this, { apiKey: t });
        }
      }
      var tc = e6;
      class ts extends tc.JsonRpcProvider {
        constructor(e) {
          null == e && (e = "mainnet");
          let t = e3.Network.from(e);
          (0, B.assertArgument)(
            "mainnet" === t.name,
            "unsupported network",
            "network",
            e
          ),
            super("https://cloudflare-eth.com/", t, { staticNetwork: t });
        }
      }
      var tn = e.i(300522),
        ti = e.i(216788),
        tx = e.i(725039),
        td = e.i(816028),
        to = e.i(83595),
        tf = e.i(790587),
        tb = e.i(41073);
      let tl = "org.ethers.plugins.provider.Etherscan";
      class tu extends tb.NetworkPlugin {
        clone() {
          return new tu(this.baseUrl);
        }
        constructor(e) {
          super(tl),
            (0, I._)(this, "baseUrl", void 0),
            (0, O.defineProperties)(this, { baseUrl: e });
        }
      }
      let th = ["enableCcipRead"],
        tp = 1;
      var tg = new WeakMap();
      class tm extends tf.AbstractProvider {
        getBaseUrl() {
          if ((0, tn._)(this, tg)) return (0, tn._)(this, tg).baseUrl;
          switch (this.network.name) {
            case "mainnet":
              return "https://api.etherscan.io";
            case "goerli":
              return "https://api-goerli.etherscan.io";
            case "sepolia":
              return "https://api-sepolia.etherscan.io";
            case "holesky":
              return "https://api-holesky.etherscan.io";
            case "arbitrum":
              return "https://api.arbiscan.io";
            case "arbitrum-goerli":
              return "https://api-goerli.arbiscan.io";
            case "base":
              return "https://api.basescan.org";
            case "base-sepolia":
              return "https://api-sepolia.basescan.org";
            case "bnb":
              return "https://api.bscscan.com";
            case "bnbt":
              return "https://api-testnet.bscscan.com";
            case "matic":
              return "https://api.polygonscan.com";
            case "matic-amoy":
              return "https://api-amoy.polygonscan.com";
            case "matic-mumbai":
              return "https://api-testnet.polygonscan.com";
            case "optimism":
              return "https://api-optimistic.etherscan.io";
            case "optimism-goerli":
              return "https://api-goerli-optimistic.etherscan.io";
          }
          (0, B.assertArgument)(
            !1,
            "unsupported network",
            "network",
            this.network
          );
        }
        getUrl(e, t) {
          let a = Object.keys(t).reduce((e, a) => {
            let r = t[a];
            return null != r && (e += "&".concat(a, "=").concat(r)), e;
          }, "");
          return (
            this.apiKey && (a += "&apikey=".concat(this.apiKey)),
            "https://api.etherscan.io/v2/api?chainid="
              .concat(this.network.chainId, "&module=")
              .concat(e)
              .concat(a)
          );
        }
        getPostUrl() {
          return "https://api.etherscan.io/v2/api?chainid=".concat(
            this.network.chainId
          );
        }
        getPostData(e, t) {
          return (
            (t.module = e),
            (t.apikey = this.apiKey),
            (t.chainid = this.network.chainId),
            t
          );
        }
        async detectNetwork() {
          return this.network;
        }
        async fetch(e, t, a) {
          let r = tp++,
            c = a ? this.getPostUrl() : this.getUrl(e, t),
            s = a ? this.getPostData(e, t) : null;
          this.emit("debug", {
            action: "sendRequest",
            id: r,
            url: c,
            payload: s,
          });
          let n = new e1.FetchRequest(c);
          n.setThrottleParams({ slotInterval: 1e3 }),
            (n.retryFunc = (e, t, a) => (
              this.isCommunityResource() && e5("Etherscan"), Promise.resolve(!0)
            )),
            (n.processFunc = async (t, a) => {
              let c = a.hasBody()
                  ? JSON.parse((0, f.toUtf8String)(a.body))
                  : {},
                s =
                  ("string" == typeof c.result ? c.result : "")
                    .toLowerCase()
                    .indexOf("rate limit") >= 0;
              return (
                "proxy" === e
                  ? c &&
                    0 == c.status &&
                    "NOTOK" == c.message &&
                    s &&
                    (this.emit("debug", {
                      action: "receiveError",
                      id: r,
                      reason: "proxy-NOTOK",
                      error: c,
                    }),
                    a.throwThrottleError(c.result, 2e3))
                  : s &&
                    (this.emit("debug", {
                      action: "receiveError",
                      id: r,
                      reason: "null result",
                      error: c.result,
                    }),
                    a.throwThrottleError(c.result, 2e3)),
                a
              );
            }),
            s &&
              (n.setHeader(
                "content-type",
                "application/x-www-form-urlencoded; charset=UTF-8"
              ),
              (n.body = Object.keys(s)
                .map((e) => "".concat(e, "=").concat(s[e]))
                .join("&")));
          let i = await n.send();
          try {
            i.assertOk();
          } catch (e) {
            this.emit("debug", {
              action: "receiveError",
              id: r,
              error: e,
              reason: "assertOk",
            }),
              (0, B.assert)(!1, "response error", "SERVER_ERROR", {
                request: n,
                response: i,
              });
          }
          i.hasBody() ||
            (this.emit("debug", {
              action: "receiveError",
              id: r,
              error: "missing body",
              reason: "null body",
            }),
            (0, B.assert)(!1, "missing response", "SERVER_ERROR", {
              request: n,
              response: i,
            }));
          let x = JSON.parse((0, f.toUtf8String)(i.body));
          return (
            "proxy" === e
              ? ("2.0" != x.jsonrpc &&
                  (this.emit("debug", {
                    action: "receiveError",
                    id: r,
                    result: x,
                    reason: "invalid JSON-RPC",
                  }),
                  (0, B.assert)(
                    !1,
                    "invalid JSON-RPC response (missing jsonrpc='2.0')",
                    "SERVER_ERROR",
                    { request: n, response: i, info: { result: x } }
                  )),
                x.error &&
                  (this.emit("debug", {
                    action: "receiveError",
                    id: r,
                    result: x,
                    reason: "JSON-RPC error",
                  }),
                  (0, B.assert)(!1, "error response", "SERVER_ERROR", {
                    request: n,
                    response: i,
                    info: { result: x },
                  })))
              : (0 == x.status &&
                  ("No records found" === x.message ||
                    "No transactions found" === x.message)) ||
                (1 == x.status &&
                  ("string" != typeof x.message || x.message.match(/^OK/))) ||
                (this.emit("debug", {
                  action: "receiveError",
                  id: r,
                  result: x,
                }),
                (0, B.assert)(!1, "error response", "SERVER_ERROR", {
                  request: n,
                  response: i,
                  info: { result: x },
                })),
            this.emit("debug", { action: "receiveRequest", id: r, result: x }),
            x.result
          );
        }
        _getTransactionPostData(e) {
          let t = {};
          for (let a in e) {
            if (th.indexOf(a) >= 0 || null == e[a]) continue;
            let r = e[a];
            if (
              ("type" !== a || 0 !== r) &&
              ("blockTag" !== a || "latest" !== r)
            ) {
              if (
                {
                  type: !0,
                  gasLimit: !0,
                  gasPrice: !0,
                  maxFeePerGs: !0,
                  maxPriorityFeePerGas: !0,
                  nonce: !0,
                  value: !0,
                }[a]
              )
                r = (0, eG.toQuantity)(r);
              else if ("accessList" === a)
                r =
                  "[" +
                  (0, td.accessListify)(r)
                    .map((e) =>
                      '{address:"'
                        .concat(e.address, '",storageKeys:["')
                        .concat(e.storageKeys.join('","'), '"]}')
                    )
                    .join(",") +
                  "]";
              else if ("blobVersionedHashes" === a) {
                if (0 === r.length) continue;
                (0, B.assert)(
                  !1,
                  "Etherscan API does not support blobVersionedHashes",
                  "UNSUPPORTED_OPERATION",
                  {
                    operation: "_getTransactionPostData",
                    info: { transaction: e },
                  }
                );
              } else r = (0, o.hexlify)(r);
              t[a] = r;
            }
          }
          return t;
        }
        _checkError(e, t, a) {
          let r = "";
          if ((0, B.isError)(t, "SERVER_ERROR")) {
            try {
              r = t.info.result.error.message;
            } catch (e) {}
            if (!r)
              try {
                r = t.info.message;
              } catch (e) {}
          }
          if (
            ("estimateGas" === e.method &&
              !r.match(/revert/i) &&
              r.match(/insufficient funds/i) &&
              (0, B.assert)(!1, "insufficient funds", "INSUFFICIENT_FUNDS", {
                transaction: e.transaction,
              }),
            ("call" === e.method || "estimateGas" === e.method) &&
              r.match(/execution reverted/i))
          ) {
            let a = "";
            try {
              a = t.info.result.error.data;
            } catch (e) {}
            let r = u.AbiCoder.getBuiltinCallException(
              e.method,
              e.transaction,
              a
            );
            throw ((r.info = { request: e, error: t }), r);
          }
          if (r && "broadcastTransaction" === e.method) {
            let t = to.Transaction.from(e.signedTransaction);
            r.match(/replacement/i) &&
              r.match(/underpriced/i) &&
              (0, B.assert)(
                !1,
                "replacement fee too low",
                "REPLACEMENT_UNDERPRICED",
                { transaction: t }
              ),
              r.match(/insufficient funds/) &&
                (0, B.assert)(
                  !1,
                  "insufficient funds for intrinsic transaction cost",
                  "INSUFFICIENT_FUNDS",
                  { transaction: t }
                ),
              r.match(
                /same hash was already imported|transaction nonce is too low|nonce too low/
              ) &&
                (0, B.assert)(
                  !1,
                  "nonce has already been used",
                  "NONCE_EXPIRED",
                  { transaction: t }
                );
          }
          throw t;
        }
        async _detectNetwork() {
          return this.network;
        }
        async _perform(e) {
          switch (e.method) {
            case "chainId":
              return this.network.chainId;
            case "getBlockNumber":
              return this.fetch("proxy", { action: "eth_blockNumber" });
            case "getGasPrice":
              return this.fetch("proxy", { action: "eth_gasPrice" });
            case "getPriorityFee":
              if ("mainnet" === this.network.name) return "1000000000";
              if ("optimism" === this.network.name) return "1000000";
              throw Error("fallback onto the AbstractProvider default");
            case "getBalance":
              return this.fetch("account", {
                action: "balance",
                address: e.address,
                tag: e.blockTag,
              });
            case "getTransactionCount":
              return this.fetch("proxy", {
                action: "eth_getTransactionCount",
                address: e.address,
                tag: e.blockTag,
              });
            case "getCode":
              return this.fetch("proxy", {
                action: "eth_getCode",
                address: e.address,
                tag: e.blockTag,
              });
            case "getStorage":
              return this.fetch("proxy", {
                action: "eth_getStorageAt",
                address: e.address,
                position: e.position,
                tag: e.blockTag,
              });
            case "broadcastTransaction":
              return this.fetch(
                "proxy",
                { action: "eth_sendRawTransaction", hex: e.signedTransaction },
                !0
              ).catch((t) => this._checkError(e, t, e.signedTransaction));
            case "getBlock":
              if ("blockTag" in e)
                return this.fetch("proxy", {
                  action: "eth_getBlockByNumber",
                  tag: e.blockTag,
                  boolean: e.includeTransactions ? "true" : "false",
                });
              (0, B.assert)(
                !1,
                "getBlock by blockHash not supported by Etherscan",
                "UNSUPPORTED_OPERATION",
                { operation: "getBlock(blockHash)" }
              );
            case "getTransaction":
              return this.fetch("proxy", {
                action: "eth_getTransactionByHash",
                txhash: e.hash,
              });
            case "getTransactionReceipt":
              return this.fetch("proxy", {
                action: "eth_getTransactionReceipt",
                txhash: e.hash,
              });
            case "call": {
              if ("latest" !== e.blockTag)
                throw Error(
                  "EtherscanProvider does not support blockTag for call"
                );
              let t = this._getTransactionPostData(e.transaction);
              (t.module = "proxy"), (t.action = "eth_call");
              try {
                return await this.fetch("proxy", t, !0);
              } catch (t) {
                return this._checkError(e, t, e.transaction);
              }
            }
            case "estimateGas": {
              let t = this._getTransactionPostData(e.transaction);
              (t.module = "proxy"), (t.action = "eth_estimateGas");
              try {
                return await this.fetch("proxy", t, !0);
              } catch (t) {
                return this._checkError(e, t, e.transaction);
              }
            }
          }
          return super._perform(e);
        }
        async getNetwork() {
          return this.network;
        }
        async getEtherPrice() {
          return "mainnet" !== this.network.name
            ? 0
            : parseFloat(
                (await this.fetch("stats", { action: "ethprice" })).ethusd
              );
        }
        async getContract(e) {
          var t;
          let a = this._getAddress(e);
          (t = a) && "function" == typeof t.then && (a = await a);
          try {
            let e = await this.fetch("contract", {
                action: "getabi",
                address: a,
              }),
              t = JSON.parse(e);
            return new C.Contract(a, t, this);
          } catch (e) {
            return null;
          }
        }
        isCommunityResource() {
          return null == this.apiKey;
        }
        constructor(e, t) {
          super(),
            (0, I._)(this, "network", void 0),
            (0, I._)(this, "apiKey", void 0),
            (0, ti._)(this, tg, { writable: !0, value: void 0 });
          let a = e3.Network.from(e);
          (0, tx._)(this, tg, a.getPlugin(tl)),
            (0, O.defineProperties)(this, {
              apiKey: null != t ? t : null,
              network: a,
            });
        }
      }
      var ty = e6;
      let tw = (
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : globalThis
      ).WebSocket;
      var tv = e6,
        tk = new WeakMap(),
        tA = new WeakMap(),
        tE = new WeakMap(),
        tR = new WeakMap(),
        tN = new WeakMap();
      class tP {
        get filter() {
          return JSON.parse((0, tn._)(this, tA));
        }
        start() {
          (0, tx._)(
            this,
            tE,
            (0, tn._)(this, tk)
              .send("eth_subscribe", this.filter)
              .then((e) => ((0, tn._)(this, tk)._register(e, this), e))
          );
        }
        stop() {
          (0, tn._)(this, tE).then((e) => {
            (0, tn._)(this, tk).destroyed ||
              (0, tn._)(this, tk).send("eth_unsubscribe", [e]);
          }),
            (0, tx._)(this, tE, null);
        }
        pause(e) {
          (0, B.assert)(
            e,
            "preserve logs while paused not supported by SocketSubscriber yet",
            "UNSUPPORTED_OPERATION",
            { operation: "pause(false)" }
          ),
            (0, tx._)(this, tR, !!e);
        }
        resume() {
          (0, tx._)(this, tR, null);
        }
        _handleMessage(e) {
          if (null != (0, tn._)(this, tE) && null === (0, tn._)(this, tR)) {
            let t = (0, tn._)(this, tN);
            (t =
              null == t
                ? this._emit((0, tn._)(this, tk), e)
                : t.then(async () => {
                    await this._emit((0, tn._)(this, tk), e);
                  })),
              (0, tx._)(
                this,
                tN,
                t.then(() => {
                  (0, tn._)(this, tN) === t && (0, tx._)(this, tN, null);
                })
              );
          }
        }
        async _emit(e, t) {
          throw Error("sub-classes must implemente this; _emit");
        }
        constructor(e, t) {
          (0, ti._)(this, tk, { writable: !0, value: void 0 }),
            (0, ti._)(this, tA, { writable: !0, value: void 0 }),
            (0, ti._)(this, tE, { writable: !0, value: void 0 }),
            (0, ti._)(this, tR, { writable: !0, value: void 0 }),
            (0, ti._)(this, tN, { writable: !0, value: void 0 }),
            (0, tx._)(this, tk, e),
            (0, tx._)(this, tA, JSON.stringify(t)),
            (0, tx._)(this, tE, null),
            (0, tx._)(this, tR, null),
            (0, tx._)(this, tN, null);
        }
      }
      class tT extends tP {
        async _emit(e, t) {
          e.emit("block", parseInt(t.number));
        }
        constructor(e) {
          super(e, ["newHeads"]);
        }
      }
      class t_ extends tP {
        async _emit(e, t) {
          e.emit("pending", t);
        }
        constructor(e) {
          super(e, ["newPendingTransactions"]);
        }
      }
      var tS = new WeakMap();
      class tC extends tP {
        get logFilter() {
          return JSON.parse((0, tn._)(this, tS));
        }
        async _emit(e, t) {
          e.emit(this.logFilter, e._wrapLog(t, e._network));
        }
        constructor(e, t) {
          super(e, ["logs", t]),
            (0, ti._)(this, tS, { writable: !0, value: void 0 }),
            (0, tx._)(this, tS, JSON.stringify(t));
        }
      }
      var tI = new WeakMap(),
        tO = new WeakMap(),
        tB = new WeakMap();
      class tU extends tv.JsonRpcApiProvider {
        _getSubscriber(e) {
          switch (e.type) {
            case "close":
              return new tf.UnmanagedSubscriber("close");
            case "block":
              return new tT(this);
            case "pending":
              return new t_(this);
            case "event":
              return new tC(this, e.filter);
            case "orphan":
              if ("drop-log" === e.filter.orphan)
                return new tf.UnmanagedSubscriber("drop-log");
          }
          return super._getSubscriber(e);
        }
        _register(e, t) {
          (0, tn._)(this, tO).set(e, t);
          let a = (0, tn._)(this, tB).get(e);
          if (a) {
            for (let e of a) t._handleMessage(e);
            (0, tn._)(this, tB).delete(e);
          }
        }
        async _send(e) {
          (0, B.assertArgument)(
            !Array.isArray(e),
            "WebSocket does not support batch send",
            "payload",
            e
          );
          let t = new Promise((t, a) => {
            (0, tn._)(this, tI).set(e.id, {
              payload: e,
              resolve: t,
              reject: a,
            });
          });
          return (
            await this._waitUntilReady(),
            await this._write(JSON.stringify(e)),
            [await t]
          );
        }
        async _processMessage(e) {
          let t = JSON.parse(e);
          if (t && "object" == typeof t && "id" in t) {
            let e = (0, tn._)(this, tI).get(t.id);
            if (null == e)
              return void this.emit(
                "error",
                (0, B.makeError)(
                  "received result for unknown id",
                  "UNKNOWN_ERROR",
                  { reasonCode: "UNKNOWN_ID", result: t }
                )
              );
            (0, tn._)(this, tI).delete(t.id), e.resolve(t);
          } else {
            if (!t || "eth_subscription" !== t.method)
              return void this.emit(
                "error",
                (0, B.makeError)(
                  "received unexpected message",
                  "UNKNOWN_ERROR",
                  { reasonCode: "UNEXPECTED_MESSAGE", result: t }
                )
              );
            let e = t.params.subscription,
              a = (0, tn._)(this, tO).get(e);
            if (a) a._handleMessage(t.params.result);
            else {
              let a = (0, tn._)(this, tB).get(e);
              null == a && ((a = []), (0, tn._)(this, tB).set(e, a)),
                a.push(t.params.result);
            }
          }
        }
        async _write(e) {
          throw Error("sub-classes must override this");
        }
        constructor(e, t) {
          let a = Object.assign({}, null != t ? t : {});
          (0, B.assertArgument)(
            null == a.batchMaxCount || 1 === a.batchMaxCount,
            "sockets-based providers do not support batches",
            "options.batchMaxCount",
            t
          ),
            (a.batchMaxCount = 1),
            null == a.staticNetwork && (a.staticNetwork = !0),
            super(e, a),
            (0, ti._)(this, tI, { writable: !0, value: void 0 }),
            (0, ti._)(this, tO, { writable: !0, value: void 0 }),
            (0, ti._)(this, tB, { writable: !0, value: void 0 }),
            (0, tx._)(this, tI, new Map()),
            (0, tx._)(this, tO, new Map()),
            (0, tx._)(this, tB, new Map());
        }
      }
      var tD = new WeakMap(),
        tF = new WeakMap();
      class tM extends tU {
        get websocket() {
          if (null == (0, tn._)(this, tF)) throw Error("websocket closed");
          return (0, tn._)(this, tF);
        }
        async _write(e) {
          this.websocket.send(e);
        }
        async destroy() {
          null != (0, tn._)(this, tF) &&
            ((0, tn._)(this, tF).close(), (0, tx._)(this, tF, null)),
            super.destroy();
        }
        constructor(e, t, a) {
          super(t, a),
            (0, ti._)(this, tD, { writable: !0, value: void 0 }),
            (0, ti._)(this, tF, { writable: !0, value: void 0 }),
            "string" == typeof e
              ? ((0, tx._)(this, tD, () => new tw(e)),
                (0, tx._)(this, tF, (0, tn._)(this, tD).call(this)))
              : "function" == typeof e
              ? ((0, tx._)(this, tD, e), (0, tx._)(this, tF, e()))
              : ((0, tx._)(this, tD, null), (0, tx._)(this, tF, e)),
            (this.websocket.onopen = async () => {
              try {
                await this._start(), this.resume();
              } catch (e) {
                console.log("failed to start WebsocketProvider", e);
              }
            }),
            (this.websocket.onmessage = (e) => {
              this._processMessage(e.data);
            });
        }
      }
      let tL = "84842078b09946638c03157f83405213";
      class tK extends tM {
        isCommunityResource() {
          return this.projectId === tL;
        }
        constructor(e, t) {
          let a = new tW(e, t),
            r = a._getConnection();
          (0, B.assert)(
            !r.credentials,
            "INFURA WebSocket project secrets unsupported",
            "UNSUPPORTED_OPERATION",
            { operation: "InfuraProvider.getWebSocketProvider()" }
          ),
            super(
              r.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"),
              a._network
            ),
            (0, I._)(this, "projectId", void 0),
            (0, I._)(this, "projectSecret", void 0),
            (0, O.defineProperties)(this, {
              projectId: a.projectId,
              projectSecret: a.projectSecret,
            });
        }
      }
      class tW extends ty.JsonRpcProvider {
        _getProvider(e) {
          try {
            return new tW(e, this.projectId, this.projectSecret);
          } catch (e) {}
          return super._getProvider(e);
        }
        isCommunityResource() {
          return this.projectId === tL;
        }
        static getWebSocketProvider(e, t) {
          return new tK(e, t);
        }
        static getRequest(e, t, a) {
          null == t && (t = tL), null == a && (a = null);
          let r = new e1.FetchRequest(
            "https://"
              .concat(
                (function (e) {
                  switch (e) {
                    case "mainnet":
                      return "mainnet.infura.io";
                    case "goerli":
                      return "goerli.infura.io";
                    case "sepolia":
                      return "sepolia.infura.io";
                    case "arbitrum":
                      return "arbitrum-mainnet.infura.io";
                    case "arbitrum-goerli":
                      return "arbitrum-goerli.infura.io";
                    case "arbitrum-sepolia":
                      return "arbitrum-sepolia.infura.io";
                    case "base":
                      return "base-mainnet.infura.io";
                    case "base-goerlia":
                    case "base-goerli":
                      return "base-goerli.infura.io";
                    case "base-sepolia":
                      return "base-sepolia.infura.io";
                    case "bnb":
                      return "bsc-mainnet.infura.io";
                    case "bnbt":
                      return "bsc-testnet.infura.io";
                    case "linea":
                      return "linea-mainnet.infura.io";
                    case "linea-goerli":
                      return "linea-goerli.infura.io";
                    case "linea-sepolia":
                      return "linea-sepolia.infura.io";
                    case "matic":
                      return "polygon-mainnet.infura.io";
                    case "matic-amoy":
                      return "polygon-amoy.infura.io";
                    case "matic-mumbai":
                      return "polygon-mumbai.infura.io";
                    case "optimism":
                      return "optimism-mainnet.infura.io";
                    case "optimism-goerli":
                      return "optimism-goerli.infura.io";
                    case "optimism-sepolia":
                      return "optimism-sepolia.infura.io";
                  }
                  (0, B.assertArgument)(
                    !1,
                    "unsupported network",
                    "network",
                    e
                  );
                })(e.name),
                "/v3/"
              )
              .concat(t)
          );
          return (
            (r.allowGzip = !0),
            a && r.setCredentials("", a),
            t === tL &&
              (r.retryFunc = async (e, t, a) => (e5("InfuraProvider"), !0)),
            r
          );
        }
        constructor(e, t, a) {
          null == e && (e = "mainnet");
          let r = e3.Network.from(e);
          null == t && (t = tL),
            null == a && (a = null),
            super(tW.getRequest(r, t, a), r, { staticNetwork: r }),
            (0, I._)(this, "projectId", void 0),
            (0, I._)(this, "projectSecret", void 0),
            (0, O.defineProperties)(this, { projectId: t, projectSecret: a });
        }
      }
      var tq = e6;
      let tG = "919b412a057b5e9c9b6dce193c5a60242d6efadb";
      class tz extends tq.JsonRpcProvider {
        _getProvider(e) {
          try {
            return new tz(e, this.token);
          } catch (e) {}
          return super._getProvider(e);
        }
        isCommunityResource() {
          return this.token === tG;
        }
        static getRequest(e, t) {
          null == t && (t = tG);
          let a = new e1.FetchRequest(
            "https://"
              .concat(
                (function (e) {
                  switch (e) {
                    case "mainnet":
                      return "ethers.quiknode.pro";
                    case "goerli":
                      return "ethers.ethereum-goerli.quiknode.pro";
                    case "sepolia":
                      return "ethers.ethereum-sepolia.quiknode.pro";
                    case "holesky":
                      return "ethers.ethereum-holesky.quiknode.pro";
                    case "arbitrum":
                      return "ethers.arbitrum-mainnet.quiknode.pro";
                    case "arbitrum-goerli":
                      return "ethers.arbitrum-goerli.quiknode.pro";
                    case "arbitrum-sepolia":
                      return "ethers.arbitrum-sepolia.quiknode.pro";
                    case "base":
                      return "ethers.base-mainnet.quiknode.pro";
                    case "base-goerli":
                      return "ethers.base-goerli.quiknode.pro";
                    case "base-spolia":
                      return "ethers.base-sepolia.quiknode.pro";
                    case "bnb":
                      return "ethers.bsc.quiknode.pro";
                    case "bnbt":
                      return "ethers.bsc-testnet.quiknode.pro";
                    case "matic":
                      return "ethers.matic.quiknode.pro";
                    case "matic-mumbai":
                      return "ethers.matic-testnet.quiknode.pro";
                    case "optimism":
                      return "ethers.optimism.quiknode.pro";
                    case "optimism-goerli":
                      return "ethers.optimism-goerli.quiknode.pro";
                    case "optimism-sepolia":
                      return "ethers.optimism-sepolia.quiknode.pro";
                    case "xdai":
                      return "ethers.xdai.quiknode.pro";
                  }
                  (0, B.assertArgument)(
                    !1,
                    "unsupported network",
                    "network",
                    e
                  );
                })(e.name),
                "/"
              )
              .concat(t)
          );
          return (
            (a.allowGzip = !0),
            t === tG &&
              (a.retryFunc = async (e, t, a) => (e5("QuickNodeProvider"), !0)),
            a
          );
        }
        constructor(e, t) {
          null == e && (e = "mainnet");
          let a = e3.Network.from(e);
          null == t && (t = tG),
            super(tz.getRequest(a, t), a, { staticNetwork: a }),
            (0, I._)(this, "token", void 0),
            (0, O.defineProperties)(this, { token: t });
        }
      }
      var tV = e.i(52992),
        tJ = e.i(153525),
        t$ = tf;
      let tj = BigInt("1"),
        tH = BigInt("2");
      function tY() {
        return new Date().getTime();
      }
      function tZ(e) {
        return JSON.stringify(e, (e, t) =>
          "bigint" == typeof t ? { type: "bigint", value: t.toString() } : t
        );
      }
      let tX = { stallTimeout: 400, priority: 1, weight: 1 },
        tQ = {
          blockNumber: -2,
          requests: 0,
          lateResponses: 0,
          errorResponses: 0,
          outOfSync: -1,
          unsupportedEvents: 0,
          rollingDuration: 0,
          score: 0,
          _network: null,
          _updateNumber: null,
          _totalTime: 0,
          _lastFatalError: null,
          _lastFatalErrorTimestamp: 0,
        };
      async function t0(e, t) {
        for (
          ;
          (e.blockNumber < 0 || e.blockNumber < t) &&
          (e._updateNumber ||
            (e._updateNumber = (async () => {
              try {
                let t = await e.provider.getBlockNumber();
                t > e.blockNumber && (e.blockNumber = t);
              } catch (t) {
                (e.blockNumber = -2),
                  (e._lastFatalError = t),
                  (e._lastFatalErrorTimestamp = tY());
              }
              e._updateNumber = null;
            })()),
          await e._updateNumber,
          e.outOfSync++,
          !e._lastFatalError);

        );
      }
      function t1(e) {
        if (null == e) return "null";
        if (Array.isArray(e)) return "[" + e.map(t1).join(",") + "]";
        if ("object" == typeof e && "function" == typeof e.toJSON)
          return t1(e.toJSON());
        switch (typeof e) {
          case "boolean":
          case "symbol":
            return e.toString();
          case "bigint":
          case "number":
            return BigInt(e).toString();
          case "string":
            return JSON.stringify(e);
          case "object": {
            let t = Object.keys(e);
            return (
              t.sort(),
              "{" +
                t
                  .map((t) =>
                    "".concat(JSON.stringify(t), ":").concat(t1(e[t]))
                  )
                  .join(",") +
                "}"
            );
          }
        }
        throw (console.log("Could not serialize", e), Error("Hmm..."));
      }
      function t2(e, t) {
        if ("error" in t) {
          let e = t.error;
          return {
            tag: (0, B.isError)(e, "CALL_EXCEPTION")
              ? t1(
                  Object.assign({}, e, {
                    shortMessage: void 0,
                    reason: void 0,
                    info: void 0,
                  })
                )
              : t1(e),
            value: e,
          };
        }
        let a = t.result;
        return { tag: t1(a), value: a };
      }
      function t5(e, t) {
        let a = new Map();
        for (let { value: e, tag: r, weight: c } of t) {
          let t = a.get(r) || { value: e, weight: 0 };
          (t.weight += c), a.set(r, t);
        }
        let r = null;
        for (let t of a.values())
          t.weight >= e && (!r || t.weight > r.weight) && (r = t);
        if (r) return r.value;
      }
      function t3(e, t) {
        let a = 0,
          r = new Map(),
          c = null,
          s = [];
        for (let { value: e, tag: n, weight: i } of t)
          if (e instanceof Error) {
            let t = r.get(n) || { value: e, weight: 0 };
            (t.weight += i),
              r.set(n, t),
              (null == c || t.weight > c.weight) && (c = t);
          } else s.push(BigInt(e)), (a += i);
        if (a < e) return c && c.weight >= e ? c.value : void 0;
        s.sort((e, t) => (e < t ? -1 : +(t > e)));
        let n = Math.floor(s.length / 2);
        return s.length % 2 ? s[n] : (s[n - 1] + s[n] + tj) / tH;
      }
      function t6(e, t) {
        let a = t5(e, t);
        if (void 0 !== a) return a;
        for (let e of t) if (e.value) return e.value;
      }
      var t8 = new WeakMap(),
        t4 = new WeakMap(),
        t9 = new WeakMap(),
        t7 = new WeakSet(),
        ae = new WeakSet(),
        at = new WeakSet(),
        aa = new WeakSet(),
        ar = new WeakSet();
      class ac extends t$.AbstractProvider {
        get providerConfigs() {
          return (0, tn._)(this, t8).map((e) => {
            let t = Object.assign({}, e);
            for (let e in t) "_" === e[0] && delete t[e];
            return t;
          });
        }
        async _detectNetwork() {
          return e3.Network.from(
            (0, eG.getBigInt)(await this._perform({ method: "chainId" }))
          );
        }
        async _translatePerform(e, t) {
          switch (t.method) {
            case "broadcastTransaction":
              return await e.broadcastTransaction(t.signedTransaction);
            case "call":
              return await e.call(
                Object.assign({}, t.transaction, { blockTag: t.blockTag })
              );
            case "chainId":
              return (await e.getNetwork()).chainId;
            case "estimateGas":
              return await e.estimateGas(t.transaction);
            case "getBalance":
              return await e.getBalance(t.address, t.blockTag);
            case "getBlock": {
              let a = "blockHash" in t ? t.blockHash : t.blockTag;
              return await e.getBlock(a, t.includeTransactions);
            }
            case "getBlockNumber":
              return await e.getBlockNumber();
            case "getCode":
              return await e.getCode(t.address, t.blockTag);
            case "getGasPrice":
              return (await e.getFeeData()).gasPrice;
            case "getPriorityFee":
              return (await e.getFeeData()).maxPriorityFeePerGas;
            case "getLogs":
              return await e.getLogs(t.filter);
            case "getStorage":
              return await e.getStorage(t.address, t.position, t.blockTag);
            case "getTransaction":
              return await e.getTransaction(t.hash);
            case "getTransactionCount":
              return await e.getTransactionCount(t.address, t.blockTag);
            case "getTransactionReceipt":
              return await e.getTransactionReceipt(t.hash);
            case "getTransactionResult":
              return await e.getTransactionResult(t.hash);
          }
        }
        async _perform(e) {
          if ("broadcastTransaction" === e.method) {
            let t = (0, tn._)(this, t8).map((e) => null),
              a = (0, tn._)(this, t8).map(async (a, r) => {
                let { provider: c, weight: s } = a;
                try {
                  let a = await c._perform(e);
                  t[r] = Object.assign(t2(e.method, { result: a }), {
                    weight: s,
                  });
                } catch (a) {
                  t[r] = Object.assign(t2(e.method, { error: a }), {
                    weight: s,
                  });
                }
              });
            for (;;) {
              for (let { value: e } of t.filter((e) => null != e))
                if (!(e instanceof Error)) return e;
              let e = t5(
                this.quorum,
                t.filter((e) => null != e)
              );
              if ((0, B.isError)(e, "INSUFFICIENT_FUNDS")) throw e;
              let r = a.filter((e, a) => null == t[a]);
              if (0 === r.length) break;
              await Promise.race(r);
            }
            let r = t6(this.quorum, t);
            if (
              ((0, B.assert)(
                void 0 !== r,
                "problem multi-broadcasting",
                "SERVER_ERROR",
                {
                  request: "%sub-requests",
                  info: { request: e, results: t.map(tZ) },
                }
              ),
              r instanceof Error)
            )
              throw r;
            return r;
          }
          await (0, tV._)(this, at, ai).call(this);
          let t = new Set(),
            a = 0;
          for (;;) {
            let r = (0, tV._)(this, ae, an).call(this, t, e);
            if (null == r || (a += r.config.weight) >= this.quorum) break;
          }
          let r = await (0, tV._)(this, ar, ad).call(this, t, e);
          for (let e of t)
            e.perform && null == e.result && e.config.lateResponses++;
          return r;
        }
        async destroy() {
          for (let { provider: e } of (0, tn._)(this, t8)) e.destroy();
          super.destroy();
        }
        constructor(e, t, a) {
          super(t, a),
            (0, tJ._)(this, t7),
            (0, tJ._)(this, ae),
            (0, tJ._)(this, at),
            (0, tJ._)(this, aa),
            (0, tJ._)(this, ar),
            (0, I._)(this, "quorum", void 0),
            (0, I._)(this, "eventQuorum", void 0),
            (0, I._)(this, "eventWorkers", void 0),
            (0, ti._)(this, t8, { writable: !0, value: void 0 }),
            (0, ti._)(this, t4, { writable: !0, value: void 0 }),
            (0, ti._)(this, t9, { writable: !0, value: void 0 }),
            (0, tx._)(
              this,
              t8,
              e.map((e) =>
                e instanceof t$.AbstractProvider
                  ? Object.assign({ provider: e }, tX, tQ)
                  : Object.assign({}, tX, e, tQ)
              )
            ),
            (0, tx._)(this, t4, -2),
            (0, tx._)(this, t9, null),
            a && null != a.quorum
              ? (this.quorum = a.quorum)
              : (this.quorum = Math.ceil(
                  (0, tn._)(this, t8).reduce((e, t) => (e += t.weight), 0) / 2
                )),
            (this.eventQuorum = 1),
            (this.eventWorkers = 1),
            (0, B.assertArgument)(
              this.quorum <=
                (0, tn._)(this, t8).reduce((e, t) => e + t.weight, 0),
              "quorum exceed provider weight",
              "quorum",
              this.quorum
            );
        }
      }
      function as(e) {
        let t = Array.from(e).map((e) => e.config),
          a = (0, tn._)(this, t8).slice();
        for (let e = a.length - 1; e > 0; e--) {
          let t = Math.floor(Math.random() * (e + 1)),
            r = a[e];
          (a[e] = a[t]), (a[t] = r);
        }
        for (let e of (a.sort((e, t) => e.priority - t.priority), a))
          if (!e._lastFatalError && -1 === t.indexOf(e)) return e;
        return null;
      }
      function an(e, t) {
        let a = (0, tV._)(this, t7, as).call(this, e);
        if (null == a) return null;
        let r = {
            config: a,
            result: null,
            didBump: !1,
            perform: null,
            staller: null,
          },
          c = tY();
        return (
          (r.perform = (async () => {
            try {
              a.requests++,
                (r.result = {
                  result: await this._translatePerform(a.provider, t),
                });
            } catch (e) {
              a.errorResponses++, (r.result = { error: e });
            }
            let e = tY() - c;
            (a._totalTime += e),
              (a.rollingDuration = 0.95 * a.rollingDuration + 0.05 * e),
              (r.perform = null);
          })()),
          (r.staller = (async () => {
            var e;
            await ((e = a.stallTimeout),
            new Promise((t) => {
              setTimeout(t, e);
            })),
              (r.staller = null);
          })()),
          e.add(r),
          r
        );
      }
      async function ai() {
        let e = (0, tn._)(this, t9);
        if (!e) {
          let t = [];
          (0, tn._)(this, t8).forEach((e) => {
            t.push(
              (async () => {
                await t0(e, 0),
                  e._lastFatalError ||
                    (e._network = await e.provider.getNetwork());
              })()
            );
          }),
            (0, tx._)(
              this,
              t9,
              (e = (async () => {
                await Promise.all(t);
                let e = null;
                for (let t of (0, tn._)(this, t8)) {
                  if (t._lastFatalError) continue;
                  let a = t._network;
                  null == e
                    ? (e = a.chainId)
                    : a.chainId !== e &&
                      (0, B.assert)(
                        !1,
                        "cannot mix providers on different networks",
                        "UNSUPPORTED_OPERATION",
                        { operation: "new FallbackProvider" }
                      );
                }
              })())
            );
        }
        await e;
      }
      async function ax(e, t) {
        let a = [];
        for (let r of e)
          if (null != r.result) {
            let { tag: e, value: c } = t2(t.method, r.result);
            a.push({ tag: e, value: c, weight: r.config.weight });
          }
        if (!(a.reduce((e, t) => e + t.weight, 0) < this.quorum)) {
          switch (t.method) {
            case "getBlockNumber": {
              -2 === (0, tn._)(this, t4) &&
                (0, tx._)(
                  this,
                  t4,
                  Math.ceil(
                    (0, eG.getNumber)(
                      t3(
                        this.quorum,
                        (0, tn._)(this, t8)
                          .filter((e) => !e._lastFatalError)
                          .map((e) => ({
                            value: e.blockNumber,
                            tag: (0, eG.getNumber)(e.blockNumber).toString(),
                            weight: e.weight,
                          }))
                      )
                    )
                  )
                );
              let e = (function (e, t) {
                let a;
                if (1 === e) return (0, eG.getNumber)(t3(e, t), "%internal");
                let r = new Map(),
                  c = (e, t) => {
                    let a = r.get(e) || { result: e, weight: 0 };
                    (a.weight += t), r.set(e, a);
                  };
                for (let { weight: e, value: a } of t) {
                  let t = (0, eG.getNumber)(a);
                  c(t - 1, e), c(t, e), c(t + 1, e);
                }
                let s = 0;
                for (let { weight: t, result: c } of r.values())
                  t >= e &&
                    (t > s || (null != a && t === s && c > a)) &&
                    ((s = t), (a = c));
                return a;
              })(this.quorum, a);
              if (void 0 === e) return;
              return (
                e > (0, tn._)(this, t4) && (0, tx._)(this, t4, e),
                (0, tn._)(this, t4)
              );
            }
            case "getGasPrice":
            case "getPriorityFee":
            case "estimateGas":
              return t3(this.quorum, a);
            case "getBlock":
              if ("blockTag" in t && "pending" === t.blockTag)
                return t6(this.quorum, a);
              return t5(this.quorum, a);
            case "call":
            case "chainId":
            case "getBalance":
            case "getTransactionCount":
            case "getCode":
            case "getStorage":
            case "getTransaction":
            case "getTransactionReceipt":
            case "getLogs":
              return t5(this.quorum, a);
            case "broadcastTransaction":
              return t6(this.quorum, a);
          }
          (0, B.assert)(!1, "unsupported method", "UNSUPPORTED_OPERATION", {
            operation: "_perform(".concat(tZ(t.method), ")"),
          });
        }
      }
      async function ad(e, t) {
        if (0 === e.size) throw Error("no runners?!");
        let a = [],
          r = 0;
        for (let t of e) {
          if ((t.perform && a.push(t.perform), t.staller)) {
            a.push(t.staller);
            continue;
          }
          !t.didBump && ((t.didBump = !0), r++);
        }
        let c = await (0, tV._)(this, aa, ax).call(this, e, t);
        if (void 0 !== c) {
          if (c instanceof Error) throw c;
          return c;
        }
        for (let a = 0; a < r; a++) (0, tV._)(this, ae, an).call(this, e, t);
        return (
          (0, B.assert)(a.length > 0, "quorum not met", "SERVER_ERROR", {
            request: "%sub-requests",
            info: {
              request: t,
              results: Array.from(e).map((e) => tZ(e.result)),
            },
          }),
          await Promise.race(a),
          await (0, tV._)(this, ar, ad).call(this, e, t)
        );
      }
      let ao =
        "goerli kovan sepolia classicKotti optimism-goerli arbitrum-goerli matic-mumbai bnbt".split(
          " "
        );
      function af(e, t) {
        null == t && (t = {});
        let a = (e) =>
          "-" !== t[e] &&
          ("string" == typeof t.exclusive
            ? e === t.exclusive
            : !Array.isArray(t.exclusive) || -1 !== t.exclusive.indexOf(e));
        if ("string" == typeof e && e.match(/^https?:/))
          return new e6.JsonRpcProvider(e);
        if (
          ("string" == typeof e && e.match(/^wss?:/)) ||
          (e && "function" == typeof e.send && "function" == typeof e.close)
        )
          return new tM(e);
        let r = null;
        try {
          r = e3.Network.from(e);
        } catch (e) {}
        let c = [];
        if (
          (a("publicPolygon") &&
            r &&
            ("matic" === r.name
              ? c.push(
                  new e6.JsonRpcProvider("https://polygon-rpc.com/", r, {
                    staticNetwork: r,
                  })
                )
              : "matic-amoy" === r.name &&
                c.push(
                  new e6.JsonRpcProvider(
                    "https://rpc-amoy.polygon.technology/",
                    r,
                    { staticNetwork: r }
                  )
                )),
          a("alchemy"))
        )
          try {
            c.push(new te(e, t.alchemy));
          } catch (e) {}
        if (a("ankr") && null != t.ankr)
          try {
            c.push(new e4(e, t.ankr));
          } catch (e) {}
        if (a("chainstack"))
          try {
            c.push(new tr(e, t.chainstack));
          } catch (e) {}
        if (a("cloudflare"))
          try {
            c.push(new ts(e));
          } catch (e) {}
        if (a("etherscan"))
          try {
            c.push(new tm(e, t.etherscan));
          } catch (e) {}
        if (a("infura"))
          try {
            let a,
              r = t.infura;
            "object" == typeof r && ((a = r.projectSecret), (r = r.projectId)),
              c.push(new tW(e, r, a));
          } catch (e) {}
        if (a("quicknode"))
          try {
            let a = t.quicknode;
            c.push(new tz(e, a));
          } catch (e) {}
        if (
          ((0, B.assert)(
            c.length,
            "unsupported default network",
            "UNSUPPORTED_OPERATION",
            { operation: "getDefaultProvider" }
          ),
          1 === c.length)
        )
          return c[0];
        let s = Math.floor(c.length / 2);
        return (
          s > 2 && (s = 2),
          r && -1 !== ao.indexOf(r.name) && (s = 1),
          t && t.quorum && (s = t.quorum),
          new ac(c, void 0, { quorum: s })
        );
      }
      var ab = e.i(706747),
        al = e.i(999686),
        au = e.i(57882),
        ah = al,
        ap = new WeakMap(),
        ag = new WeakMap();
      class am extends ah.AbstractSigner {
        async getAddress() {
          return this.signer.getAddress();
        }
        connect(e) {
          return new am(this.signer.connect(e));
        }
        async getNonce(e) {
          if ("pending" === e) {
            null == (0, tn._)(this, ap) &&
              (0, tx._)(this, ap, super.getNonce("pending"));
            let e = (0, tn._)(this, ag);
            return (await (0, tn._)(this, ap)) + e;
          }
          return super.getNonce(e);
        }
        increment() {
          (0, au._)(this, ag).value++;
        }
        reset() {
          (0, tx._)(this, ag, 0), (0, tx._)(this, ap, null);
        }
        async sendTransaction(e) {
          let t = this.getNonce("pending");
          return (
            this.increment(),
            ((e = await this.signer.populateTransaction(e)).nonce = await t),
            await this.signer.sendTransaction(e)
          );
        }
        signTransaction(e) {
          return this.signer.signTransaction(e);
        }
        signMessage(e) {
          return this.signer.signMessage(e);
        }
        signTypedData(e, t, a) {
          return this.signer.signTypedData(e, t, a);
        }
        constructor(e) {
          super(e.provider),
            (0, I._)(this, "signer", void 0),
            (0, ti._)(this, ap, { writable: !0, value: void 0 }),
            (0, ti._)(this, ag, { writable: !0, value: void 0 }),
            (0, O.defineProperties)(this, { signer: e }),
            (0, tx._)(this, ap, null),
            (0, tx._)(this, ag, 0);
        }
      }
      var ay = tf,
        aw = e6,
        av = e.i(815751),
        ak = e6;
      class aA extends ak.JsonRpcProvider {
        _getProvider(e) {
          try {
            return new aA(e, this.apiKey);
          } catch (e) {}
          return super._getProvider(e);
        }
        isCommunityResource() {
          return null === this.apiKey;
        }
        getRpcRequest(e) {
          let t = super.getRpcRequest(e);
          return (
            t &&
              "eth_estimateGas" === t.method &&
              1 == t.args.length &&
              ((t.args = t.args.slice()), t.args.push("latest")),
            t
          );
        }
        getRpcError(e, t) {
          let a = t ? t.error : null;
          if (a && -32015 === a.code && !(0, o.isHexString)(a.data || "", !0)) {
            let e = {
                "assert(false)": "01",
                "arithmetic underflow or overflow": "11",
                "division or modulo by zero": "12",
                "out-of-bounds array access; popping on an empty array": "31",
                "out-of-bounds access of an array or bytesN": "32",
              },
              t = "";
            "VM execution error." === a.message
              ? (t = e[a.data] || "")
              : e[a.message || ""] && (t = e[a.message || ""]),
              t &&
                ((a.message += " (reverted: ".concat(a.data, ")")),
                (a.data =
                  "0x4e487b7100000000000000000000000000000000000000000000000000000000000000" +
                  t));
          } else
            a &&
              -32e3 === a.code &&
              "wrong transaction nonce" === a.message &&
              (a.message += " (nonce too low)");
          return super.getRpcError(e, t);
        }
        static getRequest(e) {
          let t = new e1.FetchRequest(
            (function (e) {
              switch (e) {
                case "mainnet":
                  return "https://eth.blockscout.com/api/eth-rpc";
                case "sepolia":
                  return "https://eth-sepolia.blockscout.com/api/eth-rpc";
                case "holesky":
                  return "https://eth-holesky.blockscout.com/api/eth-rpc";
                case "classic":
                  return "https://etc.blockscout.com/api/eth-rpc";
                case "arbitrum":
                  return "https://arbitrum.blockscout.com/api/eth-rpc";
                case "base":
                  return "https://base.blockscout.com/api/eth-rpc";
                case "base-sepolia":
                  return "https://base-sepolia.blockscout.com/api/eth-rpc";
                case "matic":
                  return "https://polygon.blockscout.com/api/eth-rpc";
                case "optimism":
                  return "https://optimism.blockscout.com/api/eth-rpc";
                case "optimism-sepolia":
                  return "https://optimism-sepolia.blockscout.com/api/eth-rpc";
                case "xdai":
                  return "https://gnosis.blockscout.com/api/eth-rpc";
              }
              (0, B.assertArgument)(!1, "unsupported network", "network", e);
            })(e.name)
          );
          return (t.allowGzip = !0), t;
        }
        constructor(e, t) {
          null == e && (e = "mainnet");
          let a = e3.Network.from(e);
          null == t && (t = null),
            super(aA.getRequest(a), a, { staticNetwork: a }),
            (0, I._)(this, "apiKey", void 0),
            (0, O.defineProperties)(this, { apiKey: t });
        }
      }
      var aE = e6;
      let aR = "62e1ad51b37b8e00394bda3b";
      class aN extends aE.JsonRpcProvider {
        _getProvider(e) {
          try {
            return new aN(e, this.applicationId, this.applicationSecret);
          } catch (e) {}
          return super._getProvider(e);
        }
        static getRequest(e, t, a) {
          null == t && (t = aR);
          let r = new e1.FetchRequest(
            "https://"
              .concat(
                (function (e) {
                  switch (e) {
                    case "mainnet":
                      return "eth-mainnet.gateway.pokt.network";
                    case "goerli":
                      return "eth-goerli.gateway.pokt.network";
                    case "matic":
                      return "poly-mainnet.gateway.pokt.network";
                    case "matic-mumbai":
                      return "polygon-mumbai-rpc.gateway.pokt.network";
                  }
                  (0, B.assertArgument)(
                    !1,
                    "unsupported network",
                    "network",
                    e
                  );
                })(e.name),
                "/v1/lb/"
              )
              .concat(t)
          );
          return (
            (r.allowGzip = !0),
            a && r.setCredentials("", a),
            t === aR &&
              (r.retryFunc = async (e, t, a) => (e5("PocketProvider"), !0)),
            r
          );
        }
        isCommunityResource() {
          return this.applicationId === aR;
        }
        constructor(e, t, a) {
          null == e && (e = "mainnet");
          let r = e3.Network.from(e);
          null == t && (t = aR),
            null == a && (a = null),
            super(aN.getRequest(r, t, a), r, { staticNetwork: r }),
            (0, I._)(this, "applicationId", void 0),
            (0, I._)(this, "applicationSecret", void 0),
            (0, O.defineProperties)(this, {
              applicationId: t,
              applicationSecret: a,
            });
        }
      }
      let aP = void 0;
      var aT = e.i(622480),
        a_ = e3,
        aS = tb,
        aC = td,
        aI = e.i(292420),
        aO = eW,
        aB = to,
        aU = e.i(307750),
        aD = e.i(665212),
        aF = o,
        aM = O,
        aL = B,
        aK = e.i(82166),
        aW = e1,
        aq = e.i(30351),
        aG = eG,
        az = e.i(358271),
        aV = f,
        aJ = e.i(97290),
        a$ = eq;
      function aj(e) {
        let t = (0, o.getBytes)(e, "randomBytes");
        (t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128);
        let a = (0, o.hexlify)(t);
        return [
          a.substring(2, 10),
          a.substring(10, 14),
          a.substring(14, 18),
          a.substring(18, 22),
          a.substring(22, 34),
        ].join("-");
      }
      let aH = " !#$%&'()*+,-./<=>?@[]^_`{|}~",
        aY = /^[a-z]*$/i;
      function aZ(e, t) {
        let a = 97;
        return e.reduce(
          (e, r) => (
            r === t
              ? a++
              : r.match(aY)
              ? e.push(String.fromCharCode(a) + r)
              : ((a = 97), e.push(r)),
            e
          ),
          []
        );
      }
      function aX(e) {
        return (
          (0, B.assertArgument)(
            "0" === e[0],
            "unsupported auwl data",
            "data",
            e
          ),
          (function (e, t) {
            for (let a = aH.length - 1; a >= 0; a--)
              e = e.split(aH[a]).join(t.substring(2 * a, 2 * a + 2));
            let a = [],
              r = e.replace(/(:|([0-9])|([A-Z][a-z]*))/g, (e, t, r, c) => {
                if (r) for (let e = parseInt(r); e >= 0; e--) a.push(";");
                else a.push(t.toLowerCase());
                return "";
              });
            if (r) throw Error("leftovers: ".concat(JSON.stringify(r)));
            return aZ(aZ(a, ";"), ":");
          })(e.substring(1 + 2 * aH.length), e.substring(1, 1 + 2 * aH.length))
        );
      }
      class aQ {
        split(e) {
          return e.toLowerCase().split(/\s+/g);
        }
        join(e) {
          return e.join(" ");
        }
        constructor(e) {
          (0, I._)(this, "locale", void 0),
            (0, O.defineProperties)(this, { locale: e });
        }
      }
      var a0 = new WeakMap(),
        a1 = new WeakMap(),
        a2 = new WeakMap(),
        a5 = new WeakSet();
      class a3 extends aQ {
        get _data() {
          return (0, tn._)(this, a0);
        }
        _decodeWords() {
          return aX((0, tn._)(this, a0));
        }
        getWord(e) {
          let t = (0, tV._)(this, a5, a6).call(this);
          return (
            (0, B.assertArgument)(
              e >= 0 && e < t.length,
              "invalid word index: ".concat(e),
              "index",
              e
            ),
            t[e]
          );
        }
        getWordIndex(e) {
          return (0, tV._)(this, a5, a6).call(this).indexOf(e);
        }
        constructor(e, t, a) {
          super(e),
            (0, tJ._)(this, a5),
            (0, ti._)(this, a0, { writable: !0, value: void 0 }),
            (0, ti._)(this, a1, { writable: !0, value: void 0 }),
            (0, ti._)(this, a2, { writable: !0, value: void 0 }),
            (0, tx._)(this, a0, t),
            (0, tx._)(this, a1, a),
            (0, tx._)(this, a2, null);
        }
      }
      function a6() {
        if (null == (0, tn._)(this, a2)) {
          let e = this._decodeWords();
          if ((0, eL.id)(e.join("\n") + "\n") !== (0, tn._)(this, a1))
            throw Error("BIP39 Wordlist for ".concat(this.locale, " FAILED"));
          (0, tx._)(this, a2, e);
        }
        return (0, tn._)(this, a2);
      }
      let a8 = null;
      class a4 extends a3 {
        static wordlist() {
          return null == a8 && (a8 = new a4()), a8;
        }
        constructor() {
          super(
            "en",
            "0erleonalorenseinceregesticitStanvetearctssi#ch2Athck&tneLl0And#Il.yLeOutO=S|S%b/ra@SurdU'0Ce[Cid|CountCu'Hie=IdOu,-Qui*Ro[TT]T%T*[Tu$0AptDD-tD*[Ju,M.UltV<)Vi)0Rob-0FairF%dRaid0A(EEntRee0Ead0MRRp%tS!_rmBumCoholErtI&LLeyLowMo,O}PhaReadySoT Ways0A>urAz(gOngOuntU'd0Aly,Ch%Ci|G G!GryIm$K!Noun)Nu$O` Sw T&naTiqueXietyY1ArtOlogyPe?P!Pro=Ril1ChCt-EaEnaGueMMedM%MyOundR<+Re,Ri=RowTTefa@Ti,Tw%k0KPe@SaultSetSi,SumeThma0H!>OmTa{T&dT.udeTra@0Ct]D.Gu,NtTh%ToTumn0Era+OcadoOid0AkeA*AyEsomeFulKw?d0Is:ByChel%C#D+GL<)Lc#y~MbooN<aNn RRelyRga(R*lSeS-SketTt!3A^AnAutyCau'ComeEfF%eG(Ha=H(dLie=LowLtN^Nef./TrayTt Twe&Y#d3Cyc!DKeNdOlogyRdR`Tt _{AdeAmeAnketA,EakE[IndOodO[omOu'UeUrUsh_rdAtDyIlMbNeNusOkO,Rd R(gRrowSsTtomUn)XY_{etA(AndA[A=EadEezeI{Id+IefIghtIngIskOccoliOk&OnzeOomO` OwnUsh2Bb!DdyD+tFf$oIldLbLkL!tNd!Nk Rd&Rg R,SS(e[SyTt Y Zz:Bba+B(B!CtusGeKe~LmM aMpNN$N)lNdyNn#NoeNvasNy#Pab!P.$Pta(RRb#RdRgoRpetRryRtSeShS(o/!Su$TT$ogT^Teg%yTt!UghtU'Ut]Ve3Il(gL yM|NsusNturyRe$Rta(_irAlkAmp]An+AosApt Ar+A'AtEapE{Ee'EfErryE,I{&IefIldIm}yOi)Oo'R#-U{!UnkUrn0G?Nnam#Rc!Tiz&TyVil_imApArifyAwAyE<ErkEv I{I|IffImbIn-IpO{OgO'O`OudOwnUbUmpU, Ut^_^A,C#utDeFfeeIlInL!@L%LumnMb(eMeMf%tM-Mm#Mp<yNc tNdu@NfirmNg*[N}@Nsid NtrolNv()OkOlPp PyR$ReRnR*@/Tt#U^UntryUp!Ur'Us(V Yo>_{Ad!AftAmA}AshAt AwlAzyEamEd.EekEwI{etImeIspIt-OpO[Ou^OwdUci$UelUi'Umb!Un^UshYY,$2BeLtu*PPbo?dRiousRr|Rta(R=Sh]/omTe3C!:DMa+MpN)Ng R(gShUght WnY3AlBa>BrisCadeCemb CideCl(eC%a>C*a'ErF&'F(eFyG*eLayLiv M<dMi'Ni$Nti,NyP?tP&dPos.P`PutyRi=ScribeS tSignSkSpair/royTailTe@VelopVi)Vo>3AgramAlAm#dAryCeE'lEtFf G.$Gn.yLemmaNn NosaurRe@RtSag*eScov Sea'ShSmi[S%d Splay/<)V tVideV%)Zzy5Ct%Cum|G~Lph(Ma(Na>NkeyN%OrSeUb!Ve_ftAg#AmaA,-AwEamE[IftIllInkIpI=OpUmY2CkMbNeR(g/T^Ty1Arf1Nam-:G G!RlyRnR`Sily/Sy1HoOlogyOnomy0GeItUca>1F%t0G1GhtTh 2BowD E@r-Eg<tEm|Eph<tEvat%I>Se0B?kBodyBra)Er+Ot]PloyPow Pty0Ab!A@DD![D%'EmyErgyF%)Ga+G(eH<)JoyLi,OughR-hRollSu*T Ti*TryVelope1Isode0U$Uip0AA'OdeOs]R%Upt0CapeSayS&)Ta>0Ern$H-s1Id&)IlOkeOl=1A@Amp!Ce[Ch<+C.eCludeCu'Ecu>Erci'Hau,Hib.I!I,ItOt-P<dPe@Pi*Pla(Po'P*[T&dTra0EEbrow:Br-CeCultyDeIntI`~L'MeMilyMousNNcyNtasyRmSh]TT$Th TigueUltV%.e3Atu*Bru?yD $EEdElMa!N)/iv$T^V W3B Ct]EldGu*LeLmLt N$NdNeNg NishReRmR,Sc$ShTT}[X_gAmeAshAtAv%EeIghtIpOatO{O%Ow UidUshY_mCusGIlLd~owOdOtR)Re,R+tRkRtu}RumRw?dSsil/ UndX_gi!AmeEqu|EshI&dIn+OgOntO,OwnOz&U.2ElNNnyRna)RyTu*:D+tInLaxy~ yMePRa+Rba+Rd&Rl-Rm|SSpTeTh U+Ze3N $NiusN*Nt!Nu(e/u*2O,0AntFtGg!Ng RaffeRlVe_dAn)A*A[IdeImp'ObeOomOryO=OwUe_tDde[LdOdO'RillaSpelSsipV nWn_bA)A(AntApeA[Av.yEatE&IdIefItOc yOupOwUnt_rdE[IdeIltIt?N3M:B.IrLfMm M, NdPpyRb%RdRshR=,TVeWkZ?d3AdAl`ArtAvyD+hogIght~oLmetLpNRo3Dd&Gh~NtPRe/%y5BbyCkeyLdLeLiday~owMeNeyOdPeRnRr%R'Sp.$/TelUrV 5BGeM<Mb!M%Nd*dNgryNtRd!RryRtSb<d3Brid:1EOn0EaEntifyLe2N%e4LLeg$L}[0A+Ita>M&'Mu}Pa@Po'Pro=Pul'0ChCludeComeC*a'DexD-a>Do%Du,ryF<tFl-tF%mHa!H .Iti$Je@JuryMa>N Noc|PutQuiryS<eSe@SideSpi*/$lTa@T e,ToVe,V.eVol=3On0L<dOla>Sue0Em1Ory:CketGu?RZz3AlousAns~yWel9BInKeUr}yY5D+I)MpNg!Ni%Nk/:Ng?oo3EnEpT^upY3CkDD}yNdNgdomSsTT^&TeTt&Wi4EeIfeO{Ow:BBelB%Dd DyKeMpNgua+PtopR+T T(UghUndryVaWWnWsu.Y Zy3Ad AfArnA=Ctu*FtGG$G&dIsu*M#NdNg`NsOp?dSs#Tt Vel3ArB tyBr?yC&'FeFtGhtKeMbM.NkOnQuid/Tt!VeZ?d5AdAnB, C$CkG-NelyNgOpTt yUdUn+VeY$5CkyGga+Mb N?N^Xury3R-s:Ch(eDG-G}tIdIlInJ%KeMm$NNa+Nda>NgoNs]Nu$P!Rb!R^Rg(R(eRketRria+SkSs/ T^T i$ThTrixTt XimumZe3AdowAnAsu*AtCh<-D$DiaLodyLtMb M%yNt]NuRcyR+R.RryShSsa+T$Thod3Dd!DnightLk~]M-NdNimumN%Nu>Rac!Rr%S ySs/akeXXedXtu*5Bi!DelDifyMM|N.%NkeyN, N`OnR$ReRn(gSqu.oTh T]T%Unta(U'VeVie5ChFf(LeLtiplySc!SeumShroomS-/Tu$3Self/ yTh:I=MePk(Rrow/yT]Tu*3ArCkEdGati=G!@I` PhewR=/TTw%kUtr$V WsXt3CeGht5B!I'M(eeOd!Rm$R`SeTab!TeTh(gTi)VelW5C!?Mb R'T:K0EyJe@Li+Scu*S =Ta(Vious0CurE<Tob 0Or1FF Fi)T&2L1Ay0DI=Ymp-0It0CeEI#L(eLy1EnEraIn]Po'T]1An+B.Ch?dD D(?yG<I|Ig($Ph<0Tr-h0H 0Tdo%T TputTside0AlEnEr0NN 0Yg&0/ 0O}:CtDd!GeIrLa)LmNdaNelN-N` P RadeR|RkRrotRtySsT^ThTi|TrolTt nU'VeYm|3A)AnutArAs<tL-<NN$tyNcilOp!Pp Rfe@Rm.Rs#T2O}OtoRa'Ys-$0AnoCn-Ctu*E)GGe#~LotNkO} Pe/olT^Zza_)A}tA,-A>AyEa'Ed+U{UgUn+2EmEtIntL?LeLi)NdNyOlPul?Rt]S.]Ssib!/TatoTt yV tyWd W _@i)Ai'Ed-tEf Epa*Es|EttyEv|I)IdeIm?yIntI%.yIs#Iva>IzeOb!mO)[Odu)Of.OgramOje@Omo>OofOp tyOsp O>@OudOvide2Bl-Dd(g~LpL'Mpk(N^PilPpyR^a'R.yRpo'R'ShTZz!3Ramid:99Al.yAntumArt E,]I{ItIzO>:Bb.Cco#CeCkD?DioIlInI'~yMpN^NdomN+PidReTeTh V&WZ%3AdyAlAs#BelBuildC$lCei=CipeC%dCyc!Du)F!@F%mFu'G]G*tGul?Je@LaxLea'LiefLyMa(Memb M(dMo=Nd NewNtOp&PairPeatPla)P%tQui*ScueSemb!Si,Sour)Sp#'SultTi*T*atTurnUn]Ve$ViewW?d2Y`m0BBb#CeChDeD+F!GhtGidNgOtPp!SkTu$V$V 5AdA,BotBu,CketM<)OfOkieOmSeTa>UghUndU>Y$5Bb DeGLeNNwayR$:DDd!D}[FeIlLadLm#L#LtLu>MeMp!NdTisfyToshiU)Usa+VeY1A!AnA*Att E}HemeHoolI&)I[%sOrp]OutRapRe&RiptRub1AAr^As#AtC#dC*tCt]Cur.yEdEkGm|Le@~M(?Ni%N'Nt&)RiesRvi)Ss]Tt!TupV&_dowAftAllowA*EdEllEriffIeldIftI}IpIv O{OeOotOpOrtOuld O=RimpRugUff!Y0Bl(gCkDeE+GhtGnL|Lk~yLv Mil?Mp!N)NgR&/ Tua>XZe1A>Et^IIllInIrtUll0AbAmEepEnd I)IdeIghtImOg<OtOwUsh0AllArtI!OkeOo`0A{AkeApIffOw0ApCc Ci$CkDaFtL?Ldi LidLut]L=Me#eNgOnRryRtUlUndUpUr)U`0A)A*Ati$AwnEakEci$EedEllEndH eI)Id IkeInIr.L.OilOns%O#OrtOtRayReadR(gY0Ua*UeezeUir*l_b!AdiumAffA+AirsAmpAndArtA>AyEakEelEmEpE*oI{IllIngO{Oma^O}OolOryO=Ra>gyReetRikeR#gRugg!Ud|UffUmb!Y!0Bje@Bm.BwayC)[ChDd&Ff G?G+,ItMm NNnyN'tP PplyP*meReRfa)R+Rpri'RroundR=ySpe@/a(1AllowAmpApArmE?EetIftImIngIt^Ord1MbolMptomRup/em:B!Ck!GIlL|LkNkPeR+tSk/eTtooXi3A^Am~NN<tNnisNtRm/Xt_nkAtEmeEnE%yE*EyIngIsOughtReeRi=RowUmbUnd 0CketDeG LtMb MeNyPRedSsueT!5A,BaccoDayDdl EGe` I!tK&MatoM%rowNeNgueNightOlO`PP-Pp!R^RnadoRtoi'SsT$Uri,W?dW WnY_{AdeAff-Ag-A(Ansf ApAshA=lAyEatEeEndI$IbeI{Igg ImIpOphyOub!U{UeUlyUmpetU,U`Y2BeIt]Mb!NaN}lRkeyRnRt!1El=EntyI)InI,O1PeP-$:5Ly5B*lla0Ab!Awa*C!Cov D DoFairFoldHappyIf%mIqueItIv 'KnownLo{TilUsu$Veil1Da>GradeHoldOnP Set1B<Ge0A+EEdEfulE![U$0Il.y:C<tCuumGueLidL!yL=NNishP%Rious/Ult3H-!L=tNd%Ntu*NueRbRifyRs]RyS'lT <3Ab!Br<tCiousCt%yDeoEw~a+Nta+Ol(Rtu$RusSaS.Su$T$Vid5C$I)IdLc<oLumeTeYa+:GeG#ItLk~LnutNtRfa*RmRri%ShSp/eT VeY3Al`Ap#ArA'lA` BDd(gEk&dIrdLcome/T_!AtEatEelEnE*IpIsp 0DeD`FeLd~NNdowNeNgNkNn Nt ReSdomSeShT}[5LfM<Nd OdOlRdRkRldRryR`_pE{E,!I,I>Ong::Rd3Ar~ow9UUngU`:3BraRo9NeO",
            "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60"
          );
        }
      }
      function a9(e) {
        return (((1 << e) - 1) << (8 - e)) & 255;
      }
      function a7(e, t) {
        (0, B.assertNormalize)("NFKD"), null == t && (t = a4.wordlist());
        let a = t.split(e);
        (0, B.assertArgument)(
          a.length % 3 == 0 && a.length >= 12 && a.length <= 24,
          "invalid mnemonic length",
          "mnemonic",
          "[ REDACTED ]"
        );
        let r = new Uint8Array(Math.ceil((11 * a.length) / 8)),
          c = 0;
        for (let e = 0; e < a.length; e++) {
          let s = t.getWordIndex(a[e].normalize("NFKD"));
          (0, B.assertArgument)(
            s >= 0,
            "invalid mnemonic word at index ".concat(e),
            "mnemonic",
            "[ REDACTED ]"
          );
          for (let e = 0; e < 11; e++)
            s & (1 << (10 - e)) && (r[c >> 3] |= 1 << (7 - (c % 8))), c++;
        }
        let s = (32 * a.length) / 3,
          n = a9(a.length / 3),
          i = (0, o.getBytes)((0, eu.sha256)(r.slice(0, s / 8)))[0] & n;
        return (
          (0, B.assertArgument)(
            i === (r[r.length - 1] & n),
            "invalid mnemonic checksum",
            "mnemonic",
            "[ REDACTED ]"
          ),
          (0, o.hexlify)(r.slice(0, s / 8))
        );
      }
      function re(e, t) {
        (0, B.assertArgument)(
          e.length % 4 == 0 && e.length >= 16 && e.length <= 32,
          "invalid entropy size",
          "entropy",
          "[ REDACTED ]"
        ),
          null == t && (t = a4.wordlist());
        let a = [0],
          r = 11;
        for (let t = 0; t < e.length; t++)
          r > 8
            ? ((a[a.length - 1] <<= 8), (a[a.length - 1] |= e[t]), (r -= 8))
            : ((a[a.length - 1] <<= r),
              (a[a.length - 1] |= e[t] >> (8 - r)),
              a.push(e[t] & (((1 << (8 - r)) - 1) & 255)),
              (r += 3));
        let c = e.length / 4,
          s = parseInt((0, eu.sha256)(e).substring(2, 4), 16) & a9(c);
        return (
          (a[a.length - 1] <<= c),
          (a[a.length - 1] |= s >> (8 - c)),
          t.join(a.map((e) => t.getWord(e)))
        );
      }
      let rt = {};
      class ra {
        computeSeed() {
          let e = (0, f.toUtf8Bytes)("mnemonic" + this.password, "NFKD");
          return em(
            (0, f.toUtf8Bytes)(this.phrase, "NFKD"),
            e,
            2048,
            64,
            "sha512"
          );
        }
        static fromPhrase(e, t, a) {
          let r = a7(e, a);
          return (e = re((0, o.getBytes)(r), a)), new ra(rt, r, e, t, a);
        }
        static fromEntropy(e, t, a) {
          let r = (0, o.getBytes)(e, "entropy"),
            c = re(r, a);
          return new ra(rt, (0, o.hexlify)(r), c, t, a);
        }
        static entropyToPhrase(e, t) {
          return re((0, o.getBytes)(e, "entropy"), t);
        }
        static phraseToEntropy(e, t) {
          return a7(e, t);
        }
        static isValidMnemonic(e, t) {
          try {
            return a7(e, t), !0;
          } catch (e) {}
          return !1;
        }
        constructor(e, t, a, r, c) {
          (0, I._)(this, "phrase", void 0),
            (0, I._)(this, "password", void 0),
            (0, I._)(this, "wordlist", void 0),
            (0, I._)(this, "entropy", void 0),
            null == r && (r = ""),
            null == c && (c = a4.wordlist()),
            (0, B.assertPrivate)(e, rt, "Mnemonic"),
            (0, O.defineProperties)(this, {
              phrase: a,
              password: r,
              wordlist: c,
              entropy: t,
            });
        }
      }
      var rr = al,
        rc = new WeakMap();
      class rs extends rr.AbstractSigner {
        get signingKey() {
          return (0, tn._)(this, rc);
        }
        get privateKey() {
          return this.signingKey.privateKey;
        }
        async getAddress() {
          return this.address;
        }
        connect(e) {
          return new rs((0, tn._)(this, rc), e);
        }
        async signTransaction(e) {
          e = (0, ab.copyRequest)(e);
          let { to: t, from: a } = await (0, O.resolveProperties)({
            to: e.to ? (0, v.resolveAddress)(e.to, this) : void 0,
            from: e.from ? (0, v.resolveAddress)(e.from, this) : void 0,
          });
          null != t && (e.to = t),
            null != a && (e.from = a),
            null != e.from &&
              ((0, B.assertArgument)(
                (0, y.getAddress)(e.from) === this.address,
                "transaction from address mismatch",
                "tx.from",
                e.from
              ),
              delete e.from);
          let r = to.Transaction.from(e);
          return (
            (r.signature = this.signingKey.sign(r.unsignedHash)), r.serialized
          );
        }
        async signMessage(e) {
          return this.signMessageSync(e);
        }
        signMessageSync(e) {
          return this.signingKey.sign(eJ(e)).serialized;
        }
        authorizeSync(e) {
          (0, B.assertArgument)(
            "string" == typeof e.address,
            "invalid address for authorizeSync",
            "auth.address",
            e
          );
          let t = this.signingKey.sign(ez(e));
          return Object.assign(
            {},
            {
              address: (0, y.getAddress)(e.address),
              nonce: (0, eG.getBigInt)(e.nonce || 0),
              chainId: (0, eG.getBigInt)(e.chainId || 0),
            },
            { signature: t }
          );
        }
        async authorize(e) {
          return (
            (e = Object.assign({}, e, {
              address: await (0, v.resolveAddress)(e.address, this),
            })),
            this.authorizeSync(await this.populateAuthorization(e))
          );
        }
        async signTypedData(e, t, a) {
          let r = await e0.TypedDataEncoder.resolveNames(e, t, a, async (e) => {
            (0, B.assert)(
              null != this.provider,
              "cannot resolve ENS names without a provider",
              "UNSUPPORTED_OPERATION",
              { operation: "resolveName", info: { name: e } }
            );
            let t = await this.provider.resolveName(e);
            return (
              (0, B.assert)(
                null != t,
                "unconfigured ENS name",
                "UNCONFIGURED_NAME",
                { value: e }
              ),
              t
            );
          });
          return this.signingKey.sign(
            e0.TypedDataEncoder.hash(r.domain, t, r.value)
          ).serialized;
        }
        constructor(e, t) {
          super(t),
            (0, I._)(this, "address", void 0),
            (0, ti._)(this, rc, { writable: !0, value: void 0 }),
            (0, B.assertArgument)(
              e && "function" == typeof e.sign,
              "invalid private key",
              "privateKey",
              "[ REDACTED ]"
            ),
            (0, tx._)(this, rc, e);
          let a = (0, eW.computeAddress)(this.signingKey.publicKey);
          (0, O.defineProperties)(this, { address: a });
        }
      }
      var rn = e.i(819968),
        ri = al,
        rx = function (e, t, a, r) {
          if ("a" === a && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === a ? r : "a" === a ? r.call(e) : r ? r.value : t.get(e);
        },
        rd = function (e, t, a, r, c) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !c)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !c : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? c.call(e, a) : c ? (c.value = a) : t.set(e, a), a;
        };
      let ro = { 16: 10, 24: 12, 32: 14 },
        rf = [
          1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94,
          188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145,
        ],
        rb = [
          99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171,
          118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156,
          164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241,
          113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226,
          235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179,
          41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190,
          57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2,
          127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182,
          218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196,
          167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136,
          70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92,
          194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213,
          78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28,
          166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181,
          102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248,
          152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140,
          161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22,
        ],
        rl = [
          82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215,
          251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222,
          233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66,
          250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73,
          109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164,
          92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94,
          21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10,
          247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2,
          193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234,
          151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173,
          53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29,
          41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75,
          198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221,
          168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81,
          127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160,
          224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97,
          23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125,
        ],
        ru = [
          0xc66363a5, 0xf87c7c84, 0xee777799, 0xf67b7b8d, 0xfff2f20d,
          0xd66b6bbd, 0xde6f6fb1, 0x91c5c554, 0x60303050, 0x2010103, 0xce6767a9,
          0x562b2b7d, 0xe7fefe19, 0xb5d7d762, 0x4dababe6, 0xec76769a,
          0x8fcaca45, 0x1f82829d, 0x89c9c940, 0xfa7d7d87, 0xeffafa15,
          0xb25959eb, 0x8e4747c9, 0xfbf0f00b, 0x41adadec, 0xb3d4d467,
          0x5fa2a2fd, 0x45afafea, 0x239c9cbf, 0x53a4a4f7, 0xe4727296,
          0x9bc0c05b, 0x75b7b7c2, 0xe1fdfd1c, 0x3d9393ae, 0x4c26266a,
          0x6c36365a, 0x7e3f3f41, 0xf5f7f702, 0x83cccc4f, 0x6834345c,
          0x51a5a5f4, 0xd1e5e534, 0xf9f1f108, 0xe2717193, 0xabd8d873,
          0x62313153, 0x2a15153f, 0x804040c, 0x95c7c752, 0x46232365, 0x9dc3c35e,
          0x30181828, 0x379696a1, 0xa05050f, 0x2f9a9ab5, 0xe070709, 0x24121236,
          0x1b80809b, 0xdfe2e23d, 0xcdebeb26, 0x4e272769, 0x7fb2b2cd,
          0xea75759f, 0x1209091b, 0x1d83839e, 0x582c2c74, 0x341a1a2e,
          0x361b1b2d, 0xdc6e6eb2, 0xb45a5aee, 0x5ba0a0fb, 0xa45252f6,
          0x763b3b4d, 0xb7d6d661, 0x7db3b3ce, 0x5229297b, 0xdde3e33e,
          0x5e2f2f71, 0x13848497, 0xa65353f5, 0xb9d1d168, 0, 0xc1eded2c,
          0x40202060, 0xe3fcfc1f, 0x79b1b1c8, 0xb65b5bed, 0xd46a6abe,
          0x8dcbcb46, 0x67bebed9, 0x7239394b, 0x944a4ade, 0x984c4cd4,
          0xb05858e8, 0x85cfcf4a, 0xbbd0d06b, 0xc5efef2a, 0x4faaaae5,
          0xedfbfb16, 0x864343c5, 0x9a4d4dd7, 0x66333355, 0x11858594,
          0x8a4545cf, 0xe9f9f910, 0x4020206, 0xfe7f7f81, 0xa05050f0, 0x783c3c44,
          0x259f9fba, 0x4ba8a8e3, 0xa25151f3, 0x5da3a3fe, 0x804040c0, 0x58f8f8a,
          0x3f9292ad, 0x219d9dbc, 0x70383848, 0xf1f5f504, 0x63bcbcdf,
          0x77b6b6c1, 0xafdada75, 0x42212163, 0x20101030, 0xe5ffff1a,
          0xfdf3f30e, 0xbfd2d26d, 0x81cdcd4c, 0x180c0c14, 0x26131335,
          0xc3ecec2f, 0xbe5f5fe1, 0x359797a2, 0x884444cc, 0x2e171739,
          0x93c4c457, 0x55a7a7f2, 0xfc7e7e82, 0x7a3d3d47, 0xc86464ac,
          0xba5d5de7, 0x3219192b, 0xe6737395, 0xc06060a0, 0x19818198,
          0x9e4f4fd1, 0xa3dcdc7f, 0x44222266, 0x542a2a7e, 0x3b9090ab, 0xb888883,
          0x8c4646ca, 0xc7eeee29, 0x6bb8b8d3, 0x2814143c, 0xa7dede79,
          0xbc5e5ee2, 0x160b0b1d, 0xaddbdb76, 0xdbe0e03b, 0x64323256,
          0x743a3a4e, 0x140a0a1e, 0x924949db, 0xc06060a, 0x4824246c, 0xb85c5ce4,
          0x9fc2c25d, 0xbdd3d36e, 0x43acacef, 0xc46262a6, 0x399191a8,
          0x319595a4, 0xd3e4e437, 0xf279798b, 0xd5e7e732, 0x8bc8c843,
          0x6e373759, 0xda6d6db7, 0x18d8d8c, 0xb1d5d564, 0x9c4e4ed2, 0x49a9a9e0,
          0xd86c6cb4, 0xac5656fa, 0xf3f4f407, 0xcfeaea25, 0xca6565af,
          0xf47a7a8e, 0x47aeaee9, 0x10080818, 0x6fbabad5, 0xf0787888,
          0x4a25256f, 0x5c2e2e72, 0x381c1c24, 0x57a6a6f1, 0x73b4b4c7,
          0x97c6c651, 0xcbe8e823, 0xa1dddd7c, 0xe874749c, 0x3e1f1f21,
          0x964b4bdd, 0x61bdbddc, 0xd8b8b86, 0xf8a8a85, 0xe0707090, 0x7c3e3e42,
          0x71b5b5c4, 0xcc6666aa, 0x904848d8, 0x6030305, 0xf7f6f601, 0x1c0e0e12,
          0xc26161a3, 0x6a35355f, 0xae5757f9, 0x69b9b9d0, 0x17868691,
          0x99c1c158, 0x3a1d1d27, 0x279e9eb9, 0xd9e1e138, 0xebf8f813,
          0x2b9898b3, 0x22111133, 0xd26969bb, 0xa9d9d970, 0x78e8e89, 0x339494a7,
          0x2d9b9bb6, 0x3c1e1e22, 0x15878792, 0xc9e9e920, 0x87cece49,
          0xaa5555ff, 0x50282878, 0xa5dfdf7a, 0x38c8c8f, 0x59a1a1f8, 0x9898980,
          0x1a0d0d17, 0x65bfbfda, 0xd7e6e631, 0x844242c6, 0xd06868b8,
          0x824141c3, 0x299999b0, 0x5a2d2d77, 0x1e0f0f11, 0x7bb0b0cb,
          0xa85454fc, 0x6dbbbbd6, 0x2c16163a,
        ],
        rh = [
          0xa5c66363, 0x84f87c7c, 0x99ee7777, 0x8df67b7b, 0xdfff2f2, 0xbdd66b6b,
          0xb1de6f6f, 0x5491c5c5, 0x50603030, 0x3020101, 0xa9ce6767, 0x7d562b2b,
          0x19e7fefe, 0x62b5d7d7, 0xe64dabab, 0x9aec7676, 0x458fcaca,
          0x9d1f8282, 0x4089c9c9, 0x87fa7d7d, 0x15effafa, 0xebb25959,
          0xc98e4747, 0xbfbf0f0, 0xec41adad, 0x67b3d4d4, 0xfd5fa2a2, 0xea45afaf,
          0xbf239c9c, 0xf753a4a4, 0x96e47272, 0x5b9bc0c0, 0xc275b7b7,
          0x1ce1fdfd, 0xae3d9393, 0x6a4c2626, 0x5a6c3636, 0x417e3f3f, 0x2f5f7f7,
          0x4f83cccc, 0x5c683434, 0xf451a5a5, 0x34d1e5e5, 0x8f9f1f1, 0x93e27171,
          0x73abd8d8, 0x53623131, 0x3f2a1515, 0xc080404, 0x5295c7c7, 0x65462323,
          0x5e9dc3c3, 0x28301818, 0xa1379696, 0xf0a0505, 0xb52f9a9a, 0x90e0707,
          0x36241212, 0x9b1b8080, 0x3ddfe2e2, 0x26cdebeb, 0x694e2727,
          0xcd7fb2b2, 0x9fea7575, 0x1b120909, 0x9e1d8383, 0x74582c2c,
          0x2e341a1a, 0x2d361b1b, 0xb2dc6e6e, 0xeeb45a5a, 0xfb5ba0a0,
          0xf6a45252, 0x4d763b3b, 0x61b7d6d6, 0xce7db3b3, 0x7b522929,
          0x3edde3e3, 0x715e2f2f, 0x97138484, 0xf5a65353, 0x68b9d1d1, 0,
          0x2cc1eded, 0x60402020, 0x1fe3fcfc, 0xc879b1b1, 0xedb65b5b,
          0xbed46a6a, 0x468dcbcb, 0xd967bebe, 0x4b723939, 0xde944a4a,
          0xd4984c4c, 0xe8b05858, 0x4a85cfcf, 0x6bbbd0d0, 0x2ac5efef,
          0xe54faaaa, 0x16edfbfb, 0xc5864343, 0xd79a4d4d, 0x55663333,
          0x94118585, 0xcf8a4545, 0x10e9f9f9, 0x6040202, 0x81fe7f7f, 0xf0a05050,
          0x44783c3c, 0xba259f9f, 0xe34ba8a8, 0xf3a25151, 0xfe5da3a3,
          0xc0804040, 0x8a058f8f, 0xad3f9292, 0xbc219d9d, 0x48703838, 0x4f1f5f5,
          0xdf63bcbc, 0xc177b6b6, 0x75afdada, 0x63422121, 0x30201010,
          0x1ae5ffff, 0xefdf3f3, 0x6dbfd2d2, 0x4c81cdcd, 0x14180c0c, 0x35261313,
          0x2fc3ecec, 0xe1be5f5f, 0xa2359797, 0xcc884444, 0x392e1717,
          0x5793c4c4, 0xf255a7a7, 0x82fc7e7e, 0x477a3d3d, 0xacc86464,
          0xe7ba5d5d, 0x2b321919, 0x95e67373, 0xa0c06060, 0x98198181,
          0xd19e4f4f, 0x7fa3dcdc, 0x66442222, 0x7e542a2a, 0xab3b9090,
          0x830b8888, 0xca8c4646, 0x29c7eeee, 0xd36bb8b8, 0x3c281414,
          0x79a7dede, 0xe2bc5e5e, 0x1d160b0b, 0x76addbdb, 0x3bdbe0e0,
          0x56643232, 0x4e743a3a, 0x1e140a0a, 0xdb924949, 0xa0c0606, 0x6c482424,
          0xe4b85c5c, 0x5d9fc2c2, 0x6ebdd3d3, 0xef43acac, 0xa6c46262,
          0xa8399191, 0xa4319595, 0x37d3e4e4, 0x8bf27979, 0x32d5e7e7,
          0x438bc8c8, 0x596e3737, 0xb7da6d6d, 0x8c018d8d, 0x64b1d5d5,
          0xd29c4e4e, 0xe049a9a9, 0xb4d86c6c, 0xfaac5656, 0x7f3f4f4, 0x25cfeaea,
          0xafca6565, 0x8ef47a7a, 0xe947aeae, 0x18100808, 0xd56fbaba,
          0x88f07878, 0x6f4a2525, 0x725c2e2e, 0x24381c1c, 0xf157a6a6,
          0xc773b4b4, 0x5197c6c6, 0x23cbe8e8, 0x7ca1dddd, 0x9ce87474,
          0x213e1f1f, 0xdd964b4b, 0xdc61bdbd, 0x860d8b8b, 0x850f8a8a,
          0x90e07070, 0x427c3e3e, 0xc471b5b5, 0xaacc6666, 0xd8904848, 0x5060303,
          0x1f7f6f6, 0x121c0e0e, 0xa3c26161, 0x5f6a3535, 0xf9ae5757, 0xd069b9b9,
          0x91178686, 0x5899c1c1, 0x273a1d1d, 0xb9279e9e, 0x38d9e1e1,
          0x13ebf8f8, 0xb32b9898, 0x33221111, 0xbbd26969, 0x70a9d9d9,
          0x89078e8e, 0xa7339494, 0xb62d9b9b, 0x223c1e1e, 0x92158787,
          0x20c9e9e9, 0x4987cece, 0xffaa5555, 0x78502828, 0x7aa5dfdf,
          0x8f038c8c, 0xf859a1a1, 0x80098989, 0x171a0d0d, 0xda65bfbf,
          0x31d7e6e6, 0xc6844242, 0xb8d06868, 0xc3824141, 0xb0299999,
          0x775a2d2d, 0x111e0f0f, 0xcb7bb0b0, 0xfca85454, 0xd66dbbbb,
          0x3a2c1616,
        ],
        rp = [
          0x63a5c663, 0x7c84f87c, 0x7799ee77, 0x7b8df67b, 0xf20dfff2,
          0x6bbdd66b, 0x6fb1de6f, 0xc55491c5, 0x30506030, 0x1030201, 0x67a9ce67,
          0x2b7d562b, 0xfe19e7fe, 0xd762b5d7, 0xabe64dab, 0x769aec76,
          0xca458fca, 0x829d1f82, 0xc94089c9, 0x7d87fa7d, 0xfa15effa,
          0x59ebb259, 0x47c98e47, 0xf00bfbf0, 0xadec41ad, 0xd467b3d4,
          0xa2fd5fa2, 0xafea45af, 0x9cbf239c, 0xa4f753a4, 0x7296e472,
          0xc05b9bc0, 0xb7c275b7, 0xfd1ce1fd, 0x93ae3d93, 0x266a4c26,
          0x365a6c36, 0x3f417e3f, 0xf702f5f7, 0xcc4f83cc, 0x345c6834,
          0xa5f451a5, 0xe534d1e5, 0xf108f9f1, 0x7193e271, 0xd873abd8,
          0x31536231, 0x153f2a15, 0x40c0804, 0xc75295c7, 0x23654623, 0xc35e9dc3,
          0x18283018, 0x96a13796, 0x50f0a05, 0x9ab52f9a, 0x7090e07, 0x12362412,
          0x809b1b80, 0xe23ddfe2, 0xeb26cdeb, 0x27694e27, 0xb2cd7fb2,
          0x759fea75, 0x91b1209, 0x839e1d83, 0x2c74582c, 0x1a2e341a, 0x1b2d361b,
          0x6eb2dc6e, 0x5aeeb45a, 0xa0fb5ba0, 0x52f6a452, 0x3b4d763b,
          0xd661b7d6, 0xb3ce7db3, 0x297b5229, 0xe33edde3, 0x2f715e2f,
          0x84971384, 0x53f5a653, 0xd168b9d1, 0, 0xed2cc1ed, 0x20604020,
          0xfc1fe3fc, 0xb1c879b1, 0x5bedb65b, 0x6abed46a, 0xcb468dcb,
          0xbed967be, 0x394b7239, 0x4ade944a, 0x4cd4984c, 0x58e8b058,
          0xcf4a85cf, 0xd06bbbd0, 0xef2ac5ef, 0xaae54faa, 0xfb16edfb,
          0x43c58643, 0x4dd79a4d, 0x33556633, 0x85941185, 0x45cf8a45,
          0xf910e9f9, 0x2060402, 0x7f81fe7f, 0x50f0a050, 0x3c44783c, 0x9fba259f,
          0xa8e34ba8, 0x51f3a251, 0xa3fe5da3, 0x40c08040, 0x8f8a058f,
          0x92ad3f92, 0x9dbc219d, 0x38487038, 0xf504f1f5, 0xbcdf63bc,
          0xb6c177b6, 0xda75afda, 0x21634221, 0x10302010, 0xff1ae5ff,
          0xf30efdf3, 0xd26dbfd2, 0xcd4c81cd, 0xc14180c, 0x13352613, 0xec2fc3ec,
          0x5fe1be5f, 0x97a23597, 0x44cc8844, 0x17392e17, 0xc45793c4,
          0xa7f255a7, 0x7e82fc7e, 0x3d477a3d, 0x64acc864, 0x5de7ba5d,
          0x192b3219, 0x7395e673, 0x60a0c060, 0x81981981, 0x4fd19e4f,
          0xdc7fa3dc, 0x22664422, 0x2a7e542a, 0x90ab3b90, 0x88830b88,
          0x46ca8c46, 0xee29c7ee, 0xb8d36bb8, 0x143c2814, 0xde79a7de,
          0x5ee2bc5e, 0xb1d160b, 0xdb76addb, 0xe03bdbe0, 0x32566432, 0x3a4e743a,
          0xa1e140a, 0x49db9249, 0x60a0c06, 0x246c4824, 0x5ce4b85c, 0xc25d9fc2,
          0xd36ebdd3, 0xacef43ac, 0x62a6c462, 0x91a83991, 0x95a43195,
          0xe437d3e4, 0x798bf279, 0xe732d5e7, 0xc8438bc8, 0x37596e37,
          0x6db7da6d, 0x8d8c018d, 0xd564b1d5, 0x4ed29c4e, 0xa9e049a9,
          0x6cb4d86c, 0x56faac56, 0xf407f3f4, 0xea25cfea, 0x65afca65,
          0x7a8ef47a, 0xaee947ae, 0x8181008, 0xbad56fba, 0x7888f078, 0x256f4a25,
          0x2e725c2e, 0x1c24381c, 0xa6f157a6, 0xb4c773b4, 0xc65197c6,
          0xe823cbe8, 0xdd7ca1dd, 0x749ce874, 0x1f213e1f, 0x4bdd964b,
          0xbddc61bd, 0x8b860d8b, 0x8a850f8a, 0x7090e070, 0x3e427c3e,
          0xb5c471b5, 0x66aacc66, 0x48d89048, 0x3050603, 0xf601f7f6, 0xe121c0e,
          0x61a3c261, 0x355f6a35, 0x57f9ae57, 0xb9d069b9, 0x86911786,
          0xc15899c1, 0x1d273a1d, 0x9eb9279e, 0xe138d9e1, 0xf813ebf8,
          0x98b32b98, 0x11332211, 0x69bbd269, 0xd970a9d9, 0x8e89078e,
          0x94a73394, 0x9bb62d9b, 0x1e223c1e, 0x87921587, 0xe920c9e9,
          0xce4987ce, 0x55ffaa55, 0x28785028, 0xdf7aa5df, 0x8c8f038c,
          0xa1f859a1, 0x89800989, 0xd171a0d, 0xbfda65bf, 0xe631d7e6, 0x42c68442,
          0x68b8d068, 0x41c38241, 0x99b02999, 0x2d775a2d, 0xf111e0f, 0xb0cb7bb0,
          0x54fca854, 0xbbd66dbb, 0x163a2c16,
        ],
        rg = [
          0x6363a5c6, 0x7c7c84f8, 0x777799ee, 0x7b7b8df6, 0xf2f20dff,
          0x6b6bbdd6, 0x6f6fb1de, 0xc5c55491, 0x30305060, 0x1010302, 0x6767a9ce,
          0x2b2b7d56, 0xfefe19e7, 0xd7d762b5, 0xababe64d, 0x76769aec,
          0xcaca458f, 0x82829d1f, 0xc9c94089, 0x7d7d87fa, 0xfafa15ef,
          0x5959ebb2, 0x4747c98e, 0xf0f00bfb, 0xadadec41, 0xd4d467b3,
          0xa2a2fd5f, 0xafafea45, 0x9c9cbf23, 0xa4a4f753, 0x727296e4,
          0xc0c05b9b, 0xb7b7c275, 0xfdfd1ce1, 0x9393ae3d, 0x26266a4c,
          0x36365a6c, 0x3f3f417e, 0xf7f702f5, 0xcccc4f83, 0x34345c68,
          0xa5a5f451, 0xe5e534d1, 0xf1f108f9, 0x717193e2, 0xd8d873ab,
          0x31315362, 0x15153f2a, 0x4040c08, 0xc7c75295, 0x23236546, 0xc3c35e9d,
          0x18182830, 0x9696a137, 0x5050f0a, 0x9a9ab52f, 0x707090e, 0x12123624,
          0x80809b1b, 0xe2e23ddf, 0xebeb26cd, 0x2727694e, 0xb2b2cd7f,
          0x75759fea, 0x9091b12, 0x83839e1d, 0x2c2c7458, 0x1a1a2e34, 0x1b1b2d36,
          0x6e6eb2dc, 0x5a5aeeb4, 0xa0a0fb5b, 0x5252f6a4, 0x3b3b4d76,
          0xd6d661b7, 0xb3b3ce7d, 0x29297b52, 0xe3e33edd, 0x2f2f715e,
          0x84849713, 0x5353f5a6, 0xd1d168b9, 0, 0xeded2cc1, 0x20206040,
          0xfcfc1fe3, 0xb1b1c879, 0x5b5bedb6, 0x6a6abed4, 0xcbcb468d,
          0xbebed967, 0x39394b72, 0x4a4ade94, 0x4c4cd498, 0x5858e8b0,
          0xcfcf4a85, 0xd0d06bbb, 0xefef2ac5, 0xaaaae54f, 0xfbfb16ed,
          0x4343c586, 0x4d4dd79a, 0x33335566, 0x85859411, 0x4545cf8a,
          0xf9f910e9, 0x2020604, 0x7f7f81fe, 0x5050f0a0, 0x3c3c4478, 0x9f9fba25,
          0xa8a8e34b, 0x5151f3a2, 0xa3a3fe5d, 0x4040c080, 0x8f8f8a05,
          0x9292ad3f, 0x9d9dbc21, 0x38384870, 0xf5f504f1, 0xbcbcdf63,
          0xb6b6c177, 0xdada75af, 0x21216342, 0x10103020, 0xffff1ae5,
          0xf3f30efd, 0xd2d26dbf, 0xcdcd4c81, 0xc0c1418, 0x13133526, 0xecec2fc3,
          0x5f5fe1be, 0x9797a235, 0x4444cc88, 0x1717392e, 0xc4c45793,
          0xa7a7f255, 0x7e7e82fc, 0x3d3d477a, 0x6464acc8, 0x5d5de7ba,
          0x19192b32, 0x737395e6, 0x6060a0c0, 0x81819819, 0x4f4fd19e,
          0xdcdc7fa3, 0x22226644, 0x2a2a7e54, 0x9090ab3b, 0x8888830b,
          0x4646ca8c, 0xeeee29c7, 0xb8b8d36b, 0x14143c28, 0xdede79a7,
          0x5e5ee2bc, 0xb0b1d16, 0xdbdb76ad, 0xe0e03bdb, 0x32325664, 0x3a3a4e74,
          0xa0a1e14, 0x4949db92, 0x6060a0c, 0x24246c48, 0x5c5ce4b8, 0xc2c25d9f,
          0xd3d36ebd, 0xacacef43, 0x6262a6c4, 0x9191a839, 0x9595a431,
          0xe4e437d3, 0x79798bf2, 0xe7e732d5, 0xc8c8438b, 0x3737596e,
          0x6d6db7da, 0x8d8d8c01, 0xd5d564b1, 0x4e4ed29c, 0xa9a9e049,
          0x6c6cb4d8, 0x5656faac, 0xf4f407f3, 0xeaea25cf, 0x6565afca,
          0x7a7a8ef4, 0xaeaee947, 0x8081810, 0xbabad56f, 0x787888f0, 0x25256f4a,
          0x2e2e725c, 0x1c1c2438, 0xa6a6f157, 0xb4b4c773, 0xc6c65197,
          0xe8e823cb, 0xdddd7ca1, 0x74749ce8, 0x1f1f213e, 0x4b4bdd96,
          0xbdbddc61, 0x8b8b860d, 0x8a8a850f, 0x707090e0, 0x3e3e427c,
          0xb5b5c471, 0x6666aacc, 0x4848d890, 0x3030506, 0xf6f601f7, 0xe0e121c,
          0x6161a3c2, 0x35355f6a, 0x5757f9ae, 0xb9b9d069, 0x86869117,
          0xc1c15899, 0x1d1d273a, 0x9e9eb927, 0xe1e138d9, 0xf8f813eb,
          0x9898b32b, 0x11113322, 0x6969bbd2, 0xd9d970a9, 0x8e8e8907,
          0x9494a733, 0x9b9bb62d, 0x1e1e223c, 0x87879215, 0xe9e920c9,
          0xcece4987, 0x5555ffaa, 0x28287850, 0xdfdf7aa5, 0x8c8c8f03,
          0xa1a1f859, 0x89898009, 0xd0d171a, 0xbfbfda65, 0xe6e631d7, 0x4242c684,
          0x6868b8d0, 0x4141c382, 0x9999b029, 0x2d2d775a, 0xf0f111e, 0xb0b0cb7b,
          0x5454fca8, 0xbbbbd66d, 0x16163a2c,
        ],
        rm = [
          0x51f4a750, 0x7e416553, 0x1a17a4c3, 0x3a275e96, 0x3bab6bcb,
          0x1f9d45f1, 0xacfa58ab, 0x4be30393, 0x2030fa55, 0xad766df6,
          0x88cc7691, 0xf5024c25, 0x4fe5d7fc, 0xc52acbd7, 0x26354480,
          0xb562a38f, 0xdeb15a49, 0x25ba1b67, 0x45ea0e98, 0x5dfec0e1,
          0xc32f7502, 0x814cf012, 0x8d4697a3, 0x6bd3f9c6, 0x38f5fe7, 0x15929c95,
          0xbf6d7aeb, 0x955259da, 0xd4be832d, 0x587421d3, 0x49e06929,
          0x8ec9c844, 0x75c2896a, 0xf48e7978, 0x99583e6b, 0x27b971dd,
          0xbee14fb6, 0xf088ad17, 0xc920ac66, 0x7dce3ab4, 0x63df4a18,
          0xe51a3182, 0x97513360, 0x62537f45, 0xb16477e0, 0xbb6bae84,
          0xfe81a01c, 0xf9082b94, 0x70486858, 0x8f45fd19, 0x94de6c87,
          0x527bf8b7, 0xab73d323, 0x724b02e2, 0xe31f8f57, 0x6655ab2a,
          0xb2eb2807, 0x2fb5c203, 0x86c57b9a, 0xd33708a5, 0x302887f2,
          0x23bfa5b2, 0x2036aba, 0xed16825c, 0x8acf1c2b, 0xa779b492, 0xf307f2f0,
          0x4e69e2a1, 0x65daf4cd, 0x605bed5, 0xd134621f, 0xc4a6fe8a, 0x342e539d,
          0xa2f355a0, 0x58ae132, 0xa4f6eb75, 0xb83ec39, 0x4060efaa, 0x5e719f06,
          0xbd6e1051, 0x3e218af9, 0x96dd063d, 0xdd3e05ae, 0x4de6bd46,
          0x91548db5, 0x71c45d05, 0x406d46f, 0x605015ff, 0x1998fb24, 0xd6bde997,
          0x894043cc, 0x67d99e77, 0xb0e842bd, 0x7898b88, 0xe7195b38, 0x79c8eedb,
          0xa17c0a47, 0x7c420fe9, 0xf8841ec9, 0, 0x9808683, 0x322bed48,
          0x1e1170ac, 0x6c5a724e, 0xfd0efffb, 0xf853856, 0x3daed51e, 0x362d3927,
          0xa0fd964, 0x685ca621, 0x9b5b54d1, 0x24362e3a, 0xc0a67b1, 0x9357e70f,
          0xb4ee96d2, 0x1b9b919e, 0x80c0c54f, 0x61dc20a2, 0x5a774b69,
          0x1c121a16, 0xe293ba0a, 0xc0a02ae5, 0x3c22e043, 0x121b171d, 0xe090d0b,
          0xf28bc7ad, 0x2db6a8b9, 0x141ea9c8, 0x57f11985, 0xaf75074c,
          0xee99ddbb, 0xa37f60fd, 0xf701269f, 0x5c72f5bc, 0x44663bc5,
          0x5bfb7e34, 0x8b432976, 0xcb23c6dc, 0xb6edfc68, 0xb8e4f163,
          0xd731dcca, 0x42638510, 0x13972240, 0x84c61120, 0x854a247d,
          0xd2bb3df8, 0xaef93211, 0xc729a16d, 0x1d9e2f4b, 0xdcb230f3, 0xd8652ec,
          0x77c1e3d0, 0x2bb3166c, 0xa970b999, 0x119448fa, 0x47e96422,
          0xa8fc8cc4, 0xa0f03f1a, 0x567d2cd8, 0x223390ef, 0x87494ec7,
          0xd938d1c1, 0x8ccaa2fe, 0x98d40b36, 0xa6f581cf, 0xa57ade28,
          0xdab78e26, 0x3fadbfa4, 0x2c3a9de4, 0x5078920d, 0x6a5fcc9b,
          0x547e4662, 0xf68d13c2, 0x90d8b8e8, 0x2e39f75e, 0x82c3aff5,
          0x9f5d80be, 0x69d0937c, 0x6fd52da9, 0xcf2512b3, 0xc8ac993b,
          0x10187da7, 0xe89c636e, 0xdb3bbb7b, 0xcd267809, 0x6e5918f4,
          0xec9ab701, 0x834f9aa8, 0xe6956e65, 0xaaffe67e, 0x21bccf08,
          0xef15e8e6, 0xbae79bd9, 0x4a6f36ce, 0xea9f09d4, 0x29b07cd6,
          0x31a4b2af, 0x2a3f2331, 0xc6a59430, 0x35a266c0, 0x744ebc37,
          0xfc82caa6, 0xe090d0b0, 0x33a7d815, 0xf104984a, 0x41ecdaf7,
          0x7fcd500e, 0x1791f62f, 0x764dd68d, 0x43efb04d, 0xccaa4d54,
          0xe49604df, 0x9ed1b5e3, 0x4c6a881b, 0xc12c1fb8, 0x4665517f,
          0x9d5eea04, 0x18c355d, 0xfa877473, 0xfb0b412e, 0xb3671d5a, 0x92dbd252,
          0xe9105633, 0x6dd64713, 0x9ad7618c, 0x37a10c7a, 0x59f8148e,
          0xeb133c89, 0xcea927ee, 0xb761c935, 0xe11ce5ed, 0x7a47b13c,
          0x9cd2df59, 0x55f2733f, 0x1814ce79, 0x73c737bf, 0x53f7cdea,
          0x5ffdaa5b, 0xdf3d6f14, 0x7844db86, 0xcaaff381, 0xb968c43e,
          0x3824342c, 0xc2a3405f, 0x161dc372, 0xbce2250c, 0x283c498b,
          0xff0d9541, 0x39a80171, 0x80cb3de, 0xd8b4e49c, 0x6456c190, 0x7bcb8461,
          0xd532b670, 0x486c5c74, 0xd0b85742,
        ],
        ry = [
          0x5051f4a7, 0x537e4165, 0xc31a17a4, 0x963a275e, 0xcb3bab6b,
          0xf11f9d45, 0xabacfa58, 0x934be303, 0x552030fa, 0xf6ad766d,
          0x9188cc76, 0x25f5024c, 0xfc4fe5d7, 0xd7c52acb, 0x80263544,
          0x8fb562a3, 0x49deb15a, 0x6725ba1b, 0x9845ea0e, 0xe15dfec0, 0x2c32f75,
          0x12814cf0, 0xa38d4697, 0xc66bd3f9, 0xe7038f5f, 0x9515929c,
          0xebbf6d7a, 0xda955259, 0x2dd4be83, 0xd3587421, 0x2949e069,
          0x448ec9c8, 0x6a75c289, 0x78f48e79, 0x6b99583e, 0xdd27b971,
          0xb6bee14f, 0x17f088ad, 0x66c920ac, 0xb47dce3a, 0x1863df4a,
          0x82e51a31, 0x60975133, 0x4562537f, 0xe0b16477, 0x84bb6bae,
          0x1cfe81a0, 0x94f9082b, 0x58704868, 0x198f45fd, 0x8794de6c,
          0xb7527bf8, 0x23ab73d3, 0xe2724b02, 0x57e31f8f, 0x2a6655ab, 0x7b2eb28,
          0x32fb5c2, 0x9a86c57b, 0xa5d33708, 0xf2302887, 0xb223bfa5, 0xba02036a,
          0x5ced1682, 0x2b8acf1c, 0x92a779b4, 0xf0f307f2, 0xa14e69e2,
          0xcd65daf4, 0xd50605be, 0x1fd13462, 0x8ac4a6fe, 0x9d342e53,
          0xa0a2f355, 0x32058ae1, 0x75a4f6eb, 0x390b83ec, 0xaa4060ef, 0x65e719f,
          0x51bd6e10, 0xf93e218a, 0x3d96dd06, 0xaedd3e05, 0x464de6bd,
          0xb591548d, 0x571c45d, 0x6f0406d4, 0xff605015, 0x241998fb, 0x97d6bde9,
          0xcc894043, 0x7767d99e, 0xbdb0e842, 0x8807898b, 0x38e7195b,
          0xdb79c8ee, 0x47a17c0a, 0xe97c420f, 0xc9f8841e, 0, 0x83098086,
          0x48322bed, 0xac1e1170, 0x4e6c5a72, 0xfbfd0eff, 0x560f8538,
          0x1e3daed5, 0x27362d39, 0x640a0fd9, 0x21685ca6, 0xd19b5b54,
          0x3a24362e, 0xb10c0a67, 0xf9357e7, 0xd2b4ee96, 0x9e1b9b91, 0x4f80c0c5,
          0xa261dc20, 0x695a774b, 0x161c121a, 0xae293ba, 0xe5c0a02a, 0x433c22e0,
          0x1d121b17, 0xb0e090d, 0xadf28bc7, 0xb92db6a8, 0xc8141ea9, 0x8557f119,
          0x4caf7507, 0xbbee99dd, 0xfda37f60, 0x9ff70126, 0xbc5c72f5,
          0xc544663b, 0x345bfb7e, 0x768b4329, 0xdccb23c6, 0x68b6edfc,
          0x63b8e4f1, 0xcad731dc, 0x10426385, 0x40139722, 0x2084c611,
          0x7d854a24, 0xf8d2bb3d, 0x11aef932, 0x6dc729a1, 0x4b1d9e2f,
          0xf3dcb230, 0xec0d8652, 0xd077c1e3, 0x6c2bb316, 0x99a970b9,
          0xfa119448, 0x2247e964, 0xc4a8fc8c, 0x1aa0f03f, 0xd8567d2c,
          0xef223390, 0xc787494e, 0xc1d938d1, 0xfe8ccaa2, 0x3698d40b,
          0xcfa6f581, 0x28a57ade, 0x26dab78e, 0xa43fadbf, 0xe42c3a9d, 0xd507892,
          0x9b6a5fcc, 0x62547e46, 0xc2f68d13, 0xe890d8b8, 0x5e2e39f7,
          0xf582c3af, 0xbe9f5d80, 0x7c69d093, 0xa96fd52d, 0xb3cf2512,
          0x3bc8ac99, 0xa710187d, 0x6ee89c63, 0x7bdb3bbb, 0x9cd2678, 0xf46e5918,
          0x1ec9ab7, 0xa8834f9a, 0x65e6956e, 0x7eaaffe6, 0x821bccf, 0xe6ef15e8,
          0xd9bae79b, 0xce4a6f36, 0xd4ea9f09, 0xd629b07c, 0xaf31a4b2,
          0x312a3f23, 0x30c6a594, 0xc035a266, 0x37744ebc, 0xa6fc82ca,
          0xb0e090d0, 0x1533a7d8, 0x4af10498, 0xf741ecda, 0xe7fcd50, 0x2f1791f6,
          0x8d764dd6, 0x4d43efb0, 0x54ccaa4d, 0xdfe49604, 0xe39ed1b5,
          0x1b4c6a88, 0xb8c12c1f, 0x7f466551, 0x49d5eea, 0x5d018c35, 0x73fa8774,
          0x2efb0b41, 0x5ab3671d, 0x5292dbd2, 0x33e91056, 0x136dd647,
          0x8c9ad761, 0x7a37a10c, 0x8e59f814, 0x89eb133c, 0xeecea927,
          0x35b761c9, 0xede11ce5, 0x3c7a47b1, 0x599cd2df, 0x3f55f273,
          0x791814ce, 0xbf73c737, 0xea53f7cd, 0x5b5ffdaa, 0x14df3d6f,
          0x867844db, 0x81caaff3, 0x3eb968c4, 0x2c382434, 0x5fc2a340,
          0x72161dc3, 0xcbce225, 0x8b283c49, 0x41ff0d95, 0x7139a801, 0xde080cb3,
          0x9cd8b4e4, 0x906456c1, 0x617bcb84, 0x70d532b6, 0x74486c5c,
          0x42d0b857,
        ],
        rw = [
          0xa75051f4, 0x65537e41, 0xa4c31a17, 0x5e963a27, 0x6bcb3bab,
          0x45f11f9d, 0x58abacfa, 0x3934be3, 0xfa552030, 0x6df6ad76, 0x769188cc,
          0x4c25f502, 0xd7fc4fe5, 0xcbd7c52a, 0x44802635, 0xa38fb562,
          0x5a49deb1, 0x1b6725ba, 0xe9845ea, 0xc0e15dfe, 0x7502c32f, 0xf012814c,
          0x97a38d46, 0xf9c66bd3, 0x5fe7038f, 0x9c951592, 0x7aebbf6d,
          0x59da9552, 0x832dd4be, 0x21d35874, 0x692949e0, 0xc8448ec9,
          0x896a75c2, 0x7978f48e, 1047239e3, 0x71dd27b9, 0x4fb6bee1, 0xad17f088,
          0xac66c920, 0x3ab47dce, 0x4a1863df, 0x3182e51a, 0x33609751,
          0x7f456253, 0x77e0b164, 0xae84bb6b, 0xa01cfe81, 0x2b94f908,
          0x68587048, 0xfd198f45, 0x6c8794de, 0xf8b7527b, 0xd323ab73, 0x2e2724b,
          0x8f57e31f, 0xab2a6655, 0x2807b2eb, 0xc2032fb5, 0x7b9a86c5, 0x8a5d337,
          0x87f23028, 0xa5b223bf, 0x6aba0203, 0x825ced16, 0x1c2b8acf,
          0xb492a779, 0xf2f0f307, 0xe2a14e69, 0xf4cd65da, 0xbed50605,
          0x621fd134, 0xfe8ac4a6, 0x539d342e, 0x55a0a2f3, 0xe132058a,
          0xeb75a4f6, 0xec390b83, 0xefaa4060, 0x9f065e71, 0x1051bd6e,
          0x8af93e21, 0x63d96dd, 0x5aedd3e, 0xbd464de6, 0x8db59154, 0x5d0571c4,
          0xd46f0406, 0x15ff6050, 0xfb241998, 0xe997d6bd, 0x43cc8940,
          0x9e7767d9, 0x42bdb0e8, 0x8b880789, 0x5b38e719, 0xeedb79c8, 0xa47a17c,
          0xfe97c42, 0x1ec9f884, 0, 0x86830980, 0xed48322b, 0x70ac1e11,
          0x724e6c5a, 0xfffbfd0e, 0x38560f85, 0xd51e3dae, 0x3927362d,
          0xd9640a0f, 0xa621685c, 0x54d19b5b, 0x2e3a2436, 0x67b10c0a,
          0xe70f9357, 0x96d2b4ee, 0x919e1b9b, 0xc54f80c0, 0x20a261dc,
          0x4b695a77, 0x1a161c12, 0xba0ae293, 0x2ae5c0a0, 0xe0433c22,
          0x171d121b, 0xd0b0e09, 0xc7adf28b, 0xa8b92db6, 0xa9c8141e, 0x198557f1,
          0x74caf75, 0xddbbee99, 0x60fda37f, 0x269ff701, 0xf5bc5c72, 0x3bc54466,
          0x7e345bfb, 0x29768b43, 0xc6dccb23, 0xfc68b6ed, 0xf163b8e4,
          0xdccad731, 0x85104263, 0x22401397, 0x112084c6, 0x247d854a,
          0x3df8d2bb, 0x3211aef9, 0xa16dc729, 0x2f4b1d9e, 0x30f3dcb2,
          0x52ec0d86, 0xe3d077c1, 0x166c2bb3, 0xb999a970, 0x48fa1194,
          0x642247e9, 0x8cc4a8fc, 0x3f1aa0f0, 0x2cd8567d, 0x90ef2233,
          0x4ec78749, 0xd1c1d938, 0xa2fe8cca, 0xb3698d4, 0x81cfa6f5, 0xde28a57a,
          0x8e26dab7, 0xbfa43fad, 0x9de42c3a, 0x920d5078, 0xcc9b6a5f,
          0x4662547e, 0x13c2f68d, 0xb8e890d8, 0xf75e2e39, 0xaff582c3,
          0x80be9f5d, 0x937c69d0, 0x2da96fd5, 0x12b3cf25, 0x993bc8ac,
          0x7da71018, 0x636ee89c, 0xbb7bdb3b, 0x7809cd26, 0x18f46e59,
          0xb701ec9a, 0x9aa8834f, 0x6e65e695, 0xe67eaaff, 0xcf0821bc,
          0xe8e6ef15, 0x9bd9bae7, 0x36ce4a6f, 0x9d4ea9f, 0x7cd629b0, 0xb2af31a4,
          0x23312a3f, 0x9430c6a5, 0x66c035a2, 0xbc37744e, 0xcaa6fc82,
          0xd0b0e090, 0xd81533a7, 0x984af104, 0xdaf741ec, 0x500e7fcd,
          0xf62f1791, 0xd68d764d, 0xb04d43ef, 0x4d54ccaa, 0x4dfe496, 0xb5e39ed1,
          0x881b4c6a, 0x1fb8c12c, 0x517f4665, 0xea049d5e, 0x355d018c,
          0x7473fa87, 0x412efb0b, 0x1d5ab367, 0xd25292db, 0x5633e910,
          0x47136dd6, 0x618c9ad7, 0xc7a37a1, 0x148e59f8, 0x3c89eb13, 0x27eecea9,
          0xc935b761, 0xe5ede11c, 0xb13c7a47, 0xdf599cd2, 0x733f55f2,
          0xce791814, 0x37bf73c7, 0xcdea53f7, 0xaa5b5ffd, 0x6f14df3d,
          0xdb867844, 0xf381caaf, 0xc43eb968, 0x342c3824, 0x405fc2a3,
          0xc372161d, 0x250cbce2, 0x498b283c, 0x9541ff0d, 0x17139a8, 0xb3de080c,
          0xe49cd8b4, 0xc1906456, 0x84617bcb, 0xb670d532, 0x5c74486c,
          0x5742d0b8,
        ],
        rv = [
          0xf4a75051, 0x4165537e, 0x17a4c31a, 0x275e963a, 0xab6bcb3b,
          0x9d45f11f, 0xfa58abac, 0xe303934b, 0x30fa5520, 0x766df6ad,
          0xcc769188, 0x24c25f5, 0xe5d7fc4f, 0x2acbd7c5, 0x35448026, 0x62a38fb5,
          0xb15a49de, 0xba1b6725, 0xea0e9845, 0xfec0e15d, 0x2f7502c3,
          0x4cf01281, 0x4697a38d, 0xd3f9c66b, 0x8f5fe703, 0x929c9515,
          0x6d7aebbf, 0x5259da95, 0xbe832dd4, 0x7421d358, 0xe0692949,
          0xc9c8448e, 0xc2896a75, 0x8e7978f4, 0x583e6b99, 0xb971dd27,
          0xe14fb6be, 0x88ad17f0, 0x20ac66c9, 0xce3ab47d, 0xdf4a1863,
          0x1a3182e5, 0x51336097, 0x537f4562, 0x6477e0b1, 0x6bae84bb,
          0x81a01cfe, 0x82b94f9, 0x48685870, 0x45fd198f, 0xde6c8794, 0x7bf8b752,
          0x73d323ab, 0x4b02e272, 0x1f8f57e3, 0x55ab2a66, 0xeb2807b2,
          0xb5c2032f, 0xc57b9a86, 0x3708a5d3, 679998e3, 0xbfa5b223, 0x36aba02,
          0x16825ced, 0xcf1c2b8a, 0x79b492a7, 0x7f2f0f3, 0x69e2a14e, 0xdaf4cd65,
          0x5bed506, 0x34621fd1, 0xa6fe8ac4, 0x2e539d34, 0xf355a0a2, 0x8ae13205,
          0xf6eb75a4, 0x83ec390b, 0x60efaa40, 0x719f065e, 0x6e1051bd,
          0x218af93e, 0xdd063d96, 0x3e05aedd, 0xe6bd464d, 0x548db591,
          0xc45d0571, 0x6d46f04, 0x5015ff60, 0x98fb2419, 0xbde997d6, 0x4043cc89,
          0xd99e7767, 0xe842bdb0, 0x898b8807, 0x195b38e7, 0xc8eedb79,
          0x7c0a47a1, 0x420fe97c, 0x841ec9f8, 0, 0x80868309, 0x2bed4832,
          0x1170ac1e, 0x5a724e6c, 0xefffbfd, 0x8538560f, 0xaed51e3d, 0x2d392736,
          0xfd9640a, 0x5ca62168, 0x5b54d19b, 0x362e3a24, 0xa67b10c, 0x57e70f93,
          0xee96d2b4, 0x9b919e1b, 0xc0c54f80, 0xdc20a261, 0x774b695a,
          0x121a161c, 0x93ba0ae2, 0xa02ae5c0, 0x22e0433c, 0x1b171d12, 0x90d0b0e,
          0x8bc7adf2, 0xb6a8b92d, 0x1ea9c814, 0xf1198557, 0x75074caf,
          0x99ddbbee, 0x7f60fda3, 0x1269ff7, 0x72f5bc5c, 0x663bc544, 0xfb7e345b,
          0x4329768b, 0x23c6dccb, 0xedfc68b6, 0xe4f163b8, 0x31dccad7,
          0x63851042, 0x97224013, 0xc6112084, 0x4a247d85, 0xbb3df8d2,
          0xf93211ae, 0x29a16dc7, 0x9e2f4b1d, 0xb230f3dc, 0x8652ec0d,
          0xc1e3d077, 0xb3166c2b, 0x70b999a9, 0x9448fa11, 0xe9642247,
          0xfc8cc4a8, 0xf03f1aa0, 0x7d2cd856, 0x3390ef22, 0x494ec787,
          0x38d1c1d9, 0xcaa2fe8c, 0xd40b3698, 0xf581cfa6, 0x7ade28a5,
          0xb78e26da, 0xadbfa43f, 0x3a9de42c, 0x78920d50, 0x5fcc9b6a,
          0x7e466254, 0x8d13c2f6, 0xd8b8e890, 0x39f75e2e, 0xc3aff582,
          0x5d80be9f, 0xd0937c69, 0xd52da96f, 0x2512b3cf, 0xac993bc8,
          0x187da710, 0x9c636ee8, 0x3bbb7bdb, 0x267809cd, 0x5918f46e,
          0x9ab701ec, 0x4f9aa883, 0x956e65e6, 0xffe67eaa, 0xbccf0821,
          0x15e8e6ef, 0xe79bd9ba, 0x6f36ce4a, 0x9f09d4ea, 0xb07cd629,
          0xa4b2af31, 0x3f23312a, 0xa59430c6, 0xa266c035, 0x4ebc3774,
          0x82caa6fc, 0x90d0b0e0, 0xa7d81533, 0x4984af1, 0xecdaf741, 0xcd500e7f,
          0x91f62f17, 0x4dd68d76, 0xefb04d43, 0xaa4d54cc, 0x9604dfe4,
          0xd1b5e39e, 0x6a881b4c, 0x2c1fb8c1, 0x65517f46, 0x5eea049d,
          0x8c355d01, 0x877473fa, 0xb412efb, 0x671d5ab3, 0xdbd25292, 0x105633e9,
          0xd647136d, 0xd7618c9a, 0xa10c7a37, 0xf8148e59, 0x133c89eb,
          0xa927eece, 0x61c935b7, 0x1ce5ede1, 0x47b13c7a, 0xd2df599c,
          0xf2733f55, 0x14ce7918, 0xc737bf73, 0xf7cdea53, 0xfdaa5b5f,
          0x3d6f14df, 0x44db8678, 0xaff381ca, 0x68c43eb9, 0x24342c38,
          0xa3405fc2, 0x1dc37216, 0xe2250cbc, 0x3c498b28, 0xd9541ff, 0xa8017139,
          0xcb3de08, 0xb4e49cd8, 0x56c19064, 0xcb84617b, 0x32b670d5, 0x6c5c7448,
          0xb85742d0,
        ],
        rk = [
          0, 0xe090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927,
          0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e,
          0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69,
          0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c,
          0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3,
          0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2,
          0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66,
          0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323,
          0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04,
          0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd,
          0x29b07cd6, 0x38f5fe7, 0xd8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393,
          0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4,
          0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd, 0xb16477e0,
          0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc, 0x87494ec7,
          0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182,
          0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d,
          0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461, 0x69d0937c,
          0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203, 0x58ae132,
          0xb83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b,
          0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x605bed5,
          0x80cb3de, 0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef,
          0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120,
          0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65,
          0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742,
          0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1,
          0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6,
          0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x9808683, 0x7898b88,
          0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051,
          0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976,
          0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502, 0xe9105633,
          0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87,
          0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6,
          0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2, 0xf8841ec9,
          0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5, 0x7a47b13c,
          0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b,
          0x5e719f06, 0x5078920d, 0xa0fd964, 0x406d46f, 0x161dc372, 0x1814ce79,
          0x322bed48, 0x3c22e043, 0x2e39f75e, 0x2030fa55, 0xec9ab701,
          0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d, 0xdab78e26,
          0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f,
          0x8ec9c844, 0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0xc0a67b1,
          0x2036aba, 0x10187da7, 0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b,
          0x26354480, 0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4,
          0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a,
          0x39a80171, 0x2bb3166c, 0x25ba1b67, 0xf853856, 0x18c355d, 0x13972240,
          0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f,
          0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca,
          0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed,
          0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84,
          0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3,
        ],
        rA = [
          0, 0xb0e090d, 0x161c121a, 0x1d121b17, 0x2c382434, 0x27362d39,
          0x3a24362e, 0x312a3f23, 0x58704868, 0x537e4165, 0x4e6c5a72,
          0x4562537f, 0x74486c5c, 0x7f466551, 0x62547e46, 0x695a774b,
          0xb0e090d0, 0xbbee99dd, 0xa6fc82ca, 0xadf28bc7, 0x9cd8b4e4,
          0x97d6bde9, 0x8ac4a6fe, 0x81caaff3, 0xe890d8b8, 0xe39ed1b5,
          0xfe8ccaa2, 0xf582c3af, 0xc4a8fc8c, 0xcfa6f581, 0xd2b4ee96,
          0xd9bae79b, 0x7bdb3bbb, 0x70d532b6, 0x6dc729a1, 0x66c920ac,
          0x57e31f8f, 0x5ced1682, 0x41ff0d95, 0x4af10498, 0x23ab73d3,
          0x28a57ade, 0x35b761c9, 0x3eb968c4, 0xf9357e7, 0x49d5eea, 0x198f45fd,
          0x12814cf0, 0xcb3bab6b, 0xc035a266, 0xdd27b971, 0xd629b07c,
          0xe7038f5f, 0xec0d8652, 0xf11f9d45, 0xfa119448, 0x934be303,
          0x9845ea0e, 0x8557f119, 0x8e59f814, 0xbf73c737, 0xb47dce3a,
          0xa96fd52d, 0xa261dc20, 0xf6ad766d, 0xfda37f60, 0xe0b16477,
          0xebbf6d7a, 0xda955259, 0xd19b5b54, 0xcc894043, 0xc787494e,
          0xaedd3e05, 0xa5d33708, 0xb8c12c1f, 0xb3cf2512, 0x82e51a31,
          0x89eb133c, 0x94f9082b, 0x9ff70126, 0x464de6bd, 0x4d43efb0,
          0x5051f4a7, 0x5b5ffdaa, 0x6a75c289, 0x617bcb84, 0x7c69d093,
          0x7767d99e, 0x1e3daed5, 0x1533a7d8, 0x821bccf, 0x32fb5c2, 0x32058ae1,
          0x390b83ec, 0x241998fb, 0x2f1791f6, 0x8d764dd6, 0x867844db,
          0x9b6a5fcc, 0x906456c1, 0xa14e69e2, 0xaa4060ef, 0xb7527bf8,
          0xbc5c72f5, 0xd50605be, 0xde080cb3, 0xc31a17a4, 0xc8141ea9,
          0xf93e218a, 0xf2302887, 0xef223390, 0xe42c3a9d, 0x3d96dd06,
          0x3698d40b, 0x2b8acf1c, 0x2084c611, 0x11aef932, 0x1aa0f03f, 0x7b2eb28,
          0xcbce225, 0x65e6956e, 0x6ee89c63, 0x73fa8774, 0x78f48e79, 0x49deb15a,
          0x42d0b857, 0x5fc2a340, 0x54ccaa4d, 0xf741ecda, 0xfc4fe5d7,
          0xe15dfec0, 0xea53f7cd, 0xdb79c8ee, 0xd077c1e3, 0xcd65daf4,
          0xc66bd3f9, 0xaf31a4b2, 0xa43fadbf, 0xb92db6a8, 0xb223bfa5,
          0x83098086, 0x8807898b, 0x9515929c, 0x9e1b9b91, 0x47a17c0a,
          0x4caf7507, 0x51bd6e10, 0x5ab3671d, 0x6b99583e, 0x60975133,
          0x7d854a24, 0x768b4329, 0x1fd13462, 0x14df3d6f, 0x9cd2678, 0x2c32f75,
          0x33e91056, 0x38e7195b, 0x25f5024c, 0x2efb0b41, 0x8c9ad761,
          0x8794de6c, 0x9a86c57b, 0x9188cc76, 0xa0a2f355, 0xabacfa58,
          0xb6bee14f, 0xbdb0e842, 0xd4ea9f09, 0xdfe49604, 0xc2f68d13,
          0xc9f8841e, 0xf8d2bb3d, 0xf3dcb230, 0xeecea927, 0xe5c0a02a,
          0x3c7a47b1, 0x37744ebc, 0x2a6655ab, 0x21685ca6, 0x10426385,
          0x1b4c6a88, 0x65e719f, 0xd507892, 0x640a0fd9, 0x6f0406d4, 0x72161dc3,
          0x791814ce, 0x48322bed, 0x433c22e0, 0x5e2e39f7, 0x552030fa, 0x1ec9ab7,
          0xae293ba, 0x17f088ad, 0x1cfe81a0, 0x2dd4be83, 0x26dab78e, 0x3bc8ac99,
          0x30c6a594, 0x599cd2df, 0x5292dbd2, 0x4f80c0c5, 0x448ec9c8,
          0x75a4f6eb, 0x7eaaffe6, 0x63b8e4f1, 0x68b6edfc, 0xb10c0a67,
          0xba02036a, 0xa710187d, 0xac1e1170, 0x9d342e53, 0x963a275e,
          0x8b283c49, 0x80263544, 0xe97c420f, 0xe2724b02, 0xff605015,
          0xf46e5918, 0xc544663b, 0xce4a6f36, 0xd3587421, 0xd8567d2c,
          0x7a37a10c, 0x7139a801, 0x6c2bb316, 0x6725ba1b, 0x560f8538,
          0x5d018c35, 0x40139722, 0x4b1d9e2f, 0x2247e964, 0x2949e069,
          0x345bfb7e, 0x3f55f273, 0xe7fcd50, 0x571c45d, 0x1863df4a, 0x136dd647,
          0xcad731dc, 0xc1d938d1, 0xdccb23c6, 0xd7c52acb, 0xe6ef15e8,
          0xede11ce5, 0xf0f307f2, 0xfbfd0eff, 0x92a779b4, 0x99a970b9,
          0x84bb6bae, 0x8fb562a3, 0xbe9f5d80, 0xb591548d, 0xa8834f9a,
          0xa38d4697,
        ],
        rE = [
          0, 0xd0b0e09, 0x1a161c12, 0x171d121b, 0x342c3824, 0x3927362d,
          0x2e3a2436, 0x23312a3f, 0x68587048, 0x65537e41, 0x724e6c5a,
          0x7f456253, 0x5c74486c, 0x517f4665, 0x4662547e, 0x4b695a77,
          0xd0b0e090, 0xddbbee99, 0xcaa6fc82, 0xc7adf28b, 0xe49cd8b4,
          0xe997d6bd, 0xfe8ac4a6, 0xf381caaf, 0xb8e890d8, 0xb5e39ed1,
          0xa2fe8cca, 0xaff582c3, 0x8cc4a8fc, 0x81cfa6f5, 0x96d2b4ee,
          0x9bd9bae7, 0xbb7bdb3b, 0xb670d532, 0xa16dc729, 0xac66c920,
          0x8f57e31f, 0x825ced16, 0x9541ff0d, 0x984af104, 0xd323ab73,
          0xde28a57a, 0xc935b761, 0xc43eb968, 0xe70f9357, 0xea049d5e,
          0xfd198f45, 0xf012814c, 0x6bcb3bab, 0x66c035a2, 0x71dd27b9,
          0x7cd629b0, 0x5fe7038f, 0x52ec0d86, 0x45f11f9d, 0x48fa1194, 0x3934be3,
          0xe9845ea, 0x198557f1, 0x148e59f8, 0x37bf73c7, 0x3ab47dce, 0x2da96fd5,
          0x20a261dc, 0x6df6ad76, 0x60fda37f, 0x77e0b164, 0x7aebbf6d,
          0x59da9552, 0x54d19b5b, 0x43cc8940, 0x4ec78749, 0x5aedd3e, 0x8a5d337,
          0x1fb8c12c, 0x12b3cf25, 0x3182e51a, 0x3c89eb13, 0x2b94f908,
          0x269ff701, 0xbd464de6, 0xb04d43ef, 0xa75051f4, 0xaa5b5ffd,
          0x896a75c2, 0x84617bcb, 0x937c69d0, 0x9e7767d9, 0xd51e3dae,
          0xd81533a7, 0xcf0821bc, 0xc2032fb5, 0xe132058a, 0xec390b83,
          0xfb241998, 0xf62f1791, 0xd68d764d, 0xdb867844, 0xcc9b6a5f,
          0xc1906456, 0xe2a14e69, 0xefaa4060, 0xf8b7527b, 0xf5bc5c72,
          0xbed50605, 0xb3de080c, 0xa4c31a17, 0xa9c8141e, 0x8af93e21,
          0x87f23028, 0x90ef2233, 0x9de42c3a, 0x63d96dd, 0xb3698d4, 0x1c2b8acf,
          0x112084c6, 0x3211aef9, 0x3f1aa0f0, 0x2807b2eb, 0x250cbce2,
          0x6e65e695, 0x636ee89c, 0x7473fa87, 0x7978f48e, 0x5a49deb1,
          0x5742d0b8, 0x405fc2a3, 0x4d54ccaa, 0xdaf741ec, 0xd7fc4fe5,
          0xc0e15dfe, 0xcdea53f7, 0xeedb79c8, 0xe3d077c1, 0xf4cd65da,
          0xf9c66bd3, 0xb2af31a4, 0xbfa43fad, 0xa8b92db6, 0xa5b223bf,
          0x86830980, 0x8b880789, 0x9c951592, 0x919e1b9b, 0xa47a17c, 0x74caf75,
          0x1051bd6e, 0x1d5ab367, 1047239e3, 0x33609751, 0x247d854a, 0x29768b43,
          0x621fd134, 0x6f14df3d, 0x7809cd26, 0x7502c32f, 0x5633e910,
          0x5b38e719, 0x4c25f502, 0x412efb0b, 0x618c9ad7, 0x6c8794de,
          0x7b9a86c5, 0x769188cc, 0x55a0a2f3, 0x58abacfa, 0x4fb6bee1,
          0x42bdb0e8, 0x9d4ea9f, 0x4dfe496, 0x13c2f68d, 0x1ec9f884, 0x3df8d2bb,
          0x30f3dcb2, 0x27eecea9, 0x2ae5c0a0, 0xb13c7a47, 0xbc37744e,
          0xab2a6655, 0xa621685c, 0x85104263, 0x881b4c6a, 0x9f065e71,
          0x920d5078, 0xd9640a0f, 0xd46f0406, 0xc372161d, 0xce791814,
          0xed48322b, 0xe0433c22, 0xf75e2e39, 0xfa552030, 0xb701ec9a,
          0xba0ae293, 0xad17f088, 0xa01cfe81, 0x832dd4be, 0x8e26dab7,
          0x993bc8ac, 0x9430c6a5, 0xdf599cd2, 0xd25292db, 0xc54f80c0,
          0xc8448ec9, 0xeb75a4f6, 0xe67eaaff, 0xf163b8e4, 0xfc68b6ed,
          0x67b10c0a, 0x6aba0203, 0x7da71018, 0x70ac1e11, 0x539d342e,
          0x5e963a27, 0x498b283c, 0x44802635, 0xfe97c42, 0x2e2724b, 0x15ff6050,
          0x18f46e59, 0x3bc54466, 0x36ce4a6f, 0x21d35874, 0x2cd8567d, 0xc7a37a1,
          0x17139a8, 0x166c2bb3, 0x1b6725ba, 0x38560f85, 0x355d018c, 0x22401397,
          0x2f4b1d9e, 0x642247e9, 0x692949e0, 0x7e345bfb, 0x733f55f2,
          0x500e7fcd, 0x5d0571c4, 0x4a1863df, 0x47136dd6, 0xdccad731,
          0xd1c1d938, 0xc6dccb23, 0xcbd7c52a, 0xe8e6ef15, 0xe5ede11c,
          0xf2f0f307, 0xfffbfd0e, 0xb492a779, 0xb999a970, 0xae84bb6b,
          0xa38fb562, 0x80be9f5d, 0x8db59154, 0x9aa8834f, 0x97a38d46,
        ],
        rR = [
          0, 0x90d0b0e, 0x121a161c, 0x1b171d12, 0x24342c38, 0x2d392736,
          0x362e3a24, 0x3f23312a, 0x48685870, 0x4165537e, 0x5a724e6c,
          0x537f4562, 0x6c5c7448, 0x65517f46, 0x7e466254, 0x774b695a,
          0x90d0b0e0, 0x99ddbbee, 0x82caa6fc, 0x8bc7adf2, 0xb4e49cd8,
          0xbde997d6, 0xa6fe8ac4, 0xaff381ca, 0xd8b8e890, 0xd1b5e39e,
          0xcaa2fe8c, 0xc3aff582, 0xfc8cc4a8, 0xf581cfa6, 0xee96d2b4,
          0xe79bd9ba, 0x3bbb7bdb, 0x32b670d5, 0x29a16dc7, 0x20ac66c9,
          0x1f8f57e3, 0x16825ced, 0xd9541ff, 0x4984af1, 0x73d323ab, 0x7ade28a5,
          0x61c935b7, 0x68c43eb9, 0x57e70f93, 0x5eea049d, 0x45fd198f,
          0x4cf01281, 0xab6bcb3b, 0xa266c035, 0xb971dd27, 0xb07cd629,
          0x8f5fe703, 0x8652ec0d, 0x9d45f11f, 0x9448fa11, 0xe303934b,
          0xea0e9845, 0xf1198557, 0xf8148e59, 0xc737bf73, 0xce3ab47d,
          0xd52da96f, 0xdc20a261, 0x766df6ad, 0x7f60fda3, 0x6477e0b1,
          0x6d7aebbf, 0x5259da95, 0x5b54d19b, 0x4043cc89, 0x494ec787,
          0x3e05aedd, 0x3708a5d3, 0x2c1fb8c1, 0x2512b3cf, 0x1a3182e5,
          0x133c89eb, 0x82b94f9, 0x1269ff7, 0xe6bd464d, 0xefb04d43, 0xf4a75051,
          0xfdaa5b5f, 0xc2896a75, 0xcb84617b, 0xd0937c69, 0xd99e7767,
          0xaed51e3d, 0xa7d81533, 0xbccf0821, 0xb5c2032f, 0x8ae13205,
          0x83ec390b, 0x98fb2419, 0x91f62f17, 0x4dd68d76, 0x44db8678,
          0x5fcc9b6a, 0x56c19064, 0x69e2a14e, 0x60efaa40, 0x7bf8b752,
          0x72f5bc5c, 0x5bed506, 0xcb3de08, 0x17a4c31a, 0x1ea9c814, 0x218af93e,
          679998e3, 0x3390ef22, 0x3a9de42c, 0xdd063d96, 0xd40b3698, 0xcf1c2b8a,
          0xc6112084, 0xf93211ae, 0xf03f1aa0, 0xeb2807b2, 0xe2250cbc,
          0x956e65e6, 0x9c636ee8, 0x877473fa, 0x8e7978f4, 0xb15a49de,
          0xb85742d0, 0xa3405fc2, 0xaa4d54cc, 0xecdaf741, 0xe5d7fc4f,
          0xfec0e15d, 0xf7cdea53, 0xc8eedb79, 0xc1e3d077, 0xdaf4cd65,
          0xd3f9c66b, 0xa4b2af31, 0xadbfa43f, 0xb6a8b92d, 0xbfa5b223,
          0x80868309, 0x898b8807, 0x929c9515, 0x9b919e1b, 0x7c0a47a1,
          0x75074caf, 0x6e1051bd, 0x671d5ab3, 0x583e6b99, 0x51336097,
          0x4a247d85, 0x4329768b, 0x34621fd1, 0x3d6f14df, 0x267809cd,
          0x2f7502c3, 0x105633e9, 0x195b38e7, 0x24c25f5, 0xb412efb, 0xd7618c9a,
          0xde6c8794, 0xc57b9a86, 0xcc769188, 0xf355a0a2, 0xfa58abac,
          0xe14fb6be, 0xe842bdb0, 0x9f09d4ea, 0x9604dfe4, 0x8d13c2f6,
          0x841ec9f8, 0xbb3df8d2, 0xb230f3dc, 0xa927eece, 0xa02ae5c0,
          0x47b13c7a, 0x4ebc3774, 0x55ab2a66, 0x5ca62168, 0x63851042,
          0x6a881b4c, 0x719f065e, 0x78920d50, 0xfd9640a, 0x6d46f04, 0x1dc37216,
          0x14ce7918, 0x2bed4832, 0x22e0433c, 0x39f75e2e, 0x30fa5520,
          0x9ab701ec, 0x93ba0ae2, 0x88ad17f0, 0x81a01cfe, 0xbe832dd4,
          0xb78e26da, 0xac993bc8, 0xa59430c6, 0xd2df599c, 0xdbd25292,
          0xc0c54f80, 0xc9c8448e, 0xf6eb75a4, 0xffe67eaa, 0xe4f163b8,
          0xedfc68b6, 0xa67b10c, 0x36aba02, 0x187da710, 0x1170ac1e, 0x2e539d34,
          0x275e963a, 0x3c498b28, 0x35448026, 0x420fe97c, 0x4b02e272,
          0x5015ff60, 0x5918f46e, 0x663bc544, 0x6f36ce4a, 0x7421d358,
          0x7d2cd856, 0xa10c7a37, 0xa8017139, 0xb3166c2b, 0xba1b6725,
          0x8538560f, 0x8c355d01, 0x97224013, 0x9e2f4b1d, 0xe9642247,
          0xe0692949, 0xfb7e345b, 0xf2733f55, 0xcd500e7f, 0xc45d0571,
          0xdf4a1863, 0xd647136d, 0x31dccad7, 0x38d1c1d9, 0x23c6dccb,
          0x2acbd7c5, 0x15e8e6ef, 0x1ce5ede1, 0x7f2f0f3, 0xefffbfd, 0x79b492a7,
          0x70b999a9, 0x6bae84bb, 0x62a38fb5, 0x5d80be9f, 0x548db591,
          0x4f9aa883, 0x4697a38d,
        ];
      function rN(e) {
        let t = [];
        for (let a = 0; a < e.length; a += 4)
          t.push((e[a] << 24) | (e[a + 1] << 16) | (e[a + 2] << 8) | e[a + 3]);
        return t;
      }
      class rP {
        get key() {
          return rx(this, t, "f").slice();
        }
        encrypt(e) {
          if (16 != e.length)
            throw TypeError("invalid plaintext size (must be 16 bytes)");
          let t = rx(this, r, "f").length - 1,
            a = [0, 0, 0, 0],
            c = rN(e);
          for (let e = 0; e < 4; e++) c[e] ^= rx(this, r, "f")[0][e];
          for (let e = 1; e < t; e++) {
            for (let t = 0; t < 4; t++)
              a[t] =
                ru[(c[t] >> 24) & 255] ^
                rh[(c[(t + 1) % 4] >> 16) & 255] ^
                rp[(c[(t + 2) % 4] >> 8) & 255] ^
                rg[255 & c[(t + 3) % 4]] ^
                rx(this, r, "f")[e][t];
            c = a.slice();
          }
          let s = new Uint8Array(16),
            n = 0;
          for (let e = 0; e < 4; e++)
            (n = rx(this, r, "f")[t][e]),
              (s[4 * e] = (rb[(c[e] >> 24) & 255] ^ (n >> 24)) & 255),
              (s[4 * e + 1] =
                (rb[(c[(e + 1) % 4] >> 16) & 255] ^ (n >> 16)) & 255),
              (s[4 * e + 2] =
                (rb[(c[(e + 2) % 4] >> 8) & 255] ^ (n >> 8)) & 255),
              (s[4 * e + 3] = (rb[255 & c[(e + 3) % 4]] ^ n) & 255);
          return s;
        }
        decrypt(e) {
          if (16 != e.length)
            throw TypeError("invalid ciphertext size (must be 16 bytes)");
          let t = rx(this, a, "f").length - 1,
            r = [0, 0, 0, 0],
            c = rN(e);
          for (let e = 0; e < 4; e++) c[e] ^= rx(this, a, "f")[0][e];
          for (let e = 1; e < t; e++) {
            for (let t = 0; t < 4; t++)
              r[t] =
                rm[(c[t] >> 24) & 255] ^
                ry[(c[(t + 3) % 4] >> 16) & 255] ^
                rw[(c[(t + 2) % 4] >> 8) & 255] ^
                rv[255 & c[(t + 1) % 4]] ^
                rx(this, a, "f")[e][t];
            c = r.slice();
          }
          let s = new Uint8Array(16),
            n = 0;
          for (let e = 0; e < 4; e++)
            (n = rx(this, a, "f")[t][e]),
              (s[4 * e] = (rl[(c[e] >> 24) & 255] ^ (n >> 24)) & 255),
              (s[4 * e + 1] =
                (rl[(c[(e + 3) % 4] >> 16) & 255] ^ (n >> 16)) & 255),
              (s[4 * e + 2] =
                (rl[(c[(e + 2) % 4] >> 8) & 255] ^ (n >> 8)) & 255),
              (s[4 * e + 3] = (rl[255 & c[(e + 1) % 4]] ^ n) & 255);
          return s;
        }
        constructor(e) {
          let c;
          if (
            (t.set(this, void 0),
            a.set(this, void 0),
            r.set(this, void 0),
            !(this instanceof rP))
          )
            throw Error("AES must be instanitated with `new`");
          rd(this, t, new Uint8Array(e), "f");
          let s = ro[this.key.length];
          if (null == s)
            throw TypeError("invalid key size (must be 16, 24 or 32 bytes)");
          rd(this, r, [], "f"), rd(this, a, [], "f");
          for (let e = 0; e <= s; e++)
            rx(this, r, "f").push([0, 0, 0, 0]),
              rx(this, a, "f").push([0, 0, 0, 0]);
          let n = (s + 1) * 4,
            i = this.key.length / 4,
            x = rN(this.key);
          for (let e = 0; e < i; e++)
            (c = e >> 2),
              (rx(this, r, "f")[c][e % 4] = x[e]),
              (rx(this, a, "f")[s - c][e % 4] = x[e]);
          let d = 0,
            o = i,
            f;
          for (; o < n; ) {
            if (
              ((f = x[i - 1]),
              (x[0] ^=
                (rb[(f >> 16) & 255] << 24) ^
                (rb[(f >> 8) & 255] << 16) ^
                (rb[255 & f] << 8) ^
                rb[(f >> 24) & 255] ^
                (rf[d] << 24)),
              (d += 1),
              8 != i)
            )
              for (let e = 1; e < i; e++) x[e] ^= x[e - 1];
            else {
              for (let e = 1; e < i / 2; e++) x[e] ^= x[e - 1];
              (f = x[i / 2 - 1]),
                (x[i / 2] ^=
                  rb[255 & f] ^
                  (rb[(f >> 8) & 255] << 8) ^
                  (rb[(f >> 16) & 255] << 16) ^
                  (rb[(f >> 24) & 255] << 24));
              for (let e = i / 2 + 1; e < i; e++) x[e] ^= x[e - 1];
            }
            let e = 0,
              t,
              c;
            for (; e < i && o < n; )
              (t = o >> 2),
                (c = o % 4),
                (rx(this, r, "f")[t][c] = x[e]),
                (rx(this, a, "f")[s - t][c] = x[e++]),
                o++;
          }
          for (let e = 1; e < s; e++)
            for (let t = 0; t < 4; t++)
              (f = rx(this, a, "f")[e][t]),
                (rx(this, a, "f")[e][t] =
                  rk[(f >> 24) & 255] ^
                  rA[(f >> 16) & 255] ^
                  rE[(f >> 8) & 255] ^
                  rR[255 & f]);
        }
      }
      (t = new WeakMap()), (a = new WeakMap()), (r = new WeakMap());
      class rT {
        constructor(e, t, a) {
          if (a && !(this instanceof a))
            throw Error("".concat(e, ' must be instantiated with "new"'));
          Object.defineProperties(this, {
            aes: { enumerable: !0, value: new rP(t) },
            name: { enumerable: !0, value: e },
          });
        }
      }
      var r_ = function (e, t, a, r, c) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !c)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !c : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? c.call(e, a) : c ? (c.value = a) : t.set(e, a), a;
        },
        rS = function (e, t, a, r) {
          if ("a" === a && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === a ? r : "a" === a ? r.call(e) : r ? r.value : t.get(e);
        };
      class rC extends rT {
        get iv() {
          return new Uint8Array(rS(this, c, "f"));
        }
        encrypt(e) {
          if (e.length % 16)
            throw TypeError(
              "invalid plaintext size (must be multiple of 16 bytes)"
            );
          let t = new Uint8Array(e.length);
          for (let a = 0; a < e.length; a += 16) {
            for (let t = 0; t < 16; t++) rS(this, s, "f")[t] ^= e[a + t];
            r_(this, s, this.aes.encrypt(rS(this, s, "f")), "f"),
              t.set(rS(this, s, "f"), a);
          }
          return t;
        }
        decrypt(e) {
          if (e.length % 16)
            throw TypeError(
              "invalid ciphertext size (must be multiple of 16 bytes)"
            );
          let t = new Uint8Array(e.length);
          for (let a = 0; a < e.length; a += 16) {
            let r = this.aes.decrypt(e.subarray(a, a + 16));
            for (let c = 0; c < 16; c++)
              (t[a + c] = r[c] ^ rS(this, s, "f")[c]),
                (rS(this, s, "f")[c] = e[a + c]);
          }
          return t;
        }
        constructor(e, t) {
          if (
            (super("ECC", e, rC), c.set(this, void 0), s.set(this, void 0), t)
          ) {
            if (t.length % 16)
              throw TypeError("invalid iv size (must be 16 bytes)");
            r_(this, c, new Uint8Array(t), "f");
          } else r_(this, c, new Uint8Array(16), "f");
          r_(this, s, this.iv, "f");
        }
      }
      (c = new WeakMap()), (s = new WeakMap());
      new WeakMap(), new WeakMap(), new WeakSet();
      var rI = function (e, t, a, r, c) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !c)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !c : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? c.call(e, a) : c ? (c.value = a) : t.set(e, a), a;
        },
        rO = function (e, t, a, r) {
          if ("a" === a && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === a ? r : "a" === a ? r.call(e) : r ? r.value : t.get(e);
        };
      class rB extends rT {
        get counter() {
          return new Uint8Array(rO(this, x, "f"));
        }
        setCounterValue(e) {
          if (!Number.isInteger(e) || e < 0 || e > Number.MAX_SAFE_INTEGER)
            throw TypeError("invalid counter initial integer value");
          for (let t = 15; t >= 0; --t)
            (rO(this, x, "f")[t] = e % 256), (e = Math.floor(e / 256));
        }
        setCounterBytes(e) {
          if (16 !== e.length)
            throw TypeError("invalid counter initial Uint8Array value length");
          rO(this, x, "f").set(e);
        }
        increment() {
          for (let e = 15; e >= 0; e--)
            if (255 === rO(this, x, "f")[e]) rO(this, x, "f")[e] = 0;
            else {
              rO(this, x, "f")[e]++;
              break;
            }
        }
        encrypt(e) {
          var t, a;
          let r = new Uint8Array(e);
          for (let e = 0; e < r.length; e++)
            16 === rO(this, i, "f") &&
              (rI(this, n, this.aes.encrypt(rO(this, x, "f")), "f"),
              rI(this, i, 0, "f"),
              this.increment()),
              (r[e] ^= rO(this, n, "f")[
                (rI(this, i, ((a = rO(this, i, "f")), (t = a++), a), "f"), t)
              ]);
          return r;
        }
        decrypt(e) {
          return this.encrypt(e);
        }
        constructor(e, t) {
          super("CTR", e, rB),
            n.set(this, void 0),
            i.set(this, void 0),
            x.set(this, void 0),
            rI(this, x, new Uint8Array(16), "f"),
            rO(this, x, "f").fill(0),
            rI(this, n, rO(this, x, "f"), "f"),
            rI(this, i, 16, "f"),
            null == t && (t = 1),
            "number" == typeof t
              ? this.setCounterValue(t)
              : this.setCounterBytes(t);
        }
      }
      function rU(e) {
        return (
          "string" != typeof e || e.startsWith("0x") || (e = "0x" + e),
          (0, o.getBytesCopy)(e)
        );
      }
      function rD(e, t) {
        for (e = String(e); e.length < t; ) e = "0" + e;
        return e;
      }
      function rF(e) {
        return "string" == typeof e
          ? (0, f.toUtf8Bytes)(e, "NFKC")
          : (0, o.getBytesCopy)(e);
      }
      function rM(e, t) {
        let a = t.match(/^([a-z0-9$_.-]*)(:([a-z]+))?(!)?$/i);
        (0, B.assertArgument)(null != a, "invalid path", "path", t);
        let r = a[1],
          c = a[3],
          s = "!" === a[4],
          n = e;
        for (let e of r.toLowerCase().split(".")) {
          if (Array.isArray(n)) {
            if (!e.match(/^[0-9]+$/)) break;
            n = n[parseInt(e)];
          } else if ("object" == typeof n) {
            let t = null;
            for (let a in n)
              if (a.toLowerCase() === e) {
                t = n[a];
                break;
              }
            n = t;
          } else n = null;
          if (null == n) break;
        }
        if (
          ((0, B.assertArgument)(
            !s || null != n,
            "missing required value",
            "path",
            r
          ),
          c && null != n)
        ) {
          if ("int" === c) {
            if ("string" == typeof n && n.match(/^-?[0-9]+$/))
              return parseInt(n);
            else if (Number.isSafeInteger(n)) return n;
          }
          if ("number" === c && "string" == typeof n && n.match(/^-?[0-9.]*$/))
            return parseFloat(n);
          if ("data" === c && "string" == typeof n) return rU(n);
          if (("array" === c && Array.isArray(n)) || c === typeof n) return n;
          (0, B.assertArgument)(
            !1,
            "wrong type found for ".concat(c, " "),
            "path",
            r
          );
        }
        return n;
      }
      (n = new WeakMap()),
        (i = new WeakMap()),
        (x = new WeakMap()),
        new WeakMap(),
        new WeakMap(),
        new WeakMap();
      let rL = "m/44'/60'/0'/0/0";
      function rK(e) {
        try {
          let t = JSON.parse(e),
            a = null != t.version ? parseInt(t.version) : 0;
          if (3 === a) return !0;
        } catch (e) {}
        return !1;
      }
      function rW(e, t) {
        let a = (0, o.getBytes)(t),
          r = rM(e, "crypto.ciphertext:data!"),
          c = (0, o.hexlify)(
            (0, J.keccak256)((0, o.concat)([a.slice(16, 32), r]))
          ).substring(2);
        (0, B.assertArgument)(
          c === rM(e, "crypto.mac:string!").toLowerCase(),
          "incorrect password",
          "password",
          "[ REDACTED ]"
        );
        let s = (function (e, t, a) {
            if ("aes-128-ctr" === rM(e, "crypto.cipher:string")) {
              let r = new rB(t, rM(e, "crypto.cipherparams.iv:data!"));
              return (0, o.hexlify)(r.decrypt(a));
            }
            (0, B.assert)(!1, "unsupported cipher", "UNSUPPORTED_OPERATION", {
              operation: "decrypt",
            });
          })(e, a.slice(0, 16), r),
          n = (0, eW.computeAddress)(s);
        if (e.address) {
          let t = e.address.toLowerCase();
          t.startsWith("0x") || (t = "0x" + t),
            (0, B.assertArgument)(
              (0, y.getAddress)(t) === n,
              "keystore address/privateKey mismatch",
              "address",
              e.address
            );
        }
        let i = { address: n, privateKey: s };
        if ("0.1" === rM(e, "x-ethers.version:string")) {
          let t = a.slice(32, 64),
            r = rM(e, "x-ethers.mnemonicCiphertext:data!"),
            c = new rB(t, rM(e, "x-ethers.mnemonicCounter:data!"));
          i.mnemonic = {
            path: rM(e, "x-ethers.path:string") || rL,
            locale: rM(e, "x-ethers.locale:string") || "en",
            entropy: (0, o.hexlify)((0, o.getBytes)(c.decrypt(r))),
          };
        }
        return i;
      }
      function rq(e) {
        let t = rM(e, "crypto.kdf:string");
        if (t && "string" == typeof t) {
          if ("scrypt" === t.toLowerCase()) {
            let a = rM(e, "crypto.kdfparams.salt:data!"),
              r = rM(e, "crypto.kdfparams.n:int!"),
              c = rM(e, "crypto.kdfparams.r:int!"),
              s = rM(e, "crypto.kdfparams.p:int!");
            (0, B.assertArgument)(
              r > 0 && (r & (r - 1)) == 0,
              "invalid kdf.N",
              "kdf.N",
              r
            ),
              (0, B.assertArgument)(c > 0 && s > 0, "invalid kdf", "kdf", t);
            let n = rM(e, "crypto.kdfparams.dklen:int!");
            return (
              (0, B.assertArgument)(
                32 === n,
                "invalid kdf.dklen",
                "kdf.dflen",
                n
              ),
              { name: "scrypt", salt: a, N: r, r: c, p: s, dkLen: 64 }
            );
          } else if ("pbkdf2" === t.toLowerCase()) {
            let t = rM(e, "crypto.kdfparams.salt:data!"),
              a = rM(e, "crypto.kdfparams.prf:string!"),
              r = a.split("-").pop();
            (0, B.assertArgument)(
              "sha256" === r || "sha512" === r,
              "invalid kdf.pdf",
              "kdf.pdf",
              a
            );
            let c = rM(e, "crypto.kdfparams.c:int!"),
              s = rM(e, "crypto.kdfparams.dklen:int!");
            return (
              (0, B.assertArgument)(
                32 === s,
                "invalid kdf.dklen",
                "kdf.dklen",
                s
              ),
              { name: "pbkdf2", salt: t, count: c, dkLen: s, algorithm: r }
            );
          }
        }
        (0, B.assertArgument)(
          !1,
          "unsupported key-derivation function",
          "kdf",
          t
        );
      }
      function rG(e, t) {
        let a = JSON.parse(e),
          r = rF(t),
          c = rq(a);
        if ("pbkdf2" === c.name) {
          let { salt: e, count: t, dkLen: s, algorithm: n } = c;
          return rW(a, em(r, e, t, s, n));
        }
        (0, B.assert)(
          "scrypt" === c.name,
          "cannot be reached",
          "UNKNOWN_ERROR",
          { params: c }
        );
        let { salt: s, N: n, r: i, p: x, dkLen: d } = c;
        return rW(a, eU(r, s, n, i, x, d));
      }
      function rz(e) {
        return new Promise((t) => {
          setTimeout(() => {
            t();
          }, e);
        });
      }
      async function rV(e, t, a) {
        let r = JSON.parse(e),
          c = rF(t),
          s = rq(r);
        if ("pbkdf2" === s.name) {
          a && (a(0), await rz(0));
          let { salt: e, count: t, dkLen: n, algorithm: i } = s,
            x = em(c, e, t, n, i);
          return a && (a(1), await rz(0)), rW(r, x);
        }
        (0, B.assert)(
          "scrypt" === s.name,
          "cannot be reached",
          "UNKNOWN_ERROR",
          { params: s }
        );
        let { salt: n, N: i, r: x, p: d, dkLen: o } = s;
        return rW(r, await eB(c, n, i, x, d, o, a));
      }
      function rJ(e) {
        let t =
            null != e.salt ? (0, o.getBytes)(e.salt, "options.salt") : V(32),
          a = 131072,
          r = 8,
          c = 1;
        return (
          e.scrypt &&
            (e.scrypt.N && (a = e.scrypt.N),
            e.scrypt.r && (r = e.scrypt.r),
            e.scrypt.p && (c = e.scrypt.p)),
          (0, B.assertArgument)(
            "number" == typeof a &&
              a > 0 &&
              Number.isSafeInteger(a) &&
              (BigInt(a) & BigInt(a - 1)) === BigInt(0),
            "invalid scrypt N parameter",
            "options.N",
            a
          ),
          (0, B.assertArgument)(
            "number" == typeof r && r > 0 && Number.isSafeInteger(r),
            "invalid scrypt r parameter",
            "options.r",
            r
          ),
          (0, B.assertArgument)(
            "number" == typeof c && c > 0 && Number.isSafeInteger(c),
            "invalid scrypt p parameter",
            "options.p",
            c
          ),
          { name: "scrypt", dkLen: 32, salt: t, N: a, r, p: c }
        );
      }
      function r$(e, t, a, r) {
        let c = (0, o.getBytes)(a.privateKey, "privateKey"),
          s = null != r.iv ? (0, o.getBytes)(r.iv, "options.iv") : V(16);
        (0, B.assertArgument)(
          16 === s.length,
          "invalid options.iv length",
          "options.iv",
          r.iv
        );
        let n =
          null != r.uuid ? (0, o.getBytes)(r.uuid, "options.uuid") : V(16);
        (0, B.assertArgument)(
          16 === n.length,
          "invalid options.uuid length",
          "options.uuid",
          r.iv
        );
        let i = e.slice(0, 16),
          x = e.slice(16, 32),
          f = new rB(i, s),
          b = (0, o.getBytes)(f.encrypt(c)),
          l = (0, J.keccak256)((0, o.concat)([x, b])),
          u = {
            address: a.address.substring(2).toLowerCase(),
            id: aj(n),
            version: 3,
            Crypto: {
              cipher: "aes-128-ctr",
              cipherparams: { iv: (0, o.hexlify)(s).substring(2) },
              ciphertext: (0, o.hexlify)(b).substring(2),
              kdf: "scrypt",
              kdfparams: {
                salt: (0, o.hexlify)(t.salt).substring(2),
                n: t.N,
                dklen: 32,
                p: t.p,
                r: t.r,
              },
              mac: l.substring(2),
            },
          };
        if (a.mnemonic) {
          let t = null != r.client ? r.client : "ethers/".concat(d.version),
            c = a.mnemonic.path || rL,
            s = a.mnemonic.locale || "en",
            n = e.slice(32, 64),
            i = (0, o.getBytes)(a.mnemonic.entropy, "account.mnemonic.entropy"),
            x = V(16),
            f = new rB(n, x),
            b = (0, o.getBytes)(f.encrypt(i)),
            l = new Date(),
            h =
              "UTC--" +
              (l.getUTCFullYear() +
                "-" +
                rD(l.getUTCMonth() + 1, 2) +
                "-" +
                rD(l.getUTCDate(), 2) +
                "T" +
                rD(l.getUTCHours(), 2) +
                "-" +
                rD(l.getUTCMinutes(), 2) +
                "-" +
                rD(l.getUTCSeconds(), 2)) +
              ".0Z--" +
              u.address;
          u["x-ethers"] = {
            client: t,
            gethFilename: h,
            path: c,
            locale: s,
            mnemonicCounter: (0, o.hexlify)(x).substring(2),
            mnemonicCiphertext: (0, o.hexlify)(b).substring(2),
            version: "0.1",
          };
        }
        return JSON.stringify(u);
      }
      function rj(e, t, a) {
        null == a && (a = {});
        let r = rF(t),
          c = rJ(a),
          s = eU(r, c.salt, c.N, c.r, c.p, 64);
        return r$((0, o.getBytes)(s), c, e, a);
      }
      async function rH(e, t, a) {
        null == a && (a = {});
        let r = rF(t),
          c = rJ(a),
          s = await eB(r, c.salt, c.N, c.r, c.p, 64, a.progressCallback);
        return r$((0, o.getBytes)(s), c, e, a);
      }
      let rY = "m/44'/60'/0'/0/0",
        rZ = new Uint8Array([
          66, 105, 116, 99, 111, 105, 110, 32, 115, 101, 101, 100,
        ]),
        rX = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        );
      function rQ(e, t) {
        let a = "";
        for (; e; )
          (a = "0123456789abcdef"[e % 16] + a), (e = Math.trunc(e / 16));
        for (; a.length < 2 * t; ) a = "0" + a;
        return "0x" + a;
      }
      function r0(e) {
        let t = (0, o.getBytes)(e),
          a = (0, o.dataSlice)((0, eu.sha256)((0, eu.sha256)(t)), 0, 4),
          r = (0, o.concat)([t, a]);
        return (0, aU.encodeBase58)(r);
      }
      let r1 = {};
      function r2(e, t, a, r) {
        let c = new Uint8Array(37);
        0x80000000 & e
          ? ((0, B.assert)(
              null != r,
              "cannot derive child of neutered node",
              "UNSUPPORTED_OPERATION",
              { operation: "deriveChild" }
            ),
            c.set((0, o.getBytes)(r), 1))
          : c.set((0, o.getBytes)(a));
        for (let t = 24; t >= 0; t -= 8)
          c[33 + (t >> 3)] = (e >> (24 - t)) & 255;
        let s = (0, o.getBytes)(W("sha512", t, c));
        return { IL: s.slice(0, 32), IR: s.slice(32) };
      }
      function r5(e, t) {
        let a = t.split("/");
        (0, B.assertArgument)(a.length > 0, "invalid path", "path", t),
          "m" === a[0] &&
            ((0, B.assertArgument)(
              0 === e.depth,
              'cannot derive root path (i.e. path starting with "m/") for a node at non-zero depth '.concat(
                e.depth
              ),
              "path",
              t
            ),
            a.shift());
        let r = e;
        for (let e = 0; e < a.length; e++) {
          let t = a[e];
          if (t.match(/^[0-9]+'$/)) {
            let a = parseInt(t.substring(0, t.length - 1));
            (0, B.assertArgument)(
              a < 0x80000000,
              "invalid path index",
              "path[".concat(e, "]"),
              t
            ),
              (r = r.deriveChild(0x80000000 + a));
          } else if (t.match(/^[0-9]+$/)) {
            let a = parseInt(t);
            (0, B.assertArgument)(
              a < 0x80000000,
              "invalid path index",
              "path[".concat(e, "]"),
              t
            ),
              (r = r.deriveChild(a));
          } else
            (0, B.assertArgument)(
              !1,
              "invalid path component",
              "path[".concat(e, "]"),
              t
            );
        }
        return r;
      }
      var r3 = new WeakSet();
      class r6 extends rs {
        connect(e) {
          return new r6(
            r1,
            this.signingKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            this.mnemonic,
            e
          );
        }
        async encrypt(e, t) {
          return await rH((0, tV._)(this, r3, r8).call(this), e, {
            progressCallback: t,
          });
        }
        encryptSync(e) {
          return rj((0, tV._)(this, r3, r8).call(this), e);
        }
        get extendedKey() {
          return (
            (0, B.assert)(
              this.depth < 256,
              "Depth too deep",
              "UNSUPPORTED_OPERATION",
              { operation: "extendedKey" }
            ),
            r0(
              (0, o.concat)([
                "0x0488ADE4",
                rQ(this.depth, 1),
                this.parentFingerprint,
                rQ(this.index, 4),
                this.chainCode,
                (0, o.concat)(["0x00", this.privateKey]),
              ])
            )
          );
        }
        hasPath() {
          return null != this.path;
        }
        neuter() {
          return new r9(
            r1,
            this.address,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            this.provider
          );
        }
        deriveChild(e) {
          let t = (0, eG.getNumber)(e, "index");
          (0, B.assertArgument)(t <= 0xffffffff, "invalid index", "index", t);
          let a = this.path;
          a && ((a += "/" + (0x7fffffff & t)), 0x80000000 & t && (a += "'"));
          let { IR: r, IL: c } = r2(
            t,
            this.chainCode,
            this.publicKey,
            this.privateKey
          );
          return new r6(
            r1,
            new eM.SigningKey(
              (0, eG.toBeHex)(
                ((0, eG.toBigInt)(c) + BigInt(this.privateKey)) % rX,
                32
              )
            ),
            this.fingerprint,
            (0, o.hexlify)(r),
            a,
            t,
            this.depth + 1,
            this.mnemonic,
            this.provider
          );
        }
        derivePath(e) {
          return r5(this, e);
        }
        static fromExtendedKey(e) {
          let t = (0, eG.toBeArray)((0, aU.decodeBase58)(e));
          (0, B.assertArgument)(
            82 === t.length || r0(t.slice(0, 78)) === e,
            "invalid extended key",
            "extendedKey",
            "[ REDACTED ]"
          );
          let a = t[4],
            r = (0, o.hexlify)(t.slice(5, 9)),
            c = parseInt((0, o.hexlify)(t.slice(9, 13)).substring(2), 16),
            s = (0, o.hexlify)(t.slice(13, 45)),
            n = t.slice(45, 78);
          switch ((0, o.hexlify)(t.slice(0, 4))) {
            case "0x0488b21e":
            case "0x043587cf": {
              let e = (0, o.hexlify)(n);
              return new r9(
                r1,
                (0, eW.computeAddress)(e),
                e,
                r,
                s,
                null,
                c,
                a,
                null
              );
            }
            case "0x0488ade4":
            case "0x04358394 ":
              if (0 !== n[0]) break;
              return new r6(
                r1,
                new eM.SigningKey(n.slice(1)),
                r,
                s,
                null,
                c,
                a,
                null,
                null
              );
          }
          (0, B.assertArgument)(
            !1,
            "invalid extended key prefix",
            "extendedKey",
            "[ REDACTED ]"
          );
        }
        static createRandom(e, t, a) {
          null == e && (e = ""),
            null == t && (t = rY),
            null == a && (a = a4.wordlist());
          let r = ra.fromEntropy(V(16), e, a);
          return (0, rn._)(r6, r6, r4)
            .call(r6, r.computeSeed(), r)
            .derivePath(t);
        }
        static fromMnemonic(e, t) {
          return (
            t || (t = rY),
            (0, rn._)(r6, r6, r4).call(r6, e.computeSeed(), e).derivePath(t)
          );
        }
        static fromPhrase(e, t, a, r) {
          null == t && (t = ""),
            null == a && (a = rY),
            null == r && (r = a4.wordlist());
          let c = ra.fromPhrase(e, t, r);
          return (0, rn._)(r6, r6, r4)
            .call(r6, c.computeSeed(), c)
            .derivePath(a);
        }
        static fromSeed(e) {
          return (0, rn._)(r6, r6, r4).call(r6, e, null);
        }
        constructor(e, t, a, r, c, s, n, i, x) {
          super(t, x),
            (0, tJ._)(this, r3),
            (0, I._)(this, "publicKey", void 0),
            (0, I._)(this, "fingerprint", void 0),
            (0, I._)(this, "parentFingerprint", void 0),
            (0, I._)(this, "mnemonic", void 0),
            (0, I._)(this, "chainCode", void 0),
            (0, I._)(this, "path", void 0),
            (0, I._)(this, "index", void 0),
            (0, I._)(this, "depth", void 0),
            (0, B.assertPrivate)(e, r1, "HDNodeWallet"),
            (0, O.defineProperties)(this, { publicKey: t.compressedPublicKey });
          let d = (0, o.dataSlice)(el((0, eu.sha256)(this.publicKey)), 0, 4);
          (0, O.defineProperties)(this, {
            parentFingerprint: a,
            fingerprint: d,
            chainCode: r,
            path: c,
            index: s,
            depth: n,
          }),
            (0, O.defineProperties)(this, { mnemonic: i });
        }
      }
      function r8() {
        let e = { address: this.address, privateKey: this.privateKey },
          t = this.mnemonic;
        return (
          this.path &&
            t &&
            "en" === t.wordlist.locale &&
            "" === t.password &&
            (e.mnemonic = {
              path: this.path,
              locale: "en",
              entropy: t.entropy,
            }),
          e
        );
      }
      function r4(e, t) {
        (0, B.assertArgument)(
          (0, o.isBytesLike)(e),
          "invalid seed",
          "seed",
          "[REDACTED]"
        );
        let a = (0, o.getBytes)(e, "seed");
        (0, B.assertArgument)(
          a.length >= 16 && a.length <= 64,
          "invalid seed",
          "seed",
          "[REDACTED]"
        );
        let r = (0, o.getBytes)(W("sha512", rZ, a));
        return new r6(
          r1,
          new eM.SigningKey((0, o.hexlify)(r.slice(0, 32))),
          "0x00000000",
          (0, o.hexlify)(r.slice(32)),
          "m",
          0,
          0,
          t,
          null
        );
      }
      class r9 extends ri.VoidSigner {
        connect(e) {
          return new r9(
            r1,
            this.address,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            e
          );
        }
        get extendedKey() {
          return (
            (0, B.assert)(
              this.depth < 256,
              "Depth too deep",
              "UNSUPPORTED_OPERATION",
              { operation: "extendedKey" }
            ),
            r0(
              (0, o.concat)([
                "0x0488B21E",
                rQ(this.depth, 1),
                this.parentFingerprint,
                rQ(this.index, 4),
                this.chainCode,
                this.publicKey,
              ])
            )
          );
        }
        hasPath() {
          return null != this.path;
        }
        deriveChild(e) {
          let t = (0, eG.getNumber)(e, "index");
          (0, B.assertArgument)(t <= 0xffffffff, "invalid index", "index", t);
          let a = this.path;
          a && ((a += "/" + (0x7fffffff & t)), 0x80000000 & t && (a += "'"));
          let { IR: r, IL: c } = r2(t, this.chainCode, this.publicKey, null),
            s = eM.SigningKey.addPoints(c, this.publicKey, !0);
          return new r9(
            r1,
            (0, eW.computeAddress)(s),
            s,
            this.fingerprint,
            (0, o.hexlify)(r),
            a,
            t,
            this.depth + 1,
            this.provider
          );
        }
        derivePath(e) {
          return r5(this, e);
        }
        constructor(e, t, a, r, c, s, n, i, x) {
          super(t, x),
            (0, I._)(this, "publicKey", void 0),
            (0, I._)(this, "fingerprint", void 0),
            (0, I._)(this, "parentFingerprint", void 0),
            (0, I._)(this, "chainCode", void 0),
            (0, I._)(this, "path", void 0),
            (0, I._)(this, "index", void 0),
            (0, I._)(this, "depth", void 0),
            (0, B.assertPrivate)(e, r1, "HDNodeVoidWallet"),
            (0, O.defineProperties)(this, { publicKey: a });
          let d = (0, o.dataSlice)(el((0, eu.sha256)(a)), 0, 4);
          (0, O.defineProperties)(this, {
            publicKey: a,
            fingerprint: d,
            parentFingerprint: r,
            chainCode: c,
            path: s,
            index: n,
            depth: i,
          });
        }
      }
      function r7(e) {
        let t = (0, eG.getNumber)(e, "index");
        return (
          (0, B.assertArgument)(
            t >= 0 && t < 0x80000000,
            "invalid account index",
            "index",
            t
          ),
          "m/44'/60'/".concat(t, "'/0/0")
        );
      }
      function ce(e) {
        let t = (0, eG.getNumber)(e, "index");
        return (
          (0, B.assertArgument)(
            t >= 0 && t < 0x80000000,
            "invalid account index",
            "index",
            t
          ),
          "m/44'/60'/0'/0/".concat(t)
        );
      }
      function ct(e) {
        try {
          if (JSON.parse(e).encseed) return !0;
        } catch (e) {}
        return !1;
      }
      function ca(e, t) {
        let a = JSON.parse(e),
          r = rF(t),
          c = (0, y.getAddress)(rM(a, "ethaddr:string!")),
          s = rU(rM(a, "encseed:string!"));
        (0, B.assertArgument)(
          s && s.length % 16 == 0,
          "invalid encseed",
          "json",
          e
        );
        let n = (0, o.getBytes)(em(r, r, 2e3, 32, "sha256")).slice(0, 16),
          i = s.slice(0, 16),
          x = s.slice(16),
          d = new rC(n, i),
          f = (function (e) {
            if (e.length < 16) throw TypeError("PKCS#7 invalid length");
            let t = e[e.length - 1];
            if (t > 16) throw TypeError("PKCS#7 padding byte out of range");
            let a = e.length - t;
            for (let r = 0; r < t; r++)
              if (e[a + r] !== t)
                throw TypeError("PKCS#7 invalid padding byte");
            return new Uint8Array(e.subarray(0, a));
          })((0, o.getBytes)(d.decrypt(x))),
          b = "";
        for (let e = 0; e < f.length; e++) b += String.fromCharCode(f[e]);
        return { address: c, privateKey: (0, eL.id)(b) };
      }
      function cr(e) {
        return new Promise((t) => {
          setTimeout(() => {
            t();
          }, e);
        });
      }
      class cc extends rs {
        connect(e) {
          return new cc(this.signingKey, e);
        }
        async encrypt(e, t) {
          let a = { address: this.address, privateKey: this.privateKey };
          return await rH(a, e, { progressCallback: t });
        }
        encryptSync(e) {
          return rj({ address: this.address, privateKey: this.privateKey }, e);
        }
        static async fromEncryptedJson(e, t, a) {
          let r = null;
          return (
            rK(e)
              ? (r = await rV(e, t, a))
              : ct(e) &&
                (a && (a(0), await cr(0)),
                (r = ca(e, t)),
                a && (a(1), await cr(0))),
            (0, rn._)(cc, cc, cs).call(cc, r)
          );
        }
        static fromEncryptedJsonSync(e, t) {
          let a = null;
          return (
            rK(e)
              ? (a = rG(e, t))
              : ct(e)
              ? (a = ca(e, t))
              : (0, B.assertArgument)(
                  !1,
                  "invalid JSON wallet",
                  "json",
                  "[ REDACTED ]"
                ),
            (0, rn._)(cc, cc, cs).call(cc, a)
          );
        }
        static createRandom(e) {
          let t = r6.createRandom();
          return e ? t.connect(e) : t;
        }
        static fromPhrase(e, t) {
          let a = r6.fromPhrase(e);
          return t ? a.connect(t) : a;
        }
        constructor(e, t) {
          "string" != typeof e || e.startsWith("0x") || (e = "0x" + e),
            super("string" == typeof e ? new eM.SigningKey(e) : e, t);
        }
      }
      function cs(e) {
        if (
          ((0, B.assertArgument)(
            e,
            "invalid JSON wallet",
            "json",
            "[ REDACTED ]"
          ),
          "mnemonic" in e && e.mnemonic && "en" === e.mnemonic.locale)
        ) {
          let t = ra.fromEntropy(e.mnemonic.entropy),
            a = r6.fromMnemonic(t, e.mnemonic.path);
          if (a.address === e.address && a.privateKey === e.privateKey)
            return a;
          console.log(
            "WARNING: JSON mismatch address/privateKey != mnemonic; fallback onto private key"
          );
        }
        let t = new cc(e.privateKey);
        return (
          (0, B.assertArgument)(
            t.address === e.address,
            "address/privateKey mismatch",
            "json",
            "[ REDACTED ]"
          ),
          t
        );
      }
      var cn = new WeakMap();
      class ci extends a3 {
        get _accent() {
          return (0, tn._)(this, cn);
        }
        _decodeWords() {
          var e, t;
          let a;
          return (
            (e = this._data),
            (t = this._accent),
            (a = aX(e).join(",")),
            t.split(/,/g).forEach((e) => {
              let r = e.match(/^([a-z]*)([0-9]+)([0-9])(.*)$/);
              (0, B.assertArgument)(
                null !== r,
                "internal error parsing accents",
                "accents",
                t
              );
              let c = 0,
                s = (function (e, t) {
                  let a = (1 << e) - 1,
                    r = [],
                    c = 0,
                    s = 0,
                    n = 0;
                  for (let i = 0; i < t.length; i++)
                    for (
                      c =
                        (c << 6) |
                        ")!@#$%^&*(ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".indexOf(
                          t[i]
                        ),
                        s += 6;
                      s >= e;

                    ) {
                      let t = c >> (s - e);
                      (c &= (1 << (s - e)) - 1),
                        (s -= e),
                        0 === t ? (n += a) : (r.push(t + n), (n = 0));
                    }
                  return r;
                })(parseInt(r[3]), r[4]),
                n = parseInt(r[2]),
                i = RegExp("([".concat(r[1], "])"), "g");
              a = a.replace(
                i,
                (e, t) => (
                  0 == --s[c] &&
                    ((t = String.fromCharCode(t.charCodeAt(0), n)), c++),
                  t
                )
              );
            }),
            a.split(",")
          );
        }
        constructor(e, t, a, r) {
          super(e, t, r),
            (0, ti._)(this, cn, { writable: !0, value: void 0 }),
            (0, tx._)(this, cn, a);
        }
      }
      let cx = { en: a4.wordlist() };
      e.i(66513), e.i(141860);
      var cd = e.i(364144);
    },
  },
]);

//# sourceMappingURL=f2b5036908905412.js.map
