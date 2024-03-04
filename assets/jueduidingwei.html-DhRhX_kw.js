import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as t}from"./app-D1MQ9M-Q.js";const p={},e=t(`<h1 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位"><span>绝对定位</span></a></h1><h2 id="什么是绝对定位" tabindex="-1"><a class="header-anchor" href="#什么是绝对定位"><span>什么是绝对定位</span></a></h2><h2 id="绝对定位的特点" tabindex="-1"><a class="header-anchor" href="#绝对定位的特点"><span>绝对定位的特点</span></a></h2><ol><li>包裹性</li><li>不占空间</li><li>脱离文本流</li><li>层级比普通文本流高一级</li></ol><h3 id="包裹性" tabindex="-1"><a class="header-anchor" href="#包裹性"><span>包裹性</span></a></h3><p>上面的图片没有加绝对定位,下面图片加了绝对定位,<strong>加了绝对定位的容器的宽高等于子元素的宽高</strong></p><figure><img src="https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230324134015373.png" alt="image-20230324134015373" tabindex="0" loading="lazy"><figcaption>image-20230324134015373</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 2px solid red</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://t7.baidu.com/it/u=839828294,1619278046&amp;fm=193&amp;f=GIF<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>没有加绝对定位<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 2px solid red<span class="token punctuation">;</span> <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://t7.baidu.com/it/u=839828294,1619278046&amp;fm=193&amp;f=GIF<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>加了绝对定位<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦给元素加上absolute或float就相当于给元素加上了display:block;。什么意思呢？比如内联元素span默认宽度是自适应的，你给其加上width是不起作用的。要想width定宽，你需要将span设成display:block。但如果你给span加上absolute或float，那span的display属性自动就变成block，就可以指定width了。因此如果看到CSS里absolute/float和display:block同时出现，那display:block就是多余的CSS代码。</p><h3 id="不占空间" tabindex="-1"><a class="header-anchor" href="#不占空间"><span>不占空间</span></a></h3><p>当给一个元素设置绝对定位之后,那么这个容器在整个文本流中都不占地方.</p><h3 id="脱离文本流" tabindex="-1"><a class="header-anchor" href="#脱离文本流"><span>脱离文本流</span></a></h3><p>解释这一点之前,先确认一个点就是,绝对定位的默认定位点就是<strong>当前文本流的下一个位置</strong></p><figure><img src="https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230324135041334.png" alt="image-20230324135041334" tabindex="0" loading="lazy"><figcaption>image-20230324135041334</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>一段测试文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://t7.baidu.com/it/u=839828294,1619278046&amp;fm=193&amp;f=GIF<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上面的图片想表达的意思就是:如果给一个元素设置了绝对定位但是没有设置定位属性(top,left,right,bottom),那么这个元素出现的位置就是正常文本流的下一个位置</strong></p><p><strong>如果设置了绝对定位,但是只设置了一个方向或者一组对立方向(top与bottom,left与right),那么其垂直方位还是出现在正常文本流的下一个文字</strong></p><figure><img src="https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230324140115167.png" alt="image-20230324140115167" tabindex="0" loading="lazy"><figcaption>image-20230324140115167</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的测试文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span> <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果设置绝对定位,但是设置不同方位的属性,那么其元素彻底被方位属性控制</strong></p><figure><img src="https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230324140232434.png" alt="image-20230324140232434" tabindex="0" loading="lazy"><figcaption>image-20230324140232434</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的测试文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token property">left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span> <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果同时设置left和right,或者top和bottom,那么这个容器将会被拉伸,设置了<code>relative</code>的父元素的宽高(padding + content)决定了他的宽高上限</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230324151859749.png" alt="image-20230324151859749" tabindex="0" loading="lazy"><figcaption>image-20230324151859749</figcaption></figure><p>如果同时设置了left和right与width或者bottom和top与height,那么right或bottom会失效</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><figure><img src="https://azhu-images.oss-cn-hangzhou.aliyuncs.com/img-for-marktext/image-20230324150002101.png" alt="image-20230324150002101" tabindex="0" loading="lazy"><figcaption>image-20230324150002101</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.box::before</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;推荐&quot;</span><span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://t7.baidu.com/it/u=839828294,1619278046&amp;fm=193&amp;f=GIF<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里只用加position: absolute, 这一个属性就够了,因为before本身就在img的前面,且层级也高一级别,所以不用加任何方向属性就可以.(注意这里要是用after伪元素就不行)</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>绝对布局的特性是不占空间，但不一定完全脱离文档流，只有在设置了偏移时才会脱离文档流</p><p>如果只设置了一个方向上的偏移量，那么在另外一个方向上仍然保留着文档流特性</p><p>在绝对定位中，<code>::before</code>要比<code>::after</code>要好用的多，因为<code>::before</code>默认就是初始位置，可以很轻易的实现重叠效果</p>`,34),o=[e];function l(c,i){return a(),s("div",null,o)}const r=n(p,[["render",l],["__file","jueduidingwei.html.vue"]]),d=JSON.parse('{"path":"/jichu/htmlyucss/jueduidingwei.html","title":"绝对定位","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"什么是绝对定位","slug":"什么是绝对定位","link":"#什么是绝对定位","children":[]},{"level":2,"title":"绝对定位的特点","slug":"绝对定位的特点","link":"#绝对定位的特点","children":[{"level":3,"title":"包裹性","slug":"包裹性","link":"#包裹性","children":[]},{"level":3,"title":"不占空间","slug":"不占空间","link":"#不占空间","children":[]},{"level":3,"title":"脱离文本流","slug":"脱离文本流","link":"#脱离文本流","children":[]}]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1709263503000,"updatedTime":1709354699000,"contributors":[{"name":"zhuqi","email":"zhuqi","commits":4}]},"readingTime":{"minutes":3.47,"words":1041},"filePathRelative":"jichu/htmlyucss/jueduidingwei.md","localizedDate":"2024年3月1日"}');export{r as comp,d as data};
