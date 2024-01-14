import{_ as p,r as _,o as a,c as l,b as t,k as D,v as C,F as v,f as x,t as s,g as y,w as h,e as n,j as i,a as M,l as g,m as N,R as q,n as B}from"./index-iC4TQff3.js";import{a as b}from"./Cart-tydh1a3l.js";const F={props:{productData:{type:Object,required:!0},buyNow:Boolean},data(){return{quantity:1,success:!1}},methods:{closeModal(){this.$emit("close")},addToCart(){b(this.productData,this.quantity),this.success=!0},toCheckout(){b(this.productData,this.quantity),this.$router.push("/checkout"),this.success=!0}}},f=r=>(g("data-v-11660d94"),r=r(),N(),r),L={class:"modal"},S={class:"modal-content"},I={class:"form-group"},T=f(()=>t("label",{for:"quantity",class:"mb-2"},"Quantity:",-1)),R={class:"form-group"},j=f(()=>t("label",{for:"exampleFormControlSelect1",class:"mb-2"},"Select Producer and Price:",-1)),A={class:"form-control mb-2",id:"producer"},V={class:"h5 mt-1"},P={key:3,class:"alert alert-success mt-2",role:"alert"};function G(r,e,o,k,u,d){const m=_("RouterLink");return a(),l("div",L,[t("div",S,[t("span",{class:"close",onClick:e[0]||(e[0]=(...c)=>d.closeModal&&d.closeModal(...c))},"×"),t("div",I,[T,D(t("input",{"onUpdate:modelValue":e[1]||(e[1]=c=>u.quantity=c),class:"form-control mb-2",type:"number",id:"quantity"},null,512),[[C,u.quantity]])]),t("div",R,[j,t("select",A,[(a(!0),l(v,null,x(o.productData.producers,c=>(a(),l("option",null,s(c.id)+" - $"+s(o.productData.price)+"/kg ",1))),256))])]),t("p",V,"Total: $"+s(o.productData.price*u.quantity),1),o.buyNow?(a(),l("button",{key:0,onClick:e[2]||(e[2]=(...c)=>d.toCheckout&&d.toCheckout(...c)),type:"submit",class:"btn mt-2 btn-secondary"}," Buy Now ")):(a(),l("button",{key:1,onClick:e[3]||(e[3]=(...c)=>d.addToCart&&d.addToCart(...c)),type:"submit",class:"btn mt-2 btn-primary"}," Add to Cart ")),o.buyNow?i("",!0):(a(),y(m,{key:2,to:"/checkout",class:"btn mt-2 btn-secondary"},{default:h(()=>[n(" Go to Checkout ")]),_:1})),u.success?(a(),l("p",P,s(u.quantity)+" "+s(o.productData.title)+" added to cart! ",1)):i("",!0),M(m,{to:"/",class:"mt-5 text-center"},{default:h(()=>[n("Go back to Home")]),_:1})])])}const O=p(F,[["render",G],["__scopeId","data-v-11660d94"]]),z={components:{RouterLink:q,AddCartModal:O},props:{productData:{type:Object,required:!0},index:Number,detail:Boolean},data(){return{showModalFlag:!1}},methods:{showModal(r){this.showModalFlag=!0,this.isBuyNow=r},hideModal(){this.showModalFlag=!1}}},E={class:"left col-sm-4"},H=["src"],Q={class:"right col-sm-6 d-flex flex-column justify-content-evenly"},U={key:0,class:"text-uppercase display-5 fw-bold fst-italic"},J={class:"fw-bold"},K={class:"fw-bold"},W={class:"fw-bold"},X={key:0},Y={class:"d-flex btn-container"};function Z(r,e,o,k,u,d){const m=_("AddCartModal"),c=_("RouterLink");return a(),l("div",{class:B({"d-flex":!0,"flex-wrap":!0,"mb-5":!0,"justify-content-evenly":!0,"flex-row-reverse":o.index%2!==0})},[t("div",E,[t("img",{src:o.productData.img_url,alt:"",class:"w-100 rounded rounded-5"},null,8,H)]),t("div",Q,[o.productData.discount?(a(),l("h1",U," today's limited offer ")):i("",!0),t("h3",null,s(o.productData.title),1),t("p",null,s(o.productData.description),1),t("ul",null,[t("li",null,[n(" Produced in: "),t("span",J,s(o.productData.produced_in),1)]),t("li",null,[n(" Production capacity: "),t("span",K,s(o.productData.production_capacity),1),n(" tons/month ")]),t("li",null,[n(" Stock: "),t("span",W,s(o.productData.product_stock),1),n(" tons ")])]),t("h1",null,[o.productData.discount>0?(a(),l("del",X,"$ "+s(o.productData.price.toFixed(2))+"/kg",1)):i("",!0),n(" $ "+s((o.productData.price-o.productData.price*(o.productData.discount/100)).toFixed(2))+"/kg ",1)]),t("div",Y,[t("button",{onClick:e[0]||(e[0]=w=>d.showModal(!1)),class:"btn btn-primary me-3"},"Add to Cart"),u.showModalFlag?(a(),y(m,{key:0,buyNow:r.isBuyNow,onClose:d.hideModal,productData:o.productData},null,8,["buyNow","onClose","productData"])):i("",!0),o.detail?(a(),l("button",{key:1,onClick:e[1]||(e[1]=w=>d.showModal(!0)),class:"btn btn-secondary"},"Buy Now")):(a(),y(c,{key:2,to:{name:"product",params:{productId:o.productData.id}},class:"btn btn-primary"},{default:h(()=>[n(" Learn more ")]),_:1},8,["to"]))])])],2)}const ot=p(z,[["render",Z],["__scopeId","data-v-634b4bb6"]]);export{ot as L};
