"use strict";(self.webpackChunkbardiegoponce=self.webpackChunkbardiegoponce||[]).push([[3527],{3527:function(e,t,o){o.r(t),o.d(t,{ion_popover:function(){return C}});var r=o(4553),i=o(245),n=o(8688),s=o(7013),a=o(8824),p=o(1135),c=o(1269),d=o(6069),l=o(1014);const h=(e,t,o)=>{const r=t.getBoundingClientRect(),i=r.height;let n=r.width;return"cover"===e&&o&&(n=o.getBoundingClientRect().width),{contentWidth:n,contentHeight:i}},v=(e,t,o)=>{let i=[];switch(t){case"hover":let e;i=[{eventName:"mouseenter",callback:(n=(0,r.Z)(function*(t){t.stopPropagation(),e&&clearTimeout(e),e=setTimeout(()=>{(0,a.r)(()=>{o.presentFromTrigger(t),e=void 0})},100)}),function(e){return n.apply(this,arguments)})},{eventName:"mouseleave",callback:t=>{e&&clearTimeout(e);const r=t.relatedTarget;!r||r.closest("ion-popover")!==o&&o.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:e=>e.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:e=>o.presentFromTrigger(e,!0)}];break;case"context-menu":i=[{eventName:"contextmenu",callback:e=>{e.preventDefault(),o.presentFromTrigger(e)}},{eventName:"click",callback:e=>e.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:e=>o.presentFromTrigger(e,!0)}];break;case"click":default:i=[{eventName:"click",callback:e=>o.presentFromTrigger(e)},{eventName:"ionPopoverActivateTrigger",callback:e=>o.presentFromTrigger(e,!0)}]}var n;return i.forEach(({eventName:t,callback:o})=>e.addEventListener(t,o)),e.setAttribute("data-ion-popover-trigger","true"),()=>{i.forEach(({eventName:t,callback:o})=>e.removeEventListener(t,o)),e.removeAttribute("data-ion-popover-trigger")}},g=(e,t)=>t&&"ION-ITEM"===t.tagName?e.findIndex(e=>e===t):-1,f=e=>{const t=(0,a.g)(e).querySelector("button");t&&(0,a.r)(()=>t.focus())},m=e=>{const t=function(){var t=(0,r.Z)(function*(t){const o=document.activeElement;let r=[];try{r=Array.from(e.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(i){}switch(t.key){case"ArrowLeft":(yield e.getParentPopover())&&e.dismiss(void 0,void 0,!1);break;case"ArrowDown":t.preventDefault();const i=((e,t)=>e[g(e,t)+1])(r,o);void 0!==i&&f(i);break;case"ArrowUp":t.preventDefault();const n=((e,t)=>e[g(e,t)-1])(r,o);void 0!==n&&f(n);break;case"Home":t.preventDefault();const s=r[0];void 0!==s&&f(s);break;case"End":t.preventDefault();const a=r[r.length-1];void 0!==a&&f(a);break;case"ArrowRight":case" ":case"Enter":if(o&&(e=>e.hasAttribute("data-ion-popover-trigger"))(o)){const e=new CustomEvent("ionPopoverActivateTrigger");o.dispatchEvent(e)}}});return function(e){return t.apply(this,arguments)}}();return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)},u=(e,t,o,r,i,n,s,a,p,c,d)=>{var l;let h={top:0,left:0,width:0,height:0};switch(n){case"event":if(!d)return p;h={top:d.clientY,left:d.clientX,width:1,height:1};break;case"trigger":default:const e=d,t=c||(null===(l=null==e?void 0:e.detail)||void 0===l?void 0:l.ionShadowTarget)||(null==e?void 0:e.target);if(!t)return p;const o=t.getBoundingClientRect();h={top:o.top,left:o.left,width:o.width,height:o.height}}const v=k(s,h,t,o,r,i,e),g=P(a,s,h,t,o),f=v.top+g.top,m=v.left+g.left,{arrowTop:u,arrowLeft:w}=y(s,r,i,f,m,t,o,e),{originX:x,originY:D}=b(s,a,e);return{top:f,left:m,referenceCoordinates:h,arrowTop:u,arrowLeft:w,originX:x,originY:D}},b=(e,t,o)=>{switch(e){case"top":return{originX:w(t),originY:"bottom"};case"bottom":return{originX:w(t),originY:"top"};case"left":return{originX:"right",originY:x(t)};case"right":return{originX:"left",originY:x(t)};case"start":return{originX:o?"left":"right",originY:x(t)};case"end":return{originX:o?"right":"left",originY:x(t)}}},w=e=>{switch(e){case"start":return"left";case"center":return"center";case"end":return"right"}},x=e=>{switch(e){case"start":return"top";case"center":return"center";case"end":return"bottom"}},y=(e,t,o,r,i,n,s,a)=>{const p={arrowTop:r+s/2-t/2,arrowLeft:i+n-t/2},c={arrowTop:r+s/2-t/2,arrowLeft:i-1.5*t};switch(e){case"top":return{arrowTop:r+s,arrowLeft:i+n/2-t/2};case"bottom":return{arrowTop:r-o,arrowLeft:i+n/2-t/2};case"left":return p;case"right":return c;case"start":return a?c:p;case"end":return a?p:c;default:return{arrowTop:0,arrowLeft:0}}},k=(e,t,o,r,i,n,s)=>{const a={top:t.top,left:t.left-o-i},p={top:t.top,left:t.left+t.width+i};switch(e){case"top":return{top:t.top-r-n,left:t.left};case"right":return p;case"bottom":return{top:t.top+t.height+n,left:t.left};case"left":return a;case"start":return s?p:a;case"end":return s?a:p}},P=(e,t,o,r,i)=>{switch(e){case"center":return T(t,o,r,i);case"end":return D(t,o,r,i);case"start":default:return{top:0,left:0}}},D=(e,t,o,r)=>{switch(e){case"start":case"end":case"left":case"right":return{top:-(r-t.height),left:0};case"top":case"bottom":default:return{top:0,left:-(o-t.width)}}},T=(e,t,o,r)=>{switch(e){case"start":case"end":case"left":case"right":return{top:-(r/2-t.height/2),left:0};case"top":case"bottom":default:return{top:0,left:-(o/2-t.width/2)}}},E=(e,t,o,r,i,n,s,a,p,c,d,l,h=0,v=0,g=0)=>{let f,m=h,u=o,b=t,w=c,x=d,y=!1,k=!1;const P=l?l.top+l.height:n/2-a/2,D=l?l.height:0;let T=!1;return u<r+p?(u=r,y=!0,w="left"):s+r+u+p>i&&(k=!0,u=i-s-r,w="right"),P+D+a>n&&("top"===e||"bottom"===e)&&(P-a>0?(b=P-a-D-(g-1),m=b+a,x="bottom",T=!0):f=r),{top:b,left:u,bottom:f,originX:w,originY:x,checkSafeAreaLeft:y,checkSafeAreaRight:k,arrowTop:m,arrowLeft:v,addPopoverBottomClass:T}},I=(e,t)=>{var o;const{event:r,size:i,trigger:n,reference:s,side:p,align:c}=t,d=e.ownerDocument,v="rtl"===d.dir,g=d.defaultView.innerWidth,f=d.defaultView.innerHeight,m=(0,a.g)(e),b=m.querySelector(".popover-content"),w=m.querySelector(".popover-arrow"),x=n||(null===(o=null==r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null==r?void 0:r.target),{contentWidth:y,contentHeight:k}=h(i,b,x),{arrowWidth:P,arrowHeight:D}=(e=>{if(!e)return{arrowWidth:0,arrowHeight:0};const{width:t,height:o}=e.getBoundingClientRect();return{arrowWidth:t,arrowHeight:o}})(w),T=u(v,y,k,P,D,s,p,c,{top:f/2-k/2,left:g/2-y/2,originX:v?"right":"left",originY:"top"},n,r),I="cover"===i?0:5,S="cover"===i?0:25,{originX:A,originY:L,top:C,left:W,bottom:N,checkSafeAreaLeft:$,checkSafeAreaRight:O,arrowTop:q,arrowLeft:Y,addPopoverBottomClass:X}=E(p,T.top,T.left,I,g,f,y,k,S,T.originX,T.originY,T.referenceCoordinates,T.arrowTop,T.arrowLeft,D),z=(0,l.c)(),B=(0,l.c)(),H=(0,l.c)();return B.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),H.addElement(m.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),z.easing("ease").duration(100).beforeAddWrite(()=>{"cover"===i&&e.style.setProperty("--width",`${y}px`),X&&e.classList.add("popover-bottom"),void 0!==N&&b.style.setProperty("bottom",`${N}px`);let t=`${W}px`;$&&(t=`${W}px + var(--ion-safe-area-left, 0)`),O&&(t=`${W}px - var(--ion-safe-area-right, 0)`),b.style.setProperty("top",`calc(${C}px + var(--offset-y, 0))`),b.style.setProperty("left",`calc(${t} + var(--offset-x, 0))`),b.style.setProperty("transform-origin",`${L} ${A}`),null!==w&&(((e,t=!1,o,r)=>!(!o&&!r||"top"!==e&&"bottom"!==e&&t))(p,T.top!==C||T.left!==W,r,n)?(w.style.setProperty("top",`calc(${q}px + var(--offset-y, 0))`),w.style.setProperty("left",`calc(${Y}px + var(--offset-x, 0))`)):w.style.setProperty("display","none"))}).addAnimation([B,H])},S=e=>{const t=(0,a.g)(e),o=t.querySelector(".popover-content"),r=t.querySelector(".popover-arrow"),i=(0,l.c)(),n=(0,l.c)(),s=(0,l.c)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),i.easing("ease").afterAddWrite(()=>{e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin"),r&&(r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("display"))}).duration(300).addAnimation([n,s])},A=(e,t)=>{var o;const{event:r,size:i,trigger:n,reference:s,side:p,align:c}=t,d=e.ownerDocument,v="rtl"===d.dir,g=d.defaultView.innerWidth,f=d.defaultView.innerHeight,m=(0,a.g)(e),b=m.querySelector(".popover-content"),w=n||(null===(o=null==r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null==r?void 0:r.target),{contentWidth:x,contentHeight:y}=h(i,b,w),k=u(v,x,y,0,0,s,p,c,{top:f/2-y/2,left:g/2-x/2,originX:v?"right":"left",originY:"top"},n,r),P="cover"===i?0:12,{originX:D,originY:T,top:I,left:S,bottom:A}=E(p,k.top,k.left,P,g,f,x,y,0,k.originX,k.originY,k.referenceCoordinates),L=(0,l.c)(),C=(0,l.c)(),W=(0,l.c)(),N=(0,l.c)(),$=(0,l.c)();return C.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),W.addElement(m.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),N.addElement(b).beforeStyles({top:`calc(${I}px + var(--offset-y, 0px))`,left:`calc(${S}px + var(--offset-x, 0px))`,"transform-origin":`${T} ${D}`}).beforeAddWrite(()=>{void 0!==A&&b.style.setProperty("bottom",`${A}px`)}).fromTo("transform","scale(0.8)","scale(1)"),$.addElement(m.querySelector(".popover-viewport")).fromTo("opacity",.01,1),L.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{"cover"===i&&e.style.setProperty("--width",`${x}px`),"bottom"===T&&e.classList.add("popover-bottom")}).addAnimation([C,W,N,$])},L=e=>{const t=(0,a.g)(e),o=t.querySelector(".popover-content"),r=(0,l.c)(),i=(0,l.c)(),n=(0,l.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),r.easing("ease").afterAddWrite(()=>{e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin")}).duration(150).addAnimation([i,n])},C=class{constructor(e){(0,i.r)(this,e),this.didPresent=(0,i.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,i.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,i.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,i.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,i.e)(this,"didPresent",7),this.willPresentShorthand=(0,i.e)(this,"willPresent",7),this.willDismissShorthand=(0,i.e)(this,"willDismiss",7),this.didDismissShorthand=(0,i.e)(this,"didDismiss",7),this.parentPopover=null,this.popoverIndex=N++,this.coreDelegate=(0,s.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.alignment="start",this.arrow=!0,this.isOpen=!1,this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,p.B)},this.onLifecycle=e=>{const t=this.usersElement,o=W[e.type];if(t&&o){const r=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(r)}},this.configureTriggerInteraction=()=>{const{trigger:e,triggerAction:t,el:o,destroyTriggerInteraction:r}=this;r&&r();const i=this.triggerEl=void 0!==e?document.getElementById(e):null;!i||(this.destroyTriggerInteraction=v(i,t,o))},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:e,el:t}=this;e&&e(),this.destroyKeyboardInteraction=m(t)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:e,parentPopover:t,triggerAction:o,triggerEl:r,el:i}=this;!t||!r||(e&&e(),this.destroyDismissInteraction=((e,t,o,r)=>{let i=[];const n=(0,a.g)(r).querySelector(".popover-content");switch(t){case"hover":i=[{eventName:"mouseenter",callback:t=>{document.elementFromPoint(t.clientX,t.clientY)!==e&&o.dismiss(void 0,void 0,!1)}}];break;case"context-menu":case"click":default:i=[{eventName:"click",callback:t=>{t.target.closest("[data-ion-popover-trigger]")!==e?o.dismiss(void 0,void 0,!1):t.stopPropagation()}}]}return i.forEach(({eventName:e,callback:t})=>n.addEventListener(e,t)),()=>{i.forEach(({eventName:e,callback:t})=>n.removeEventListener(e,t))}})(r,o,i,t))}}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}connectedCallback(){(0,p.e)(this.el)}componentWillLoad(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-popover-${this.popoverIndex}`,this.parentPopover=this.el.closest(`ion-popover:not(#${this.popoverId})`)}componentDidLoad(){const{parentPopover:e,isOpen:t}=this;!0===t&&(0,a.r)(()=>this.present()),e&&(0,a.a)(e,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)}),this.configureTriggerInteraction()}presentFromTrigger(e,t=!1){var o=this;return(0,r.Z)(function*(){o.focusDescendantOnPresent=t,yield o.present(e),o.focusDescendantOnPresent=!1})()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const t=this.el.parentNode,o=this.inline=null!==t&&"ION-APP"!==t.tagName&&"BODY"!==t.tagName;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}}present(e){var t=this;return(0,r.Z)(function*(){if(t.presented)return;void 0!==t.currentTransition&&(yield t.currentTransition);const o=Object.assign(Object.assign({},t.componentProps),{popover:t.el}),{inline:r,delegate:i}=t.getDelegate(!0);t.usersElement=yield(0,s.a)(i,t.el,t.component,["popover-viewport"],o,r),yield(0,d.e)(t.usersElement),t.configureKeyboardInteraction(),t.configureDismissInteraction(),t.currentTransition=(0,p.d)(t,"popoverEnter",I,A,{event:e||t.event,size:t.size,trigger:t.triggerEl,reference:t.reference,side:t.side,align:t.alignment}),yield t.currentTransition,t.currentTransition=void 0,t.focusDescendantOnPresent&&(0,p.j)(t.el,t.el)})()}dismiss(e,t,o=!0){var i=this;return(0,r.Z)(function*(){void 0!==i.currentTransition&&(yield i.currentTransition);const{destroyKeyboardInteraction:r,destroyDismissInteraction:n}=i;o&&i.parentPopover&&i.parentPopover.dismiss(e,t,o),i.currentTransition=(0,p.f)(i,e,t,"popoverLeave",S,L,i.event);const a=yield i.currentTransition;if(a){r&&(r(),i.destroyKeyboardInteraction=void 0),n&&(n(),i.destroyDismissInteraction=void 0);const{delegate:e}=i.getDelegate();yield(0,s.d)(e,i.usersElement)}return i.currentTransition=void 0,a})()}getParentPopover(){var e=this;return(0,r.Z)(function*(){return e.parentPopover})()}onDidDismiss(){return(0,p.g)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,p.g)(this.el,"ionPopoverWillDismiss")}render(){const e=(0,n.b)(this),{onLifecycle:t,popoverId:o,parentPopover:r,dismissOnSelect:s,presented:a,side:p,arrow:d,htmlAttributes:l}=this,h=(0,n.a)("desktop"),v=d&&!r&&!h;return(0,i.h)(i.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},l,{style:{zIndex:`${2e4+this.overlayIndex}`},id:o,class:Object.assign(Object.assign({},(0,c.g)(this.cssClass)),{[e]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-interactive":a,"popover-desktop":h,[`popover-side-${p}`]:!0,"popover-nested":!!r}),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),!r&&(0,i.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,i.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:s?()=>this.dismiss():void 0},v&&(0,i.h)("div",{class:"popover-arrow",part:"arrow"}),(0,i.h)("div",{class:"popover-content",part:"content"},(0,i.h)("slot",null))))}get el(){return(0,i.i)(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},W={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};let N=0;C.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001;pointer-events:none}:host(.popover-interactive) .popover-content,:host(.popover-interactive) ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001;pointer-events:none}:host(.popover-interactive) .popover-content,:host(.popover-interactive) ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);