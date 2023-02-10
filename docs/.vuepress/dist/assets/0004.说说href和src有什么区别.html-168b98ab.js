import{_ as s,p as r,q as c,R as e,t}from"./framework-34d4cddf.js";const _={},a=e("h2",{id:"说说href和src有什么区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#说说href和src有什么区别","aria-hidden":"true"},"#"),t(" 说说href和src有什么区别？")],-1),n=e("details",{class:"custom-container details"},[e("summary",null,"简答"),e("p",null,"href: 超文本引用，它指向一些网络资源，建立和当前元素或者说是本文档的链接关系。在加载它的时候，不会停止对当前文档的处理，浏览器会继续往下走。常用在a、link等标签。"),e("p",null,"src: 表示的是对资源的引用，它指向的内容会嵌入到当前标签所在的位置。由于src的内容是页面必不可少的一部分，因此浏览器在解析src时会停下来对后续文档的处理，直到src的内容加载完毕。常用在script、img、iframe标签中，我们建议js的文件放在HTML文档的最后面。"),e("p",null,"总结：href代表网站的附属资源，没有不会对网站的核心逻辑和结构造成影响。而src代表的是网站的一部分，没有会对网站的使用造成影响。所以前者不会阻塞页面的加载，而后者会加载并解析当前资源后再进行后续页面的加载。"),e("p",null,"为什么引入css使用href？正如href代表的含义一样，css属于网站的附属资源，不影响网站核心逻辑和结构。也可以简单归结为历史的遗留问题。")],-1),l=[a,n];function o(h,i){return r(),c("div",null,l)}const d=s(_,[["render",o],["__file","0004.说说href和src有什么区别.html.vue"]]);export{d as default};
