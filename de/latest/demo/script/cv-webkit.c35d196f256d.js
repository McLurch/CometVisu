qx.$$packageData['65536']={"locales":{},"resources":{"plugins/mobilemenu/mobilemenu.css":"cv"},"translations":{"de":{},"en":{}}};
qx.Part.$$notifyLoad("65536", function() {
(function(){var a="touchmove",b='</div>',c="end",d='<div class="clearfix mobilemenuTrigger" style="display: none"></div>',f="actor",g='#',h="mobilemenu",i="_0",j='#navbarLeft',k="touchstart",l='plugins/mobilemenu/mobilemenu.css',m="path.pageChanged",n='mobilemenu',o='cv.plugins.MobileMenu',p="block",q="none",r='.navbar.navbarActive',s='.navbar',t='<div class="clearfix mobilemenuTrigger">',u="navbarLeft",v="TouchEvent",w="display";qx.Class.define(o,{extend:cv.ui.structure.AbstractWidget,include:[cv.ui.common.HasChildren],statics:{parse:function(x,B,z,y){var A=cv.parser.WidgetParser.parseElement(this,x,B,z,y);cv.parser.WidgetParser.parseChildren(x,B,z,y);return A;},getWidgetElements:function(D,C){cv.data.Model.getInstance().setWidgetData(C+i,{containerClass:f});}},members:{__tD:null,__tE:null,getDomString:function(){if(window.innerWidth<=cv.Config.maxMobileScreenWidth){var E=this.__tD=qx.bom.Selector.query(j)[0];if(!qx.bom.element.Class.has(E,n)){qx.bom.element.Class.add(E,n);};qx.bom.element.Style.set(E,w,q);qx.event.message.Bus.subscribe(m,function(){var F=qx.bom.Selector.query(s,E)[0];var G=qx.bom.element.Animation.animate(F,qx.util.Animation.SLIDE_LEFT_OUT);G.addListenerOnce(c,function(){qx.bom.element.Style.set(E,w,q);},this);});return t+this.getChildrenDomString()+b;}else {return d;};},_onDomReady:function(){if(this.isTouchDevice()){this.touchScroll(u);};},_action:function(){if(window.innerWidth<=cv.Config.maxMobileScreenWidth){if(this.isTouchDevice()){qx.bom.element.Style.set(this.__tD,w,p);var H=qx.bom.Selector.query(r,this.__tD)[0];qx.bom.element.Animation.animate(H,qx.util.Animation.SLIDE_LEFT_IN);};};},touchScroll:function(K){var I=0;var J=qx.bom.Selector.query(g+K)[0];qx.event.Registration.addListener(J,k,function(event){I=this.scrollTop+event.touches[0].pageY;event.preventDefault();},false);qx.event.Registration.addListener(J,a,function(event){this.scrollTop=I-event.touches[0].pageY;event.preventDefault();},false);},isTouchDevice:function(){if(this.__tE===null){try{document.createEvent(v);this.__tE=true;}catch(e){this.__tE=false;};};return this.__tE;}},defer:function(L){var M=cv.util.ScriptLoader.getInstance();M.addStyles(l);cv.parser.WidgetParser.addHandler(h,L);cv.ui.structure.WidgetFactory.registerClass(h,L);}});})();
});