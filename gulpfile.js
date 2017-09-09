var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var htmlReplace = require('gulp-html-replace');

// html处理
gulp.task('html', function() {
  gulp.src(['src/**/*.html', 'index.html'])

    // 替换公共样式、左侧导航、头部
    .pipe(htmlReplace({
      style: gulp.src('src/html/common/style.html'),
      aside: gulp.src('src/html/common/aside.html'),
      header: gulp.src('src/html/common/header.html')
    }))

    // 压缩html
    .pipe(htmlmin({
      collapseWhitespace: true, // 去掉空白字符
      minifyJS: true,//压缩页面JS
      minifyCSS: true,//压缩页面CSS
      removeComments: true//清除HTML注释
    }))

    .pipe(gulp.dest('dist'));
});

// less处理
gulp.task('less', function() {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'));
});

// 合并所有的第三方样式为一个css
var cssLibs = [
  'node_modules/bootstrap/dist/css/bootstrap.css',
  'node_modules/font-awesome/css/font-awesome.css'
];
gulp.task('cssLib', function() {
  gulp.src(cssLibs)
    .pipe(concat('lib.css'))
    .pipe(gulp.dest('dist/css'));
});

/*
 * 合并所有的第三方脚本为一个js
 * 一、这些第三方包不经常更新
 *     1.1 打包在一起使用可以充分利用浏览器的缓存
 *     1.2 不必受业务代码频繁更新的影响
 * 二、不使用broserify打包
 *     2.1 是因为这些第三方包对browserify支持不够好
 *     2.2 比如bootstrap必须有全局jQuery才可正常运作，而browserify打包jquery后不存在任何全局变量
 *     2.3 再比如art-template，内部检测到module对象后以为是node环境，使用了特殊api导致无法正常运作
 * */
var jsLibs = [
  'node_modules/art-template/lib/template-web.js',
  'node_modules/jquery/dist/jquery.js',
  'node_modules/bootstrap/dist/js/bootstrap.js',
  'node_modules/jquery-form/dist/jquery.form.min.js',
];
gulp.task('jsLib', function() {
  gulp.src(jsLibs)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('dist/js'));
});

/**
 * 使用browserify打包CommonJS模块：
 * 1、其中src/js/common目录下的文件不需要打包，因为将来那个页面脚本需要它，require它即可，
 * 只要require了，就自动打包到了对应的页面脚本。
 * 2、剩下其他目录的js都要打包，每个js都对应一个html页面，他们是这些页面的入口文件。
 * 但是browserify不支持通配符写法，我们只能一个一个写。
 *    一个一个写比较费力，我们这里采用一个循环结构来处理，搞循环结构，
 * 通常要有一个对象或者数组，我们搞一个存储所有要打包js路径的数组，然后遍历打包。
 * */
var jsModules = [
  // 首页
  'src/js/index.js',
  // 用户系统
  'src/js/user/login.js',
  'src/js/user/repass.js',
  'src/js/user/profile.js',
  // 讲师
  'src/js/teacher/add.js',
  'src/js/teacher/edit.js',
  'src/js/teacher/list.js',
  // 学科分类
  'src/js/category/add.js',
  'src/js/category/edit.js',
  'src/js/category/list.js',
  // 课程
  'src/js/course/add.js',
  'src/js/course/edit1.js',
  'src/js/course/edit2.js',
  'src/js/course/edit3.js',
  'src/js/course/list.js'
];
gulp.task('js', function() {

  // 共享配置
  var config = {
    debug: false  // 生成sourcemap便于调试
  };

  jsModules.forEach(function(url) {
      var tempArr = url.split('/'); // url变成['src', 'js', 'user', 'login.js']
      var moduleName = tempArr.pop(); // 取出最后的文件名，数组变成['src', 'js', 'user']
      tempArr.shift(); // 取出源代码目录src，数组变成['js', 'user']

      browserify(url, { debug: true })
        .bundle() // 打包
        .pipe(source(moduleName)) // 转为stream构成的vinyl文件对象，文件名称保持不变
        .pipe(buffer()) // 转为buffer构成的vinyl文件对象，和gulp-src返回结果一致，然后就可以继续调用其他gulp插件了
        // .pipe(uglify()) // 压缩脚本
        .pipe(gulp.dest('dist/' + tempArr.join('/'))); // 数组变成'js/user'，也可以url.slice('/src'.length, -moduleName.length)
  });

});

// 统一打包的任务
gulp.task('build', ['jsLib', 'cssLib', 'js', 'html', 'less']);

// 监听文件变化，自动打包
gulp.task('default', ['build'], function() {
  gulp.watch(['src/**/*.js'], ['js']);
  gulp.watch(['src/**/*.html'], ['html']);
  gulp.watch(['src/**/*.less'], ['less']);
});