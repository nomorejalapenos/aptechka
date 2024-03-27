"use strict";var I=(i,e,s)=>{if(!e.has(i))throw TypeError("Cannot "+s)};var t=(i,e,s)=>(I(i,e,"read from private field"),s?s.call(i):e.get(i)),h=(i,e,s)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,s)},n=(i,e,s,o)=>(I(i,e,"write to private field"),o?o.call(i,s):e.set(i,s),s);var R=(i,e,s)=>(I(i,e,"access private method"),s);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const ot=require("../css-unit-parser/index.cjs"),K=require("../ladder/index.cjs"),F=require("../order/index.cjs"),at=require("../scroll-entries/index.cjs"),G=require("../ticker/index.cjs"),J=require("../browser-CpzFX2xg.cjs"),N=require("../dom-qY2LdCVL.cjs"),L=require("../layout-8ryRAMGJ.cjs"),Q=require("../element-resizer/index.cjs"),j=require("../window-resizer/index.cjs");function tt(i){const e=Math.sqrt(i.m11*i.m11+i.m12*i.m12+i.m13*i.m13),s=Math.sqrt(i.m21*i.m21+i.m22*i.m22+i.m23*i.m23),o=Math.sqrt(i.m31*i.m31+i.m32*i.m32+i.m33*i.m33),X=Math.atan2(i.m32,i.m33),Y=Math.atan2(-i.m31,Math.sqrt(i.m32*i.m32+i.m33*i.m33)),V=Math.atan2(i.m21,i.m11),u=i.m41,C=i.m42*-1,O=i.m43;return{scaleX:e,scaleY:s,scaleZ:o,rotationX:X,rotationY:Y,rotationZ:V,translationX:u,translationY:C,translationZ:O}}var a,f,p,M,H,q,x,v,Z,y,_,E,d,S,b,P,T,B,z,g,m,c,r,l,A,$,k,et,D,st,U,it,w,W;class ct{constructor(e,s){h(this,A);h(this,k);h(this,D);h(this,U);h(this,a,null);h(this,f,null);h(this,p,[]);h(this,M,"auto");h(this,H,"top");h(this,q,!1);h(this,x,!0);h(this,v,!0);h(this,Z,!0);h(this,y,0);h(this,_,0);h(this,E,0);h(this,d,0);h(this,S,0);h(this,b,0);h(this,P,0);h(this,T,0);h(this,B,0);h(this,z,{x:0,y:0,z:0});h(this,g,{x:0,y:0,z:0});h(this,m,{x:1,y:1,z:1});h(this,c,new K.Ladder({x:0,y:0,z:0}));h(this,r,new K.Ladder({x:0,y:0,z:0}));h(this,l,new K.Ladder({x:0,y:0,z:0}));h(this,w,()=>{J.isBrowser&&R(this,D,st).call(this)});h(this,W,()=>{R(this,U,it).call(this),R(this,A,$).call(this)});J.isBrowser&&(n(this,a,N.getElement(e)||document.body),n(this,f,N.getElement(s==null?void 0:s.containerElement)||document.body),n(this,M,(s==null?void 0:s.scrollAxis)||"auto"),n(this,H,(s==null?void 0:s.frontSide)||"top"),n(this,q,(s==null?void 0:s.cartesian)||!1),n(this,x,(s==null?void 0:s.sizeStep)!==void 0?s.sizeStep:!0),n(this,v,(s==null?void 0:s.positionStep)!==void 0?s.positionStep:!0),n(this,Z,(s==null?void 0:s.transformStep)!==void 0?s.transformStep:!0),t(this,l).setStep("_size","+",{x:1,y:1,z:1}),t(this,r).setStep("_position","+",{x:0,y:0,z:0}),t(this,l).setStep("_scale","*",{x:1,y:1,z:1}),t(this,r).setStep("_translation","+",{x:0,y:0,z:0}),t(this,c).setStep("_rotation","+",{x:0,y:0,z:0}),addEventListener("DOMContentLoaded",()=>{at.scrollEntries.getAll(this.element).forEach(o=>{this.setScrollStep(()=>o)})}),G.ticker.subscribe(t(this,W),{order:F.TICK_ORDER.LAYOUT_BOX,culling:s!=null&&s.culling?this.element:void 0}),Q.elementResizer.subscribe(this.element,t(this,w)),j.windowResizer.subscribe(t(this,w),F.RESIZE_ORDER.LAYOUT_BOX))}get element(){return t(this,a)}get containerElement(){return t(this,f)}get position(){return t(this,r).current}get rotation(){return t(this,c).current}get scale(){return t(this,l).current}get left(){return t(this,S)}get top(){return t(this,d)}get front(){return t(this,b)}get width(){return t(this,y)}get height(){return t(this,_)}get depth(){return t(this,E)}bindObject(e){e.position&&t(this,r).bind(e.position),e.rotation&&t(this,c).bind(e.rotation),e.scale&&t(this,l).bind(e.scale)}unbindObject(e){e.position&&t(this,r).unbind(e.position),e.rotation&&t(this,c).unbind(e.rotation),e.scale&&t(this,l).unbind(e.scale)}setScrollStep(e){return t(this,p).includes(e)||t(this,p).push(e),()=>this.deleteScrollStep(e)}deleteScrollStep(e){n(this,p,t(this,p).filter(s=>s!==e))}destroy(){G.ticker.unsubscribe(t(this,W)),Q.elementResizer.unsubscribe(t(this,w)),j.windowResizer.unsubscribe(t(this,w)),t(this,r).close(),t(this,c).close(),t(this,l).close()}setPositionStep(...e){t(this,r).setStep(...e)}getPositionStep(...e){return t(this,r).getStepValue(...e)}setRotationStep(...e){t(this,c).setStep(...e)}getRotationStep(...e){return t(this,c).getStepValue(...e)}setScaleStep(...e){t(this,l).setStep(...e)}getScaleStep(...e){return t(this,l).getStepValue(...e)}deletePositionStep(...e){t(this,r).deleteStep(...e)}deleteRotationStep(...e){t(this,c).deleteStep(...e)}deleteScaleStep(...e){t(this,l).deleteStep(...e)}}a=new WeakMap,f=new WeakMap,p=new WeakMap,M=new WeakMap,H=new WeakMap,q=new WeakMap,x=new WeakMap,v=new WeakMap,Z=new WeakMap,y=new WeakMap,_=new WeakMap,E=new WeakMap,d=new WeakMap,S=new WeakMap,b=new WeakMap,P=new WeakMap,T=new WeakMap,B=new WeakMap,z=new WeakMap,g=new WeakMap,m=new WeakMap,c=new WeakMap,r=new WeakMap,l=new WeakMap,A=new WeakSet,$=function(){t(this,l).calculate(),t(this,r).calculate(),t(this,c).calculate()},k=new WeakSet,et=function(){t(this,l).setStep("_size","+",{x:t(this,x)?t(this,y):1,y:t(this,x)?t(this,_):1,z:t(this,x)?t(this,E):1});const e=t(this,v)?t(this,P):0,s=t(this,v)?t(this,T):0,o=t(this,v)?t(this,B):0;t(this,r).setStep("_position","+",{x:e,y:s,z:o}),t(this,Z)?(t(this,l).setStep("_scale","*",{x:t(this,m).x,y:t(this,m).y,z:t(this,m).z}),t(this,r).setStep("_translation","+",{x:t(this,z).x,y:t(this,z).y,z:t(this,z).z}),t(this,c).setStep("_rotation","+",{x:t(this,g).x,y:t(this,g).y,z:t(this,g).z})):(t(this,l).setStep("_scale","*",{x:1,y:1,z:1}),t(this,r).setStep("_translation","+",{x:0,y:0,z:0}),t(this,c).setStep("_rotation","+",{x:0,y:0,z:0}))},D=new WeakSet,st=function(){const e=getComputedStyle(t(this,a));n(this,y,Math.max(t(this,a).clientWidth,1)),n(this,_,Math.max(t(this,a).clientHeight,1)),n(this,E,Math.max(ot.cssUnitParser.parse(e.getPropertyValue("--depth")||"0px"),1));const s=L.getCumulativeOffsetLeft(t(this,f)),o=L.getCumulativeOffsetTop(t(this,f)),X=t(this,f).clientWidth,Y=t(this,f).clientHeight;if(n(this,S,L.getCumulativeOffsetLeft(t(this,a))-s),n(this,d,L.getCumulativeOffsetTop(t(this,a))-o),t(this,M)==="z"){const C=t(this,S)/X,O=t(this,d)/Y;n(this,S,(C-Math.floor(C))*X),n(this,d,(O-Math.floor(O))*Y),t(this,H)==="left"?n(this,b,L.getCumulativeOffsetLeft(t(this,a))-s-t(this,S)):n(this,b,L.getCumulativeOffsetTop(t(this,a))-o-t(this,d))}if(n(this,S,t(this,S)+t(this,a).clientLeft),n(this,d,t(this,d)+t(this,a).clientTop),t(this,q)){const C=Math.round(X/2),O=Math.round(Y/2),ht=t(this,y)?Math.round(t(this,y)/2):0,nt=t(this,_)?Math.round(t(this,_)/2):0,rt=t(this,S)-C+ht,lt=(t(this,d)-O+nt)*-1;n(this,P,rt),n(this,T,lt)}else n(this,P,t(this,S)),n(this,T,t(this,d));n(this,B,t(this,b)*-1);const V=new WebKitCSSMatrix(e.transform),u=tt(V);t(this,z).x=u.translationX,t(this,z).y=u.translationY,t(this,z).z=u.translationZ,t(this,m).x=u.scaleX,t(this,m).y=u.scaleY,t(this,m).z=u.scaleZ,t(this,g).x=u.rotationX,t(this,g).y=u.rotationY,t(this,g).z=u.rotationZ,R(this,k,et).call(this),R(this,A,$).call(this)},U=new WeakSet,it=function(){for(let e=0;e<t(this,p).length;e++){const s=t(this,p)[e]();let o=s.axis;t(this,M)!=="auto"&&(o=t(this,M)),t(this,r).setStep(`_scroll_${e}`,"+",{[o]:s.value*(o==="x"?-1:t(this,q)?1:-1)})}},w=new WeakMap,W=new WeakMap;exports.LayoutBox=ct;exports.decomposeCSSMatrix=tt;
