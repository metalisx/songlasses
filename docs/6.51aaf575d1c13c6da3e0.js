(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{OJsU:function(e,t,n){"use strict";n.r(t),n.d(t,"SelectModule",function(){return S});var o=n("ofXK"),c=n("3Pt+"),i=n("tyNb"),s=n("xZGP"),l=n("fXoL"),d=n("jhN1"),a=n("nVdF");function h(e,t){if(1&e){const e=l.bc();l.ac(0,"button",6),l.hc("click",function(){return l.vc(e),l.kc().showShowAndHide()}),l.Bc(1,"Show"),l.Zb()}}function r(e,t){if(1&e){const e=l.bc();l.ac(0,"button",6),l.hc("click",function(){return l.vc(e),l.kc().hideShowAndHide()}),l.Bc(1,"Hide"),l.Zb()}}let g=(()=>{class e{constructor(e,t,n){this.sanitizer=e,this.rootComponentService=t,this.superheroesService=n,this.items=[],this.sgSelectComponentConfigModel={name:"select",required:!0,itemValueField:"id",itemDescriptionField:"name",items:this.items},this.sgSelectComponentConfigModelStyled={name:"selectStyled",required:!0,itemMatchStrategy:"contains",itemValueField:"id",itemDescriptionField:"name",items:this.items,className:"selectStyled"},this.sgSelectComponentConfigModelShowAndHide={name:"selectShowAndHide",itemValueField:"id",itemDescriptionField:"name",items:this.items},this.value="JD",this.valueStyled="BW",this.valueShowAndHide="BW",this.styles="<style>\n  .selectStyled.sg-select {\n    width: 50%;\n  }\n  .selectStyled.sg-select sg-select-input {\n    border: 1px solid #b07070;\n  }\n  .selectStyled.sg-select .sg-select-items {\n    border: 1px solid #a06060;\n  }\n  .selectStyled.sg-select .sg-select-items .sg-select-item {\n    background-color: #a06060;\n    color: #fff;\n  }\n  .selectStyled.sg-select .sg-select-items .sg-select-item:hover {\n    background-color: #904040;\n    color: #fff;\n  }\n  .selectStyled.sg-select .sg-select-items .sg-select-selected-item-active {\n    background-color: #702020;\n    color: #fff;\n  } \n</style>"}ngOnInit(){this.stylesSafeHtml=this.sanitizer.bypassSecurityTrustHtml(this.styles),this.superheroesService.getSuperheroes().subscribe(e=>{s.a.clear(this.items),s.b.copyArray(this.items,e)})}getSelectComponentServiceShowAndHide(){if(this.sgSelectComponentConfigModelShowAndHide.name)return this.rootComponentService.getComponentService(this.sgSelectComponentConfigModelShowAndHide.name)}toggleShowAndHide(){let e=this.getSelectComponentServiceShowAndHide();void 0!==e&&this.sgSelectComponentConfigModelShowAndHide.name&&e.toggle()}showShowAndHide(){let e=this.getSelectComponentServiceShowAndHide();void 0!==e&&this.sgSelectComponentConfigModelShowAndHide.name&&e.show()}hideShowAndHide(){let e=this.getSelectComponentServiceShowAndHide();void 0!==e&&this.sgSelectComponentConfigModelShowAndHide.name&&e.hide()}}return e.\u0275fac=function(t){return new(t||e)(l.Ub(d.b),l.Ub(s.i),l.Ub(a.a))},e.\u0275cmp=l.Ob({type:e,selectors:[["app-select"]],decls:49,vars:25,consts:[[3,"ngModel","componentConfig","ngModelChange"],[1,"code-container"],[1,"code-panel"],["readonly","",1,"code"],[3,"innerHTML"],[3,"click",4,"ngIf"],[3,"click"]],template:function(e,t){1&e&&(l.ac(0,"h2"),l.Bc(1,"Select - Default"),l.Zb(),l.ac(2,"div"),l.ac(3,"sg-select",0),l.hc("ngModelChange",function(e){return t.value=e}),l.Zb(),l.Zb(),l.Bc(4),l.lc(5,"json"),l.ac(6,"div",1),l.ac(7,"div",2),l.ac(8,"h6"),l.Bc(9,"Config"),l.Zb(),l.ac(10,"textarea",3),l.Bc(11),l.lc(12,"json"),l.Zb(),l.Zb(),l.Zb(),l.ac(13,"h2"),l.Bc(14,"Select - Custom styled"),l.Zb(),l.ac(15,"p"),l.Bc(16," To style the component set the classname in the components config. In the example it is set to select2 and some custom style is added to target the components elements.\n"),l.Zb(),l.Vb(17,"div",4),l.ac(18,"sg-select",0),l.hc("ngModelChange",function(e){return t.valueStyled=e}),l.Zb(),l.ac(19,"div"),l.Bc(20),l.lc(21,"json"),l.Zb(),l.ac(22,"div",1),l.ac(23,"div",2),l.ac(24,"h6"),l.Bc(25,"Config"),l.Zb(),l.ac(26,"textarea",3),l.Bc(27),l.lc(28,"json"),l.Zb(),l.Zb(),l.ac(29,"div",2),l.ac(30,"h6"),l.Bc(31,"Custom style"),l.Zb(),l.ac(32,"textarea",3),l.Bc(33),l.Zb(),l.Zb(),l.Zb(),l.ac(34,"h2"),l.Bc(35,"SgSelectService toggle, show, hide and isVisible methods"),l.Zb(),l.ac(36,"p"),l.Bc(37," Show and hide the component by using the SgSelectService toggle, show and hide methods."),l.Vb(38,"br"),l.Bc(39," The show and hide buttons are toggled by using the SgSelectService isVisible method.\n"),l.Zb(),l.ac(40,"sg-select",0),l.hc("ngModelChange",function(e){return t.valueShowAndHide=e}),l.Zb(),l.ac(41,"div"),l.Bc(42),l.lc(43,"json"),l.Zb(),l.ac(44,"div"),l.zc(45,h,2,0,"button",5),l.zc(46,r,2,0,"button",5),l.ac(47,"button",6),l.hc("click",function(){return t.toggleShowAndHide()}),l.Bc(48,"Toggle"),l.Zb(),l.Zb()),2&e&&(l.Jb(3),l.nc("ngModel",t.value)("componentConfig",t.sgSelectComponentConfigModel),l.Jb(1),l.Dc("\nExternal value : ",l.mc(5,15,t.value),"\n"),l.Jb(7),l.Cc(l.mc(12,17,t.sgSelectComponentConfigModel)),l.Jb(6),l.nc("innerHTML",t.stylesSafeHtml,l.wc),l.Jb(1),l.nc("ngModel",t.valueStyled)("componentConfig",t.sgSelectComponentConfigModelStyled),l.Jb(2),l.Dc(" External value : ",l.mc(21,19,t.valueStyled),"\n"),l.Jb(7),l.Cc(l.mc(28,21,t.sgSelectComponentConfigModelStyled)),l.Jb(6),l.Cc(t.styles),l.Jb(7),l.nc("ngModel",t.valueShowAndHide)("componentConfig",t.sgSelectComponentConfigModelShowAndHide),l.Jb(2),l.Dc(" External value : ",l.mc(43,23,t.valueShowAndHide),"\n"),l.Jb(3),l.nc("ngIf",!t.sgSelectComponentConfigModelShowAndHide.show),l.Jb(1),l.nc("ngIf",t.sgSelectComponentConfigModelShowAndHide.show))},directives:[s.j,c.d,c.e,o.k],pipes:[o.e],styles:[""]}),e})(),m=(()=>{class e{}return e.\u0275mod=l.Sb({type:e}),e.\u0275inj=l.Rb({factory:function(t){return new(t||e)},imports:[[i.b.forChild([{path:"",component:g}])],i.b]}),e})(),S=(()=>{class e{}return e.\u0275mod=l.Sb({type:e}),e.\u0275inj=l.Rb({factory:function(t){return new(t||e)},imports:[[o.b,c.b,m,s.k]]}),e})()}}]);