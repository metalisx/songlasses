(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9TH3":function(e,o,t){"use strict";t.r(o),t.d(o,"RootComponentServiceModule",function(){return h});var n=t("ofXK"),r=t("3Pt+"),c=t("xZGP"),i=t("tyNb"),p=t("fXoL"),s=t("nVdF");function a(e,o){if(1&e){const e=p.bc();p.Yb(0),p.ac(1,"p"),p.Bc(2,"Group 2.1"),p.Zb(),p.ac(3,"sg-select",4),p.hc("ngModelChange",function(o){return p.vc(e),p.kc(2).value2_1=o}),p.Zb(),p.Xb()}if(2&e){const e=p.kc(2);p.Jb(3),p.nc("ngModel",e.value2_1)("sgSelectComponentConfig",e.sgSelectComponentConfig2_1)}}function m(e,o){if(1&e){const e=p.bc();p.Yb(0),p.ac(1,"p"),p.Bc(2,"Group 2.2"),p.Zb(),p.ac(3,"sg-select",4),p.hc("ngModelChange",function(o){return p.vc(e),p.kc(2).value2_2=o}),p.Zb(),p.Xb()}if(2&e){const e=p.kc(2);p.Jb(3),p.nc("ngModel",e.value2_2)("sgSelectComponentConfig",e.sgSelectComponentConfig2_2)}}function g(e,o){if(1&e&&(p.Yb(0),p.ac(1,"p"),p.Bc(2,"Group 1"),p.Zb(),p.ac(3,"div",3),p.zc(4,a,4,2,"ng-container",1),p.Zb(),p.ac(5,"div",3),p.zc(6,m,4,2,"ng-container",1),p.Zb(),p.Xb()),2&e){const e=p.kc();p.Jb(3),p.nc("sgGroupComponentConfig",e.sgGroupComponentConfigLevel2_1),p.Jb(1),p.nc("ngIf",e.sgGroupComponentConfigLevel2_1.show),p.Jb(1),p.nc("sgGroupComponentConfig",e.sgGroupComponentConfigLevel2_2),p.Jb(1),p.nc("ngIf",e.sgGroupComponentConfigLevel2_2.show)}}let l=(()=>{class e{constructor(e,o){this.rootComponentService=e,this.superheroesService=o,this.items=[],this.sgGroupComponentConfigLevel1={name:"groupComponentLevel1"},this.sgGroupComponentConfigLevel2_1={name:"groupComponentLevel2_1"},this.sgGroupComponentConfigLevel2_2={name:"groupComponentLevel2_2"},this.sgSelectComponentConfig2_1={name:"select2_1",itemValueField:"id",itemDescriptionField:"name",items:this.items},this.sgSelectComponentConfig2_2={name:"select2_2",itemValueField:"id",itemDescriptionField:"name",items:this.items},this.value2_1="JD",this.value2_2="BW"}ngOnInit(){this.superheroesService.getSuperheroes().subscribe(e=>{c.a.clear(this.items),c.b.copyArray(this.items,e)})}componentServiceToggleGroupComponentLevel1(){var e;null===(e=this.rootComponentService.getComponentService("groupComponentLevel1"))||void 0===e||e.toggle()}componentServiceToggleGroupComponentLevel2_1(){var e;null===(e=this.rootComponentService.getComponentService("groupComponentLevel2_1"))||void 0===e||e.toggle()}componentServiceToggleAllSelectComponents(){var e,o;null===(e=this.rootComponentService.getComponentService("select2_1"))||void 0===e||e.toggle(),null===(o=this.rootComponentService.getComponentService("select2_2"))||void 0===o||o.toggle()}componentServiceToggleSelectComponent2_1(){var e;null===(e=this.rootComponentService.getComponentService("select2_1"))||void 0===e||e.toggle()}rootComponentServiceLog(){this.rootComponentService.log()}}return e.\u0275fac=function(o){return new(o||e)(p.Ub(c.i),p.Ub(s.a))},e.\u0275cmp=p.Ob({type:e,selectors:[["app-root-component-service"]],decls:68,vars:2,consts:[["groupComponent","",3,"sgGroupComponentConfig"],[4,"ngIf"],[3,"click"],["groupComponent","",2,"padding-left","20px",3,"sgGroupComponentConfig"],[3,"ngModel","sgSelectComponentConfig","ngModelChange"]],template:function(e,o){1&e&&(p.ac(0,"h2"),p.Bc(1,"SgRootComponentService"),p.Zb(),p.ac(2,"p"),p.Bc(3," The SgRootComponentService is a singleton service containing a hierarchical tree structure of ComponentService implementations. The SgRootComponentService can be injected in every part of the application so you can retrieve a ComponentService. Depending on the implementation you could for instance call show and hide methods on the ComponentService to manipulate the appearance of the Component."),p.Vb(4,"br"),p.Bc(5," You can retrieve a single ComponentService or retrieve the hierarchical tree structure of ComponentServices to filter out the ComponentServices you are interested in.\n"),p.Zb(),p.ac(6,"h3"),p.Bc(7,"Hierachical tree structure"),p.Zb(),p.ac(8,"p"),p.Bc(9," The SgRootComponentService hierarchical tree structure is componsed out of ComponentService implementations. The GroupComponentService implements the ComponentService interface with the ability to register ComponentServices. By nesting GroupComponentServices it is possible to create the hierachical tree structure of ComponentServices.\n"),p.Zb(),p.ac(10,"h3"),p.Bc(11,"Registration of ComponentService"),p.Zb(),p.ac(12,"p"),p.Bc(13," The ComponentService is created and registered by a Component"),p.Vb(14,"br"),p.Zb(),p.ac(15,"h3"),p.Bc(16,"Registration of GroupComponentService"),p.Zb(),p.ac(17,"p"),p.Bc(18," A GroupComponentService can be created by specifying the GroupComponentDirective on a container. For example on a div or a span element. This will mark the container as a GroupComponent and register the GroupComponentService at the parent GroupComponentService or at the root in the SgRootComponentService. Created ComponentServices in the container are registered with the GroupComponentService making the hierachical tree structure possible.\n"),p.Zb(),p.ac(19,"h3"),p.Bc(20,"CompentServicesService methods"),p.Zb(),p.ac(21,"table"),p.ac(22,"tr"),p.ac(23,"td"),p.Bc(24,"register(componentService, groupCompnentService)"),p.Zb(),p.ac(25,"td"),p.Bc(26,"Register a ComponentService. If the second parameter is provided then the ComponentService is registered in the GroupComponentService provided in the second parameter otherwise it is registered as a root ComponentService. The register method is called in ngOnInit method. "),p.Zb(),p.Zb(),p.ac(27,"tr"),p.ac(28,"td"),p.Bc(29,"unregister(componentService, groupCompnentService)"),p.Zb(),p.ac(30,"td"),p.Bc(31,"Unregister a ComponentService. If the second parameter is provided then the ComponentService is unregistered from the GroupComponentService provided as the second parameter otherwise it is unregistered from the root. The unregister method is called in the ngOnDestroy method of the same class as where the register method is called from. "),p.Zb(),p.Zb(),p.ac(32,"tr"),p.ac(33,"td"),p.Bc(34,"getComponentService(name)"),p.Zb(),p.ac(35,"td"),p.Bc(36,"Retrieve a ComponentService by name from the hierachical tree structure of ComponentServices."),p.Zb(),p.Zb(),p.ac(37,"tr"),p.ac(38,"td"),p.Bc(39,"getComponentServices()"),p.Zb(),p.ac(40,"td"),p.Bc(41,"Retrieve the hierachical tree structure of ComponentServices"),p.Zb(),p.Zb(),p.ac(42,"tr"),p.ac(43,"td"),p.Bc(44,"log()"),p.Zb(),p.ac(45,"td"),p.Bc(46,"Prints the hierachical tree structure to the browsers console."),p.Zb(),p.Zb(),p.Zb(),p.ac(47,"h2"),p.Bc(48,"SgRootComponentService hierachical tree structure of component services example"),p.Zb(),p.ac(49,"div",0),p.zc(50,g,7,4,"ng-container",1),p.Zb(),p.ac(51,"div"),p.ac(52,"button",2),p.hc("click",function(){return o.componentServiceToggleGroupComponentLevel1()}),p.Bc(53,"Toggle group 1"),p.Zb(),p.ac(54,"button",2),p.hc("click",function(){return o.componentServiceToggleGroupComponentLevel2_1()}),p.Bc(55,"Toggle group 2.1"),p.Zb(),p.ac(56,"button",2),p.hc("click",function(){return o.componentServiceToggleAllSelectComponents()}),p.Bc(57,"Toggle select components"),p.Zb(),p.ac(58,"button",2),p.hc("click",function(){return o.componentServiceToggleSelectComponent2_1()}),p.Bc(59,"Toggle select component group 2.1"),p.Zb(),p.Zb(),p.ac(60,"h2"),p.Bc(61,"SgRootComponentService log method"),p.Zb(),p.ac(62,"p"),p.Bc(63," Log registered hierarchical tree structure of component services to the console."),p.Vb(64,"br"),p.Zb(),p.ac(65,"div"),p.ac(66,"button",2),p.hc("click",function(){return o.rootComponentServiceLog()}),p.Bc(67,"Log"),p.Zb(),p.Zb()),2&e&&(p.Jb(49),p.nc("sgGroupComponentConfig",o.sgGroupComponentConfigLevel1),p.Jb(1),p.nc("ngIf",o.sgGroupComponentConfigLevel1.show))},directives:[c.g,n.k,c.j,r.d,r.e],styles:[""]}),e})(),u=(()=>{class e{}return e.\u0275mod=p.Sb({type:e}),e.\u0275inj=p.Rb({factory:function(o){return new(o||e)},imports:[[i.b.forChild([{path:"",component:l}])],i.b]}),e})(),h=(()=>{class e{}return e.\u0275mod=p.Sb({type:e}),e.\u0275inj=p.Rb({factory:function(o){return new(o||e)},imports:[[n.b,r.b,c.h,c.k,u]]}),e})()}}]);