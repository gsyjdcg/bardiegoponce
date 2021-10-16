"use strict";(self.webpackChunkbardiegoponce=self.webpackChunkbardiegoponce||[]).push([[3394],{3394:function(o,e,n){n.r(e),n.d(e,{TapasPageModule:function(){return b}});var s=n(6515),i=n(8583),c=n(665),t=n(1348),a=n(8720),r=n(1841);let l=(()=>{class o{constructor(o){this.http=o}load(o){this.http.get("assets/data/tapas.json").subscribe(e=>{(null==e?void 0:e.length)&&(this.tapas="bocatines"===o?e.filter(e=>e.tipo===o):e.filter(e=>e.tipo===o).sort((o,e)=>o.name.localeCompare(e.name)))},o=>{console.log(o)})}}return o.\u0275fac=function(e){return new(e||o)(a.LFG(r.eN))},o.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),p=(()=>{class o{constructor(){this.tipos=[{id:"tapas",name:"Tapas"},{id:"bocatines",name:"Bocatines"},{id:"raciones",name:"Raciones"},{id:"desayunos",name:"Desayunos"}]}getNameById(o){const e=this.tipos.find(e=>e.id===o);return e?e.name:""}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),u=(()=>{class o{constructor(){this.allergens=[{id:"1",name:"Cereales con gluten",description:"Cereales con gluten",color:"gluten",icon:"assets/img/pescado.svg"},{id:"2",name:"Crust\xe1ceos",description:"Crust\xe1ceos, mariscos",color:"crustaceos",icon:"assets/img/pescado.svg"},{id:"3",name:"Huevos",description:"Huevos",color:"huevos",icon:"assets/img/pescado.svg"},{id:"4",name:"Pescado",description:"Pescado",color:"pescado",icon:"assets/img/pescado.svg"},{id:"5",name:"Cacahuetes",description:"Cacahuetes",color:"cacahuetes",icon:"assets/img/pescado.svg"},{id:"6",name:"Soja",description:"Soja",color:"soja",icon:"assets/img/pescado.svg"},{id:"7",name:"Lacteos",description:"Lacteos",color:"lacteos",icon:"assets/img/pescado.svg"},{id:"8",name:"Frutos secos",description:"Frutos secos",color:"frutos-secos",icon:"assets/img/pescado.svg"},{id:"9",name:"Apio",description:"Apio",color:"apio",icon:"assets/img/pescado.svg"},{id:"10",name:"Mostaza",description:"Mostaza",color:"mostaza",icon:"assets/img/pescado.svg"},{id:"11",name:"S\xe9samo",description:"Granos de s\xe9samo",color:"sesamo",icon:"assets/img/pescado.svg"},{id:"12",name:"Sulfitos",description:"Di\xf3xido de azufre y sulfitos",color:"sulfitos",icon:"assets/img/pescado.svg"},{id:"13",name:"Moluscos",description:"Moluscos",color:"moluscos",icon:"assets/img/pescado.svg"},{id:"14",name:"Altramuces",description:"Altramuces",color:"altramuces",icon:"assets/img/pescado.svg"},{id:"15",name:"Ajo",description:"Ajo",color:"ajo",icon:"assets/img/pescado.svg"},{id:"16",name:"Puerro",description:"Puerro",color:"puerro",icon:"assets/img/pescado.svg"}]}getNameById(o){const e=this.allergens.find(e=>e.id===o);return e?e.name:""}getColorById(o){const e=this.allergens.find(e=>e.id===o);return e?e.color:""}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function g(o,e){if(1&o&&(a.TgZ(0,"span"),a._uU(1),a.qZA()),2&o){const o=a.oxw().$implicit;a.xp6(1),a.hij("",o.numero,". ")}}function d(o,e){if(1&o&&(a.TgZ(0,"ion-badge",9),a._uU(1),a.qZA()),2&o){const o=e.$implicit,n=a.oxw(4);a.Tol(n.allergensService.getColorById(o)),a.xp6(1),a.hij(" ",n.allergensService.getNameById(o)," ")}}function m(o,e){if(1&o&&(a.TgZ(0,"ion-row"),a.TgZ(1,"ion-col",7),a.YNc(2,d,2,3,"ion-badge",8),a.qZA(),a.qZA()),2&o){const o=a.oxw().$implicit;a.xp6(2),a.Q6J("ngForOf",o.allergens)}}function f(o,e){if(1&o&&(a.TgZ(0,"span"),a._uU(1),a.ALo(2,"currency"),a.qZA()),2&o){const o=a.oxw(2).$implicit;a.xp6(1),a.hij(" / Media: ",a.Dn7(2,1,o.price.half,"EUR","symbol"),"")}}function h(o,e){if(1&o&&(a.TgZ(0,"span"),a._uU(1),a.ALo(2,"currency"),a.qZA()),2&o){const o=a.oxw(2).$implicit;a.xp6(1),a.hij(" / Tapa: ",a.Dn7(2,1,o.price.tapa,"EUR","symbol"),"")}}function Z(o,e){if(1&o&&(a.TgZ(0,"p"),a._uU(1),a.ALo(2,"currency"),a.YNc(3,f,3,5,"span",5),a.YNc(4,h,3,5,"span",5),a.qZA()),2&o){const o=a.oxw().$implicit;a.xp6(1),a.hij("Raci\xf3n: ",a.Dn7(2,3,o.price.one,"EUR","symbol")," "),a.xp6(2),a.Q6J("ngIf",null==o||null==o.price?null:o.price.half),a.xp6(1),a.Q6J("ngIf",null==o||null==o.price?null:o.price.tapa)}}function v(o,e){if(1&o&&(a.TgZ(0,"span"),a._uU(1),a.ALo(2,"currency"),a.qZA()),2&o){const o=a.oxw(2).$implicit;a.xp6(1),a.hij(" / Medio: ",a.Dn7(2,1,o.price.medio,"EUR","symbol"),"")}}function x(o,e){if(1&o&&(a.TgZ(0,"span"),a._uU(1),a.ALo(2,"currency"),a.qZA()),2&o){const o=a.oxw(2).$implicit;a.xp6(1),a.hij(" / Tapa: ",a.Dn7(2,1,o.price.tapa,"EUR","symbol"),"")}}function A(o,e){if(1&o&&(a.TgZ(0,"p"),a._uU(1),a.ALo(2,"currency"),a.YNc(3,v,3,5,"span",5),a.YNc(4,x,3,5,"span",5),a.qZA()),2&o){const o=a.oxw().$implicit;a.xp6(1),a.hij("Entero: ",a.Dn7(2,3,o.price.entero,"EUR","symbol")," "),a.xp6(2),a.Q6J("ngIf",null==o||null==o.price?null:o.price.medio),a.xp6(1),a.Q6J("ngIf",null==o||null==o.price?null:o.price.tapa)}}function y(o,e){if(1&o&&(a.TgZ(0,"p"),a._uU(1),a.ALo(2,"currency"),a.qZA()),2&o){const o=a.oxw().$implicit;a.xp6(1),a.Oqu(a.Dn7(2,1,o.price.precio,"EUR","symbol"))}}function T(o,e){if(1&o&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-label"),a.TgZ(2,"ion-text"),a.TgZ(3,"h1",7),a.YNc(4,g,2,1,"span",5),a._uU(5),a.qZA(),a.qZA(),a.YNc(6,m,3,1,"ion-row",5),a.YNc(7,Z,5,7,"p",5),a.YNc(8,A,5,7,"p",5),a.YNc(9,y,3,5,"p",5),a.qZA(),a.qZA()),2&o){const o=e.$implicit;a.xp6(4),a.Q6J("ngIf",null==o?null:o.numero),a.xp6(1),a.Oqu(o.name),a.xp6(1),a.Q6J("ngIf",null==o.allergens?null:o.allergens.length),a.xp6(1),a.Q6J("ngIf",null==o||null==o.price?null:o.price.one),a.xp6(1),a.Q6J("ngIf",null==o||null==o.price?null:o.price.entero),a.xp6(1),a.Q6J("ngIf",null==o||null==o.price?null:o.price.precio)}}function q(o,e){if(1&o&&(a.TgZ(0,"ion-list"),a.YNc(1,T,10,6,"ion-item",6),a.qZA()),2&o){const o=a.oxw();a.xp6(1),a.Q6J("ngForOf",null==o.tapasService?null:o.tapasService.tapas)}}const w=[{path:"",component:(()=>{class o{constructor(o,e,n,s){this.route=o,this.tapasService=e,this.tiposService=n,this.allergensService=s;const i=this.route.snapshot.paramMap.get("tipo");this.tapasService.load(i),this.title=this.tiposService.getNameById(i)}}return o.\u0275fac=function(e){return new(e||o)(a.Y36(t.gz),a.Y36(l),a.Y36(p),a.Y36(u))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-tapas"]],decls:8,vars:4,consts:[[3,"translucent"],["color","app"],["src","./assets/img/logo-header.svg","alt","","slot","start",1,"ion-margin-start"],[1,"ion-text-uppercase","title"],[3,"fullscreen"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"ion-text-wrap"],["class","ion-margin-end",3,"class",4,"ngFor","ngForOf"],[1,"ion-margin-end"]],template:function(o,e){1&o&&(a.TgZ(0,"ion-header",0),a.TgZ(1,"ion-toolbar",1),a._UZ(2,"ion-img",2),a.TgZ(3,"ion-title"),a.TgZ(4,"ion-label",3),a._uU(5),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"ion-content",4),a.YNc(7,q,2,1,"ion-list",5),a.qZA()),2&o&&(a.Q6J("translucent",!0),a.xp6(5),a.Oqu(e.title),a.xp6(1),a.Q6J("fullscreen",!0),a.xp6(1),a.Q6J("ngIf",null==e.tapasService||null==e.tapasService.tapas?null:e.tapasService.tapas.length))},directives:[s.Gu,s.sr,s.Xz,s.wd,s.Q$,s.W2,i.O5,s.q_,i.sg,s.Ie,s.yW,s.Nd,s.wI,s.yp],pipes:[i.H9],styles:[".title[_ngcontent-%COMP%]{font-size:25px}"]}),o})()}];let I=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[t.Bz.forChild(w)],t.Bz]}),o})(),b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[s.Pc,i.ez,c.u5,I]]}),o})()}}]);