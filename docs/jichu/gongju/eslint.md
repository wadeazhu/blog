# eslint 配置



## 问题

```bash
Error [ERR_REQUIRE_ESM]: Cannot read config file: D:\workspace\z-tools\.eslintrc.js
Error: require() of ES Module D:\workspace\z-tools\.eslintrc.js from D:\workspace\z-tools\node_modules\@eslint\eslintrc\dist\eslintrc.cjs not supported.
.eslintrc.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
Instead rename .eslintrc.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in D:\workspace\z-tools\package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead).
```

## 参考

[ESLint 开始，说透我如何在团队项目中基于 Vue 做代码校验](https://juejin.cn/post/6974223481181306888)

[vue eslint 升级_ESLint 的 parser 是个什么东西](https://blog.csdn.net/weixin_34138673/article/details/113536473)