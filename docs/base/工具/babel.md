# babel

## `@babel/preset-env`

`@babel/preset-env`是一个智能的`babel`预设, 让你能使用最新的`JavaScript`语法, 它会帮你转换成代码的目标运行环境支持的语法, 提升你的开发效率并让打包后的代码体积更小,但是不会转换新增的方法,比如: `Object.is(), Array.from()`...



#### 安装

```bash
npm i @babel/preset-env --save-dev
# or
yarn add @babel/preset-env --dev
```

#### 运行机制

`@babel/preset-env`依赖了一些优秀的开源项目, 如`browserslist`, `compat-table`, `electron-to-chromium`...


我们利用这些数据源维护和增强`Babel`语法转换、语法实现, 来支持对应的目标环境的版本的语法、特征

@babel/preset-env`利用你指定的任何目标环境, 检查它们对应的插件并传给`Babel

> 注意`@babel/preset-env`不支持`stage-x`的插件

对基于浏览器或者`Electron`的项目, 我们推荐使用一个`.browserslistrc`文件指定编译目标.如果你已经有了这个配置文件, 它将被很多前段工程化生态的工具利用到, 比如 `autoprefixer`, `stylelint`, `eslint-plugin-compat`...



如果没有配置`targets`或者`ignoreBrowserslistConfig`, `@babel/preset-env`将使用默认的`Browserslist`配置

如果你想支持市场份额大于0.25%而且忽略安全更新的浏览器如`IE 10`和`BlackBerry`的语法转换和语法实现, 你可以采用如下的配置

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}
```

.browserlistrc

```txt
> 0.25%
not dead
```

或者你可以在`package.json`文件里配置

```json
"browserslist": "> 0.25%, not dead"
```

#### 配置项介绍

targets: 描述你的项目支持的目标环境

数据类型: `string | Array<string> | { [string]: string }`, 默认 `{}`, 也可以是一个`browserslist-compatible`查询语句

```json
{
  "targets": "> 0.25%, not dead"
}
```

或者是一个描述支持的最小的环境版本的对象

```json
{
  "targets": {
    "chrome": "58",
    "ie": "11"
  }
}
```

环境如: `chrome`, `opera`, `edge`, `firefox`, `safari`, `ie`, `ios`, `android`, `node`, `electron`

注意, 如果不指定`targets`, `@babel/prest-env`会将所有的`ECMAScript 2015+`代码按照默认的配置去转换

```json
{
  "presets": ["@babel/preset-env"]
}
```

> 我们不推荐这样使用, 因为这样没有利用到其支持特定浏览器的能力

targets.esmodules 

数据类型: boolean

如果代码运行的浏览器支持es modules,当置为true的时候,browers将被忽略,可以配合`<script type='module'></script>`专门为用户提供更小体积的代码文件

##### `targets.node`

数据类型: `string | "current" | true`

如果编译针对当前node版本,可以指定node配置项,如果指定current,等同于`node: process.version.node`

##### `targets.safari`

数据类型: `string | "tp"`

如果你将针对`Safari`浏览器的技术预览版[`technology preview`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.apple.com%2Fsafari%2Ftechnology-preview%2F)版本去编译, 可以指定`"safari": "tp"`

##### `targets.browsers`

数据类型: `string | Array<string>`

一个browserlist查询选项

`spec`

类型: boolean, 默认: false

为一些允许的但是潜在的会比较慢的插件或者预设做配置

`loose`

类型: boolean, 默认: false

允许支持[`loose transformations`](https://link.juejin.cn/?target=https%3A%2F%2F2ality.com%2F2015%2F12%2Fbabel6-loose-mode.html)的插件或者预设

`modules`

类型: `"amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false`, 默认为 `"auto"`



允许转换`ES6`模块语法为其他的模块类型,设置为`false`将不会转换模块



`debug`

类型: boolean, 默认: false

`console.log`输出编译目标或者使用的插件在[`plugin data version`](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmaster%2Fpackages%2Fbabel-preset-env%2Fdata%2Fplugins.json)中指定的版本



`include`

类型: `Array<string|RegExp>`, 默认: []

包含某些插件



`exclude`

类型: `Array<string|RegExp>`, 默认: []

排除某些插件



`useBuildtIns`

