(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{OJsU:function(e,t,n){"use strict";n.r(t),n.d(t,"SelectModule",function(){return S});var c=n("ofXK"),o=n("3Pt+"),i=n("tyNb"),l=n("xZGP"),s=n("fXoL"),a=n("jhN1"),d=n("nVdF");function u(e,t){if(1&e){const e=s.bc();s.ac(0,"button",6),s.hc("click",function(){return s.vc(e),s.lc().showShowAndHide()}),s.Bc(1,"Show"),s.Zb()}}function r(e,t){if(1&e){const e=s.bc();s.ac(0,"button",6),s.hc("click",function(){return s.vc(e),s.lc().hideShowAndHide()}),s.Bc(1,"Hide"),s.Zb()}}function g(e,t){if(1&e){const e=s.bc();s.ac(0,"button",6),s.hc("click",function(){return s.vc(e),s.lc().clearManipulateValue()}),s.Bc(1,"Clear value"),s.Zb()}}function h(e,t){if(1&e){const e=s.bc();s.ac(0,"button",6),s.hc("click",function(){return s.vc(e),s.lc().getManipulateValue()}),s.Bc(1,"Get value"),s.Zb()}}let m=(()=>{class e{constructor(e,t,n){this.sanitizer=e,this.rootComponentService=t,this.superheroesService=n,this.items=[],this.sgSelectComponentConfig={name:"select",required:!0,itemValueField:"id",itemDescriptionField:"name",items:this.items},this.sgSelectComponentConfigStyled={name:"selectStyled",required:!0,itemMatchStrategy:"contains",itemValueField:"id",itemDescriptionField:"name",items:this.items,className:"selectStyled"},this.sgSelectComponentConfigShowAndHide={name:"selectShowAndHide",itemValueField:"id",itemDescriptionField:"name",items:this.items},this.sgSelectComponentConfigManipulateValue={name:"selectManipulateValue",itemValueField:"id",itemDescriptionField:"name",items:this.items},this.value="JD",this.valueStyled="BW",this.valueShowAndHide="LC",this.valueManipulateValue="SP",this.currentValueManipulateValue=null,this.styles="<style>\n  .selectStyled.sg-select {\n    width: 50%;\n  }\n  .selectStyled.sg-select sg-select-input {\n    border: 1px solid #b07070;\n  }\n  .selectStyled.sg-select .sg-select-dropdown {\n    border: 1px solid #a06060;\n    background-color: #a06060;\n  }\n  .selectStyled.sg-select .sg-select-dropwdown-items {\n    background-color: #a06060;\n  }\n  .selectStyled.sg-select .sg-select-dropdown-items .sg-select-dropdown-item {\n    color: #fff;\n  }\n  .selectStyled.sg-select .sg-select-dropdown-items .sg-select-dropdown-item:hover {\n    background-color: #904040;\n    color: #fff;\n  }\n  .selectStyled.sg-select .sg-select-dropdown-items .sg-select-dropdown-selected-item-active {\n    background-color: #702020;\n    color: #fff;\n  }\n  .selectStyled.sg-select .sg-select-dropdown-paging {\n    background-color: #a06060;\n  } \n</style>"}ngOnInit(){this.stylesSafeHtml=this.sanitizer.bypassSecurityTrustHtml(this.styles),this.superheroesService.getSuperheroes().subscribe(e=>{l.a.clear(this.items),l.b.copyArray(this.items,e)})}getSelectComponentService(e){if(void 0!==e)return this.rootComponentService.getComponentService(e)}toggleShowAndHide(){let e=this.getSelectComponentService(this.sgSelectComponentConfigShowAndHide.name);void 0!==e&&e.toggle()}showShowAndHide(){let e=this.getSelectComponentService(this.sgSelectComponentConfigShowAndHide.name);void 0!==e&&e.show()}hideShowAndHide(){let e=this.getSelectComponentService(this.sgSelectComponentConfigShowAndHide.name);void 0!==e&&e.hide()}clearManipulateValue(){let e=this.getSelectComponentService(this.sgSelectComponentConfigManipulateValue.name);void 0!==e&&e.clearValue()}getManipulateValue(){let e=this.getSelectComponentService(this.sgSelectComponentConfigManipulateValue.name);void 0!==e&&(this.currentValueManipulateValue=e.getValue())}setManipulateValue(){let e=this.getSelectComponentService(this.sgSelectComponentConfigManipulateValue.name);void 0!==e&&e.setValue("OM")}hasValueManipulateValue(){let e=this.getSelectComponentService(this.sgSelectComponentConfigManipulateValue.name);return void 0!==e&&e.hasValue}}return e.\u0275fac=function(t){return new(t||e)(s.Ub(a.b),s.Ub(l.g),s.Ub(d.a))},e.\u0275cmp=s.Ob({type:e,selectors:[["app-select"]],decls:65,vars:35,consts:[[3,"ngModel","componentConfig","ngModelChange"],[1,"code-container"],[1,"code-panel"],["readonly","",1,"code"],[3,"innerHTML"],[3,"click",4,"ngIf"],[3,"click"]],template:function(e,t){1&e&&(s.ac(0,"h2"),s.Bc(1,"Select - Default"),s.Zb(),s.ac(2,"div"),s.ac(3,"sg-select",0),s.hc("ngModelChange",function(e){return t.value=e}),s.Zb(),s.Zb(),s.Bc(4),s.mc(5,"json"),s.ac(6,"div",1),s.ac(7,"div",2),s.ac(8,"h6"),s.Bc(9,"Config"),s.Zb(),s.ac(10,"textarea",3),s.Bc(11),s.mc(12,"json"),s.Zb(),s.Zb(),s.Zb(),s.ac(13,"h2"),s.Bc(14,"Select - Custom styled"),s.Zb(),s.ac(15,"p"),s.Bc(16," To style the component set the classname in the components config. In the example it is set to select2 and some custom style is added to target the components elements.\n"),s.Zb(),s.Vb(17,"div",4),s.ac(18,"sg-select",0),s.hc("ngModelChange",function(e){return t.valueStyled=e}),s.Zb(),s.ac(19,"div"),s.Bc(20),s.mc(21,"json"),s.Zb(),s.ac(22,"div",1),s.ac(23,"div",2),s.ac(24,"h6"),s.Bc(25,"Config"),s.Zb(),s.ac(26,"textarea",3),s.Bc(27),s.mc(28,"json"),s.Zb(),s.Zb(),s.ac(29,"div",2),s.ac(30,"h6"),s.Bc(31,"Custom style"),s.Zb(),s.ac(32,"textarea",3),s.Bc(33),s.Zb(),s.Zb(),s.Zb(),s.ac(34,"h2"),s.Bc(35,"SgSelectService toggle, show, hide and isVisible methods"),s.Zb(),s.ac(36,"p"),s.Bc(37," Show and hide the component by using the SgSelectService toggle, show and hide methods."),s.Vb(38,"br"),s.Bc(39," The show and hide buttons are toggled by using the SgSelectService isVisible method.\n"),s.Zb(),s.ac(40,"sg-select",0),s.hc("ngModelChange",function(e){return t.valueShowAndHide=e}),s.Zb(),s.ac(41,"div"),s.Bc(42),s.mc(43,"json"),s.Zb(),s.ac(44,"div"),s.zc(45,u,2,0,"button",5),s.zc(46,r,2,0,"button",5),s.ac(47,"button",6),s.hc("click",function(){return t.toggleShowAndHide()}),s.Bc(48,"Toggle"),s.Zb(),s.Zb(),s.ac(49,"h2"),s.Bc(50,"SgSelectService clear, set, get and hasValue methods"),s.Zb(),s.ac(51,"p"),s.Bc(52," clear, set and get the component value by using the SgSelectService clear, get and set methods."),s.Vb(53,"br"),s.Bc(54," The clear and get buttons are shown by using the SgSelectService hasValue method.\n"),s.Zb(),s.ac(55,"sg-select",0),s.hc("ngModelChange",function(e){return t.valueManipulateValue=e}),s.Zb(),s.ac(56,"div"),s.Bc(57),s.mc(58,"json"),s.mc(59,"json"),s.Zb(),s.ac(60,"div"),s.zc(61,g,2,0,"button",5),s.zc(62,h,2,0,"button",5),s.ac(63,"button",6),s.hc("click",function(){return t.setManipulateValue()}),s.Bc(64,"Set value"),s.Zb(),s.Zb()),2&e&&(s.Jb(3),s.oc("ngModel",t.value)("componentConfig",t.sgSelectComponentConfig),s.Jb(1),s.Dc("\nExternal value : ",s.nc(5,21,t.value),"\n"),s.Jb(7),s.Cc(s.nc(12,23,t.sgSelectComponentConfig)),s.Jb(6),s.oc("innerHTML",t.stylesSafeHtml,s.wc),s.Jb(1),s.oc("ngModel",t.valueStyled)("componentConfig",t.sgSelectComponentConfigStyled),s.Jb(2),s.Dc(" External value : ",s.nc(21,25,t.valueStyled),"\n"),s.Jb(7),s.Cc(s.nc(28,27,t.sgSelectComponentConfigStyled)),s.Jb(6),s.Cc(t.styles),s.Jb(7),s.oc("ngModel",t.valueShowAndHide)("componentConfig",t.sgSelectComponentConfigShowAndHide),s.Jb(2),s.Dc(" External value : ",s.nc(43,29,t.valueShowAndHide),"\n"),s.Jb(3),s.oc("ngIf",!t.sgSelectComponentConfigShowAndHide.show),s.Jb(1),s.oc("ngIf",t.sgSelectComponentConfigShowAndHide.show),s.Jb(9),s.oc("ngModel",t.valueManipulateValue)("componentConfig",t.sgSelectComponentConfigManipulateValue),s.Jb(2),s.Ec(" External value : ",s.nc(58,31,t.valueManipulateValue)," getValue : ",s.nc(59,33,t.currentValueManipulateValue),"\n"),s.Jb(4),s.oc("ngIf",t.hasValueManipulateValue()),s.Jb(1),s.oc("ngIf",t.hasValueManipulateValue()))},directives:[l.h,o.d,o.e,c.k],pipes:[c.e],styles:[""]}),e})(),p=(()=>{class e{}return e.\u0275mod=s.Sb({type:e}),e.\u0275inj=s.Rb({factory:function(t){return new(t||e)},imports:[[i.b.forChild([{path:"",component:m}])],i.b]}),e})(),S=(()=>{class e{}return e.\u0275mod=s.Sb({type:e}),e.\u0275inj=s.Rb({factory:function(t){return new(t||e)},imports:[[c.b,o.b,p,l.i]]}),e})()}}]);