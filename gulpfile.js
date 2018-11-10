'use strict';

var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS     = require('gulp-clean-css'),
	rename       = require('gulp-rename'),
	browserSync  = require('browser-sync').create(),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglify'),
	sassLint     = require('gulp-sass-lint'),
	spritesmith  = require('gulp.spritesmith'),
	merge        = require('merge-stream'),
	buffer       = require('vinyl-buffer'),
	htmlhint     = require("gulp-htmlhint"),
	uncss        = require('gulp-uncss'),
	psi 	     = require('psi'),
	imagemin     = require('gulp-imagemin'),
	site = 'http://www.html5rocks.com';


gulp.task('browser-sync', ['styles', 'scripts'], function() {
	browserSync.init({
		server: {
			baseDir: "./app/"
		},
		notify: true
	});
});

gulp.task('mobile', function () {
    return psi(site, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }).then(function (data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
        console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
    });
});

gulp.task('desktop', function () {
    return psi(site, {
        nokey: 'true',
        // key: key,
        strategy: 'desktop',
    }).then(function (data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
    });
});

gulp.task('htmlhint', function() {
	return gulp.src("app/*.html")
	.pipe(htmlhint('.htmlhintrc'))
	.pipe(htmlhint.reporter())
})

gulp.task('sass-lint', function() {
  return gulp.src('sass/**/*.sass')
      .pipe(sassLint({
        options: {
          formatter: 'stylish'
        },
        files: {ignore: 'sass/vendors/*.sass'},
        rules: {        	
          	'no-ids': 1,
            'no-color-keywords': 1,
            'no-mergeable-selectors': 1,
            'no-empty-rulesets': 1,
            'no-important': 1,
            'no-transition-all': 1,
            'quotes': 1,
            'no-vendor-prefixes': 1,
            'shorthand-values': 1,
            'no-color-literals': 1,
            'force-attribute-nesting': 0,
  			'force-element-nesting': 0,
  			'class-name-format': 0,
  			'force-pseudo-nesting': 0,
  			'property-sort-order': 0,
  			'empty-line-between-blocks': 0
      	}
      }))
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError())
});

gulp.task('sprite', function () {
  // Generate our spritesheet
  var spriteData = gulp.src('app/img/spritesrc/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));

  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('app/img/'));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    .pipe(cleanCSS())
    .pipe(gulp.dest('app/css/'));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});

gulp.task('imgMin', () =>
    gulp.src('app/img/*')
        .pipe(imagemin([
		    imagemin.gifsicle({interlaced: true}),
		    imagemin.jpegtran({progressive: true}),
		    imagemin.optipng({optimizationLevel: 5}),
		    imagemin.svgo({
		        plugins: [
		            {removeViewBox: true},
		            {cleanupIDs: false}
		        ]
		    })
		]))
        .pipe(gulp.dest('app/img/min'))
);


gulp.task('styles', function () {
	return gulp.src('sass/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleanCSS())
	/*.pipe(uncss({
       html: ['app/*.html']
    }))*/
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'./libs/jquery/jquery.min.js',
		'./libs/aos/aos.js',
		'./libs/bootstrap4/dist/js/bootstrap.bundle.js',
		'./libs/Inputmask-4.x/dist/jquery.inputmask.bundle.js',
		'./libs/lazyimg/lazyimg.min.js',
		'./libs/fancybox/jquery.fancybox.js',
		'./libs/jquery.nicescroll.min.js',
		'./libs/owl/owl.carousel.min.js',
		'./libs/config.js',
		])
		.pipe(concat('libs.js'))
		.pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
	gulp.watch('sass/**/*.sass', ['styles']);
	gulp.watch('app/*.html', ['htmlhint']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('sass/**/*.sass', ['sass-lint']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});


gulp.task('default', ['browser-sync', 'watch', 'imgMin', 'htmlhint']);
