import{H as h}from"./Hero-M_fe0iRH.js";import{u as y}from"./index-4fKgeEMK.js";import{p as l,a as v,e as g}from"./firebase-wHCZZ1Qf.js";import{_ as x,R as b,r,o as a,c,a as s,b as t,w as i,F as k,f as w,e as A,t as u,p as N,j as P}from"./index-bAT3PysF.js";import{A as C}from"./AdminNav-wBbSZDFe.js";const I={components:{RouterLink:b,Hero:h,AdminNav:C},data(){return{products:y(l)}},methods:{async deleteProduct(e){if(confirm("Are you sure you want to delete this product?"))try{await g(v(l,e)),console.log("Product deleted successfully.")}catch(n){console.error("Error deleting product:",n)}}}},R=e=>(N("data-v-a1a3fa2e"),e=e(),P(),e),H={class:"container mt-5"},L={class:"mt-5 list-group rounded-5"},S=["src"],$={class:"h5 fw-bold col-4"},B={class:"h5 col-1"},D={class:"col-md-2 d-flex"},E=R(()=>t("button",{class:"btn btn-primary me-2"},"Edit",-1)),V=["onClick"];function j(e,n,F,T,m,p){const _=r("Hero"),f=r("AdminNav"),d=r("RouterLink");return a(),c("div",null,[s(_,{text1:"All Products"}),s(f),t("main",H,[s(d,{to:"addproduct",class:"h5 text-primary mb-5"},{default:i(()=>[A(" Add Product ")]),_:1}),t("ul",L,[(a(!0),c(k,null,w(m.products,o=>(a(),c("li",{key:o.id,class:"list-group-item justify-content-evenly py-0 d-flex flex-wrap align-items-center"},[t("img",{src:o.img_url,class:"my-2 rounded-5 col-2",alt:""},null,8,S),t("span",$,u(o.title),1),t("div",B,"$"+u(o.price),1),t("div",D,[s(d,{to:{name:"editproduct",params:{productId:o.id}}},{default:i(()=>[E]),_:2},1032,["to"]),t("button",{class:"btn btn-danger",onClick:q=>p.deleteProduct(o.id)},"Delete",8,V)])]))),128))])])])}const O=x(I,[["render",j],["__scopeId","data-v-a1a3fa2e"]]);export{O as default};