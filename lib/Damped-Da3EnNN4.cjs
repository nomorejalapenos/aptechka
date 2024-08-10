"use strict";var F=Object.defineProperty,b=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var d=(e,t,s)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,g=(e,t)=>{for(var s in t||(t={}))C.call(t,s)&&d(e,s,t[s]);if(l)for(var s of l(t))O.call(t,s)&&d(e,s,t[s]);return e},f=(e,t)=>b(e,y(t));var p=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var a=(e,t,s)=>(p(e,t,"read from private field"),s?s.call(e):t.get(e)),u=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},n=(e,t,s,r)=>(p(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s);const v=require("./math-GDWEqu7y.cjs"),c=require("./polyfills-CM4SCDTt.cjs"),w=require("./Animation-BInSRYNr.cjs");var i,h;class B extends w.Animation{constructor(s,r){super(s,r);u(this,i,void 0);u(this,h,void 0);this.damping=20,this.stiffness=0,this.mass=0,n(this,i,0),n(this,h,0),this.updateOptions(f(g({},r),{equalize:!0}))}get velocity(){return a(this,i)}get speed(){return a(this,h)}updateOptions(s){this.damping=c.nullishCoalescing(s==null?void 0:s.damping,this.damping),this.mass=c.nullishCoalescing(s==null?void 0:s.mass,this.mass),this.stiffness=c.nullishCoalescing(s==null?void 0:s.stiffness,this.stiffness),super.updateOptions(s)}handleAnimationFrame(s){c.preciseNumber(this.current,6)===c.preciseNumber(this.target,6)&&(this.unlistenAnimationFrame(),this.current=this.target);const r=this.current,q=Math.abs(r-this.target);n(this,h,q/s.timeBetweenFrames);const m=s.timeBetweenFrames/1e3;if(this.mass||this.stiffness){const A=(this.target-this.current)*this.stiffness-a(this,i)*this.damping;n(this,i,a(this,i)+A/this.mass*m),this.current+=a(this,i)*m}else this.current=v.damp(this.current,this.target,this.damping,m)}}i=new WeakMap,h=new WeakMap;exports.Damped=B;
