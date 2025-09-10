(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    596626: (e) => {
      e.v(
        JSON.parse(
          '[{"inputs":[{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"address","name":"_saleToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_usdtEthPool","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"PRICE_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE_INCREMENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SELL_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressToRefCode","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes32","name":"_refcode","type":"bytes32"}],"name":"buyTokenETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_usdtAmount","type":"uint256"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes32","name":"_refcode","type":"bytes32"}],"name":"buyTokenUSDT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getETHPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPresaleUsers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ethAmount","type":"uint256"}],"name":"getTokenAmountETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_usdtAmount","type":"uint256"}],"name":"getTokenAmountUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenPriceETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenPriceUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"presaleUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"refBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"refCodeToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"refCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"refEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrerToReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiver","type":"address"}],"name":"setReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenPrice","type":"uint256"}],"name":"setTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSoldUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtEthPool","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"refcode","type":"bytes32"}],"name":"BuyTokenETH","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"refcode","type":"bytes32"}],"name":"BuyTokenUSDT","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"}],"name":"PresaleStarted","type":"event"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"}]'
        )
      );
    },
    638224: (e) => {
      e.v(
        JSON.parse(
          '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]'
        )
      );
    },
    610570: (e) => {
      e.v(
        JSON.parse(
          '[{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"REQUEST_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ethaiToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"requestTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensClaimed","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"}]'
        )
      );
    },
    744232: (e) => {
      "use strict";
      e.s(
        {
          AppKit: () => W,
          chainID: () => k,
          faucetAbi: () => L,
          faucetAddress: () => R,
          modal: () => q,
          presaleAbi: () => H,
          presaleAddr: () => x,
          rpcUrls: () => D,
          tokenAbi: () => B,
          tokenAddress: () => S,
          usdtAddress: () => O,
        },
        744232
      ),
        e.i(922271);
      var t = e.i(731636);
      e.i(435187);
      var n = e.i(100615);
      e.i(105009);
      var a = e.i(487568),
        i = e.i(358271);
      e.i(198049), e.i(747496), e.i(938794);
      var s = e.i(775078);
      e.i(931951);
      var r = e.i(446322),
        o = e.i(386192),
        u = e.i(850524),
        d = e.i(308080),
        p = e.i(868263),
        l = e.i(983222),
        c = e.i(55931),
        y = e.i(864510),
        m = e.i(674571),
        f = e.i(162966),
        h = e.i(808439),
        b = e.i(932710),
        v = e.i(76598),
        w = e.i(640815),
        C = e.i(488064),
        E = e.i(815751),
        T = e.i(693667),
        g = e.i(713514),
        N = e.i(853399);
      let A = {
        signMessage: async (e, t, n) => {
          if (!t) throw Error("signMessage - provider is undefined");
          let a = (0, g.isHexString)(e)
            ? e
            : (0, g.hexlify)((0, N.toUtf8Bytes)(e));
          return await t.request({ method: "personal_sign", params: [a, n] });
        },
        estimateGas: async (e, t, n, i) => {
          if (!t) throw Error("estimateGas - provider is undefined");
          if (!n) throw Error("estimateGas - address is undefined");
          if (e.chainNamespace && "eip155" !== e.chainNamespace)
            throw Error("estimateGas - chainNamespace is not eip155");
          let s = { from: e.address, to: e.to, data: e.data, type: 0 },
            r = new E.BrowserProvider(t, i),
            o = new a.JsonRpcSigner(r, n);
          return await o.estimateGas(s);
        },
        sendTransaction: async (e, t, n, i) => {
          if (!t) throw Error("sendTransaction - provider is undefined");
          if (!n) throw Error("sendTransaction - address is undefined");
          if (e.chainNamespace && "eip155" !== e.chainNamespace)
            throw Error("sendTransaction - chainNamespace is not eip155");
          let s = {
              to: e.to,
              value: e.value,
              gasLimit: e.gas,
              gasPrice: e.gasPrice,
              data: e.data,
              type: 0,
            },
            r = new E.BrowserProvider(t, i),
            o = new a.JsonRpcSigner(r, n),
            u = await o.sendTransaction(s),
            d = await u.wait();
          return (null == d ? void 0 : d.hash) || null;
        },
        writeContract: async (e, t, n, i) => {
          if (!t) throw Error("writeContract - provider is undefined");
          if (!n) throw Error("writeContract - address is undefined");
          let s = new E.BrowserProvider(t, i),
            r = new a.JsonRpcSigner(s, n),
            o = new T.Contract(e.tokenAddress, e.abi, r);
          if (!o || !e.method) throw Error("Contract method is undefined");
          let u = o[e.method];
          if (u) return await u(...e.args);
          throw Error("Contract method is undefined");
        },
        parseWalletCapabilities: (e) => {
          try {
            return JSON.parse(e);
          } catch (e) {
            throw Error("Error parsing wallet capabilities");
          }
        },
        parseUnits: i.parseUnits,
        formatUnits: i.formatUnits,
      };
      class U extends w.AdapterBlueprint {
        async createEthersConfig(t) {
          let n;
          if (!t.metadata) return;
          async function a() {
            let { SafeProvider: t } = await e.r(581777)(e.i),
              { default: n } = await e.r(351739)(e.i),
              a = new n(),
              i = new t(await a.safe.getInfo(), a);
            return (
              await i.connect().catch((e) => {
                console.info("Failed to auto-connect to Safe:", e);
              }),
              i
            );
          }
          async function i() {
            try {
              var n, a, i, s;
              let { createCoinbaseWalletSDK: r } = await e.r(34488)(e.i);
              if ("undefined" == typeof window) return;
              return r({
                appName:
                  null == t || null == (n = t.metadata) ? void 0 : n.name,
                appLogoUrl:
                  null == t || null == (a = t.metadata) ? void 0 : a.icons[0],
                appChainIds: (null == (i = t.networks)
                  ? void 0
                  : i.map((e) => e.id)) || [1, 84532],
                preference: {
                  options: null != (s = t.coinbasePreference) ? s : "all",
                },
              }).getProvider();
            } catch (e) {
              console.error("Failed to import Coinbase Wallet SDK:", e);
              return;
            }
          }
          let r = { metadata: t.metadata };
          if (
            (!1 !== t.enableInjected &&
              (r.injected =
                n ||
                ("undefined" == typeof window
                  ? void 0
                  : window.ethereum
                  ? (n = window.ethereum)
                  : void 0)),
            !1 !== t.enableCoinbase)
          ) {
            let e = await i();
            e && (r.coinbase = e);
          }
          if (s.CoreHelperUtil.isSafeApp()) {
            let e = await a();
            e && (r.safe = e);
          }
          return (r.EIP6963 = !1 !== t.enableEIP6963), r;
        }
        async signMessage(e) {
          let { message: t, address: n, provider: a } = e;
          if (!a) throw Error("Provider is undefined");
          try {
            return { signature: await A.signMessage(t, a, n) };
          } catch (e) {
            throw Error("EthersAdapter:signMessage - Sign message failed");
          }
        }
        async sendTransaction(e) {
          var t;
          if (!e.provider) throw Error("Provider is undefined");
          return {
            hash: await A.sendTransaction(
              {
                value: Number.isNaN(Number(e.value))
                  ? BigInt(0)
                  : BigInt(e.value),
                to: e.to,
                data: e.data ? e.data : "0x",
                gas: e.gas ? BigInt(e.gas) : void 0,
                gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
                address: p.AccountController.state.address,
              },
              e.provider,
              p.AccountController.state.address,
              Number(null == (t = e.caipNetwork) ? void 0 : t.id)
            ),
          };
        }
        async writeContract(e) {
          var t;
          if (!e.provider) throw Error("Provider is undefined");
          let { address: n } = d.ParseUtil.parseCaipAddress(e.caipAddress);
          return {
            hash: await A.writeContract(
              e,
              e.provider,
              n,
              Number(null == (t = e.caipNetwork) ? void 0 : t.id)
            ),
          };
        }
        async estimateGas(e) {
          let { provider: t, caipNetwork: n, address: a } = e;
          if (!t) throw Error("Provider is undefined");
          try {
            return {
              gas: await A.estimateGas(
                { data: e.data, to: e.to, address: a },
                t,
                a,
                Number(null == n ? void 0 : n.id)
              ),
            };
          } catch (e) {
            throw Error("EthersAdapter:estimateGas - Estimate gas failed");
          }
        }
        parseUnits(e) {
          return A.parseUnits(e.value, e.decimals);
        }
        formatUnits(e) {
          return A.formatUnits(e.value, e.decimals);
        }
        async syncConnection(e) {
          let { id: t, chainId: n } = e,
            a = this.connectors.find((e) => e.id === t),
            i = null == a ? void 0 : a.provider;
          if (!i) throw Error("Provider not found");
          let s = await i.request({ method: "eth_requestAccounts" }),
            r = await i.request({ method: "eth_chainId" });
          if ((this.listenProviderEvents(t, i), !s[0]))
            throw Error("No accounts found");
          if (!(null == a ? void 0 : a.type))
            throw Error("Connector type not found");
          return {
            address: s[0],
            chainId: Number(r) || Number(n),
            provider: i,
            type: a.type,
            id: t,
          };
        }
        async syncConnectors(e) {
          var t;
          (this.ethersConfig = await this.createEthersConfig(e)),
            (null == (t = this.ethersConfig) ? void 0 : t.EIP6963) &&
              this.listenInjectedConnector(!0),
            Object.keys(this.ethersConfig || {})
              .filter((e) => "metadata" !== e && "EIP6963" !== e)
              .forEach((t) => {
                let n = "coinbase" === t ? "coinbaseWalletSDK" : t,
                  a = t === u.ConstantsUtil.CONNECTOR_ID.INJECTED;
                if (this.namespace) {
                  var i, s, r;
                  this.addConnector({
                    id: n,
                    explorerId: h.PresetsUtil.ConnectorExplorerIds[n],
                    imageUrl:
                      null == e || null == (i = e.connectorImages)
                        ? void 0
                        : i[n],
                    name: h.PresetsUtil.ConnectorNamesMap[n] || "Unknown",
                    imageId: h.PresetsUtil.ConnectorImageIds[n],
                    type:
                      null != (r = h.PresetsUtil.ConnectorTypesMap[n])
                        ? r
                        : "EXTERNAL",
                    info: a ? void 0 : { rdns: n },
                    chain: this.namespace,
                    chains: [],
                    provider: null == (s = this.ethersConfig) ? void 0 : s[t],
                  });
                }
              });
        }
        async disconnectAll() {
          return {
            connections: await Promise.all(
              this.connections.map(async (e) => {
                let t = this.connectors.find((t) =>
                  f.HelpersUtil.isLowerCaseMatch(t.id, e.connectorId)
                );
                if (!t) throw Error("Connector not found");
                return await this.disconnect({ id: t.id }), e;
              })
            ),
          };
        }
        async syncConnections(e) {
          var t;
          let { connectToFirstConnector: n, getConnectorStorageInfo: a } = e;
          await (null == (t = this.connectionManager)
            ? void 0
            : t.syncConnections({
                connectors: this.connectors,
                caipNetworks: this.getCaipNetworks(),
                universalProvider: this.universalProvider,
                onConnection: this.addConnection.bind(this),
                onListenProvider: this.listenProviderEvents.bind(this),
                getConnectionStatusInfo: (e) => a(e),
              })),
            n && this.emitFirstAvailableConnection();
        }
        async setUniversalProvider(e) {
          this.universalProvider = e;
          let t = u.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
          return (
            o.WcHelpersUtil.listenWcProvider({
              universalProvider: e,
              namespace: u.ConstantsUtil.CHAIN.EVM,
              onConnect: (e) => this.onConnect(e, t),
              onDisconnect: () => this.onDisconnect(t),
              onAccountsChanged: (e) => this.onAccountsChanged(e, t, !1),
              onChainChanged: (e) => this.onChainChanged(e, t),
            }),
            this.addConnector(
              new C.WalletConnectConnector({
                provider: e,
                caipNetworks: this.getCaipNetworks(),
                namespace: u.ConstantsUtil.CHAIN.EVM,
              })
            ),
            Promise.resolve()
          );
        }
        eip6963EventHandler(e) {
          if (e.detail) {
            var t;
            let { info: n, provider: a } = e.detail;
            if (
              !(null == (t = this.connectors)
                ? void 0
                : t.find((e) => e.name === (null == n ? void 0 : n.name)))
            ) {
              let e =
                  h.PresetsUtil.ConnectorTypesMap[
                    u.ConstantsUtil.CONNECTOR_ID.EIP6963
                  ],
                t =
                  (null == n ? void 0 : n.rdns) ||
                  (null == n ? void 0 : n.name) ||
                  (null == n ? void 0 : n.uuid);
              e &&
                this.namespace &&
                t &&
                this.addConnector({
                  id: t,
                  type: e,
                  imageUrl: null == n ? void 0 : n.icon,
                  name: (null == n ? void 0 : n.name) || "Unknown",
                  provider: a,
                  info: n,
                  chain: this.namespace,
                  chains: [],
                });
            }
          }
        }
        listenInjectedConnector(e) {
          if ("undefined" != typeof window && e) {
            let e = this.eip6963EventHandler.bind(this);
            window.addEventListener(m.ConstantsUtil.EIP6963_ANNOUNCE_EVENT, e),
              window.dispatchEvent(
                new Event(m.ConstantsUtil.EIP6963_REQUEST_EVENT)
              );
          }
        }
        async connect(e) {
          var t;
          let n,
            { id: a, address: i, type: s, chainId: r, socialUri: o } = e,
            d = this.connectors.find((e) =>
              f.HelpersUtil.isLowerCaseMatch(e.id, a)
            );
          if (!d) throw Error("Connector not found");
          let p =
            null == (t = this.connectionManager)
              ? void 0
              : t.getConnection({
                  address: i,
                  connectorId: a,
                  connections: this.connections,
                  connectors: this.connectors,
                });
          if (p) {
            let e = p.caipNetwork;
            if (!e)
              throw Error(
                "EthersAdapter:connect - could not find the caipNetwork to connect"
              );
            if (p.account)
              return (
                this.emit("accountChanged", {
                  address: p.account.address,
                  chainId: e.id,
                  connector: d,
                }),
                {
                  address: p.account.address,
                  chainId: e.id,
                  provider: d.provider,
                  type: d.type,
                  id: a,
                }
              );
          }
          let h = null == d ? void 0 : d.provider;
          if (!h) throw Error("Provider not found");
          let b = [];
          if (s === m.ConstantsUtil.CONNECTOR_TYPE_AUTH) {
            let { address: e, accounts: t } =
                await l.SIWXUtil.authConnectorAuthenticate({
                  authConnector: h,
                  chainNamespace: u.ConstantsUtil.CHAIN.EVM,
                  chainId: r,
                  socialUri: o,
                  preferredAccountType: (0, y.getPreferredAccountType)(
                    "eip155"
                  ),
                }),
              n = this.getCaipNetworks().find(
                (e) => e.id.toString() === (null == r ? void 0 : r.toString())
              );
            (b = [e]),
              this.addConnection({
                connectorId: a,
                accounts: t
                  ? t.map((e) => ({ address: e.address }))
                  : b.map((e) => ({ address: e })),
                caipNetwork: n,
                auth: {
                  name: c.StorageUtil.getConnectedSocialProvider(),
                  username: c.StorageUtil.getConnectedSocialUsername(),
                },
              }),
              this.emit("accountChanged", {
                address: b[0],
                chainId: Number(r),
                connector: d,
              });
          } else {
            (b = await h.request({ method: "eth_requestAccounts" })),
              (n = await h.request({ method: "eth_chainId" }));
            let e = this.getCaipNetworks().find(
              (e) => e.id.toString() === (null == r ? void 0 : r.toString())
            );
            if (n !== r) {
              if (!e)
                throw Error(
                  "EthersAdapter:connect - could not find the caipNetwork to switch"
                );
              try {
                await this.switchNetwork({
                  caipNetwork: e,
                  provider: h,
                  providerType: s,
                });
              } catch (e) {
                throw Error("EthersAdapter:connect - Switch network failed");
              }
            }
            this.emit("accountChanged", {
              address: b[0],
              chainId: Number(r),
              connector: d,
            }),
              this.addConnection({
                connectorId: a,
                accounts: b.map((e) => ({ address: e })),
                caipNetwork: e,
              }),
              d.id !== u.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT &&
                this.listenProviderEvents(a, h);
          }
          return {
            address: b[0],
            chainId: Number(r),
            provider: h,
            type: s,
            id: a,
          };
        }
        async reconnect(e) {
          let { id: t, chainId: n } = e,
            a = this.connectors.find((e) => e.id === t);
          a &&
            "AUTH" === a.type &&
            n &&
            (await l.SIWXUtil.authConnectorAuthenticate({
              authConnector: a.provider,
              chainNamespace: u.ConstantsUtil.CHAIN.EVM,
              chainId: n,
              preferredAccountType: (0, y.getPreferredAccountType)("eip155"),
            }));
        }
        async getAccounts(e) {
          var t;
          let n = this.connectors.find((t) => t.id === e.id),
            a = null == n ? void 0 : n.provider;
          if (!a || !n) throw Error("Provider not found");
          let i =
            null == (t = this.connectionManager)
              ? void 0
              : t.getConnection({
                  connectorId: e.id,
                  connections: this.connections,
                  connectors: this.connectors,
                });
          if (i)
            return {
              accounts: i.accounts.map((e) => {
                let { address: t } = e;
                return s.CoreHelperUtil.createAccount(
                  u.ConstantsUtil.CHAIN.EVM,
                  t,
                  "eoa"
                );
              }),
            };
          if (e.id === u.ConstantsUtil.CONNECTOR_ID.AUTH) {
            let e = n.provider;
            if (!e.user) return { accounts: [] };
            let { accounts: t, address: a } = e.user;
            return Promise.resolve({
              accounts: (t || [{ address: a, type: "eoa" }]).map((e) =>
                s.CoreHelperUtil.createAccount(
                  u.ConstantsUtil.CHAIN.EVM,
                  e.address,
                  e.type
                )
              ),
            });
          }
          return {
            accounts: (await a.request({ method: "eth_requestAccounts" })).map(
              (e) =>
                s.CoreHelperUtil.createAccount(
                  u.ConstantsUtil.CHAIN.EVM,
                  e,
                  "eoa"
                )
            ),
          };
        }
        async disconnect(e) {
          if (e.id) {
            var t, n;
            let a = this.connectors.find((t) =>
              f.HelpersUtil.isLowerCaseMatch(t.id, e.id)
            );
            if (!a) throw Error("Connector not found");
            let i =
              null == (t = this.connectionManager)
                ? void 0
                : t.getConnection({
                    connectorId: e.id,
                    connections: this.connections,
                    connectors: this.connectors,
                  });
            switch (a.type) {
              case m.ConstantsUtil.CONNECTOR_TYPE_WALLET_CONNECT:
                a.provider.session && a.provider.disconnect();
                break;
              case m.ConstantsUtil.CONNECTOR_TYPE_AUTH:
                await (null == (n = a.provider) ? void 0 : n.disconnect());
                break;
              case m.ConstantsUtil.CONNECTOR_TYPE_ANNOUNCED:
              case m.ConstantsUtil.CONNECTOR_TYPE_EXTERNAL:
                await this.revokeProviderPermissions(a.provider);
                break;
              default:
                throw Error("Unsupported provider type");
            }
            return (
              a.id &&
                (this.removeProviderListeners(a.id),
                this.deleteConnection(a.id)),
              0 === this.connections.length
                ? this.emit("disconnect")
                : this.emitFirstAvailableConnection(),
              { connections: i ? [i] : [] }
            );
          }
          return this.disconnectAll();
        }
        async getBalance(e) {
          let t = e.address,
            n = this.getCaipNetworks().find((t) => {
              var n;
              return (
                t.id.toString() ===
                (null == (n = e.chainId) ? void 0 : n.toString())
              );
            });
          if (!t) return Promise.resolve({ balance: "0.00", symbol: "ETH" });
          if (n && n.chainNamespace === u.ConstantsUtil.CHAIN.EVM) {
            let e = "".concat(n.caipNetworkId, ":").concat(t),
              s = this.balancePromises[e];
            if (s) return s;
            let r = c.StorageUtil.getNativeBalanceCacheForCaipAddress(e);
            if (r) return { balance: r.balance, symbol: r.symbol };
            let o = new a.JsonRpcProvider(n.rpcUrls.default.http[0], {
              chainId: n.id,
              name: n.name,
            });
            if (o)
              try {
                return (
                  (this.balancePromises[e] = new Promise(async (a) => {
                    try {
                      let s = await o.getBalance(t),
                        r = (0, i.formatEther)(s);
                      c.StorageUtil.updateNativeBalanceCache({
                        caipAddress: e,
                        balance: r,
                        symbol: n.nativeCurrency.symbol,
                        timestamp: Date.now(),
                      }),
                        a({ balance: r, symbol: n.nativeCurrency.symbol });
                    } catch (e) {
                      a({ balance: "0.00", symbol: "ETH" });
                    }
                  }).finally(() => {
                    delete this.balancePromises[e];
                  })),
                  this.balancePromises[e] || { balance: "0.00", symbol: "ETH" }
                );
              } catch (e) {}
          }
          return { balance: "0.00", symbol: "ETH" };
        }
        async switchNetwork(e) {
          let { caipNetwork: t, provider: n, providerType: a } = e;
          if ("AUTH" === a) return void (await super.switchNetwork(e));
          try {
            await n.request({
              method: "wallet_switchEthereumChain",
              params: [
                { chainId: v.EthersHelpersUtil.numberToHexString(t.id) },
              ],
            });
          } catch (e) {
            var i, s;
            if (
              e.code === r.WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID ||
              e.code === r.WcConstantsUtil.ERROR_INVALID_CHAIN_ID ||
              e.code === r.WcConstantsUtil.ERROR_CODE_DEFAULT ||
              (null == e ||
              null == (s = e.data) ||
              null == (i = s.originalError)
                ? void 0
                : i.code) === r.WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID
            )
              await v.EthersHelpersUtil.addEthereumChain(n, t);
            else if ("ANNOUNCED" === a || "EXTERNAL" === a || "INJECTED" === a)
              throw Error("Chain is not supported");
          }
        }
        getWalletConnectProvider() {
          var e;
          return null ==
            (e = this.connectors.find((e) => "WALLET_CONNECT" === e.type))
            ? void 0
            : e.provider;
        }
        async revokeProviderPermissions(e) {
          try {
            (await e.request({ method: "wallet_getPermissions" })).find(
              (e) => "eth_accounts" === e.parentCapability
            ) &&
              (await e.request({
                method: "wallet_revokePermissions",
                params: [{ eth_accounts: {} }],
              }));
          } catch (e) {
            console.info(
              "Could not revoke permissions from wallet. Disconnecting...",
              e
            );
          }
        }
        async getCapabilities(e) {
          var t, n;
          let a = b.ProviderUtil.getProvider(u.ConstantsUtil.CHAIN.EVM);
          if (!a) throw Error("Provider is undefined");
          let i =
            null == (n = a.session) || null == (t = n.sessionProperties)
              ? void 0
              : t.capabilities;
          if (i) {
            let t = A.parseWalletCapabilities(i)[e];
            if (t) return t;
          }
          return await a.request({
            method: "wallet_getCapabilities",
            params: [e],
          });
        }
        async grantPermissions(e) {
          let t = b.ProviderUtil.getProvider(u.ConstantsUtil.CHAIN.EVM);
          if (!t) throw Error("Provider is undefined");
          return await t.request({
            method: "wallet_grantPermissions",
            params: e,
          });
        }
        async revokePermissions(e) {
          let t = b.ProviderUtil.getProvider(u.ConstantsUtil.CHAIN.EVM);
          if (!t) throw Error("Provider is undefined");
          return await t.request({
            method: "wallet_revokePermissions",
            params: [e],
          });
        }
        async walletGetAssets(e) {
          let t = b.ProviderUtil.getProvider(u.ConstantsUtil.CHAIN.EVM);
          if (!t) throw Error("Provider is undefined");
          return await t.request({ method: "wallet_getAssets", params: [e] });
        }
        constructor() {
          super({
            adapterType: u.ConstantsUtil.ADAPTER_TYPES.ETHERS,
            namespace: u.ConstantsUtil.CHAIN.EVM,
          }),
            (this.balancePromises = {});
        }
      }
      e.i(954248);
      var P = e.i(968347),
        M = e.i(596626),
        _ = e.i(638224),
        I = e.i(610570);
      let k = Number("1"),
        O = "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        x = {
          1: "0x03d0DecB20E9Dd8577031E3512a4552392978638",
          1337: "0x84F36aeF81aBf1E34bcA9e470fE15e12697CB7Fd",
        },
        R = {
          1: "0xeb596C0c8E2ACd4cfb3dE89C8Fd5f4c84bf57EDb",
          1337: "0x6dD1d5459CfF7eD8Bd60FdD08fb461A5A849469B",
        },
        S = {
          1: "0xE8AA1AD793ed17C9115DB1eEb9998Ea80c72f380",
          1337: "0x8356cD34362cF1E4d21Ea6A3321105370c40C69f",
        },
        D = {
          1: "https://bitter-fittest-snow.quiknode.pro/6abc1aaf1503bb505cd2832555abc4168fe465af/",
          1337: "https://ethnode.pxlfussel.org/",
        },
        H = M.default,
        B = _.default,
        L = I.default,
        F = (0, P.defineChain)({
          id: 1337,
          name: "PXL Testnet",
          chainNamespace: "eip155",
          caipNetworkId: "eip155:1337",
          nativeCurrency: { decimals: 18, name: "ETH" },
          rpcUrls: { default: { http: ["https://ethnode.pxlfussel.org/"] } },
        }),
        q = (0, n.createAppKit)({
          adapters: [new U()],
          metadata: {
            name: "Etherchain",
            description:
              "Etherchain is a new ai driven blockchain based on the ethereum network.",
            icon: ["https://etherchain.ai/logo_alpha_2.png"],
            url: "https://etherchain.ai",
          },
          networks: [
            {
              formatters: void 0,
              fees: void 0,
              serializers: void 0,
              id: 1,
              name: "Ethereum",
              nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
              rpcUrls: { default: { http: ["https://eth.merkle.io"] } },
              blockExplorers: {
                default: {
                  name: "Etherscan",
                  url: "https://etherscan.io",
                  apiUrl: "https://api.etherscan.io/api",
                },
              },
              contracts: {
                ensRegistry: {
                  address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                },
                ensUniversalResolver: {
                  address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
                  blockCreated: 0x125db65,
                },
                multicall3: {
                  address: "0xca11bde05977b3631167028862be2a173976ca11",
                  blockCreated: 0xdb04c1,
                },
              },
            },
            F,
          ],
          projectId: "0c82d60004fc76bbed53e2403cb22ef5",
          features: {
            analytics: !0,
            onramp: !1,
            swaps: !1,
            smartSessions: !1,
            email: !1,
            socials: !1,
          },
        });
      function W(e) {
        let { children: n } = e;
        return (0, t.jsx)(t.Fragment, { children: n });
      }
    },
  },
]);

//# sourceMappingURL=848e355ddfc31e42.js.map
