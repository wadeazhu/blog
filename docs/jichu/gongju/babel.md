# babel

babel用于转译es的语法, 当项目中存在比较高的语法, 且在终端访问不了的时候, 就会用到babel, babel已经是项目构件中比较重要的一个部分. babel只是创建了一个平台, 用于将语法解析成抽象语法树, 然后用插件对抽象语法树进行变换操作, 最后babel-generator生成对应的代码. 



babel包的组成: 

- @babel/core: babel的核心包
- @babel/cli: babel提供命令行工具的包
- @babel/preset-*: 用于不用的场景下的插件集合, 比如: @babel/preset-env, @babel/preset-typescript...
- @babel/plugin-*: 用于将代码转换的插件, 比如: @babel/plugin-

## 可以解决的问题

1. 如何转换js语法层面的代码
2. 如何转换js新增api的代码
3. 如何按需插入Polyfill
4. 解决Polyfill重复注入的问题
5. 如何按需插入Polyfill的同时可以保证不污染全局变量。


## 安装

```bash
npm i @babel/core @babel/cli --save-dev

# 对于webpack需要在安装babel-loader， 作为babel与webpack之间的桥梁
npm i babel-loader
```

## 使用

结合webpack使用

```js
//... 
{
    test: /\.js$/,
    exclude: /(node_modules|bower_components))/,
    use: {
        loader: 'babel-loader'
    }
}
//...
```

如果在这里什么都不写，那么这里babel并不会对js进行转换，只是对js进行了ast的变换，然后等待插件进行转换.

比如： 

```js
const add = (num1, num2) => num1 + num2
```

那么这里需要两个插件， 分别用于转换const和箭头函数

```bash
npm install --save-dev @babel/plugin-transform-arrow-functions @babel/plugin-transform-block-scoping
```

```js
//... 
{
    test: /\.js$/,
    exclude: /(node_modules|bower_components))/,
    use: {
        loader: 'babel-loader',
        options: {
            plugins: [
                '@babel/plugin-transform-arrow-functions',
                '@babel/plugin-transform-block-scoping'
            ]
        }
    }
}
//...
```

这里就会出现第一个问题，当es6代码用的很多的时候，就会插入很多的插件，所以babel官方提供了预设这一选项，开发者可以根据当前代码的环境自己选择合适的预设，这个预设包含了这个环境下的一系列的插件。比如： @babel/preset-env提供了es6转换的一些插件


```bash
npm i @babel/preset-env --save-dev
npm i core-js@3 --save // 提供Polyfill
```



```js
{
    test: /\.js$/,
    exclude: /(node_modules|bower_components))/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                ['@babel/preset-env', {
                    useBuiltIns: 'entry',
                    corejs: '3'
                }]
            ]
        }
    }
}
```

**注意：** 

1. 如果这里不添加属性， babel会默认目标环境版本很低去转换且只会转换js语法层面的代码，比如：箭头函数、const、await这些，但是新增的方法不会转换比如：Array.form()、Object.is()...， 转换这些要提供安装`@babel/polyfill`,然后在代码的入口文件导入`import @babel/polyfill`

   

2. 在全局入口中导入`@babel/polyfill`已经不推荐使用，出现两个问题，1、只是用一些基本的功能的情况下会导入所有的polyfill，导致最终打包结果很大，2、会污染全局变量。 然后把polyfill交给了预设或者插件来处理，可以智能化的管理这些polyfill

   

3. 上面的配置是将polyfill交给了预设来管理，通过设置useBuiltIns来管理全部导入还是按需导入。 但是polyfill注入会出现重复导入的问题

   

4. corejs的版本区别：corejs2已经不推荐了， corejs3相比corejs2增加了一些实例方法比如'foobar'.includes('foo')中includes方法在2中是不存在的。



针对上面的配置，没有解决了polyfill按需加载，但是没有解决全局变量污染的问题，babel官方提供了一个插件`@babel/plugin-transform-runtime`,让他来管理polyfill， @babel/preset-env只用来转换语法

```bash
npm i @babel/plugin-transform-runtime
```

