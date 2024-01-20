const { src, dest, watch, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");

/* function scripts() {
  return src([""])
    .pipe(uglify())
    .pipe(concat(""))
    .pipe(dest(""))
    .pipe(browserSync.stream());
} */

function styles() {
  return src(["../css/reset.css", "../css/index.css"])
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 version"],
        grid: true,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(concat("index.min.css"))
    .pipe(dest("../../dist/assets/css"))
    .pipe(browserSync.stream());
}

function htmlMin() {
  return gulp
    .src("../../index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(concat("index.min.html"))
    .pipe(gulp.dest("../../dist/"));
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "../../",
    },
  });
}

function watching() {
  watch(["../../index.html"], htmlMin).on("change", browserSync.reload);
  watch(["../css/index.css"], styles).on("change", browserSync.reload);
  /* watch([""], scripts); */
}

/* exports.scripts = scripts; */
exports.browsersync = browsersync;
exports.watching = watching;

exports.default = parallel(
  htmlMin,
  styles,
  browsersync,
  watching /* scripts */
);
