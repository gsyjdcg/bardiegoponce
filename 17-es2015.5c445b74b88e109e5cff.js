(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3y/I":function(n,e,o){"use strict";o.r(e),o.d(e,"RacionesPageModule",(function(){return h}));var c=o("TEn/"),i=o("ofXK"),t=o("3Pt+"),r=o("tyNb"),s=o("fXoL"),a=o("tk/3");let b=(()=>{class n{constructor(n){this.http=n}load(){this.http.get("assets/data/raciones.json").subscribe(n=>{this.raciones=n},n=>{console.log(n)})}}return n.\u0275fac=function(e){return new(e||n)(s.Pb(a.a))},n.\u0275prov=s.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function l(n,e){1&n&&(s.Mb(0,"ion-list"),s.fc(1," No se han encontrado datos "),s.Lb())}function u(n,e){if(1&n&&(s.Mb(0,"ion-item"),s.Mb(1,"ion-label"),s.Mb(2,"ion-text"),s.fc(3),s.Lb(),s.Mb(4,"p"),s.fc(5),s.Wb(6,"currency"),s.Lb(),s.Lb(),s.Lb()),2&n){const n=e.$implicit;s.zb(3),s.hc(" ",n.nombre,""),s.zb(2),s.gc(s.Xb(6,2,n.precio,"EUR","symbol"))}}function f(n,e){if(1&n&&(s.Mb(0,"ion-list"),s.ec(1,u,7,6,"ion-item",5),s.Lb()),2&n){const n=s.Vb();s.zb(1),s.ac("ngForOf",null==n.racionesService?null:n.racionesService.raciones)}}const p=[{path:"",component:(()=>{class n{constructor(n){this.racionesService=n,this.racionesService.load()}}return n.\u0275fac=function(e){return new(e||n)(s.Jb(b))},n.\u0275cmp=s.Db({type:n,selectors:[["app-raciones"]],decls:11,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(n,e){1&n&&(s.Mb(0,"ion-header",0),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-title"),s.fc(3," Raciones - Bar Diego Ponce "),s.Lb(),s.Lb(),s.Lb(),s.Mb(4,"ion-content",1),s.Mb(5,"ion-header",2),s.Mb(6,"ion-toolbar"),s.Mb(7,"ion-title",3),s.fc(8,"Raciones"),s.Lb(),s.Lb(),s.Lb(),s.ec(9,l,2,0,"ion-list",4),s.ec(10,f,2,1,"ion-list",4),s.Lb()),2&n&&(s.ac("translucent",!0),s.zb(4),s.ac("fullscreen",!0),s.zb(5),s.ac("ngIf",!(null!=e.racionesService&&null!=e.racionesService.raciones&&e.racionesService.raciones.length)),s.zb(1),s.ac("ngIf",null==e.racionesService||null==e.racionesService.raciones?null:e.racionesService.raciones.length))},directives:[c.c,c.n,c.m,c.b,i.j,c.g,i.i,c.e,c.f,c.l],pipes:[i.c],styles:[""]}),n})()}];let d=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(e){return new(e||n)},imports:[[r.i.forChild(p)],r.i]}),n})(),h=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(e){return new(e||n)},imports:[[c.o,i.b,t.a,d]]}),n})()}}]);