!function(){"use strict";(self.webpackChunkbardiegoponce=self.webpackChunkbardiegoponce||[]).push([[3903],{3903:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return i}});var r=n(8824),a=n(9461);n(960);var i=function(e,t,n,i,o){var u=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){i(e.deltaX/u.innerWidth)},onEnd:function(e){var t=u.innerWidth,n=e.deltaX/t,a=e.velocityX,i=a>=0&&(a>.2||e.deltaX>t/2),c=(i?1-n:n)*t,s=0;if(c>5){var d=c/Math.abs(a);s=Math.min(d,540)}o(i,n<=0?.01:(0,r.k)(0,n,.9999),s)}})}}}])}();