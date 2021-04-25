// 引入gulp包,生成了一个gulp对象,gulp对象下面的方法介绍
// gulp.task(taskname,callback):创建任务  taskname任务名称  callback执行的回调
// gulp.src(url):设置引入文件的路径
// gulp.dest(): 输出文件设置(如果不存在目录名， 自动生成)
// pipe(): 管道流(将任务链式连接起来)
// gulp 任务名 -- 执行任务。
const gulp = require('gulp');

// 引入压缩html文件的包,生成一个gulpMinifyHtml函数
const gulpMinifyHtml = require('gulp-minify-html');

// 引入压缩css文件的包,生成一个gulpCleanCss函数
const gulpCleanCss = require('gulp-clean-css');

// 引入sass编译压缩css的包
const sass = require('gulp-sass'); //sass编译
const sourcemaps = require('gulp-sourcemaps'); //生成map文件
const plugins = require('gulp-load-plugins')(); //生成map文件

// 引入js的压缩和转换的包
const uglify = require('gulp-uglify'); //js压缩
const babel = require('gulp-babel'); //es6转es5主要模块
const bablecore = require('babel-core'); //es6转es5主要模块
const es2015 = require('babel-preset-es2015'); //es6转es5主要模块

// 引入png图片压缩的包imagemin
const imagemin = require('gulp-imagemin');


// 引入监听的包
const watch = require('gulp-watch'); //监听





// 1.测试gulp任务执行
gulp.task('hehe', () => {
    console.log('hello,gulp');
});

// 2.将src目录下面的所有的html文件复制到dist文件夹里面。
gulp.task('copyfile', () => {
    return gulp.src('src/*.html') //引入文件的路径
        .pipe(gulp.dest('dist/')) //输出的路径
});

// 3.将src目录下面的所有的html文件压缩输出到dist文件夹里面。
gulp.task('minifyhtml', () => {
    return gulp.src('src/*.html') //引入文件的路径
        .pipe(gulpMinifyHtml()) //压缩html
        .pipe(gulp.dest('dist/')) //输出的路径
});


// 4.将src目录下面的所有的css文件压缩输出到dist文件夹里面。
gulp.task('minifycss', () => {
    return gulp.src('src/css/*.css') //引入文件的路径
        .pipe(gulpCleanCss()) //压缩html
        .pipe(gulp.dest('dist/css')) //输出的路径
});


// 5.利用sass，生成压缩css。
gulp.task('compilesass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(plugins.sourcemaps.init()) // 初始化 gulp-sourcemaps 插件  生成.map文件初始化  
        .pipe(plugins.sass({ // 调用 sass 插件，编译 sass 文件
            outputStyle: 'compressed' //压缩一行
        }))
        .pipe(plugins.sourcemaps.write('.')) // 生成 sourcemap 生成.map文件 
        .pipe(gulp.dest('dist/style/'));
});


// 6.js文件的压缩
// 将es6转成es5,再压缩js
gulp.task('uglifyjs', function() {
    return gulp.src('src/script/*.js')
        .pipe(babel({ //es6转es5
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/script/'));
});

// 7.png图片的压缩
// 图片压缩的插件：gulp-imagemin
gulp.task('runimg', function() {
    return gulp.src('src/img/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'));
});


// 最终监听
// 每一个任务必须先跑一次，再进行监听
gulp.task('default', function() { //任务名称default，执行的时候可以省略任务名
    // watch:监听文件路径
    // gulp.parallel():让任务并行执行
    watch(['src/*.html', 'src/sass/*.scss', 'src/script/*.js', 'src/img/*.png'],
        gulp.parallel('minifyhtml', 'compilesass', 'uglifyjs', 'runimg'));
});