const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name + " Token | Privesecure Protocol",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "og:title", content: "PriveSecure Protocol" },
      { name: "twitter:title", content: "PriveSecure Protocol" },
      { name: "theme-color", content: "#000000" },
      {
        name: "og:description",
        content:
          "Aspiring to be the most comprehensive and secure cloud service package available.",
      },
      {
        name: "twitter:description",
        content:
          "Aspiring to be the most comprehensive and secure cloud service package available.",
      },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      },
    ],
    __dangerouslyDisableSanitizers: ["script", "innerHTML"],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-234206552-1",
        async: true,
      },
      {
        innerHTML: `  window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-234206552-1');
      `,
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#ccc", height: "5px" },

  /*
   ** Global CSS
   */
  css: ["~/assets/css/tailwind.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
