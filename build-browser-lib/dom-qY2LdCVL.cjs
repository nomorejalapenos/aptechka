"use strict";function r(t,e){if(!t)return null;let n=t.parentElement;return t.parentElement instanceof e||(n=r(t.parentElement,e)),n}function l(t,e=document){return typeof t=="string"?e.querySelector(t):t}function u(t,e=null){if(e=e||t,!t||!(t instanceof HTMLElement))return document.body;if(e!==t){const n=getComputedStyle(t);if(n.overflow.includes("auto")||n.overflow.includes("scroll"))return t}return u(t.parentNode,e)}exports.findParentElement=r;exports.findScrollParentElement=u;exports.getElement=l;
