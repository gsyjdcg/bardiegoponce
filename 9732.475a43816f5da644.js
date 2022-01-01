"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9732],{9732:(F,u,c)=>{c.r(u),c.d(u,{TapasPageModule:()=>j});var a=c(5362),l=c(9808),m=c(4182),r=c(4030),e=c(9863),_=c(520);let d=(()=>{class o{constructor(i){this.http=i}load(i){this.http.get("assets/data/tapas.json").subscribe(n=>{(null==n?void 0:n.length)&&(this.tapas="bocatines"===i?n.filter(t=>t.tipo===i):n.filter(t=>t.tipo===i).sort((t,p)=>t.name.localeCompare(p.name)))},n=>{console.log(n)})}}return o.\u0275fac=function(i){return new(i||o)(e.LFG(_.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),f=(()=>{class o{constructor(){this.tipos=[{id:"tapas",name:"Tapas"},{id:"bocatines",name:"Bocatines"},{id:"raciones",name:"Raciones"},{id:"desayunos",name:"Desayunos"}]}getNameById(i){const n=this.tipos.find(t=>t.id===i);return n?n.name:""}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),T=(()=>{class o{constructor(){this.allergens=[{id:"1",name:"Cereales con gluten",description:"Cereales con gluten",color:"gluten",icon:"assets/img/pescado.svg"},{id:"2",name:"Crust\xe1ceos",description:"Crust\xe1ceos, mariscos",color:"crustaceos",icon:"assets/img/pescado.svg"},{id:"3",name:"Huevos",description:"Huevos",color:"huevos",icon:"assets/img/pescado.svg"},{id:"4",name:"Pescado",description:"Pescado",color:"pescado",icon:"assets/img/pescado.svg"},{id:"5",name:"Cacahuetes",description:"Cacahuetes",color:"cacahuetes",icon:"assets/img/pescado.svg"},{id:"6",name:"Soja",description:"Soja",color:"soja",icon:"assets/img/pescado.svg"},{id:"7",name:"Lacteos",description:"Lacteos",color:"lacteos",icon:"assets/img/pescado.svg"},{id:"8",name:"Frutos secos",description:"Frutos secos",color:"frutos-secos",icon:"assets/img/pescado.svg"},{id:"9",name:"Apio",description:"Apio",color:"apio",icon:"assets/img/pescado.svg"},{id:"10",name:"Mostaza",description:"Mostaza",color:"mostaza",icon:"assets/img/pescado.svg"},{id:"11",name:"S\xe9samo",description:"Granos de s\xe9samo",color:"sesamo",icon:"assets/img/pescado.svg"},{id:"12",name:"Sulfitos",description:"Di\xf3xido de azufre y sulfitos",color:"sulfitos",icon:"assets/img/pescado.svg"},{id:"13",name:"Moluscos",description:"Moluscos",color:"moluscos",icon:"assets/img/pescado.svg"},{id:"14",name:"Altramuces",description:"Altramuces",color:"altramuces",icon:"assets/img/pescado.svg"},{id:"15",name:"Ajo",description:"Ajo",color:"ajo",icon:"assets/img/pescado.svg"},{id:"16",name:"Puerro",description:"Puerro",color:"puerro",icon:"assets/img/pescado.svg"}]}getNameById(i){const n=this.allergens.find(t=>t.id===i);return n?n.name:""}getColorById(i){const n=this.allergens.find(t=>t.id===i);return n?n.color:""}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function v(o,s){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const i=e.oxw().$implicit;e.xp6(1),e.hij("",i.numero,". ")}}function x(o,s){if(1&o&&(e.TgZ(0,"ion-badge",9),e._uU(1),e.qZA()),2&o){const i=s.$implicit,n=e.oxw(4);e.Tol(n.allergensService.getColorById(i)),e.xp6(1),e.hij(" ",n.allergensService.getNameById(i)," ")}}function h(o,s){if(1&o&&(e.TgZ(0,"ion-row"),e.TgZ(1,"ion-col",7),e.YNc(2,x,2,3,"ion-badge",8),e.qZA(),e.qZA()),2&o){const i=e.oxw().$implicit;e.xp6(2),e.Q6J("ngForOf",i.allergens)}}function Z(o,s){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"currency"),e.qZA()),2&o){const i=e.oxw(2).$implicit;e.xp6(1),e.hij(" / Media: ",e.Dn7(2,1,i.price.half,"EUR","symbol"),"")}}function A(o,s){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"currency"),e.qZA()),2&o){const i=e.oxw(2).$implicit;e.xp6(1),e.hij(" / Tapa: ",e.Dn7(2,1,i.price.tapa,"EUR","symbol"),"")}}function y(o,s){if(1&o&&(e.TgZ(0,"p"),e._uU(1),e.ALo(2,"currency"),e.YNc(3,Z,3,5,"span",5),e.YNc(4,A,3,5,"span",5),e.qZA()),2&o){const i=e.oxw().$implicit;e.xp6(1),e.hij("Raci\xf3n: ",e.Dn7(2,3,i.price.one,"EUR","symbol")," "),e.xp6(2),e.Q6J("ngIf",null==i||null==i.price?null:i.price.half),e.xp6(1),e.Q6J("ngIf",null==i||null==i.price?null:i.price.tapa)}}function P(o,s){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"currency"),e.qZA()),2&o){const i=e.oxw(2).$implicit;e.xp6(1),e.hij(" / Medio: ",e.Dn7(2,1,i.price.medio,"EUR","symbol"),"")}}function S(o,s){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"currency"),e.qZA()),2&o){const i=e.oxw(2).$implicit;e.xp6(1),e.hij(" / Tapa: ",e.Dn7(2,1,i.price.tapa,"EUR","symbol"),"")}}function I(o,s){if(1&o&&(e.TgZ(0,"p"),e._uU(1),e.ALo(2,"currency"),e.YNc(3,P,3,5,"span",5),e.YNc(4,S,3,5,"span",5),e.qZA()),2&o){const i=e.oxw().$implicit;e.xp6(1),e.hij("Entero: ",e.Dn7(2,3,i.price.entero,"EUR","symbol")," "),e.xp6(2),e.Q6J("ngIf",null==i||null==i.price?null:i.price.medio),e.xp6(1),e.Q6J("ngIf",null==i||null==i.price?null:i.price.tapa)}}function w(o,s){if(1&o&&(e.TgZ(0,"p"),e._uU(1),e.ALo(2,"currency"),e.qZA()),2&o){const i=e.oxw().$implicit;e.xp6(1),e.Oqu(e.Dn7(2,1,i.price.precio,"EUR","symbol"))}}function U(o,s){if(1&o&&(e.TgZ(0,"ion-item"),e.TgZ(1,"ion-label"),e.TgZ(2,"ion-text"),e.TgZ(3,"h1",7),e.YNc(4,v,2,1,"span",5),e._uU(5),e.qZA(),e.qZA(),e.YNc(6,h,3,1,"ion-row",5),e.YNc(7,y,5,7,"p",5),e.YNc(8,I,5,7,"p",5),e.YNc(9,w,3,5,"p",5),e.qZA(),e.qZA()),2&o){const i=s.$implicit;e.xp6(4),e.Q6J("ngIf",null==i?null:i.numero),e.xp6(1),e.Oqu(i.name),e.xp6(1),e.Q6J("ngIf",null==i.allergens?null:i.allergens.length),e.xp6(1),e.Q6J("ngIf",null==i||null==i.price?null:i.price.one),e.xp6(1),e.Q6J("ngIf",null==i||null==i.price?null:i.price.entero),e.xp6(1),e.Q6J("ngIf",null==i||null==i.price?null:i.price.precio)}}function Y(o,s){if(1&o&&(e.TgZ(0,"ion-list"),e.YNc(1,U,10,6,"ion-item",6),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",null==i.tapasService?null:i.tapasService.tapas)}}const q=[{path:"",component:(()=>{class o{constructor(i,n,t,p){this.route=i,this.tapasService=n,this.tiposService=t,this.allergensService=p;const g=this.route.snapshot.paramMap.get("tipo");this.tapasService.load(g),this.title=this.tiposService.getNameById(g)}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(r.gz),e.Y36(d),e.Y36(f),e.Y36(T))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-tapas"]],decls:8,vars:4,consts:[[3,"translucent"],["color","app"],["src","./assets/img/logo-header.svg","alt","","slot","start",1,"ion-margin-start"],[1,"ion-text-uppercase","title"],[3,"fullscreen"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"ion-text-wrap"],["class","ion-margin-end",3,"class",4,"ngFor","ngForOf"],[1,"ion-margin-end"]],template:function(i,n){1&i&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e._UZ(2,"ion-img",2),e.TgZ(3,"ion-title"),e.TgZ(4,"ion-label",3),e._uU(5),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"ion-content",4),e.YNc(7,Y,2,1,"ion-list",5),e.qZA()),2&i&&(e.Q6J("translucent",!0),e.xp6(5),e.Oqu(n.title),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngIf",null==n.tapasService||null==n.tapasService.tapas?null:n.tapasService.tapas.length))},directives:[a.Gu,a.sr,a.Xz,a.wd,a.Q$,a.W2,l.O5,a.q_,l.sg,a.Ie,a.yW,a.Nd,a.wI,a.yp],pipes:[l.H9],styles:[".title[_ngcontent-%COMP%]{font-size:25px}"]}),o})()}];let N=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[r.Bz.forChild(q)],r.Bz]}),o})(),j=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[a.Pc,l.ez,m.u5,N]]}),o})()}}]);