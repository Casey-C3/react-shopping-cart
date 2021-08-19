(this.webpackJsonpintro=this.webpackJsonpintro||[]).push([[0],{29:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(22),s=c.n(r),a=(c(29),c(20)),i=c(7),l=c(17),j=c.n(l),d=c(23),o=c(9),u=c(14),b=c(12),m=c(0),O=function(e){var t=e.cartNum,c=e.resetFilter;return Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsx)(b.b,{className:"navbar__brand-name",to:"/",children:"Super Real Store"}),Object(m.jsx)("div",{children:Object(m.jsx)("ul",{className:"nav-bar__list",children:Object(m.jsx)("li",{className:"nav-bar__list-item",children:Object(m.jsxs)(b.b,{to:"/cart",onClick:function(){return c("All")},children:[Object(m.jsx)(u.a,{className:"nav-bar__list-item-cart"}),Object(m.jsx)("span",{className:"nav-bar__list-cart-count",children:t.reduce((function(e,t){return e+t.quantity}),0)})]})})})})]})},h=function(e){e.products;var t=e.addProduct,c=e.filterProducts;return Object(m.jsx)("section",{className:"section-flex",children:Object(m.jsx)("div",{className:"section-flex__product",children:c.map((function(e){return Object(m.jsxs)("div",{className:"section-flex__product__items",children:[Object(m.jsx)("div",{className:"product__image",children:Object(m.jsx)("img",{src:e.image,alt:e.title})}),Object(m.jsx)("div",{className:"product__price",children:Object(m.jsxs)("h2",{children:["$",e.price]})}),Object(m.jsx)("div",{className:"product__name",children:Object(m.jsxs)("h2",{children:[e.title," "]})}),Object(m.jsx)("div",{className:"product__button",children:Object(m.jsx)("button",{onClick:function(c){return t(e)},children:"Add to Cart"})})]},e.id)}))})})},x=c(2),_=function(e){var t=e.cartItems,c=Math.round(100*t.reduce((function(e,t){return e+t.price*t.quantity}),0))/100,n=Math.round(.065*c*100)/100,r=Math.round(100*(c+n))/100;return Object(m.jsxs)("div",{className:"cart-flex__summary",children:[Object(m.jsx)("h1",{style:{marginBottom:5,textAlign:"center",fontSize:35},children:"Order Summary"}),Object(m.jsxs)("div",{className:"cart-flex__summary__details",children:[Object(m.jsxs)("div",{className:"summary__subtotal",children:[Object(m.jsx)("p",{children:"Order Subtotal"}),Object(m.jsxs)("p",{children:["$",c]})]}),Object(m.jsxs)("div",{className:"summary__tax",children:[Object(m.jsx)("p",{children:"Sales Tax"}),Object(m.jsxs)("p",{children:["$",n]})]}),Object(m.jsxs)("div",{className:"summary__grandtotal",children:[Object(m.jsx)("p",{children:"Grand Total"}),Object(m.jsxs)("p",{children:["$",r]})]}),Object(m.jsx)("div",{className:"summary_checkout",children:Object(m.jsx)("button",{children:"Checkout"})})]})]})},f=function(e){var t=e.cartItems,c=e.removeProduct,n=e.changeQuantity,r=e.saveItem;return Object(m.jsxs)("section",{className:"cart-flex",children:[Object(m.jsxs)("div",{className:"cart-flex__container",children:[Object(m.jsx)("h1",{style:{marginLeft:20,fontSize:35},children:"Cart"}),t.map((function(e){return Object(m.jsxs)("div",{className:"cart-flex__container__product",children:[Object(m.jsx)("div",{className:"products-summary-img",children:Object(m.jsx)("img",{src:e.image,alt:e.title})}),Object(m.jsxs)("div",{className:"cart-flex__container__product__details",children:[Object(m.jsx)("p",{className:"product__details__title ",children:e.title}),Object(m.jsx)("p",{className:"product__details__category",children:e.category}),Object(m.jsxs)("p",{className:"product__details__price",children:["$",e.price]})]}),Object(m.jsxs)("div",{className:"cart-flex__container__product__changes",children:[Object(m.jsxs)("div",{className:"product__changes__qty",children:[Object(m.jsxs)("label",{children:["Qty: ",e.quantity]}),Object(m.jsx)("button",{onClick:function(t){return n(t.currentTarget.textContent,e)},children:"-"}),Object(m.jsx)("button",{onClick:function(t){return n(t.currentTarget.textContent,e)},children:"+"})]}),Object(m.jsx)("a",{href:"# ",onClick:function(){return c(e)},children:"Remove"}),Object(m.jsx)("a",{href:"# ",onClick:function(){return r(e)},children:"Save"})]})]})}))]}),Object(m.jsx)(_,{cartItems:t})]})},v=function(e){var t=e.savedItems,c=e.addProduct,n=e.removeSavedItems;return Object(m.jsxs)("div",{className:"save-flex",children:[Object(m.jsx)("h1",{style:{marginLeft:40,fontSize:35},children:"Saved Items"}),Object(m.jsx)("div",{className:"save-flex__container",children:t.map((function(e){return Object(m.jsxs)("div",{className:"save-flex__container__product",children:[Object(m.jsx)("div",{className:"save__del-button",children:Object(m.jsx)(u.b,{className:"save__del-button-x",onClick:function(){return n(e)}})}),Object(m.jsx)("div",{className:"save__image",children:Object(m.jsx)("img",{src:e.image,alt:e.title})}),Object(m.jsx)("div",{className:"save__price",children:Object(m.jsxs)("h2",{children:["$",e.price]})}),Object(m.jsx)("div",{className:"save__name",children:Object(m.jsx)("h2",{children:e.title})}),Object(m.jsx)("div",{className:"save__add-button",children:Object(m.jsx)("button",{onClick:function(){return c(e)},children:"Move to Cart"})})]})}))})]})},p=function(e){var t=e.changeFilterState,c=e.filterItems;return Object(m.jsxs)("div",{className:"filter",children:[Object(m.jsxs)("h2",{children:[c," items"]}),Object(m.jsxs)("select",{onChange:function(e){return t(e.target.value)},children:[Object(m.jsx)("option",{value:"all",children:"All"}),Object(m.jsx)("option",{value:"men",children:"Men's Clothing"}),Object(m.jsx)("option",{value:"women",children:"Women's Clothing"}),Object(m.jsx)("option",{value:"electronics",children:"Electronics"}),Object(m.jsx)("option",{value:"jewelery",children:"Jewelery"})]})]})},N=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),r=c[0],s=c[1],l=Object(n.useState)([]),u=Object(o.a)(l,2),_=u[0],N=u[1],y=Object(n.useState)("All"),g=Object(o.a)(y,2),S=g[0],C=g[1],k=Object(n.useState)([]),I=Object(o.a)(k,2),q=I[0],w=I[1],P=Object(n.useState)([]),$=Object(o.a)(P,2),A=$[0],M=$[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){N("men"===S?r.filter((function(e){return"men's clothing"===e.category})):"women"===S?r.filter((function(e){return"women's clothing"===e.category})):"electronics"===S?r.filter((function(e){return"electronics"===e.category})):"jewelery"===S?r.filter((function(e){return"jewelery"===e.category})):r)}),[S,r]);var E=function(e){var t=q.find((function(t){return t.id===e.id}));w(t?q.map((function(c){return c.id===e.id?Object(i.a)(Object(i.a)({},t),{},{quantity:t.quantity+1}):c})):[].concat(Object(a.a)(q),[Object(i.a)(Object(i.a)({},e),{},{quantity:1})]))},F=function(e){w(q.filter((function(t){return t.id!==e.id})))},T=function(e){M(A.filter((function(t){return t.id!==e.id})))};return Object(m.jsx)(b.a,{basename:"/",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(O,{cartNum:q,resetFilter:C}),Object(m.jsxs)(x.c,{children:[Object(m.jsxs)(x.a,{exact:!0,path:"/",children:[_?Object(m.jsx)(p,{changeFilterState:function(e){C(e)},filterItems:_.length}):"",_?Object(m.jsx)(h,{products:r,addProduct:E,filterProducts:_}):"loading.."]}),Object(m.jsxs)(x.a,{exact:!0,path:"/cart",children:[Object(m.jsx)(f,{cartItems:q,removeProduct:F,changeQuantity:function(e,t){"-"===e?1===t.quantity?F(t):w(q.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},t),{},{quantity:t.quantity-1}):e}))):w(q.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},t),{},{quantity:t.quantity+1}):e})))},saveItem:function(e){F(e),A.find((function(t){return t.id===e.id}))||M([].concat(Object(a.a)(A),[Object(i.a)(Object(i.a)({},e),{},{quantity:1})]))}}),Object(m.jsx)(v,{savedItems:A,addProduct:function(e){E(e),T(e)},removeSavedItems:T})]})]})]})})};s.a.render(Object(m.jsx)(N,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.047af217.chunk.js.map