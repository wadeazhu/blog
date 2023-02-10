import { defineUserConfig, defaultTheme } from "vuepress"
import { getNavbar, getSideBar} from "./utils/getTheme"
import {generateImagePlugin} from "./plugins/generateImage/node/index";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path, getDirname } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
    base: "/blog/",
    lang: "zh-CN",
    title: "笔记",
    description: "这是我的VuePress站点",
    markdown: {
        code: {
            lineNumbers: true,
            highlightLines: false,
            preWrapper: false
        }
    },
    theme: defaultTheme({
        navbar: getNavbar(),
        sidebar: getSideBar()
        // sidebar: {
        //     "/base/html/": [
        //         {
        //             text: "01",
        //             link: "01.md"
        //         }
        //     ],
        //     "/base/css/": [
        //         {
        //             text: "01",
        //             link: "01.md"
        //         },
        //         {
        //             text: "02",
        //             link: "02.md"
        //         }
        //     ]
        // }
        // sidebar: [
        //     {
        //         text: "html",
        //         link: "/base/html/",
        //         children: [{
        //             text: "01",
        //             link: "/base/html/01.md"
        //         }]
        //     }
        // ]
    }),
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        }),
        generateImagePlugin({})
    ]
})
