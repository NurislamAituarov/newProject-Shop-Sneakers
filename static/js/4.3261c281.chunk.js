(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{39:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){},50:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var s=c(5),r=(c(39),c(6)),i=c(42),n=(c(43),c(0)),a=c(12),j=c(16),d=c(1),l=Object(n.memo)((function(e){var t=e.item,c=Object(r.c)((function(e){return e.basketReducer})).addedBasketArr,l=Object(r.c)((function(e){return e.reducer})).likedArr,h=Object(r.b)(),o=Object(n.useState)(!1),b=Object(s.a)(o,2),u=b[0],x=b[1];return Object(d.jsxs)("div",{onClick:function(){return e=t.id,h(u?Object(a.g)(e):Object(a.d)(t)),void x(!u);var e},className:"sneakers_card",children:[Object(d.jsx)("div",{className:"heart",children:0!==l.filter((function(e){return e.id===t.id})).length?Object(d.jsx)("img",{width:"50",className:"like",src:j.a,alt:"like"}):Object(d.jsx)("img",{style:{opacity:.3},width:"35",src:"https://cdn-icons-png.flaticon.com/512/14/14815.png",alt:"like"})}),Object(d.jsx)("div",{className:"sneakers_img",children:Object(d.jsx)(i.LazyLoadImage,{effect:"blur",src:t.url,alt:"card",width:"180"})}),Object(d.jsx)("h4",{children:t.name}),Object(d.jsxs)("div",{className:"sneakers_card_price",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"\u0426\u0415\u041d\u0410:"}),Object(d.jsxs)("p",{children:[t.price,"\u0440\u0443\u0431."]})]}),0===c.filter((function(e){return e.id===t.id})).length?Object(d.jsx)("button",{onClick:function(e){e.stopPropagation(),function(e){h(Object(a.a)(e))}(t)},children:"+"}):Object(d.jsx)("img",{onClick:function(e){e.stopPropagation(),h(Object(a.e)(t.id))},src:"https://as2.ftcdn.net/v2/jpg/03/03/72/13/500_F_303721320_IE2JJEW9JLhuIzzoIsBDLuZ3silkP3zX.jpg",alt:"selected",width:"35"})]})]},t.id)})),h=(c(44),c(45)),o=function(){var e=Object(r.c)((function(e){return e.reducer})).arr,t=Object(n.useState)(""),c=Object(s.a)(t,2),i=c[0],a=c[1],j=Object(n.useState)(!1),o=Object(s.a)(j,2),b=o[0],u=o[1],x=e.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(n.useEffect)((function(){setTimeout((function(){u(!0)}),500)}),[]),Object(d.jsxs)("div",{className:"section",children:[Object(d.jsxs)("div",{className:"header_section",children:[i?Object(d.jsxs)("h2",{children:["\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e : ",i]}):Object(d.jsx)("h2",{children:"\u0412\u0441\u0435 \u043a\u0440\u043ec\u0441\u043e\u0432\u043a\u0438"}),Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/149/149309.png",width:"20",alt:"search"}),Object(d.jsx)("input",{onChange:function(e){a(e.target.value)},value:i,type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a"}),i&&Object(d.jsx)("button",{onClick:function(){return a("")},className:"btn_search_close",children:"X"})]})]}),Object(d.jsx)("div",{className:"sneakers_wrapper",children:b?x.map((function(e){return Object(d.jsx)(l,{item:e},e.id)})):[1,2,3,4,5,6,7,8].map((function(e){return Object(d.jsxs)(h.a,{className:"skeleton",speed:1,width:282,height:346,viewBox:"0 0 282 346",backgroundColor:"#f3f3f3",foregroundColor:"#ebebeb",children:[Object(d.jsx)("rect",{x:"11",y:"346",rx:"5",ry:"5",width:"88",height:"35"}),Object(d.jsx)("rect",{x:"34",y:"204",rx:"5",ry:"5",width:"180",height:"30"}),Object(d.jsx)("rect",{x:"183",y:"261",rx:"5",ry:"5",width:"27",height:"35"}),Object(d.jsx)("rect",{x:"33",y:"34",rx:"16",ry:"16",width:"180",height:"150"}),Object(d.jsx)("rect",{x:"97",y:"95",rx:"0",ry:"0",width:"0",height:"1"}),Object(d.jsx)("rect",{x:"96",y:"96",rx:"0",ry:"0",width:"1",height:"0"}),Object(d.jsx)("rect",{x:"35",y:"261",rx:"5",ry:"5",width:"94",height:"37"}),Object(d.jsx)("rect",{x:"100",y:"283",rx:"0",ry:"0",width:"10",height:"2"}),Object(d.jsx)("rect",{x:"89",y:"281",rx:"0",ry:"0",width:"21",height:"1"})]},e)}))})]})},b=(c(46),function(){var e=Object(r.c)((function(e){return e.reducer.sliderCard})),t=Object(n.useRef)(),c=0;return Object(d.jsxs)("div",{className:"slider_wrapper",children:[Object(d.jsxs)("div",{className:"slider_left",children:[Object(d.jsxs)("div",{className:"brend",children:[Object(d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png",width:"50",alt:"rave"}),Object(d.jsx)("div",{className:"hr"}),Object(d.jsx)("img",{src:"https://avatanplus.com/files/resources/original/575eb8b4d0c461554a018277.png",width:"50",alt:"disney"})]}),Object(d.jsxs)("h1",{children:[Object(d.jsx)("p",{children:"Stan Smith"}),", Forever!"]}),Object(d.jsx)("button",{children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]}),Object(d.jsxs)("div",{className:"slider_right",children:[Object(d.jsx)("div",{ref:t,className:"block_wrapper",children:e.map((function(e){return Object(d.jsx)("div",{className:"block_item",children:Object(d.jsx)("img",{src:e.url,alt:"slide"})},e.id)}))}),Object(d.jsxs)("div",{onClick:function(){c>=66?(c=0,t.current.style.transform="translateX(-".concat(c,"%)")):(c+=33.3,t.current.style.transform="translateX(-".concat(c,"%)"))},className:"block_right",children:[" ",Object(d.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/709/709586.png",alt:"right",width:"20"})]})]})]})}),u=c(40);c(50),t.default=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(u.a,{children:[Object(d.jsx)("meta",{name:"description",content:"Web site created using create-react-app"}),Object(d.jsx)("title",{children:"React Sneakers"})]}),Object(d.jsxs)("main",{children:[Object(d.jsx)(b,{}),Object(d.jsx)(o,{})]})]})}}}]);
//# sourceMappingURL=4.3261c281.chunk.js.map