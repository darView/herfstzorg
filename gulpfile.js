const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const concat      = require('gulp-concat');
const rename      = require('gulp-rename');
const uglify      = require('gulp-uglify');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'assets/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// Move JS Files to dist/js
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

// Move html Files to dist/js
gulp.task('html', function() {
    return gulp.src('assets/html/*.html')
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});

// Minify, uglify and concat my own javascripts
gulp.task('uglify', function() {
    return gulp.src('assets/js/*.js')
      .pipe(concat('scripts.js'))
      .pipe(rename('scripts.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
});

// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./dist"
    });
    gulp.watch(['assets/js/*.js'], ['uglify']).on('change', browserSync.reload);;
    gulp.watch(['assets/html/*.html'], ['html']);
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'assets/scss/*.scss'], ['sass']);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});

// Move Fonts to dist/fonts
gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
})

// Move Font Awesome CSS to dist/css
gulp.task('fa', function() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('dist/css'))
})

gulp.task('default', ['html', 'uglify', 'js','serve', 'fa', 'fonts']);
