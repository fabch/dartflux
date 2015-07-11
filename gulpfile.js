/*jshint globalstrict:true, devel:true, newcap:false */
/*global require */

/**
 * Build CSS and JavaScript using `gulp`.
 *
 * Main targets are: `js`, `css` and `watch`.
 *
 * Run with `--production` to get minified sources.
 */

"use strict";

var argv = require('yargs').argv,

    gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    gulpif     = require('gulp-if'),

    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    watchify   = require('watchify'),
    reactify   = require('reactify'),
    uglify     = require('gulp-uglify'),
    rename     = require('gulp-rename'),

    less       = require('gulp-less'),
    minifyCSS  = require('gulp-minify-css');

// Directory where static files are found. Don't forget the slash at the end.
var staticDirectory = './src/',
    bowerDirectory  = './bower_components/',
    distDirectory   = './dist/',

    // Source and target JS files for Browserify
    jsMainFile      = staticDirectory + 'js/app.js',
    jsBundleFile    = staticDirectory + 'js/bundle.js',

    // Source and target LESS files
    lessMainFile    = staticDirectory + 'less/styles.less',
    cssMainFile     = staticDirectory + 'css/app.css',
    cssFiles        = distDirectory   + 'css';

// Browserify bundler, configured for reactify with sources having a .js extension
var bundler = browserify({
    entries: [staticDirectory + 'js/app.js'],
    transform: [reactify],
    extensions: ['.js'],
    debug: !argv.production,
    cache: {}, packageCache: {}, fullPaths: true // for watchify
});


// Feed fonts
gulp.task('fonts', function() {
    return gulp.src(bowerDirectory  + 'bootstrap/fonts/*')
    .pipe(gulp.dest(staticDirectory  + 'fonts'));
});

// Compile less
gulp.task('less', function(){
    return gulp.src(staticDirectory + 'less/styles.less')
        .pipe(less())
        .pipe(rename('app.css'))
        .pipe(gulp.dest(staticDirectory + 'css'));
});

// Watch JS + CSS using watchify + gulp.watch
gulp.task('watchify', function() {
    var watcher  = watchify(bundler);
    return watcher
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .on('update', function () {
        watcher.bundle()
        .pipe(source(staticDirectory + 'js/bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./'));

        gutil.log("Updated JavaScript sources");
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source(staticDirectory + 'js/bundle.js'))
    .pipe(gulp.dest('./'));
});


// Build JavaScript using Browserify
gulp.task('js', function() {
    return bundler
        .bundle()
        .pipe(source(staticDirectory + 'js/bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./'));
});


gulp.task('csswatch', function () {
    gulp.watch(staticDirectory + 'less/styles.less', ['less']);
});


// Build CSS
gulp.task('build-css', function(){
    return gulp.src(staticDirectory + 'css/app.css')
        .pipe(gulpif(argv.production, minifyCSS({keepBreaks:true})))
        .pipe(gulp.dest(distDirectory + 'css'));
});

// Build fonts
gulp.task('build-fonts', function() {
    return gulp.src(bowerDirectory  + 'bootstrap/fonts/*')
    .pipe(gulp.src(staticDirectory  + 'fonts/*'))
    .pipe(gulp.dest(distDirectory   + 'fonts'));
});

// Build js
gulp.task('build-js', function() {
    return gulp.src(staticDirectory  + 'js/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest(distDirectory + 'js'));
});

// Build html
gulp.task('build-html', function() {
    return gulp.src(staticDirectory  + 'index.html')
    .pipe(gulp.dest(distDirectory));
});

gulp.task('watch', ['watchify', 'csswatch']);
gulp.task('default', ['js','less','fonts']);
gulp.task('build', ['build-html', 'build-js','build-css', 'build-fonts']);