"use strict";var W=Object.defineProperty;var D=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var M=(i,s,t)=>s in i?W(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t,T=(i,s)=>{for(var t in s||(s={}))A.call(s,t)&&M(i,t,s[t]);if(D)for(var t of D(s))F.call(s,t)&&M(i,t,s[t]);return i};var _=(i,s,t)=>{if(!s.has(i))throw TypeError("Cannot "+t)};var e=(i,s,t)=>(_(i,s,"read from private field"),t?t.call(i):s.get(i)),n=(i,s,t)=>{if(s.has(i))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(i):s.set(i,t)},c=(i,s,t,m)=>(_(i,s,"write to private field"),m?m.call(i,t):s.set(i,t),t);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../Store-Cr3VaD9G.cjs");const q=require("../coordinates-D8Np3cPD.cjs"),G=require("../dom-JBOkFLTh.cjs"),k=require("../math-GDWEqu7y.cjs");require("../ticker/index.cjs");const R=require("../Damped-Da3EnNN4.cjs"),H=require("../element-resizer/index.cjs"),j=require("../window-resizer/index.cjs"),P=require("../css-property/index.cjs");var o,a,l,d,y,u,b,x,f,w,C,p;class B{constructor(s){n(this,o,void 0);n(this,a,void 0);n(this,l,void 0);n(this,d,void 0);n(this,y,void 0);n(this,u,void 0);n(this,b,0);n(this,x,0);n(this,f,s=>{e(this,d).set(1)});n(this,w,s=>{e(this,d).set(0)});n(this,C,s=>{const t=q.getPointerPosition(s,e(this,o).getBoundingClientRect()),m={width:e(this,b),height:e(this,x)},h={x:t.x,y:t.y};if(e(this,y)){const z=q.screenToCartesian(h,m);h.x=z.x,h.y=z.y}if(e(this,u)){const z=q.normalize(h,m);h.x=k.clamp(z.x*2,-1,1),h.y=k.clamp(z.y*2,-1,1)}e(this,a).set(h.x),e(this,l).set(h.y)});n(this,p,()=>{c(this,b,this.element.clientWidth),c(this,x,this.element.clientHeight);let s=0,t=0,m=0,h=0;e(this,y)?e(this,u)?(s=-1,t=1,m=-1,h=1):(s=e(this,b)/2*-1,t=e(this,b)/2*1,m=e(this,x)/2*-1,h=e(this,x)/2*1):e(this,u)?(s=0,t=1,m=0,h=1):(s=0,t=e(this,b),m=0,h=e(this,x)),e(this,a).min=s,e(this,a).max=t,e(this,l).min=m,e(this,l).max=h});c(this,o,G.getElement(s.element)),c(this,a,new R.Damped(0,s.damped)),c(this,l,new R.Damped(0,s.damped)),c(this,d,new R.Damped(0,T({min:0,max:1},s.damped))),c(this,y,s.cartesian||!1),c(this,u,s.normalize||!1)}get element(){return e(this,o)}get x(){return e(this,a)}get y(){return e(this,l)}get z(){return e(this,d)}get cartesian(){return e(this,y)}set cartesian(s){c(this,y,s),e(this,p).call(this)}get normalize(){return e(this,u)}set normalize(s){c(this,u,s),e(this,p).call(this)}connect(){e(this,o).addEventListener("pointerenter",e(this,f)),e(this,o).addEventListener("pointerleave",e(this,w)),e(this,o).addEventListener("pointermove",e(this,C)),H.elementResizer.subscribe(e(this,o),e(this,p)),j.windowResizer.subscribe(e(this,p))}disconnect(){e(this,o).removeEventListener("pointerenter",e(this,f)),e(this,o).removeEventListener("pointerleave",e(this,w)),e(this,o).removeEventListener("pointermove",e(this,C)),H.elementResizer.unsubscribe(e(this,p)),j.windowResizer.unsubscribe(e(this,p)),e(this,a).reset(),e(this,l).reset(),e(this,d).reset()}}o=new WeakMap,a=new WeakMap,l=new WeakMap,d=new WeakMap,y=new WeakMap,u=new WeakMap,b=new WeakMap,x=new WeakMap,f=new WeakMap,w=new WeakMap,C=new WeakMap,p=new WeakMap;var r,g,v,S,E,L;class O extends HTMLElement{constructor(){super();n(this,r,void 0);n(this,g,new P.CSSProperty(this,"--damping",20));n(this,v,new P.CSSProperty(this,"--mass",0));n(this,S,new P.CSSProperty(this,"--stiffness",0));n(this,E,new P.CSSProperty(this,"--cartesian",!1));n(this,L,new P.CSSProperty(this,"--normalize",!1));c(this,r,new B({element:this})),e(this,g).subscribe(t=>{e(this,r).x.damping=t.current,e(this,r).y.damping=t.current,e(this,r).z.damping=t.current}),e(this,E).subscribe(t=>{e(this,r).cartesian=t.current}),e(this,L).subscribe(t=>{e(this,r).normalize=t.current}),e(this,v).subscribe(t=>{e(this,r).x.mass=t.current,e(this,r).y.mass=t.current,e(this,r).z.mass=t.current}),e(this,S).subscribe(t=>{e(this,r).x.stiffness=t.current,e(this,r).y.stiffness=t.current,e(this,r).z.stiffness=t.current}),e(this,r).x.subscribe(t=>{this.style.setProperty("--x",t.current.toString())}),e(this,r).y.subscribe(t=>{this.style.setProperty("--y",t.current.toString())}),e(this,r).z.subscribe(t=>{this.style.setProperty("--z",t.current.toString())})}get pointer(){return e(this,r)}connectedCallback(){e(this,r).connect(),e(this,g).observe(),e(this,v).observe(),e(this,S).observe()}disconnectedCallback(){e(this,r).disconnect(),e(this,g).unobserve(),e(this,v).unobserve(),e(this,S).unobserve(),this.style.removeProperty("--x"),this.style.removeProperty("--y"),this.style.removeProperty("--z")}}r=new WeakMap,g=new WeakMap,v=new WeakMap,S=new WeakMap,E=new WeakMap,L=new WeakMap;customElements.get("e-pointer")||customElements.define("e-pointer",O);exports.Pointer=B;exports.PointerElement=O;
