import{a as P}from"./chunk-Z27SZG3N.js";import{a as K,b as Q,c as X,d as ee,k as te}from"./chunk-N5TH54SU.js";import{a as Z,b as C,d as z,e as B,f as G,h as N,j as H,ka as Y,l as V,m as J}from"./chunk-KPV4IS2N.js";import{j as L,k as h,l as E,m as T,n as W}from"./chunk-7GJXF5WO.js";import{$ as A,$a as a,Ab as n,Bb as d,Cb as j,Db as U,Fc as k,Gc as x,Ib as y,Jb as w,Jc as q,Sb as D,Tb as c,Ub as v,Vb as R,_ as F,_b as $,ab as u,ea as I,ia as f,ja as M,nb as p,pb as m,tb as g,zb as i}from"./chunk-5M6T3PC5.js";var de=t=>[t];function pe(t,e){if(t&1&&(i(0,"li")(1,"a",5)(2,"span"),d(3,"i"),n(),i(4,"span"),c(5),n()()()),t&2){let s=w().$implicit;a(),m("routerLink",$(4,de,s.link)),a(2),g(s.icon),a(2),v(s.text)}}function ue(t,e){if(t&1&&(j(0),p(1,pe,6,6,"li",4),U()),t&2){let s=e.$implicit;a(),m("ngIf",s.isActive)}}var ne=(()=>{let e=class e{constructor(l,o){this._AuthService=l,this._Router=o,this.Menu=[{text:"Home",link:"/dashboard/home",icon:"fa-solid fa-house",isActive:this.isAdmin()||this.isUser()},{text:"Users",link:"/dashboard/admin/listuser",icon:"fa-solid fa-users",isActive:this.isAdmin()},{text:"Recipes",link:"/dashboard/admin/recipe",icon:"fa-solid fa-bowl-food",isActive:this.isAdmin()},{text:"Recipes",link:"/dashboard/users/recipe-user",icon:"fa-solid fa-bowl-food",isActive:this.isUser()},{text:"Categories",link:"/dashboard/admin/categories",icon:"fa-regular fa-calendar-days",isActive:this.isAdmin()},{text:"Favorites",link:"/dashboard/users/favorites",icon:"fa-solid fa-heart",isActive:this.isUser()},{text:"Change Password",link:"/dashboard/change-Password",icon:"fa-solid fa-unlock-keyhole",isActive:this.isAdmin()||this.isUser()},{text:"Profile",link:"/dashboard/users/profile",icon:"fa-regular fa-id-badge",isActive:this.isUser()}]}isAdmin(){return console.log(this._AuthService.role),this._AuthService.role=="SuperAdmin"}isUser(){return console.log(this._AuthService.role),this._AuthService.role=="SystemUser"}};e.\u0275fac=function(o){return new(o||e)(u(P),u(h))},e.\u0275cmp=f({type:e,selectors:[["app-sidebar"]],decls:7,vars:1,consts:[[1,"bg-dark","position-fixed","vh-100"],[1,"text-center","py-5"],["src","/../assets/images/logowithoutText.svg"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"text-white",3,"routerLink"]],template:function(o,r){o&1&&(i(0,"section",0)(1,"div",1)(2,"a"),d(3,"img",2),n()(),i(4,"div")(5,"ul"),p(6,ue,2,1,"ng-container",3),n()()()),o&2&&(a(6),m("ngForOf",r.Menu))},dependencies:[k,x,E],styles:["section[_ngcontent-%COMP%]{width:220px;border-top-right-radius:58px}section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:10px}section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px;list-style:none}section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 6px}"]});let t=e;return t})();var oe=(()=>{let e=class e{constructor(l){this._AuthService=l,this.userName=localStorage.getItem("userName")}myLogout(){this._AuthService.logOut()}};e.\u0275fac=function(o){return new(o||e)(u(P))},e.\u0275cmp=f({type:e,selectors:[["app-navbar"]],decls:19,vars:2,consts:[[1,"row","justify-content-end"],[1,"col-4","px-4"],[1,"d-flex","align-items-center","justify-content-end"],["src","/../assets/images/profile.png",1,""],[1,"mt-2","p-3"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],[1,"material-symbols-outlined","primary"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"primary"]],template:function(o,r){if(o&1&&(i(0,"section")(1,"div",0)(2,"div",1)(3,"div",2),d(4,"img",3),i(5,"h6",4),c(6),n(),i(7,"button",5)(8,"mat-icon")(9,"span",6),c(10,"expand_more"),n()()(),i(11,"mat-menu",null,7)(13,"button",8),y("click",function(){return r.myLogout()}),i(14,"mat-icon")(15,"span",6),c(16,"logout"),n()(),i(17,"span",9),c(18,"Logout"),n()()()()()()()),o&2){let S=D(12);a(6),v(r.userName),a(),m("matMenuTriggerFor",S)}},dependencies:[Y,Q,K,X,ee],styles:["section[_ngcontent-%COMP%]{border-radius:18px;background-color:#ededed74;margin:15px 10px}"]});let t=e;return t})();var re=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=f({type:e,selectors:[["app-dashboard"]],decls:7,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-2","px-0"],[1,"col-10"]],template:function(o,r){o&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),d(3,"app-sidebar"),n(),i(4,"div",3),d(5,"app-navbar")(6,"router-outlet"),n()()())},dependencies:[L,ne,oe]});let t=e;return t})();var ae=(()=>{let e=class e{constructor(l){this._Router=l}canActivate(l,o){return localStorage.getItem("userToken")!==null&&localStorage.getItem("userRole")=="SuperAdmin"?!0:(this._Router.navigateByUrl("auth/login"),!1)}};e.\u0275fac=function(o){return new(o||e)(I(h))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var se=(()=>{let e=class e{constructor(l){this._Router=l}canActivate(l,o){return localStorage.getItem("userToken")!==null&&localStorage.getItem("userRole")=="SystemUser"?!0:(this._Router.navigateByUrl("auth/login"),!1)}};e.\u0275fac=function(o){return new(o||e)(I(h))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function ge(t,e){if(t&1&&(i(0,"div",12)(1,"div",13)(2,"h2"),c(3),i(4,"span",14),c(5),n(),c(6," !"),n(),i(7,"p"),c(8),n()(),i(9,"div",15)(10,"button",16)(11,"span"),c(12),n(),i(13,"span",17),d(14,"i"),n()()()()),t&2){let s=w().$implicit;a(3),R("",s.text," "),a(2),v(s.textSpan),a(3),v(s.paragraph),a(2),m("routerLink",s.link),a(2),v(s.buttonName),a(2),g(s.icon)}}function we(t,e){if(t&1&&(i(0,"div",9)(1,"div",10),p(2,ge,15,7,"div",11),n()()),t&2){let s=e.$implicit;a(2),m("ngIf",s.isActive)}}var le=(()=>{let e=class e{constructor(l,o){this._Router=l,this._AuthService=o,this.userName=localStorage.getItem("userName"),this.type=[{text:"Fill the",link:"/dashboard/admin/recipe",icon:"fa-solid fa-arrow-right",textSpan:"Recipe",paragraph:"you can now fill the meals easily using the table and form , click here and sill it with the table !",buttonName:"Fill Recipe",isActive:this.isAdmin()},{text:"Show the",link:"/dashboard/users/recipe-user",icon:"fa-solid fa-arrow-right",textSpan:"Recipe",paragraph:"you can now show the meals easily using this button, click here and sill it with the table !",buttonName:"Show Recipe",isActive:this.isUser()}],this.userRole=""}ngOnInit(){this.openFillRecipes()}isAdmin(){return console.log(this._AuthService.role),this._AuthService.role=="SuperAdmin"}isUser(){return console.log(this._AuthService.role),this._AuthService.role=="SystemUser"}openFillRecipes(){this.userRole=="SuperAdmin"?this._Router.navigateByUrl("/dashboard/admin/recipes"):this.userRole=="SystemUser"&&this._Router.navigateByUrl("dashboard/users/recipe-user")}};e.\u0275fac=function(o){return new(o||e)(u(h),u(P))},e.\u0275cmp=f({type:e,selectors:[["app-home"]],decls:16,vars:2,consts:[["id","home"],[1,"container"],[1,"row","align-items-center"],[1,"col-6","p-5"],[1,"mx-2","lead","text-white-50","fa-1x"],[1,"pt-2"],[1,"col-6","text-end"],["src","../../../assets/images/eating vegan food-rafiki.png",1,"w-50"],["class","fillRecipes",4,"ngFor","ngForOf"],[1,"fillRecipes"],[1,""],["class","row align-items-center mt-4 p-4",4,"ngIf"],[1,"row","align-items-center","mt-4","p-4"],[1,"col-8"],[1,"text-success"],[1,"col-4","text-end"],[1,"main","px-4",3,"routerLink"],[1,"mx-2"]],template:function(o,r){o&1&&(i(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2")(5,"span"),c(6,"Welcome"),n(),i(7,"span",4),c(8),n()(),i(9,"p",5),c(10,"This is a welcoming screen for the entry of the application ,"),d(11,"br"),c(12," you can now see the options. "),n()(),i(13,"div",6),d(14,"img",7),n()()()(),p(15,we,3,1,"div",8)),o&2&&(a(8),R("",r.userName," !"),a(7),m("ngForOf",r.type))},dependencies:[k,x,E],styles:['#home[_ngcontent-%COMP%]{background-image:url("./media/background-VFJZGJHP.png");background-position:center center;background-color:#009247;background-repeat:no-repeat;border-radius:24px;color:#fff;margin-top:10px}']});let t=e;return t})();function ve(t,e){t&1&&(i(0,"p",19),c(1,"oldPassword is required"),n())}function Pe(t,e){t&1&&(i(0,"p",19),c(1,"oldPassword should start with a capital letter"),n())}function _e(t,e){if(t&1&&(i(0,"div",17),p(1,ve,2,0,"p",18)(2,Pe,2,0,"p",18),n()),t&2){let s=w();a(),m("ngIf",s.changePasswordForm.controls.oldPassword==null||s.changePasswordForm.controls.oldPassword.errors==null?null:s.changePasswordForm.controls.oldPassword.errors.required),a(),m("ngIf",s.changePasswordForm.controls.oldPassword==null||s.changePasswordForm.controls.oldPassword.errors==null?null:s.changePasswordForm.controls.oldPassword.errors.pattern)}}function ye(t,e){t&1&&(i(0,"p",19),c(1,"newPassword is required"),n())}function Ce(t,e){t&1&&(i(0,"p",19),c(1,"newPassword should start with a capital letter"),n())}function Se(t,e){if(t&1&&(i(0,"div",17),p(1,ye,2,0,"p",18)(2,Ce,2,0,"p",18),n()),t&2){let s=w();a(),m("ngIf",s.changePasswordForm.controls.newPassword==null||s.changePasswordForm.controls.newPassword.errors==null?null:s.changePasswordForm.controls.newPassword.errors.required),a(),m("ngIf",s.changePasswordForm.controls.newPassword==null||s.changePasswordForm.controls.newPassword.errors==null?null:s.changePasswordForm.controls.newPassword.errors.pattern)}}function xe(t,e){t&1&&(i(0,"p",19),c(1,"Password is required"),n())}function be(t,e){t&1&&(i(0,"p",19),c(1,"Password should start with a capital letter"),n())}function Fe(t,e){if(t&1&&(i(0,"div",17),p(1,xe,2,0,"p",18)(2,be,2,0,"p",18),n()),t&2){let s=w();a(),m("ngIf",s.changePasswordForm.controls.confirmNewPassword==null||s.changePasswordForm.controls.confirmNewPassword.errors==null?null:s.changePasswordForm.controls.confirmNewPassword.errors.required),a(),m("ngIf",s.changePasswordForm.controls.confirmNewPassword==null||s.changePasswordForm.controls.confirmNewPassword.errors==null?null:s.changePasswordForm.controls.confirmNewPassword.errors.pattern)}}var ce=(()=>{let e=class e{constructor(l,o,r){this._AuthService=l,this._Router=o,this.toastr=r,this.hide=!0,this.hiden=!0,this.hidePass=!0,this.changePasswordForm=new G({oldPassword:new N(null,[C.required,C.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#\xA3\u20AC*?&]{5,12}$")]),newPassword:new N(null,[C.required,C.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#\xA3\u20AC*?&]{5,12}$")]),confirmNewPassword:new N(null,[C.required,C.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#\xA3\u20AC*?&]{5,12}$")])})}onSubmit(l){console.log(l),this._AuthService.changePassword(l.value).subscribe({next:o=>{this._Router.navigateByUrl("/auth/login"),console.log(o)},error:o=>{console.log(o),this.toastr.error("Try again","Not Change Password")},complete:()=>{this.toastr.success("Change Password done","Sucess")}})}ngOnInit(){}};e.\u0275fac=function(o){return new(o||e)(u(P),u(h),u(W))},e.\u0275cmp=f({type:e,selectors:[["app-change-password"]],decls:34,vars:13,consts:[["id","resetPass"],[1,"reset-form","mt-5","py-5","text-center","d-flex","justify-content-center","align-items-center"],[1,"px-5","text-start","w-75"],[1,"primary"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-key",2,"color","#8391A1"],["formControlName","oldPassword","placeholder","old Password","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"show-password",3,"click"],[1,"fa-solid","primary"],["class","w-100 p-1",4,"ngIf"],["formControlName","newPassword","placeholder","new Password","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],["formControlName","confirmNewPassword","placeholder","confirm NewPassword","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"d-flex","justify-content-end"],[1,"btn-cancal","me-1"],[1,"btn-main"],[1,"w-100","p-1"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(o,r){o&1&&(i(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),c(4,"Change Password"),n(),i(5,"p"),c(6,"Please Enter Your New Password"),n(),i(7,"form",4),y("ngSubmit",function(){return r.onSubmit(r.changePasswordForm)}),i(8,"div",5)(9,"span",6),d(10,"i",7),n(),d(11,"input",8),i(12,"a",9),y("click",function(){return r.hidePass=!r.hidePass}),d(13,"i",10),n(),p(14,_e,3,2,"div",11),n(),i(15,"div",5)(16,"span",6),d(17,"i",7),n(),d(18,"input",12),i(19,"a",9),y("click",function(){return r.hiden=!r.hiden}),d(20,"i",10),n(),p(21,Se,3,2,"div",11),n(),i(22,"div",5)(23,"span",6),d(24,"i",7),n(),d(25,"input",13),i(26,"a",9),y("click",function(){return r.hide=!r.hide}),d(27,"i",10),n(),p(28,Fe,3,2,"div",11),n(),i(29,"div",14)(30,"button",15),c(31,"Cancal"),n(),i(32,"button",16),c(33,"Change Password"),n()()()()()()),o&2&&(a(7),m("formGroup",r.changePasswordForm),a(4),m("type",r.hidePass?"password":"text"),a(2),g(r.hidePass?"fa-eye-slash":"fa-eye"),a(),m("ngIf",(r.changePasswordForm.controls.oldPassword==null?null:r.changePasswordForm.controls.oldPassword.errors)&&(r.changePasswordForm.controls.oldPassword==null?null:r.changePasswordForm.controls.oldPassword.touched)),a(4),m("type",r.hiden?"password":"text"),a(2),g(r.hiden?"fa-eye-slash":"fa-eye"),a(),m("ngIf",(r.changePasswordForm.controls.newPassword==null?null:r.changePasswordForm.controls.newPassword.errors)&&(r.changePasswordForm.controls.newPassword==null?null:r.changePasswordForm.controls.newPassword.touched)),a(4),m("type",r.hide?"password":"text"),a(2),g(r.hide?"fa-eye-slash":"fa-eye"),a(),m("ngIf",(r.changePasswordForm.controls.confirmNewPassword==null?null:r.changePasswordForm.controls.confirmNewPassword.errors)&&(r.changePasswordForm.controls.confirmNewPassword==null?null:r.changePasswordForm.controls.confirmNewPassword.touched)))},dependencies:[x,H,Z,z,B,V,J]});let t=e;return t})();var Ae=[{path:"",component:re,children:[{path:"home",component:le},{path:"change-Password",component:ce},{path:"admin",canActivate:[ae],loadChildren:()=>import("./chunk-G6AXIJTK.js").then(t=>t.AdminModule)},{path:"users",canActivate:[se],loadChildren:()=>import("./chunk-5NEA44IP.js").then(t=>t.UsersModule)}]}],me=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=M({type:e}),e.\u0275inj=A({imports:[T.forChild(Ae),T]});let t=e;return t})();var at=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=M({type:e}),e.\u0275inj=A({imports:[q,me,te]});let t=e;return t})();export{at as DashboardModule};
