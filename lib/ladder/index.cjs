"use strict";var k=Object.defineProperty;var f=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var p=(s,t,e)=>t in s?k(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,b=(s,t)=>{for(var e in t||(t={}))S.call(t,e)&&p(s,e,t[e]);if(f)for(var e of f(t))g.call(t,e)&&p(s,e,t[e]);return s};var y=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var c=(s,t,e)=>(y(s,t,"read from private field"),e?e.call(s):t.get(s)),h=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},d=(s,t,e,o)=>(y(s,t,"write to private field"),o?o.call(s,e):t.set(s,e),e);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const v=require("../Store-WXFmsaEI.cjs");require("../browser-QbF6EW-w.cjs");var u,l,a;class q extends v.Store{constructor(e){super(e,{equalityCheck:()=>!1});h(this,u,void 0);h(this,l,void 0);h(this,a,void 0);d(this,u,b({},e)),d(this,l,new Map),d(this,a,new Set)}get base(){return c(this,u)}get steps(){return c(this,l)}close(){super.close(),c(this,a).clear(),c(this,l).clear()}bind(e){c(this,a).add(e)}unbind(e){c(this,a).delete(e)}deleteStep(e){this.steps.delete(e)}getStepValue(e){return this.steps.get(e)[1]}setStep(e,o,n){const i={};for(const r in this.current)i[r]=n[r]||0;this.steps.set(e,[o,i])}calculate(){const e={};for(const o in this.base)e[o]=this.base[o];for(const o of this.steps){const n=o[1];if(n[0]==="+")for(const i in this.base){const r=n[1][i];e[i]+=r}else if(n[0]==="*")for(const i in this.base){const r=n[1][i];e[i]*=r}else if(n[0]==="/")for(const i in this.base){const r=n[1][i];e[i]/=r}else if(n[0]==="-")for(const i in this.base){const r=n[1][i];e[i]-=r}}for(const o of c(this,a))for(const n in e)o[n]=e[n];this.current=e}}u=new WeakMap,l=new WeakMap,a=new WeakMap;exports.Ladder=q;
