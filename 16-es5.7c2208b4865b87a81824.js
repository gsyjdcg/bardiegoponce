function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ircr:function(e,n,t){"use strict";t.r(n),t.d(n,"BocatinesPageModule",(function(){return m}));var i,o=t("TEn/"),c=t("ofXK"),a=t("3Pt+"),s=t("tyNb"),r=t("fXoL"),l=t("tk/3"),b=((i=function(){function e(n){_classCallCheck(this,e),this.http=n}return _createClass(e,[{key:"load",value:function(){var e=this;this.http.get("assets/data/bocatines.json").subscribe((function(n){e.bocatines=n}),(function(e){console.log(e)}))}}]),e}()).\u0275fac=function(e){return new(e||i)(r.Pb(l.a))},i.\u0275prov=r.Fb({token:i,factory:i.\u0275fac,providedIn:"root"}),i);function f(e,n){if(1&e&&(r.Mb(0,"ion-item"),r.Mb(1,"ion-label"),r.Mb(2,"ion-text"),r.Mb(3,"h1"),r.fc(4),r.Lb(),r.Lb(),r.Mb(5,"p"),r.fc(6),r.Wb(7,"currency"),r.Lb(),r.Lb(),r.Lb()),2&e){var t=n.$implicit;r.zb(4),r.ic("",t.id,". ",t.nombre,""),r.zb(2),r.gc(r.Xb(7,3,t.precio,"EUR","symbol"))}}function u(e,n){if(1&e&&(r.Mb(0,"ion-list"),r.ec(1,f,8,7,"ion-item",6),r.Lb()),2&e){var t=r.Vb();r.zb(1),r.ac("ngForOf",null==t.bocatinesService?null:t.bocatinesService.bocatines)}}var p,h,d,v=[{path:"",component:(p=function e(n){_classCallCheck(this,e),this.bocatinesService=n,this.bocatinesService.load()},p.\u0275fac=function(e){return new(e||p)(r.Jb(b))},p.\u0275cmp=r.Db({type:p,selectors:[["app-bocatines"]],decls:8,vars:3,consts:[[3,"translucent"],["color","app"],["src","./assets/img/logo-header.svg","alt","","slot","start",1,"ion-margin-start"],[1,"ion-text-uppercase","title"],[3,"fullscreen"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(e,n){1&e&&(r.Mb(0,"ion-header",0),r.Mb(1,"ion-toolbar",1),r.Kb(2,"ion-img",2),r.Mb(3,"ion-title"),r.Mb(4,"ion-label",3),r.fc(5,"Bocatines"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(6,"ion-content",4),r.ec(7,u,2,1,"ion-list",5),r.Lb()),2&e&&(r.ac("translucent",!0),r.zb(6),r.ac("fullscreen",!0),r.zb(1),r.ac("ngIf",null==n.bocatinesService||null==n.bocatinesService.bocatines?null:n.bocatinesService.bocatines.length))},directives:[o.c,o.o,o.e,o.n,o.g,o.b,c.j,o.h,c.i,o.f,o.m],pipes:[c.c],styles:[".title[_ngcontent-%COMP%]{font-size:30px}"]}),p)}],g=((d=function e(){_classCallCheck(this,e)}).\u0275mod=r.Hb({type:d}),d.\u0275inj=r.Gb({factory:function(e){return new(e||d)},imports:[[s.i.forChild(v)],s.i]}),d),m=((h=function e(){_classCallCheck(this,e)}).\u0275mod=r.Hb({type:h}),h.\u0275inj=r.Gb({factory:function(e){return new(e||h)},imports:[[o.p,c.b,a.a,g]]}),h)}}]);