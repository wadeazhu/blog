import path from "path"
import fs from "fs"

const root = path.join(__dirname, "./../../../")
const ignore = ['README.md', '.vuepress']
const subjectRoot = path.join(root, "./docs/subject")

const getAllNavbarItem = () => {
    const files = fs.readdirSync(subjectRoot).filter(file => !ignore.includes(file))
    const allAllNavbar = []

    files.forEach(file => {
        const curPath = path.join(subjectRoot, file)
        const stat = fs.statSync(curPath)
        if (stat.isDirectory()) {
            const navbarItem = {
                text: file,
                link: "/subject/" + file + "/"
            }
            allAllNavbar.push(navbarItem)
        }
    })
    return allAllNavbar
}

const allNavbarItem = getAllNavbarItem()

export const getNavbar = () => {
    const navbar = []
    navbar.push({
        text: "类别",
        children: allNavbarItem
    })
    return navbar
}


export const getSideBar = () => {
    const allSidebar = {}
    allNavbarItem.forEach(item => {
        allSidebar[item.link] = getAllSideBarItem(item.link)
    })
    return allSidebar
}

const getAllSideBarItem = (item) => {
    const curPath = path.join(subjectRoot, '../', item)
    const files = fs.readdirSync(curPath).filter(file => !ignore.includes(file))

    const sidebarList = []
    files.forEach(file => {
        const filePath = path.join(curPath, file)
        const stat = fs.statSync(filePath)
        if (!stat.isDirectory() && filePath.endsWith(".md")) {
            sidebarList.push({
                text: file,
                link: file
            })
        }
    })
    return sidebarList
}