import{H as l}from"./Hero-ZsYcDuRv.js";import{L as _}from"./ListItem-mrMl3SbP.js";import{a as x}from"./index-sF7e0VL5.js";import{_ as f,u as g,h as k,i as h,r,o as c,c as L,g as n,j as a,d,a as B,w as D,e as I}from"./index-avGAcy_l.js";import"./Cart-vZ6otFLK.js";const T={components:{ListItem:_,Hero:l},setup(){const t=g().params.productId;return{product:x(k(h,"products",t)).data,id:t}},methods:{getText1(o){return o.split("(")[0].trim()},getText2(o){const t=o.split("(")[1];return t?t.slice(0,-1).trim():""}}},V={class:"container mt-5"},v={class:"text-center"};function H(o,t,u,e,N,s){const i=r("Hero"),m=r("ListItem"),p=r("RouterLink");return c(),L("div",null,[e.product?(c(),n(i,{key:0,text1:s.getText1(e.product.title),text2:s.getText2(e.product.title),img_url:e.product.img_url},null,8,["text1","text2","img_url"])):a("",!0),d("main",V,[e.product?(c(),n(m,{key:0,index:0,productData:e.product,detail:!0},null,8,["productData"])):a("",!0),d("div",v,[B(p,{to:"/",class:"btn btn-nav"},{default:D(()=>[I("Go Back")]),_:1})])])])}const P=f(T,[["render",H]]);export{P as default};
