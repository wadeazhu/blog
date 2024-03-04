import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-D1MQ9M-Q.js";const p={},l=t(`<h1 id="html-列表标签" tabindex="-1"><a class="header-anchor" href="#html-列表标签"><span>HTML 列表标签</span></a></h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>列表是网页中非常常用的元素，用于展示一些有序或无序的内容。HTML提供了三种类型的列表：</p><ul><li>无序列表（unordered list）</li><li>有序列表（ordered list）</li><li>描述列表（description list）</li></ul><p>本文将介绍这三种列表类型的用法，包括如何嵌套列表，如何自定义列表样式等。</p><h2 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表"><span>无序列表</span></a></h2><p>无序列表用于展示一组没有特定顺序的内容，例如：</p><ul><li>奶茶店的多种口味</li><li>同学们的名字</li><li>旅行地点的景点</li></ul><h3 id="创建无序列表" tabindex="-1"><a class="header-anchor" href="#创建无序列表"><span>创建无序列表</span></a></h3><p>使用<code>&lt;ul&gt;</code>标签来创建无序列表，每个列表项使用<code>&lt;li&gt;</code>标签来定义。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>列表项1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>列表项2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>列表项3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习题" tabindex="-1"><a class="header-anchor" href="#练习题"><span>练习题</span></a></h3><p>请创建一个无序列表，其中包含至少三个列表项，每个列表项展示一个你喜欢的水果。</p><h2 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表"><span>有序列表</span></a></h2><p>有序列表用于展示一组有特定顺序的内容，例如：</p><ul><li>菜单中的食品排名</li><li>歌曲排行榜</li><li>车站公交车到达的时间表</li></ul><h3 id="创建有序列表" tabindex="-1"><a class="header-anchor" href="#创建有序列表"><span>创建有序列表</span></a></h3><p>使用<code>&lt;ol&gt;</code>标签来创建有序列表，每个列表项使用<code>&lt;li&gt;</code>标签来定义。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>列表项1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>列表项2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>列表项3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习题-1" tabindex="-1"><a class="header-anchor" href="#练习题-1"><span>练习题</span></a></h3><p>请创建一个有序列表，其中包含至少三个列表项，每个列表项展示一个你喜欢的城市。</p><h2 id="描述列表" tabindex="-1"><a class="header-anchor" href="#描述列表"><span>描述列表</span></a></h2><p>描述列表用于展示一组名称和其对应的描述，例如：</p><ul><li>网站注册表单的字段和其描述</li><li>产品介绍页面的特点和其描述</li><li>API文档的参数和其描述</li></ul><h3 id="创建描述列表" tabindex="-1"><a class="header-anchor" href="#创建描述列表"><span>创建描述列表</span></a></h3><p>使用<code>&lt;dl&gt;</code>标签来创建描述列表，每个名称使用<code>&lt;dt&gt;</code>标签来定义，每个描述使用<code>&lt;dd&gt;</code>标签来定义。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>名称1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>描述1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>名称2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>描述2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习题-2" tabindex="-1"><a class="header-anchor" href="#练习题-2"><span>练习题</span></a></h3><p>请创建一个描述列表，其中包含至少三个名称和其对应的描述，每个名称和描述展示一个你最喜欢的电影。</p><h2 id="嵌套列表" tabindex="-1"><a class="header-anchor" href="#嵌套列表"><span>嵌套列表</span></a></h2><p>列表可以互相嵌套，可以将一个列表放在另一个列表中的项目中。例如，下面的代码演示了一个嵌套列表：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目2
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>子项目1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>子项目2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><ol><li>项目1</li><li>项目2 <ul><li>子项目1</li><li>子项目2</li></ul></li><li>项目3</li></ol><h2 id="自定义标志" tabindex="-1"><a class="header-anchor" href="#自定义标志"><span>自定义标志</span></a></h2><p>在无序列表中，可以使用自定义标志来代替默认的实心圆点。可以使用CSS样式来定义自己的标志。下面的例子演示如何将“*”作为自定义的无序列表标志：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">ul</span> <span class="token punctuation">{</span>
    <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">li:before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>项目3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><ul><li>项目1</li><li>项目2</li><li>项目3</li></ul><ol><li>列表样式的自定义</li></ol><p>除了默认的样式，HTML列表也可以通过CSS样式来自定义。</p><h3 id="无序列表样式的自定义" tabindex="-1"><a class="header-anchor" href="#无序列表样式的自定义"><span>无序列表样式的自定义</span></a></h3><p>无序列表的样式可以通过CSS的<code>list-style-type</code>属性来定义。下面是一些常见的无序列表样式：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> disc<span class="token punctuation">;</span>   <span class="token comment">/* 实心圆点 */</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> circle<span class="token punctuation">;</span> <span class="token comment">/* 空心圆点 */</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> square<span class="token punctuation">;</span> <span class="token comment">/* 实心正方形 */</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>   <span class="token comment">/* 不显示符号 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有序列表样式的自定义" tabindex="-1"><a class="header-anchor" href="#有序列表样式的自定义"><span>有序列表样式的自定义</span></a></h3><p>有序列表的样式可以通过CSS的<code>list-style-type</code>属性来定义，也可以通过<code>list-style-image</code>属性来使用自定义的图片。下面是一些常见的有序列表样式：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">ol</span> <span class="token punctuation">{</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> decimal<span class="token punctuation">;</span>      <span class="token comment">/* 十进制数字 */</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> lower-alpha<span class="token punctuation">;</span>  <span class="token comment">/* 小写字母 */</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> upper-alpha<span class="token punctuation">;</span>  <span class="token comment">/* 大写字母 */</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> lower-roman<span class="token punctuation">;</span>  <span class="token comment">/* 小写罗马数字 */</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> upper-roman<span class="token punctuation">;</span>  <span class="token comment">/* 大写罗马数字 */</span>
  <span class="token property">list-style-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;path/to/image.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token comment">/* 自定义图片 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="描述列表样式的自定义" tabindex="-1"><a class="header-anchor" href="#描述列表样式的自定义"><span>描述列表样式的自定义</span></a></h3><p>描述列表的样式可以通过CSS的<code>list-style-type</code>属性来定义，下面是一些常见的样式：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">dl</span> <span class="token punctuation">{</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>  <span class="token comment">/* 不显示符号 */</span>
