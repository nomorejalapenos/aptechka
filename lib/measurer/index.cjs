"use strict";var O=Object.defineProperty;var m=(t,e,s)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>(m(t,typeof e!="symbol"?e+"":e,s),s),v=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var r=(t,e,s)=>(v(t,e,"read from private field"),s?s.call(t):e.get(t)),n=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},a=(t,e,s,h)=>(v(t,e,"write to private field"),h?h.call(t,s):e.set(t,s),s);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const b=require("../browser-QbF6EW-w.cjs"),d=require("../layout-rZzbsLPd.cjs");var i,u,l,o;class f{constructor(e){n(this,i,void 0);n(this,u,null);n(this,l,0);c(this,"value",e=>e?e(r(this,l)):r(this,l));n(this,o,()=>{a(this,l,this.handleResize()),r(this,i).isConnected||this.destroy()});a(this,i,e),b.isBrowser&&(a(this,u,new ResizeObserver(r(this,o))),r(this,u).observe(e))}get element(){return r(this,i)}destroy(){r(this,u).disconnect()}}i=new WeakMap,u=new WeakMap,l=new WeakMap,o=new WeakMap;class C extends f{handleResize(){return d.getCumulativeOffsetLeft(this.element)}}class z extends f{handleResize(){return d.getCumulativeOffsetTop(this.element)}}exports.CumulativeOffsetLeft=C;exports.CumulativeOffsetTop=z;exports.Measurer=f;
