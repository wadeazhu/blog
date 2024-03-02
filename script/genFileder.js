// 生成目录， 作用是将中文改成拼音

// 删除之前的目录


// 解析白名单文件中的内容，以换行符分割
import path from "path";
import {fileURLToPath} from "url";
import fs from "fs";
// const pinyin = require('pinyin');
import pinyin from "pinyin";

const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)
const wrapperRoot = './../docs'
const _wrapperRoot = './../_docs'
const whitelistItems = ['.vuepress']
const navbarJson = []
const sidebarJson = {}
// 删除目录中除了白名单中列出的文件或目录之外的所有内容
const directoryPath = path.join(__dirnameNew, wrapperRoot) // 修改为你的目录路径
const _directoryPath = path.join(__dirnameNew, _wrapperRoot) // 修改为你的目录路径
cleanDirectory(directoryPath, whitelistItems);
copyDirectorySync(_directoryPath, directoryPath);
fs.writeFileSync(path.join(__dirnameNew, wrapperRoot, '.vuepress/navbarJson.json'), JSON.stringify(navbarJson));
fs.writeFileSync(path.join(__dirnameNew, wrapperRoot, '.vuepress/sidebarJson.json'), JSON.stringify(sidebarJson));


function cleanDirectory(directoryPath, whitelistItems) {
    try {
        const files = fs.readdirSync(directoryPath);

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            // 如果当前文件或目录不在白名单中，则删除它
            if (!whitelistItems.includes(file)) {
                const stats = fs.statSync(filePath);
                if (stats.isDirectory()) {
                    // 递归删除子目录
                    fs.rmdirSync(filePath, {recursive: true});
                    console.log('\x1b[31m%s\x1b[0m', `删除目录 ${filePath}`);
                } else {
                    // 删除文件
                    fs.unlinkSync(filePath);
                    console.log('\x1b[31m%s\x1b[0m', `删除文件 ${filePath}`);
                }
            }
        });
    } catch (err) {
        console.error('清理目录时出错：', err);
    }
}

// 读取_docs目录 转称 docs目录， 将目录名字改成拼音并生成json目录映射
// 递归复制函数
function copyDirectorySync(source, target, level = 1, cur) {
    // 创建目标目录
    fs.mkdirSync(target, {recursive: true});

    // 获取源目录下的所有文件和目录
    const files = fs.readdirSync(source);

    // 遍历源目录下的所有文件和目录
    files.forEach(file => {
        const sourcePath = path.join(source, file);
        const targetFileName = fileNameToPinyin(file); // 将文件名转换为拼音
        const targetPath = path.join(target, targetFileName);

        // 判断是文件还是目录
        const stats = fs.statSync(sourcePath);
        if (stats.isFile()) {
            level = 1
            // 如果是文件，则直接拷贝
            fs.copyFileSync(sourcePath, targetPath);
            console.log('\x1b[32m%s\x1b[0m', `复制文件 ${sourcePath} 到 ${targetPath}`);
        } else if (stats.isDirectory()) {
            if (cur && Array.isArray(cur.children)) {
                cur.children.push({
                    text: file,
                    link: `${targetFileName}/`,
                })
                sidebarJson[`${cur.prefix}${targetFileName}/`] = 'structure'
                copyDirectorySync(sourcePath, targetPath, level, cur);
            } else {
                const cur = {
                    text: file,
                    prefix: `/${targetFileName}/`,
                    children: []
                }
                navbarJson.push(cur)
                copyDirectorySync(sourcePath, targetPath, level, cur);
            }
            // 如果是目录，则递归调用 copyDirectorySync
        }
    });
}

function fileNameToPinyin(fileName) {
    const pinyinArr = pinyin(fileName, {
        style: pinyin.STYLE_NORMAL // 使用普通风格，即不带声调
    });
    return pinyinArr.map(arr => arr[0]).join('');
}

// console.log(JSON.stringify(arr))

// {
//     text: "指南",
//         icon: "lightbulb",
//     prefix: "/guide/",
//     children: [
//     {
//         text: "Bar",
//         icon: "lightbulb",
//         prefix: "bar/",
//     },
//     {
//         text: "Foo",
//         icon: "lightbulb",
//         prefix: "foo/",
//     },
// ],
// },
