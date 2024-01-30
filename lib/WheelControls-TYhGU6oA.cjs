"use strict";var b=Object.defineProperty;var x=(t,s,e)=>s in t?b(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var g=(t,s,e)=>(x(t,typeof s!="symbol"?s+"":s,e),e),v=(t,s,e)=>{if(!s.has(t))throw TypeError("Cannot "+e)};var i=(t,s,e)=>(v(t,s,"read from private field"),e?e.call(t):s.get(t)),r=(t,s,e)=>{if(s.has(t))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(t):s.set(t,e)},h=(t,s,e,n)=>(v(t,s,"write to private field"),n?n.call(t,e):s.set(t,e),e);const a=require("./browser-QbF6EW-w.cjs"),m=require("./dom-QhWsdQS2.cjs"),L=require("./notifier/index.cjs");var u;class E{constructor(){r(this,u,new L.Notifier)}get changeEvent(){return i(this,u)}}u=new WeakMap;var c,o;class B extends E{constructor(e){super();r(this,c,null);r(this,o,e=>{const n=e.shiftKey?-1:1;e.code==="Space"?this.changeEvent.notify(n*500):e.code==="ArrowLeft"?this.changeEvent.notify(-1*100):e.code==="ArrowRight"?this.changeEvent.notify(1*100):e.code==="ArrowUp"?this.changeEvent.notify(-1*100):e.code==="ArrowDown"?this.changeEvent.notify(1*100):e.code==="PageUp"?this.changeEvent.notify(-1*1e3):e.code==="PageDown"?this.changeEvent.notify(1*1e3):e.code==="Home"?this.changeEvent.notify("min"):e.code==="End"&&this.changeEvent.notify("max")});a.isBrowser&&h(this,c,e!=null&&e.element&&m.getElement(e.element)||window)}connect(){a.isBrowser&&i(this,c).addEventListener("keydown",i(this,o))}disconnect(){a.isBrowser&&i(this,c).removeEventListener("keydown",i(this,o))}}c=new WeakMap,o=new WeakMap;var d,l,f,w;class C extends E{constructor(e){super();g(this,"axis");g(this,"speed");g(this,"debounce");r(this,d,null);r(this,l,void 0);r(this,f,void 0);r(this,w,e=>{let n=0;if(!(this.axis==="x"&&Math.abs(e.deltaY)>Math.abs(e.deltaX)||this.axis==="y"&&Math.abs(e.deltaX)>Math.abs(e.deltaY)))if(n=(this.axis==="x"?e.deltaX:e.deltaY)*this.speed,e.stopPropagation(),e.preventDefault(),this.debounce){const y=Date.now();if(y-i(this,f)>40&&(n=100*Math.sign(n)),h(this,f,y),Math.abs(n)<100||i(this,l))return;this.changeEvent.notify(n),h(this,l,setTimeout(()=>{h(this,l,void 0)},80))}else this.changeEvent.notify(n)});this.axis=(e==null?void 0:e.axis)||"y",this.speed=(e==null?void 0:e.speed)||1,this.debounce=(e==null?void 0:e.debounce)||!1,h(this,f,Date.now()),a.isBrowser&&h(this,d,e!=null&&e.element&&m.getElement(e.element)||window)}connect(){a.isBrowser&&i(this,d).addEventListener("wheel",i(this,w),{passive:!1})}disconnect(){a.isBrowser&&i(this,d).removeEventListener("wheel",i(this,w))}}d=new WeakMap,l=new WeakMap,f=new WeakMap,w=new WeakMap;exports.Controls=E;exports.KeyboardControls=B;exports.WheelControls=C;
