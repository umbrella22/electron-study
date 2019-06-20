!function(t){"use strict";var f,u=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.toStringTag||"@@toStringTag",n="object"==typeof module,i=t.regeneratorRuntime;if(i)n&&(module.exports=i);else{(i=t.regeneratorRuntime=n?module.exports:{}).wrap=c;var p="suspendedStart",h="suspendedYield",y="executing",d="completed",v={},a=l.prototype=w.prototype;s.prototype=a.constructor=l,l.constructor=s,l[r]=s.displayName="GeneratorFunction",i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===s||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,r in t||(t[r]="GeneratorFunction")),t.prototype=Object.create(a),t},i.awrap=function(t){return new b(t)},m(x.prototype),i.async=function(t,e,r,n){var o=new x(c(t,e,r,n));return i.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},m(a),a[o]=function(){return this},a[r]="Generator",a.toString=function(){return"[object Generator]"},i.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=C,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=f)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),v},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},v}}}function c(t,e,r,n){var a,c,u,s,o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),l=new P(n||[]);return i._invoke=(a=t,c=r,u=l,s=p,function(t,e){if(s===y)throw new Error("Generator is already running");if(s===d){if("throw"===t)throw e;return E()}for(;;){var r=u.delegate;if(r){if("return"===t||"throw"===t&&r.iterator[t]===f){u.delegate=null;var n=r.iterator.return;if(n){var o=g(n,r.iterator,e);if("throw"===o.type){t="throw",e=o.arg;continue}}if("return"===t)continue}var o=g(r.iterator[t],r.iterator,e);if("throw"===o.type){u.delegate=null,t="throw",e=o.arg;continue}t="next",e=f;var i=o.arg;if(!i.done)return s=h,i;u[r.resultName]=i.value,u.next=r.nextLoc,u.delegate=null}if("next"===t)u.sent=u._sent=e;else if("throw"===t){if(s===p)throw s=d,e;u.dispatchException(e)&&(t="next",e=f)}else"return"===t&&u.abrupt("return",e);s=y;var o=g(a,c,u);if("normal"===o.type){s=u.done?d:h;var i={value:o.arg,done:u.done};if(o.arg!==v)return i;u.delegate&&"next"===t&&(e=f)}else"throw"===o.type&&(s=d,t="throw",e=o.arg)}}),i}function g(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function w(){}function s(){}function l(){}function m(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function b(t){this.arg=t}function x(c){function u(t,e,r,n){var o=g(c[t],c,e);if("throw"!==o.type){var i=o.arg,a=i.value;return a instanceof b?Promise.resolve(a.arg).then(function(t){u("next",t,r,n)},function(t){u("throw",t,r,n)}):Promise.resolve(a).then(function(t){i.value=t,r(i)},n)}n(o.arg)}var e;"object"==typeof process&&process.domain&&(u=process.domain.bind(u)),this._invoke=function(r,n){function t(){return new Promise(function(t,e){u(r,n,t,e)})}return e=e?e.then(t,t):t()}}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function C(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=f,t.done=!0,t};return n.next=n}}return{next:E}}function E(){return{value:f,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this);var _createClass=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),_get=function t(e,r,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};function _asyncToGenerator(t){return function(){var c=t.apply(this,arguments);return new Promise(function(i,a){return function e(t,r){try{var n=c[t](r),o=n.value}catch(t){return void a(t)}if(!n.done)return Promise.resolve(o).then(function(t){e("next",t)},function(t){e("throw",t)});i(o)}("next")})}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}!function(){"use strict";var e=function(t){function i(t){return _classCallCheck(this,i),_possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,t,Annotations.RectangleAnnotation))}return _inherits(i,Tools.GenericAnnotationCreateTool),_createClass(i,[{key:"mouseLeftUp",value:function(t){var e=this.annotation;if(_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"mouseLeftUp",this).call(this,t),e){var r=readerControl.docViewer.getAnnotationManager(),n=readerControl.docViewer.getDocument(),o=void 0;PDFNet.initialize().then(function(){n.getPDFDoc().then(function(t){return(o=t).requirePage(e.getPageNumber())}).then(function(){return a(o,n,e,r)}).then(function(){r.deleteAnnotation(e),readerControl.docViewer.refreshPage(e.getPageNumber()),readerControl.docViewer.updateView(),readerControl.docViewer.getDocument().refreshTextData()})})}}}]),i}();$(document).on("documentLoaded",function(){var r="AnnotationCreateRedactionTool",t=new e(readerControl.docViewer);readerControl.registerTool({toolName:r,toolObject:t}),readerControl.setHeaderItems(function(t){var e=t.getItems();e.splice(9,0,{type:"actionButton",img:"../../../samples/full-apis/ViewerRedactTest/annot_custom_redact.png",onClick:function(){readerControl.setToolMode(r)}}),t.update(e)}),readerControl.setToolMode(r)});var a=function(g,w,m,b){var t,e=(t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e,r,n,o,i,a,c,u,s,l,f,p,h,y,d,v;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:0,t.prev=1,!1,e=m.getPageNumber(),(r=g).initSecurityHandler(),r.lock(),!0,n=m.getX(),o=m.getY(),i=n+m.getWidth(),a=o+m.getHeight(),c=b.getAnnotationsList(),u=c.length-1;case 14:if(!(0<=u)){t.next=31;break}if(s=c[u],l=s.PageNumber,e!==l)return t.abrupt("continue",28);t.next=19;break;case 19:if(f=s.X,s.X+s.Width<n||i<f)return t.abrupt("continue",28);t.next=23;break;case 23:if(p=s.Y,s.Y+s.Height<o||a<p)return t.abrupt("continue",28);t.next=27;break;case 27:b.deleteAnnotation(s);case 28:u--,t.next=14;break;case 31:return h=w.getPDFCoordinates(e-1,n,o),y=w.getPDFCoordinates(e-1,i,a),d=[],t.t0=d,t.t1=PDFNet.Redactor,t.t2=e,t.next=39,PDFNet.Rect.init(h.x,h.y,y.x,y.y);case 39:return t.t3=t.sent,t.next=42,t.t1.redactionCreate.call(t.t1,t.t2,t.t3,!1,"");case 42:return t.t4=t.sent,t.t0.push.call(t.t0,t.t4),v={},t.next=47,PDFNet.Redactor.redact(r,d,v,!1,!1);case 47:console.log("Redacted Area (x1: "+h.x+", y1: "+h.y+", x2: "+y.x+", y2: "+y.y+") redacted"),t.next=54;break;case 50:t.prev=50,t.t5=t.catch(1),console.log(t.t5.stack),1;case 54:case"end":return t.stop()}},t,void 0,[[1,50]])})),function(){return t.apply(this,arguments)});return PDFNet.runWithCleanup(e)}}();