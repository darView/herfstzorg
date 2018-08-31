const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const concat      = require('gulp-concat');
const rename      = require('gulp-rename');
const uglify      = require('gulp-uglify');
const imageResize = require('gulp-image-resize');

// Compile Sass & Inject Into Browser
gulp.task('sass', function ()
{
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("dist/assets/css"))
        .pipe(browserSync.stream());
});

// Move JS Files to dist/js
gulp.task('js', function ()
{
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/jquery-parallax.js/parallax.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js',
        'node_modules/waypoints/lib/jquery.waypoints.min.js',
        'node_modules/fg-loadcss/dist/loadCSS.min.js'])
        .pipe(gulp.dest("dist/assets/js"))
        .pipe(browserSync.stream());
});

// Move html Files to dist/js
gulp.task('html', function ()
{
    return gulp.src('src/html/*.html')
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});

// Move favicon file to dist
gulp.task('favicon', function ()
{
    return gulp.src('src/html/*.ico')
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});

// Move image Files to dist/img
gulp.task('img', function ()
{
    return gulp.src('src/img/*.*')
        .pipe(imageResize({
            samplingFactor : (4,2)
        }))
        .pipe(imageResize({
            optimizationLevel: 7,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest("dist/assets/img"))
        .pipe(browserSync.stream());
});

// Minify, uglify and concat my own javascripts
gulp.task('uglify', function ()
{
    return gulp.src('src/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
});

// Watch Sass & Serve
gulp.task('serve', ['sass'], function ()
{

    browserSync.init({
        server: "./dist"
    });
    gulp.watch(['src/js/*.js'], ['uglify']).on('change', browserSync.reload);
    gulp.watch(['src/html/*.html'], ['html']);
    gulp.watch(['src/html/*.ico'], ['favicon']);
    gulp.watch(['src/img/*.*'], ['img']);
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});

// Move Fonts to dist/fonts
gulp.task('fonts', function ()
{
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('dist/assets/fonts'))
})

// Move Font Awesome CSS to dist/css
gulp.task('fa', function ()
{
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('dist/assets/css'))
})

// Move Font Awesome CSS to dist/css
gulp.task('animate', function ()
{
    return gulp.src('src/css/animate.css')
        .pipe(gulp.dest('dist/assets/css'))
})

gulp.task('default', ['favicon', 'img', 'html', 'uglify', 'js', 'serve', 'fa', 'fonts', 'animate']);
