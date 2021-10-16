!function(){"use strict";function e(e,n){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return l=e.done,e},e:function(e){s=!0,a=e},f:function(){try{l||null==i.return||i.return()}finally{if(s)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(self.webpackChunkbardiegoponce=self.webpackChunkbardiegoponce||[]).push([[431],{431:function(t,i,r){r.r(i),r.d(i,{ion_virtual_scroll:function(){return v}});var o=r(4553),a=r(245),l=r(8824),s="item",h="header",c="footer",u=function(e,t){var n=f(e,t);return n&&e.ownerDocument?e.ownerDocument.importNode(n.content,!0).children[0]:null},f=function(e,t){switch(t){case s:return e.querySelector("template:not([name])");case h:return e.querySelector("template[name=header]");case c:return e.querySelector("template[name=footer]")}},d=function(e,t,n,i,r,o,a,l,u,f,d,v){for(var g=[],p=v+d,m=d;m<p;m++){var y=e[m];if(r){var b=r(y,m,e);null!=b&&g.push({i:f++,type:h,value:b,index:m,height:n?n(b,m):a,reads:n?0:2,visible:!!n})}if(g.push({i:f++,type:s,value:y,index:m,height:t?t(y,m):u,reads:t?0:2,visible:!!t}),o){var x=o(y,m,e);null!=x&&g.push({i:f++,type:c,value:x,index:m,height:i?i(x,m):l,reads:i?0:2,visible:!!i})}}return g},v=function(){function t(e){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(0,a.r)(this,e),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){n.updateVirtualScroll()}}var i,r,f;return i=t,f=[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}}],(r=[{key:"itemsChanged",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"componentWillLoad",value:function(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")}},{key:"connectedCallback",value:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=e.el.closest("ion-content"))){t.next=10;break}return t.next=4,n.getScrollElement();case 4:e.scrollEl=t.sent,e.contentEl=n,e.calcCells(),e.updateState(),t.next=11;break;case 10:console.error("<ion-virtual-scroll> must be used inside an <ion-content>");case 11:case"end":return t.stop()}},t)}))()}},{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0}},{key:"onResize",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"positionForItem",value:function(e){return Promise.resolve(function(e,t,n){var i=t.find(function(t){return t.type===s&&t.index===e});return i?n[i.i]:-1}(e,this.cells,this.getHeightIndex()))}},{key:"checkRange",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=this;return(0,o.Z)(regeneratorRuntime.mark(function i(){var r,o,a;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n.items){i.next=2;break}return i.abrupt("return");case 2:r=-1===t?n.items.length-e:t,o=function(e,t){return 0===t?0:t===(e.length>0?e[e.length-1].index:0)+1?e.length:e.findIndex(function(e){return e.index===t})}(n.cells,e),a=d(n.items,n.itemHeight,n.headerHeight,n.footerHeight,n.headerFn,n.footerFn,n.approxHeaderHeight,n.approxFooterHeight,n.approxItemHeight,o,e,r),n.cells=function(e,t,n){if(0===n&&t.length>=e.length)return t;for(var i=0;i<t.length;i++)e[i+n]=t[i];return e}(n.cells,a,o),n.lastItemLen=n.items.length,n.indexDirty=Math.max(e-1,0),n.scheduleUpdate();case 4:case"end":return i.stop()}},i)}))()}},{key:"checkEnd",value:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.items&&e.checkRange(e.lastItemLen);case 1:case"end":return t.stop()}},t)}))()}},{key:"updateVirtualScroll",value:function(){!this.isEnabled||!this.scrollEl||(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),(0,a.f)(this.readVS.bind(this)),(0,a.c)(this.writeVS.bind(this)))}},{key:"readVS",value:function(){for(var e=this.contentEl,t=this.scrollEl,n=0,i=this.el;i&&i!==e;)n+=i.offsetTop,i=i.offsetParent;this.viewportOffset=n,t&&(this.viewportHeight=t.offsetHeight,this.currentScrollTop=t.scrollTop)}},{key:"writeVS",value:function(){var t=this.indexDirty,n=function(e,t,n){return{top:Math.max(e-100,0),bottom:e+t+100}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight),i=this.getHeightIndex(),r=function(e,t,n){for(var i=t.top,r=t.bottom,o=0;o<e.length&&!(e[o]>i);o++);for(var a=Math.max(o-2-1,0);o<e.length&&!(e[o]>=r);o++);return{offset:a,length:Math.min(o+2,e.length)-a}}(i,n);!function(e,t,n){return e<=n.offset+n.length||t.offset!==n.offset||t.length!==n.length}(t,this.range,r)||(this.range=r,function(t,n,i,r){var o,a=e(t);try{for(a.s();!(o=a.n()).done;){var l=o.value;l.change=0,l.d=!0}}catch(p){a.e(p)}finally{a.f()}for(var s=[],h=r.offset+r.length,c=function(e){var r=i[e],o=t.find(function(e){return e.d&&e.cell===r});if(o){var a=n[e];a!==o.top&&(o.top=a,o.change=1),o.d=!1}else s.push(r)},u=r.offset;u<h;u++)c(u);for(var f=t.filter(function(e){return e.d}),d=function(){var e=g[v],i=f.find(function(t){return t.d&&t.cell.type===e.type}),r=e.i;i?(i.d=!1,i.change=2,i.cell=e,i.top=n[r]):t.push({d:!1,cell:e,visible:!0,change:2,top:n[r]})},v=0,g=s;v<g.length;v++)d();t.filter(function(e){return e.d&&-9999!==e.top}).forEach(function(e){e.change=1,e.top=-9999})}(this.virtualDom,i,this.cells,r),this.nodeRender?function(e,t,n,i){for(var r,o=Array.from(e.children).filter(function(e){return"TEMPLATE"!==e.tagName}),a=o.length,l=0;l<n.length;l++){var s=n[l],h=s.cell;if(2===s.change){if(l<a)t(r=o[l],h,l);else{var c=u(e,h.type);(r=t(c,h,l)||c).classList.add("virtual-item"),e.appendChild(r)}r.$ionCell=h}else r=o[l];0!==s.change&&(r.style.transform="translate3d(0,".concat(s.top,"px,0)"));var f=h.visible;s.visible!==f&&(f?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),s.visible=f),h.reads>0&&(i(h,r),h.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&(0,a.j)(this))}},{key:"updateCellHeight",value:function(e,t){var n=this,i=function(){if(t.$ionCell===e){var i=window.getComputedStyle(t),r=t.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));n.setCellHeight(e,r)}};t?(0,l.c)(t,i):i()}},{key:"setCellHeight",value:function(e,t){var n=e.i;e===this.cells[n]&&(e.height!==t||!0!==e.visible)&&(e.visible=!0,e.height=t,this.indexDirty=Math.min(this.indexDirty,n),this.scheduleUpdate())}},{key:"scheduleUpdate",value:function(){var e=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return e.updateVirtualScroll()},100)}},{key:"updateState",value:function(){var e=!(!this.scrollEl||!this.cells);e!==this.isEnabled&&(this.enableScrollEvents(e),e&&this.updateVirtualScroll())}},{key:"calcCells",value:function(){!this.items||(this.lastItemLen=this.items.length,this.cells=d(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}},{key:"getHeightIndex",value:function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}},{key:"calcHeightIndex",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.heightIndex=function(e,t){if(!e)return new Uint32Array(t);if(e.length===t)return e;if(t>e.length){var n=new Uint32Array(t);return n.set(e),n}return e.subarray(0,t)}(this.heightIndex,this.cells.length),this.totalHeight=function(e,t,n){for(var i=e[n],r=n;r<e.length;r++)e[r]=i,i+=t[r].height;return i}(this.heightIndex,this.cells,e),this.indexDirty=1/0}},{key:"enableScrollEvents",value:function(e){var t=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var n=this.scrollEl;n&&(this.isEnabled=e,n.addEventListener("scroll",this.onScroll),this.rmEvent=function(){n.removeEventListener("scroll",t.onScroll)})}},{key:"renderVirtualNode",value:function(e){var t=e.cell,n=t.type,i=t.value,r=t.index;switch(n){case s:return this.renderItem(i,r);case h:return this.renderHeader(i,r);case c:return this.renderFooter(i,r)}}},{key:"render",value:function(){var e=this;return(0,a.h)(a.H,{style:{height:"".concat(this.totalHeight,"px")}},this.renderItem&&(0,a.h)(g,{dom:this.virtualDom},this.virtualDom.map(function(t){return e.renderVirtualNode(t)})))}},{key:"el",get:function(){return(0,a.i)(this)}}])&&n(i.prototype,r),f&&n(i,f),t}(),g=function(e,t,n){var i=e.dom;return n.map(t,function(e,t){var n=i[t],r=e.vattrs||{},o=r.class||"";return o+="virtual-item ",n.visible||(o+="virtual-loading"),Object.assign(Object.assign({},e),{vattrs:Object.assign(Object.assign({},r),{class:o,style:Object.assign(Object.assign({},r.style),{transform:"translate3d(0,".concat(n.top,"px,0)")})})})})};v.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}])}();