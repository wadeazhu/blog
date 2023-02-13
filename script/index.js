import path from "path";
import {fileURLToPath} from 'url'
import fs from "fs";

export const genReadme = (env) => {
    const __filenameNew = fileURLToPath(import.meta.url)
    const __dirnameNew = path.dirname(__filenameNew)
    const pathList = ['base', 'advance', 'interview', 'other', 'temp']
    const wrapperRoot = './docs/'
    console.log(__dirnameNew)
    return
    pathList.forEach(item => {
        let _root = __dirnameNew
        if (env === 'build') _root = path.join('')
        console.log(__dirnameNew, '__dirnameNew')
        const root = path.join(_root ,wrapperRoot, item)
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
}

