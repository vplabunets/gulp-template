import * as dartSass from 'sass';
import gulpSass from 'gulp-sass'
import sourcemaps  from'gulp-sourcemaps'
import concat from "gulp-concat"
const sass = gulpSass(dartSass);

export const compileScss = () => {

    return app.gulp.src(app.path.src.scss,{sourcemaps: true})
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat("bundle.css"))
        .pipe(sourcemaps.write())
        .pipe(app.gulp.dest(app.path.build.css));



}