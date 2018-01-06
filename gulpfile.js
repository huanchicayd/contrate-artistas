var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    htmlmin = require('gulp-htmlmin'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    useref = require('gulp-useref'),
    inlineSource = require('gulp-inline-source');

gulp.task('default', ['copy'], function(){
    gulp.start('build-img', 'build-js', 'build-css', 'build-html');
});

gulp.task('copy', ['clean'], function(){
    return gulp.src([
        'dev/**/*',
        '!dev/styles/**'
    ])
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', function(){
    gulp.src('dev/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle(),
            imageminJpegRecompress({
                loops: 6,
                min: 40,
                max: 85,
                quality: 'low'
            }),
            imagemin.optipng(),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('build-css', function(){
    gulp.src('dev/styles/*.css')
        .pipe(cssmin())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('build-js', function(){
    gulp.src('dev/scripts/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('build-html', function(){
    return gulp.src('dev/*.php')
        .pipe(useref())
        .pipe(inlineSource())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});