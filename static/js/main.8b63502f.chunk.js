(this["webpackJsonpcmc-alert"]=this["webpackJsonpcmc-alert"]||[]).push([[0],{202:function(t,n,c){},205:function(t,n,c){},235:function(t,n){},237:function(t,n){},247:function(t,n){},249:function(t,n){},274:function(t,n){},276:function(t,n){},277:function(t,n){},282:function(t,n){},284:function(t,n){},303:function(t,n){},315:function(t,n){},318:function(t,n){},323:function(t,n){},325:function(t,n){},348:function(t,n){},443:function(t,n,c){"use strict";c.r(n);var e=c(29),a=c.n(e),o=c(195),i=c.n(o),r=(c(202),c(197)),m=c(104),u=c(196),l=c.n(u),s=(c(205),c(40));var d=function(){var t=Object(e.useState)([]),n=Object(m.a)(t,2),a=(n[0],n[1]),o=Object(e.useState)({id:9903}),i=Object(m.a)(o,2),u=i[0],d=i[1];Object(e.useEffect)((function(){var t=setInterval((function(){f(g).then((function(t){if(t.data[0].id!==u.id){var n=t.data.map((function(t){return t.id})).indexOf(u.id);d(t.data[0]),a(Object(r.a)(t.data));var c=t.data.slice(0,n).map((function(t){var n=t.platform&&t.platform.symbol,c=t.platform&&t.platform.token_address;return"Name : ".concat(t.name," || Network : ").concat(n," || Contract : ").concat(c)})).join(", "),e={coinList:c,emailList:"saidcryptog@gmail.com, cryptomood1@gmail.com",ccList:"internap627@gmail.com, Thebrightbrains1@gmail.com, Bob123bill1231@gmail.com, cryptoguru11@hotmail.com, Abdulhakeem15th@gmail.com, Ishy_ozzy307@hotmail.com, Moaweys1010@gmail.com, Abubakara1996@gmail.com, Jeilani90@gmail.com, zcrypto03@gmail.com, adamelhaddad3@gmail.com, Cheekymarketuk@gmail.com"};setTimeout((function(){l.a.send("service_pdhtum6","template_3xurina",e,"user_wDbnaIvWCLYgVPps0l1dl").then((function(t){console.log(t.text,c)}),(function(t){console.log(t.text)}))}),2e3)}})).catch((function(t){console.log("API call error:",t.message)}))}),7e4);return setTimeout((function(){console.log(u)}),5e3),function(){return clearInterval(t)}}),[u]);var f=c(207),g={method:"GET",uri:"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",qs:{start:"1",limit:"50",convert:"USD",sort:"date_added",sort_dir:"asc"},headers:{"X-CMC_PRO_API_KEY":"7a930438-3d27-4ad8-98b1-c66578fab4a7"},json:!0,gzip:!0};return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("header",{className:"App-header"})})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,444)).then((function(n){var c=n.getCLS,e=n.getFID,a=n.getFCP,o=n.getLCP,i=n.getTTFB;c(t),e(t),a(t),o(t),i(t)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),f()}},[[443,1,2]]]);
//# sourceMappingURL=main.8b63502f.chunk.js.map