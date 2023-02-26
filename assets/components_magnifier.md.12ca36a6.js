import{V as n,_ as m,c as A,a as u,w as C,b as s,d as t,e as g,r as h,o as E}from"./app.0eeff758.js";const{defineComponent:_}=n,f=_({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,createVNode:r,openBlock:c,createElementBlock:p}=n,D={class:"wrapper"};function i(l,F){const y=a("tea-magnifier");return c(),p("div",D,[r(y,{link:l.state.link,blank:l.state.blank,src:l.state.imgUrl,alt:l.state.alt,width:l.state.width,height:l.state.height,"mag-width":l.state.magWidth,"mag-height":l.state.magHeight},null,8,["link","blank","src","alt","width","height","mag-width","mag-height"])])}const{reactive:e,toRefs:o}=n;return{render:i,...{setup(l,{expose:F}){F();const d={state:e({imgUrl:"https://www.mingtuiw.com/wp-content/uploads/2022/05/liuyifei_jinshenniuzaikudatui-2-541x900.jpg",link:"https://imondo.cn",blank:!0,width:180,height:300,magWidth:110,magHeight:110,alt:"神仙姐姐"}),reactive:e,toRefs:o};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}}}()}}),N=JSON.parse('{"title":"Magnifier 放大镜","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]}],"relativePath":"components/magnifier.md"}');const w=s("h1",{id:"magnifier-放大镜",tabindex:"-1"},[t("Magnifier 放大镜 "),s("a",{class:"header-anchor",href:"#magnifier-放大镜","aria-hidden":"true"},"#")],-1),k=s("p",null,"对图片部分放大查看。",-1),b=s("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),v=s("p",null,"传入图片地址即可。",-1),B=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"wrapper"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"tea-magnifier")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},":link"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"state.link"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},":blank"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"state.blank"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},":src"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"state.imgUrl"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},":alt"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"state.alt"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},":width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"state.width"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},":height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"state.height"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},":mag-width"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"state.magWidth"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"      "),s("span",{style:{color:"#C792EA"}},":mag-height"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"state.magHeight"),s("span",{style:{color:"#89DDFF"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"    ></"),s("span",{style:{color:"#F07178"}},"tea-magnifier"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"reactive"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"toRefs"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," state "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"reactive"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"imgUrl"),s("span",{style:{color:"#89DDFF"}},":")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://www.mingtuiw.com/wp-content/uploads/2022/05/liuyifei_jinshenniuzaikudatui-2-541x900.jpg"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"link"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"https://imondo.cn"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"blank"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#89DDFF"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"width"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"180"),s("span",{style:{color:"#89DDFF"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"300"),s("span",{style:{color:"#89DDFF"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"magWidth"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"110"),s("span",{style:{color:"#89DDFF"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"magHeight"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"110"),s("span",{style:{color:"#89DDFF"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"alt"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"神仙姐姐"),s("span",{style:{color:"#89DDFF"}},"'")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"wrapper"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#B2CCD6"}},"position"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," relative"),s("span",{style:{color:"#89DDFF"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),t(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"})])])],-1),x=g('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>src</td><td>图片源，同原生</td><td>string</td><td>-</td><td>-</td></tr><tr><td>alt</td><td>原生 alt</td><td>string</td><td>-</td><td>-</td></tr><tr><td>width</td><td>图片宽度</td><td>number</td><td>-</td><td>375</td></tr><tr><td>height</td><td>图片高度</td><td>number</td><td>-</td><td>375</td></tr><tr><td>magWidth</td><td>放大镜宽度</td><td>number</td><td>-</td><td>150</td></tr><tr><td>magHeight</td><td>放大镜高度</td><td>number</td><td>-</td><td>150</td></tr><tr><td>link</td><td>链接</td><td>string</td><td>-</td><td>-</td></tr><tr><td>blank</td><td>跳转</td><td>boolean</td><td>true / false</td><td>false</td></tr></tbody></table>',2);function V(a,r,c,p,D,i){const e=h("render-demo-0"),o=h("demo");return E(),A("div",null,[w,k,b,v,u(o,{customClass:"undefined",sourceCode:`<template>
  <div class="wrapper">
    <tea-magnifier
      :link="state.link"
      :blank="state.blank"
      :src="state.imgUrl"
      :alt="state.alt"
      :width="state.width"
      :height="state.height"
      :mag-width="state.magWidth"
      :mag-height="state.magHeight"
    ></tea-magnifier>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
const state = reactive({
  imgUrl:
    'https://www.mingtuiw.com/wp-content/uploads/2022/05/liuyifei_jinshenniuzaikudatui-2-541x900.jpg',
  link: 'https://imondo.cn',
  blank: true,
  width: 180,
  height: 300,
  magWidth: 110,
  magHeight: 110,
  alt: '神仙姐姐'
});
<\/script>
<style>
.wrapper {
  position: relative;
}
</style>

`},{highlight:C(()=>[B]),default:C(()=>[u(e)]),_:1}),x])}const W=m(f,[["render",V]]);export{N as __pageData,W as default};