类型: `"usage" | "entry" | false`, 默认`false`

配置非false使用, 因为`@babel/polyfill`在`Babel 7.4.0`已被废弃,我们推荐直接添加`core-js`和通过[`corejs`](https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-preset-env%23corejs)选项设置版本

```bash
npm install core-js@3 --save
# or
npm install core-js@2 --save
```

`useBuiltIns: 'entry'`

> 注意: 你的整个app里只能使用一次`import "core-js` 和`import "regenerator-runtime/runtime"`. 如果你正在使用`@babel/polyfill`, 其已包含了`core-js`和`regenerator-runtime`: 如果多次引入它或报错.多次引入这些包将导致全局的冲突和其它难易追踪的问题. 我们推荐创建一个只包含`import`声明的单入口文件

当需要根据不同的基于环境的入口需要引入不同的`core-js`时, 这个选项允许一个新的插件来替换`import "core-js/stable"`和`import "regenerator-runtime/runtime"`声明(或者`require("corejs")`和`require("regenerator-runtime/runtime")`)



in

```js
import 'core-js'
```

out(基于不同的环境)

```js
import "core-js/modules/es.string.pad-start";
import "core-js/modules/es.string.pad-end";
```



引入`"core-js"`加载了对于每一个可能的`ECMAScript`特性的语法填充, 如果你知道你只需要他们其中的某一部分呢, 当使用`core-js@3`和`@babel/preset-env`, 能够对每一个`core-js`入口和其依赖的优化. 比如, 你看值需要填充数组方法和新的`Math`提案:

#### in

```js
import "core-js/es/array";
import "core-js/proposals/math-extensions";
```



out

```js
import "core-js/modules/es.array.unscopables.flat";
import "core-js/modules/es.array.unscopables.flat-map";
import "core-js/modules/esnext.math.clamp";
import "core-js/modules/esnext.math.deg-per-rad";
import "core-js/modules/esnext.math.degrees";
import "core-js/modules/esnext.math.fscale";
import "core-js/modules/esnext.math.rad-per-deg";
import "core-js/modules/esnext.math.radians";
import "core-js/modules/esnext.math.scale";
```

你可以阅读[`core-js`](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fzloirock%2Fcore-js)的文档获取关于不同入口的信息

> 注意: 当使用`core-js@2`(使用`corejs: 2`配置项或者隐式使用), `@babel/preset-env`将也引入`@babel/polyfill`. 这种行为已被废弃, 因为不可能与`@babel/polyfill`使用不同的`core-js`版本

`useBuiltIns: 'usage'`

当文件里被使用时, 添加特定的引入来语法填充, 我们利用它, 一个打包的文件只会加载一次相同的语法填充

#### In

a.js

```js
var a = new Promise();
```



b.js

```js
var b = new Map();
```



#### Out(如果环境需要语法填充)

```js
import "core-js/modules/es.promise";
var a = new Promise();
```

```js
import "core-js/modules/es.map";
var b = new Map();
```

#### Out(如果环境支持该语法)

```js
var a = new Promise();
```

```js
var b = new Map();
```

`useBuiltIns: false`

不在每一个文件自动添加语法填充, 不转换`import "core-js"`和`import "@babel/polyfill"`为单独的语法填充



`corejs`

数据结构: `2, 3` 或者 `{ version: 2 | 3, proposals: boolean }`, 默认为 `2`

这个选项只会在与`useBuiltIns: usage`或者`useBuiltIns: entry`一起使用时才会生效, 确保`@babel/preset-env`为你的`core-js`版本注入了正确的引入

默认只有稳定的 `ECMAScript`特性的语法填充才被注入, 你有三种方式去做语法填充:

- 当使用`useBuiltIns: "entry"`, 你可直接引入一个[`proposal polyfill`](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fzloirock%2Fcore-js%2Ftree%2Fmaster%2Fpackages%2Fcore-js%2Fproposals): `import "core-js/proposals/string-replace-all"`







## 参考

[babel的基本用法、按需polyfill](https://juejin.cn/post/7020741071067955214)

[用了babel还需要polyfill吗？？？](https://juejin.cn/post/6845166891015602190)

[[译]Babel文档之@babel/preset-env](https://juejin.cn/post/6844903937900822536#heading-5)