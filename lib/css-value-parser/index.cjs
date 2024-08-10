"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("../css-unit-parser/index.cjs"),e=class e{parse(s,i){var f;const t=parseFloat(s),n=!isNaN(t),r=n?(f=s.match(/[a-z]+$/i))==null?void 0:f[0]:void 0;return n&&!r?t:r?r==="px"?t:r==="hp"?((i==null?void 0:i.offsetHeight)||0)*(t/100):r==="wp"?((i==null?void 0:i.offsetWidth)||0)*(t/100):r&&e.CSS_UNITS.has(r)?a.cssUnitParser.parse(s):s:s.includes("calc")?s.includes("raw!")?s.replace("raw!",""):a.cssUnitParser.parse(s):s==="true"?!0:s==="false"?!1:s}};e.CSS_UNITS=new Set(["px","rem","vw","vh","vmin","vmax","em","cm","mm","Q","in","pc","pt","ex","ch","lh","rlh","vb","vi","svw","svh","lvw","lvh","dvw","dvh"]);let c=e;const h=new c;exports.cssValueParser=h;
