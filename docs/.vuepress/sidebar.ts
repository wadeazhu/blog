import { sidebar } from "vuepress-theme-hope";

// @ts-ignore
import sidebarJson from './sidebarJson.json'
export default sidebar({
...sidebarJson,
// '/xiangmu/houtaiguanli/': "structure",
// "/demo/": [
//   "",
//   {
//     text: "案例",
//     icon: "laptop-code",
//     prefix: "demo/",
//     link: "demo/",
//     children: "structure",
//   },
//   {
//     text: "文档",
//     icon: "book",
//     prefix: "guide/",
//     children: "structure",
//   },
//   {
//     text: "幻灯片",
//     icon: "person-chalkboard",
//     link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
//   },
// ],
});
