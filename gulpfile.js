'use-strict';

// A:: REUIRE NODE PACKAGES
var gulp 	= require('gulp'),
	concat 	= require('gulp-concat'),
	uglify	= require('gulp-uglify'),
	rename	= require('gulp-rename'),
	sass	= require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	maps	= require('gulp-sourcemaps'),
	del 	= require('del'),
	livereload = require('gulp-livereload'),
	prefix	= require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'),
	htmlmin = require('gulp-htmlmin');

// B:: GULP TASKS:

//  Concat JavaScript Files into one App.js File
gulp.task("concatScripts", function() {
	return gulp.src([
		'js/jquery.js',
		'js/isotope.js',
		'js/succinct.js',
		'js/main.js'
		])
	.pipe(maps.init())
	.pipe(concat("app.js"))
	.pipe(maps.write('./'))
	.pipe(gulp.dest("js"));
});
//  Uglify Javascript Files = Minify
gulp.task("minifyScripts", ["concatScripts"], function() {
	return gulp.src('js/app.js')
	.pipe(uglify())
	.pipe(rename('app.min.js'))
	.pipe(gulp.dest("js"));
});

gulp.task('minifyHtml', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

// Compile Sass
gulp.task("compileSass", function() {
	return gulp.src("scss/application.scss")
	.pipe(maps.init())
	.pipe(sass())
	.pipe(prefix())
	.pipe(cleanCSS())
	.pipe(maps.write('./'))
	.pipe(gulp.dest('css'))
	.pipe(livereload({ start: true,  }));
});

// Image Task
// Compress 
gulp.task('image', function() {
	gulp.src('img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('img'));
});

// // SASS WATCHER
// gulp.task("watchSass", function () {
// 	var server = livereload();
// 	gulp.watch('scss/**/*.scss', ['compileSass'] );
// });

gulp.task("watchFiles", function () {
	var server = livereload();
	gulp.watch('scss/**/*.scss', ['compileSass'] );
	gulp.watch('js/main.js', ['concatScripts'] );
});

// CLEAN Task
gulp.task("clean", function() {
	del(['dist', 'css/application.css*', 'js/app*.js*']);
});

// BUILD TASK
gulp.task("build", ['concatScripts', 'minifyScripts', 'compileSass', 'image'], function() {
		return gulp.src(["apple-touch-icon.png", "favicon.ico", "css/normalize.css", "css/application.css", "js/picturefill.min.js", "js/modernizr.js", "js/app.min.js", 'index.html', 'team.html', '404.html', "img/**", "fonts/**"], { base: './'})
		.pipe(gulp.dest('dist'));
	});

gulp.task("serve", ['watchFiles']);

// DEFAULT TASK
gulp.task("default", ["clean"], function() {
	gulp.start('build');
});
