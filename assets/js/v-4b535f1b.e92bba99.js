"use strict";(self.webpackChunkzh=self.webpackChunkzh||[]).push([[95],{39719:(n,s,a)=>{a.r(s),a.d(s,{default:()=>U});var t=a(27875);const o=(0,t.uE)('<h1 id="依赖刷新" tabindex="-1"><a class="header-anchor" href="#依赖刷新" aria-hidden="true">#</a> 依赖刷新</h1><p>假如你的接口需要动态监听某些值的变化而发出请求的，你可以这样处理</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> someRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> someReactive <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> refresh <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>someRef<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> someReactive<span class="token punctuation">.</span>count<span class="token punctuation">]</span><span class="token punctuation">,</span> refresh<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ...</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br></div></div>',3),p=(0,t.Uk)("但是我们也提供了 "),e=(0,t.Uk)("refreshDeps"),c=(0,t.Uk)(" 。事实上，使用 "),k=(0,t.Uk)("refreshDeps"),u=(0,t.Uk)(" 的效果和你直接写 watch 监听是没有任何区别的，因此可以理解为 "),l=(0,t.Uk)("refreshDeps"),_=(0,t.Uk)(" 是上面示例的一个语法糖"),i=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"提示"),(0,t._)("p",null,"切换下面的 radio，会触发请求")],-1),r=(0,t._)("div",{class:"language-vue ext-vue"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NRadioGroup")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},[(0,t._)("span",{class:"token namespace"},"v-model:"),(0,t.Uk)("value")]),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("type"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NSpace")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NRadio")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":key"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("0"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":value"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("0"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)(" Chinese Names "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NRadio")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NRadio")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":key"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("1"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":value"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("1"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)(" English Names "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NRadio")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NSpace")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NRadioGroup")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NSpin")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":show"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("loading"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("ul")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-if"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("data"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("li")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-for"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("item in data"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":key"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("item"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("{{ item }}"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("li")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("ul")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NSpin")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("ts"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" NRadio"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NRadioGroup"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NSpace"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NSpin "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'naive-ui'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" defineComponent"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" ref "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" useRequest "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue-request'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" cnameData "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'华强'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'大鹏'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'猹'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'张三'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'马冬梅'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" nameData "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'HuaQiang'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'Peng'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'Cha'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'ZhangSan'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'MaDongMei'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"testService"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t.Uk)("type"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" number")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" Promise"),(0,t._)("span",{class:"token operator"},"<"),(0,t.Uk)("string"),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token operator"},">"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"Promise"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},"resolve"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token function"},"setTimeout"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"resolve"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("type "),(0,t._)("span",{class:"token operator"},"?"),(0,t.Uk)(" nameData "),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" cnameData"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"1000"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"defineComponent"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  components"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    NRadioGroup"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NRadio"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NSpin"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NSpace"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"setup"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" type "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"ref"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" loading "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"useRequest"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"testService"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("type"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      refreshDeps"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("type"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      loading"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      type"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("style")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"scoped"),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("scss"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token style"}),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("style")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"highlight-lines"},[(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("div",{class:"highlight-line"}," "),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br")])],-1),U={render:function(n,s){const a=(0,t.up)("RouterLink"),U=(0,t.up)("Demo");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,(0,t._)("p",null,[p,(0,t.Wm)(a,{to:"/api/index.html#refreshdeps"},{default:(0,t.w5)((()=>[e])),_:1}),c,(0,t.Wm)(a,{to:"/api/index.html#refreshdeps"},{default:(0,t.w5)((()=>[k])),_:1}),u,(0,t.Wm)(a,{to:"/api/index.html#refreshdeps"},{default:(0,t.w5)((()=>[l])),_:1}),_]),i,(0,t.Wm)(U,{name:"RefreshDepsDemo",title:"依赖刷新示例"},{default:(0,t.w5)((()=>[r])),_:1})],64)}}},50272:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-4b535f1b",path:"/guide/documentation/refreshDeps.html",title:"依赖刷新",lang:"zh-CN",frontmatter:{head:[["meta",{name:"og:title",content:"依赖刷新 - VueRequest"}]]},excerpt:"",headers:[],filePathRelative:"guide/documentation/refreshDeps.md",git:{updatedTime:168602431e4,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);