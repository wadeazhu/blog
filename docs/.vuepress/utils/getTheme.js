import path from "path"
import fs from "fs"

const root = path.join(__dirname, "./../../../")
const ignore = ['README.md', '.vuepress']
const getDirectoryRoot = value => path.join(root, `./docs/${value}`)

const getAllNavbarItem = (value) => {
    const directoryRoot = getDirectoryRoot(value)
    const files = fs.readdirSync(directoryRoot).filter(file => !ignore.includes(file))
    const allAllNavbar = []

    files.forEach(file => {
        const curPath = path.join(directoryRoot, file)
        const stat = fs.statSync(curPath)
        if (stat.isDirectory()) {
            const navbarItem = {
                text: file,
                link: `/${value}/${file}/`
            }
            allAllNavbar.push(navbarItem)
        }
    })
    return allAllNavbar
}

// 读取目录
const base = getAllNavbarItem('base')
const advance = getAllNavbarItem('advance')
const interview = getAllNavbarItem('interview')
const other = getAllNavbarItem('other')
const temp = getAllNavbarItem('temp')
const getAllNavbar = { base, advance, interview, other, temp }

// 读取目录下的所有文件

export const getNavbar = () => {
    return [
        {
            text: "基础知识",
            children: getAllNavbar.base
        },
        {
            text: "进阶",
            children: getAllNavbar.advance
        },
        {
            text: '面试',
            children: getAllNavbar.interview
        },
        {
            text: '其他',
            children: getAllNavbar.other
        },
        {
            text: "临时",
            children: getAllNavbar.temp
        }
    ]
}

console.log(JSON.stringify(getNavbar()))


export const getSideBar = () => {
    const allSidebar = {}
    const allNavBar = Object.entries(getAllNavbar)
    allNavBar.forEach(([key, navBarItem]) => {
        console.log(navBarItem, 'navBarItem')
        navBarItem.forEach(item => {
            allSidebar[item.link] = getAllSideBarItem(item.link, key)
        })
    })
    console.log(JSON.stringify(allSidebar))
    return allSidebar
}

const getAllSideBarItem = (item, value) => {
    const directoryRoot = getDirectoryRoot(value)
    const curPath = path.join(directoryRoot, '../', item)
    const files = fs.readdirSync(curPath).filter(file => !ignore.includes(file))


    const sidebarList = []
    files.forEach(file => {
        const filePath = path.join(curPath, file)
        console.log(filePath, 'filePath')
        const stat = fs.statSync(filePath)
        if (!stat.isDirectory() && filePath.endsWith(".md")) {
            let text = file.slice()
            text = text.length > 11 ? text.slice(0, 11) + "..." : text
            // console.log(text, '00000')
            sidebarList.push({
                text,
                link: file
            })
        }
    })
    console.log(sidebarList, 'sidebarList')
    return sidebarList
}

// 自动生成每个目录下的 README.md 文件
// const genDireReadme(link)
