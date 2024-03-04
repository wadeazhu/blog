import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,b as s}from"./app-D1MQ9M-Q.js";const l={},e=s(`<h1 id="html的基础知识" tabindex="-1"><a class="header-anchor" href="#html的基础知识"><span>html的基础知识</span></a></h1><h2 id="html的认知" tabindex="-1"><a class="header-anchor" href="#html的认知"><span>html的认知</span></a></h2><h3 id="什么是html" tabindex="-1"><a class="header-anchor" href="#什么是html"><span>什么是html</span></a></h3><p>HTML（Hyper Text Markup Language）中文译为：超文本标记语言，专门用于网页开发的语言，主要通过HTML标签对网页中的文本、图片、音频、视频等内容进行描述</p><h3 id="网页由什么组成的" tabindex="-1"><a class="header-anchor" href="#网页由什么组成的"><span>网页由什么组成的？</span></a></h3><p>网页由文字、图片、音频、视频、超链接组成</p><h3 id="常用的浏览器" tabindex="-1"><a class="header-anchor" href="#常用的浏览器"><span>常用的浏览器</span></a></h3><p>浏览器：是网页显示、运行的平台，是前端开发必备利器</p><p>IE浏览器、火狐浏览器（Firefox）、谷歌浏览器（Chrome）、Safari浏览器、欧朋浏览器（Opera）</p><h3 id="渲染引擎" tabindex="-1"><a class="header-anchor" href="#渲染引擎"><span>渲染引擎</span></a></h3><ol><li>渲染引擎（浏览器内核）：浏览器中专门<strong>对代码进行解析渲染的部分</strong></li><li>浏览器出品的公司不同，内在的渲染引擎也是不同的：</li></ol><table><thead><tr><th>浏览器</th><th>内核</th><th>备注</th></tr></thead><tbody><tr><td>ie</td><td>Trident</td><td>ie、猎豹安全、360极速浏览器、百度浏览器</td></tr><tr><td>FireFox</td><td>Gecko</td><td>火狐浏览器内核</td></tr><tr><td>Safari</td><td>Webkit</td><td>苹果浏览器内核</td></tr><tr><td>Chrome/Opera</td><td>Blink</td><td>Blink其实是Webkit的分支</td></tr></tbody></table><ol start="3"><li>渲染引擎不同，导致解析相同代码时的 速度、性能、效果也不同的,谷歌浏览器的渲染引擎速度快、性能高、效果好，所以更吸引用户的喜爱（推荐)</li></ol><h3 id="什么是web标准" tabindex="-1"><a class="header-anchor" href="#什么是web标准"><span>什么是web标准？</span></a></h3><h4 id="为什么需要web标准" tabindex="-1"><a class="header-anchor" href="#为什么需要web标准"><span>为什么需要Web标准？</span></a></h4><ul><li><p>不同浏览器的渲染引擎不同，对于相同代码解析的效果会存在差异，如果用户想看一个网页，结果用不同浏览器打开的效果不同，用户体验极差！</p></li><li><p>Web标准：让不同的浏览器按照相同的标准显示结果，让展示的效果统一！</p></li></ul><figure><img src="https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230325181431700.png" alt="image-20230325181431700" tabindex="0" loading="lazy"><figcaption>image-20230325181431700</figcaption></figure><h4 id="web标准的构成" tabindex="-1"><a class="header-anchor" href="#web标准的构成"><span>Web标准的构成</span></a></h4><p>Web标准中分成三个构成：</p><table><thead><tr><th>构成</th><th>语言</th><th>说明</th></tr></thead><tbody><tr><td>结构</td><td>HTML</td><td>页面元素和内容</td></tr><tr><td>表现</td><td>CSS</td><td>网页元素的外观和位置等页面样式（如：颜色、大小等）</td></tr><tr><td>行为</td><td>JavaScript</td><td>网页模型的定义与页面交互</td></tr></tbody></table><h3 id="html的组成" tabindex="-1"><a class="header-anchor" href="#html的组成"><span>html的组成</span></a></h3><p>html的结构类似一篇文章：</p><ul><li>每一页文章内容是有固定的结构的，如：开头、正文、落款等...</li><li>网页中也是存在固定的结构的，如：整体、头部、标题、主体</li></ul><p>网页中的固定结构是要通过特点的 HTML标签 进行描述的</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>网页的标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        网页的主题内容
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>html标签：网页的整体</li><li>head标签：网页的头部</li><li>body标签：网页的身体</li><li>title标签：网页的标题</li></ul><h2 id="语法规范" tabindex="-1"><a class="header-anchor" href="#语法规范"><span>语法规范</span></a></h2><h3 id="html的注释" tabindex="-1"><a class="header-anchor" href="#html的注释"><span>HTML的注释</span></a></h3><p>在代码中可以添加一些注释，方便下次看到想起功能和含义（给自己或者其他程序员看的）</p><p>html的注释表示<code>&lt;!-- 注释的内容 --&gt;</code></p><h3 id="html标签的构成" tabindex="-1"><a class="header-anchor" href="#html标签的构成"><span>HTML标签的构成</span></a></h3><p>标签的构成图：</p><figure><img src="https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230325183035229.png" alt="image-20230325183035229" tabindex="0" loading="lazy"><figcaption>image-20230325183035229</figcaption></figure><p>结构说明：</p><ol><li>标签由&lt;、&gt;、/、英文单词或字母组成。并且把标签中&lt;&gt;包括起来的英文单词或字母称为标签名</li><li>常见标签由两部分组成，我们称之为：双标签。前部分叫开始标签，后部分叫结束标签，两部分之间包裹内容</li><li>少数标签由一部分组成，我们称之为：单标签。自成一体，无法包裹内容</li></ol><h3 id="html标签的属性" tabindex="-1"><a class="header-anchor" href="#html标签的属性"><span>HTML标签的属性</span></a></h3><p>标签的完整结构图：</p><figure><img src="https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230325183147545.png" alt="image-20230325183147545" tabindex="0" loading="lazy"><figcaption>image-20230325183147545</figcaption></figure><p>属性的注意点：</p><ol><li>标签的属性写在开始标签内部</li><li>标签上可以同时存在多个属性</li><li>属性之间以空格隔开</li><li>标签名与属性之间必须以空格隔开</li><li>属性之间没有顺序之分</li></ol><h2 id="标签学习" tabindex="-1"><a class="header-anchor" href="#标签学习"><span>标签学习</span></a></h2><h3 id="标题标签" tabindex="-1"><a class="header-anchor" href="#标题标签"><span>标题标签</span></a></h3><p>标题使用</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>我是一级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>我是二级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>我是三级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>我是四级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>我是五级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">&gt;</span></span>我是六级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>语义：1~6级标题，重要程度依次递减</li><li>特点：</li><li><ul><li>文字都有加粗</li><li>文字都有变大，并且从h1 → h6文字逐渐减小</li><li>独占一行</li></ul></li><li>注意点：h1标签对于网页尤为重要，开发中有特定的使用场景，如：新闻的标题、网页的logo部分</li></ul><h3 id="段落标签" tabindex="-1"><a class="header-anchor" href="#段落标签"><span>段落标签</span></a></h3><p>在新闻和文章的页面中，用于分段显示</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    我是一段文字
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>语义：段落</li><li>特点： 1、段落之间存在间隙 2、独占一行</li></ul><h3 id="换行标签" tabindex="-1"><a class="header-anchor" href="#换行标签"><span>换行标签</span></a></h3><p>让文字强制换行显示</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>语义：换行</li><li>特点： 1、单标签 2、让文字强制换行</li></ul><h3 id="水平线标签" tabindex="-1"><a class="header-anchor" href="#水平线标签"><span>水平线标签</span></a></h3><p>分割不同主题内容的水平线</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>语义：主题的分割转换</li><li>特点： 1、单标签 2、在页面中显示一条水平线</li></ul><h3 id="文本格式化标签的介绍" tabindex="-1"><a class="header-anchor" href="#文本格式化标签的介绍"><span>文本格式化标签的介绍</span></a></h3><p>场景：需要让文字加粗、下划线、倾斜、删除线等效果</p><p>代码：</p><table><thead><tr><th style="text-align:center;">标签</th><th style="text-align:center;">语义化</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">b</td><td style="text-align:center;">strong</td><td style="text-align:center;">加粗</td></tr><tr><td style="text-align:center;">u</td><td style="text-align:center;">ins</td><td style="text-align:center;">下划线</td></tr><tr><td style="text-align:center;">i</td><td style="text-align:center;">em</td><td style="text-align:center;">倾斜</td></tr><tr><td style="text-align:center;">s</td><td style="text-align:center;">del</td><td style="text-align:center;">删除线</td></tr></tbody></table><h3 id="标签语义化" tabindex="-1"><a class="header-anchor" href="#标签语义化"><span>标签语义化</span></a></h3><p>实际项目开发中选择标签的原则：标签语义化</p><ul><li>即：根据语义选择对应正确的标签</li><li>如：需要写标题，就使用h系列标签</li><li>如：需要写段落，就使用p标签</li></ul><p>好处：对人：好理解，好记忆；对机器：有利于机器解析，对搜索引擎（SEO）有帮助</p><h3 id="图片标签" tabindex="-1"><a class="header-anchor" href="#图片标签"><span>图片标签</span></a></h3><p>在网页中显示图片</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>提示文本<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>特点：</p><ul><li>单标签</li><li>img标签需要展示对应的效果，需要借助标签的属性进行设置！</li></ul><p>属性的介绍：</p><ul><li>src表示图片的路径</li><li>alt表示替换文本，当图片加载失败的时候，才会显示alt的文本</li><li>title表示提示文本，当鼠标悬停时，才显示文本</li><li>width、height表示宽高，这里输入的是数字，如果只设置一个会自动等比例缩放（此时图片不会变形），如果同时设置两个，如果设置不当，可能会导致图片变形</li></ul><h3 id="路径" tabindex="-1"><a class="header-anchor" href="#路径"><span>路径</span></a></h3><p>如果需要加载某个资源，比如图片，需要先找到对应的图片，相当于如果找某个人，通过地址来查找一样。</p><p><strong>路径分为相对路径和绝对路径</strong></p><p><strong>绝对路径</strong>：指目录下的绝对位置，可直接到达目标位置，通常从盘符开始的路径，比如：<code>D:\\learn\\images\\1.png</code> <code>https://www.baidu.com/images/logo.gif</code></p><p><strong>相对路径</strong>：从当前文件开始出发找目标文件的过程，比如：<code>./images/1.png</code> 相当于从当前这个文件开始找到同级的images文件，再找到下面的<code>1.png</code>文件</p><h3 id="音频标签" tabindex="-1"><a class="header-anchor" href="#音频标签"><span>音频标签</span></a></h3><h3 id="视频标签" tabindex="-1"><a class="header-anchor" href="#视频标签"><span>视频标签</span></a></h3>`,79),i=[e];function p(c,o){return t(),n("div",null,i)}const u=a(l,[["render",p],["__file","htmldejichuzhishi.html.vue"]]),r=JSON.parse('{"path":"/jichu/htmlyucss/htmldejichuzhishi.html","title":"html的基础知识","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"html的认知","slug":"html的认知","link":"#html的认知","children":[{"level":3,"title":"什么是html","slug":"什么是html","link":"#什么是html","children":[]},{"level":3,"title":"网页由什么组成的？","slug":"网页由什么组成的","link":"#网页由什么组成的","children":[]},{"level":3,"title":"常用的浏览器","slug":"常用的浏览器","link":"#常用的浏览器","children":[]},{"level":3,"title":"渲染引擎","slug":"渲染引擎","link":"#渲染引擎","children":[]},{"level":3,"title":"什么是web标准？","slug":"什么是web标准","link":"#什么是web标准","children":[]},{"level":3,"title":"html的组成","slug":"html的组成","link":"#html的组成","children":[]}]},{"level":2,"title":"语法规范","slug":"语法规范","link":"#语法规范","children":[{"level":3,"title":"HTML的注释","slug":"html的注释","link":"#html的注释","children":[]},{"level":3,"title":"HTML标签的构成","slug":"html标签的构成","link":"#html标签的构成","children":[]},{"level":3,"title":"HTML标签的属性","slug":"html标签的属性","link":"#html标签的属性","children":[]}]},{"level":2,"title":"标签学习","slug":"标签学习","link":"#标签学习","children":[{"level":3,"title":"标题标签","slug":"标题标签","link":"#标题标签","children":[]},{"level":3,"title":"段落标签","slug":"段落标签","link":"#段落标签","children":[]},{"level":3,"title":"换行标签","slug":"换行标签","link":"#换行标签","children":[]},{"level":3,"title":"水平线标签","slug":"水平线标签","link":"#水平线标签","children":[]},{"level":3,"title":"文本格式化标签的介绍","slug":"文本格式化标签的介绍","link":"#文本格式化标签的介绍","children":[]},{"level":3,"title":"标签语义化","slug":"标签语义化","link":"#标签语义化","children":[]},{"level":3,"title":"图片标签","slug":"图片标签","link":"#图片标签","children":[]},{"level":3,"title":"路径","slug":"路径","link":"#路径","children":[]},{"level":3,"title":"音频标签","slug":"音频标签","link":"#音频标签","children":[]},{"level":3,"title":"视频标签","slug":"视频标签","link":"#视频标签","children":[]}]}],"git":{"createdTime":1709263503000,"updatedTime":1709354699000,"contributors":[{"name":"zhuqi","email":"zhuqi","commits":4}]},"readingTime":{"minutes":5.56,"words":1667},"filePathRelative":"jichu/htmlyucss/htmldejichuzhishi.md","localizedDate":"2024年3月1日"}');export{u as comp,r as data};
