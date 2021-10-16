"use strict";(self.webpackChunkbardiegoponce=self.webpackChunkbardiegoponce||[]).push([[7915],{7915:function(t,e,n){n.r(e),n.d(e,{ion_picker_internal:function(){return r}});var i=n(245),o=n(8824);const r=class{constructor(t){(0,i.r)(this,t),this.ionInputModeChange=(0,i.e)(this,"ionInputModeChange",7),this.inputMode=!1,this.isInHighlightBounds=t=>{const{highlightEl:e}=this;if(!e)return!1;const n=e.getBoundingClientRect();return!(t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom)},this.onFocusOut=t=>{const{relatedTarget:e}=t;(!e||"ION-PICKER-COLUMN-INTERNAL"!==e.tagName&&e!==this.inputEl)&&this.exitInputMode()},this.onFocusIn=t=>{const{target:e}=t;if("ION-PICKER-COLUMN-INTERNAL"===e.tagName&&!this.actionOnClick){const t=e;t.numericInput?this.enterInputMode(t,!1):this.exitInputMode()}},this.onClick=()=>{const{actionOnClick:t}=this;t&&(t(),this.actionOnClick=void 0)},this.onPointerDown=t=>{const{inputMode:e,inputModeColumn:n,el:i}=this;if(this.isInHighlightBounds(t))if(e)this.actionOnClick="ION-PICKER-COLUMN-INTERNAL"===t.target.tagName?n&&n===t.target?()=>{this.enterInputMode()}:()=>{this.enterInputMode(t.target)}:()=>{this.exitInputMode()};else{const e=1===i.querySelectorAll("ion-picker-column-internal.picker-column-numeric-input").length?t.target:void 0;this.actionOnClick=()=>{this.enterInputMode(e)}}else this.actionOnClick=()=>{this.exitInputMode()}},this.enterInputMode=(t,e=!0)=>{const{inputEl:n,el:i}=this;!n||!i.querySelector("ion-picker-column-internal.picker-column-numeric-input")||(this.inputMode=!0,this.inputModeColumn=t,e?(this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),n.focus()):(i.addEventListener("keypress",this.onKeyPress),this.destroyKeypressListener=()=>{i.removeEventListener("keypress",this.onKeyPress)}),this.emitInputModeChange())},this.exitInputMode=()=>{const{inputEl:t,inputMode:e}=this;!e||!t||(this.inputMode=!1,this.inputModeColumn=void 0,t.blur(),t.value="",this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),this.emitInputModeChange())},this.onKeyPress=t=>{const{inputEl:e}=this;if(!e)return;const n=parseInt(t.key,10);Number.isNaN(n)||(e.value+=t.key,this.onInputChange())},this.selectSingleColumn=()=>{const{inputEl:t,inputModeColumn:e,singleColumnSearchTimeout:n}=this;if(!t||!e)return;const i=e.items;if(n&&clearTimeout(n),this.singleColumnSearchTimeout=setTimeout(()=>{t.value="",this.singleColumnSearchTimeout=void 0},1e3),t.value.length>=3){const e=t.value.substring(t.value.length-2);return t.value=e,void this.selectSingleColumn()}const o=i.find(({text:e})=>e.replace(/^0+/,"")===t.value);if(o)e.value=o.value;else if(2===t.value.length){const e=t.value.substring(t.value.length-1);t.value=e,this.selectSingleColumn()}},this.searchColumn=(t,e,n="start")=>{let i;const o="start"===n?/^0+/:/0$/;i=t.items.find(({text:t})=>t.replace(o,"")===e),i&&(t.value=i.value)},this.selectMultiColumn=()=>{const{inputEl:t,el:e}=this;if(!t)return;const n=Array.from(e.querySelectorAll("ion-picker-column-internal")).filter(t=>t.numericInput),i=n[0],o=n[1];let r=t.value;switch(r.length){case 1:this.searchColumn(i,r);break;case 2:const e=t.value.substring(0,1);if(r="0"===e||"1"===e?t.value:e,this.searchColumn(i,r),1===r.length){const e=t.value.substring(t.value.length-1);this.searchColumn(o,e,"end")}break;case 3:const n=t.value.substring(0,1);r="0"===n||"1"===n?t.value.substring(0,2):n,this.searchColumn(i,r);const s=t.value.substring(1===r.length?1:2);this.searchColumn(o,s,"end");break;case 4:const a=t.value.substring(0,1);r="0"===a||"1"===a?t.value.substring(0,2):a,this.searchColumn(i,r);const l=t.value.substring(1===r.length?1:2,t.value.length);this.searchColumn(o,l,"end");break;default:const u=t.value.substring(t.value.length-4);t.value=u,this.selectMultiColumn()}},this.onInputChange=()=>{const{inputMode:t,inputEl:e,inputModeColumn:n}=this;!t||!e||(n?this.selectSingleColumn():this.selectMultiColumn())},this.emitInputModeChange=()=>{const{inputMode:t,inputModeColumn:e}=this;this.ionInputModeChange.emit({inputMode:t,inputModeColumn:e})}}componentWillLoad(){(0,o.g)(this.el).addEventListener("focusin",this.onFocusIn),(0,o.g)(this.el).addEventListener("focusout",this.onFocusOut)}render(){return(0,i.h)(i.H,{onPointerDown:t=>this.onPointerDown(t),onClick:()=>this.onClick()},(0,i.h)("input",{"aria-hidden":"true",tabindex:-1,inputmode:"numeric",type:"number",ref:t=>this.inputEl=t,onInput:()=>this.onInputChange(),onBlur:()=>this.exitInputMode()}),(0,i.h)("div",{class:"picker-before"}),(0,i.h)("div",{class:"picker-after"}),(0,i.h)("div",{class:"picker-highlight",ref:t=>this.highlightEl=t}),(0,i.h)("slot",null))}get el(){return(0,i.i)(this)}};r.style={ios:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;z-index:1;pointer-events:none}:host .picker-before{left:0;top:0;height:83px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-after{left:0;top:116px;height:84px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .picker-highlight{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-highlight{background:var(--ion-color-step-150, #eeeeef)}",md:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;z-index:1;pointer-events:none}:host .picker-before{left:0;top:0;height:83px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-after{left:0;top:116px;height:84px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .picker-highlight{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), color-stop(90%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), color-stop(90%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}"}}}]);