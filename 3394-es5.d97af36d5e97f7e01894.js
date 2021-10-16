!function(){"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function i(n,i,o){return i&&e(n.prototype,i),o&&e(n,o),n}(self.webpackChunkbardiegoponce=self.webpackChunkbardiegoponce||[]).push([[3394],{3394:function(e,o,t){t.r(o),t.d(o,{TapasPageModule:function(){return j}});var s,c=t(6515),a=t(8583),r=t(665),l=t(1348),u=t(8720),p=t(1841),f=((s=function(){function e(i){n(this,e),this.http=i}return i(e,[{key:"load",value:function(n){var e=this;this.http.get("assets/data/tapas.json").subscribe(function(i){(null==i?void 0:i.length)&&(e.tapas="bocatines"===n?i.filter(function(e){return e.tipo===n}):i.filter(function(e){return e.tipo===n}).sort(function(n,e){return n.name.localeCompare(e.name)}))},function(n){console.log(n)})}}]),e}()).\u0275fac=function(n){return new(n||s)(u.LFG(p.eN))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s),g=function(){var e=function(){function e(){n(this,e),this.tipos=[{id:"tapas",name:"Tapas"},{id:"bocatines",name:"Bocatines"},{id:"raciones",name:"Raciones"},{id:"desayunos",name:"Desayunos"}]}return i(e,[{key:"getNameById",value:function(n){var e=this.tipos.find(function(e){return e.id===n});return e?e.name:""}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),d=function(){var e=function(){function e(){n(this,e),this.allergens=[{id:"1",name:"Cereales con gluten",description:"Cereales con gluten",color:"gluten",icon:"assets/img/pescado.svg"},{id:"2",name:"Crust\xe1ceos",description:"Crust\xe1ceos, mariscos",color:"crustaceos",icon:"assets/img/pescado.svg"},{id:"3",name:"Huevos",description:"Huevos",color:"huevos",icon:"assets/img/pescado.svg"},{id:"4",name:"Pescado",description:"Pescado",color:"pescado",icon:"assets/img/pescado.svg"},{id:"5",name:"Cacahuetes",description:"Cacahuetes",color:"cacahuetes",icon:"assets/img/pescado.svg"},{id:"6",name:"Soja",description:"Soja",color:"soja",icon:"assets/img/pescado.svg"},{id:"7",name:"Lacteos",description:"Lacteos",color:"lacteos",icon:"assets/img/pescado.svg"},{id:"8",name:"Frutos secos",description:"Frutos secos",color:"frutos-secos",icon:"assets/img/pescado.svg"},{id:"9",name:"Apio",description:"Apio",color:"apio",icon:"assets/img/pescado.svg"},{id:"10",name:"Mostaza",description:"Mostaza",color:"mostaza",icon:"assets/img/pescado.svg"},{id:"11",name:"S\xe9samo",description:"Granos de s\xe9samo",color:"sesamo",icon:"assets/img/pescado.svg"},{id:"12",name:"Sulfitos",description:"Di\xf3xido de azufre y sulfitos",color:"sulfitos",icon:"assets/img/pescado.svg"},{id:"13",name:"Moluscos",description:"Moluscos",color:"moluscos",icon:"assets/img/pescado.svg"},{id:"14",name:"Altramuces",description:"Altramuces",color:"altramuces",icon:"assets/img/pescado.svg"},{id:"15",name:"Ajo",description:"Ajo",color:"ajo",icon:"assets/img/pescado.svg"},{id:"16",name:"Puerro",description:"Puerro",color:"puerro",icon:"assets/img/pescado.svg"}]}return i(e,[{key:"getNameById",value:function(n){var e=this.allergens.find(function(e){return e.id===n});return e?e.name:""}},{key:"getColorById",value:function(n){var e=this.allergens.find(function(e){return e.id===n});return e?e.color:""}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}();function m(n,e){if(1&n&&(u.TgZ(0,"span"),u._uU(1),u.qZA()),2&n){var i=u.oxw().$implicit;u.xp6(1),u.hij("",i.numero,". ")}}function v(n,e){if(1&n&&(u.TgZ(0,"ion-badge",9),u._uU(1),u.qZA()),2&n){var i=e.$implicit,o=u.oxw(4);u.Tol(o.allergensService.getColorById(i)),u.xp6(1),u.hij(" ",o.allergensService.getNameById(i)," ")}}function h(n,e){if(1&n&&(u.TgZ(0,"ion-row"),u.TgZ(1,"ion-col",7),u.YNc(2,v,2,3,"ion-badge",8),u.qZA(),u.qZA()),2&n){var i=u.oxw().$implicit;u.xp6(2),u.Q6J("ngForOf",i.allergens)}}function Z(n,e){if(1&n&&(u.TgZ(0,"span"),u._uU(1),u.ALo(2,"currency"),u.qZA()),2&n){var i=u.oxw(2).$implicit;u.xp6(1),u.hij(" / Media: ",u.Dn7(2,1,i.price.half,"EUR","symbol"),"")}}function x(n,e){if(1&n&&(u.TgZ(0,"span"),u._uU(1),u.ALo(2,"currency"),u.qZA()),2&n){var i=u.oxw(2).$implicit;u.xp6(1),u.hij(" / Tapa: ",u.Dn7(2,1,i.price.tapa,"EUR","symbol"),"")}}function y(n,e){if(1&n&&(u.TgZ(0,"p"),u._uU(1),u.ALo(2,"currency"),u.YNc(3,Z,3,5,"span",5),u.YNc(4,x,3,5,"span",5),u.qZA()),2&n){var i=u.oxw().$implicit;u.xp6(1),u.hij("Raci\xf3n: ",u.Dn7(2,3,i.price.one,"EUR","symbol")," "),u.xp6(2),u.Q6J("ngIf",null==i||null==i.price?null:i.price.half),u.xp6(1),u.Q6J("ngIf",null==i||null==i.price?null:i.price.tapa)}}function A(n,e){if(1&n&&(u.TgZ(0,"span"),u._uU(1),u.ALo(2,"currency"),u.qZA()),2&n){var i=u.oxw(2).$implicit;u.xp6(1),u.hij(" / Medio: ",u.Dn7(2,1,i.price.medio,"EUR","symbol"),"")}}function w(n,e){if(1&n&&(u.TgZ(0,"span"),u._uU(1),u.ALo(2,"currency"),u.qZA()),2&n){var i=u.oxw(2).$implicit;u.xp6(1),u.hij(" / Tapa: ",u.Dn7(2,1,i.price.tapa,"EUR","symbol"),"")}}function T(n,e){if(1&n&&(u.TgZ(0,"p"),u._uU(1),u.ALo(2,"currency"),u.YNc(3,A,3,5,"span",5),u.YNc(4,w,3,5,"span",5),u.qZA()),2&n){var i=u.oxw().$implicit;u.xp6(1),u.hij("Entero: ",u.Dn7(2,3,i.price.entero,"EUR","symbol")," "),u.xp6(2),u.Q6J("ngIf",null==i||null==i.price?null:i.price.medio),u.xp6(1),u.Q6J("ngIf",null==i||null==i.price?null:i.price.tapa)}}function b(n,e){if(1&n&&(u.TgZ(0,"p"),u._uU(1),u.ALo(2,"currency"),u.qZA()),2&n){var i=u.oxw().$implicit;u.xp6(1),u.Oqu(u.Dn7(2,1,i.price.precio,"EUR","symbol"))}}function q(n,e){if(1&n&&(u.TgZ(0,"ion-item"),u.TgZ(1,"ion-label"),u.TgZ(2,"ion-text"),u.TgZ(3,"h1",7),u.YNc(4,m,2,1,"span",5),u._uU(5),u.qZA(),u.qZA(),u.YNc(6,h,3,1,"ion-row",5),u.YNc(7,y,5,7,"p",5),u.YNc(8,T,5,7,"p",5),u.YNc(9,b,3,5,"p",5),u.qZA(),u.qZA()),2&n){var i=e.$implicit;u.xp6(4),u.Q6J("ngIf",null==i?null:i.numero),u.xp6(1),u.Oqu(i.name),u.xp6(1),u.Q6J("ngIf",null==i.allergens?null:i.allergens.length),u.xp6(1),u.Q6J("ngIf",null==i||null==i.price?null:i.price.one),u.xp6(1),u.Q6J("ngIf",null==i||null==i.price?null:i.price.entero),u.xp6(1),u.Q6J("ngIf",null==i||null==i.price?null:i.price.precio)}}function I(n,e){if(1&n&&(u.TgZ(0,"ion-list"),u.YNc(1,q,10,6,"ion-item",6),u.qZA()),2&n){var i=u.oxw();u.xp6(1),u.Q6J("ngForOf",null==i.tapasService?null:i.tapasService.tapas)}}var U=[{path:"",component:function(){var e=function e(i,o,t,s){n(this,e),this.route=i,this.tapasService=o,this.tiposService=t,this.allergensService=s;var c=this.route.snapshot.paramMap.get("tipo");this.tapasService.load(c),this.title=this.tiposService.getNameById(c)};return e.\u0275fac=function(n){return new(n||e)(u.Y36(l.gz),u.Y36(f),u.Y36(g),u.Y36(d))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-tapas"]],decls:8,vars:4,consts:[[3,"translucent"],["color","app"],["src","./assets/img/logo-header.svg","alt","","slot","start",1,"ion-margin-start"],[1,"ion-text-uppercase","title"],[3,"fullscreen"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"ion-text-wrap"],["class","ion-margin-end",3,"class",4,"ngFor","ngForOf"],[1,"ion-margin-end"]],template:function(n,e){1&n&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar",1),u._UZ(2,"ion-img",2),u.TgZ(3,"ion-title"),u.TgZ(4,"ion-label",3),u._uU(5),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"ion-content",4),u.YNc(7,I,2,1,"ion-list",5),u.qZA()),2&n&&(u.Q6J("translucent",!0),u.xp6(5),u.Oqu(e.title),u.xp6(1),u.Q6J("fullscreen",!0),u.xp6(1),u.Q6J("ngIf",null==e.tapasService||null==e.tapasService.tapas?null:e.tapasService.tapas.length))},directives:[c.Gu,c.sr,c.Xz,c.wd,c.Q$,c.W2,a.O5,c.q_,a.sg,c.Ie,c.yW,c.Nd,c.wI,c.yp],pipes:[a.H9],styles:[".title[_ngcontent-%COMP%]{font-size:25px}"]}),e}()}],Y=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[l.Bz.forChild(U)],l.Bz]}),e}(),j=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[c.Pc,a.ez,r.u5,Y]]}),e}()}}])}();