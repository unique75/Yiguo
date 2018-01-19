const gulp = require("gulp"); //加载gulp模块;
const connect = require("gulp-connect"); //加载 gulp-connect 插件;
const babel = require("gulp-babel"); //加载gulp-babel 插件；
const sass = require("gulp-sass-china");


gulp.task("html", () => {
    return gulp.src(["html/*.html"])
        .pipe(gulp.dest("dist/html"))
        .pipe(connect.reload()); //自动刷新;
})

gulp.task("sass", () => {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
})
gulp.task("css", () => {
    return gulp.src('css/*.css')
        .pipe(gulp.dest('dist/css'));
})
gulp.task("js", () => {
    return gulp.src(["js/**/*.js"])
        // .pipe(babel({
        //     presets: ['env']
        // }))
        .pipe(gulp.dest("dist/js"))
})
gulp.task("json", () => {
    return gulp.src(["json/*.json"])
        .pipe(gulp.dest("dist/json"))
})
gulp.task("watch", () => {
    gulp.watch(["scss/*.scss"], ["sass"]);
    gulp.watch(["html/*.html"], ["html"]);
	gulp.watch(["css/*.css"], ["css"]);
    gulp.watch(["js/**/*.js"], ["js"]);
    gulp.watch(["json/**/*.json"], ["json"]);
})

gulp.task('server', function() {
    connect.server({
        root: 'dist', //以谁为服务器根目录
        port: 4000, // 端口号
        livereload: true //开启自动刷新;
    });
});

gulp.task("default", ["watch", "server"]);

// gulp.task('es6',() =>{
// 	   return gulp.src('es6/*.js')
// 	        .pipe(babel({
// 	            presets: ['env']
// 	        }))
// 	        .pipe(gulp.dest('dist/scripts/'))
// });
