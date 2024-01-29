"use strict";var g=(r,s,e)=>{if(!s.has(r))throw TypeError("Cannot "+e)};var c=(r,s,e)=>(g(r,s,"read from private field"),e?e.call(r):s.get(r)),h=(r,s,e)=>{if(s.has(r))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(r):s.set(r,e)},a=(r,s,e,t)=>(g(r,s,"write to private field"),t?t.call(r,e):s.set(r,e),e);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("../Store-WXFmsaEI.cjs"),x=require("../function-QP7IreXR.cjs");require("../browser-QbF6EW-w.cjs");var d;class D extends u.Store{constructor(e,t,o){super(null,o);h(this,d,void 0);a(this,d,e.subscribe(i=>{this.current=t(i.current)}))}close(){super.close(),c(this,d).call(this)}}d=new WeakMap;var b;class R extends u.Store{constructor(e,t,o){super(null,o);h(this,b,void 0);a(this,b,e.subscribe(i=>{const l=[];i.current.forEach((y,f)=>{var v;i.current[f]===((v=i.previous)==null?void 0:v[f])&&this.current[f]?l.push(this.current[f]):l.push(t(y))}),this.current=l}))}close(){super.close(),c(this,b).call(this)}}b=new WeakMap;var p,n;class m extends u.Store{constructor(e,t,o){super(e,o);h(this,p,void 0);h(this,n,void 0);a(this,n,new u.Store(!1)),a(this,p,t),this.refetch()}get isPending(){return c(this,n)}refetch(){c(this,n).current=!0,c(this,p).call(this).then(e=>{c(this,n).current=!1,this.current=e})}}p=new WeakMap,n=new WeakMap;var S;class q extends u.Store{constructor(e,t,o){super(null,o);h(this,S,[]);const i=x.debounce(()=>{this.current=t()},0);e.forEach(l=>{c(this,S).push(l.subscribe(()=>{i()}))})}close(){super.close(),c(this,S).forEach(e=>e())}}S=new WeakMap;exports.Store=u.Store;exports.activeStores=u.activeStores;exports.storeRegistry=u.storeRegistry;exports.Composed=q;exports.Derived=D;exports.DerivedArray=R;exports.Resource=m;
