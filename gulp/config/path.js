import * as nodePath from "path"
const rootFolder = nodePath.basename(nodePath.resolve())
console.log(rootFolder)
const buildFolder = `./dist`
const srcFolder = `./src`

 export const path = {
    build:{
       css:`${buildFolder}/css`,
       html:`${buildFolder}/`,
       files:`${buildFolder}/files/`
    },
    src:{
       scss:`${srcFolder}/scss/**/*.scss`,
       html:`${srcFolder}/*.html`,
       files:`${srcFolder}/files/**/*.*`,
       pug:`${srcFolder}/*.pug`,
    },
    watch:{
       scss:`${srcFolder}/scss/**/*.scss`,
       html:`${srcFolder}/*.html`,
       files:`${srcFolder}/files/**/*.*`,
       pug:`${srcFolder}/*.pug`,
    },
    clean: buildFolder,
    buildFolder:buildFolder,
    srcFolder:srcFolder,
    rootFolder:rootFolder,
    ftp:``
}