<span class="token punctuation">}</span>
<span class="token selector">dt</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>     <span class="token comment">/* 粗体 */</span>
<span class="token punctuation">}</span>
<span class="token selector">dd</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>        <span class="token comment">/* 取消缩进 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习题-3" tabindex="-1"><a class="header-anchor" href="#练习题-3"><span>练习题</span></a></h3><p>请在前面的练习题基础上，添加CSS样式来自定义列表的样式，例如更改无序列表符号的形状，添加背景颜色等。</p>`,52),e=[l];function c(i,o){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","liebiaobiaoqian.html.vue"]]),r=JSON.parse('{"path":"/jichu/htmlyucss/liebiaobiaoqian.html","title":"HTML 列表标签","lang":"zh-CN","frontmatter":{"order":6},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"无序列表","slug":"无序列表","link":"#无序列表","children":[{"level":3,"title":"创建无序列表","slug":"创建无序列表","link":"#创建无序列表","children":[]},{"level":3,"title":"练习题","slug":"练习题","link":"#练习题","children":[]}]},{"level":2,"title":"有序列表","slug":"有序列表","link":"#有序列表","children":[{"level":3,"title":"创建有序列表","slug":"创建有序列表","link":"#创建有序列表","children":[]},{"level":3,"title":"练习题","slug":"练习题-1","link":"#练习题-1","children":[]}]},{"level":2,"title":"描述列表","slug":"描述列表","link":"#描述列表","children":[{"level":3,"title":"创建描述列表","slug":"创建描述列表","link":"#创建描述列表","children":[]},{"level":3,"title":"练习题","slug":"练习题-2","link":"#练习题-2","children":[]}]},{"level":2,"title":"嵌套列表","slug":"嵌套列表","link":"#嵌套列表","children":[]},{"level":2,"title":"自定义标志","slug":"自定义标志","link":"#自定义标志","children":[{"level":3,"title":"无序列表样式的自定义","slug":"无序列表样式的自定义","link":"#无序列表样式的自定义","children":[]},{"level":3,"title":"有序列表样式的自定义","slug":"有序列表样式的自定义","link":"#有序列表样式的自定义","children":[]},{"level":3,"title":"描述列表样式的自定义","slug":"描述列表样式的自定义","link":"#描述列表样式的自定义","children":[]},{"level":3,"title":"练习题","slug":"练习题-3","link":"#练习题-3","children":[]}]}],"git":{"createdTime":1709349262000,"updatedTime":1709354699000,"contributors":[{"name":"zhuqi","email":"zhuqi","commits":4}]},"readingTime":{"minutes":3.77,"words":1132},"filePathRelative":"jichu/htmlyucss/liebiaobiaoqian.md","localizedDate":"2024年3月2日"}');export{k as comp,r as data};
