import gulp from "gulp"
import {path} from "./gulp/config/path.js"

  global.app = {
    path: path,
    gulp: gulp
}

import {copy} from "./gulp/tasks/copy.js"
import {reset} from "./gulp/tasks/reset.js"
import {html} from "./gulp/tasks/html.js"
import {scss} from "./gulp/tasks/scss.js"
import {compileScss} from "./gulp/tasks/compileScss.js";

function watcher(){
  gulp.watch(path.watch.files,copy)
  gulp.watch(path.watch.html,html)
  gulp.watch(path.watch.scss,scss)
  gulp.watch(path.watch.scss,compileScss)
}
const mainTasks= gulp.parallel(copy, html, compileScss)

const dev= gulp.series(reset, mainTasks, watcher)

gulp.task("default", dev)