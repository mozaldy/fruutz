import{H as x}from"./Hero-UH7kzZFx.js";import{L as h}from"./ListItem-uiN09mM1.js";import{u as b}from"./index-irSicow5.js";import{_ as g,p as L,r as s,o as t,c as r,a as i,d as n,F as d,i as u,j as p,w as k,e as w}from"./index-OxV4cc-l.js";import"./Cart-yMtcpycM.js";const H={components:{ListItem:h,Hero:x},data(){return{products:b(L)}},computed:{discountedProducts(){return this.products.filter(c=>c.discount!==0)}}},I={class:"container mt-5"},D=n("h1",{class:"display-5 pt-5 m-5 fw-bold fst-italic"},"Today's pick",-1),V={class:"w-100 text-center"};function v(c,B,C,N,l,m){const _=s("Hero"),a=s("ListItem"),f=s("RouterLink");return t(),r("div",null,[i(_,{text1:"get your own",text2:"fruits more easier!",img_url:"https://th.bing.com/th/id/OIP.c6Tbz7IbCn9bVXzXQSOqhgHaFN?rs=1&pid=ImgDetMain"}),n("main",I,[(t(!0),r(d,null,u(m.discountedProducts,(e,o)=>(t(),p(a,{index:o,productData:e},null,8,["index","productData"]))),256)),D,(t(!0),r(d,null,u(l.products,(e,o)=>(t(),p(a,{index:o,productData:e},null,8,["index","productData"]))),256)),n("div",V,[i(f,{to:"/products",class:"btn btn-nav btn-lg"},{default:k(()=>[w(" See More ")]),_:1})])])])}const z=g(H,[["render",v]]);export{z as default};
