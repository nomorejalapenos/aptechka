"use strict";var u=(e,r,s)=>{if(!r.has(e))throw TypeError("Cannot "+s)};var i=(e,r,s)=>(u(e,r,"read from private field"),s?s.call(e):r.get(e)),n=(e,r,s)=>{if(r.has(e))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(e):r.set(e,s)},o=(e,r,s,c)=>(u(e,r,"write to private field"),c?c.call(e,s):r.set(e,s),s);const d=require("./Store-D0_rDIsE.cjs");var t;class h extends d.Store{constructor(s,c,l){super(null,l);n(this,t,void 0);o(this,t,s.subscribe(b=>{this.current=c(b.current)}))}close(){super.close(),i(this,t).call(this)}}t=new WeakMap;exports.Derived=h;
