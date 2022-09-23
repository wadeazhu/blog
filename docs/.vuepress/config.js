import { defineUserConfig, defaultTheme } from "vuepress"
import { getNavbar, getSideBar} from "./utils/getTheme"
import {generateImagePlugin} from "./plugins/generateImage/node/index";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path, getDirname } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    lang: "zh-CN",
    title: "每日记录",
    description: "这是我的VuePress站点",
    theme: defaultTheme({
        navbar: getNavbar(),
        sidebar: getSideBar()
        // sidebar: {
        //     "/subject/html/": [
        //         {
        //             text: "01",
        //             link: "01.md"
        //         }
        //     ],
        //     "/subject/css/": [
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
        //         link: "/subject/html/",
        //         children: [{
        //             text: "01",
        //             link: "/subject/html/01.md"
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