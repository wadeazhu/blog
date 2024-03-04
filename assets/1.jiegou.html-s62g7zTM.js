import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,b as s}from"./app-D1MQ9M-Q.js";const l={},d=s(`<h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈"><span>技术栈</span></a></h2><blockquote><p>采用<code>Vue3+pinia+ant-design-vue+ts</code>搭建的后台管理</p></blockquote><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>project
|____src
|    | app.vue //主页面
|    | main.js //主入口
|    | permission.ts 处理权限相关的文件
|    |
|    |____api  //接口层
|    |    |  index.js // 所有接口
|    |
|    |____assets // css、image、svg等资源
|    |
|    |____components // 组件
|    |    |  ... // 业务公共组件
|    |    | registerGlobComp.ts // 全局注册文件
|    |
|    |____config  // 配置文件
|    |
|    |____directive // 配置并注册全局指令
|    |
|    |____enums // 枚举文件夹
|    |
|    |____hooks  // 自定义封装hooks函数方法，类似vue mixins
|    |
|    |____layout // 后台框架模板文件夹
|    |
|    |____router // 路由文件夹
|    |    |____asyncRoutes 页面路由文件夹（后期做权限处理）
|    |
|    |____store // pinia 全局管理数据
|    |    | index.js
|    |
|    |____style  // 样式管理文件
|    |
|    |____utils  // 自己或第三方插件
|    |    | index.js  // 通用方法包括前端校验，前端lodash一些通用方法等
|    |    | request.js // axios 封装
|    |    | area.json // 省市区数据
|    |
|    |____views  // UI层（原则：轻page，重component）
|    |    | common // 通用页面，404，500等
|    |    | login、index // 业务页面
|____public  // 公用文件，不经过webpack处理
|    | favicon.ico
|    | index.html
|    vite.config.js  // vue-cli3主配置
|    tsconfig.json
|    Jenkinsfile
|    Dockerfile
|    default.cong  
|    .eslintrc.js  // eslint的配置
|    .editorconfig  // 项目编译器的配置
|    package.json // npm配置
|    README.md  // 项目说明

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包优化" tabindex="-1"><a class="header-anchor" href="#打包优化"><span>打包优化</span></a></h2><blockquote><p>项目体积逐渐庞大时候，热更替以及重新打包会占用比较多的时间。利用cache开启缩短2次打包之间的差异时间。以及优化各种通用第三方函数的优先打包到缓存。</p></blockquote><h2 id="打包编译上线" tabindex="-1"><a class="header-anchor" href="#打包编译上线"><span>打包编译上线</span></a></h2><h3 id="手动打包" tabindex="-1"><a class="header-anchor" href="#手动打包"><span>手动打包</span></a></h3><ol><li>手动打包<code>npm run build</code></li><li>手动上传到静态服务器</li><li>构建一个镜像、然后推送镜像</li></ol><h3 id="自动化打包" tabindex="-1"><a class="header-anchor" href="#自动化打包"><span>自动化打包</span></a></h3><blockquote><p>利用Jenkinsfile + k8s</p></blockquote><p>项目地址：南塘后台管理</p>`,12),a=[d];function c(v,r){return e(),n("div",null,a)}const o=i(l,[["render",c],["__file","1.jiegou.html.vue"]]),m=JSON.parse('{"path":"/xiangmu/houtaiguanli/1.jiegou.html","title":"整体结构","lang":"zh-CN","frontmatter":{"title":"整体结构","icon":"fab fa-markdown","order":1,"footer":false},"headers":[{"level":2,"title":"技术栈","slug":"技术栈","link":"#技术栈","children":[]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"打包优化","slug":"打包优化","link":"#打包优化","children":[]},{"level":2,"title":"打包编译上线","slug":"打包编译上线","link":"#打包编译上线","children":[{"level":3,"title":"手动打包","slug":"手动打包","link":"#手动打包","children":[]},{"level":3,"title":"自动化打包","slug":"自动化打包","link":"#自动化打包","children":[]}]}],"git":{"createdTime":1709263503000,"updatedTime":1709354699000,"contributors":[{"name":"zhuqi","email":"zhuqi","commits":4}]},"readingTime":{"minutes":1.47,"words":441},"filePathRelative":"xiangmu/houtaiguanli/1.jiegou.md","localizedDate":"2024年3月1日"}');export{o as comp,m as data};
