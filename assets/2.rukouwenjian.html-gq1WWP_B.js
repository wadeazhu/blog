import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-D1MQ9M-Q.js";const e={},p=t(`<h2 id="入口文件" tabindex="-1"><a class="header-anchor" href="#入口文件"><span>入口文件</span></a></h2><p><code>index.html</code> 整个html的模板</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>app<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/src/main.ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main.js</code> 导入公共的css、组件的i18n文件、全局store、全局组件、路由、注册全局指令，然后挂载html节点。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span> <span class="token comment">// 入口vue文件</span>
<span class="token keyword">import</span> <span class="token string">&#39;common.less&#39;</span> <span class="token comment">// 全局样式</span>
<span class="token keyword">import</span> <span class="token string">&quot;dayjs/locale/zh-cn&quot;</span> <span class="token comment">// 日期组件的中文语言包</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> setupRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/router&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupGlobDirectives <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/directive&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> registerGlobComp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/registerGlobComp&#39;</span>

<span class="token keyword">import</span> <span class="token string">&#39;./permission&#39;</span> <span class="token comment">// 处理权限相关逻辑</span>
<span class="token keyword">import</span> <span class="token string">&#39;./title&#39;</span>

<span class="token keyword">function</span> <span class="token function">initApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    
    <span class="token comment">// 安装store</span>
    <span class="token function">setupStore</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
    
    <span class="token comment">// 注册全局组件</span>
    <span class="token function">registerGlobComp</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
    
    <span class="token comment">// 安装router</span>
    <span class="token function">setupRouter</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
    
    <span class="token comment">// 注册全局指令</span>
    <span class="token function">setupGlobDirectives</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
    
    app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">initApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义全局样式文件，应该放在vite.config.ts中</p><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token comment">// basic.less</span>
<span class="token variable">@title-color<span class="token punctuation">:</span></span> #fff<span class="token punctuation">;</span>
<span class="token variable">@primary-color<span class="token punctuation">:</span></span> #1890ff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// vite.config.ts</span>
<span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    css<span class="token operator">:</span> <span class="token punctuation">{</span>
        preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
            less<span class="token operator">:</span> <span class="token punctuation">{</span>
               	charset<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                additionalData<span class="token operator">:</span> <span class="token string">&#39;@import &quot;./src/style/basic.less&quot;&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="疑问" tabindex="-1"><a class="header-anchor" href="#疑问"><span>疑问</span></a></h2><h3 id="第一个" tabindex="-1"><a class="header-anchor" href="#第一个"><span>第一个</span></a></h3><p>模板中 和 <code>App.vue</code>中都有一个 <code>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code>当<code>main.vue</code>中挂在的时候，用的是那个<code>app</code>节点</p>`,11),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","2.rukouwenjian.html.vue"]]),k=JSON.parse('{"path":"/xiangmu/houtaiguanli/2.rukouwenjian.html","title":"入口文件做的事情","lang":"zh-CN","frontmatter":{"title":"入口文件做的事情","icon":"fab fa-markdown","order":2,"footer":false},"headers":[{"level":2,"title":"入口文件","slug":"入口文件","link":"#入口文件","children":[]},{"level":2,"title":"疑问","slug":"疑问","link":"#疑问","children":[{"level":3,"title":"第一个","slug":"第一个","link":"#第一个","children":[]}]}],"git":{"createdTime":1709263503000,"updatedTime":1709354699000,"contributors":[{"name":"zhuqi","email":"zhuqi","commits":4}]},"readingTime":{"minutes":0.83,"words":248},"filePathRelative":"xiangmu/houtaiguanli/2.rukouwenjian.md","localizedDate":"2024年3月1日"}');export{d as comp,k as data};
