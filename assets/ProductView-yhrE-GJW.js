import{H as l}from"./Hero-UH7kzZFx.js";import{L as _}from"./ListItem-uiN09mM1.js";import{a as x}from"./index-irSicow5.js";import{_ as f,u as k,k as g,g as h,r,o as c,c as L,j as n,l as a,d,a as B,w as D,e as I}from"./index-OxV4cc-l.js";import"./Cart-yMtcpycM.js";const T={components:{ListItem:_,Hero:l},setup(){const t=k().params.productId;return{product:x(g(h,"products",t)).data,id:t}},methods:{getText1(o){return o.split("(")[0].trim()},getText2(o){const t=o.split("(")[1];return t?t.slice(0,-1).trim():""}}},V={class:"container mt-5"},v={class:"text-center"};function H(o,t,u,e,N,s){const i=r("Hero"),m=r("ListItem"),p=r("RouterLink");return c(),L("div",null,[e.product?(c(),n(i,{key:0,text1:s.getText1(e.product.title),text2:s.getText2(e.product.title),img_url:e.product.img_url},null,8,["text1","text2","img_url"])):a("",!0),d("main",V,[e.product?(c(),n(m,{key:0,index:0,productData:e.product,detail:!0},null,8,["productData"])):a("",!0),d("div",v,[B(p,{to:"/",class:"btn btn-nav"},{default:D(()=>[I("Go Back")]),_:1})])])])}const P=f(T,[["render",H]]);export{P as default};
