"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const b=require("../attributes-Bf2svn4j.cjs"),x=require("../browser-CpzFX2xg.cjs"),p=require("../dom-qY2LdCVL.cjs"),a=require("../easings-DsS5-Kqc.cjs"),y=require("../events-Crwi8fz6.cjs"),E=require("../file-EevnUtRj.cjs"),g=require("../function-MthRj-GJ.cjs"),h=require("../layout-8ryRAMGJ.cjs"),o=require("../math-GDWEqu7y.cjs"),f=require("../number-yVpzMdbQ.cjs"),u=require("../object-BZELAoVj.cjs"),I=require("../polyfills-CrcS4RcO.cjs"),l=require("../string-vBu90jhV.cjs"),C=require("../style-At6aDoqG.cjs");function S(t,e,...n){return[...t.slice(0,e),...n,...t.slice(e)]}function w(t,e){const n=t.measureText(e),i=n.actualBoundingBoxAscent+n.actualBoundingBoxDescent,s=n.width;return{height:i,width:s}}function Q(t){return Math.floor(t)+.5}function T(t,e,n,i,s,r){let m=t/e,O=n/i,c=0,d=0;return s=typeof s=="undefined"?.5:s,r=typeof r=="undefined"?.5:r,m>O?(c=i,d=i*m):(d=n,c=n/m),[(n-d)*s,(i-c)*r,d,c]}function v(t,e){return t.x<e.x+e.width&&t.x>e.x&&t.y<e.y+e.height&&t.y>e.y}function q(t,e){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)<e.radius}function D(t,e,n=!1){let i=t.x-e.width/2,s=e.height/2-t.y;return n&&(i=i/(e.width/2),s=s/(e.height/2)),{x:i,y:s}}function P(t,e){const n=t.x/e.x,i=t.y/e.y;return{x:n,y:i}}function R(t,e){return e=e||{x:0,y:0,width:document.documentElement.offsetWidth,height:innerHeight},{x:(t.x-e.x)/e.width*e.width,y:(t.y-e.y)/e.height*e.height}}function A(...t){const e={};return Array.from(document.styleSheets).forEach(n=>{Array.from(n.cssRules).forEach(i=>{i instanceof CSSStyleRule&&i.selectorText===":root"&&t.forEach(s=>{const r=i.styleMap.get(s);r?e[s]=r.toString():console.warn(`variable named ${s} not found`)})})}),e}function N(t){const e=window.atob(t);return decodeURIComponent(window.escape(e))}function z(t){const e=window.unescape(encodeURIComponent(t));return window.btoa(e)}exports.parseAttribute=b.parseAttribute;exports.parseAttributeValue=b.parseAttributeValue;exports.isBrowser=x.isBrowser;exports.findParentElement=p.findParentElement;exports.findScrollParentElement=p.findScrollParentElement;exports.getElement=p.getElement;exports.easeInCubic=a.easeInCubic;exports.easeInExpo=a.easeInExpo;exports.easeInOutCubic=a.easeInOutCubic;exports.easeInOutExpo=a.easeInOutExpo;exports.easeInOutQuad=a.easeInOutQuad;exports.easeInOutQuart=a.easeInOutQuart;exports.easeInOutQuint=a.easeInOutQuint;exports.easeInQuad=a.easeInQuad;exports.easeInQuart=a.easeInQuart;exports.easeInQuint=a.easeInQuint;exports.easeOutCubic=a.easeOutCubic;exports.easeOutExpo=a.easeOutExpo;exports.easeOutQuad=a.easeOutQuad;exports.easeOutQuart=a.easeOutQuart;exports.easeOutQuint=a.easeOutQuint;exports.linear=a.linear;exports.dispatchSizeChangeEvent=y.dispatchSizeChangeEvent;exports.createJSONAndSave=E.createJSONAndSave;exports.debounce=g.debounce;exports.throttle=g.throttle;exports.getCumulativeOffsetLeft=h.getCumulativeOffsetLeft;exports.getCumulativeOffsetTop=h.getCumulativeOffsetTop;exports.getCumulativePosition=h.getCumulativePosition;exports.calculateDistance=o.calculateDistance;exports.calculateDistanceWithRadius=o.calculateDistanceWithRadius;exports.clamp=o.clamp;exports.damp=o.damp;exports.lerp=o.lerp;exports.mapRange=o.mapRange;exports.round=o.round;exports.smootherstep=o.smootherstep;exports.smoothstep=o.smoothstep;exports.step=o.step;exports.preciseNumber=f.preciseNumber;exports.roundNumberTo=f.roundNumberTo;exports.cloneDeep=u.cloneDeep;exports.compareObjects=u.compareObjects;exports.isESClass=u.isESClass;exports.isNullish=u.isNullish;exports.isObject=u.isObject;exports.mergeDeep=u.mergeDeep;exports.mixin=u.mixin;exports.omit=u.omit;exports.pick=u.pick;exports.nullishCoalescing=I.nullishCoalescing;exports.camelToKebab=l.camelToKebab;exports.capitalize=l.capitalize;exports.generateId=l.generateId;exports.kebabToCamel=l.kebabToCamel;exports.snakeToDotted=l.snakeToDotted;exports.toPascalCase=l.toPascalCase;exports.uncapitalize=l.uncapitalize;exports.getElementTransitionDurationMS=C.getElementTransitionDurationMS;exports.getElementTransitionDurationS=C.getElementTransitionDurationS;exports.cover=T;exports.decode=z;exports.dotCircleCollision=q;exports.dotRectCollision=v;exports.encode=N;exports.fixPosition=Q;exports.getPointerPosition=R;exports.getRootVariables=A;exports.insert=S;exports.measureText=w;exports.normalize=P;exports.screenToCartesian=D;
