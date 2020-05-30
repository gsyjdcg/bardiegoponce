function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,i){return n&&_defineProperties(e.prototype,n),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{WBfN:function(e,n,i){"use strict";i.r(n),i.d(n,"TapasPageModule",(function(){return j}));var o,s,t,c=i("TEn/"),a=i("ofXK"),r=i("3Pt+"),l=i("tyNb"),p=i("fXoL"),u=i("tk/3"),b=((t=function(){function e(n){_classCallCheck(this,e),this.http=n}return _createClass(e,[{key:"load",value:function(e){var n=this;this.http.get("assets/data/tapas.json").subscribe((function(i){(null==i?void 0:i.length)&&(n.tapas=i.filter((function(n){return n.tipo===e})))}),(function(e){console.log(e)}))}}]),e}()).\u0275fac=function(e){return new(e||t)(p.Qb(u.a))},t.\u0275prov=p.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t),f=((s=function(){function e(){_classCallCheck(this,e),this.tipos=[{id:"tapas",name:"Tapas"},{id:"bocatines",name:"Bocatines"},{id:"raciones",name:"Raciones"}]}return _createClass(e,[{key:"getNameById",value:function(e){var n=this.tipos.find((function(n){return n.id===e}));return n?n.name:""}}]),e}()).\u0275fac=function(e){return new(e||s)},s.\u0275prov=p.Gb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),d=((o=function(){function e(){_classCallCheck(this,e),this.allergens=[{id:"1",name:"Gluten",description:"Contiene Gluten",color:"gluten",icon:"assets/img/pescado.svg"},{id:"2",name:"Crust\xe1ceos",description:"Crust\xe1ceos, mariscos",color:"crustaceos",icon:"assets/img/pescado.svg"},{id:"3",name:"Huevos",description:"Huevos",color:"huevos",icon:"assets/img/pescado.svg"},{id:"4",name:"Pescado",description:"Pescado",color:"pescado",icon:"assets/img/pescado.svg"},{id:"5",name:"Cacahuetes",description:"Cacahuetes",color:"cacahuetes",icon:"assets/img/pescado.svg"},{id:"6",name:"Soja",description:"Soja",color:"soja",icon:"assets/img/pescado.svg"},{id:"7",name:"Lacteos",description:"Lacteos",color:"lacteos",icon:"assets/img/pescado.svg"},{id:"8",name:"Frutos de c\xe1scara",description:"Frutos de c\xe1scara",color:"frutos-secos",icon:"assets/img/pescado.svg"},{id:"9",name:"Apio",description:"Apio",color:"apio",icon:"assets/img/pescado.svg"},{id:"10",name:"Mostaza",description:"Mostaza",color:"mostaza",icon:"assets/img/pescado.svg"},{id:"11",name:"S\xe9samo",description:"Granos de s\xe9samo",color:"sesamo",icon:"assets/img/pescado.svg"},{id:"12",name:"Sulfitos",description:"Di\xf3xido de azufre y sulfitos",color:"sulfitos",icon:"assets/img/pescado.svg"},{id:"13",name:"Moluscos",description:"Moluscos",color:"moluscos",icon:"assets/img/pescado.svg"},{id:"14",name:"Altramuces",description:"Altramuces",color:"altramuces",icon:"assets/img/pescado.svg"}]}return _createClass(e,[{key:"getNameById",value:function(e){var n=this.allergens.find((function(n){return n.id===e}));return n?n.name:""}},{key:"getColorById",value:function(e){var n=this.allergens.find((function(n){return n.id===e}));return n?n.color:""}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275prov=p.Gb({token:o,factory:o.\u0275fac,providedIn:"root"}),o);function g(e,n){if(1&e&&(p.Nb(0,"span"),p.gc(1),p.Mb()),2&e){var i=p.Wb().$implicit;p.zb(1),p.ic("",i.numero,". ")}}function m(e,n){if(1&e&&(p.Nb(0,"ion-badge",9),p.gc(1),p.Mb()),2&e){var i=n.$implicit,o=p.Wb(4);p.Bb(o.allergensService.getColorById(i)),p.zb(1),p.ic(" ",o.allergensService.getNameById(i)," ")}}function v(e,n){if(1&e&&(p.Nb(0,"ion-row"),p.Nb(1,"ion-col",7),p.fc(2,m,2,3,"ion-badge",8),p.Mb(),p.Mb()),2&e){var i=p.Wb().$implicit;p.zb(2),p.bc("ngForOf",i.allergens)}}function h(e,n){if(1&e&&(p.Nb(0,"span"),p.gc(1),p.Xb(2,"currency"),p.Mb()),2&e){var i=p.Wb(2).$implicit;p.zb(1),p.ic(" / Media: ",p.Yb(2,1,i.price.half,"EUR","symbol"),"")}}function y(e,n){if(1&e&&(p.Nb(0,"span"),p.gc(1),p.Xb(2,"currency"),p.Mb()),2&e){var i=p.Wb(2).$implicit;p.zb(1),p.ic(" / Tapa: ",p.Yb(2,1,i.price.tapa,"EUR","symbol"),"")}}function C(e,n){if(1&e&&(p.Nb(0,"p"),p.gc(1),p.Xb(2,"currency"),p.fc(3,h,3,5,"span",5),p.fc(4,y,3,5,"span",5),p.Mb()),2&e){var i=p.Wb().$implicit;p.zb(1),p.ic("Raci\xf3n: ",p.Yb(2,3,i.price.one,"EUR","symbol")," "),p.zb(2),p.bc("ngIf",null==i||null==i.price?null:i.price.half),p.zb(1),p.bc("ngIf",null==i||null==i.price?null:i.price.tapa)}}function M(e,n){if(1&e&&(p.Nb(0,"p"),p.gc(1),p.Xb(2,"currency"),p.Mb()),2&e){var i=p.Wb().$implicit;p.zb(1),p.hc(p.Yb(2,1,i.price.precio,"EUR","symbol"))}}function N(e,n){if(1&e&&(p.Nb(0,"ion-item"),p.Nb(1,"ion-label"),p.Nb(2,"ion-text"),p.Nb(3,"h1",7),p.fc(4,g,2,1,"span",5),p.gc(5),p.Mb(),p.Mb(),p.fc(6,v,3,1,"ion-row",5),p.fc(7,C,5,7,"p",5),p.fc(8,M,3,5,"p",5),p.Mb(),p.Mb()),2&e){var i=n.$implicit;p.zb(4),p.bc("ngIf",null==i?null:i.numero),p.zb(1),p.hc(i.name),p.zb(1),p.bc("ngIf",null==i.allergens?null:i.allergens.length),p.zb(1),p.bc("ngIf",null==i||null==i.price?null:i.price.one),p.zb(1),p.bc("ngIf",null==i||null==i.price?null:i.price.precio)}}function z(e,n){if(1&e&&(p.Nb(0,"ion-list"),p.fc(1,N,9,5,"ion-item",6),p.Mb()),2&e){var i=p.Wb();p.zb(1),p.bc("ngForOf",null==i.tapasService?null:i.tapasService.tapas)}}var I,k,w,S=[{path:"",component:(I=function e(n,i,o,s){_classCallCheck(this,e),this.route=n,this.tapasService=i,this.tiposService=o,this.allergensService=s;var t=this.route.snapshot.paramMap.get("tipo");this.tapasService.load(t),this.title=this.tiposService.getNameById(t)},I.\u0275fac=function(e){return new(e||I)(p.Kb(l.a),p.Kb(b),p.Kb(f),p.Kb(d))},I.\u0275cmp=p.Eb({type:I,selectors:[["app-tapas"]],decls:8,vars:4,consts:[[3,"translucent"],["color","app"],["src","./assets/img/logo-header.svg","alt","","slot","start",1,"ion-margin-start"],[1,"ion-text-uppercase","title"],[3,"fullscreen"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"ion-text-wrap"],["class","ion-margin-end",3,"class",4,"ngFor","ngForOf"],[1,"ion-margin-end"]],template:function(e,n){1&e&&(p.Nb(0,"ion-header",0),p.Nb(1,"ion-toolbar",1),p.Lb(2,"ion-img",2),p.Nb(3,"ion-title"),p.Nb(4,"ion-label",3),p.gc(5),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(6,"ion-content",4),p.fc(7,z,2,1,"ion-list",5),p.Mb()),2&e&&(p.bc("translucent",!0),p.zb(5),p.hc(n.title),p.zb(1),p.bc("fullscreen",!0),p.zb(1),p.bc("ngIf",null==n.tapasService||null==n.tapasService.tapas?null:n.tapasService.tapas.length))},directives:[c.e,c.r,c.g,c.q,c.i,c.d,a.j,c.j,a.i,c.h,c.p,c.l,c.c,c.b],pipes:[a.c],styles:[".title[_ngcontent-%COMP%]{font-size:25px}"]}),I)}],_=((w=function e(){_classCallCheck(this,e)}).\u0275mod=p.Ib({type:w}),w.\u0275inj=p.Hb({factory:function(e){return new(e||w)},imports:[[l.i.forChild(S)],l.i]}),w),j=((k=function e(){_classCallCheck(this,e)}).\u0275mod=p.Ib({type:k}),k.\u0275inj=p.Hb({factory:function(e){return new(e||k)},imports:[[c.s,a.b,r.a,_]]}),k)}}]);