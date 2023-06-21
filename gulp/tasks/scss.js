import fileInclude from "gulp-file-include"
export const scss = () => {
    return app.gulp.src(app.path.src.scss).pipe(fileInclude())
        .pipe(app.gulp.dest(app.path.build.scss))
}