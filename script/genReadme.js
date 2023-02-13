import path from "path";
// import {fileURLToPath} from 'url'
import fs from "fs";

// const __filenameNew = fileURLToPath(import.meta.url)
// const __dirnameNew = path.dirname(__filenameNew)

const wrapperRoot = './docs/'
const pathList = ['base', 'advance', 'interview', 'other', 'temp']

pathList.forEach(item => {
    const root = path.join(wrapperRoot, item)
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
                if (stat.isFile() && !curPath.endsWith('README.md')) {
                    fileStr+=`[${file}](/blog/${item}/${dire}/${file}/)<br/>`
                }
            })

            fs.writeFileSync(path.join(curDirePath, '/README.md'), fileStr)
        }

    })
})
