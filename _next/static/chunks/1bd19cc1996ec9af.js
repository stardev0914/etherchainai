(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    459758: (e) => {
      "use strict";
      e.s({ default: () => i }, 459758);
      var t = e.i(731636),
        r = e.i(838653),
        a = e.i(12448),
        s = e.i(55157);
      let c = {
          prefix: "fab",
          iconName: "twitter",
          icon: [
            512,
            512,
            [],
            "f099",
            "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
          ],
        },
        n = {
          prefix: "fab",
          iconName: "telegram",
          icon: [
            496,
            512,
            [62462, "telegram-plane"],
            "f2c6",
            "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z",
          ],
        };
      var l = e.i(747047);
      function i() {
        let [e, i] = (0, r.useState)(""),
          [o, d] = (0, r.useState)(""),
          [x, m] = (0, r.useState)(!1),
          [u, g] = (0, r.useState)(200),
          [h, b] = (0, r.useState)("MIT"),
          [f, y] = (0, r.useState)(""),
          [p, j] = (0, r.useState)(""),
          [v, N] = (0, r.useState)(!1),
          [k, w] = (0, r.useState)(null),
          [C, S] = (0, r.useState)([]),
          I = async (e) => {
            e.preventDefault(),
              N(!0),
              S([]),
              setTimeout(() => {
                Math.random() > 0.3
                  ? w("success")
                  : (w("error"),
                    S([
                      "Contract verification failed. Please check your source code and parameters.",
                    ])),
                  N(!1);
              }, 3e3);
          };
        return (0, t.jsxs)("div", {
          className:
            "min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white ",
          children: [
            (0, t.jsx)("div", {
              className:
                "bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-b border-gray-800",
              children: (0, t.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
                children: (0, t.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex items-center space-x-4",
                      children: [
                        (0, t.jsx)(a.FontAwesomeIcon, {
                          icon: s.faFileContract,
                          className: "text-blue-400 text-2xl",
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("h1", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white",
                              children: "Verify & publish contract",
                            }),
                            (0, t.jsx)("p", {
                              className: "text-gray-600 dark:text-gray-400",
                              children:
                                "Verify your smart contract source code",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex items-center space-x-4",
                      children: [
                        (0, t.jsx)(a.FontAwesomeIcon, {
                          icon: c,
                          className:
                            "text-gray-850 dark:text-gray-200 hover:text-blue-400 cursor-pointer",
                        }),
                        (0, t.jsx)(a.FontAwesomeIcon, {
                          icon: n,
                          className:
                            "text-gray-850 dark:text-gray-200 hover:text-blue-400 cursor-pointer",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, t.jsxs)("div", {
              className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6",
                  children: (0, t.jsxs)("form", {
                    onSubmit: I,
                    className: "space-y-6",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("label", {
                            className:
                              "block text-sm font-medium text-gray-850 dark:text-gray-200 mb-2",
                            children: "Contract Address *",
                          }),
                          (0, t.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, t.jsx)("input", {
                                type: "text",
                                value: e,
                                onChange: (e) => i(e.target.value),
                                placeholder: "0x...",
                                className:
                                  "w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-600 rounded-lg text-gray-850 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                required: !0,
                              }),
                              (0, t.jsx)(a.FontAwesomeIcon, {
                                icon: s.faFileContract,
                                className:
                                  "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("label", {
                                className:
                                  "block text-sm font-medium text-gray-850 dark:text-gray-200 mb-2",
                                children: "Compiler Version *",
                              }),
                              (0, t.jsxs)("select", {
                                value: o,
                                onChange: (e) => d(e.target.value),
                                className:
                                  "w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-600 rounded-lg text-gray-850 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                required: !0,
                                children: [
                                  (0, t.jsx)("option", {
                                    value: "",
                                    children: "Select version",
                                  }),
                                  [
                                    "0.8.24+commit.e11b9ed9",
                                    "0.8.23+commit.f704f362",
                                    "0.8.22+commit.4fc1097e",
                                    "0.8.21+commit.d9974bed",
                                    "0.8.20+commit.a1b79de6",
                                    "0.8.19+commit.7dd6d404",
                                    "0.8.18+commit.87f05d96",
                                    "0.8.17+commit.8df45f5f",
                                    "0.8.16+commit.07a7930e",
                                    "0.8.15+commit.e14a2714",
                                  ].map((e) =>
                                    (0, t.jsx)(
                                      "option",
                                      { value: e, children: e },
                                      e
                                    )
                                  ),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("label", {
                                className:
                                  "block text-sm font-medium text-gray-850 dark:text-gray-200 mb-2",
                                children: "Optimization",
                              }),
                              (0, t.jsxs)("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  (0, t.jsx)("input", {
                                    type: "checkbox",
                                    checked: x,
                                    onChange: (e) => m(e.target.checked),
                                    className:
                                      "w-4 h-4 text-blue-600 bg-white dark:bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2",
                                  }),
                                  (0, t.jsx)("span", {
                                    className:
                                      "text-gray-850 dark:text-gray-200",
                                    children: "Enabled",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("label", {
                                className:
                                  "block text-sm font-medium text-gray-850 dark:text-gray-200 mb-2",
                                children: "Runs",
                              }),
                              (0, t.jsx)("input", {
                                type: "number",
                                value: u,
                                onChange: (e) => g(parseInt(e.target.value)),
                                className:
                                  "w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-600 rounded-lg text-gray-850 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                min: "0",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("label", {
                            className:
                              "block text-sm font-medium text-gray-850 dark:text-gray-200 mb-2",
                            children: "Open Source License Type *",
                          }),
                          (0, t.jsx)("select", {
                            value: h,
                            onChange: (e) => b(e.target.value),
                            className:
                              "w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-600 rounded-lg text-gray-850 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            required: !0,
                            children: [
                              "MIT",
                              "GPL-3.0",
                              "GPL-2.0",
                              "LGPL-3.0",
                              "LGPL-2.1",
                              "BSD-3-Clause",
                              "BSD-2-Clause",
                              "Apache-2.0",
                              "Unlicense",
                              "Custom",
                            ].map((e) =>
                              (0, t.jsx)("option", { value: e, children: e }, e)
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("label", {
                            className:
                              "block text-sm font-medium text-gray-850 dark:text-gray-200 mb-2",
                            children: "Contract Source Code *",
                          }),
                          (0, t.jsx)("textarea", {
                            value: f,
                            onChange: (e) => y(e.target.value),
                            placeholder:
                              "// SPDX-License-Identifier: MIT pragma solidity ^0.8.0;  contract MyContract { // Your contract code here }",
                            rows: 15,
                            className:
                              "w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-600 rounded-lg text-gray-850 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm",
                            required: !0,
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("label", {
                            className:
                              "block text-sm font-medium text-gray-850 dark:text-gray-200 mb-2",
                            children: "Constructor Arguments (ABI-encoded)",
                          }),
                          (0, t.jsx)("input", {
                            type: "text",
                            value: p,
                            onChange: (e) => j(e.target.value),
                            placeholder: "0x...",
                            className:
                              "w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-600 rounded-lg text-gray-850 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "text-xs text-gray-600 dark:text-gray-400 mt-1",
                            children:
                              "If your contract has constructor arguments, provide them in ABI-encoded format",
                          }),
                        ],
                      }),
                      k &&
                        (0, t.jsxs)("div", {
                          className: "p-4 rounded-lg ".concat(
                            "success" === k
                              ? "bg-green-900 border border-green-700"
                              : "bg-red-900 border border-red-700"
                          ),
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                (0, t.jsx)(a.FontAwesomeIcon, {
                                  icon:
                                    "success" === k
                                      ? s.faCheckCircle
                                      : s.faTimesCircle,
                                  className: "text-lg ".concat(
                                    "success" === k
                                      ? "text-green-400"
                                      : "text-red-400"
                                  ),
                                }),
                                (0, t.jsx)("span", {
                                  className: "font-medium",
                                  children:
                                    "success" === k
                                      ? "Contract verified successfully!"
                                      : "Verification failed",
                                }),
                              ],
                            }),
                            "success" === k &&
                              (0, t.jsx)("p", {
                                className:
                                  "text-green-600 dark:text-green-400 mt-2",
                                children:
                                  "Your contract has been verified and is now publicly accessible on the blockchain explorer.",
                              }),
                            C.length > 0 &&
                              (0, t.jsx)("ul", {
                                className:
                                  "text-red-600 dark:text-red-400 mt-2 list-disc list-inside",
                                children: C.map((e, r) =>
                                  (0, t.jsx)("li", { children: e }, r)
                                ),
                              }),
                          ],
                        }),
                      (0, t.jsx)("div", {
                        className: "flex justify-end",
                        children: (0, t.jsx)(l.default, {
                          variant: 2,
                          type: "submit",
                          disabled: v,
                          className:
                            "px-8 py-3 rounded-lg font-medium flex items-center space-x-2 ".concat(
                              v
                                ? "bg-gray-600 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                            ),
                          children: v
                            ? (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(a.FontAwesomeIcon, {
                                    icon: s.faSpinner,
                                    className: "animate-spin",
                                  }),
                                  (0, t.jsx)("span", {
                                    children: "Verifying...",
                                  }),
                                ],
                              })
                            : (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(a.FontAwesomeIcon, {
                                    icon: s.faShield,
                                  }),
                                  (0, t.jsx)("span", {
                                    children: "Verify Contract",
                                  }),
                                ],
                              }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className:
                    "mt-8 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6",
                  children: [
                    (0, t.jsxs)("h3", {
                      className:
                        "text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2",
                      children: [
                        (0, t.jsx)(a.FontAwesomeIcon, {
                          icon: s.faInfoCircle,
                          className: "text-blue-400",
                        }),
                        (0, t.jsx)("span", { children: "Verification Help" }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("h4", {
                              className:
                                "font-medium text-gray-850 dark:text-gray-200 mb-2",
                              children: "What is contract verification?",
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "text-gray-600 dark:text-gray-400 text-sm",
                              children:
                                "Contract verification allows users to view and interact with your smart contract's source code, making it transparent and trustworthy for the community.",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("h4", {
                              className:
                                "font-medium text-gray-850 dark:text-gray-200 mb-2",
                              children: "Requirements",
                            }),
                            (0, t.jsxs)("ul", {
                              className:
                                "text-gray-600 dark:text-gray-400 text-sm space-y-1",
                              children: [
                                (0, t.jsx)("li", {
                                  children:
                                    "• Contract must be deployed on the network",
                                }),
                                (0, t.jsx)("li", {
                                  children:
                                    "• Source code must match the deployed bytecode",
                                }),
                                (0, t.jsx)("li", {
                                  children:
                                    "• Compiler settings must be identical",
                                }),
                                (0, t.jsx)("li", {
                                  children:
                                    "• Constructor arguments must be provided if applicable",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);

//# sourceMappingURL=f40cdd44dae805ed.js.map
