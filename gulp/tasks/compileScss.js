import * as dartSass from 'sass';
 import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass);
import sourcemaps  from'gulp-sourcemaps'
export const compileScss = () => {
    // return app.gulp.src(app.path.src.scss,{sourcemaps: true})
    //     .pipe(sass.sync({outputStyle: "expanded"}).on('error', sass.logError))
    //     .pipe(app.gulp.dest(app.path.build.css))
    return app.gulp.src(app.path.src.scss,{sourcemaps: true})
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(app.gulp.dest(app.path.build.css));
    //
    // return app.gulp.src(app.path.src.scss,{sourcemaps: true})
    //     .pipe(sass.sync())
    //     .pipe(app.gulp.dest(app.path.build.css));



}