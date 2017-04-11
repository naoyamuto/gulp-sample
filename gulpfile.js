var gulp = require("gulp");
var imagemin = require("gulp-imagemin");

gulp.task("watchTask", function() {
  // imagesフォルダー以下のファイルを監視
  gulp.watch("images/**", function() {
    gulp.src("images/*.png")
      .pipe(imagemin())
      .pipe(gulp.dest("minified_images"));
  });
});
