(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CKRj:function(t,e,a){"use strict";a.r(e),a.d(e,"TrainingModule",(function(){return J}));var n=a("kt0X"),i=a("vQgB"),r=a("fXoL"),c=a("vEl1"),s=a("ofXK"),o=a("wZkO"),b=a("XiUz"),l=a("3Pt+"),u=a("Wp6s"),p=a("kmnG"),m=a("d3UM"),d=a("bTqV"),g=a("FKr1");function f(t,e){if(1&t&&(r.Tb(0,"mat-option",7),r.Ac(1),r.Sb()),2&t){const t=e.$implicit;r.kc("value",t.id),r.Cb(1),r.Cc(" ",t.name," ")}}let h=(()=>{class t{constructor(t,e){this.trainingService=t,this.store=e}ngOnInit(){this.allExercises$=this.store.select(i.b),this.trainingService.fetchAvailableExercises()}onStartTraining(t){this.trainingService.startExercise(t.value.exercise)}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(c.a),r.Nb(n.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-new-training"]],decls:16,vars:4,consts:[["fxLayout","","fxLayoutAlign","center",1,"new-training"],[3,"ngSubmit"],["f","ngForm"],["fxFlex","100%","fxFlex","400px","fxLayout","column","fxLayoutAlign","center center"],["ngModel","","name","exercise","required",""],[3,"value",4,"ngFor","ngForOf"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],[3,"value"]],template:function(t,e){if(1&t){const t=r.Ub();r.Tb(0,"section",0),r.Tb(1,"form",1,2),r.bc("ngSubmit",(function(){r.rc(t);const a=r.pc(2);return e.onStartTraining(a)})),r.Tb(3,"mat-card",3),r.Tb(4,"mat-card-title"),r.Ac(5," Time to start a Workout! "),r.Sb(),r.Tb(6,"mat-card-content"),r.Tb(7,"mat-form-field"),r.Tb(8,"mat-label"),r.Ac(9,"Exercises"),r.Sb(),r.Tb(10,"mat-select",4),r.zc(11,f,2,2,"mat-option",5),r.gc(12,"async"),r.Sb(),r.Sb(),r.Sb(),r.Tb(13,"mat-card-actions"),r.Tb(14,"button",6),r.Ac(15," Start "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()}if(2&t){const t=r.pc(2);r.Cb(11),r.kc("ngForOf",r.hc(12,2,e.allExercises$)),r.Cb(3),r.kc("disabled",t.invalid)}},directives:[b.c,b.b,l.t,l.n,l.o,u.a,b.a,u.e,u.c,p.c,p.g,m.a,l.m,l.p,l.r,s.l,u.b,d.a,g.n],pipes:[s.b],styles:[".new-training[_ngcontent-%COMP%]{padding:30px}"]}),t})();var S=a("M9IT"),T=a("+0xr"),C=a("Dh3D"),v=a("qFsG"),x=a("znSr");function y(t,e){1&t&&(r.Tb(0,"th",17),r.Ac(1,"Date"),r.Sb())}function w(t,e){if(1&t&&(r.Tb(0,"td",18),r.Ac(1),r.gc(2,"date"),r.Sb()),2&t){const t=e.$implicit;r.Cb(1),r.Cc(" ",r.hc(2,1,t.date.toDate())," ")}}function A(t,e){1&t&&(r.Tb(0,"th",19),r.Ac(1,"Name"),r.Sb())}function O(t,e){if(1&t&&(r.Tb(0,"td",18),r.Ac(1),r.Sb()),2&t){const t=e.$implicit;r.Cb(1),r.Bc(t.name)}}function k(t,e){1&t&&(r.Tb(0,"th",19),r.Ac(1,"Duration"),r.Sb())}function D(t,e){if(1&t&&(r.Tb(0,"td",18),r.Ac(1),r.gc(2,"number"),r.Sb()),2&t){const t=e.$implicit;r.Cb(1),r.Cc(" ",r.hc(2,1,t.duration)," ")}}function z(t,e){1&t&&(r.Tb(0,"th",19),r.Ac(1,"Calories"),r.Sb())}function I(t,e){if(1&t&&(r.Tb(0,"td",18),r.Ac(1),r.gc(2,"number"),r.Sb()),2&t){const t=e.$implicit;r.Cb(1),r.Cc(" ",r.hc(2,1,t.calories)," ")}}function F(t,e){1&t&&(r.Tb(0,"th",19),r.Ac(1,"State"),r.Sb())}function N(t,e){if(1&t&&(r.Tb(0,"td",18),r.Ac(1),r.Sb()),2&t){const t=e.$implicit;r.Cb(1),r.Bc(t.state)}}function E(t,e){1&t&&r.Ob(0,"tr",20)}function L(t,e){1&t&&r.Ob(0,"tr",21)}const R=function(){return[5,10,20]};let $=(()=>{class t{constructor(t,e){this.trainingService=t,this.store=e,this.dataSource=new T.k,this.displayedColumns=["date","name","duration","calories","state"]}ngOnInit(){this.store.select(i.c).subscribe(t=>{this.dataSource.data=t}),this.trainingService.fetchCompletedOrCancelledExercises(),this.dataSource.paginator=this.paginator}doFilter(t){this.dataSource.filter=t.trim().toLowerCase()}ngAfterViewInit(){this.dataSource.sort=this.sort}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(c.a),r.Nb(n.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-past-trainings"]],viewQuery:function(t,e){var a;1&t&&(r.Dc(C.a,!0),r.Dc(S.a,!0)),2&t&&(r.oc(a=r.cc())&&(e.sort=a.first),r.oc(a=r.cc())&&(e.paginator=a.first))},decls:26,vars:6,consts:[["fxLayout","row","fxLayoutAlign","center center"],["fxFlex","30%","fxFlex.xs","50%","appearance","outline"],["matInput","",3,"keyup"],["ngClass.gt-xs","tableDiv",1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","duration"],["matColumnDef","calories"],["matColumnDef","state"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSize","pageSizeOptions"],["paginator",""],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(r.Tb(0,"div",0),r.Tb(1,"mat-form-field",1),r.Tb(2,"mat-label"),r.Ac(3,"Filter"),r.Sb(),r.Tb(4,"input",2),r.bc("keyup",(function(t){return e.doFilter(t.target.value)})),r.Sb(),r.Sb(),r.Sb(),r.Tb(5,"div",3),r.Tb(6,"table",4),r.Rb(7,5),r.zc(8,y,2,0,"th",6),r.zc(9,w,3,3,"td",7),r.Qb(),r.Rb(10,8),r.zc(11,A,2,0,"th",9),r.zc(12,O,2,1,"td",7),r.Qb(),r.Rb(13,10),r.zc(14,k,2,0,"th",9),r.zc(15,D,3,3,"td",7),r.Qb(),r.Rb(16,11),r.zc(17,z,2,0,"th",9),r.zc(18,I,3,3,"td",7),r.Qb(),r.Rb(19,12),r.zc(20,F,2,0,"th",9),r.zc(21,N,2,1,"td",7),r.Qb(),r.zc(22,E,1,0,"tr",13),r.zc(23,L,1,0,"tr",14),r.Sb(),r.Ob(24,"mat-paginator",15,16),r.Sb()),2&t&&(r.Cb(6),r.kc("dataSource",e.dataSource),r.Cb(16),r.kc("matHeaderRowDef",e.displayedColumns),r.Cb(1),r.kc("matRowDefColumns",e.displayedColumns),r.Cb(1),r.kc("pageSize",2)("pageSizeOptions",r.lc(5,R)))},directives:[b.c,b.b,p.c,b.a,p.g,v.b,x.a,T.j,C.a,T.c,T.e,T.b,T.g,T.i,S.a,T.d,T.a,C.b,T.f,T.h],pipes:[s.e,s.f],styles:["table[_ngcontent-%COMP%]{width:100%}.tableDiv[_ngcontent-%COMP%]{width:80%;display:block;position:relative;left:10%}"]}),t})();var H=a("0IaG");let M=(()=>{class t{constructor(t){this.passedData=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(H.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-stop-training"]],decls:10,vars:3,consts:[["mat-dialog-title",""],["mat-button","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(r.Tb(0,"h1",0),r.Ac(1,"Are you sure?"),r.Sb(),r.Tb(2,"mat-dialog-content"),r.Tb(3,"p"),r.Ac(4),r.Sb(),r.Sb(),r.Tb(5,"mat-dialog-actions"),r.Tb(6,"button",1),r.Ac(7,"Yes"),r.Sb(),r.Tb(8,"button",1),r.Ac(9,"No"),r.Sb(),r.Sb()),2&t&&(r.Cb(4),r.Cc("You already got ",e.passedData.progress,"%"),r.Cb(2),r.kc("mat-dialog-close",!0),r.Cb(2),r.kc("mat-dialog-close",!1))},directives:[H.g,H.e,H.c,d.a,H.d],styles:[""]}),t})();var P=a("IzEk"),Q=a("Xa2L");let j=(()=>{class t{constructor(t,e,a){this.dialog=t,this.trainingService=e,this.store=a,this.progress=0}ngOnInit(){this.startOrResumeTimer(),this.store.select(i.a).pipe(Object(P.a)(1)).subscribe(t=>this.currentExercise=t.name)}startOrResumeTimer(){this.store.select(i.a).pipe(Object(P.a)(1)).subscribe(t=>{this.timer=setInterval(()=>{this.progress=this.progress+1,this.progress>=100&&(this.trainingService.completeExercise(),clearInterval(this.timer),this.progress=100)},t.duration/100*1e3)})}onStop(){clearInterval(this.timer),this.dialog.open(M,{data:{progress:this.progress}}).afterClosed().subscribe(t=>{t?this.trainingService.cancelledExercise(this.progress):this.startOrResumeTimer()})}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(H.b),r.Nb(c.a),r.Nb(n.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-current-training"]],decls:10,vars:3,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"current-training"],["mode","determinate",3,"value"],[2,"position","absolute","padding","35px","top","100px","color","black"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,e){1&t&&(r.Tb(0,"section",0),r.Ob(1,"mat-progress-spinner",1),r.Tb(2,"div",2),r.Ac(3),r.Sb(),r.Tb(4,"h1"),r.Ac(5),r.Sb(),r.Tb(6,"p"),r.Ac(7,"Keep going, you can do it!"),r.Sb(),r.Tb(8,"button",3),r.bc("click",(function(){return e.onStop()})),r.Ac(9,"Stop"),r.Sb(),r.Sb()),2&t&&(r.Cb(1),r.kc("value",e.progress),r.Cb(2),r.Cc(" ",e.progress,"% "),r.Cb(2),r.Bc(e.currentExercise))},directives:[b.c,b.b,Q.a,d.a],styles:[".current-training[_ngcontent-%COMP%]{padding:30px}"]}),t})();function K(t,e){1&t&&(r.Tb(0,"mat-tab-group"),r.Tb(1,"mat-tab",1),r.Ob(2,"app-new-training"),r.Sb(),r.Tb(3,"mat-tab",2),r.Ob(4,"app-past-trainings"),r.Sb(),r.Sb())}function B(t,e){1&t&&r.Ob(0,"app-current-training")}let X=(()=>{class t{constructor(t,e){this.trainingService=t,this.store=e}ngOnInit(){this.ongoingTraining$=this.store.select(i.d)}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(c.a),r.Nb(n.a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-training"]],decls:4,vars:6,consts:[[4,"ngIf"],["label","New Exercises"],["label","Past Exercises"]],template:function(t,e){1&t&&(r.zc(0,K,5,0,"mat-tab-group",0),r.gc(1,"async"),r.zc(2,B,1,0,"app-current-training",0),r.gc(3,"async")),2&t&&(r.kc("ngIf",!r.hc(1,2,e.ongoingTraining$)),r.Cb(2),r.kc("ngIf",r.hc(3,4,e.ongoingTraining$)))},directives:[s.m,o.b,o.a,h,$,j],pipes:[s.b],styles:[""]}),t})();var _=a("tyNb");const q=[{path:"",component:X}];let G=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},imports:[[_.c.forChild(q)],_.c]}),t})();var U=a("PCNd");let J=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},imports:[[U.a,G,n.b.forFeature("training",i.e)]]}),t})()}}]);