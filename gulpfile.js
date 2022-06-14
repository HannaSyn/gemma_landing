const { src, dest, task, watch, series, parallel } = require("gulp");
const del = require("del");
const options = require("./config");
const browserSync = require("browser-sync").create();

//const sass = require('gulp-sass');
const sass = require("gulp-sass")(require("sass"));
const bourbon = require("node-bourbon").includePaths;
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const imagemin = require("gulp-imagemin");
const purgecss = require("gulp-purgecss");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const panini = require("panini");
const newer = require("gulp-newer");
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const nodepath = "node_modules/";
const merge = require("gulp-merge-json");
//Note : Webp still not supported in major browsers including forefox
//const webp = require('gulp-webp'); //For converting images to WebP format
//const replace = require('gulp-replace'); //For Replacing img formats to webp in html
const logSymbols = require("log-symbols"); //For Symbolic Console logs :) :P

//Load Previews on Browser on dev
function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: options.paths.dist.base,
    },
    port: options.config.port || 5000,
  });
  done();
}

//Copy latest installed Bulma
function setupBulma() {
  console.log("\n\t" + logSymbols.info, "Installing Bulma Files..\n");
  return src([nodepath + "bulma/*.sass", nodepath + "bulma/**/*.sass"]).pipe(
    dest("src/sass/")
  );
}

//Compile Sass code
function compileSASS() {
  console.log("\n\t" + logSymbols.info, "Compiling Bulma Sass..\n");
  return src(["src/sass/bulma.sass"])
    .pipe(
      sass({
        outputStyle: "compressed",
        sourceComments: "map",
        sourceMap: "sass",
        includePaths: bourbon,
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer("last 2 versions"))
    .pipe(dest("dist/assets/css"))
    .pipe(browserSync.stream());
}

//Compile Scss code
function compileSCSS() {
  console.log("\n\t" + logSymbols.info, "Compiling App SCSS..\n");
  return src(["src/scss/main.scss"])
    .pipe(
      sass({
        outputStyle: "compressed",
        sourceComments: "map",
        sourceMap: "scss",
        includePaths: bourbon,
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer("last 2 versions"))
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}

//Compile HTML partials with Panini
function compileHTML() {
  console.log("\n\t" + logSymbols.info, "Compiling HTML..\n");
  panini.refresh();
  return src("src/pages/**/*.html")
    .pipe(
      panini({
        root: "src/pages/",
        layouts: "src/layouts/",
        partials: "src/partials/",
        helpers: "src/helpers/",
        data: "src/data/",
        locales: "src/js/libs/locales/",
      })
    )
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}

//Concat CSS Plugins
function concatCssPlugins() {
  console.log("\n\t" + logSymbols.info, "Compiling Plugin styles..\n");
  return src([
    nodepath + "simplebar/dist/simplebar.min.css",
    nodepath + "line-awesome/dist/line-awesome/css/line-awesome.min.css",
    nodepath + "@fortawesome/fontawesome-free/css/all.min.css",
    nodepath + "lightgallery.js/dist/css/lightgallery.min.css",
    nodepath + "plyr/dist/plyr.css",
    nodepath + "lightgallery.js/dist/css/lg-transitions.min.css",
    nodepath + "choices.js/public/assets/styles/choices.min.css",
    nodepath + "codemirror/lib/codemirror.css",
    nodepath + "codemirror/theme/shadowfox.css",
    "src/assets/vendor/css/*",
  ])
    .pipe(sourcemaps.init())
    .pipe(concat("app.css"))
    .pipe(sourcemaps.write("./"))
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}

//Reset Panini Cache
function resetPages(done) {
  console.log("\n\t" + logSymbols.info, "Clearing Panini Cache..\n");
  panini.refresh();
  done();
}

//Triggers Browser reload
function previewReload(done) {
  console.log("\n\t" + logSymbols.info, "Reloading Browser Preview.\n");
  browserSync.reload();
  done();
}

//Development Tasks
function devHTML() {
  return src(`${options.paths.src.base}/**/*.html`).pipe(
    dest(options.paths.dist.base)
  );
}

//Optimize images
function devImages() {
  return src(`${options.paths.src.img}/**/*`).pipe(
    dest(options.paths.dist.img)
  );
}

// COPIES AND MINIFY IMAGE TO DIST
function minifyImages() {
  console.log("---------------OPTIMIZING IMAGES---------------");
  return src("src/assets/img/**/*.+(png|jpg|jpeg|gif|svg|mp4|webm|ogg)")
    .pipe(newer("dist/assets/img/"))
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ optimizationLevel: 3, interlaced: true }),
          imagemin.mozjpeg({ quality: 85 }),
          imagemin.optipng({ optimizationLevel: 3 }),
          imagemin.svgo(),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(dest("dist/assets/img/"))
    .pipe(browserSync.stream());
}

// Let's write our task in a function to keep things clean
function javascriptBuild() {
  // Start by calling browserify with our entry pointing to our main javascript file
  return (
    browserify({
      entries: [`${options.paths.src.js}/main.js`],
      // Pass babelify as a transform and set its preset to @babel/preset-env
      transform: [
        babelify.configure({
          presets: ["@babel/preset-env"],
          plugins: ["@babel/transform-runtime"],
        }),
      ],
    })
      // Bundle it all up!
      .bundle()
      // Source the bundle
      .pipe(source("bundle.js"))
      .pipe(buffer())
      .pipe(uglify())
      // Then write the resulting files to a folder
      .pipe(dest(`dist/js`))
  );
}

function copyFonts() {
  console.log("\n\t" + logSymbols.info, "Copying fonts.\n");
  return src(["src/fonts/*"])
    .pipe(dest("dist/fonts"))
    .pipe(browserSync.stream());
}
function copyLocales() {
  console.log("\n\t" + logSymbols.info, "Copying locales.\n");
  return src(["src/js/libs/locales/*"])
    .pipe(
      merge({
        fileName: "locales.json",
      })
    )
    .pipe(dest("dist/locales"))
    .pipe(browserSync.stream());
}
function watchFiles() {
  //watch('src/**/*.html', compileHTML);
  watch(
    `${options.paths.src.base}/**/*.html`,
    series(compileHTML, previewReload)
  );
  watch(["src/scss/**/*", "src/scss/*"], compileSCSS);
  watch(
    `${options.paths.src.js}/**/*.js`,
    series(javascriptBuild, previewReload)
  );
  watch(`${options.paths.src.js}/**/*.json`, series(copyLocales));
  watch(`${options.paths.src.img}/**/*`, series(devImages, previewReload));
  console.log("\n\t" + logSymbols.info, "Watching for Changes..\n");
}

function devClean() {
  console.log(
    "\n\t" + logSymbols.info,
    "Cleaning dist folder for fresh start.\n"
  );
  return del([options.paths.dist.base]);
}

exports.setup = series(setupBulma);

exports.default = series(
  devClean, // Clean Dist Folder
  resetPages,
  parallel(
    copyFonts,
    concatCssPlugins,
    compileSCSS,
    javascriptBuild,
    devImages,
    compileHTML,
    copyLocales
  ),
  livePreview, // Live Preview Build
  watchFiles // Watch for Live Changes
);

exports.build = series(
  devClean, // Clean Dist Folder
  resetPages,
  parallel(
    copyFonts,
    minifyImages,
    concatCssPlugins,
    compileSCSS,
    javascriptBuild,
    devImages,
    compileHTML,
    copyLocales
  )
);
