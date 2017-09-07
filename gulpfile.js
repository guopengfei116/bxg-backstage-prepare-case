var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var concat = require('gulp-concat');

/*
 * 合并所有的第三方包
 * 一、这些第三方包不经常更新
 *     1.1 打包在一起使用可以充分利用浏览器的缓存
 *     1.2 不必受业务代码频繁更新的影响
 * 二、不使用broserify打包
 *     2.1 是因为这些第三方包对browserify支持不够好
 *     2.2 比如bootstrap必须有全局jQuery才可正常运作，而browserify打包jquery后不存在任何全局变量
 *     2.3 再比如art-template，内部检测到module对象后以为是node环境，使用了特殊api导致无法正常运作
 * */
var libs = [
  'node_modules/art-template/lib/template-web.js',
  'node_modules/jquery/dist/jquery.js',
  'node_modules/bootsrap/dist/js/bootsrap.js'
];
gulp.task('jsLib', function() {
  gulp.src(libs)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('dist/js'));
});

// 使用browserify打包js
gulp.task('js', function() {
  var files = [
    'src/js/page/index.js' // 首页
  ];
  var config = {
    debug: false  // 生成sourcemap便于调试
  };
  browserify(files, config).bundle()
    .pipe(source('index.js'))   // 把结果转换为Stream的vinyl对象，还需进一步转换为Buffer的vinyl对象
    .pipe(buffer()) // 转换后与gulp的src方法返回类型一致，这样就可以继续调用gulp方法与gulp插件了
    .pipe(gulp.dest('dist/js'));
});

// 打包html
gulp.task('html', function() {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});

// 打包less
gulp.task('less', function() {
  gulp.src('src/less/index.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});

// 整体打包与watch
gulp.task('build', ['jsLib', 'js', 'html', 'less']);
gulp.task('default', function() {
  gulp.watch(['src/**/*.js'], function() {
    gulp.run('js');
  });
  gulp.watch(['src/**/*.html'], function() {
    gulp.run('html');
  });
  gulp.watch(['src/**/*.less'], function() {
    gulp.run('less');
  });
});
