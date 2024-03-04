import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-D1MQ9M-Q.js";const p={},e=t(`<h1 id="uni-app常见功能的实现" tabindex="-1"><a class="header-anchor" href="#uni-app常见功能的实现"><span>uni-app常见功能的实现</span></a></h1><h3 id="使用手机号一键登录" tabindex="-1"><a class="header-anchor" href="#使用手机号一键登录"><span>使用手机号一键登录</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">:fixed</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getPhoneNumber<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@getphonenumber</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getPhoneNumber<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>使用当前微信授权手机号登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token function">getPhoneNumber</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>errMsg <span class="token operator">===</span> <span class="token string">&#39;getPhoneNumber:ok&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 这里表示授权成功</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果没有授权成功</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片上传的功能" tabindex="-1"><a class="header-anchor" href="#图片上传的功能"><span>图片上传的功能</span></a></h3><h3 id="实现一个进度条" tabindex="-1"><a class="header-anchor" href="#实现一个进度条"><span>实现一个进度条</span></a></h3><h3 id="实现一个日历" tabindex="-1"><a class="header-anchor" href="#实现一个日历"><span>实现一个日历</span></a></h3><h3 id="页面操作成功-返回后通知前一个页面刷新" tabindex="-1"><a class="header-anchor" href="#页面操作成功-返回后通知前一个页面刷新"><span>页面操作成功,返回后通知前一个页面刷新</span></a></h3><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token comment">&lt;!--发送--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> pages <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> prevPage <span class="token operator">=</span> pags<span class="token punctuation">[</span>pages<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">// 这里减去1是当前页面,减去3是上上个页面</span>
			prevPage<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">refresh</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
            uni<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">delta</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token comment">// 返回上上个页面</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--接受--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> pages <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> currPage <span class="token operator">=</span> pages<span class="token punctuation">[</span>pages<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currPage<span class="token punctuation">.</span>data<span class="token punctuation">.</span>refresh<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上拉刷新下拉加载" tabindex="-1"><a class="header-anchor" href="#上拉刷新下拉加载"><span>上拉刷新下拉加载</span></a></h3><p>pages.json</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    path<span class="token operator">:</span> &#39;路径&#39;<span class="token punctuation">,</span>
    style<span class="token operator">:</span> <span class="token punctuation">{</span>
        &#39;navigationBarTitleText&#39;<span class="token operator">:</span> <span class="token string">&quot;标题&quot;</span><span class="token punctuation">,</span>
        &#39;enablePullDownRefresh&#39;<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        &#39;onReachBottomDistance&#39;<span class="token operator">:</span> <span class="token number">150</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面逻辑</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
        	<span class="token literal-property property">pullTimer</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">10</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 上拉刷新</span>
    <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pullTimer <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pullTimer<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pullTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            uni<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token number">1</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取数据</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 下拉加载更多</span>
    <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">.</span>total <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">.</span>current <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>page <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">.</span>current <span class="token operator">+</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取数据</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","uni-appchangjiangongnengdeshixian.html.vue"]]),d=JSON.parse('{"path":"/qita/work/uni-appchangjiangongnengdeshixian.html","title":"uni-app常见功能的实现","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"使用手机号一键登录","slug":"使用手机号一键登录","link":"#使用手机号一键登录","children":[]},{"level":3,"title":"图片上传的功能","slug":"图片上传的功能","link":"#图片上传的功能","children":[]},{"level":3,"title":"实现一个进度条","slug":"实现一个进度条","link":"#实现一个进度条","children":[]},{"level":3,"title":"实现一个日历","slug":"实现一个日历","link":"#实现一个日历","children":[]},{"level":3,"title":"页面操作成功,返回后通知前一个页面刷新","slug":"页面操作成功-返回后通知前一个页面刷新","link":"#页面操作成功-返回后通知前一个页面刷新","children":[]},{"level":3,"title":"上拉刷新下拉加载","slug":"上拉刷新下拉加载","link":"#上拉刷新下拉加载","children":[]}],"git":{"createdTime":1709263503000,"updatedTime":1709354699000,"contributors":[{"name":"zhuqi","email":"zhuqi","commits":4}]},"readingTime":{"minutes":0.88,"words":264},"filePathRelative":"qita/work/uni-appchangjiangongnengdeshixian.md","localizedDate":"2024年3月1日"}');export{k as comp,d as data};
