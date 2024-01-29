"use strict";var oe=Object.defineProperty,se=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var W=(e,t,r)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))ce.call(t,r)&&W(e,r,t[r]);if(K)for(var r of K(t))ae.call(t,r)&&W(e,r,t[r]);return e},s=(e,t)=>se(e,fe(t));var q=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var U=(e,t,r)=>(q(e,t,"read from private field"),r?r.call(e):t.get(e)),a=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},L=(e,t,r,i)=>(q(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);var c=(e,t,r)=>(q(e,t,"access private method"),r);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const w=require("../Store-WXFmsaEI.cjs"),le=require("../browser-QbF6EW-w.cjs"),Y=require("../string-WmNOGq16.cjs");var d,T,z,M,O,g,E,h,R,k,Q,C,X,x,Z,F,_,m,$,v,H,N,j,A,ee,b,V,y,I,P,ne,B,te,D,re,S,J,G,ue;const p=class p{constructor(...t){a(this,T);a(this,M);a(this,g);a(this,h);a(this,k);a(this,C);a(this,x);a(this,F);a(this,m);a(this,v);a(this,N);a(this,A);a(this,b);a(this,y);a(this,P);a(this,B);a(this,D);a(this,S);a(this,G);a(this,d,[]);const r=t[0],i=t[1];if(le.isBrowser)if(typeof r=="string"){const u=document.createElement("div");u.innerHTML=r;const f=u.firstElementChild;L(this,d,[f]),c(this,g,E).call(this,f,i)}else r instanceof HTMLElement?(L(this,d,[r]),c(this,g,E).call(this,r,i)):L(this,d,c(this,T,z).call(this,r))}get rootElements(){return U(this,d)}};d=new WeakMap,T=new WeakSet,z=function(t){const r=[];for(const i in t){const u=i,f=t[u],l=c(this,M,O).call(this,u,f==null?void 0:f.svg);f&&c(this,g,E).call(this,l,f),r.push(l)}return r},M=new WeakSet,O=function(t,r=!1){let i=null;return t.includes("-")?i=new(customElements.get(t)):r?i=document.createElementNS("http://www.w3.org/2000/svg",t):i=document.createElement(t),i},g=new WeakSet,E=function(t,r){for(const i in r){const u=i;u==="class"?c(this,h,R).call(this,t,r[u]):u==="style"?c(this,x,Z).call(this,t,r[u]):u==="events"?c(this,N,j).call(this,t,r[u]):u==="attributes"?c(this,A,ee).call(this,t,r[u]):u==="children"?c(this,y,I).call(this,t,r[u]):u==="shadowChildren"?c(this,y,I).call(this,t.shadowRoot||t,r[u]):u==="parent"&&c(this,G,ue).call(this,t,r[u])}r!=null&&r.created&&r.created(t)},h=new WeakSet,R=function(t,r){if(r){if(typeof r=="string")t.classList.add(r);else if(Array.isArray(r))r.forEach(i=>{c(this,h,R).call(this,t,i)});else if(typeof r=="object")if(r instanceof w.Store)c(this,k,Q).call(this,t,r);else for(const i in r){const u=r[i];u instanceof w.Store?c(this,C,X).call(this,t,i,u):u?t.classList.add(i):t.classList.remove(i)}}else return},k=new WeakSet,Q=function(t,r){r.subscribe(({current:i,previous:u})=>{u&&[u].flat().forEach(f=>{f&&t.classList.remove(f)}),i&&[i].flat().forEach(f=>{f&&t.classList.add(f)})})},C=new WeakSet,X=function(t,r,i){i.subscribe(({current:u})=>{u?t.classList.add(r):t.classList.remove(r)})},x=new WeakSet,Z=function(t,r){if(!r)return;t.tagName==="style"||t.tagName==="STYLE"?c(this,m,$).call(this,t,r):c(this,F,_).call(this,t,r)},F=new WeakSet,_=function(t,r){for(const i in r){const u=i,f=r[u];f instanceof w.Store?f.subscribe(({current:l})=>{c(this,v,H).call(this,t,u,l)}):c(this,v,H).call(this,t,u,f)}},m=new WeakSet,$=function(t,r){for(const i in r){const u=r[i];if(typeof u=="object"&&!(u instanceof w.Store))t.appendChild(new Text(`${i} {`)),c(this,m,$).call(this,t,u),t.appendChild(new Text("}"));else if(u instanceof w.Store){const f=new Text;u.subscribe(l=>{l.current?f.nodeValue=`${Y.camelToKebab(i)}: ${l.current};`:f.nodeValue=""}),t.appendChild(f)}else t.appendChild(new Text(`${Y.camelToKebab(i)}: ${u};`))}},v=new WeakSet,H=function(t,r,i){r.includes("--")?i?t.style.setProperty(r,i):t.style.removeProperty(r):i?t.style[r]=i:t.style[r]=""},N=new WeakSet,j=function(t,r){if(r)for(const i in r){const u=i,f=r[u];typeof f=="object"?t.addEventListener(u,f.callback,f.options):typeof f=="function"&&t.addEventListener(u,f)}},A=new WeakSet,ee=function(t,r){for(const i in r){const u=r[i];u instanceof w.Store?u.subscribe(({current:f})=>{c(this,b,V).call(this,t,i,f)}):c(this,b,V).call(this,t,i,u)}},b=new WeakSet,V=function(t,r,i){var u,f;r in t&&!((f=(u=t.constructor)==null?void 0:u.observedAttributes)!=null&&f.includes(r))?i!=null&&(t[r]=i.toString()):i!=null&&t.setAttribute(r,i.toString())},y=new WeakSet,I=function(t,r){r&&r.forEach(i=>{if(i instanceof w.Store){const u=document.createElement("div");u.style.display="contents",t.appendChild(u),i.subscribe(({current:f})=>{c(this,B,te).call(this,u,c(this,P,ne).call(this,f),Array.from(u.childNodes))})}else if(i instanceof p)t.append(...i.rootElements);else if(typeof i=="string"&&i.trim().startsWith("<")&&i.trim().endsWith(">")){const u=document.createElement("div");u.innerHTML=i,t.append(u.firstElementChild)}else{const u=c(this,S,J).call(this,i);u instanceof Node&&t.append(u)}})},P=new WeakSet,ne=function(t){return[t].flat().map(i=>i instanceof p?i.rootElements:c(this,S,J).call(this,i)).flat().filter(Boolean)},B=new WeakSet,te=function(t,r,i){i.forEach((u,f)=>{if(f<r.length){const l=r[f];c(this,D,re).call(this,u,l)||t.replaceChild(l,u)}else t.removeChild(u)});for(let u=i.length;u<r.length;u++)t.appendChild(r[u])},D=new WeakSet,re=function(t,r){return r?r instanceof Node?t.isEqualNode(r):t.textContent===r.toString():!1},S=new WeakSet,J=function(t){return t instanceof Node?t:t!=null?new Text(String(t)):void 0},G=new WeakSet,ue=function(t,r){if(!r)return;(r instanceof p?r.rootElements[0]:r).appendChild(t)};let n=p;function we(...e){return new n(...e)}function de(...e){return()=>new n(...e)}function ge(e){return new n({a:e})}function pe(e){return new n({abbr:e})}function he(e){return new n({address:e})}function me(e){return new n({area:e})}function ve(e){return new n({article:e})}function be(e){return new n({aside:e})}function ye(e){return new n({audio:e})}function Se(e){return new n({b:e})}function Le(e){return new n({base:e})}function Ee(e){return new n({bdi:e})}function Te(e){return new n({bdo:e})}function Me(e){return new n({blockquote:e})}function ke(e){return new n({body:e})}function Ce(e){return new n({br:e})}function xe(e){return new n({button:e})}function Fe(e){return new n({canvas:e})}function Ne(e){return new n({caption:e})}function Ae(e){return new n({cite:e})}function Pe(e){return new n({code:e})}function Be(e){return new n({col:e})}function De(e){return new n({colgroup:e})}function Ge(e){return new n({data:e})}function qe(e){return new n({datalist:e})}function Re(e){return new n({dd:e})}function $e(e){return new n({del:e})}function He(e){return new n({details:e})}function Ve(e){return new n({dfn:e})}function Ie(e){return new n({dialog:e})}function Je(e){return new n({div:e})}function Ke(e){return new n({dl:e})}function We(e){return new n({dt:e})}function Ue(e){return new n({em:e})}function Ye(e){return new n({embed:e})}function ze(e){return new n({fieldset:e})}function Oe(e){return new n({figcaption:e})}function Qe(e){return new n({figure:e})}function Xe(e){return new n({footer:e})}function Ze(e){return new n({form:e})}function _e(e){return new n({h1:e})}function je(e){return new n({h2:e})}function en(e){return new n({h3:e})}function nn(e){return new n({h4:e})}function tn(e){return new n({h5:e})}function rn(e){return new n({h6:e})}function un(e){return new n({head:e})}function on(e){return new n({header:e})}function sn(e){return new n({hgroup:e})}function fn(e){return new n({hr:e})}function cn(e){return new n({html:e})}function an(e){return new n({i:e})}function ln(e){return new n({iframe:e})}function wn(e){return new n({img:e})}function dn(e){return new n({input:e})}function gn(e){return new n({ins:e})}function pn(e){return new n({kbd:e})}function hn(e){return new n({label:e})}function mn(e){return new n({legend:e})}function vn(e){return new n({li:e})}function bn(e){return new n({link:e})}function yn(e){return new n({main:e})}function Sn(e){return new n({map:e})}function Ln(e){return new n({mark:e})}function En(e){return new n({menu:e})}function Tn(e){return new n({meta:e})}function Mn(e){return new n({meter:e})}function kn(e){return new n({nav:e})}function Cn(e){return new n({noscript:e})}function xn(e){return new n({object:e})}function Fn(e){return new n({ol:e})}function Nn(e){return new n({optgroup:e})}function An(e){return new n({option:e})}function Pn(e){return new n({output:e})}function Bn(e){return new n({p:e})}function Dn(e){return new n({picture:e})}function Gn(e){return new n({pre:e})}function qn(e){return new n({progress:e})}function Rn(e){return new n({q:e})}function $n(e){return new n({rp:e})}function Hn(e){return new n({rt:e})}function Vn(e){return new n({ruby:e})}function In(e){return new n({s:e})}function Jn(e){return new n({samp:e})}function Kn(e){return new n({script:e})}function Wn(e){return new n({search:e})}function Un(e){return new n({section:e})}function Yn(e){return new n({select:e})}function zn(e){return new n({slot:e})}function On(e){return new n({small:e})}function Qn(e){return new n({source:e})}function Xn(e){return new n({span:e})}function Zn(e){return new n({strong:e})}function ie(e){return new n({style:{style:e}})}function _n(e){return new n({sub:e})}function jn(e){return new n({summary:e})}function et(e){return new n({sup:e})}function nt(e){return new n({table:e})}function tt(e){return new n({tbody:e})}function rt(e){return new n({td:e})}function ut(e){return new n({template:e})}function it(e){return new n({textarea:e})}function ot(e){return new n({tfoot:e})}function st(e){return new n({th:e})}function ft(e){return new n({thead:e})}function ct(e){return new n({time:e})}function at(e){return new n({title:e})}function lt(e){return new n({tr:e})}function wt(e){return new n({track:e})}function dt(e){return new n({u:e})}function gt(e){return new n({ul:e})}function pt(e){return new n({var:e})}function ht(e){return new n({video:e})}function mt(e){return new n({wbr:e})}function vt(e){const t=new CSSStyleSheet;return t.replaceSync(ie(e).rootElements[0].innerHTML),t}function bt(e){return new n({a:s(o({},e),{svg:!0})})}function yt(e){return new n({animate:s(o({},e),{svg:!0})})}function St(e){return new n({animateMotion:s(o({},e),{svg:!0})})}function Lt(e){return new n({animateTransform:s(o({},e),{svg:!0})})}function Et(e){return new n({circle:s(o({},e),{svg:!0})})}function Tt(e){return new n({clipPath:s(o({},e),{svg:!0})})}function Mt(e){return new n({defs:s(o({},e),{svg:!0})})}function kt(e){return new n({desc:s(o({},e),{svg:!0})})}function Ct(e){return new n({ellipse:s(o({},e),{svg:!0})})}function xt(e){return new n({feBlend:s(o({},e),{svg:!0})})}function Ft(e){return new n({feColorMatrix:s(o({},e),{svg:!0})})}function Nt(e){return new n({feComponentTransfer:s(o({},e),{svg:!0})})}function At(e){return new n({feComposite:s(o({},e),{svg:!0})})}function Pt(e){return new n({feConvolveMatrix:s(o({},e),{svg:!0})})}function Bt(e){return new n({feDiffuseLighting:s(o({},e),{svg:!0})})}function Dt(e){return new n({feDisplacementMap:s(o({},e),{svg:!0})})}function Gt(e){return new n({feDistantLight:s(o({},e),{svg:!0})})}function qt(e){return new n({feDropShadow:s(o({},e),{svg:!0})})}function Rt(e){return new n({feFlood:s(o({},e),{svg:!0})})}function $t(e){return new n({feFuncA:s(o({},e),{svg:!0})})}function Ht(e){return new n({feFuncB:s(o({},e),{svg:!0})})}function Vt(e){return new n({feFuncG:s(o({},e),{svg:!0})})}function It(e){return new n({feFuncR:s(o({},e),{svg:!0})})}function Jt(e){return new n({feGaussianBlur:s(o({},e),{svg:!0})})}function Kt(e){return new n({feImage:s(o({},e),{svg:!0})})}function Wt(e){return new n({feMerge:s(o({},e),{svg:!0})})}function Ut(e){return new n({feMergeNode:s(o({},e),{svg:!0})})}function Yt(e){return new n({feMorphology:s(o({},e),{svg:!0})})}function zt(e){return new n({feOffset:s(o({},e),{svg:!0})})}function Ot(e){return new n({fePointLight:s(o({},e),{svg:!0})})}function Qt(e){return new n({feSpecularLighting:s(o({},e),{svg:!0})})}function Xt(e){return new n({feSpotLight:s(o({},e),{svg:!0})})}function Zt(e){return new n({feTile:s(o({},e),{svg:!0})})}function _t(e){return new n({feTurbulence:s(o({},e),{svg:!0})})}function jt(e){return new n({filter:s(o({},e),{svg:!0})})}function er(e){return new n({foreignObject:s(o({},e),{svg:!0})})}function nr(e){return new n({g:s(o({},e),{svg:!0})})}function tr(e){return new n({image:s(o({},e),{svg:!0})})}function rr(e){return new n({line:s(o({},e),{svg:!0})})}function ur(e){return new n({linearGradient:s(o({},e),{svg:!0})})}function ir(e){return new n({marker:s(o({},e),{svg:!0})})}function or(e){return new n({mask:s(o({},e),{svg:!0})})}function sr(e){return new n({metadata:s(o({},e),{svg:!0})})}function fr(e){return new n({mpath:s(o({},e),{svg:!0})})}function cr(e){return new n({path:s(o({},e),{svg:!0})})}function ar(e){return new n({pattern:s(o({},e),{svg:!0})})}function lr(e){return new n({polygon:s(o({},e),{svg:!0})})}function wr(e){return new n({polyline:s(o({},e),{svg:!0})})}function dr(e){return new n({radialGradient:s(o({},e),{svg:!0})})}function gr(e){return new n({rect:s(o({},e),{svg:!0})})}function pr(e){return new n({script:s(o({},e),{svg:!0})})}function hr(e){return new n({set:s(o({},e),{svg:!0})})}function mr(e){return new n({stop:s(o({},e),{svg:!0})})}function vr(e){return new n({style:s(o({},e),{svg:!0})})}function br(e){return new n({svg:s(o({},e),{svg:!0})})}function yr(e){return new n({switch:s(o({},e),{svg:!0})})}function Sr(e){return new n({symbol:s(o({},e),{svg:!0})})}function Lr(e){return new n({text:s(o({},e),{svg:!0})})}function Er(e){return new n({textPath:s(o({},e),{svg:!0})})}function Tr(e){return new n({title:s(o({},e),{svg:!0})})}function Mr(e){return new n({tspan:s(o({},e),{svg:!0})})}function kr(e){return new n({use:s(o({},e),{svg:!0})})}function Cr(e){return new n({view:s(o({},e),{svg:!0})})}exports.ElementConstructor=n;exports.a=ge;exports.abbr=pe;exports.address=he;exports.animate=yt;exports.animateMotion=St;exports.animateTransform=Lt;exports.area=me;exports.article=ve;exports.aside=be;exports.audio=ye;exports.b=Se;exports.base=Le;exports.bdi=Ee;exports.bdo=Te;exports.blockquote=Me;exports.body=ke;exports.br=Ce;exports.button=xe;exports.canvas=Fe;exports.caption=Ne;exports.circle=Et;exports.cite=Ae;exports.clipPath=Tt;exports.code=Pe;exports.col=Be;exports.colgroup=De;exports.data=Ge;exports.datalist=qe;exports.dd=Re;exports.defs=Mt;exports.del=$e;exports.desc=kt;exports.details=He;exports.dfn=Ve;exports.dialog=Ie;exports.div=Je;exports.dl=Ke;exports.dt=We;exports.element=we;exports.elementFactory=de;exports.ellipse=Ct;exports.em=Ue;exports.embed=Ye;exports.feBlend=xt;exports.feColorMatrix=Ft;exports.feComponentTransfer=Nt;exports.feComposite=At;exports.feConvolveMatrix=Pt;exports.feDiffuseLighting=Bt;exports.feDisplacementMap=Dt;exports.feDistantLight=Gt;exports.feDropShadow=qt;exports.feFlood=Rt;exports.feFuncA=$t;exports.feFuncB=Ht;exports.feFuncG=Vt;exports.feFuncR=It;exports.feGaussianBlur=Jt;exports.feImage=Kt;exports.feMerge=Wt;exports.feMergeNode=Ut;exports.feMorphology=Yt;exports.feOffset=zt;exports.fePointLight=Ot;exports.feSpecularLighting=Qt;exports.feSpotLight=Xt;exports.feTile=Zt;exports.feTurbulence=_t;exports.fieldset=ze;exports.figcaption=Oe;exports.figure=Qe;exports.filter=jt;exports.footer=Xe;exports.foreignObject=er;exports.form=Ze;exports.g=nr;exports.h1=_e;exports.h2=je;exports.h3=en;exports.h4=nn;exports.h5=tn;exports.h6=rn;exports.head=un;exports.header=on;exports.hgroup=sn;exports.hr=fn;exports.html=cn;exports.htmlVar=pt;exports.i=an;exports.iframe=ln;exports.image=tr;exports.img=wn;exports.input=dn;exports.ins=gn;exports.kbd=pn;exports.label=hn;exports.legend=mn;exports.li=vn;exports.line=rr;exports.linearGradient=ur;exports.link=bn;exports.main=yn;exports.map=Sn;exports.mark=Ln;exports.marker=ir;exports.mask=or;exports.menu=En;exports.meta=Tn;exports.metadata=sr;exports.meter=Mn;exports.mpath=fr;exports.nav=kn;exports.noscript=Cn;exports.object=xn;exports.ol=Fn;exports.optgroup=Nn;exports.option=An;exports.output=Pn;exports.p=Bn;exports.path=cr;exports.pattern=ar;exports.picture=Dn;exports.polygon=lr;exports.polyline=wr;exports.pre=Gn;exports.progress=qn;exports.q=Rn;exports.radialGradient=dr;exports.rect=gr;exports.rp=$n;exports.rt=Hn;exports.ruby=Vn;exports.s=In;exports.samp=Jn;exports.script=Kn;exports.search=Wn;exports.section=Un;exports.select=Yn;exports.set=hr;exports.slot=zn;exports.small=On;exports.source=Qn;exports.span=Xn;exports.stop=mr;exports.strong=Zn;exports.style=ie;exports.stylesheet=vt;exports.sub=_n;exports.summary=jn;exports.sup=et;exports.svg=br;exports.svgA=bt;exports.svgScript=pr;exports.svgStyle=vr;exports.svgSwitch=yr;exports.svgTitle=Tr;exports.symbol=Sr;exports.table=nt;exports.tbody=tt;exports.td=rt;exports.template=ut;exports.text=Lr;exports.textPath=Er;exports.textarea=it;exports.tfoot=ot;exports.th=st;exports.thead=ft;exports.time=ct;exports.title=at;exports.tr=lt;exports.track=wt;exports.tspan=Mr;exports.u=dt;exports.ul=gt;exports.use=kr;exports.video=ht;exports.view=Cr;exports.wbr=mt;
