qx.$$packageData['4096']={"locales":{},"resources":{},"translations":{"de":{},"en":{}}};
qx.Part.$$notifyLoad("4096", function() {
(function(){var a="Timeout Set to : ",b="interval",c="Boolean",d="Target Page: ",e='cv.plugins.Timeout',f="Number",g="__kC",h="id_",i=")",j="true",k=" div > h1",l="#",m="TIMEOUT: Got Timeout - Now Goto Page ",n="TIMEOUT: Got Trigger (",o="TIMEOUT: Already on page ",p="timeout",q="String",r="path.pageChanged",s="useraction";qx.Class.define(e,{extend:cv.ui.structure.AbstractBasicWidget,construct:function(t){cv.ui.structure.AbstractBasicWidget.call(this,t);this.__tV=0;this.__nL();},statics:{parse:function(u,x,w,v){return cv.parser.WidgetParser.parseElement(this,u,x,w,v,this.getAttributeToPropertyMappings());},getAttributeToPropertyMappings:function(){return {'target':{"default":h},'time':{"default":600,transform:parseFloat},'debug':{"default":false,transform:function(y){return y===j;}}};}},properties:{target:{check:q,init:h},time:{check:f,init:600},debug:{check:c,init:false}},members:{__tV:null,__tW:null,__tX:null,__tY:null,__kC:null,__nL:function(){if(this.isDebug()){this.debug(a+this.getTime());this.debug(d+this.getTarget());};var z=this.getTime()*100;this.__kC=new qx.event.Timer(z);this.__kC.addListener(b,this.timeoutTrigger,this);this.__kC.start();qx.event.Registration.addListener(window,s,this._onUserAction,this);qx.event.message.Bus.subscribe(r,function(B){var A=B.getData();this.__tW=A;this.__tX=qx.dom.Node.getText(qx.bom.Selector.query(l+A+k)[0]);this.__tV=0;},this);},_onUserAction:function(){this.__tV=0;},timeoutTrigger:function(){if(this.isDebug()){this.debug(n+this.__tV+i);};this.__tV++ ;this.__tY=this.getTarget();if(this.__tV>=10){this.__tV=0;var C=cv.TemplateEngine.getInstance();if(this.__tW!==this.__tY&&this.__tX!==this.__tY){if(this.isDebug()){this.debug(m+this.__tY);};C.scrollToPage(this.__tY);C.getCurrentPage().getDomElement().scrollTop=0;}else {if(this.isDebug()){this.debug(o+this.__tY);};C.getCurrentPage().getDomElement().scrollTop=0;};};}},destruct:function(){this._disposeObjects(g);},defer:function(D){cv.parser.WidgetParser.addHandler(p,cv.plugins.Timeout);cv.ui.structure.WidgetFactory.registerClass(p,D);}});})();
});