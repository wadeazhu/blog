# babel

babel用于转译es的语法, 当项目中存在比较高的语法, 且在终端访问不了的时候, 就会用到babel, babel已经是项目构件中比较重要的一个部分. babel只是创建了一个平台, 用于将语法解析成抽象语法树, 然后用插件对抽象语法树进行变换操作, 最后babel-generator生成对应的代码. 



babel包的组成: 

- @babel/core: babel的核心包
- @babel/cli: babel提供命令行工具的包
- @babel/preset-*: 用于不用的场景下的插件集合, 比如: @babel/preset-env, @babel/preset-typescript...
- @babel/plugin-*: 用于将代码转换的插件, 比如: @babel/plugin-



## 安装



