(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    263673: (e) => {
      "use strict";
      e.s({ default: () => l });
      var r = e.i(731636),
        a = e.i(838653),
        s = e.i(12448),
        t = e.i(55157);
      function l() {
        let [e, l] = (0, a.useState)({
            name: "",
            email: "",
            subject: "",
            message: "",
          }),
          [o, n] = (0, a.useState)(!1),
          [d, i] = (0, a.useState)(null),
          c = (e) => {
            let { name: r, value: a } = e.target;
            l((e) => ({ ...e, [r]: a }));
          },
          m = async (r) => {
            r.preventDefault(), n(!0), i(null);
            try {
              (
                await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: e.name,
                    email: e.email,
                    subject: e.subject,
                    message: e.message,
                  }),
                })
              ).ok
                ? (i("success"),
                  l({ name: "", email: "", subject: "", message: "" }))
                : i("error");
            } catch (e) {
              console.error("Error sending message:", e), i("error");
            } finally {
              n(!1);
            }
          };
        return (0, r.jsxs)("div", {
          className:
            "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ",
          children: [
            (0, r.jsxs)("div", {
              className:
                "relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700",
              children: [
                (0, r.jsx)("div", {
                  className: "absolute inset-0 bg-black/20",
                }),
                (0, r.jsx)("div", {
                  className:
                    "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24",
                  children: (0, r.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, r.jsx)("h1", {
                        className:
                          "text-4xl md:text-6xl font-bold text-white mb-6",
                        children: "Contact Us",
                      }),
                      (0, r.jsx)("p", {
                        className: "text-xl text-blue-100 max-w-3xl mx-auto",
                        children:
                          "Have questions about Etherchain AI? We're here to help. Send us a message and we'll get back to you within 24 hours.",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
              children: (0, r.jsx)("div", {
                className: "flex flex-col items-center justify-center",
                children: (0, r.jsxs)("div", {
                  className:
                    "bg-white lg:min-w-[40rem] dark:bg-gray-900 rounded-2xl shadow-xl p-8",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex items-center mb-8",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4",
                          children: (0, r.jsx)(s.FontAwesomeIcon, {
                            icon: t.faComments,
                            className:
                              "w-5 h-5 text-blue-600 dark:text-blue-400",
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("h2", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white",
                              children: "Send Message",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-gray-600 dark:text-gray-300",
                              children: "Fill out the form below",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("form", {
                      onSubmit: m,
                      className: "space-y-6",
                      children: [
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("label", {
                              htmlFor: "name",
                              className:
                                "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                              children: "Name *",
                            }),
                            (0, r.jsxs)("div", {
                              className: "relative",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                  children: (0, r.jsx)(s.FontAwesomeIcon, {
                                    icon: t.faUser,
                                    className: "h-5 w-5 text-gray-400",
                                  }),
                                }),
                                (0, r.jsx)("input", {
                                  type: "text",
                                  id: "name",
                                  name: "name",
                                  value: e.name,
                                  onChange: c,
                                  required: !0,
                                  className:
                                    "block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
                                  placeholder: "Your full name",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("label", {
                              htmlFor: "email",
                              className:
                                "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                              children: "Email *",
                            }),
                            (0, r.jsxs)("div", {
                              className: "relative",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                  children: (0, r.jsx)(s.FontAwesomeIcon, {
                                    icon: t.faEnvelope,
                                    className: "h-5 w-5 text-gray-400",
                                  }),
                                }),
                                (0, r.jsx)("input", {
                                  type: "email",
                                  id: "email",
                                  name: "email",
                                  value: e.email,
                                  onChange: c,
                                  required: !0,
                                  className:
                                    "block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
                                  placeholder: "your.email@example.com",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("label", {
                              htmlFor: "subject",
                              className:
                                "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                              children: "Subject *",
                            }),
                            (0, r.jsx)("input", {
                              type: "text",
                              id: "subject",
                              name: "subject",
                              value: e.subject,
                              onChange: c,
                              required: !0,
                              className:
                                "block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
                              placeholder: "What is this about?",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("label", {
                              htmlFor: "message",
                              className:
                                "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                              children: "Message *",
                            }),
                            (0, r.jsx)("textarea", {
                              id: "message",
                              name: "message",
                              value: e.message,
                              onChange: c,
                              required: !0,
                              rows: 6,
                              className:
                                "block w-full px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none",
                              placeholder: "Describe your inquiry...",
                            }),
                          ],
                        }),
                        (0, r.jsx)("button", {
                          type: "submit",
                          disabled: o,
                          className:
                            "w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200",
                          children: o
                            ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2",
                                  }),
                                  "Sending...",
                                ],
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(s.FontAwesomeIcon, {
                                    icon: t.faPaperPlane,
                                    className: "w-5 h-5 mr-2",
                                  }),
                                  "Send Message",
                                ],
                              }),
                        }),
                        "success" === d &&
                          (0, r.jsx)("div", {
                            className:
                              "p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg",
                            children: (0, r.jsx)("p", {
                              className: "text-green-800 dark:text-green-200",
                              children:
                                "✅ Your message has been sent successfully! We'll get back to you within 24 hours.",
                            }),
                          }),
                        "error" === d &&
                          (0, r.jsx)("div", {
                            className:
                              "p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg",
                            children: (0, r.jsx)("p", {
                              className: "text-red-800 dark:text-red-200",
                              children:
                                "❌ There was an error sending your message. Please try again.",
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
  },
]);

//# sourceMappingURL=8013150f7b13a239.js.map
