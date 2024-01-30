"use strict";var N=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var r=(s,t,e)=>(N(s,t,"read from private field"),e?e.call(s):t.get(s)),a=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},i=(s,t,e,u)=>(N(s,t,"write to private field"),u?u.call(s,e):t.set(s,e),e);var R=(s,t,e)=>(N(s,t,"access private method"),e);const z=require("./browser-QbF6EW-w.cjs");var l,o,S;class C{constructor(){a(this,l,null);a(this,o,void 0);a(this,S,"");z.isBrowser&&(i(this,o,document.documentElement.getAttribute("data-project")||void 0),i(this,S,r(this,o)?r(this,o)+"-store-registry":"store-registry"))}get projectName(){return r(this,o)}get localStoreRegistryName(){return r(this,S)}get loadedState(){return r(this,l)}saveState(){const t=this.getState(),e=JSON.stringify(t);localStorage.setItem(r(this,S),e)}loadState(t=localStorage.getItem(r(this,S))){t&&(typeof t=="string"?i(this,l,JSON.parse(t)):i(this,l,t),c.current.forEach(e=>{this.updateStore(e)}))}resetState(){c.current.forEach(t=>{t.reset()}),this.saveState()}updateStore(t){var u,p;if(!Array.isArray((u=r(this,l))==null?void 0:u.stores))return t;const e=t.passport;if(e){const w=(p=r(this,l))==null?void 0:p.stores.find(A=>A.name===e.name);w&&(t.current=w.value)}return t}getState(){const t={stores:[]};return c.current.forEach(e=>{e.passport&&t.stores.push({value:e.current,name:e.passport.name})}),t}}l=new WeakMap,o=new WeakMap,S=new WeakMap;const E=new C;var n,d,g,f,y,h,m,b,v,q;class j{constructor(t,e){a(this,v);a(this,n,void 0);a(this,d,void 0);a(this,g,void 0);a(this,f,void 0);a(this,y,void 0);a(this,h,new Set);a(this,m,void 0);a(this,b,void 0);i(this,n,e==null?void 0:e.passport),i(this,d,t),i(this,g,void 0),i(this,f,t),i(this,y,(e==null?void 0:e.equalityCheck)||((u,p)=>u===p)),i(this,m,(e==null?void 0:e.validate)||(u=>u)),i(this,b,(e==null?void 0:e.skipSubscribeNotification)||!1),r(this,n)&&E.updateStore(this)}get passport(){return r(this,n)}get initial(){return r(this,d)}get previous(){return r(this,g)}get current(){return r(this,f)}set current(t){r(this,y).call(this,r(this,f),t)||(i(this,g,r(this,f)),i(this,f,r(this,m).call(this,t)),R(this,v,q).call(this))}get subscribers(){return r(this,h)}get entry(){return{current:r(this,f),previous:r(this,g)}}subscribe(t){return r(this,n)&&!r(this,h).size&&I(this),r(this,h).add(t),r(this,b)||t(this.entry),()=>{this.unsubscribe(t)}}unsubscribe(t){r(this,h).delete(t),r(this,n)&&!r(this,h).size&&k(this)}reset(){this.current=this.initial}close(){r(this,h).clear(),r(this,n)&&k(this)}}n=new WeakMap,d=new WeakMap,g=new WeakMap,f=new WeakMap,y=new WeakMap,h=new WeakMap,m=new WeakMap,b=new WeakMap,v=new WeakSet,q=function(){for(const t of r(this,h))t(this.entry)};const c=new j([]);function I(s){c.current.find(t=>t.passport.name===s.passport.name)||(c.current=[...c.current,s])}function k(s){c.current.includes(s)&&(c.current=c.current.filter(t=>t!==s))}exports.Store=j;exports.activeStores=c;exports.storeRegistry=E;
