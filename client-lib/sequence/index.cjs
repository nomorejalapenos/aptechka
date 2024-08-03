"use strict";var x=(s,n,e)=>{if(!n.has(s))throw TypeError("Cannot "+e)};var t=(s,n,e)=>(x(s,n,"read from private field"),e?e.call(s):n.get(s)),c=(s,n,e)=>{if(n.has(s))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(s):n.set(s,e)},l=(s,n,e,i)=>(x(s,n,"write to private field"),i?i.call(s,e):n.set(s,e),e);var I=(s,n,e)=>new Promise((i,f)=>{var w=o=>{try{u(e.next(o))}catch(r){f(r)}},y=o=>{try{u(e.throw(o))}catch(r){f(r)}},u=o=>o.done?i(o.value):Promise.resolve(o.value).then(w,y);u((e=e.apply(s,n)).next())});Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const _=require("../canvas/index.cjs"),P=require("../css-property/index.cjs"),L=require("../element-resizer/index.cjs");require("../window-resizer/index.cjs");require("../Store-Cr3VaD9G.cjs");const B=require("../browser-CpzFX2xg.cjs"),R=require("../canvas-CU5Xjahf.cjs"),H=require("../source/index.cjs");function M(s){const n=s.match(/\{([\d-]+)\}/);if(n){const e=n[1].split("-");if(e.length===2){const i=parseInt(e[0],10),f=parseInt(e[1],10);return{start:i,end:f}}}return null}var h,b,S,m,d,g,E,p,a,v;class z extends H.SourceElement{constructor(e){super();c(this,h,[]);c(this,b,new P.CSSProperty(this,"--fit","contain"));c(this,S,new P.CSSProperty(this,"--autoplay",!1));c(this,m,new P.CSSProperty(this,"--offset-x",.5));c(this,d,new P.CSSProperty(this,"--offset-y",.5));c(this,g,null);c(this,E,0);c(this,p,1);c(this,a,()=>{if(t(this,h).length){const e=t(this,h)[0];t(this,b).current==="cover"?l(this,g,R.cover(e.naturalWidth,e.naturalHeight,this.consumerElement.width,this.consumerElement.height,t(this,m).current,t(this,d).current)):l(this,g,R.contain(e.naturalWidth,e.naturalHeight,this.consumerElement.width,this.consumerElement.height,t(this,m).current,t(this,d).current))}});c(this,v,e=>{if(this.status.isFalse("loaded")||!t(this,g))return;e.detail.context.clearRect(0,0,e.detail.width,e.detail.height);const i=t(this,h)[t(this,E)];i&&e.detail.context.drawImage(i,...t(this,g)),t(this,S).current&&l(this,E,(t(this,E)+1)%t(this,h).length)});B.isBrowser&&(l(this,p,parseInt(((e==null?void 0:e.pad)||this.getAttribute("pad")||"1").toString())),t(this,b).subscribe(t(this,a)),t(this,m).subscribe(t(this,a)),t(this,d).subscribe(t(this,a)),this.addEventListener("sourceCapture",i=>{this.consumerElement.addEventListener("canvasRender",t(this,v))}),this.addEventListener("sourceRelease",i=>{this.consumerElement.removeEventListener("canvasRender",t(this,v))}))}setProgress(e){t(this,h).length&&l(this,E,Math.floor((t(this,h).length-1)*e))}connectedCallback(){super.connectedCallback(),t(this,S).observe(),t(this,b).observe(),t(this,m).observe(),t(this,d).observe(),L.elementResizer.subscribe(this,t(this,a))}disconnectedCallback(){super.disconnectedCallback(),t(this,S).unobserve(),t(this,b).unobserve(),t(this,m).unobserve(),t(this,d).unobserve(),l(this,h,[]),L.elementResizer.unsubscribe(t(this,a)),this.consumerElement.removeEventListener("canvasRender",t(this,v))}createConsumer(){return new _.CanvasElement}consumeSource(e){return I(this,null,function*(){var i,f,w,y;if(e){this.consumerElement.removeEventListener("canvasRender",t(this,v));const u=[],o=M(e);if(o)for(let r=o.start;r<=o.end;r++){const q=e.replace(/\{([^}]+)\}/,r.toString().padStart(t(this,p),"0")),C=new Image;C.src=q,u.push(C)}else{const r=new Image;r.src=e,u.push(r)}try{yield Promise.all(u.map((r,q)=>new Promise((C,k)=>{r.onload=()=>{C()},r.onerror=W=>{k(`${r.src} Image not found`)}}))),l(this,h,u),t(this,a).call(this),(f=(i=this.consumerElement).onload)==null||f.call(i,new Event("load")),this.isLazy||this.consumerElement.addEventListener("canvasRender",t(this,v))}catch(r){console.error(r),(y=(w=this.consumerElement).onerror)==null||y.call(w,new Event("error"))}}})}}h=new WeakMap,b=new WeakMap,S=new WeakMap,m=new WeakMap,d=new WeakMap,g=new WeakMap,E=new WeakMap,p=new WeakMap,a=new WeakMap,v=new WeakMap;customElements.get("e-sequence")||customElements.define("e-sequence",z);exports.SequenceElement=z;
