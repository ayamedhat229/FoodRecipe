import './polyfills.server.mjs';
import{a as E}from"./chunk-4X3DVHOT.mjs";import{a as _}from"./chunk-2SY5OC6K.mjs";import{q as h}from"./chunk-GZJXOSWJ.mjs";import{Cb as b,Gb as F,Hb as v,Hc as R,Lc as I,Oa as C,Rb as s,Sb as u,X as m,Za as a,_a as f,ea as x,fa as p,ja as y,ka as w,lb as S,nb as g,xb as r,yb as n,zb as l}from"./chunk-T3NVKTYB.mjs";import"./chunk-VVCT4QZE.mjs";function k(o,e){if(o&1){let c=b();r(0,"div",11)(1,"div",12)(2,"div",13),l(3,"img",14),n(),r(4,"div",15)(5,"a",16),F("click",function(){let d=y(c).$implicit,O=v();return w(O.removeRecipe(d.id))}),l(6,"i",17),n()(),r(7,"div",18)(8,"h4"),s(9),n(),r(10,"p",19),s(11),n()()()()}if(o&2){let c=e.$implicit,t=v();a(3),g("src",c.recipe.imagePath?t.imagePath+c.recipe.imagePath:t.DummyImage,C),a(6),u(c.recipe.name),a(2),u(c.recipe.description)}}var P=(()=>{let e=class e{constructor(t,i){this._userService=t,this.toastr=i,this.imagePath="https://upskilling-egypt.com/",this.DummyImage="../../../assets/images/reciepePic.jpg",this.tableRecipe=[]}getAllFavRecipe(){this._userService.getFavRecipe().subscribe({next:t=>{console.log(t),this.tableRecipe=t.data},error:t=>{console.log(t)}})}removeRecipe(t){this._userService.onRemoveRecipe(t).subscribe({next:i=>{console.log(i)},error:i=>{console.log(i)},complete:()=>{this.getAllFavRecipe(),this.toastr.success("The Recipe has been deleted successfully","Success")}})}ngOnInit(){this.getAllFavRecipe()}};e.\u0275fac=function(i){return new(i||e)(f(E),f(_))},e.\u0275cmp=x({type:e,selectors:[["app-favorites"]],decls:16,vars:1,consts:[["id","header"],[1,"container"],[1,"row","align-items-center"],[1,"col-6","p-5"],[1,"mx-1","lead","text-white-50","fa-1x"],[1,"pt-2"],[1,"col-6","text-end"],["src","../../../assets/images/categoryPic.png",1,"w-25","pb-4"],[1,"container","mt-2"],[1,"row"],["class","col-md-4 text-center",4,"ngFor","ngForOf"],[1,"col-md-4","text-center"],[1,"card","shadow-sm","position-relative","w-100"],[1,"text-center"],[1,"DummyImage","card-img-top","w-50",3,"src"],[1,"delete-icon"],[1,"",3,"click"],[1,"fa-solid","fa-trash"],[1,"card-body"],[1,"card-text"]],template:function(i,d){i&1&&(r(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2")(5,"span"),s(6,"Favorites"),n(),r(7,"span",4),s(8,"item"),n()(),r(9,"p",5),s(10,"You can now add Favorites items from the application and you can view. "),n()(),r(11,"div",6),l(12,"img",7),n()()()(),r(13,"div",8)(14,"div",9),S(15,k,12,3,"div",10),n()()),i&2&&(a(15),g("ngForOf",d.tableRecipe))},dependencies:[R],styles:[".delete-icon[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:8px;background-color:#fff;border:1px solid #1f263e;display:flex;justify-content:center;align-items:center;position:absolute;right:5px;top:20px;color:#dd4c4c}i[_ngcontent-%COMP%]{cursor:pointer}"]});let o=e;return o})();var D=[{path:"favorites",component:P}],M=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=p({type:e}),e.\u0275inj=m({imports:[h.forChild(D),h]});let o=e;return o})();var H=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=p({type:e}),e.\u0275inj=m({imports:[I,M]});let o=e;return o})();export{H as FavoritesModule};
