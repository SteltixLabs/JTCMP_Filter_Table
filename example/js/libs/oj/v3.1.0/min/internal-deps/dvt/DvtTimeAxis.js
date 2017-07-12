/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var ga;function ka(a,E){0==a.indexOf("dvt.")&&(a=a.substring(4));var B=a.split("."),q=eval("dvt");B[0]in q||!q.execScript||q.execScript("var "+B[0]);for(var w;B.length&&(w=B.shift());)B.length||void 0===E?q=q[w]?q[w]:q[w]={}:q[w]=E}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function E(){}function B(a,f,b){this.Init(a,f,b)}function q(){this.Init({alta:q.Ig})}function w(a){this.Init(a)}a.Va=function(a,f,b){this.Init(a,f,b)};a.i.v(a.Va,a.mc);a.Va.VM="vertical";a.Va.bj=function(){return a.m.mb()};a.Va.Ic=function(a,f,b,e){b=(b-a)*e;a=f-a;return 0==b||0==a?0:b/a};a.Va.Ph=function(a,f,b,e){f=b*(f-a);return 0==f||0==e?a:f/e+a};a.Va.newInstance=function(d,f,b){return new a.Va(d,f,b)};a.Va.SZ="seconds minutes hours days weeks months quarters years".split(" ");a.Va.prototype.Init=
function(d,f,b){a.Va.C.Init.call(this,d,f,b);this.hka=new w;this.ui=h.jya;this.yJ(!1,!1,!1,!1);this.FG=d.sR().dateToIsoWithTimeZoneConverter;this.Os={CHa:[a.I.Ka(a.I.ua,"DAY_SHORT_SUNDAY",null),a.I.Ka(a.I.ua,"DAY_SHORT_MONDAY",null),a.I.Ka(a.I.ua,"DAY_SHORT_TUESDAY",null),a.I.Ka(a.I.ua,"DAY_SHORT_WEDNESDAY",null),a.I.Ka(a.I.ua,"DAY_SHORT_THURSDAY",null),a.I.Ka(a.I.ua,"DAY_SHORT_FRIDAY",null),a.I.Ka(a.I.ua,"DAY_SHORT_SATURDAY",null),a.I.Ka(a.I.ua,"DAY_SUNDAY",null),a.I.Ka(a.I.ua,"DAY_MONDAY",null),
a.I.Ka(a.I.ua,"DAY_TUESDAY",null),a.I.Ka(a.I.ua,"DAY_WEDNESDAY",null),a.I.Ka(a.I.ua,"DAY_THURSDAY",null),a.I.Ka(a.I.ua,"DAY_FRIDAY",null),a.I.Ka(a.I.ua,"DAY_SATURDAY",null)],Aca:[a.I.Ka(a.I.ua,"MONTH_SHORT_JANUARY",null),a.I.Ka(a.I.ua,"MONTH_SHORT_FEBRUARY",null),a.I.Ka(a.I.ua,"MONTH_SHORT_MARCH",null),a.I.Ka(a.I.ua,"MONTH_SHORT_APRIL",null),a.I.Ka(a.I.ua,"MONTH_SHORT_MAY",null),a.I.Ka(a.I.ua,"MONTH_SHORT_JUNE",null),a.I.Ka(a.I.ua,"MONTH_SHORT_JULY",null),a.I.Ka(a.I.ua,"MONTH_SHORT_AUGUST",null),
a.I.Ka(a.I.ua,"MONTH_SHORT_SEPTEMBER",null),a.I.Ka(a.I.ua,"MONTH_SHORT_OCTOBER",null),a.I.Ka(a.I.ua,"MONTH_SHORT_NOVEMBER",null),a.I.Ka(a.I.ua,"MONTH_SHORT_DECEMBER",null),a.I.Ka(a.I.ua,"MONTH_JANUARY",null),a.I.Ka(a.I.ua,"MONTH_FEBRUARY",null),a.I.Ka(a.I.ua,"MONTH_MARCH",null),a.I.Ka(a.I.ua,"MONTH_APRIL",null),a.I.Ka(a.I.ua,"MONTH_MAY",null),a.I.Ka(a.I.ua,"MONTH_JUNE",null),a.I.Ka(a.I.ua,"MONTH_JULY",null),a.I.Ka(a.I.ua,"MONTH_AUGUST",null),a.I.Ka(a.I.ua,"MONTH_SEPTEMBER",null),a.I.Ka(a.I.ua,"MONTH_OCTOBER",
null),a.I.Ka(a.I.ua,"MONTH_NOVEMBER",null),a.I.Ka(a.I.ua,"MONTH_DECEMBER",null)]};this.Uf=new q};a.Va.prototype.Le=function(a){this.K=this.Uf.Io(a)};a.Va.prototype.Av=function(a){this.cp=new E;return this.cp.parse(a)};a.Va.prototype.Bp=function(d){var f=d.orientation;this.Nc=f&&f==a.Va.VM?!0:!1;this.cxa(this.Nc);this.hC=d.P6;this.fE=d.CMa?d.CMa.reverse():[d.scale];this.eE=d.V6;this.Nh=d.AI;this.gu=d.zI;this.Wa=d.start;this.ub=d.end;this.jP=d.Ny;this.fd=d.scale;this.du=d.kra;this.Su()};a.Va.prototype.nA=
function(a,f){if("undefined"===typeof f||null===f)f=this.be;this.Ac=f<a?a:f};a.Va.prototype.cg=function(){return a.m.ca(this.a)};a.Va.prototype.Ia=function(){return this.Nc};a.Va.prototype.ha=function(a,f,b){a&&(this.Ra=f,this.fb=b,this.pFa(),this.h5(a,this.be));this.BB(f,b);this.Dl()};a.Va.prototype.h5=function(a,f){this.Le(a);this.Ok=this.K._resources;null==this.Ok&&(this.Ok=[]);this.Sx=this.K._locale?this.K._locale:"en-US";var b=this.Ok.firstDayOfWeek;null==b&&(b=0);this.hka.I7a(b);this.FG||(this.FG=
this.a.sR().dateToIsoWithTimeZoneConverter);b=this.Av(this.K);this.Bp(b);this.fd&&this.j6a(this.Wa,this.ub,f);return this.Ac};a.Va.prototype.sq=function(){var d=this.fd&&-1!=a.Z.Zb(a.Va.SZ,this.fd),f=this.fd&&this.Nh&&this.Nh[this.fd],b=this.Wa&&this.ub&&this.ub>this.Wa;return(d||f)&&b};a.Va.prototype.Ak=function(){return this.hC?this.hC:a.I.Ka(a.I.ua,"TIMEAXIS")};a.Va.prototype.Su=function(){this.q9=new a.j(h.u2a(this.K));this.q9.ul(this.jP);var d=this.q9.$h();this.q9.ul("border:"+2*d+"px;");this.o7a(d)};
a.Va.prototype.pFa=function(){this.Nc?(this.be=this.fb,this.Re=this.Ra):(this.be=this.Ra,this.Re=this.fb)};a.Va.prototype.D_a=function(){null!==this.Re&&this.Uca(this.Re-this.Jta());this.lK=this.Ac+this.Jta()-h.KNa};a.Va.prototype.d0a=function(a,f){this.Ra=a;this.fb=f;this.pFa();this.nA(this.be);this.D_a()};a.Va.prototype.BB=function(a,f){this.d0a(a,f);x.J6a(this)};a.Va.prototype.j6a=function(a,f,b){this.Cwa(this.du);this.Im("short",this.Os);this.ICa=[];this.Un=[];this.fL=[];this.Nc?this.bW(this.Ok.converterVert):
this.bW(this.Ok.converter);this.eE&&this.txa(this.eE);for(var e=this.fd,h=0;h<this.fE.length;h++){var g=this.fE[h],q=this.VYa(g,e,a,f);this.WYa(h,g,a,f,q,b)}this.kv(e)};a.Va.prototype.VYa=function(d,f,b,e){this.kv(d);var l=Infinity,g=0,q;if(this.Nh&&this.Nh[d])q=this.Nh[d],d=q.times,q=q.labels;else if(this.gu&&this.gu[d])q=this.gu[d],d=q.times,q=q.labels;else for(d=[],q=[],b=this.uI(b).getTime(),d.push(b);b<e;)q.push(this.yy(new Date(b))),b=this.NI(b).getTime(),d.push(b);e=[];for(var r=0;r<q.length;r++){b=
d[r];var k=new a.J(this.a,q[r],0,0,"s_label"+b);k.tb(h.s2a(this.K));k.time=b;var y=d[r+1];this.B(k);var t=k.ga();this.removeChild(k);if(this.Nc)var x=t.f,t=t.b,w=h.lya;else x=t.b,t=t.f,w=h.nya;b=(y-b)/Math.max(w,x+2*h.mya);b<l&&(l=b);t>g&&(g=t);e.push(k)}this.Uca(g+2*h.mya);this.ICa.push(d);this.Un.push(e);this.kv(f);return l};a.Va.prototype.WYa=function(a,f,b,e,h,g){b=null!==this.Re?g:(e-b)/h;this.fL.push(b);f==this.fd&&(this.pl=a,this.nA(b,g));0==a&&(this.yP=this.Un[this.Un.length-1].length*g)};
a.Va.prototype.kv=function(a){this.fd=a};a.Va.prototype.txa=function(a){this.eE=a};a.Va.prototype.hca=function(){for(var a=0;a<this.fE.length-1;a++)if(this.fE[a]==this.fd){this.fd=this.fE[a+1];break}};a.Va.prototype.$aa=function(){for(var a=1;a<this.fE.length;a++)if(this.fE[a]==this.fd){this.fd=this.fE[a-1];break}};a.Va.prototype.Cwa=function(a){this.du=a};a.Va.prototype.bW=function(a){this.Uka=a};a.Va.prototype.Uca=function(a){a>this.Kl&&(this.Kl=a)};a.Va.prototype.OR=function(){null==this.r3&&(this.r3=
30);return this.r3};a.Va.prototype.o7a=function(a){this.ui=a};a.Va.prototype.yJ=function(a,f,b,e){this.ZBa=(a|0)*this.ui;this.HUa=(f|0)*this.ui;this.WBa=(b|0)*this.ui;this.GUa=(e|0)*this.ui};a.Va.prototype.i1a=function(){for(var a=this.Nc?{top:this.ye(),right:this.lK,bottom:this.ye(),left:this.lK}:{top:this.lK,right:this.ye(),bottom:this.lK,left:this.ye()},f=[],b=0,e=1,h=["top","right","bottom","left"],g=0;g<h.length;g++)0<this.$h(h[g])==e?b+=a[h[g]]:(f.push(b),b=a[h[g]],e=Math.abs(e-1));f.push(b);
return f.toString()};a.Va.prototype.Jta=function(){return this.ZBa+this.WBa};a.Va.prototype.$h=function(a){switch(a){case "top":return this.ZBa;case "right":return this.HUa;case "bottom":return this.WBa;case "left":return this.GUa;default:return this.ui}};a.Va.prototype.ye=function(){return this.Kl+this.Jta()};a.Va.prototype.Im=function(a,f){this.sWa=new B("short"==a?B.SHORT:B.XOa,f,this.Sx)};a.Va.prototype.uI=function(a){return this.hka.uI(new Date(a),this.fd)};a.Va.prototype.NI=function(a){return this.hka.NI(a,
this.fd)};a.Va.prototype.yy=function(a,f,b){var e=this.fd;if("axis"==(b||"axis"))(f=f||this.du)&&(f[e]?f=f[e]:f["default"]&&(f=f["default"])),f&&(f.format||f.getAsString)||!this.Uka||!this.Uka[e]||(f=this.Uka[e]);else if(!f)if(f="hours"==e||"minutes"==e||"seconds"==e?{formatType:"datetime",dateFormat:"medium",timeFormat:"medium"}:{formatType:"date",dateFormat:"medium"},b=this.Ok.converterFactory)f=b.createConverter(f);else{f="toLocaleDateString";b={year:"numeric",month:"short",day:"numeric"};if("hours"==
e||"minutes"==e||"seconds"==e)f="toLocaleString",b={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};try{return a[f](this.Sx,b)}catch(h){}return a[f]()}if(f){if(f.format)return f.format(this.FG?this.FG(a):a);if(f.getAsString)return f.getAsString(a)}return this.sWa.format(a,e,this.eE)};a.Va.prototype.cxa=function(a){this.Kl=a?h.nya:h.lya};a.Va.prototype.Sca=function(){this.Re=null};a.Va.prototype.ME=function(a){this.pl=a};a.i.v(w,a.i);w.prototype.Init=function(){this.SVa=
864E5;this.fDa=0};w.prototype.I7a=function(a){this.fDa=a};w.prototype.uI=function(a,f){var b=new Date(a.getTime());if("weeks"==f){b.setHours(0,0,0);var e=(a.getDay()-this.fDa+7)%7;0<e&&b.setTime(b.getTime()-e*this.SVa)}else"months"==f?b.setDate(1):"days"==f?b.setHours(0,0,0):"hours"==f?b.setMinutes(0,0,0):"minutes"==f?b.setSeconds(0,0):"seconds"==f?b.setMilliseconds(0):"quarters"==f?(b.setDate(1),e=2-(a.getMonth()+11)%3,0<e&&b.setMonth(b.getMonth()+e)):"halfyears"==f?(b.setDate(1),e=5-(a.getMonth()+
11)%6,0<e&&b.setMonth(b.getMonth()+e)):"years"==f?(b.setMonth(0),b.setDate(1)):"twoyears"==f&&(b.setMonth(0),b.setDate(1));return b};w.prototype.NI=function(a,f){if("seconds"==f)return new Date(a+1E3);if("minutes"==f)return new Date(a+6E4);if("hours"==f)return new Date(a+36E5);var b=new Date(a);"days"==f?b.setDate(b.getDate()+1):"weeks"==f?b.setDate(b.getDate()+7):"months"==f?b.setMonth(b.getMonth()+1):"quarters"==f?b.setMonth(b.getMonth()+3):"halfyears"==f?b.setMonth(b.getMonth()+6):"years"==f?b.setFullYear(b.getFullYear()+
1):"twoyears"==f?b.setFullYear(b.getFullYear()+2):b.setYear(b.getYear()+1);return b};a.i.v(q,a.ma,"DvtTimeAxisDefaults");q.Ig={backgroundColor:"rgba(255,255,255,0)",borderColor:"#d9dfe3",separatorColor:"#bcc7d2",labelStyle:new a.j(a.ma.tp+"color: #333333;")};a.i.v(B,a.i);B.XOa=0;B.SHORT=1;B.prototype.Init=function(a,f,b){this.Yn=a;this.Os=f;this.Sx=b;this.fn=[];this.fn[0]={};this.fn[0].seconds="HH:MM:ss";this.fn[0].minutes="HH:MM";this.fn[0].hours="HH:MM";this.fn[0].days="dddd";this.fn[0].weeks="m/dd";
this.fn[0].months="mmmm";this.fn[0].quarters="mmmm";this.fn[0].halfyears="yyyy";this.fn[0].years="yyyy";this.fn[0].twoyears="yyyy";this.fn[1]={};this.fn[1].seconds="HH:MM:ss";this.fn[1].minutes="HH:MM";this.fn[1].hours="HH:MM";this.fn[1].days="m/dd";this.fn[1].weeks="m/dd";this.fn[1].months="mmm";this.fn[1].quarters="mmm";this.fn[1].halfyears="yy";this.fn[1].years="yy";this.fn[1].twoyears="yy"};B.prototype.format=function(a,f,b){f=this.fn[this.Yn][f];if(null!=f){var e=!1;if(b){a=a.getTime();for(var e=
Object.keys(b),h=0,g=0;g<e.length;g++)a>=parseInt(e[g],10)&&(h=b[e[g]]);a=new Date(a+h);e=!0}if(-1!=f.indexOf(":"))var q=":";else-1!=f.indexOf("/")&&(q="/");if(q){f=f.split(q);b=this.ssa(a,f[0],e);for(g=1;g<f.length;g++)b+=q+this.ssa(a,f[g],e);return b}return this.ssa(a,f,e)}try{return a.toLocaleString(this.Sx)}catch(r){}return a.toLocaleString()};B.prototype.ssa=function(a,f,b){if(b)switch(f){case "ss":return a=a.getUTCSeconds(),10>a?"0"+a:a;case "HH":return a=a.getUTCHours(),10>a?"0"+a:a;case "MM":return a=
a.getUTCMinutes(),10>a?"0"+a:a;case "dd":return a=a.getUTCDate(),10>a?"0"+a:a;case "dddd":return this.Os.CHa[a.getUTCDay()+7];case "m":return a.getUTCMonth()+1;case "mmm":return this.Os.Aca[a.getUTCMonth()];case "mmmm":return this.Os.Aca[a.getUTCMonth()+12];case "yy":return a.getUTCFullYear().toString().substring(2,4);default:return a.getUTCFullYear()}else switch(f){case "ss":return a=a.getSeconds(),10>a?"0"+a:a;case "HH":return a=a.getHours(),10>a?"0"+a:a;case "MM":return a=a.getMinutes(),10>a?"0"+
a:a;case "dd":return a=a.getDate(),10>a?"0"+a:a;case "dddd":return this.Os.CHa[a.getDay()+7];case "m":return a.getMonth()+1;case "mmm":return this.Os.Aca[a.getMonth()];case "mmmm":return this.Os.Aca[a.getMonth()+12];case "yy":return a.getFullYear().toString().substring(2,4);default:return a.getFullYear()}};a.i.v(E,a.i,"DvtTimeAxisParser");E.prototype.parse=function(a){this.Ku=new Date(a.start);this.uB=new Date(a.end);var f=this.AY();f.Ny=a.style;f.id=a.id;f.P6=a.shortDesc;f.V6=a._tzo;f.yca=a._ip;
f.AI=a._cts;f.zI=a._cfs;f.scale=a.scale;f.kra=a.converter;f.CMa=a.zoomOrder?a.zoomOrder:null;f.orientation=a.orientation?a.orientation:"horizontal";return f};E.prototype.AY=function(){var a={};a.start=this.Ku.getTime();a.end=this.uB.getTime();return a};var x={};a.i.v(x,a.i,"DvtTimeAxisRenderer");x.J6a=function(a){if(a.sq()){var f=a.ye();x.tZa(a,f,h.Qra(a.K))}};x.tZa=function(d,f,b){var e=0,l=d.a;if(null==d.Jf){var g=new a.jc;d.Ia()?(d.Jf=new a.Rect(l,e,-d.$h("top"),f,d.lK,"axis"),g.ue(e,0,f,d.Ac)):
(d.Jf=new a.Rect(l,-d.$h("left"),e,d.lK,f,"axis"),g.ue(0,e,d.Ac,f));d.Jf.tb(d.q9);d.Jf.dd(!0);d.Jf.he(g);d.B(d.Jf);(f=h.q2a(d.K))&&d.Jf.nq().oa().setAttribute("class",f)}else d.Jf.he(null),g=new a.jc,d.Ia()?(d.Jf.qa(e),d.Jf.Za(-d.$h("top")),d.Jf.qb(f),d.Jf.Tb(d.lK),g.ue(e,0,f,d.Ac)):(d.Jf.qa(-d.$h("left")),d.Jf.Za(e),d.Jf.qb(d.lK),d.Jf.Tb(f),g.ue(0,e,d.Ac,f)),d.Jf.he(g);d.Jf.di();d.Jf.nq().oa().setAttribute("stroke-dasharray",d.i1a());b=new a.j(b);d.dI=new a.na(b.O(a.j.ud));f=d.Kl;e=e+d.Ia()?d.$h("left"):
d.$h("top");x.uZa(d,d.Re,d.Jf,d.Ac,e+f,e,e)};x.uZa=function(d,f,b,e,l,g,q){var r=d.a,k=a.m.ca(r),y=new a.ba(r,"block_0_"+f);y.OE=0;y.xC=f;b.B(y);f=h.r2a(d.K);b=h.t2a(d.K);for(var t=d.Kl,w=d.ICa[d.pl],C=d.Un[d.pl],D=0;D<w.length-1;D++){var v=w[D],z=w[D+1],m=a.Va.Ic(d.Wa,d.ub,v,e),z=a.Va.Ic(d.Wa,d.ub,z,e),A=z-m;0!=m&&((d.Ia()?x.Aja(r,y,l,g,m,m,d.dI,"s_tick"+v,b):k?x.Aja(r,y,e-m,e-m,l,g,d.dI,"s_tick"+v,b):x.Aja(r,y,m,m,l,g,d.dI,"s_tick"+v,b)).time=v);d.Ia()?x.tja(y,C[D],q+(l-q)/2,m+(z-m)/2,l-q,z-m,f):
k?x.tja(y,C[D],e-(m+(z-m)/2),q+(l-q)/2,A,t,f):x.tja(y,C[D],m+(z-m)/2,q+(l-q)/2,A,t,f)}};x.tja=function(d,f,b,e,h,g,q){f.qa(b);f.Za(e);f.ao()&&f.ze(f.Dm());a.ea.Xc(f,h,g,d);f.og();a.ea.IQ(f,e);q&&f.nq().oa().setAttribute("class",q)};x.Aja=function(d,f,b,e,h,g,q,r,k){d=new a.Hb(d,b,h,e,g,r);d.Ga(q);d.dd(!0);f.B(d);k&&d.nq().oa().setAttribute("class",k);return d};var h={};a.i.v(h,a.i,"DvtTimeAxisStyleUtils");h.jya=1;h.KNa=1;h.nya=50;h.lya=21;h.mya=2;h.u2a=function(a){var f="",b=h.v2a(a);b&&(f=f+"background-color:"+
b+";");(b=h.Ko(a))&&(f=f+"border-color:"+b+";");(b=h.$h())&&(f=f+"border-width:"+b+";");return f};h.v2a=function(a){return a.backgroundColor};h.Ko=function(a){return a.borderColor};h.$h=function(){return h.jya};h.s2a=function(a){return a.labelStyle};h.wta=function(a){return a.separatorColor};h.Qra=function(a){var f="";(a=h.wta(a))&&(f=f+"color:"+a+";");return f};h.q2a=function(a){return a._resources?a._resources.axisClass:void 0};h.D$a=function(a){return a._resources?a._resources.axisBorderClass:
void 0};h.r2a=function(a){return a._resources?a._resources.axisLabelClass:void 0};h.t2a=function(a){return a._resources?a._resources.axisSeparatorClass:void 0};h.Q$a=function(a){return a._resources?a._resources.borderTopVisible:!1};h.P$a=function(a){return a._resources?a._resources.borderRightVisible:!1};h.N$a=function(a){return a._resources?a._resources.borderBottomVisible:!1};h.O$a=function(a){return a._resources?a._resources.borderLeftVisible:!1};a.M(a,"TimeAxis",a.Va);a.M(a.Va,"newInstance",a.Va.newInstance);
a.M(a.Va.prototype,"render",a.Va.prototype.ha)})(dvt);
  return dvt;
});
