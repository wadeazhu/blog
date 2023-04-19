import path from "path";
import {fileURLToPath} from 'url'
import fs from "fs";

const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)
const pathList = ['base/', 'advance/', 'interview/', 'other/', 'temp/']
const wrapperRoot = './../docs'
pathList.forEach(item => {
    const root = path.join(__dirnameNew, wrapperRoot, item)
    const rootStat = fs.statSync(root)
    if (!rootStat.isDirectory()) return
    const direList = fs.readdirSync(root) // base 下面的目录

    direList.forEach(dire => {
        let fileStr = ''
        const curDirePath = path.join(root, dire)
        const stat = fs.statSync(curDirePath)
        if (stat.isDirectory()) {
            const files = fs.readdirSync(curDirePath)

            files.forEach(file => {
                const curPath = path.join(curDirePath, file)
                const stat = fs.statSync(curPath)
                if (stat.isFile() && !curPath.endsWith('README.md') && !curPath.endsWith('.gitkeep')) {
                    // fileStr+=`[${file}](/blog/${item}/${dire}/${file}/)<br/>`
                    fileStr+=`[${file}](./${file})<br/>`
                }
            })
            console.log(curDirePath, 'curDirePath')
            fs.writeFileSync(path.join(curDirePath, '/README.md'), fileStr, {
                encoding: 'utf8'
            })
        }
    })
})

