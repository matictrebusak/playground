import{$ as r,Ba as Le,C as P,E as ne,G as xe,Ib as z,Kb as Ue,O as H,Ob as v,P as Ce,R as K,Ta as F,Tb as je,Ua as _,V as d,Va as N,W as p,Y as D,Za as Se,a as u,bb as W,ca as Oe,f as V,gb as oe,i as A,j as we,ja as w,m as Me,na as O,oa as f,q as C,r as Te,ra as M,sb as Pe,t as ke,tb as Be,ua as Fe,wa as Ne,xa as se,y as ie,ya as Re}from"./chunk-GRP6XNHJ.js";var G=new WeakMap,$=(()=>{class t{_appRef;_injector=r(w);_environmentInjector=r(Oe);load(e){let i=this._appRef=this._appRef||this._injector.get(Se),s=G.get(i);s||(s={loaders:new Set,refs:[]},G.set(i,s),i.onDestroy(()=>{G.get(i)?.refs.forEach(o=>o.destroy()),G.delete(i)})),s.loaders.has(e)||(s.loaders.add(e),s.refs.push(Ue(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),re=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,s){},styles:[".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}"],encapsulation:2,changeDetection:0})}return t})();function Xt(t){return t!=null&&`${t}`!="false"}function Ve(t,n=0){return ct(t)?Number(t):arguments.length===2?n:0}function ct(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function ae(t){return Array.isArray(t)?t:[t]}function y(t){return t instanceof M?t.nativeElement:t}var de;try{de=typeof Intl<"u"&&Intl.v8BreakIterator}catch{de=!1}var g=(()=>{class t{_platformId=r(Ne);isBrowser=this._platformId?je(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||de)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var B;function dt(){if(B==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>B=!0}))}finally{B=B||!1}return B}function L(t){return dt()?t:!!t.capture}var U=function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t}(U||{}),Y,T;function ni(){if(T==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return T=!1,T;if("scrollBehavior"in document.documentElement.style)T=!0;else{let t=Element.prototype.scrollTo;t?T=!/\{\s*\[native code\]\s*\}/.test(t.toString()):T=!1}}return T}function si(){if(typeof document!="object"||!document)return U.NORMAL;if(Y==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Y=U.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Y=t.scrollLeft===0?U.NEGATED:U.INVERTED),t.remove()}return Y}var ce;function lt(){if(ce==null){let t=typeof document<"u"?document.head:null;ce=!!(t&&(t.createShadowRoot||t.attachShadow))}return ce}function He(t){if(lt()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function I(t){return t.composedPath?t.composedPath()[0]:t.target}var Ke=new Set,k,ut=(()=>{class t{_platform=r(g);_nonce=r(Re,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):mt}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&ht(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ht(t,n){if(!Ke.has(t))try{k||(k=document.createElement("style"),n&&k.setAttribute("nonce",n),k.setAttribute("type","text/css"),document.head.appendChild(k)),k.sheet&&(k.sheet.insertRule(`@media ${t} {body{ }}`,0),Ke.add(t))}catch(e){console.error(e)}}function mt(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var ze=(()=>{class t{_mediaMatcher=r(ut);_zone=r(f);_queries=new Map;_destroySubject=new A;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return We(ae(e)).some(s=>this._registerQuery(s).mql.matches)}observe(e){let s=We(ae(e)).map(a=>this._registerQuery(a).observable),o=Te(s);return o=ke(o.pipe(ne(1)),o.pipe(H(1),P(0))),o.pipe(C(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:h,query:b})=>{c.matches=c.matches||h,c.breakpoints[b]=h}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new V(a=>{let c=h=>this._zone.run(()=>a.next(h));return i.addListener(c),()=>{i.removeListener(c)}}).pipe(Ce(i),C(({matches:a})=>({query:e,matches:a})),K(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function We(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var mi={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function fi(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}function pt(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var Ge=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ft=(()=>{class t{_mutationObserverFactory=r(Ge);_observedElements=new Map;_ngZone=r(f);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=y(e);return new V(s=>{let a=this._observeElement(i).pipe(C(c=>c.filter(h=>!pt(h))),ie(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{s.next(c)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new A,s=this._mutationObserverFactory.create(o=>i.next(o));s&&s.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:s,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:s}=this._observedElements.get(e);i&&i.disconnect(),s.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mi=(()=>{class t{_contentObserver=r(ft);_elementRef=r(M);event=new O;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Ve(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(P(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",z],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"],features:[W]})}return t})(),Ti=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=_({type:t});static \u0275inj=p({providers:[Ge]})}return t})();var gt=(()=>{class t{_platform=r(g);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return vt(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=bt(Tt(e));if(i&&($e(i)===-1||!this.isVisible(i)))return!1;let s=e.nodeName.toLowerCase(),o=$e(e);return e.hasAttribute("contenteditable")?o!==-1:s==="iframe"||s==="object"||this._platform.WEBKIT&&this._platform.IOS&&!wt(e)?!1:s==="audio"?e.hasAttribute("controls")?o!==-1:!1:s==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return Mt(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bt(t){try{return t.frameElement}catch{return null}}function vt(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function yt(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function It(t){return At(t)&&t.type=="hidden"}function Et(t){return Dt(t)&&t.hasAttribute("href")}function At(t){return t.nodeName.toLowerCase()=="input"}function Dt(t){return t.nodeName.toLowerCase()=="a"}function Qe(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function $e(t){if(!Qe(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function wt(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function Mt(t){return It(t)?!1:yt(t)||Et(t)||t.hasAttribute("contenteditable")||Qe(t)}function Tt(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var he=class{_element;_checker;_ngZone;_document;_injector;_startAnchor;_endAnchor;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,s,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=s,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let s=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(s)return s}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let s=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(s)return s}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?Le(n,{injector:this._injector}):setTimeout(n)}},tn=(()=>{class t{_checker=r(gt);_ngZone=r(f);_document=r(v);_injector=r(w);constructor(){r($).load(re)}create(e,i=!1){return new he(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function me(t){return t.buttons===0||t.detail===0}function pe(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var kt=new D("cdk-input-modality-detector-options"),xt={ignoreKeys:[18,17,224,91,16]},Xe=650,S=L({passive:!0,capture:!0}),Ct=(()=>{class t{_platform=r(g);modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new we(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=I(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Xe||(this._modality.next(me(e)?"keyboard":"mouse"),this._mostRecentTarget=I(e))};_onTouchstart=e=>{if(pe(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=I(e)};constructor(){let e=r(f),i=r(v),s=r(kt,{optional:!0});this._options=u(u({},xt),s),this.modalityDetected=this._modality.pipe(H(1)),this.modalityChanged=this.modalityDetected.pipe(xe()),this._platform.isBrowser&&e.runOutsideAngular(()=>{i.addEventListener("keydown",this._onKeydown,S),i.addEventListener("mousedown",this._onMousedown,S),i.addEventListener("touchstart",this._onTouchstart,S)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,S),document.removeEventListener("mousedown",this._onMousedown,S),document.removeEventListener("touchstart",this._onTouchstart,S))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Q=function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t}(Q||{}),Ot=new D("cdk-focus-monitor-default-options"),Z=L({passive:!0,capture:!0}),nn=(()=>{class t{_ngZone=r(f);_platform=r(g);_inputModalityDetector=r(Ct);_origin=null;_lastFocusOrigin;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)};_document=r(v,{optional:!0});_stopInputModalityDetector=new A;constructor(){let e=r(Ot,{optional:!0});this._detectionMode=e?.detectionMode||Q.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=I(e);for(let s=i;s;s=s.parentElement)e.type==="focus"?this._onFocus(e,s):this._onBlur(e,s)};monitor(e,i=!1){let s=y(e);if(!this._platform.isBrowser||s.nodeType!==1)return Me();let o=He(s)||this._getDocument(),a=this._elementInfo.get(s);if(a)return i&&(a.checkChildren=!0),a.subject;let c={checkChildren:i,subject:new A,rootNode:o};return this._elementInfo.set(s,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let i=y(e),s=this._elementInfo.get(i);s&&(s.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(s))}focusVia(e,i,s){let o=y(e),a=this._getDocument().activeElement;o===a?this._getClosestElementsInfo(o).forEach(([c,h])=>this._originChanged(c,i,h)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(s))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Q.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Q.IMMEDIATE){clearTimeout(this._originTimeoutId);let s=this._originFromTouchInteraction?Xe:1;this._originTimeoutId=setTimeout(()=>this._origin=null,s)}})}_onFocus(e,i){let s=this._elementInfo.get(i),o=I(e);!s||!s.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),s)}_onBlur(e,i){let s=this._elementInfo.get(i);!s||s.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(s,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,s=this._rootNodeFocusListenerCount.get(i)||0;s||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Z),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Z)}),this._rootNodeFocusListenerCount.set(i,s+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(K(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let s=this._rootNodeFocusListenerCount.get(i);s>1?this._rootNodeFocusListenerCount.set(i,s-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Z),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Z),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,s){this._setClasses(e,i),this._emitOrigin(s,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((s,o)=>{(o===e||s.checkChildren&&o.contains(e))&&i.push([o,s])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:s}=this._inputModalityDetector;if(s!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var x=function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t}(x||{}),Ye="cdk-high-contrast-black-on-white",Ze="cdk-high-contrast-white-on-black",le="cdk-high-contrast-active",qe=(()=>{class t{_platform=r(g);_hasCheckedHighContrastMode;_document=r(v);_breakpointSubscription;constructor(){this._breakpointSubscription=r(ze).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return x.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,s=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(s&&s.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return x.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return x.BLACK_ON_WHITE}return x.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(le,Ye,Ze),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===x.BLACK_ON_WHITE?e.add(le,Ye):i===x.WHITE_ON_BLACK&&e.add(le,Ze)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ue={},Ft=(()=>{class t{_appId=r(Fe);getId(e){return this._appId!=="ng"&&(e+=this._appId),ue.hasOwnProperty(e)||(ue[e]=0),`${e}${ue[e]++}`}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Lt=new D("cdk-dir-doc",{providedIn:"root",factory:St});function St(){return r(v)}var Pt=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Bt(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Pt.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var mn=(()=>{class t{value="ltr";change=new O;constructor(){let e=r(Lt,{optional:!0});if(e){let i=e.body?e.body.dir:null,s=e.documentElement?e.documentElement.dir:null;this.value=Bt(i||s||"ltr")}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=_({type:t});static \u0275inj=p({})}return t})();var Ut=["mat-internal-form-field",""],jt=["*"];var be=(()=>{class t{constructor(){r(qe)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=_({type:t});static \u0275inj=p({imports:[fe,fe]})}return t})();var Qn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,s){},styles:['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}'],encapsulation:2,changeDetection:0})}return t})();var m=function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t}(m||{}),ve=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=m.HIDDEN;constructor(n,e,i,s=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=s}fadeOut(){this._renderer.fadeOutRipple(this)}},Je=L({passive:!0,capture:!0}),ye=class{_events=new Map;addHandler(n,e,i,s){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(s):o.set(i,new Set([s]))}else this._events.set(e,new Map([[i,new Set([s])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Je)})}removeHandler(n,e,i){let s=this._events.get(n);if(!s)return;let o=s.get(e);o&&(o.delete(i),o.size===0&&s.delete(e),s.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Je)))}_delegateEventHandler=n=>{let e=I(n);e&&this._events.get(n.type)?.forEach((i,s)=>{(s===e||s.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},q={enterDuration:225,exitDuration:150},Vt=800,et=L({passive:!0,capture:!0}),tt=["mousedown","touchstart"],it=["mouseup","mouseleave","touchend","touchcancel"],Ht=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,s){},styles:[".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}"],encapsulation:2,changeDetection:0})}return t})(),J=class t{_target;_ngZone;_platform;_containerElement;_triggerElement;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect;static _eventManager=new ye;constructor(n,e,i,s,o){this._target=n,this._ngZone=e,this._platform=s,s.isBrowser&&(this._containerElement=y(i)),o&&o.get($).load(Ht)}fadeInRipple(n,e,i={}){let s=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=u(u({},q),i.animation);i.centered&&(n=s.left+s.width/2,e=s.top+s.height/2);let a=i.radius||Kt(n,e,s),c=n-s.left,h=e-s.top,b=o.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${c-a}px`,l.style.top=`${h-a}px`,l.style.height=`${a*2}px`,l.style.width=`${a*2}px`,i.color!=null&&(l.style.backgroundColor=i.color),l.style.transitionDuration=`${b}ms`,this._containerElement.appendChild(l);let Ie=window.getComputedStyle(l),at=Ie.transitionProperty,Ee=Ie.transitionDuration,ee=at==="none"||Ee==="0s"||Ee==="0s, 0s"||s.width===0&&s.height===0,E=new ve(this,l,i,ee);l.style.transform="scale3d(1, 1, 1)",E.state=m.FADING_IN,i.persistent||(this._mostRecentTransientRipple=E);let j=null;return!ee&&(b||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ae=()=>{j&&(j.fallbackTimer=null),clearTimeout(De),this._finishRippleTransition(E)},te=()=>this._destroyRipple(E),De=setTimeout(te,b+100);l.addEventListener("transitionend",Ae),l.addEventListener("transitioncancel",te),j={onTransitionEnd:Ae,onTransitionCancel:te,fallbackTimer:De}}),this._activeRipples.set(E,j),(ee||!b)&&this._finishRippleTransition(E),E}fadeOutRipple(n){if(n.state===m.FADING_OUT||n.state===m.HIDDEN)return;let e=n.element,i=u(u({},q),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=m.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=y(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,tt.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{it.forEach(e=>{this._triggerElement.addEventListener(e,this,et)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===m.FADING_IN?this._startFadeOutTransition(n):n.state===m.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=m.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=m.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=me(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Vt;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!pe(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===m.VISIBLE||n.config.terminateOnPointerUp&&n.state===m.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(tt.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(it.forEach(e=>n.removeEventListener(e,this,et)),this._pointerUpEventsRegistered=!1))}};function Kt(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),s=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+s*s)}var rt=new D("mat-ripple-global-options"),Xn=(()=>{class t{_elementRef=r(M);_animationMode=r(se,{optional:!0});color;unbounded;centered;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=r(f),i=r(g),s=r(rt,{optional:!0}),o=r(w);this._globalOptions=s||{},this._rippleRenderer=new J(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:u(u(u({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,s){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,u(u({},this.rippleConfig),s)):this._rippleRenderer.fadeInRipple(0,0,u(u({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=N({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,s){i&2&&oe("mat-ripple-unbounded",s.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})(),qn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=_({type:t});static \u0275inj=p({imports:[be,be]})}return t})();var Jn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=_({type:t});static \u0275inj=p({imports:[be]})}return t})();var nt={capture:!0},st=["focus","mousedown","mouseenter","touchstart"],_e="mat-ripple-loader-uninitialized",ge="mat-ripple-loader-class-name",ot="mat-ripple-loader-centered",X="mat-ripple-loader-disabled",es=(()=>{class t{_document=r(v,{optional:!0});_animationMode=r(se,{optional:!0});_globalRippleOptions=r(rt,{optional:!0});_platform=r(g);_ngZone=r(f);_injector=r(w);_hosts=new Map;constructor(){this._ngZone.runOutsideAngular(()=>{for(let e of st)this._document?.addEventListener(e,this._onInteraction,nt)})}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);for(let i of st)this._document?.removeEventListener(i,this._onInteraction,nt)}configureRipple(e,i){e.setAttribute(_e,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(ge))&&e.setAttribute(ge,i.className||""),i.centered&&e.setAttribute(ot,""),i.disabled&&e.setAttribute(X,"")}setDisabled(e,i){let s=this._hosts.get(e);s?(s.target.rippleDisabled=i,!i&&!s.hasSetUpEvents&&(s.hasSetUpEvents=!0,s.renderer.setupTriggerEvents(e))):i?e.setAttribute(X,""):e.removeAttribute(X)}_onInteraction=e=>{let i=I(e);if(i instanceof HTMLElement){let s=i.closest(`[${_e}="${this._globalRippleOptions?.namespace??""}"]`);s&&this._createRipple(s)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(ge)),e.append(i);let s=this._animationMode==="NoopAnimations",o=this._globalRippleOptions,a=s?0:o?.animation?.enterDuration??q.enterDuration,c=s?0:o?.animation?.exitDuration??q.exitDuration,h={rippleDisabled:s||o?.disabled||e.hasAttribute(X),rippleConfig:{centered:e.hasAttribute(ot),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:c}}},b=new J(h,this._ngZone,i,this._platform,this._injector),l=!h.rippleDisabled;l&&b.setupTriggerEvents(e),this._hosts.set(e,{target:h,renderer:b,hasSetUpEvents:l}),e.removeAttribute(_e)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ts=(()=>{class t{labelPosition;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,s){i&2&&oe("mdc-form-field--align-end",s.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Ut,ngContentSelectors:jt,decls:1,vars:0,template:function(i,s){i&1&&(Pe(),Be(0))},styles:[".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}"],encapsulation:2,changeDetection:0})}return t})();export{g as a,U as b,ni as c,si as d,$ as e,fi as f,Xt as g,Ve as h,y as i,Mi as j,Ti as k,ze as l,mi as m,gt as n,tn as o,nn as p,Ft as q,mn as r,be as s,Qn as t,J as u,rt as v,Xn as w,qn as x,Jn as y,es as z,ts as A};