"use strict";var Is=Object.defineProperty;var Ss=Object.getOwnPropertySymbols;var Ts=Object.prototype.hasOwnProperty,Ms=Object.prototype.propertyIsEnumerable;var ds=(S,n,s)=>n in S?Is(S,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):S[n]=s,ps=(S,n)=>{for(var s in n||(n={}))Ts.call(n,s)&&ds(S,s,n[s]);if(Ss)for(var s of Ss(n))Ms.call(n,s)&&ds(S,s,n[s]);return S};var es=(S,n,s)=>{if(!n.has(S))throw TypeError("Cannot "+s)};var t=(S,n,s)=>(es(S,n,"read from private field"),s?s.call(S):n.get(S)),i=(S,n,s)=>{if(n.has(S))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(S):n.set(S,s)},r=(S,n,s,e)=>(es(S,n,"write to private field"),e?e.call(S,s):n.set(S,s),s);var o=(S,n,s)=>(es(S,n,"access private method"),s);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const Dt=require("../Store-Cr3VaD9G.cjs"),As=require("../Derived-CNbsNMn_.cjs"),ls=require("../browser-CpzFX2xg.cjs"),Bs=require("../easings-DsS5-Kqc.cjs"),Rt=require("../layout-8ryRAMGJ.cjs"),us=require("../math-GDWEqu7y.cjs");require("../ticker/index.cjs");const ge=require("../order/index.cjs"),ms=require("../Damped-Da3EnNN4.cjs"),_s=require("../Tweened-DksN-Rz6.cjs"),$e=require("../controls/index.cjs"),be=require("../window-resizer/index.cjs"),ee=require("../scroll-entries/index.cjs"),H=require("../tags-B0do5eeb.cjs"),as=require("../createStylesheet-BqjaCUhm.cjs"),fs=require("../css-unit-parser/index.cjs"),c=require("../css-property/index.cjs"),Hs=require("../Viewport-BBYt1Ivy.cjs"),We=require("../element-resizer/index.cjs"),$s=require("../gestures-DHLrn6Q8.cjs"),bs=require("../theme/index.cjs"),Ws=require("../dom-JBOkFLTh.cjs"),gs=require("../function-MthRj-GJ.cjs");var f,ye,y,It,Z,dt;class Us{constructor(n,s,e){i(this,f,void 0);i(this,ye,void 0);i(this,y,void 0);i(this,It,0);i(this,Z,0);i(this,dt,null);r(this,f,n),r(this,ye,s),r(this,y,e),ee.scrollEntries.register(t(this,f))}get index(){return t(this,ye)}get size(){return t(this,It)}get position(){return t(this,Z)}destroy(){ee.scrollEntries.unregister(t(this,f)),t(this,f).style.transform="",this.mark(null)}setSize(n){n?(t(this,f).style.setProperty("--size",n+"px"),t(this,y).axisCSSProperty.current==="x"?(t(this,f).style.width=n+"px",t(this,f).style.height=""):(t(this,f).style.height=n+"px",t(this,f).style.width="")):(t(this,f).style.width="",t(this,f).style.height="",t(this,f).style.removeProperty("--size"))}resize(){r(this,It,t(this,y).vertical?t(this,f).offsetHeight:t(this,f).offsetWidth),r(this,Z,t(this,y).vertical?Rt.getCumulativeOffsetTop(t(this,f)):Rt.getCumulativeOffsetLeft(t(this,f))),r(this,Z,t(this,Z)-t(this,y).contentPosition)}transform(){let n=0;const s=t(this,y).viewportSize*t(this,y).sectionDistanceScaleCSSProperty.current;t(this,y).loopCSSProperty.current&&t(this,y).overscroll&&t(this,Z)+t(this,It)<t(this,y).currentScrollValue&&(n=t(this,y).distance*-1-t(this,y).gap),ee.scrollEntries.update(t(this,f),t(this,y).axisCSSProperty.current,n);const e=t(this,y).currentScrollValue+n,h=t(this,Z)-t(this,y).viewportSize-s,u=t(this,Z)+t(this,It)+s,b=us.clamp(e,h,u);t(this,y).vertical?t(this,f).style.transform=`translate3d(0px, ${b*-1}px, 0px)`:t(this,f).style.transform=`translate3d(${b*-1}px, 0px, 0px)`}mark(n){t(this,dt)!==n&&(t(this,dt)&&t(this,f).classList.remove(t(this,dt)),n&&t(this,f).classList.add(n),r(this,dt,n),t(this,f).dispatchEvent(new CustomEvent("sectionsChange",{composed:!0,detail:{mark:t(this,dt)}})))}}f=new WeakMap,ye=new WeakMap,y=new WeakMap,It=new WeakMap,Z=new WeakMap,dt=new WeakMap;const Gs=as.createStylesheet({":host":{position:"relative",width:"100%",height:"100%",display:"block",outline:"none"},':host([hibernated="true"])':{display:"contents"},".static":{position:"var(--static-position, absolute)",top:"var(--static-top, 0)",left:"var(--static-left, 0)",width:"var(--static-width, 100%)",height:"var(--static-height, 100%)"},".content":{position:"relative",display:"flex",width:"100%",height:"100%",gap:"var(--gap, 0px)",willChange:"var(--will-change, transform)"},':host([hibernated="true"]) .content':{display:"contents"},"::slotted(*)":{flexShrink:"0"}});var a,Tt,V,j,J,$,Q,pt,ft,W,F,Mt,At,Bt,_t,re,U,Ht,bt,G,mt,X,gt,$t,Wt,Ut,p,Ce,l,ve,Pe,v,m,O,K,yt,Y,x,g,he,Ct,Gt,Kt,ne,tt,Nt,me,vt,ie,we,ss,Ee,is,xe,rs,Le,hs,q,ze,Ge,ys,oe,Ve,Fe,ns,et,Ot,ke,os;class Ue extends HTMLElement{constructor(){super();i(this,Nt);i(this,vt);i(this,we);i(this,Ee);i(this,xe);i(this,Le);i(this,Ge);i(this,Fe);i(this,et);i(this,ke);i(this,a,null);i(this,Tt,new c.CSSProperty(this,"--controls",!0));i(this,V,new c.CSSProperty(this,"--axis","y"));i(this,j,new c.CSSProperty(this,"--direction",0));i(this,J,new c.CSSProperty(this,"--pages",0,{validate:s=>Math.max(0,s-1)}));i(this,$,new c.CSSProperty(this,"--split",!1));i(this,Q,new c.CSSProperty(this,"--sectional",!1));i(this,pt,new c.CSSProperty(this,"--auto-size",!1));i(this,ft,new c.CSSProperty(this,"--wheel-max-delta",!1));i(this,W,new c.CSSProperty(this,"--sections-in-view",1));i(this,F,new c.CSSProperty(this,"--loop",!1));i(this,Mt,new c.CSSProperty(this,"--damping",20));i(this,At,new c.CSSProperty(this,"--mass",0));i(this,Bt,new c.CSSProperty(this,"--stiffness",0));i(this,_t,new c.CSSProperty(this,"--mouse-drag",!1));i(this,re,new c.CSSProperty(this,"--section-distance-scale",.5));i(this,U,new c.CSSProperty(this,"--autoplay",0));i(this,Ht,new c.CSSProperty(this,"--autoplay-pause-duration",0));i(this,bt,new c.CSSProperty(this,"--autoplay-user-direction",!1));i(this,G,new c.CSSProperty(this,"--classes",0));i(this,mt,new c.CSSProperty(this,"--current-index-start-offset",0));i(this,X,new c.CSSProperty(this,"--current-index-end-offset",0));i(this,gt,new c.CSSProperty(this,"--focus-delay",0));i(this,$t,new c.CSSProperty(this,"--focus-duration",3e3));i(this,Wt,new c.CSSProperty(this,"--disabled",!1));i(this,Ut,new c.CSSProperty(this,"--hibernated",!1));i(this,p,null);i(this,Ce,null);i(this,l,[]);i(this,ve,0);i(this,Pe,0);i(this,v,0);i(this,m,0);i(this,O,0);i(this,K,null);i(this,yt,null);i(this,Y,null);i(this,x,null);i(this,g,new Dt.Store(0));i(this,he,0);i(this,Ct,0);i(this,Gt,!0);i(this,Kt,!0);i(this,ne,void 0);i(this,tt,new _s.Tweened);i(this,q,()=>{t(this,a).unlistenAnimationFrame();const s=this.currentScrollValue/t(this,m)||0,e=t(this,g).current;if(r(this,ve,this.vertical?Rt.getCumulativeOffsetTop(this):Rt.getCumulativeOffsetLeft(this)),r(this,Pe,this.vertical?Rt.getCumulativeOffsetTop(t(this,p)):Rt.getCumulativeOffsetLeft(t(this,p))),r(this,v,this.vertical?this.offsetHeight:this.offsetWidth),this.vertical?r(this,O,fs.cssUnitParser.parse(getComputedStyle(t(this,p)).rowGap)):r(this,O,fs.cssUnitParser.parse(getComputedStyle(t(this,p)).columnGap)),t(this,pt).current&&t(this,l).length){const h=t(this,W).current,u=(t(this,v)-t(this,O)*(h-1))/h;t(this,l).forEach(b=>{b.setSize(u)})}else t(this,l).forEach(h=>{h.setSize()});if(t(this,l).forEach(h=>{h.resize()}),t(this,J).current){r(this,m,t(this,v)*t(this,J).current);const h=t(this,m)+t(this,v);this.vertical?(t(this,p).style.width=h+"px",t(this,p).style.height="100%"):(t(this,p).style.height=h+"px",t(this,p).style.width="100%")}else this.vertical?(t(this,p).style.width="100%",t(this,p).style.height="max-content",r(this,m,t(this,p).offsetHeight-t(this,v))):(t(this,p).style.width="max-content",t(this,p).style.height="100%",r(this,m,t(this,p).offsetWidth-t(this,v)));if(!t(this,F).current){const h=getComputedStyle(this),u=this.vertical?parseFloat(h.paddingBlockStart)+parseFloat(h.paddingBlockEnd):parseFloat(h.paddingInlineStart)+parseFloat(h.paddingInlineEnd);r(this,m,t(this,m)+u),t(this,a).max=t(this,m)}if(t(this,F).current&&t(this,l).length){const h=t(this,l)[t(this,l).length-1],u=h.position+h.size-t(this,v),b=t(this,m)-u;r(this,Ct,h.position+h.size+b)}else r(this,Ct,t(this,m));if(t(this,Q).current&&t(this,l).length){const h=t(this,l)[e];t(this,a).set(h.position,{equalize:!0})}else t(this,a).set(s*t(this,m),{equalize:!0})});i(this,ze,()=>{const s=this.currentScrollValue;if(r(this,he,Math.max(0,s-t(this,m))),t(this,l).length){let e=0;for(let h=0;h<t(this,l).length;h++){const u=t(this,l)[h];u.transform(),this.targetScrollValue+u.size/2>=u.position&&(e=h)}t(this,g).current=e}else this.vertical?t(this,p).style.transform=`translate3d(0px, ${s*-1}px, 0px)`:t(this,p).style.transform=`translate3d(${s*-1}px, 0px, 0px)`;ee.scrollEntries.update(this,t(this,V).current,s)});i(this,oe,(s,e)=>{t(this,Tt).current&&(t(this,bt).current&&(t(this,x).pauseAndContinue(t(this,Ht).current),t(this,x).direction=Math.sign(e)||1),t(this,Ve).call(this,s,e))});i(this,Ve,(s,e)=>{if(t(this,j).current){if(t(this,j).current<0&&e>0)return;if(t(this,j).current>0&&e<0)return}if(t(this,tt).unlistenAnimationFrame(),!t(this,U).current&&t(this,gt).current&&(clearInterval(t(this,ne)),r(this,ne,setTimeout(()=>{const h=o(this,ke,os).call(this);h&&this.scrollToSection(h.index,{tween:{duration:t(this,$t).current,easing:Bs.easeInOutExpo}})},t(this,gt).current))),!(s==="drag"&&!Hs.device.isMobile&&!t(this,_t).current))if(t(this,Q).current){const h=Math.sign(e);t(this,l).length?this.shiftSections(h):t(this,a).shift(h*t(this,v))}else t(this,a).shift(e)});ls.isBrowser&&(r(this,a,new ms.Damped(0,{damping:.01,min:0,order:ge.TICK_ORDER.SCROLL})),this.attachShadow({mode:"open"}).adoptedStyleSheets.push(Gs),H.element(this,{tabIndex:0,children:[H.div({class:"static",children:[H.slot({name:"static"})]}),H.div({class:"content",children:[H.slot({ref:e=>r(this,Ce,e)})],style:{flexDirection:new As.Derived(t(this,V),e=>e==="x"?"row":"column")},ref:e=>r(this,p,e)})]}),r(this,K,new $e.WheelControls({element:t(this,p)})),t(this,K).changeEvent.subscribe(t(this,oe)),r(this,yt,new $e.KeyboardControls({element:this})),t(this,yt).changeEvent.subscribe(t(this,oe)),r(this,Y,new $e.DragControls({element:t(this,p)})),t(this,Y).changeEvent.subscribe(t(this,oe)),r(this,x,new $e.AutoplayControls({culling:this})),t(this,x).changeEvent.subscribe(t(this,Ve)),t(this,V).subscribe(({current:e})=>{t(this,p).style.flexDirection=e==="x"?"row":"column",t(this,K).axis=t(this,ft).current?"max":e,t(this,yt).dimension=e==="x"?"width":"height",t(this,Y).axis=e,e==="x"?this.style.touchAction="pan-y":e==="y"&&(this.style.touchAction="pan-x"),this.isConnected&&t(this,q).call(this)}),t(this,ft).subscribe(e=>{t(this,K).axis=e.current?"max":t(this,V).current}),t(this,J).subscribe(()=>{this.isConnected&&t(this,q).call(this)}),t(this,$).subscribe(({current:e})=>{this.isConnected&&(e?o(this,Nt,me).call(this):o(this,vt,ie).call(this))}),t(this,Q).subscribe(e=>{t(this,K).debounce=e.current,t(this,Y).swipe=e.current,t(this,x).interval=e.current,this.isConnected&&(e.current&&!e.previous&&!t(this,l).length?o(this,Nt,me).call(this):!e.current&&e.previous&&t(this,l).length&&o(this,vt,ie).call(this))}),t(this,pt).subscribe(e=>{this.isConnected&&(t(this,q).call(this),e.current&&!e.previous&&!t(this,l).length?o(this,Nt,me).call(this):!e.current&&e.previous&&t(this,l).length&&o(this,vt,ie).call(this))}),t(this,W).subscribe(e=>{this.isConnected&&(t(this,q).call(this),o(this,et,Ot).call(this))}),t(this,F).subscribe(e=>{e.current?(this.isConnected&&(t(this,l).length||(t(this,$).current=!0)),t(this,l).length&&(t(this,a).max=1/0,t(this,a).min=-1/0)):(r(this,he,0),t(this,a).max=t(this,m),t(this,a).min=0)}),t(this,Mt).subscribe(e=>{t(this,a).damping=e.current}),t(this,At).subscribe(e=>{t(this,a).mass=e.current}),t(this,Bt).subscribe(e=>{t(this,a).stiffness=e.current}),t(this,Wt).subscribe(e=>{e.current&&!e.previous?o(this,we,ss).call(this):!e.current&&e.previous&&o(this,Ee,is).call(this)}),t(this,Ut).subscribe(e=>{e.current&&!e.previous?o(this,xe,rs).call(this):!e.current&&e.previous&&o(this,Le,hs).call(this)}),t(this,U).subscribe(e=>{t(this,x).speed=e.current,e.current&&!e.previous?t(this,x).connect():!e.current&&e.previous&&t(this,x).disconnect()}),t(this,bt).subscribe(e=>{e.current||(t(this,x).direction=1)}),t(this,G).subscribe(e=>{this.isConnected&&o(this,et,Ot).call(this)}),t(this,mt).subscribe(e=>{this.isConnected&&t(this,G).current&&o(this,et,Ot).call(this)}),t(this,X).subscribe(e=>{this.isConnected&&t(this,G).current&&o(this,et,Ot).call(this)}),t(this,a).isRunning.subscribe(e=>{this.classList.toggle("active",e.current)}),t(this,g).subscribe(e=>{t(this,l).length&&o(this,et,Ot).call(this)}),t(this,tt).subscribe(e=>{t(this,tt).isRunning.current&&t(this,a).set(e.current)}))}get damped(){return t(this,a)}get controlsCSSProperty(){return t(this,Tt)}get axisCSSProperty(){return t(this,V)}get directionCSSProperty(){return t(this,j)}get pagesCSSProperty(){return t(this,J)}get splitCSSProperty(){return t(this,$)}get sectionalCSSProperty(){return t(this,Q)}get autoSizeCSSProperty(){return t(this,pt)}get wheelMaxDeltaCSSProperty(){return t(this,ft)}get sectionsInViewCSSProperty(){return t(this,W)}get loopCSSProperty(){return t(this,F)}get dampingCSSProperty(){return t(this,Mt)}get massCSSProperty(){return t(this,At)}get stiffnessCSSProperty(){return t(this,Bt)}get mouseDragCSSProperty(){return t(this,_t)}get sectionDistanceScaleCSSProperty(){return t(this,re)}get autoplayCSSProperty(){return t(this,U)}get autoplayPauseDurationCSSProperty(){return t(this,Ht)}get autoplayUserDirectionCSSProperty(){return t(this,bt)}get classesCSSProperty(){return t(this,G)}get currentIndexStartOffsetCSSProperty(){return t(this,mt)}get currentIndexEndOffsetCSSProperty(){return t(this,X)}get focusDelayCSSProperty(){return t(this,gt)}get focusDurationCSSProperty(){return t(this,$t)}get disabledCSSProperty(){return t(this,Wt)}get hibernatedCSSProperty(){return t(this,Ut)}get currentScrollValue(){return o(this,Fe,ns).call(this,"current")}get targetScrollValue(){return o(this,Fe,ns).call(this,"target")}get contentElement(){return t(this,p)}get sections(){return t(this,l)}get position(){return t(this,ve)}get contentPosition(){return t(this,Pe)}get viewportSize(){return t(this,v)}get scrollSize(){return t(this,m)}get gap(){return t(this,O)}get counter(){return t(this,g)}get limit(){return t(this,l).length-t(this,W).current}get distance(){return t(this,Ct)}get loopDistance(){return t(this,F).current?t(this,Ct)+t(this,O):t(this,Ct)}get overscroll(){return t(this,he)}get vertical(){return t(this,V).current==="y"}get currentProgress(){return this.currentScrollValue/this.loopDistance||0}get targetProgress(){return this.targetScrollValue/this.loopDistance||0}get scrollWidth(){return t(this,V).current==="y"?0:t(this,a).distance}get scrollHeight(){return t(this,V).current==="x"?0:t(this,a).distance}onScroll(...s){return t(this,a).subscribe(...s)}offScroll(...s){t(this,a).unsubscribe(...s)}range(s,e,h=0){const u=s-h,b=u+e+h*2;return this.currentProgress<u?0:this.currentProgress>b?1:(this.currentProgress-u)/(b-u)}curve(s,e,h=0){return Math.sin(this.range(s,e,h)*Math.PI)}visible(s,e,h=0){const u=s-h,b=u+e+h*2;return this.currentProgress>=u&&this.currentProgress<=b}scrollToSection(s,e){if(!t(this,l).length)return;const h=t(this,g).current;o(this,Ge,ys).call(this,s);const u=t(this,l)[h],b=t(this,l)[t(this,g).current];if(u&&b){let D=0;const se=o(this,ke,os).call(this),qs=se?this.targetScrollValue-se.position:0;t(this,F).current?t(this,g).current===0&&h===t(this,l).length-1?D=t(this,m)+t(this,v)-u.position+t(this,O):t(this,g).current===t(this,l).length-1&&h===0?D=b.position-(t(this,m)+t(this,v)+t(this,O)):D=b.position-u.position:D=b.position-u.position,this.shiftPosition(D-qs,e)}}shiftSections(s,e){t(this,l).length&&this.scrollToSection(t(this,g).current+s,e)}setPosition(s,e){e!=null&&e.tween?(t(this,tt).set(t(this,a).current,{equalize:!0}),t(this,tt).set(s,ps({},e.tween))):t(this,a).set(s,{equalize:(e==null?void 0:e.behaviour)==="instant"})}shiftPosition(s,e){this.setPosition(t(this,a).target+s,e)}connectedCallback(){t(this,Tt).observe(),t(this,V).observe(),t(this,j).observe(),t(this,J).observe(),t(this,$).observe(),t(this,Q).observe(),t(this,pt).observe(),t(this,ft).observe(),t(this,W).observe(),t(this,F).observe(),t(this,Mt).observe(),t(this,At).observe(),t(this,Bt).observe(),t(this,_t).observe(),t(this,re).observe(),t(this,U).observe(),t(this,U).observe(),t(this,Ht).observe(),t(this,bt).observe(),t(this,G).observe(),t(this,mt).observe(),t(this,X).observe(),t(this,gt).observe(),t(this,$t).observe(),t(this,Wt).observe(),t(this,Ut).observe(),o(this,Le,hs).call(this)}disconnectedCallback(){t(this,Tt).unobserve(),t(this,V).unobserve(),t(this,j).unobserve(),t(this,J).unobserve(),t(this,$).unobserve(),t(this,Q).unobserve(),t(this,pt).unobserve(),t(this,ft).unobserve(),t(this,W).unobserve(),t(this,F).unobserve(),t(this,Mt).unobserve(),t(this,At).unobserve(),t(this,Bt).unobserve(),t(this,_t).unobserve(),t(this,re).unobserve(),t(this,U).unobserve(),t(this,Ht).unobserve(),t(this,bt).unobserve(),t(this,G).unobserve(),t(this,mt).unobserve(),t(this,X).unobserve(),t(this,gt).unobserve(),t(this,$t).unobserve(),t(this,Wt).unobserve(),t(this,Ut).unobserve(),o(this,xe,rs).call(this)}}a=new WeakMap,Tt=new WeakMap,V=new WeakMap,j=new WeakMap,J=new WeakMap,$=new WeakMap,Q=new WeakMap,pt=new WeakMap,ft=new WeakMap,W=new WeakMap,F=new WeakMap,Mt=new WeakMap,At=new WeakMap,Bt=new WeakMap,_t=new WeakMap,re=new WeakMap,U=new WeakMap,Ht=new WeakMap,bt=new WeakMap,G=new WeakMap,mt=new WeakMap,X=new WeakMap,gt=new WeakMap,$t=new WeakMap,Wt=new WeakMap,Ut=new WeakMap,p=new WeakMap,Ce=new WeakMap,l=new WeakMap,ve=new WeakMap,Pe=new WeakMap,v=new WeakMap,m=new WeakMap,O=new WeakMap,K=new WeakMap,yt=new WeakMap,Y=new WeakMap,x=new WeakMap,g=new WeakMap,he=new WeakMap,Ct=new WeakMap,Gt=new WeakMap,Kt=new WeakMap,ne=new WeakMap,tt=new WeakMap,Nt=new WeakSet,me=function(){o(this,vt,ie).call(this),t(this,Ce).assignedElements().forEach((s,e)=>{s instanceof HTMLElement&&t(this,l).push(new Us(s,e,this))}),t(this,p).style.transform="",this.dispatchEvent(new CustomEvent("sectionsChange",{composed:!0})),t(this,q).call(this),o(this,et,Ot).call(this)},vt=new WeakSet,ie=function(){t(this,l).forEach(s=>{s.destroy()}),r(this,l,[]),t(this,g).current=0,t(this,a).reset(),this.dispatchEvent(new CustomEvent("sectionsChange",{composed:!0}))},we=new WeakSet,ss=function(){t(this,Gt)||(r(this,Gt,!0),t(this,a).unsubscribe(t(this,ze)),t(this,a).unlistenAnimationFrame(),t(this,K).disconnect(),t(this,yt).disconnect(),t(this,Y).disconnect(),t(this,x).disconnect(),clearInterval(t(this,ne)),t(this,tt).unlistenAnimationFrame())},Ee=new WeakSet,is=function(){t(this,Gt)&&(r(this,Gt,!1),t(this,a).subscribe(t(this,ze)),t(this,K).connect(),t(this,yt).connect(),t(this,Y).connect(),t(this,U).current&&t(this,x).connect())},xe=new WeakSet,rs=function(){t(this,Kt)||(r(this,Kt,!0),be.windowResizer.unsubscribe(t(this,q)),We.elementResizer.unsubscribe(t(this,q)),t(this,a).reset(),o(this,we,ss).call(this),t(this,p).style.transform="",t(this,$).current&&o(this,vt,ie).call(this),ee.scrollEntries.unregister(this))},Le=new WeakSet,hs=function(){t(this,Kt)&&(r(this,Kt,!1),t(this,$).current&&o(this,Nt,me).call(this),ee.scrollEntries.register(this),be.windowResizer.subscribe(t(this,q),ge.RESIZE_ORDER.SCROLL),We.elementResizer.subscribe(this,t(this,q)),o(this,Ee,is).call(this))},q=new WeakMap,ze=new WeakMap,Ge=new WeakSet,ys=function(s){t(this,F).current?(t(this,g).current=s%t(this,l).length,t(this,g).current=t(this,g).current<0?t(this,l).length+t(this,g).current:t(this,g).current):t(this,g).current=us.clamp(s,0,this.limit)},oe=new WeakMap,Ve=new WeakMap,Fe=new WeakSet,ns=function(s="current"){if(t(this,F).current&&t(this,l).length){const e=t(this,a)[s]%(t(this,m)+t(this,v)+t(this,O));return e<0?t(this,m)+e+t(this,v)+t(this,O):e}else return t(this,a)[s]},et=new WeakSet,Ot=function(){if(t(this,G).current&&t(this,l).length){const s=t(this,g).current+t(this,mt).current;s===0?this.classList.add("start"):this.classList.remove("start"),s===this.limit?this.classList.add("end"):this.classList.remove("end");const e=t(this,W).current+t(this,X).current;t(this,l).forEach((h,u)=>{const b=s-this.limit-1+t(this,X).current,D=s+e,se=this.sections.length-D;u>=s&&u<D||u<=b?h.mark("current"):u>=D&&u<D+se/2||u<=b+e?h.mark("next"):h.mark("previous")})}},ke=new WeakSet,os=function(){let s=null,e=1/0;for(let h=0;h<t(this,l).length;h++){const u=Math.abs(t(this,l)[h].position-this.targetScrollValue);u<e&&(e=u,s=h)}return s!==null?t(this,l)[s]:null};customElements.get("e-scroll")||customElements.define("e-scroll",Ue);var Re;class ts extends HTMLElement{constructor(){super(...arguments);i(this,Re,null)}get scrollElement(){return t(this,Re)}connectedCallback(){const s=Ws.findParentElement(this,Ue);s instanceof Ue?r(this,Re,s):console.error(this,"e-scroll not found")}}Re=new WeakMap;const Ks=as.createStylesheet({":host":{display:"inline-block",zIndex:"1",backgroundColor:bs.aptechkaTheme.colorFont.var},':host([axis="y"])':{position:"absolute",right:"0",top:"0",width:"1vmin",height:"100%"},':host([axis="x"])':{position:"absolute",left:"0",bottom:"0",width:"100%",height:"1vmin"},".default-thumb":{backgroundColor:bs.aptechkaTheme.colorMain.var,borderRadius:"1vmin",touchAction:"none"},"::slotted(*)":{touchAction:"none"}});var ce,k,st,it,le,ue,Zt,De,Oe,qe;class Cs extends ts{constructor(){super();i(this,ce,null);i(this,k,null);i(this,st,!1);i(this,it,0);i(this,le,0);i(this,ue,0);i(this,Zt,()=>{r(this,st,this.offsetWidth>this.offsetHeight);const s=t(this,st)?this.offsetWidth:this.offsetHeight;r(this,it,s/((this.scrollElement.scrollSize+this.scrollElement.viewportSize)/s)),r(this,it,Math.max(t(this,it),30)),t(this,st)?(t(this,k).style.width=t(this,it)+"px",t(this,k).style.height="100%"):(t(this,k).style.width="100%",t(this,k).style.height=t(this,it)+"px"),r(this,le,s-t(this,it)),this.scrollElement.scrollSize||(this.style.display="none")});i(this,De,()=>{r(this,ue,this.scrollElement.currentProgress*t(this,le)),t(this,st)?t(this,k).style.transform=`translate3d(${t(this,ue)}px, 0px, 0px)`:t(this,k).style.transform=`translate3d(0px, ${t(this,ue)}px, 0px)`});i(this,Oe,()=>{this.setAttribute("axis",this.scrollElement.axisCSSProperty.current)});i(this,qe,s=>{document.documentElement.classList.add("grabbing"),$s.setupDrag(u=>{const b=t(this,st)?u.x:u.y,D=this.scrollElement.distance/t(this,le),se=(b-h)*D;this.scrollElement.setPosition(e+se)},()=>{document.documentElement.classList.remove("grabbing")});const e=this.scrollElement.targetScrollValue,h=t(this,st)?s.x:s.y});ls.isBrowser&&(this.attachShadow({mode:"open"}).adoptedStyleSheets.push(Ks),H.element(this,{slot:"static","drag-dead-zone":"",children:[H.slot({ref:e=>r(this,ce,e),children:H.div({class:"default-thumb"})})]}))}get thumbElement(){return t(this,k)}connectedCallback(){super.connectedCallback();const s=t(this,ce).assignedElements()[0]||t(this,ce).firstElementChild;r(this,k,s),t(this,k).addEventListener("pointerdown",t(this,qe)),be.windowResizer.subscribe(t(this,Zt),ge.RESIZE_ORDER.SCROLL+1),We.elementResizer.subscribe(this,t(this,Zt)),this.scrollElement.onScroll(t(this,De)),this.scrollElement.axisCSSProperty.subscribe(t(this,Oe))}disconnectedCallback(){t(this,k).removeEventListener("pointerdown",t(this,qe)),be.windowResizer.unsubscribe(t(this,Zt)),We.elementResizer.unsubscribe(t(this,Zt)),this.scrollElement.offScroll(t(this,De)),this.scrollElement.axisCSSProperty.unsubscribe(t(this,Oe))}}ce=new WeakMap,k=new WeakMap,st=new WeakMap,it=new WeakMap,le=new WeakMap,ue=new WeakMap,Zt=new WeakMap,De=new WeakMap,Oe=new WeakMap,qe=new WeakMap;customElements.get("e-scrollbar")||customElements.define("e-scrollbar",Cs);const Ns=as.createStylesheet({button:{all:"inherit"}});class vs extends ts{constructor(){super(),this.attachShadow({mode:"open"}).adoptedStyleSheets.push(Ns),ls.isBrowser&&H.element(this,{children:[H.button({onClick:()=>{this.handleClick()},children:[H.slot()]})]})}}class Ps extends vs{handleClick(){const n=this.getAttribute("index"),s=this.getAttribute("behaviour");this.scrollElement.scrollToSection(parseInt(n||"0"),{behaviour:s})}}customElements.get("e-scroll-set-button")||customElements.define("e-scroll-set-button",Ps);class ws extends vs{handleClick(){const n=this.getAttribute("step"),s=this.getAttribute("behaviour");this.scrollElement.shiftSections(parseInt(n||"1"),{behaviour:s})}}customElements.get("e-scroll-step-button")||customElements.define("e-scroll-step-button",ws);var rt,Pt,ae,Ie,Te,Se;class Zs{constructor(n,s,e){i(this,rt,void 0);i(this,Pt,void 0);i(this,ae,void 0);i(this,Ie,void 0);i(this,Te,()=>{t(this,Pt).scrollToSection(t(this,ae),{behaviour:t(this,Ie)})});i(this,Se,()=>{t(this,rt).classList.toggle("current",t(this,Pt).counter.current===t(this,ae))});r(this,rt,document.createElement("button")),r(this,Pt,n),r(this,Ie,e),r(this,ae,s),t(this,rt).addEventListener("click",t(this,Te)),t(this,Pt).counter.subscribe(t(this,Se)),t(this,Se).call(this)}get element(){return t(this,rt)}destroy(){t(this,rt).removeEventListener("click",t(this,Te)),t(this,Pt).counter.unsubscribe(t(this,Se)),t(this,rt).remove()}}rt=new WeakMap,Pt=new WeakMap,ae=new WeakMap,Ie=new WeakMap,Te=new WeakMap,Se=new WeakMap;var wt,de;class Es extends ts{constructor(){super(...arguments);i(this,wt,[]);i(this,de,gs.debounce(()=>{t(this,wt).forEach(s=>s.destroy()),r(this,wt,[]);for(let s=0;s<this.scrollElement.sections.length;s++){const e=new Zs(this.scrollElement,s,this.getAttribute("behaviour")||"smooth");this.appendChild(e.element),t(this,wt).push(e)}},0))}connectedCallback(){super.connectedCallback(),this.scrollElement.addEventListener("sectionsChange",t(this,de)),t(this,de).call(this)}disconnectedCallback(){this.scrollElement.removeEventListener("sectionsChange",t(this,de)),t(this,wt).forEach(s=>s.destroy()),r(this,wt,[])}}wt=new WeakMap,de=new WeakMap;customElements.get("e-scroll-bullet-buttons")||customElements.define("e-scroll-bullet-buttons",Es);var jt,Jt,Qt,Xt,Et,xt,Lt,zt,L,I,T,M,Vt,P,ht,nt,ot,ct,lt,w,A,B,ut,at,N,Me,d,Yt,te,Ae,E,Ft,R,z,_,pe,kt,C,Ke,Ls,Ne,zs,Ze,Vs,je,Fs,Je,ks,Qe,Rs,Be,fe,St,qt,Xe,Ds,Ye,Os,_e,cs,He;class xs extends ts{constructor(){super();i(this,Ke);i(this,Ne);i(this,Ze);i(this,je);i(this,Je);i(this,Qe);i(this,St);i(this,Xe);i(this,Ye);i(this,_e);i(this,jt,new c.CSSProperty(this,"--damping",20));i(this,Jt,new c.CSSProperty(this,"--mass",0));i(this,Qt,new c.CSSProperty(this,"--stiffness",0));i(this,Xt,new c.CSSProperty(this,"--target",""));i(this,Et,new c.CSSProperty(this,"--disabled",!1));i(this,xt,new c.CSSProperty(this,"--distance-offset",0,{rawValueCheck:!1}));i(this,Lt,new c.CSSProperty(this,"--start-offset",0,{rawValueCheck:!1}));i(this,zt,new c.CSSProperty(this,"--capture-once",!1));i(this,L,new c.CSSProperty(this,"--captured",""));i(this,I,new c.CSSProperty(this,"--released",""));i(this,T,new c.CSSProperty(this,"--captured-from-start",""));i(this,M,new c.CSSProperty(this,"--captured-from-finish",""));i(this,Vt,new c.CSSProperty(this,"--released-from-start",""));i(this,P,new c.CSSProperty(this,"--released-from-finish",""));i(this,ht,new c.CSSProperty(this,"--passed-var",""));i(this,nt,new c.CSSProperty(this,"--progress-var",""));i(this,ot,new c.CSSProperty(this,"--distance-var",""));i(this,ct,new c.CSSProperty(this,"--start-var",""));i(this,lt,new c.CSSProperty(this,"--finish-var",""));i(this,w,new Dt.Store(!1));i(this,A,new Dt.Store(!1));i(this,B,new Dt.Store(!1));i(this,ut,new Dt.Store(!1));i(this,at,new Dt.Store(!1));i(this,N,new Dt.Store(!1));i(this,Me,[]);i(this,d,this);i(this,Yt,0);i(this,te,0);i(this,Ae,0);i(this,E,new ms.Damped(0,{order:ge.TICK_ORDER.SCROLL-1,min:0,max:1}));i(this,Ft,0);i(this,R,0);i(this,z,0);i(this,_,0);i(this,pe,!1);i(this,kt,!1);i(this,C,!0);i(this,Be,()=>{t(this,C)||(this.resize(),t(this,fe).call(this))});i(this,fe,()=>{!t(this,C)&&t(this,pe)&&this.tick()});i(this,He,gs.debounce(()=>{const s=ee.scrollEntries.getAll(this).reverse();let e=0;s.forEach((h,u)=>{h.element===this.scrollElement&&(e=u)}),r(this,Me,s.slice(e+1))},0))}get distanceOffsetCSSProperty(){return t(this,xt)}get startOffsetCSSProperty(){return t(this,Lt)}get captureOnceCSSProperty(){return t(this,zt)}get capturedCSSProperty(){return t(this,L)}get releasedCSSProperty(){return t(this,I)}get capturedFromStartCSSProperty(){return t(this,T)}get capturedFromFinishCSSProperty(){return t(this,M)}get releasedFromStartCSSProperty(){return t(this,Vt)}get releasedFromFinishCSSProperty(){return t(this,P)}get passedVarCSSProperty(){return t(this,ht)}get progressVarCSSProperty(){return t(this,nt)}get distanceVarCSSProperty(){return t(this,ot)}get startVarCSSProperty(){return t(this,ct)}get finishVarCSSProperty(){return t(this,lt)}get disabledCSSProperty(){return t(this,Et)}get dampingCSSProperty(){return t(this,jt)}get massCSSProperty(){return t(this,Jt)}get stiffnessCSSProperty(){return t(this,Qt)}get targetCSSProperty(){return t(this,Xt)}get isCaptured(){return t(this,w)}get isReleased(){return t(this,A)}get isCapturedFromStart(){return t(this,B)}get isReleasedFromStart(){return t(this,ut)}get isCapturedFromFinish(){return t(this,at)}get isReleasedFromFinish(){return t(this,N)}get directionPosition(){return t(this,Yt)}get directionSize(){return t(this,te)}get passed(){return t(this,E)}get progress(){return t(this,Ft)}get start(){return t(this,R)}get finish(){return t(this,_)}get distance(){return t(this,z)}get isCapturedOnce(){return t(this,kt)}get isDisabled(){return t(this,C)}resize(){r(this,te,this.scrollElement.vertical?this.offsetHeight:this.offsetWidth),r(this,Yt,this.scrollElement.vertical?Rt.getCumulativeOffsetTop(this,this.scrollElement):Rt.getCumulativeOffsetLeft(this,this.scrollElement)),r(this,R,this.getStart()),r(this,z,this.getDistance()),r(this,R,t(this,R)+t(this,Lt).current),r(this,z,t(this,z)+t(this,xt).current),r(this,_,t(this,R)+t(this,z)),this.scrollElement.currentScrollValue>t(this,_)&&!t(this,w).current&&!t(this,A).current&&(t(this,w).current=!0),this.setVar(t(this,ct).current,t(this,R)),this.setVar(t(this,lt).current,t(this,_)),this.setVar(t(this,ot).current,t(this,z)),t(this,E).max=t(this,z),r(this,pe,!0)}tick(){let s=this.scrollElement.currentScrollValue;t(this,Me).forEach(h=>{s+=h.value}),t(this,E).set(s-t(this,R));const e=Math.round(s);t(this,w).current&&(e>t(this,R)?t(this,B).current||o(this,Ze,Vs).call(this):t(this,B).current&&!t(this,ut).current&&o(this,Je,ks).call(this),e<t(this,_)?t(this,N).current&&!t(this,at).current&&o(this,je,Fs).call(this):t(this,B).current&&!t(this,N).current&&o(this,Qe,Rs).call(this)),e>t(this,R)&&e<t(this,_)?t(this,w).current||o(this,Ke,Ls).call(this):t(this,w).current&&(t(this,E).set(us.step(t(this,z)/2,t(this,E).current,0,t(this,z))),o(this,Ne,zs).call(this)),t(this,kt)&&t(this,zt).current&&(t(this,L).current&&t(this,d).classList.add(t(this,L).current),r(this,C,!0))}disable(){this.style.cssText="",r(this,Yt,0),r(this,te,0),t(this,E).reset(),r(this,Ft,0),r(this,R,0),r(this,z,0),r(this,_,0),r(this,pe,!1),t(this,w).current=!1,t(this,A).current=!1,t(this,B).current=!1,t(this,ut).current=!1,t(this,at).current=!1,t(this,N).current=!1,r(this,kt,!1),r(this,C,!0),o(this,_e,cs).call(this)}enable(){r(this,C,!1)}connectedCallback(){super.connectedCallback(),t(this,jt).observe(),t(this,Jt).observe(),t(this,Qt).observe(),t(this,Xt).observe(),t(this,Et).observe(),t(this,xt).observe(),t(this,Lt).observe(),t(this,zt).observe(),t(this,L).observe(),t(this,I).observe(),t(this,T).observe(),t(this,M).observe(),t(this,Vt).observe(),t(this,P).observe(),t(this,ht).observe(),t(this,nt).observe(),t(this,ot).observe(),t(this,ct).observe(),t(this,lt).observe();let s=!1;this.scrollElement.addEventListener("sectionsChange",t(this,He)),t(this,He).call(this),t(this,Et).current||this.enable(),t(this,jt).subscribe(e=>{t(this,E).damping=e.current}),t(this,Jt).subscribe(e=>{t(this,E).mass=e.current}),t(this,Qt).subscribe(e=>{t(this,E).stiffness=e.current}),t(this,Xt).subscribe(e=>{e.previous&&o(this,_e,cs).call(this),e.current?e.current==="parent"?r(this,d,this.parentElement||this):r(this,d,document.querySelector(e.current)||this):r(this,d,this)}),t(this,Et).subscribe(e=>{e.current&&!e.previous?this.disable():!e.current&&e.previous&&(this.resize(),this.enable())}),t(this,Lt).subscribe(()=>{s&&!t(this,C)&&this.resize()}),t(this,xt).subscribe(()=>{s&&!t(this,C)&&this.resize()}),t(this,L).subscribe(e=>{o(this,St,qt).call(this,e)}),t(this,T).subscribe(e=>{o(this,St,qt).call(this,e)}),t(this,M).subscribe(e=>{o(this,St,qt).call(this,e)}),t(this,I).subscribe(e=>{o(this,St,qt).call(this,e)}),t(this,Vt).subscribe(e=>{o(this,St,qt).call(this,e)}),t(this,P).subscribe(e=>{o(this,St,qt).call(this,e)}),t(this,zt).subscribe(e=>{t(this,C)||!e.current&&e.previous&&(this.resize(),this.enable())}),t(this,ht).subscribe(e=>{t(this,C)||(this.removeVar(e.previous),this.setVar(e.current,this.passed.current))}),t(this,nt).subscribe(e=>{t(this,C)||(this.removeVar(e.previous),this.setVar(e.current,t(this,Ft)))}),t(this,ct).subscribe(e=>{t(this,C)||(this.removeVar(e.previous),this.setVar(e.current,t(this,R)))}),t(this,lt).subscribe(e=>{t(this,C)||(this.removeVar(e.previous),this.setVar(e.current,t(this,_)))}),t(this,ot).subscribe(e=>{t(this,C)||(this.removeVar(e.previous),this.setVar(e.current,t(this,z)))}),t(this,E).subscribe(e=>{r(this,Ft,t(this,E).current/t(this,z)||0),this.setVar(t(this,ht).current,t(this,E).current.toFixed(6)),this.setVar(t(this,nt).current,t(this,Ft).toFixed(6))}),be.windowResizer.subscribe(t(this,Be),ge.RESIZE_ORDER.SEGMENT),this.scrollElement.onScroll(t(this,fe)),s=!0}disconnectedCallback(){be.windowResizer.unsubscribe(t(this,Be)),this.scrollElement.offScroll(t(this,fe)),t(this,jt).close(),t(this,Jt).close(),t(this,Qt).close(),t(this,Xt).close(),t(this,Et).close(),t(this,xt).close(),t(this,Lt).close(),t(this,zt).close(),t(this,L).close(),t(this,I).close(),t(this,T).close(),t(this,M).close(),t(this,Vt).close(),t(this,P).close(),t(this,ht).close(),t(this,nt).close(),t(this,ot).close(),t(this,ct).close(),t(this,lt).close(),t(this,w).close(),t(this,A).close(),t(this,B).close(),t(this,ut).close(),t(this,at).close(),t(this,N).close(),this.disable()}removeVar(s){s&&t(this,d).style.removeProperty(`--${s}`)}setVar(s,e){s&&t(this,d).style.setProperty(`--${s}`,e.toString())}getDistance(){return t(this,te)+t(this,Ae)}getStart(){return t(this,Yt)-t(this,Ae)}}jt=new WeakMap,Jt=new WeakMap,Qt=new WeakMap,Xt=new WeakMap,Et=new WeakMap,xt=new WeakMap,Lt=new WeakMap,zt=new WeakMap,L=new WeakMap,I=new WeakMap,T=new WeakMap,M=new WeakMap,Vt=new WeakMap,P=new WeakMap,ht=new WeakMap,nt=new WeakMap,ot=new WeakMap,ct=new WeakMap,lt=new WeakMap,w=new WeakMap,A=new WeakMap,B=new WeakMap,ut=new WeakMap,at=new WeakMap,N=new WeakMap,Me=new WeakMap,d=new WeakMap,Yt=new WeakMap,te=new WeakMap,Ae=new WeakMap,E=new WeakMap,Ft=new WeakMap,R=new WeakMap,z=new WeakMap,_=new WeakMap,pe=new WeakMap,kt=new WeakMap,C=new WeakMap,Ke=new WeakSet,Ls=function(){t(this,w).current=!0,t(this,A).current=!1,r(this,kt,!0),t(this,I).current&&t(this,d).classList.remove(t(this,I).current),t(this,P).current&&t(this,d).classList.remove(t(this,P).current),t(this,P).current&&t(this,d).classList.remove(t(this,P).current),t(this,L).current&&t(this,d).classList.add(t(this,L).current)},Ne=new WeakSet,zs=function(){t(this,A).current=!0,t(this,w).current=!1,r(this,kt,!0),t(this,L).current&&t(this,d).classList.remove(t(this,L).current),t(this,T).current&&t(this,d).classList.remove(t(this,T).current),t(this,M).current&&t(this,d).classList.remove(t(this,M).current),t(this,I).current&&t(this,d).classList.add(t(this,I).current)},Ze=new WeakSet,Vs=function(){t(this,w).current=!0,t(this,B).current=!0,t(this,ut).current=!1,t(this,T).current&&t(this,d).classList.add(t(this,T).current)},je=new WeakSet,Fs=function(){t(this,w).current=!0,t(this,at).current=!0,t(this,N).current=!1,t(this,M).current&&t(this,d).classList.add(t(this,M).current)},Je=new WeakSet,ks=function(){t(this,A).current=!0,t(this,ut).current=!0,t(this,B).current=!1,t(this,P).current&&t(this,d).classList.add(t(this,P).current)},Qe=new WeakSet,Rs=function(){t(this,A).current=!0,t(this,N).current=!0,t(this,at).current=!1,t(this,P).current&&t(this,d).classList.add(t(this,P).current)},Be=new WeakMap,fe=new WeakMap,St=new WeakSet,qt=function(s){if(t(this,C)){s.previous&&t(this,d).classList.remove(s.previous),s.current&&t(this,d).classList.remove(s.current);return}s.current&&t(this,w).current?(s.previous&&t(this,d).classList.remove(s.previous),t(this,d).classList.add(s.current)):!s.current&&s.previous&&t(this,d).classList.remove(s.previous)},Xe=new WeakSet,Ds=function(...s){s.forEach(e=>{e&&t(this,d).classList.remove(e)})},Ye=new WeakSet,Os=function(...s){s.forEach(e=>{e&&t(this,d).style.removeProperty(`--${e}`)})},_e=new WeakSet,cs=function(){o(this,Xe,Ds).call(this,t(this,L).current,t(this,T).current,t(this,M).current,t(this,I).current,t(this,Vt).current,t(this,P).current),o(this,Ye,Os).call(this,t(this,ht).current,t(this,nt).current,t(this,ot).current,t(this,ct).current,t(this,lt).current)},He=new WeakMap;customElements.get("e-scroll-segment")||customElements.define("e-scroll-segment",xs);exports.ScrollBulletButtonsElement=Es;exports.ScrollElement=Ue;exports.ScrollSegmentElement=xs;exports.ScrollSetButtonElement=Ps;exports.ScrollStepButtonElement=ws;exports.ScrollbarElement=Cs;
