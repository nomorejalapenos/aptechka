"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("../custom-element/index.cjs");require("../resizer/index.cjs");require("../Store-txkR3wXU.cjs");const c=require("../source/index.cjs");require("../browser-QbF6EW-w.cjs");require("../notifier/index.cjs");require("../function-QP7IreXR.cjs");require("../SourceManager-tmQlXkSD.cjs");require("../order/index.cjs");require("../intersector/index.cjs");require("../loading/index.cjs");var o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,a=(u,r,n,t)=>{for(var e=t>1?void 0:t?l(r,n):r,i=u.length-1,m;i>=0;i--)(m=u[i])&&(e=(t?m(r,n,e):m(e))||e);return t&&e&&o(r,n,e),e};exports.ImageElement=class extends c.SourceElement{createConsumer(){return document.createElement("img")}consumeSource(r){this.consumerElement.src=r||""}};exports.ImageElement=a([s.define("e-image")],exports.ImageElement);
