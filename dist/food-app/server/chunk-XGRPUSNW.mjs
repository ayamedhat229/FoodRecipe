import './polyfills.server.mjs';
import{j as T}from"./chunk-GZJXOSWJ.mjs";import{Cb as O,Db as X,Gb as g,Hb as F,Ib as z,Ic as D,Jb as m,Lc as K,Mb as J,Nb as Q,Oa as W,Ob as k,Pb as S,Vb as j,W as Z,X as H,Za as x,_a as y,cb as M,da as b,ea as f,fa as L,fb as A,ga as R,ja as P,ka as w,la as E,lb as C,mb as G,nb as p,pb as Y,qb as U,xb as h,yb as _,zb as N}from"./chunk-T3NVKTYB.mjs";import{h as v}from"./chunk-VVCT4QZE.mjs";function ie(t,r){if(t&1){let e=O();h(0,"ngx-dropzone-remove-badge",1),g("click",function(o){P(e);let i=F();return w(i._remove(o))}),_()}}var $=[[["ngx-dropzone-label"]]],ee=["ngx-dropzone-label"],oe=["fileInput"];function re(t,r){t&1&&m(0,2,["*ngIf","!_hasPreviews"])}var se=[[["ngx-dropzone-preview"]],"*",[["ngx-dropzone-label"]]],ae=["ngx-dropzone-preview","*","ngx-dropzone-label"];function le(t,r){if(t&1){let e=O();h(0,"ngx-dropzone-remove-badge",2),g("click",function(o){P(e);let i=F();return w(i._remove(o))}),_()}}var Pe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=R({type:t,selectors:[["ngx-dropzone-label"]]}),t})();function u(t){return t!=null&&`${t}`!="false"}function de(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):null}var te=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f({type:t,selectors:[["ngx-dropzone-remove-badge"]],decls:3,vars:0,consts:[["x1","0","y1","0","x2","10","y2","10"],["x1","0","y1","10","x2","10","y2","0"]],template:function(e,n){e&1&&(E(),h(0,"svg"),N(1,"line",0)(2,"line",1),_())},styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke-width:2px;stroke:#fff}"]}),t})(),B=function(t){return t[t.BACKSPACE=8]="BACKSPACE",t[t.DELETE=46]="DELETE",t}(B||{}),V=(()=>{class t{constructor(e){this.sanitizer=e,this._removable=!1,this.removed=new M,this.tabIndex=0}set file(e){this._file=e}get file(){return this._file}get removable(){return this._removable}set removable(e){this._removable=u(e)}keyEvent(e){switch(e.keyCode){case B.BACKSPACE:case B.DELETE:this.remove();break;default:break}}get hostStyle(){return this.sanitizer.bypassSecurityTrustStyle(`
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`)}_remove(e){e.stopPropagation(),this.remove()}remove(){this._removable&&this.removed.next(this.file)}readFile(){return v(this,null,function*(){return new Promise((e,n)=>{let o=new FileReader;if(o.onload=i=>{e(i.target.result)},o.onerror=i=>{console.error(`FileReader failed on file ${this.file.name}.`),n(i)},!this.file)return n("No file to read. Please provide a file using the [file] Input property.");o.readAsDataURL(this.file)})})}}return t.\u0275fac=function(e){return new(e||t)(y(T))},t.\u0275cmp=f({type:t,selectors:[["ngx-dropzone-preview"]],hostVars:3,hostBindings:function(e,n){e&1&&g("keyup",function(i){return n.keyEvent(i)}),e&2&&(X("tabindex",n.tabIndex),U(n.hostStyle))},inputs:{file:"file",removable:"removable"},outputs:{removed:"removed"},ngContentSelectors:ee,decls:2,vars:1,consts:[[3,"click",4,"ngIf"],[3,"click"]],template:function(e,n){e&1&&(z($),m(0),C(1,ie,1,0,"ngx-dropzone-remove-badge",0)),e&2&&(x(),p("ngIf",n.removable))},dependencies:[te,D],styles:["[_nghost-%COMP%]{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"]}),t})(),q=(()=>{class t{parseFileList(e,n,o,i){let l=[],a=[];for(let d=0;d<e.length;d++){let c=e.item(d);if(!this.isAccepted(c,n)){this.rejectFile(a,c,"type");continue}if(o&&c.size>o){this.rejectFile(a,c,"size");continue}if(!i&&l.length>=1){this.rejectFile(a,c,"no_multiple");continue}l.push(c)}return{addedFiles:l,rejectedFiles:a}}isAccepted(e,n){if(n==="*")return!0;let o=n.split(",").map(s=>s.toLowerCase().trim()),i=e.type.toLowerCase(),l=e.name.toLowerCase();return!!o.find(s=>s.endsWith("/*")?i.split("/")[0]===s.split("/")[0]:s.startsWith(".")?l.endsWith(s):s==i)}rejectFile(e,n,o){let i=n;i.reason=o,e.push(i)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Z({token:t,factory:t.\u0275fac}),t})(),we=(()=>{class t{constructor(e){this.service=e,this.change=new M,this.accept="*",this._disabled=!1,this._multiple=!0,this._maxFileSize=void 0,this._expandable=!1,this._disableClick=!1,this._processDirectoryDrop=!1,this._isHovered=!1}get _hasPreviews(){return!!this._previewChildren.length}get disabled(){return this._disabled}set disabled(e){this._disabled=u(e),this._isHovered&&(this._isHovered=!1)}get multiple(){return this._multiple}set multiple(e){this._multiple=u(e)}get maxFileSize(){return this._maxFileSize}set maxFileSize(e){this._maxFileSize=de(e)}get expandable(){return this._expandable}set expandable(e){this._expandable=u(e)}get disableClick(){return this._disableClick}set disableClick(e){this._disableClick=u(e)}get processDirectoryDrop(){return this._processDirectoryDrop}set processDirectoryDrop(e){this._processDirectoryDrop=u(e)}_onClick(){this.disableClick||this.showFileSelector()}_onDragOver(e){this.disabled||(this.preventDefault(e),this._isHovered=!0)}_onDragLeave(){this._isHovered=!1}_onDrop(e){if(!this.disabled)if(this.preventDefault(e),this._isHovered=!1,!this.processDirectoryDrop||!DataTransferItem.prototype.webkitGetAsEntry)this.handleFileDrop(e.dataTransfer.files);else{let n=e.dataTransfer.items;if(n.length>0){let o=[],i=[];for(let a=0;a<n.length;a++){let s=n[a].webkitGetAsEntry();s.isFile?o.push(e.dataTransfer.files[a]):s.isDirectory&&i.push(s)}let l=new DataTransfer;if(o.forEach(a=>{l.items.add(a)}),!i.length&&l.items.length&&this.handleFileDrop(l.files),i.length){let a=[];for(let s of i)a.push(this.extractFilesFromDirectory(s));Promise.all(a).then(s=>{s.reduce((d,c)=>[...d,...c]).forEach(d=>{l.items.add(d)}),this.handleFileDrop(l.files)})}}}}extractFilesFromDirectory(e){function n(o){return v(this,null,function*(){try{return yield new Promise((i,l)=>o.file(i,l))}catch(i){console.log("Error converting a fileEntry to a File: ",i)}})}return new Promise((o,i)=>{let l=[],a=e.createReader(),s=()=>{a.readEntries(d=>v(this,null,function*(){if(!d.length)o(l);else{let c=d.filter(I=>I.isFile);for(let I of c){let ne=yield n(I);l.push(ne)}s()}}))};s()})}showFileSelector(){this.disabled||this._fileInput.nativeElement.click()}_onFilesSelected(e){let n=e.target.files;this.handleFileDrop(n),this._fileInput.nativeElement.value="",this.preventDefault(e)}handleFileDrop(e){let n=this.service.parseFileList(e,this.accept,this.maxFileSize,this.multiple);this.change.next({addedFiles:n.addedFiles,rejectedFiles:n.rejectedFiles,source:this})}preventDefault(e){e.preventDefault(),e.stopPropagation()}}return t.\u0275fac=function(e){return new(e||t)(y(q,2))},t.\u0275cmp=f({type:t,selectors:[["ngx-dropzone"],["","ngx-dropzone",""]],contentQueries:function(e,n,o){if(e&1&&J(o,V,5),e&2){let i;k(i=S())&&(n._previewChildren=i)}},viewQuery:function(e,n){if(e&1&&Q(oe,7),e&2){let o;k(o=S())&&(n._fileInput=o.first)}},hostVars:8,hostBindings:function(e,n){e&1&&g("click",function(){return n._onClick()})("dragover",function(i){return n._onDragOver(i)})("dragleave",function(){return n._onDragLeave()})("drop",function(i){return n._onDrop(i)}),e&2&&Y("ngx-dz-disabled",n.disabled)("expandable",n.expandable)("unclickable",n.disableClick)("ngx-dz-hovered",n._isHovered)},inputs:{accept:"accept",disabled:"disabled",multiple:"multiple",maxFileSize:"maxFileSize",expandable:"expandable",disableClick:"disableClick",processDirectoryDrop:"processDirectoryDrop",id:"id",ariaLabel:[b.None,"aria-label","ariaLabel"],ariaLabelledby:[b.None,"aria-labelledby","ariaLabelledby"],ariaDescribedBy:[b.None,"aria-describedby","ariaDescribedBy"]},outputs:{change:"change"},features:[j([q])],ngContentSelectors:ae,decls:5,vars:8,consts:[["type","file",3,"id","multiple","accept","disabled","change"],["fileInput",""],[4,"ngIf"]],template:function(e,n){e&1&&(z(se),h(0,"input",0,1),g("change",function(i){return n._onFilesSelected(i)}),_(),C(2,re,1,0,"ng-content",2),m(3),m(4,1)),e&2&&(p("id",n.id)("multiple",n.multiple)("accept",n.accept)("disabled",n.disabled),G("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedBy),x(2),p("ngIf",!n._hasPreviews))},dependencies:[D],styles:["[_nghost-%COMP%]{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop;pointer-events:none}.expandable[_nghost-%COMP%]{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:1px dotted #000;outline:-webkit-focus-ring-color auto 5px}"]}),t})(),Me=(()=>{class t extends V{constructor(e){super(e),this.defaultImgLoading="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==",this.imageSrc=this.sanitizer.bypassSecurityTrustUrl(this.defaultImgLoading)}set file(e){this._file=e,this.renderImage()}get file(){return this._file}ngOnInit(){this.renderImage()}renderImage(){this.readFile().then(e=>setTimeout(()=>this.imageSrc=e)).catch(e=>console.error(e))}}return t.\u0275fac=function(e){return new(e||t)(y(T))},t.\u0275cmp=f({type:t,selectors:[["ngx-dropzone-image-preview"]],inputs:{file:"file"},features:[j([{provide:V,useExisting:t}]),A],ngContentSelectors:ee,decls:3,vars:2,consts:[[3,"src"],[3,"click",4,"ngIf"],[3,"click"]],template:function(e,n){e&1&&(z($),N(0,"img",0),m(1),C(2,le,1,0,"ngx-dropzone-remove-badge",1)),e&2&&(p("src",n.imageSrc,W),x(2),p("ngIf",n.removable))},dependencies:[te,D],styles:["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:hover   img[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;border-radius:5px;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"]}),t})();var Ne=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=L({type:t}),t.\u0275inj=H({imports:[[K]]}),t})();export{Pe as a,we as b,Me as c,Ne as d};