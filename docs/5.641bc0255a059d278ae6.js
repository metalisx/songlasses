(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{OJsU:function(e,t,n){"use strict";n.r(t),n.d(t,"SelectModule",function(){return b});var s=n("ofXK"),o=n("3Pt+"),c=n("tyNb");const i=[{id:"BMB",name:"Barbara Morse Barton",superheroName:"Mockingbird"},{id:"BW",name:"Bruce Wayne",superheroName:"Batman"},{id:"CK",name:"Clark Kent",superheroName:"Superman"},{id:"DSS",name:"Dr. Stephen Strange",superheroName:"Doctor Strange"},{id:"JD",name:"Jessica Drew",superheroName:"Spider-Woman"},{id:"KD",name:"Kara Danvers",superheroName:"Supergirl"},{id:"LC",name:"Luke Cage",superheroName:"Power Man"},{id:"OM",name:"Ororo Monroe",superheroName:"Storm"},{id:"PD",name:"Princess Diana",superheroName:"Wonder Woman"},{id:"PP",name:"Peter Parker",superheroName:"Spider-Man"},{id:"SP",name:"Samantha Parrington",superheroName:"Valkyrie"},{id:"T",name:"T'Challa",superheroName:"Black Panther"}];var r=n("fXoL"),a=n("jhN1"),l=n("xZGP");let m=(()=>{class e{constructor(e){this.sanitizer=e,this.items=i,this.sgSelectComponentConfig={name:"select1",required:!0,itemValueField:"id",itemDescriptionField:"name",items:this.items},this.sgSelectComponentConfigStyled={name:"select2",required:!0,itemMatchStrategy:"contains",itemValueField:"id",itemDescriptionField:"name",items:this.items,className:"select2"},this.value="JD",this.valueStyled="BW",this.styles="<style>\n  .select2.sg-select {\n    width: 50%;\n  }\n  .select2.sg-select sg-select-input {\n    border: 1px solid #b07070;\n  }\n  .select2.sg-select .sg-select-items {\n    border: 1px solid #a06060;\n  }\n  .select2.sg-select .sg-select-items .sg-select-item {\n    background-color: #a06060;\n    color: #fff;\n  }\n  .select2.sg-select .sg-select-items .sg-select-item-active {\n    background-color: #702020;\n    color: #fff;\n  }\n  .select2.sg-select .sg-select-items .sg-select-item:hover {\n    background-color: #904040;\n    color: #fff;\n  }\n</style>"}ngOnInit(){this.stylesSafeHtml=this.sanitizer.bypassSecurityTrustHtml(this.styles)}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(a.b))},e.\u0275cmp=r.Kb({type:e,selectors:[["app-select"]],decls:35,vars:18,consts:[[3,"ngModel","sgSelectComponentConfig","ngModelChange"],[1,"code-container"],[1,"code-panel"],["readonly","",1,"code"],[3,"innerHTML"]],template:function(e,t){1&e&&(r.Wb(0,"h1"),r.wc(1,"Select - Default"),r.Vb(),r.Wb(2,"div"),r.Wb(3,"sg-select",0),r.dc("ngModelChange",function(e){return t.value=e}),r.Vb(),r.Vb(),r.wc(4),r.hc(5,"json"),r.Wb(6,"div",1),r.Wb(7,"div",2),r.Wb(8,"h6"),r.wc(9,"Config"),r.Vb(),r.Wb(10,"textarea",3),r.wc(11),r.hc(12,"json"),r.Vb(),r.Vb(),r.Vb(),r.Wb(13,"h1"),r.wc(14,"Select - Custom styled"),r.Vb(),r.Wb(15,"p"),r.wc(16," To style the component set the classname in the components config. In the example it is set to select2 and some custom style is added to target the components elements.\n"),r.Vb(),r.Rb(17,"div",4),r.Wb(18,"div"),r.Wb(19,"sg-select",0),r.dc("ngModelChange",function(e){return t.valueStyled=e}),r.Vb(),r.Vb(),r.Wb(20,"div"),r.wc(21),r.hc(22,"json"),r.Vb(),r.Wb(23,"div",1),r.Wb(24,"div",2),r.Wb(25,"h6"),r.wc(26,"Config"),r.Vb(),r.Wb(27,"textarea",3),r.wc(28),r.hc(29,"json"),r.Vb(),r.Vb(),r.Wb(30,"div",2),r.Wb(31,"h6"),r.wc(32,"Custom style"),r.Vb(),r.Wb(33,"textarea",3),r.wc(34),r.Vb(),r.Vb(),r.Vb()),2&e&&(r.Fb(3),r.jc("ngModel",t.value)("sgSelectComponentConfig",t.sgSelectComponentConfig),r.Fb(1),r.yc("\nExternal value : ",r.ic(5,10,t.value),"\n"),r.Fb(7),r.xc(r.ic(12,12,t.sgSelectComponentConfig)),r.Fb(6),r.jc("innerHTML",t.stylesSafeHtml,r.rc),r.Fb(2),r.jc("ngModel",t.valueStyled)("sgSelectComponentConfig",t.sgSelectComponentConfigStyled),r.Fb(2),r.yc(" External value : ",r.ic(22,14,t.valueStyled),"\n"),r.Fb(7),r.xc(r.ic(29,16,t.sgSelectComponentConfigStyled)),r.Fb(6),r.xc(t.styles))},directives:[l.e,o.d,o.e],pipes:[s.e],styles:[""]}),e})(),d=(()=>{class e{}return e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},imports:[[c.b.forChild([{path:"",component:m}])],c.b]}),e})(),b=(()=>{class e{}return e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},imports:[[s.b,o.b,d,l.f]]}),e})()}}]);