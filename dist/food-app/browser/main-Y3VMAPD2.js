import{f as Fe,g as w,h as T,m as Pe,n as _,p as Ee,u as Te}from"./chunk-POMYC7TQ.js";import"./chunk-MGQYICAX.js";import{d as Ae}from"./chunk-QLPCJ2A4.js";import"./chunk-Z27SZG3N.js";import{k as je}from"./chunk-N5TH54SU.js";import{ia as Re,n as Ne,o as Oe}from"./chunk-KPV4IS2N.js";import{b as ye,c as ve,d as F,e as be,f as P,g as Ie,h as Ce,j as we,k as Se,m as C,o as De}from"./chunk-7GJXF5WO.js";import{$ as p,$a as v,$b as ue,Ab as b,B as G,Bb as I,Ea as y,Fc as he,Gc as fe,Jb as A,Jc as ge,Kb as se,Lb as ae,Pb as le,Qb as ce,Ra as te,Rb as pe,Rc as Me,Sc as k,Tb as de,Ua as O,Uc as E,V as Q,Vc as xe,Wc as V,Xa as ie,Y,Ya as M,_ as c,a as Z,ab as u,ac as me,b as q,bb as ne,cb as re,da as $,ea as h,fa as S,fb as x,ia as N,j as W,ja as d,k as X,la as J,ma as K,nb as D,pb as a,qb as R,tb as oe,va as ee,xc as j,zb as f}from"./chunk-5M6T3PC5.js";var _e=(()=>{let e=class e{constructor(t){this._Router=t}canActivate(t,i){return localStorage.getItem("userToken")!==null?!0:(this._Router.navigateByUrl("auth/login"),!1)}};e.\u0275fac=function(i){return new(i||e)(h(Se))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Qe=[{path:"",redirectTo:"auth",pathMatch:"full"},{path:"auth",loadChildren:()=>import("./chunk-3VITPCHD.js").then(n=>n.AuthModule)},{path:"dashboard",canActivate:[_e],loadChildren:()=>import("./chunk-AUZ4YG5T.js").then(n=>n.DashboardModule)}],ze=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=p({imports:[C.forRoot(Qe),C]});let n=e;return n})();var $e=["overlay"];function Je(n,e){n&1&&I(0,"div")}function Ke(n,e){if(n&1&&(f(0,"div"),D(1,Je,1,0,"div",6),b()),n&2){let r=A(2);oe(r.spinner.class),R("color",r.spinner.color),v(),a("ngForOf",r.spinner.divArray)}}function et(n,e){if(n&1&&(I(0,"div",7),ue(1,"safeHtml")),n&2){let r=A(2);a("innerHTML",me(1,1,r.template),te)}}function tt(n,e){if(n&1&&(f(0,"div",1,2),D(2,Ke,2,5,"div",3)(3,et,2,3,"div",4),f(4,"div",5),ae(5),b()()),n&2){let r=A();R("background-color",r.spinner.bdColor)("z-index",r.spinner.zIndex)("position",r.spinner.fullScreen?"fixed":"absolute"),a("@.disabled",r.disableAnimation)("@fadeIn","in"),v(2),a("ngIf",!r.template),v(),a("ngIf",r.template),v(),R("z-index",r.spinner.zIndex)}}var it=["*"],nt={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},B={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},L="primary",m=class n{constructor(e){Object.assign(this,e)}static create(e){return!e?.template&&!e?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new n(e)}},U=(()=>{let e=class e{constructor(){this.spinnerObservable=new X(null)}getSpinner(t){return this.spinnerObservable.asObservable().pipe(G(i=>i&&i.name===t))}show(t=L,i){return new Promise((o,s)=>{setTimeout(()=>{i&&Object.keys(i).length?(i.name=t,this.spinnerObservable.next(new m(q(Z({},i),{show:!0}))),o(!0)):(this.spinnerObservable.next(new m({name:t,show:!0})),o(!0))},10)})}hide(t=L,i=10){return new Promise((o,s)=>{setTimeout(()=>{this.spinnerObservable.next(new m({name:t,show:!1})),o(!0)},i)})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ke=new $("NGX_SPINNER_CONFIG"),rt=(()=>{let e=class e{constructor(t){this._sanitizer=t}transform(t){if(t)return this._sanitizer.bypassSecurityTrustHtml(t)}};e.\u0275fac=function(i){return new(i||e)(u(Ie,16))},e.\u0275pipe=J({name:"safeHtml",type:e,pure:!0});let n=e;return n})(),Ve=(()=>{let e=class e{constructor(t,i,o,s){this.spinnerService=t,this.changeDetector=i,this.elementRef=o,this.globalConfig=s,this.disableAnimation=!1,this.spinner=new m,this.ngUnsubscribe=new W,this.setDefaultOptions=()=>{let{type:l}=this.globalConfig??{};this.spinner=m.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??l,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=B.BD_COLOR,this.zIndex=B.Z_INDEX,this.color=B.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=L,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(Q(this.ngUnsubscribe)).subscribe(t=>{this.setDefaultOptions(),Object.assign(this.spinner,t),t.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(t){return t===this.elementRef.nativeElement.parentElement?!0:t.parentNode&&this.isSpinnerZone(t.parentNode)}ngOnChanges(t){for(let i in t)if(i){let o=t[i];if(o.isFirstChange())return;typeof o.currentValue<"u"&&o.currentValue!==o.previousValue&&o.currentValue!==""&&(this.spinner[i]=o.currentValue,i==="showSpinner"&&(o.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),i==="name"&&this.initObservable())}}getClass(t,i){this.spinner.divCount=nt[t],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((s,l)=>l);let o="";switch(i.toLowerCase()){case"small":o="la-sm";break;case"medium":o="la-2x";break;case"large":o="la-3x";break;default:break}return"la-"+t+" "+o}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}};e.\u0275fac=function(i){return new(i||e)(u(U),u(re),u(ie),u(ke,8))},e.\u0275cmp=N({type:e,selectors:[["ngx-spinner"]],viewQuery:function(i,o){if(i&1&&le($e,5),i&2){let s;ce(s=pe())&&(o.spinnerDOM=s.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},features:[K],ngContentSelectors:it,decls:1,vars:1,consts:[["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],["overlay",""],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(i,o){i&1&&(se(),D(0,tt,6,12,"div",0)),i&2&&a("ngIf",o.spinner.show)},dependencies:[he,fe,rt],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[Me("fadeIn",[xe("in",E({opacity:1})),V(":enter",[E({opacity:0}),k(300)]),V(":leave",k(200,E({opacity:0})))])]},changeDetection:0});let n=e;return n})(),Be=(()=>{let e=class e{static forRoot(t){return{ngModule:e,providers:[{provide:ke,useValue:t}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=p({imports:[ge]});let n=e;return n})();var Le=(()=>{let e=class e{constructor(t){this._spinner=t,this.title="foodApp"}ngOnInit(){this._spinner.show(),setTimeout(()=>{this._spinner.hide()},4e3)}};e.\u0275fac=function(i){return new(i||e)(u(U))},e.\u0275cmp=N({type:e,selectors:[["app-root"]],decls:4,vars:1,consts:[["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-rotate",3,"fullScreen"],[2,"color","white"]],template:function(i,o){i&1&&(f(0,"ngx-spinner",0)(1,"p",1),de(2," Loading... "),b()(),I(3,"router-outlet")),i&2&&a("fullScreen",!0)},dependencies:[we,Ve]});let n=e;return n})();var st="@",at=(()=>{let e=class e{constructor(t,i,o,s,l){this.doc=t,this.delegate=i,this.zone=o,this.animationType=s,this.moduleImpl=l,this._rendererFactoryPromise=null,this.scheduler=S(O,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-3WMRUSSZ.js")).catch(i=>{throw new Y(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:o})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let s=new o(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,i){let o=this.delegate.createRenderer(t,i);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let s=new H(o);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let Xe=l.createRenderer(t,i);s.use(Xe)}).catch(l=>{s.use(o)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){ne()},e.\u0275prov=c({token:e,factory:e.\u0275fac});let n=e;return n})(),H=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,t,i){this.delegate.insertBefore(e,r,t,i)}removeChild(e,r,t){this.delegate.removeChild(e,r,t)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,t,i){this.delegate.setAttribute(e,r,t,i)}removeAttribute(e,r,t){this.delegate.removeAttribute(e,r,t)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,t,i){this.delegate.setStyle(e,r,t,i)}removeStyle(e,r,t){this.delegate.removeStyle(e,r,t)}setProperty(e,r,t){this.shouldReplay(r)&&this.replay.push(i=>i.setProperty(e,r,t)),this.delegate.setProperty(e,r,t)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,t){return this.shouldReplay(r)&&this.replay.push(i=>i.listen(e,r,t)),this.delegate.listen(e,r,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(st)}};function Ue(n="animations"){return ee([{provide:M,useFactory:(e,r,t)=>new at(e,r,t,n),deps:[j,F,x]},{provide:y,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var z=class{intercept(e,r){let t=localStorage.getItem("userToken"),o=e.clone({url:"https://upskilling-egypt.com:443/api/v1/"+e.url,setHeaders:{Authorization:`Bearer ${t}`}});return r.handle(o)}};var lt=(()=>{let e=class e extends _{constructor(t,i,o){super(t,i,o,S(O,{optional:!0}))}ngOnDestroy(){this.flush()}};e.\u0275fac=function(i){return new(i||e)(h(j),h(w),h(T))},e.\u0275prov=c({token:e,factory:e.\u0275fac});let n=e;return n})();function ct(){return new Pe}function pt(n,e,r){return new Te(n,e,r)}var Ze=[{provide:T,useFactory:ct},{provide:_,useClass:lt},{provide:M,useFactory:pt,deps:[F,_,x]}],He=[{provide:w,useFactory:()=>new Ee},{provide:y,useValue:"BrowserAnimations"},...Ze],dt=[{provide:w,useClass:Fe},{provide:y,useValue:"NoopAnimations"},...Ze],qe=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:t.disableAnimations?dt:He}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e}),e.\u0275inj=p({providers:He,imports:[P]});let n=e;return n})();var We=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=d({type:e,bootstrap:[Le]}),e.\u0275inj=p({providers:[{provide:ye,useClass:z,multi:!0},Ce(),Ue()],imports:[P,ze,ve,C,Ae,Re,Oe,je,Ne,Be,qe,De.forRoot({closeButton:!0})]});let n=e;return n})();be().bootstrapModule(We).catch(n=>console.error(n));