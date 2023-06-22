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
import {compileScss} from "./gulp/tasks/compileScss.js"
import {pug} from "./gulp/tasks/pug.js"
function watcher(){
  gulp.watch(path.watch.files,copy)
  gulp.watch(path.watch.html,html)
  gulp.watch(path.watch.scss,scss)
  gulp.watch(path.watch.scss, compileScss)
  gulp.watch(path.watch.pug, pug)
}
export const mainTasks= gulp.parallel(copy, html, compileScss, pug)
export const dev= gulp.series(reset, mainTasks, watcher)
gulp.task(pug)
gulp.task("default", dev)