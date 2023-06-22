import gulpPag from "gulp-pug"
import size from "gulp-size"
import browsersync from "browser-sync"
 export const pug = () => {

    return app.gulp.src(app.path.src.pug,)
        .pipe(gulpPag())
        .pipe(size({showFiles: true }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(browsersync.stream());



}