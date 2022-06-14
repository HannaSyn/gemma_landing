module.exports = {
  config: {
    port: 8080,
  },
  paths: {
    root: "./",
    src: {
      base: "./src",
      css: "./src/css",
      js: "./src/js",
      img: "./src/img",
      locales: "./src/js/libs/locales",
    },
    dist: {
      base: "./dist",
      css: "./dist/css",
      js: "./dist/js",
      img: "./dist/img",
      locales: "./dist/locales",
    },
    build: {
      base: "./build",
      css: "./build/css",
      js: "./build/js",
      img: "./build/img",
      locales: "./build/locales",
    },
  },
};
