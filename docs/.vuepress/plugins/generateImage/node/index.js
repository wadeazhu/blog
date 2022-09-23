import { getDirname, path } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
// import path from "path";

const clientConfigFile = path.join(__dirname, "./../client/config.js")

export const generateImagePlugin = () => ({
    name: "vuepress-plugin-generate-image",
    clientConfigFile
});
