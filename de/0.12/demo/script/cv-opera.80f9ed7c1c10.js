qx.$$packageData['4096']={"locales":{},"resources":{},"translations":{"de":{},"en":{}}};
qx.Part.$$notifyLoad("4096", function() {
(function(){var a="Timeout Set to : ",b="interval",c="Boolean",d="__kz",e="Target Page: ",f='cv.plugins.Timeout',g="Number",h="id_",i=")",j="true",k=" div > h1",l="#",m="TIMEOUT: Got Timeout - Now Goto Page ",n="TIMEOUT: Got Trigger (",o="TIMEOUT: Already on page ",p="timeout",q="String",r="path.pageChanged",s="useraction";qx.Class.define(f,{extend:cv.ui.structure.AbstractBasicWidget,construct:function(t){cv.ui.structure.AbstractBasicWidget.call(this,t);this.__ua=0;this.__nL();},statics:{parse:function(u,x,w,v){return cv.parser.WidgetParser.parseElement(this,u,x,w,v,this.getAttributeToPropertyMappings());},getAttributeToPropertyMappings:function(){return {'target':{"default":h},'time':{"default":600,transform:parseFloat},'debug':{"default":false,transform:function(y){return y===j;}}};}},properties:{target:{check:q,init:h},time:{check:g,init:600},debug:{check:c,init:false}},members:{__ua:null,__ub:null,__uc:null,__ud:null,__kz:null,__nL:function(){if(this.isDebug()){this.debug(a+this.getTime());this.debug(e+this.getTarget());};var z=this.getTime()*100;this.__kz=new qx.event.Timer(z);this.__kz.addListener(b,this.timeoutTrigger,this);this.__kz.start();qx.event.Registration.addListener(window,s,this._onUserAction,this);qx.event.message.Bus.subscribe(r,function(B){var A=B.getData();this.__ub=A;this.__uc=document.querySelector(l+A+k).innerText;this.__ua=0;},this);},_onUserAction:function(){this.__ua=0;},timeoutTrigger:function(){if(this.isDebug()){this.debug(n+this.__ua+i);};this.__ua++ ;this.__ud=this.getTarget();if(this.__ua>=10){this.__ua=0;var C=cv.TemplateEngine.getInstance();if(this.__ub!==this.__ud&&this.__uc!==this.__ud){if(this.isDebug()){this.debug(m+this.__ud);};C.scrollToPage(this.__ud);C.getCurrentPage().getDomElement().scrollTop=0;}else {if(this.isDebug()){this.debug(o+this.__ud);};C.getCurrentPage().getDomElement().scrollTop=0;};};}},destruct:function(){this._disposeObjects(d);},defer:function(D){cv.parser.WidgetParser.addHandler(p,cv.plugins.Timeout);cv.ui.structure.WidgetFactory.registerClass(p,D);}});})();
});