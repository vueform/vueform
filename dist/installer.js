import e from"lodash";import t from"axios";import u from"moment";import{watch as r,computed as i,ref as s,markRaw as a}from"vue";function n(e,t){var u=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),u.push.apply(u,r)}return u}function o(e){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{};t%2?n(Object(u),!0).forEach((function(t){l(e,t,u[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):n(Object(u)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(u,t))}))}return e}function h(e,t,u,r,i,s,a){try{var n=e[s](a),o=n.value}catch(e){return void u(e)}n.done?t(o):Promise.resolve(o).then(r,i)}function c(e){return function(){var t=this,u=arguments;return new Promise((function(r,i){var s=e.apply(t,u);function a(e){h(s,r,i,a,n,"next",e)}function n(e){h(s,r,i,a,n,"throw",e)}a(void 0)}))}}function l(e,t,u){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var u=e[Symbol.toPrimitive];if(void 0!==u){var r=u.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[t]=u,e}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;!function(e){var t=function(e){var t,u=Object.prototype,r=u.hasOwnProperty,i=Object.defineProperty||function(e,t,u){e[t]=u.value},s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",n=s.asyncIterator||"@@asyncIterator",o=s.toStringTag||"@@toStringTag";function h(e,t,u){return Object.defineProperty(e,t,{value:u,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(e){h=function(e,t,u){return e[t]=u}}function c(e,t,u,r){var s=t&&t.prototype instanceof g?t:g,a=Object.create(s.prototype),n=new $(r||[]);return i(a,"_invoke",{value:x(e,u,n)}),a}function l(e,t,u){try{return{type:"normal",arg:e.call(t,u)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var d="suspendedStart",m="suspendedYield",A="executing",f="completed",p={};function g(){}function F(){}function y(){}var C={};h(C,a,(function(){return this}));var v=Object.getPrototypeOf,D=v&&v(v(N([])));D&&D!==u&&r.call(D,a)&&(C=D);var E=y.prototype=g.prototype=Object.create(C);function B(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function u(i,s,a,n){var o=l(e[i],e,s);if("throw"!==o.type){var h=o.arg,c=h.value;return c&&"object"==typeof c&&r.call(c,"__await")?t.resolve(c.__await).then((function(e){u("next",e,a,n)}),(function(e){u("throw",e,a,n)})):t.resolve(c).then((function(e){h.value=e,a(h)}),(function(e){return u("throw",e,a,n)}))}n(o.arg)}var s;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){u(e,r,t,i)}))}return s=s?s.then(i,i):i()}})}function x(e,t,u){var r=d;return function(i,s){if(r===A)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw s;return _()}for(u.method=i,u.arg=s;;){var a=u.delegate;if(a){var n=w(a,u);if(n){if(n===p)continue;return n}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(r===d)throw r=f,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);r=A;var o=l(e,t,u);if("normal"===o.type){if(r=u.done?f:m,o.arg===p)continue;return{value:o.arg,done:u.done}}"throw"===o.type&&(r=f,u.method="throw",u.arg=o.arg)}}}function w(e,u){var r=u.method,i=e.iterator[r];if(i===t)return u.delegate=null,"throw"===r&&e.iterator.return&&(u.method="return",u.arg=t,w(e,u),"throw"===u.method)||"return"!==r&&(u.method="throw",u.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var s=l(i,e.iterator,u.arg);if("throw"===s.type)return u.method="throw",u.arg=s.arg,u.delegate=null,p;var a=s.arg;return a?a.done?(u[e.resultName]=a.value,u.next=e.nextLoc,"return"!==u.method&&(u.method="next",u.arg=t),u.delegate=null,p):a:(u.method="throw",u.arg=new TypeError("iterator result is not an object"),u.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function N(e){if(e){var u=e[a];if(u)return u.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function u(){for(;++i<e.length;)if(r.call(e,i))return u.value=e[i],u.done=!1,u;return u.value=t,u.done=!0,u};return s.next=s}}return{next:_}}function _(){return{value:t,done:!0}}return F.prototype=y,i(E,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:F,configurable:!0}),F.displayName=h(y,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===F||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,h(e,o,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},B(b.prototype),h(b.prototype,n,(function(){return this})),e.AsyncIterator=b,e.async=function(t,u,r,i,s){void 0===s&&(s=Promise);var a=new b(c(t,u,r,i),s);return e.isGeneratorFunction(u)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},B(E),h(E,o,"Generator"),h(E,a,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),u=[];for(var r in t)u.push(r);return u.reverse(),function e(){for(;u.length;){var r=u.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=N,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var u in this)"t"===u.charAt(0)&&r.call(this,u)&&!isNaN(+u.slice(1))&&(this[u]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var u=this;function i(r,i){return n.type="throw",n.arg=e,u.next=r,i&&(u.method="next",u.arg=t),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],n=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var o=r.call(a,"catchLoc"),h=r.call(a,"finallyLoc");if(o&&h){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var u=this.tryEntries.length-1;u>=0;--u){var i=this.tryEntries[u];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var a=s?s.completion:{};return a.type=e,a.arg=t,s?(this.method="next",this.next=s.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var u=this.tryEntries[t];if(u.finallyLoc===e)return this.complete(u.completion,u.afterLoc),O(u),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var u=this.tryEntries[t];if(u.tryLoc===e){var r=u.completion;if("throw"===r.type){var i=r.arg;O(u)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,u,r){return this.delegate={iterator:N(e),resultName:u,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}({exports:{}});var d=f;function m(e){return e&&e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function A(e){return e}function f(e,t){const u=(t=t||{}).delimiter||".",r=t.maxDepth,i=t.transformKey||A,s={};return function e(a,n,o){o=o||1,Object.keys(a).forEach((function(h){const c=a[h],l=t.safe&&Array.isArray(c),d=Object.prototype.toString.call(c),A=m(c),f="[object Object]"===d||"[object Array]"===d,p=n?n+u+i(h):i(h);if(!l&&!A&&f&&Object.keys(c).length&&(!t.maxDepth||o<r))return e(c,p,o+1);s[p]=c}))}(e),s}function p(t,u){if(!u.apply&&e.difference(Object.keys(u),["config","install"]).length>0)return!0;var r=u.apply;Array.isArray(r)||(r=[r]);var i=!1;return e.each(r,(e=>"string"==typeof e&&e===t||"object"==typeof e&&e instanceof RegExp&&t.match(e)?(i=!0,!1):void 0)),i}f.flatten=f,f.unflatten=function e(t,u){const r=(u=u||{}).delimiter||".",i=u.overwrite||!1,s=u.transformKey||A,a={};if(m(t)||"[object Object]"!==Object.prototype.toString.call(t))return t;function n(e){const t=Number(e);return isNaN(t)||-1!==e.indexOf(".")||u.object?e:t}return t=Object.keys(t).reduce((function(e,i){const s=Object.prototype.toString.call(t[i]);return!("[object Object]"===s||"[object Array]"===s)||function(e){const t=Object.prototype.toString.call(e),u="[object Array]"===t,r="[object Object]"===t;if(!e)return!0;if(u)return!e.length;if(r)return!Object.keys(e).length}(t[i])?(e[i]=t[i],e):function(e,t,u){return Object.keys(u).reduce((function(t,i){return t[e+r+i]=u[i],t}),t)}(i,e,f(t[i],u))}),{}),Object.keys(t).forEach((function(o){const h=o.split(r).map(s);let c=n(h.shift()),l=n(h[0]),d=a;for(;void 0!==l;){if("__proto__"===c)return;const e=Object.prototype.toString.call(d[c]),t="[object Object]"===e||"[object Array]"===e;if(!i&&!t&&void 0!==d[c])return;(i&&!t||!i&&null==d[c])&&(d[c]="number"!=typeof l||u.object?{}:[]),d=d[c],h.length>0&&(c=n(h.shift()),l=n(h[0]))}d[c]=e(t[o],u)})),a};var g="1.3.10",F=function(e){return void 0===e||"string"!=typeof e?e:e.match(/^-*\d+$/)?parseInt(e,10):e.match(/^\d+\.\d+$/)?parseFloat(e):e},y=t=>({name:t.split(":")[0],attributes:(()=>{var u=t.split(":");if(u.length<=1)return null;var r={},i=u[0];u.shift();var s=u.join(":");return-1!==["regex","not_regex"].indexOf(i)?(r[0]=s,r):(e.each(s.split(","),((e,t)=>{var u=e.split("=");u.length<=1?r[t]=F(e):r[u[0]]=F(u[1])})),r)})()});function C(e,t){return t.match(/\.([0-9]+)(?![a-zA-Z]+)/g)?(t.match(/\.([0-9]+)(?![a-zA-Z]+)/g).forEach((t=>{e=e.replace(".*",t)})),e):e}function v(t,r,i,s){if(!r)return!1;switch(t=Array.isArray(t)?t.map((e=>F(e))):F(t),i=Array.isArray(i)?i.map((e=>F(e))):F(i),r.toLowerCase()){case">":return e.isArray(t)?t.every((e=>e>i)):t>i;case">=":return e.isArray(t)?t.every((e=>e>=i)):t>=i;case"<":return e.isArray(t)?t.every((e=>e<i)):t<i;case"<=":return e.isArray(t)?t.every((e=>e<=i)):t<=i;case"empty":if(e.isArray(t))return!t.length;if(t&&t instanceof File)return!1;if(t&&"object"==typeof t){var a=Object.values(t);return!a.length||a.every((e=>!e))}return!t;case"not_empty":if(e.isArray(t))return!!t.length;if(t&&t instanceof File)return!0;if(t&&"object"==typeof t){var n=Object.values(t);return n.length&&n.some((e=>!!e))}return!!t;case"==":case"in":return e.isArray(i)?e.isArray(t)?i.length?t.filter((t=>e.includes(i,t))).length>0:!t.length:-1!==i.indexOf(t):e.isArray(t)?-1!==t.indexOf(i):t==i;case"!=":case"not_in":return e.isArray(i)?e.isArray(t)?i.length?0==t.filter((t=>e.includes(i,t))).length:!!t.length:-1===i.indexOf(t):e.isArray(t)?-1===t.indexOf(i):t!=i;case"today":return e.isArray(t)||(t=[t]),t.length&&t.every((e=>u(e,s.valueDateFormat).isSame(u(),"day")));case"before":return e.isArray(t)||(t=[t]),t.length&&t.every((e=>{var t=u(e,s.valueDateFormat);return t.isValid()&&t.isBefore(u("today"===i?void 0:i),"day")}));case"after":return e.isArray(t)||(t=[t]),t.length&&t.every((e=>{var t=u(e,s.valueDateFormat);return t.isValid()&&t.isAfter(u("today"===i?void 0:i),"day")}));case"^":return e.startsWith(t,i);case"$":return e.endsWith(t,i);case"*":return e.includes(t,i)}}var D=function t(u){return u instanceof File?function(e){return{lastModified:e.lastModified,name:e.name,size:e.size,type:e.type}}(u):u instanceof Date?u.toString():Array.isArray(u)?u.map(t):"object"==typeof u&&null!==u?e.mapValues(u,t):u};var E=class{constructor(t,u){var s;this.rule=t,this.attributes=t.attributes||{},this.conditions=t.conditions||[],this.dependents=t.dependents||[],this.element$=u.element$,this.form$=(null===(s=u.element$)||void 0===s?void 0:s.form$)||{},this.numeric=u.numeric||!1,this.elementMessages=u.element$.messages,this.invalid=!1,this.pending=!1,this.debouncer=null,this.lastValue=null,this.watchers={},this.dependents.forEach((t=>{r(i((()=>e.get(this.form$.data,t))),(()=>{this.element$.validated&&("nullable"===this.name?this.element$.validate():this.revalidate())}))})),r(i((()=>u.element$.messages)),((t,r)=>{e.isEqual(t,r)||(this.elementMessages=u.element$.messages)}),{deep:!0}),this.init()}get name(){return this.rule.name}get failing(){return this.invalid}get defaultMessage(){return this.form$.translations.vueform.defaultMessage}get message(){var t,u="";return this.elementMessages[this.name]?u=this.elementMessages[this.name]:this.form$.options.messages[this.name]?u=this.form$.options.messages[this.name]:"_class"!==this.name&&void 0!==(null===(t=this.form$.translations.validation)||void 0===t?void 0:t[this.name])?(u=this.form$.translations.validation[this.name],e.isPlainObject(u)&&(u=u[this.messageType])):u=this.defaultMessage,e.each(e.map(u.match(/:\w+/g),(e=>e.replace(":",""))),(e=>{u=u.replace(":".concat(e),this.messageParams[e])})),e.each(e.map(u.match(/{[^}]+/g),(e=>e.replace("{",""))),(e=>{u=u.replace("{".concat(e,"}"),this.messageParams[e])})),u}get messageType(){return this.isNumeric?"numeric":this.isFile?"file":this.isArray?"array":"string"}get messageParams(){return{attribute:this.attributeName}}get attributeName(){return this.element$.genericName}get type(){return this.isNumeric?"numeric":this.isFile?"file":this.isArray?"array":"string"}get isNumeric(){return e.some(this.element$.Validators,{name:"numeric"})||e.some(this.element$.Validators,{name:"integer"})}get isNullable(){var t=!1;return e.each(this.element$.Validators,(e=>{"nullable"===e.name&&(t=!e.conditions.length||e.conditions(this.form$,this,this.element$))})),t}get isFile(){return this.element$.isFileType}get isArray(){return this.element$.isArrayType}get isAsync(){return!1}get debounce(){return this.attributes.debounce?this.attributes.debounce:!!this.element$.debounce&&this.element$.debounce}get debouncing(){return null!==this.debouncer}init(){}validate(e){var t=this;return c((function*(){var u;void 0===e&&(e=null===(u=t.element$)||void 0===u?void 0:u.value);t.form$.validation&&((!t.isNullable||t.filled(e))&&(!t.conditions.length||t.conditions(t.form$,t,t.element$))?t.debounce&&t.filled(e)?yield t._validateWithDebounce(e):(t.debounce&&t.debouncer&&clearTimeout(t.debouncer),yield t._validate(e)):t.invalid=!1)}))()}reset(){this.invalid=!1}watch(e){Array.isArray(e)||(e=[e]),e.forEach((e=>{this.addWatcher(e)}))}addWatcher(t){this.watchers[t]||(this.watchers[t]=r(i((()=>e.get(this.form$.data,t))),(()=>{this.revalidate()})))}revalidate(){this.element$.Validators.forEach((e=>{e.rule.name===this.rule.name&&e.validate()}))}watchOther(){this.form$.$nextTick((()=>{this.other$&&this.form$.$watch((()=>{var e;return null===(e=this.other$)||void 0===e?void 0:e.value}),(()=>{this.element$.validated&&this.element$.validate()}))}))}size(e){return this.isNumeric?e:this.isFile?e?e.size/1e3:0:this.isArray?e.length:null==e||""===e?0:String(e).length}filled(t){return void 0!==t&&(null!==t||t===this.element$.trueValue)&&t!==this.element$.falseValue&&((!this.isNumeric||0!==t)&&((!e.isString(t)||""!==e.trim(t))&&(!(e.isArray(t)&&t.length<1)&&!(t instanceof File&&""===t.name))))}_validate(e){var t=this;return c((function*(){t.isAsync?yield t._validateAsync(e):t._validateSync(e)}))()}_validateAsync(t){var u=this;return c((function*(){u.lastValue=t,u.pending=!0;var r,i,s=yield u.check(t);r=u.lastValue,i=t,e.isEqual(D(r),D(i))&&(u.invalid=!s,u.pending=!1)}))()}_validateSync(e){this.invalid=!this.check(e)}_validateWithDebounce(e){var t=this;return c((function*(){return new Promise(((u,r)=>{t.debouncer&&(u(),clearTimeout(t.debouncer)),t.debouncer=setTimeout(c((function*(){yield t._validate(e),t.debouncer=null,u()})),t.debounce)}))}))()}};class B extends E{get messageParams(){return{attribute:this.attributeName,date:this.date.format(this.format)}}get param(){return this.attributes[0]}get format(){return-1!==["date","dates"].indexOf(this.element$.type)&&this.element$.valueFormat?this.element$.valueFormat:"YYYY-MM-DD"}get otherFormat(){return"element"!=this.dateType?this.format:-1!==["date","dates"].indexOf(this.other$.type)&&this.other$.valueFormat?this.other$.valueFormat:this.format}get otherPath(){return"element"!=this.dateType?null:this.param}get other$(){return"element"!=this.dateType?{}:this.form$.el$(this.param)}get date(){var e="";switch(this.dateType){case"relative":"today"===this.param&&(e=u().startOf("day")),"tomorrow"===this.param&&(e=u().startOf("day").add(1,"days")),"yesterday"===this.param&&(e=u().startOf("day").subtract(1,"days"));break;case"element":e=u(this.other$.value,this.otherFormat);break;case"absolute":e=u(this.param,this.format)}return e}get dateType(){return-1!==["today","tomorrow","yesterday"].indexOf(this.param)?"relative":this.form$.el$(this.param)?"element":"absolute"}init(){this.form$.$nextTick((()=>{"element"==this.dateType&&this.watchOther()}))}check(t){if(e.isArray(t)){var u=!0;return e.each(t,(e=>{this.checkDate(e)||(u=!1)})),u}return this.checkDate(t)}checkDate(e){return u(e,this.format).isAfter(u(this.date,this.otherFormat))}}var b="[ \\t]+",x="[ \\t]*",w="(?:([ap])\\.?m\\.?([\\t ]|$))",k="(2[0-4]|[01]?[0-9])",O="([01][0-9]|2[0-4])",$="(0?[1-9]|1[0-2])",N="([0-5]?[0-9])",_="([0-5][0-9])",j="(60|[0-5]?[0-9])",P="(60|[0-5][0-9])",L="(?:\\.([0-9]+))",R="sunday|monday|tuesday|wednesday|thursday|friday|saturday",z="sun|mon|tue|wed|thu|fri|sat",T=R+"|"+z+"|weekdays?",S="first|second|third|fourth|fifth|sixth|seventh|eighth?|ninth|tenth|eleventh|twelfth",M="next|last|previous|this",I="(?:second|sec|minute|min|hour|day|fortnight|forthnight|month|year)s?|weeks|"+T,W="([0-9]{1,4})",q="([0-9]{4})",V="(1[0-2]|0?[0-9])",Y="(0[0-9]|1[0-2])",K="(?:(3[01]|[0-2]?[0-9])(?:st|nd|rd|th)?)",U="(0[0-9]|[1-2][0-9]|3[01])",H="january|february|march|april|may|june|july|august|september|october|november|december",G="jan|feb|mar|apr|may|jun|jul|aug|sept?|oct|nov|dec",Z="("+H+"|"+G+"|i[vx]|vi{0,3}|xi{0,2}|i{1,3})",X="((?:GMT)?([+-])"+k+":?"+N+"?)",J=Z+"[ .\\t-]*"+K+"[,.stndrh\\t ]*";function Q(e,t){switch(t=t&&t.toLowerCase()){case"a":e+=12===e?-12:0;break;case"p":e+=12!==e?12:0}return e}function ee(e){var t=+e;return e.length<4&&t<100&&(t+=t<70?2e3:1900),t}function te(e){return{jan:0,january:0,i:0,feb:1,february:1,ii:1,mar:2,march:2,iii:2,apr:3,april:3,iv:3,may:4,v:4,jun:5,june:5,vi:5,jul:6,july:6,vii:6,aug:7,august:7,viii:7,sep:8,sept:8,september:8,ix:8,oct:9,october:9,x:9,nov:10,november:10,xi:10,dec:11,december:11,xii:11}[e.toLowerCase()]}function ue(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{mon:1,monday:1,tue:2,tuesday:2,wed:3,wednesday:3,thu:4,thursday:4,fri:5,friday:5,sat:6,saturday:6,sun:0,sunday:0}[e.toLowerCase()]||t}function re(e,t){if(!(e=e&&e.match(/(?:GMT)?([+-])(\d+)(:?)(\d{0,2})/i)))return t;var u="-"===e[1]?-1:1,r=+e[2],i=+e[4];return e[4]||e[3]||(i=Math.floor(r%100),r=Math.floor(r/100)),u*(60*r+i)*60}var ie={acdt:37800,acst:34200,addt:-7200,adt:-10800,aedt:39600,aest:36e3,ahdt:-32400,ahst:-36e3,akdt:-28800,akst:-32400,amt:-13840,apt:-10800,ast:-14400,awdt:32400,awst:28800,awt:-10800,bdst:7200,bdt:-36e3,bmt:-14309,bst:3600,cast:34200,cat:7200,cddt:-14400,cdt:-18e3,cemt:10800,cest:7200,cet:3600,cmt:-15408,cpt:-18e3,cst:-21600,cwt:-18e3,chst:36e3,dmt:-1521,eat:10800,eddt:-10800,edt:-14400,eest:10800,eet:7200,emt:-26248,ept:-14400,est:-18e3,ewt:-14400,ffmt:-14660,fmt:-4056,gdt:39600,gmt:0,gst:36e3,hdt:-34200,hkst:32400,hkt:28800,hmt:-19776,hpt:-34200,hst:-36e3,hwt:-34200,iddt:14400,idt:10800,imt:25025,ist:7200,jdt:36e3,jmt:8440,jst:32400,kdt:36e3,kmt:5736,kst:30600,lst:9394,mddt:-18e3,mdst:16279,mdt:-21600,mest:7200,met:3600,mmt:9017,mpt:-21600,msd:14400,msk:10800,mst:-25200,mwt:-21600,nddt:-5400,ndt:-9052,npt:-9e3,nst:-12600,nwt:-9e3,nzdt:46800,nzmt:41400,nzst:43200,pddt:-21600,pdt:-25200,pkst:21600,pkt:18e3,plmt:25590,pmt:-13236,ppmt:-17340,ppt:-25200,pst:-28800,pwt:-25200,qmt:-18840,rmt:5794,sast:7200,sdmt:-16800,sjmt:-20173,smt:-13884,sst:-39600,tbmt:10751,tmt:12344,uct:0,utc:0,wast:7200,wat:3600,wemt:7200,west:3600,wet:0,wib:25200,wita:28800,wit:32400,wmt:5040,yddt:-25200,ydt:-28800,ypt:-28800,yst:-32400,ywt:-28800,a:3600,b:7200,c:10800,d:14400,e:18e3,f:21600,g:25200,h:28800,i:32400,k:36e3,l:39600,m:43200,n:-3600,o:-7200,p:-10800,q:-14400,r:-18e3,s:-21600,t:-25200,u:-28800,v:-32400,w:-36e3,x:-39600,y:-43200,z:0},se={yesterday:{regex:/^yesterday/i,name:"yesterday",callback:function(){return this.rd-=1,this.resetTime()}},now:{regex:/^now/i,name:"now"},noon:{regex:/^noon/i,name:"noon",callback:function(){return this.resetTime()&&this.time(12,0,0,0)}},midnightOrToday:{regex:/^(midnight|today)/i,name:"midnight | today",callback:function(){return this.resetTime()}},tomorrow:{regex:/^tomorrow/i,name:"tomorrow",callback:function(){return this.rd+=1,this.resetTime()}},timestamp:{regex:/^@(-?\d+)/i,name:"timestamp",callback:function(e,t){return this.rs+=+t,this.y=1970,this.m=0,this.d=1,this.dates=0,this.resetTime()&&this.zone(0)}},firstOrLastDay:{regex:/^(first|last) day of/i,name:"firstdayof | lastdayof",callback:function(e,t){"first"===t.toLowerCase()?this.firstOrLastDayOfMonth=1:this.firstOrLastDayOfMonth=-1}},backOrFrontOf:{regex:RegExp("^(back|front) of "+k+x+w+"?","i"),name:"backof | frontof",callback:function(e,t,u,r){var i=+u,s=15;return"back"===t.toLowerCase()||(i-=1,s=45),i=Q(i,r),this.resetTime()&&this.time(i,s,0,0)}},weekdayOf:{regex:RegExp("^("+S+"|"+M+")"+b+"("+R+"|"+z+")"+b+"of","i"),name:"weekdayof"},mssqltime:{regex:RegExp("^"+$+":"+_+":"+P+"[:.]([0-9]+)"+w,"i"),name:"mssqltime",callback:function(e,t,u,r,i,s){return this.time(Q(+t,s),+u,+r,+i.substr(0,3))}},timeLong12:{regex:RegExp("^"+$+"[:.]"+N+"[:.]"+P+x+w,"i"),name:"timelong12",callback:function(e,t,u,r,i){return this.time(Q(+t,i),+u,+r,0)}},timeShort12:{regex:RegExp("^"+$+"[:.]"+_+x+w,"i"),name:"timeshort12",callback:function(e,t,u,r){return this.time(Q(+t,r),+u,0,0)}},timeTiny12:{regex:RegExp("^"+$+x+w,"i"),name:"timetiny12",callback:function(e,t,u){return this.time(Q(+t,u),0,0,0)}},soap:{regex:RegExp("^"+q+"-"+Y+"-"+U+"T"+O+":"+_+":"+P+L+X+"?","i"),name:"soap",callback:function(e,t,u,r,i,s,a,n,o){return this.ymd(+t,u-1,+r)&&this.time(+i,+s,+a,+n.substr(0,3))&&this.zone(re(o))}},wddx:{regex:RegExp("^"+q+"-"+V+"-"+K+"T"+k+":"+N+":"+j),name:"wddx",callback:function(e,t,u,r,i,s,a){return this.ymd(+t,u-1,+r)&&this.time(+i,+s,+a,0)}},exif:{regex:RegExp("^"+q+":"+Y+":"+U+" "+O+":"+_+":"+P,"i"),name:"exif",callback:function(e,t,u,r,i,s,a){return this.ymd(+t,u-1,+r)&&this.time(+i,+s,+a,0)}},xmlRpc:{regex:RegExp("^"+q+Y+U+"T"+k+":"+_+":"+P),name:"xmlrpc",callback:function(e,t,u,r,i,s,a){return this.ymd(+t,u-1,+r)&&this.time(+i,+s,+a,0)}},xmlRpcNoColon:{regex:RegExp("^"+q+Y+U+"[Tt]"+k+_+P),name:"xmlrpcnocolon",callback:function(e,t,u,r,i,s,a){return this.ymd(+t,u-1,+r)&&this.time(+i,+s,+a,0)}},clf:{regex:RegExp("^"+K+"/("+G+")/"+q+":"+O+":"+_+":"+P+b+X,"i"),name:"clf",callback:function(e,t,u,r,i,s,a,n){return this.ymd(+r,te(u),+t)&&this.time(+i,+s,+a,0)&&this.zone(re(n))}},iso8601long:{regex:RegExp("^t?"+k+"[:.]"+N+"[:.]"+j+L,"i"),name:"iso8601long",callback:function(e,t,u,r,i){return this.time(+t,+u,+r,+i.substr(0,3))}},dateTextual:{regex:RegExp("^"+Z+"[ .\\t-]*"+K+"[,.stndrh\\t ]+"+W,"i"),name:"datetextual",callback:function(e,t,u,r){return this.ymd(ee(r),te(t),+u)}},pointedDate4:{regex:RegExp("^"+K+"[.\\t-]"+V+"[.-]"+q),name:"pointeddate4",callback:function(e,t,u,r){return this.ymd(+r,u-1,+t)}},pointedDate2:{regex:RegExp("^"+K+"[.\\t]"+V+"\\.([0-9]{2})"),name:"pointeddate2",callback:function(e,t,u,r){return this.ymd(ee(r),u-1,+t)}},timeLong24:{regex:RegExp("^t?"+k+"[:.]"+N+"[:.]"+j),name:"timelong24",callback:function(e,t,u,r){return this.time(+t,+u,+r,0)}},dateNoColon:{regex:RegExp("^"+q+Y+U),name:"datenocolon",callback:function(e,t,u,r){return this.ymd(+t,u-1,+r)}},pgydotd:{regex:RegExp("^"+q+"\\.?(00[1-9]|0[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6])"),name:"pgydotd",callback:function(e,t,u){return this.ymd(+t,0,+u)}},timeShort24:{regex:RegExp("^t?"+k+"[:.]"+N,"i"),name:"timeshort24",callback:function(e,t,u){return this.time(+t,+u,0,0)}},iso8601noColon:{regex:RegExp("^t?"+O+_+P,"i"),name:"iso8601nocolon",callback:function(e,t,u,r){return this.time(+t,+u,+r,0)}},iso8601dateSlash:{regex:RegExp("^"+q+"/"+Y+"/"+U+"/"),name:"iso8601dateslash",callback:function(e,t,u,r){return this.ymd(+t,u-1,+r)}},dateSlash:{regex:RegExp("^"+q+"/"+V+"/"+K),name:"dateslash",callback:function(e,t,u,r){return this.ymd(+t,u-1,+r)}},american:{regex:RegExp("^"+V+"/"+K+"/"+W),name:"american",callback:function(e,t,u,r){return this.ymd(ee(r),t-1,+u)}},americanShort:{regex:RegExp("^"+V+"/"+K),name:"americanshort",callback:function(e,t,u){return this.ymd(this.y,t-1,+u)}},gnuDateShortOrIso8601date2:{regex:RegExp("^"+W+"-"+V+"-"+K),name:"gnudateshort | iso8601date2",callback:function(e,t,u,r){return this.ymd(ee(t),u-1,+r)}},iso8601date4:{regex:RegExp("^([+-]?[0-9]{4})-"+Y+"-"+U),name:"iso8601date4",callback:function(e,t,u,r){return this.ymd(+t,u-1,+r)}},gnuNoColon:{regex:RegExp("^t?"+O+_,"i"),name:"gnunocolon",callback:function(e,t,u){switch(this.times){case 0:return this.time(+t,+u,0,this.f);case 1:return this.y=100*t+ +u,this.times++,!0;default:return!1}}},gnuDateShorter:{regex:RegExp("^"+q+"-"+V),name:"gnudateshorter",callback:function(e,t,u){return this.ymd(+t,u-1,1)}},pgTextReverse:{regex:RegExp("^(\\d{3,4}|[4-9]\\d|3[2-9])-("+G+")-"+U,"i"),name:"pgtextreverse",callback:function(e,t,u,r){return this.ymd(ee(t),te(u),+r)}},dateFull:{regex:RegExp("^"+K+"[ \\t.-]*"+Z+"[ \\t.-]*"+W,"i"),name:"datefull",callback:function(e,t,u,r){return this.ymd(ee(r),te(u),+t)}},dateNoDay:{regex:RegExp("^"+Z+"[ .\\t-]*"+q,"i"),name:"datenoday",callback:function(e,t,u){return this.ymd(+u,te(t),1)}},dateNoDayRev:{regex:RegExp("^"+q+"[ .\\t-]*"+Z,"i"),name:"datenodayrev",callback:function(e,t,u){return this.ymd(+t,te(u),1)}},pgTextShort:{regex:RegExp("^("+G+")-"+U+"-"+W,"i"),name:"pgtextshort",callback:function(e,t,u,r){return this.ymd(ee(r),te(t),+u)}},dateNoYear:{regex:RegExp("^"+J,"i"),name:"datenoyear",callback:function(e,t,u){return this.ymd(this.y,te(t),+u)}},dateNoYearRev:{regex:RegExp("^"+K+"[ .\\t-]*"+Z,"i"),name:"datenoyearrev",callback:function(e,t,u){return this.ymd(this.y,te(u),+t)}},isoWeekDay:{regex:RegExp("^"+q+"-?W(0[1-9]|[1-4][0-9]|5[0-3])(?:-?([0-7]))?"),name:"isoweekday | isoweek",callback:function(e,t,u,r){if(r=r?+r:1,!this.ymd(+t,0,1))return!1;var i=new Date(this.y,this.m,this.d).getDay();i=0-(i>4?i-7:i),this.rd+=i+7*(u-1)+r}},relativeText:{regex:RegExp("^("+S+"|"+M+")"+b+"("+I+")","i"),name:"relativetext",callback:function(e,t,u){var r,i={amount:{last:-1,previous:-1,this:0,first:1,next:1,second:2,third:3,fourth:4,fifth:5,sixth:6,seventh:7,eight:8,eighth:8,ninth:9,tenth:10,eleventh:11,twelfth:12}[r=t.toLowerCase()],behavior:{this:1}[r]||0}.amount;switch(u.toLowerCase()){case"sec":case"secs":case"second":case"seconds":this.rs+=i;break;case"min":case"mins":case"minute":case"minutes":this.ri+=i;break;case"hour":case"hours":this.rh+=i;break;case"day":case"days":this.rd+=i;break;case"fortnight":case"fortnights":case"forthnight":case"forthnights":this.rd+=14*i;break;case"week":case"weeks":this.rd+=7*i;break;case"month":case"months":this.rm+=i;break;case"year":case"years":this.ry+=i;break;case"mon":case"monday":case"tue":case"tuesday":case"wed":case"wednesday":case"thu":case"thursday":case"fri":case"friday":case"sat":case"saturday":case"sun":case"sunday":this.resetTime(),this.weekday=ue(u,7),this.weekdayBehavior=1,this.rd+=7*(i>0?i-1:i)}}},relative:{regex:RegExp("^([+-]*)[ \\t]*(\\d+)"+x+"("+I+"|week)","i"),name:"relative",callback:function(e,t,u,r){var i=t.replace(/[^-]/g,"").length,s=+u*Math.pow(-1,i);switch(r.toLowerCase()){case"sec":case"secs":case"second":case"seconds":this.rs+=s;break;case"min":case"mins":case"minute":case"minutes":this.ri+=s;break;case"hour":case"hours":this.rh+=s;break;case"day":case"days":this.rd+=s;break;case"fortnight":case"fortnights":case"forthnight":case"forthnights":this.rd+=14*s;break;case"week":case"weeks":this.rd+=7*s;break;case"month":case"months":this.rm+=s;break;case"year":case"years":this.ry+=s;break;case"mon":case"monday":case"tue":case"tuesday":case"wed":case"wednesday":case"thu":case"thursday":case"fri":case"friday":case"sat":case"saturday":case"sun":case"sunday":this.resetTime(),this.weekday=ue(r,7),this.weekdayBehavior=1,this.rd+=7*(s>0?s-1:s)}}},dayText:{regex:RegExp("^("+T+")","i"),name:"daytext",callback:function(e,t){this.resetTime(),this.weekday=ue(t,0),2!==this.weekdayBehavior&&(this.weekdayBehavior=1)}},relativeTextWeek:{regex:RegExp("^("+M+")"+b+"week","i"),name:"relativetextweek",callback:function(e,t){switch(this.weekdayBehavior=2,t.toLowerCase()){case"this":this.rd+=0;break;case"next":this.rd+=7;break;case"last":case"previous":this.rd-=7}isNaN(this.weekday)&&(this.weekday=1)}},monthFullOrMonthAbbr:{regex:RegExp("^("+H+"|"+G+")","i"),name:"monthfull | monthabbr",callback:function(e,t){return this.ymd(this.y,te(t),this.d)}},tzCorrection:{regex:RegExp("^"+X,"i"),name:"tzcorrection",callback:function(e){return this.zone(re(e))}},tzAbbr:{regex:RegExp("^\\(?([a-zA-Z]{1,6})\\)?"),name:"tzabbr",callback:function(e,t){var u=ie[t.toLowerCase()];return!isNaN(u)&&this.zone(u)}},ago:{regex:/^ago/i,name:"ago",callback:function(){this.ry=-this.ry,this.rm=-this.rm,this.rd=-this.rd,this.rh=-this.rh,this.ri=-this.ri,this.rs=-this.rs,this.rf=-this.rf}},year4:{regex:RegExp("^"+q),name:"year4",callback:function(e,t){return this.y=+t,!0}},whitespace:{regex:/^[ .,\t]+/,name:"whitespace"},dateShortWithTimeLong:{regex:RegExp("^"+J+"t?"+k+"[:.]"+N+"[:.]"+j,"i"),name:"dateshortwithtimelong",callback:function(e,t,u,r,i,s){return this.ymd(this.y,te(t),+u)&&this.time(+r,+i,+s,0)}},dateShortWithTimeLong12:{regex:RegExp("^"+J+$+"[:.]"+N+"[:.]"+P+x+w,"i"),name:"dateshortwithtimelong12",callback:function(e,t,u,r,i,s,a){return this.ymd(this.y,te(t),+u)&&this.time(Q(+r,a),+i,+s,0)}},dateShortWithTimeShort:{regex:RegExp("^"+J+"t?"+k+"[:.]"+N,"i"),name:"dateshortwithtimeshort",callback:function(e,t,u,r,i){return this.ymd(this.y,te(t),+u)&&this.time(+r,+i,0,0)}},dateShortWithTimeShort12:{regex:RegExp("^"+J+$+"[:.]"+_+x+w,"i"),name:"dateshortwithtimeshort12",callback:function(e,t,u,r,i,s){return this.ymd(this.y,te(t),+u)&&this.time(Q(+r,s),+i,0,0)}}},ae={y:NaN,m:NaN,d:NaN,h:NaN,i:NaN,s:NaN,f:NaN,ry:0,rm:0,rd:0,rh:0,ri:0,rs:0,rf:0,weekday:NaN,weekdayBehavior:0,firstOrLastDayOfMonth:0,z:NaN,dates:0,times:0,zones:0,ymd:function(e,t,u){return!(this.dates>0)&&(this.dates++,this.y=e,this.m=t,this.d=u,!0)},time:function(e,t,u,r){return!(this.times>0)&&(this.times++,this.h=e,this.i=t,this.s=u,this.f=r,!0)},resetTime:function(){return this.h=0,this.i=0,this.s=0,this.f=0,this.times=0,!0},zone:function(e){return this.zones<=1&&(this.zones++,this.z=e,!0)},toDate:function(e){switch(this.dates&&!this.times&&(this.h=this.i=this.s=this.f=0),isNaN(this.y)&&(this.y=e.getFullYear()),isNaN(this.m)&&(this.m=e.getMonth()),isNaN(this.d)&&(this.d=e.getDate()),isNaN(this.h)&&(this.h=e.getHours()),isNaN(this.i)&&(this.i=e.getMinutes()),isNaN(this.s)&&(this.s=e.getSeconds()),isNaN(this.f)&&(this.f=e.getMilliseconds()),this.firstOrLastDayOfMonth){case 1:this.d=1;break;case-1:this.d=0,this.m+=1}if(!isNaN(this.weekday)){var t=new Date(e.getTime());t.setFullYear(this.y,this.m,this.d),t.setHours(this.h,this.i,this.s,this.f);var u=t.getDay();if(2===this.weekdayBehavior)0===u&&0!==this.weekday&&(this.weekday=-6),0===this.weekday&&0!==u&&(this.weekday=7),this.d-=u,this.d+=this.weekday;else{var r=this.weekday-u;(this.rd<0&&r<0||this.rd>=0&&r<=-this.weekdayBehavior)&&(r+=7),this.weekday>=0?this.d+=r:this.d-=7-(Math.abs(this.weekday)-u),this.weekday=NaN}}this.y+=this.ry,this.m+=this.rm,this.d+=this.rd,this.h+=this.rh,this.i+=this.ri,this.s+=this.rs,this.f+=this.rf,this.ry=this.rm=this.rd=0,this.rh=this.ri=this.rs=this.rf=0;var i=new Date(e.getTime());switch(i.setFullYear(this.y,this.m,this.d),i.setHours(this.h,this.i,this.s,this.f),this.firstOrLastDayOfMonth){case 1:i.setDate(1);break;case-1:i.setMonth(i.getMonth()+1,0)}return isNaN(this.z)||i.getTimezoneOffset()===this.z||(i.setUTCFullYear(i.getFullYear(),i.getMonth(),i.getDate()),i.setUTCHours(i.getHours(),i.getMinutes(),i.getSeconds()-this.z,i.getMilliseconds())),i}};var ne=function t(u){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.isObject(u)?e.reduce(u,((u,i,s)=>e.merge(u,t(i,[...r,s]))),{}):{[r.join(".")]:u}};class oe extends E{get messageParams(){return{attribute:this.attributeName,value:null!=this.other$.value?this.size(this.other$.value):0}}get otherPath(){return this.attributes[0]}get other$(){return this.form$.el$(C(this.otherPath,this.element$.path))}init(){this.watchOther()}check(e){var t=this.other$.value;return this.compare(e,t)}compare(e,t){var u=this.size(t);return 0==u||this.size(e)>u}}var he=function(e){return/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/.test(e)};var ce=function(e){return/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/.test(e)};var le={accepted:class extends E{check(e){return-1!==["yes","on","1",1,!0,"true"].indexOf(e)}},active_url:class extends E{get isAsync(){return!0}check(e){var t=this;return c((function*(){var u=t.form$.$vueform.config.endpoints.activeUrl,r="function"!=typeof u?u.method:null;return("function"==typeof u?yield u(e,t.element$,t.form$):yield t.form$.$vueform.services.axios.request({url:u.url,method:r,["get"===r.toLowerCase()?"params":"data"]:{url:e}})).data}))()}},after:B,after_or_equal:class extends B{checkDate(e){return u(e,this.format).isSameOrAfter(u(this.date,this.otherFormat))}},alpha:class extends E{check(e){return/^[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/.test(e)}},alpha_dash:class extends E{check(e){return/^[0-9-_\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/.test(e)}},alpha_num:class extends E{check(e){return/^[0-9\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/.test(e)}},array:class extends E{check(t){return e.isArray(t)}},before:class extends B{checkDate(e){return u(e,this.format).isBefore(u(this.date,this.otherFormat))}},before_or_equal:class extends B{checkDate(e){return u(e,this.format).isSameOrBefore(u(this.date,this.otherFormat))}},between:class extends E{get messageParams(){return{attribute:this.attributeName,min:this.min,max:this.max}}get min(){return this.attributes[0]}get max(){return this.attributes[1]}check(e){if(!e)return!0;var t=this.size(e);return t>=this.min&&t<=this.max}},boolean:class extends E{check(e){return-1!==[!0,!1,0,1,"0","1"].indexOf(e)}},confirmed:class extends E{get messageParams(){return{attribute:this.attributeName,other:this.other$.genericName}}get otherPath(){return"".concat(this.element$.path,"_confirmation")}get other$(){return this.form$.el$(C(this.otherPath,this.element$.path))}init(){this.watchOther()}check(e){return!this.filled(this.other$.value)||e==this.other$.value}},date:class extends E{check(e){return!!function(e,t){null==t&&(t=Math.floor(Date.now()/1e3));for(var u=[se.yesterday,se.now,se.noon,se.midnightOrToday,se.tomorrow,se.timestamp,se.firstOrLastDay,se.backOrFrontOf,se.timeTiny12,se.timeShort12,se.timeLong12,se.mssqltime,se.timeShort24,se.timeLong24,se.iso8601long,se.gnuNoColon,se.iso8601noColon,se.americanShort,se.american,se.iso8601date4,se.iso8601dateSlash,se.dateSlash,se.gnuDateShortOrIso8601date2,se.gnuDateShorter,se.dateFull,se.pointedDate4,se.pointedDate2,se.dateNoDay,se.dateNoDayRev,se.dateTextual,se.dateNoYear,se.dateNoYearRev,se.dateNoColon,se.xmlRpc,se.xmlRpcNoColon,se.soap,se.wddx,se.exif,se.pgydotd,se.isoWeekDay,se.pgTextShort,se.pgTextReverse,se.clf,se.year4,se.ago,se.dayText,se.relativeTextWeek,se.relativeText,se.monthFullOrMonthAbbr,se.tzCorrection,se.tzAbbr,se.dateShortWithTimeShort12,se.dateShortWithTimeLong12,se.dateShortWithTimeShort,se.dateShortWithTimeLong,se.relative,se.whitespace],r=Object.create(ae);e.length;){for(var i=null,s=null,a=0,n=u.length;a<n;a++){var o=u[a],h=e.match(o.regex);h&&(!i||h[0].length>i[0].length)&&(i=h,s=o)}if(!s||s.callback&&!1===s.callback.apply(r,i))return!1;e=e.substr(i[0].length),s=null,i=null}return Math.floor(r.toDate(new Date(1e3*t))/1e3)}(e)}},date_equals:class extends E{get messageParams(){return{attribute:this.attributeName,date:this.date}}get date(){return this.attributes[0]}check(e){return e===this.date}},date_format:class extends E{get messageParams(){return{attribute:this.attributeName,format:this.format}}get format(){return this.attributes[0]}check(e){return e&&u(e,this.format).format(this.format)===e}},different:class extends E{get otherPath(){return this.attributes[0]}get other$(){return this.form$.el$(C(this.otherPath,this.element$.path))}get messageParams(){return{attribute:this.attributeName,other:this.other$.genericName}}init(){this.watchOther()}check(e){return!this.filled(e)&&!this.filled(this.other$.value)||e!=this.other$.value}},digits:class extends E{get messageParams(){return{attribute:this.attributeName,digits:this.digits}}get digits(){return this.attributes[0]}check(e){return/^\d+$/.test(e)&&e.toString().length==this.digits}},digits_between:class extends E{get messageParams(){return{attribute:this.attributeName,min:this.min,max:this.max}}get min(){return this.attributes[0]}get max(){return this.attributes[1]}check(e){var t=e.toString().length;return/^\d+$/.test(e)&&t>=this.min&&t<=this.max}},dimensions:class extends E{get isAsync(){return!0}readImage(e){return c((function*(){var t=new FileReader;return new Promise(((u,r)=>{t.onerror=()=>{temporaryFileReader.abort(),r(new DOMException("File cannot be parsed."))},t.onloadend=e=>{u(e.target.result)},t.readAsDataURL(e)}))}))()}loadImage(e){var t=this;return c((function*(){var u=yield t.readImage(e),r=new Image;return new Promise(((e,t)=>{r.onerror=()=>{t(new DOMException("Image could not be loaded."))},r.onload=t=>{e(t.target)},r.src=u}))}))()}hasAttribute(e){return-1!==Object.keys(this.attributes).map((e=>e.toLowerCase())).indexOf(e)}check(e){var t=this;return c((function*(){if(t.isFile&&!e)return!0;if(!(t.isFile&&e instanceof File))return!1;var u=yield t.loadImage(e);if(t.hasAttribute("min_width")&&u.width<t.attributes.min_width)return!1;if(t.hasAttribute("max_width")&&u.width>t.attributes.max_width)return!1;if(t.hasAttribute("min_height")&&u.height<t.attributes.min_height)return!1;if(t.hasAttribute("max_height")&&u.height>t.attributes.max_height)return!1;if(t.hasAttribute("width")&&u.width!=t.attributes.width)return!1;if(t.hasAttribute("height")&&u.height!=t.attributes.height)return!1;if(t.hasAttribute("ratio")){var r=t.attributes.ratio,i=1/(Math.min(u.width,u.height)+1),s=/\//.test(r)?r.split("/")[0]:r,a=/\//.test(r)?r.split("/")[1]:1;if(Math.abs(s/a-u.width/u.height)>i)return!1}return!0}))()}},distinct:class extends E{check(t){var u,r,i=this.element$.path,s=i.replace(/\d+(?!\d+)/,"*"),a=i.match(/^[\w-]+/)[0],n={[a]:this.form$.data[a]},o=(u=s,r="#",(u+"").replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\"+(r||"")+"-]","g"),"\\$&")).replace("\\*","[^.]+"),h={};return e.each(ne(n),((e,t)=>{t!=i&&null!==t.match("^"+o+"$")&&(h[t]=e)})),!(-1!==e.values(h).indexOf(t))}},email:class extends E{check(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},exists:class extends E{get isAsync(){return!0}get requestParams(){var t={};return e.each(this.attributes,((u,r)=>{var i=r;if(isNaN(r)||(i=u),"debounce"!=i){var s=this.form$.el$(i);t[e.keys(t).length]=s&&0!=r?s.value:i}})),t}check(e){var t=this;return c((function*(){var u=t.element$.name,r=t.form$.$vueform.config.endpoints.exists,i="function"!=typeof r?r.method:null;return("function"==typeof r?yield r(e,u,t.requestParams,t.element$,t.form$):yield t.form$.$vueform.services.axios.request({url:r.url,method:i,["get"===i.toLowerCase()?"params":"data"]:{params:t.requestParams,[u]:e,vueformFieldName:u,value:e,name:u}})).data}))()}},file:class extends E{check(e){return(!e||e instanceof File)&&this.isFile}},filled:class extends E{check(e){return this.filled(e)}},gt:oe,gte:class extends oe{compare(e,t){var u=this.size(t);return 0==u||this.size(e)>=u}},image:class extends E{check(e){if(this.isFile&&!e)return!0;if(!(this.isFile&&e instanceof File&&e.name))return!1;var t=e.name.split(".").pop();return-1!==["jpg","jpeg","png","gif","bmp","svg","webp"].indexOf(t)}},in:class extends E{check(t){return-1!==e.values(this.attributes).indexOf(t)}},in_array:class extends E{get messageParams(){return{attribute:this.attributeName,other:this.other$.genericName}}get other$(){return this.form$.el$(C(this.otherPath,this.element$.path))}get otherPath(){var e=this.attributes[0].match(/.*(?=\.\*)/);if(null===e)throw new Error("in_array rule's other attribute should end with .*");return e[0]}init(){this.watchOther()}check(e){var t=this.other$.value;return!!t&&-1!==t.indexOf(e)}},integer:class extends E{check(e){var t=F(String(e).trim());return t===parseInt(t,10)}},ip:class extends E{check(e){return he(e)||ce(e)}},ipv4:class extends E{check(e){return he(e)}},ipv6:class extends E{check(e){return ce(e)}},json:class extends E{check(e){return function(e){try{JSON.parse(e)}catch(e){return!1}return!0}(e)}},lt:class extends oe{compare(e,t){var u=this.size(e),r=this.size(t);return 0==r&&0==u||this.size(e)<r}},lte:class extends oe{compare(e,t){var u=this.size(e),r=this.size(t);return 0==r&&0==u||this.size(e)<=r}},max:class extends E{get messageParams(){return{attribute:this.attributeName,max:this.max}}get max(){return this.attributes[0]}check(e){return!e||this.size(e)<=this.max}},mimes:class extends E{get messageParams(){return{attribute:this.attributeName,values:this.accepted.join(", ")}}get accepted(){return Object.values(this.attributes).map((e=>e.toLowerCase()))}check(e){if(this.isFile&&!e)return!0;if(!(this.isFile&&e instanceof File&&e.name))return!1;var t=e.name.split(".").pop();return-1!==this.accepted.indexOf(t.toLowerCase())}},mimetypes:class extends E{get messageParams(){return{attribute:this.attributeName,values:this.accepted.join(", ")}}get accepted(){return Object.values(this.attributes).map((e=>e.toLowerCase()))}check(e){return!(!this.isFile||e)||!!(this.isFile&&e instanceof File&&e.type)&&-1!==this.accepted.indexOf(e.type.toLowerCase())}},min:class extends E{get messageParams(){return{attribute:this.attributeName,min:this.min}}get min(){return this.attributes[0]}check(e){return!e||this.size(e)>=this.min}},not_in:class extends E{check(t){return-1===e.values(this.attributes).indexOf(t)}},not_regex:class extends E{check(e){return!new RegExp(this.attributes[0].replace(/^\/|\/[^\/]*$/g,"")).test(e)}},nullable:class extends E{check(e){return!0}},numeric:class extends E{check(e){return!isNaN(parseFloat(e))&&isFinite(e)&&!/\s/.test(String(e))&&!Boolean(String(e).match(/^0x[0-9a-f]+$/i))}},regex:class extends E{check(e){return new RegExp(this.attributes[0].replace(/^\/|\/[^\/]*$/g,"")).test(e)}},required:class extends E{check(e){return this.filled(e)}},same:class extends E{get messageParams(){return{attribute:this.attributeName,other:this.other$.genericName}}get otherPath(){return this.attributes[0]}get other$(){return this.form$.el$(C(this.otherPath,this.element$.path))}init(){this.watchOther()}check(e){return!this.filled(e)&&!this.filled(this.other$.value)||e==this.other$.value}},size:class extends E{get messageParams(){return{attribute:this.attributeName,size:this.size_}}get size_(){return this.attributes[0]}check(e){return!e||this.size(e)==this.size_}},string:class extends E{check(t){return e.isString(t)}},timezone:class extends E{check(e){try{return Intl.DateTimeFormat(void 0,{timeZone:e}),!0}catch(e){return!1}}},unique:class extends E{get isAsync(){return!0}get requestParams(){var t={};return e.each(this.attributes,((u,r)=>{var i=r;if(isNaN(r)||(i=u),"debounce"!=i){var s=this.form$.el$(i);t[e.keys(t).length]=s&&0!=r?s.value:i}})),t}check(e){var t=this;return c((function*(){var u=t.element$.name,r=t.form$.$vueform.config.endpoints.unique,i="function"!=typeof r?r.method:null;return("function"==typeof r?yield r(e,u,t.requestParams,t.element$,t.form$):yield t.form$.$vueform.services.axios.request({url:r.url,method:i,["get"===i.toLowerCase()?"params":"data"]:{params:t.requestParams,name:u,value:e}})).data}))()}},url:class extends E{check(e){return new RegExp("^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$","i").test(e)}},uuid:class extends E{check(e){return/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i.test(e)}}},de={factory:class{constructor(e,t){this.form$=t,this.element$=t.el$(e)}get rules(){return Object.assign({},this.form$.$vueform.services.validation.rules,this.form$.$vueform.rules)}makeAll(t){var u=this.parseRules(t);return 0==u.length?[]:e.map(u,(e=>this.make(e)))}make(e){var t="function"==typeof e?e:this.rules[e.name];if(!t)throw new Error("Unknown rule: '".concat(e.name,"'"));return new t(e,{element$:this.element$})}parseRules(t){return e.isArray(t)||(t=t.split("|")),e.flatMap(t,(e=>"function"==typeof e?e:this.isConditional(e)?this.parseConditional(e):this.parse(e)))}parse(e){return y(e)}isConditional(t){return e.isPlainObject(t)}parseConditional(t){var u=e.values(t)[0];Array.isArray(u[0])||(u=[u]);var r=o(o({},y(e.keys(t)[0])),{},{conditions:(t,r,i)=>u.every((u=>e.isArray(u)?e.isArray(u[0])?u.some((s=>e.isArray(s)?this.createConditionFromArray(s)(t,r,i):u(t,r,i))):this.createConditionFromArray(u)(t,r,i):u(t,r,i))),dependents:[]});return u.forEach((t=>{e.isArray(t)&&(e.isArray(t[0])?t.forEach((t=>{e.isArray(t)&&r.dependents.push(C(t[0],this.element$.path))})):r.dependents.push(C(t[0],this.element$.path)))})),r}createConditionFromArray(t){var u=C(t[0],this.element$.path),r=3==t.length||-1!==["empty","not_empty","today"].indexOf(t[1])?t[1]:"==",i=3==t.length?t[2]:-1!==["empty","not_empty","today"].indexOf(t[1])||t[1];return(t,s,a)=>v(e.get(t.requestData,u),r,i,this.element$)}},rules:le};class me{constructor(e){this.baseErrors=e,this.prepends={errors:[],messages:[]},this.appends={errors:[],messages:[]}}get errors(){return e.concat(this.prepends.errors,this.baseErrors,this.appends.errors)}get messages(){return e.concat(this.prepends.messages,this.appends.messages)}get error(){return e.head(this.errors)}get message(){return e.head(this.messages)}prepend(e,t){void 0===t&&(t="error"),this.prepends["error"==t?"errors":"messages"].unshift(e)}append(e,t){void 0===t&&(t="error"),this.appends["error"==t?"errors":"messages"].push(e)}remove(t,u){void 0===u&&(u="any"),-1!==["any","error"].indexOf(u)&&(e.each(this.prepends.errors,((e,u)=>{e==t&&this.rm("prepends","errors",u)})),e.each(this.appends.errors,((e,u)=>{e==t&&this.rm("appends","errors",u)}))),-1!==["any","message"].indexOf(u)&&(e.each(this.prepends.messages,((e,u)=>{e==t&&this.rm("prepends","messages",u)})),e.each(this.appends.messages,((e,u)=>{e==t&&this.rm("appends","messages",u)})))}rm(e,t,u){this[e][t].splice(u,1)}clear(e){void 0===e&&(e="all"),"all"==e?(this.prepends={errors:[],messages:[]},this.appends={errors:[],messages:[]}):(this.prepends[e]=[],this.appends[e]=[])}clearPrepended(e){void 0===e&&(e="all"),"all"==e?this.prepends={errors:[],messages:[]}:this.prepends[e]=[]}clearAppended(e){void 0===e&&(e="all"),"all"==e?this.appends={errors:[],messages:[]}:this.appends[e]=[]}}var Ae={exports:{}};
/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/

(function (module, exports) {
	(function (global, factory) {
		{
			factory(module, exports);
		}
	})(commonjsGlobal, function (module, exports) {

		var map = typeof Map === "function" ? new Map() : function () {
			var keys = [];
			var values = [];

			return {
				has: function has(key) {
					return keys.indexOf(key) > -1;
				},
				get: function get(key) {
					return values[keys.indexOf(key)];
				},
				set: function set(key, value) {
					if (keys.indexOf(key) === -1) {
						keys.push(key);
						values.push(value);
					}
				},
				delete: function _delete(key) {
					var index = keys.indexOf(key);
					if (index > -1) {
						keys.splice(index, 1);
						values.splice(index, 1);
					}
				}
			};
		}();

		var createEvent = function createEvent(name) {
			return new Event(name, { bubbles: true });
		};
		try {
			new Event('test');
		} catch (e) {
			// IE does not support `new Event()`
			createEvent = function createEvent(name) {
				var evt = document.createEvent('Event');
				evt.initEvent(name, true, false);
				return evt;
			};
		}

		function assign(ta) {
			if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

			var heightOffset = null;
			var clientWidth = null;
			var cachedHeight = null;

			function init() {
				var style = window.getComputedStyle(ta, null);

				if (style.resize === 'vertical') {
					ta.style.resize = 'none';
				} else if (style.resize === 'both') {
					ta.style.resize = 'horizontal';
				}

				if (style.boxSizing === 'content-box') {
					heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
				} else {
					heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
				}
				// Fix when a textarea is not on document body and heightOffset is Not a Number
				if (isNaN(heightOffset)) {
					heightOffset = 0;
				}

				update();
			}

			function changeOverflow(value) {
				{
					// Chrome/Safari-specific fix:
					// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
					// made available by removing the scrollbar. The following forces the necessary text reflow.
					var width = ta.style.width;
					ta.style.width = '0px';
					// Force reflow:
					/* jshint ignore:start */
					ta.offsetWidth;
					/* jshint ignore:end */
					ta.style.width = width;
				}

				ta.style.overflowY = value;
			}

			function getParentOverflows(el) {
				var arr = [];

				while (el && el.parentNode && el.parentNode instanceof Element) {
					if (el.parentNode.scrollTop) {
						arr.push({
							node: el.parentNode,
							scrollTop: el.parentNode.scrollTop
						});
					}
					el = el.parentNode;
				}

				return arr;
			}

			function resize() {
				if (ta.scrollHeight === 0) {
					// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
					return;
				}

				var overflows = getParentOverflows(ta);
				var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

				ta.style.height = '';
				ta.style.height = ta.scrollHeight + heightOffset + 'px';

				// used to check if an update is actually necessary on window.resize
				clientWidth = ta.clientWidth;

				// prevents scroll-position jumping
				overflows.forEach(function (el) {
					el.node.scrollTop = el.scrollTop;
				});

				if (docTop) {
					document.documentElement.scrollTop = docTop;
				}
			}

			function update() {
				resize();

				var styleHeight = Math.round(parseFloat(ta.style.height));
				var computed = window.getComputedStyle(ta, null);

				// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
				var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

				// The actual height not matching the style height (set via the resize method) indicates that 
				// the max-height has been exceeded, in which case the overflow should be allowed.
				if (actualHeight < styleHeight) {
					if (computed.overflowY === 'hidden') {
						changeOverflow('scroll');
						resize();
						actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
					}
				} else {
					// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
					if (computed.overflowY !== 'hidden') {
						changeOverflow('hidden');
						resize();
						actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
					}
				}

				if (cachedHeight !== actualHeight) {
					cachedHeight = actualHeight;
					var evt = createEvent('autosize:resized');
					try {
						ta.dispatchEvent(evt);
					} catch (err) {
						// Firefox will throw an error on dispatchEvent for a detached element
						// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
					}
				}
			}

			var pageResize = function pageResize() {
				if (ta.clientWidth !== clientWidth) {
					update();
				}
			};

			var destroy = function (style) {
				window.removeEventListener('resize', pageResize, false);
				ta.removeEventListener('input', update, false);
				ta.removeEventListener('keyup', update, false);
				ta.removeEventListener('autosize:destroy', destroy, false);
				ta.removeEventListener('autosize:update', update, false);

				Object.keys(style).forEach(function (key) {
					ta.style[key] = style[key];
				});

				map.delete(ta);
			}.bind(ta, {
				height: ta.style.height,
				resize: ta.style.resize,
				overflowY: ta.style.overflowY,
				overflowX: ta.style.overflowX,
				wordWrap: ta.style.wordWrap
			});

			ta.addEventListener('autosize:destroy', destroy, false);

			// IE9 does not fire onpropertychange or oninput for deletions,
			// so binding to onkeyup to catch most of those events.
			// There is no way that I know of to detect something like 'cut' in IE9.
			if ('onpropertychange' in ta && 'oninput' in ta) {
				ta.addEventListener('keyup', update, false);
			}

			window.addEventListener('resize', pageResize, false);
			ta.addEventListener('input', update, false);
			ta.addEventListener('autosize:update', update, false);
			ta.style.overflowX = 'hidden';
			ta.style.wordWrap = 'break-word';

			map.set(ta, {
				destroy: destroy,
				update: update
			});

			init();
		}

		function destroy(ta) {
			var methods = map.get(ta);
			if (methods) {
				methods.destroy();
			}
		}

		function update(ta) {
			var methods = map.get(ta);
			if (methods) {
				methods.update();
			}
		}

		var autosize = null;

		// Do nothing in Node.js environment and IE8 (or lower)
		if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
			autosize = function autosize(el) {
				return el;
			};
			autosize.destroy = function (el) {
				return el;
			};
			autosize.update = function (el) {
				return el;
			};
		} else {
			autosize = function autosize(el, options) {
				if (el) {
					Array.prototype.forEach.call(el.length ? el : [el], function (x) {
						return assign(x);
					});
				}
				return el;
			};
			autosize.destroy = function (el) {
				if (el) {
					Array.prototype.forEach.call(el.length ? el : [el], destroy);
				}
				return el;
			};
			autosize.update = function (el) {
				if (el) {
					Array.prototype.forEach.call(el.length ? el : [el], update);
				}
				return el;
			};
		}

		exports.default = autosize;
		module.exports = exports['default'];
	});
} (autosize$1, autosize$1.exports));

var autosize = autosize$1.exports;

class google {
  constructor() {
    this.autocomplete = null;
    this.autocompleteListener = null;
    this.options = {};
  }
  init(container, onChange, options) {
    if (window.google === undefined || window.google.maps === undefined || window.google.maps.places === undefined || window.google.maps.places.Autocomplete === undefined) ;
    this.options = options;
    this.autocomplete = new window.google.maps.places.Autocomplete(container, options);
    this.autocompleteListener = this.autocomplete.addListener('place_changed', () => {
      var place = this.autocomplete.getPlace();
      onChange(this.formatValue(place), place);
    });
  }
  destroy() {
    window.google.maps.event.removeListener(this.autocompleteListener);
    window.google.maps.event.clearInstanceListeners(this.autocomplete);
    var pac = document.querySelector('.pac-container');
    if (pac) {
      pac.remove();
    }
  }
  formatValue(value) {
    if (!_.isPlainObject(value)) {
      return value;
    }
    var addressComponents = value.address_components;
    var street = this.addressComponent(addressComponents, 'street');
    var streetNumber = this.addressComponent(addressComponents, 'street_number');
    var address = null;
    if (street !== null) {
      address = street;
    }
    if (streetNumber !== null) {
      address += (street !== null ? ' ' : '') + streetNumber;
    }
    return {
      country: this.addressComponent(addressComponents, 'country'),
      country_code: this.addressComponent(addressComponents, 'country_code'),
      state: this.addressComponent(addressComponents, 'state'),
      state_code: this.addressComponent(addressComponents, 'state_code'),
      city: this.addressComponent(addressComponents, 'city'),
      zip: this.addressComponent(addressComponents, 'zip'),
      address: address,
      formatted_address: value.formatted_address || null,
      lat: value.geometry.location.lat() || null,
      lng: value.geometry.location.lng() || null
    };
  }
  addressComponent(addressComponents, type) {
    var typeMap = {
      country: {
        field: 'country',
        type: 'long_name'
      },
      country_code: {
        field: 'country',
        type: 'short_name'
      },
      state: {
        field: 'administrative_area_level_1',
        type: 'long_name'
      },
      state_code: {
        field: 'administrative_area_level_1',
        type: 'short_name'
      },
      city: {
        field: 'locality',
        type: 'long_name'
      },
      zip: {
        field: 'postal_code',
        type: 'long_name'
      },
      street: {
        field: 'route',
        type: 'long_name'
      },
      street_number: {
        field: 'street_number',
        type: 'long_name'
      }
    };
    var addressComponent = null;
    _.each(addressComponents, component => {
      if (component.types.indexOf(typeMap[type].field) !== -1) {
        if (['state', 'state_code'].indexOf(type) !== -1 && this.addressComponent(addressComponents, 'country_code') != 'US') {
          return;
        }
        addressComponent = component[typeMap[type].type] || null;
      }
    });
    return addressComponent;
  }
}

class algolia {
  constructor() {
    this.places = null;
    this.options = {};
  }
  init(container, onChange, options) {
    if (window.places === undefined) {
      throw new Error('Algolia Places API missing. Please include script in your project from https://community.algolia.com/places/documentation.html#cdn-script or install via npm and set to `window.places`.');
    }
    this.options = options;
    this.places = window.places(Object.assign({}, {
      container
    }, options));
    this.places.on('change', e => {
      onChange(this.formatValue(e.suggestion), e.suggestion);
    });
  }
  destroy() {
    this.places.destroy();
  }
  formatValue(value) {
    if (!_.isPlainObject(value)) {
      return value;
    }
    return {
      country: value.country,
      country_code: value.countryCode ? value.countryCode.toUpperCase() : null,
      state: value.countryCode == 'us' ? value.administrative : null,
      state_code: value.countryCode == 'us' ? this.stateCode(value.administrative.toLowerCase()) : null,
      city: value.city,
      zip: value.postcode,
      address: value.name,
      formatted_address: value.value,
      lat: value.latlng.lat,
      lng: value.latlng.lng
    };
  }
  stateCode(name) {
    var states = {
      AL: 'alabama',
      AK: 'alaska',
      AZ: 'arizona',
      AR: 'arkansas',
      CA: 'california',
      CO: 'colorado',
      CT: 'connecticut',
      DE: 'delaware',
      DC: 'district of columbia',
      FL: 'florida',
      GA: 'georgia',
      HI: 'hawaii',
      ID: 'idaho',
      IL: 'illinois',
      IN: 'indiana',
      IA: 'iowa',
      KS: 'kansas',
      KY: 'kentucky',
      LA: 'louisiana',
      ME: 'maine',
      MD: 'maryland',
      MA: 'massachusetts',
      MI: 'michigan',
      MN: 'minnesota',
      MS: 'mississippi',
      MO: 'missouri',
      MT: 'montana',
      NE: 'nebraska',
      NV: 'nevada',
      NH: 'new hampshire',
      NJ: 'new Jersey',
      NM: 'new Mexico',
      NY: 'new york',
      NC: 'north carolina',
      ND: 'north dakota',
      OH: 'ohio',
      OK: 'oklahoma',
      OR: 'oregon',
      PA: 'pennsylvania',
      RI: 'rhode Island',
      SC: 'south carolina',
      SD: 'south dakota',
      TN: 'tennessee',
      TX: 'texas',
      UT: 'utah',
      VT: 'vermont',
      VA: 'virginia',
      WA: 'washington',
      WV: 'west virginia',
      WI: 'wisconsin',
      WY: 'wyoming'
    };
    if (_.values(states).indexOf(name) === -1) {
      return null;
    }
    return _.keys(states)[_.values(states).indexOf(name)];
  }
}

var location = {
  google,
  algolia
};

// condition - condition information [otherPath, operator, expectedValue]
// elementPath - current
var check = (condition, elementPath, form$, el$) => {
  var checkFunction = () => {
    return condition(form$, el$);
  };
  var checkArray = condition => {
    var {
      conditionPath,
      operator,
      expected
    } = details(condition);

    // other
    var element$ = form$.el$(conditionPath);
    var hasCircularCondition = false;

    // other && currentPath
    if (element$ && elementPath) {
      _.each(element$.conditions, condition => {
        if (!Array.isArray(condition)) {
          return;
        }
        if (condition[0] == elementPath) {
          hasCircularCondition = true;
        }
      });
    }
    if (!element$ || !hasCircularCondition && !element$.available) {
      return false;
    }
    return compareValues(element$.value, expected, operator);
  };
  var details = condition => {
    return {
      conditionPath: elementPath ? replaceWildcards(condition[0], elementPath) : condition[0],
      operator: condition.length == 3 || ['empty', 'not_empty', 'today'].indexOf(condition[1]) !== -1 ? condition[1] : '==',
      expected: condition.length == 3 ? condition[2] : ['empty', 'not_empty', 'today'].indexOf(condition[1]) === -1 ? condition[1] : true
    };
  };
  var compareValues = (actual, expected, operator) => {
    return compare(actual, operator, expected, el$);
  };
  if (typeof condition == 'function') {
    return checkFunction();
  } else if (_.isArray(condition) && _.isArray(condition[0])) {
    return condition.reduce((prev, curr) => {
      return prev ? prev : checkArray(curr);
    }, false);
  } else if (_.isArray(condition)) {
    return checkArray(condition);
  }
  throw new Error('Condition must be a function or an array');
};
var condition = {
  check
};

class i18n {
  constructor(options) {
    this.locales = options.locales;
    this.locale = options.locale;
    this.fallbackLocale = options.fallbackLocale;
  }
  $t(expr) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var tag = _.get(this.locales[this.locale], expr) || expr;
    if (tag === expr) {
      tag = _.get(this.locales[this.fallbackLocale], expr) || expr;
    }
    _.each(data, (value, key) => {
      tag = tag.replace(':' + key, value);
    });
    _.each(data, (value, key) => {
      tag = tag.replace('{' + key + '}', value);
    });
    return tag;
  }
}

class Columns {
  constructor(options, hasLabel, getClass, presets) {
    _defineProperty(this, "defaultBreakpoint", 'default');
    this.presets = presets;
    this.configPresetColumns = this.serialize(this.columnsFromPresets(options.configPresetColumns) || {});
    this.configColumns = this.serialize(options.configColumns || {});
    this.formPresetColumns = this.serialize(this.columnsFromPresets(options.formPresetColumns) || {});
    this.formColumns = this.serialize(options.formColumns || {});
    this.presetColumns = this.serialize(this.columnsFromPresets(options.elementPresetColumns) || {});
    this.columns = this.serialize(options.elementColumns || {});
    this.hasLabel = hasLabel;
    this.getClass = getClass;
    this.cols = this.getCols();
  }
  get classes() {
    return {
      container: this.getClasses('container'),
      label: this.getClasses('label'),
      innerContainer: this.getClasses('innerContainer'),
      wrapper: this.getClasses('wrapper')
    };
  }
  serialize(columns) {
    // columns: 8
    if (['number', 'string'].indexOf(typeof columns) !== -1) {
      return {
        [this.defaultBreakpoint]: {
          container: columns
        }
      };
    }

    // columns: { container: 8, wrapper: { default: 8, lg: 8 } }
    if (typeof columns === 'object' && ['container', 'label', 'wrapper'].indexOf(Object.keys(columns)[0]) !== -1) {
      var serialized = {};
      _.each(columns, (size, type) => {
        // columns: { container: 8 }
        if (['number', 'string'].indexOf(typeof size) !== -1) {
          if (serialized[this.defaultBreakpoint] === undefined) {
            serialized[this.defaultBreakpoint] = {};
          }
          serialized[this.defaultBreakpoint][type] = size;
        }

        // columns: { container: { default: 8, lg: 8 } }
        else {
          _.each(size, (s, breakpoint) => {
            if (serialized[breakpoint] === undefined) {
              serialized[breakpoint] = {};
            }
            serialized[breakpoint][type] = s;
          });
        }
      });
      return serialized;
    }

    // columns: { lg: 8, md: { container: 8 } }
    else {
      var _serialized = {};
      _.each(columns, (size, breakpoint) => {
        // columns: { lg: 8 }
        if (['number', 'string'].indexOf(typeof size) !== -1) {
          if (_serialized[breakpoint] === undefined) {
            _serialized[breakpoint] = {};
          }
          _serialized[breakpoint].container = size;
        }

        // columns: { md: { container: 8 } }
        else {
          _serialized[breakpoint] = size;
        }
      });
      return _serialized;
    }
  }
  columnsFromPresets(presets) {
    var columns;
    _.each(presets, presetName => {
      var preset = this.presets[presetName];
      if (!preset || !preset.columns) {
        return;
      }
      columns = preset.columns;
    });
    return columns;
  }
  getNullClass() {
    return [this.getClass(this.defaultBreakpoint, 0)];
  }
  getClasses(type) {
    var classes = [];
    Object.keys(this.cols).forEach(breakpoint => {
      var size;
      if (type === 'innerContainer') {
        size = this.cols[breakpoint].label;
        size = size >= 12 || !this.hasLabel ? 12 : 12 - size;
      } else {
        size = this.cols[breakpoint][type];
        if (type === 'label' && !this.hasLabel) {
          size = 0;
        }

        // if (type === 'wrapper' && !this.hasLabel) {
        //   size += this.cols[breakpoint].label || 0

        //   if (size > 12) {
        //     size = 12
        //   }
        // }
      }

      if (size !== undefined && !isNaN(size)) {
        classes.push(this.getClass(breakpoint, size));
      }
    });
    return classes;
  }
  getCols() {
    return _.merge({}, {
      [this.defaultBreakpoint]: {
        container: 12,
        label: 12,
        wrapper: 12
      }
    }, this.configPresetColumns || {}, this.configColumns || {}, this.formPresetColumns || {}, this.formColumns || {}, this.presetColumns || {}, this.columns || {});
  }
}

function verifyApiKey(license) {
  var score = 0;
  var check_digit = license[0];
  var check_digit_count = 0;
  var chunks = license.split('-');
  chunks.forEach(chunk => {
    if (chunk.length != 4) {
      return false;
    }
    chunk.split('').forEach(char => {
      if (char == check_digit) {
        check_digit_count++;
      }
      score += char.codePointAt(0);
    });
  });
  if (score == 1492 && check_digit_count == 3) {
    return true;
  }
  return false;
}

function installer (config, components) {
  var Vueform = class {
    constructor() {
      this.options = {
        config: _.omit(config, ['theme', 'templates', 'locales', 'rules', 'plugins']),
        templates: config.templates || {},
        theme: config.theme || {},
        rules: config.rules || {},
        locales: config.locales || {},
        plugins: config.plugins || [],
        i18n: null,
        vueVersion: null,
        services: {
          validation,
          axios,
          messageBag,
          autosize,
          location,
          condition,
          columns: Columns
        },
        version: packageJson.version
      };
    }
    config(config) {
      // merge
      _.each(['theme', 'templates', 'locales', 'rules'], attr => {
        if (config[attr] !== undefined) {
          this.options[attr] = Object.assign({}, this.options[attr], config[attr]);
        }
      });

      // replace
      _.each(['plugins'], attr => {
        if (config[attr] !== undefined) {
          this.options[attr] = config[attr];
        }
      });

      // merge (config)
      _.each(['languages', 'services', 'addClasses', 'removeClasses', 'replaceClasses', 'overrideClasses', 'presets', 'views'], attr => {
        if (config[attr] !== undefined) {
          this.options.config[attr] = Object.assign({}, this.options.config[attr], config[attr]);
        }
      });

      // deep merge
      _.each(['endpoints'], attr => {
        if (config[attr] !== undefined) {
          this.options.config[attr] = _.merge({}, this.options.config[attr], config[attr]);
        }
      });

      // replace
      _.each(['columns', 'forceLabels', 'displayErrors', 'floatPlaceholders', 'displayErrors', 'displayMessages', 'language', 'locale', 'fallbackLocale', 'orderFrom', 'validateOn', 'formData', 'beforeSend', 'locationProvider', 'classHelpers', 'env', 'usePresets', 'plugins', 'size'], attr => {
        if (config[attr] !== undefined) {
          this.options.config[attr] = config[attr];
        }
      });
      if (config.elements) {
        config.elements.forEach(element => {
          components[element.name] = _.omit(element, ['render', 'staticRenderFns', 'components']);
        });
        config.elements.forEach(element => {
          if (this.options.templates[element.name] === undefined) {
            this.options.templates[element.name] = _.pick(element, ['render', 'staticRenderFns', 'components']);
          }
        });
      }
      if (config.axios !== undefined) {
        if (typeof config.axios === 'function') {
          this.options.services.axios = config.axios;
        } else {
          this.options.config.axios = config.axios;
        }
      }
    }
    registerComponents(appOrVue) {
      _.each(components, (comp, name) => {
        var component = _objectSpread2({}, comp);
        component.setup = (props, context) => {
          context = Object.assign({}, context, {
            name: ref(name),
            emits: component.emits
          });
          var setup = comp.setup(props, context);
          this.options.plugins.forEach(p => {
            if (typeof p === 'function') {
              p = p();
            }
            p = Array.isArray(p) ? p : [p];
            p.forEach(plugin => {
              var pluginOptions = typeof plugin === 'function' ? plugin() : plugin;
              if (pluginOptions.setup && shouldApplyPlugin(name, pluginOptions)) {
                setup = pluginOptions.setup(props, context, setup);
              }
            });
          });
          return setup;
        };
        if (component.components === undefined) {
          var _this$options$templat, _this$options$theme$t;
          component.components = ((_this$options$templat = this.options.templates[name]) === null || _this$options$templat === void 0 ? void 0 : _this$options$templat.components) || ((_this$options$theme$t = this.options.theme.templates[name]) === null || _this$options$theme$t === void 0 ? void 0 : _this$options$theme$t.components) || {};
        }
        component.render = function () {
          return this.template.render.apply(this, arguments);
        };
        component.staticRenderFns = function () {
          return this.template.staticRenderFns;
        };
        this.options.plugins.forEach(p => {
          if (typeof p === 'function') {
            p = p();
          }
          p = Array.isArray(p) ? p : [p];
          p.forEach(plugin => {
            var pluginOptions = typeof plugin === 'function' ? plugin() : plugin;
            _.each(_.without(Object.keys(pluginOptions), 'setup', 'apply', 'config', 'install'), key => {
              if (pluginOptions[key] && shouldApplyPlugin(name, pluginOptions)) {
                if (Array.isArray(pluginOptions[key])) {
                  var base = component[key] || [];
                  component[key] = base.concat(pluginOptions[key]);
                } else if (_.isPlainObject(pluginOptions[key])) {
                  component[key] = Object.assign({}, component[key] || {}, pluginOptions[key]);
                } else {
                  component[key] = pluginOptions[key];
                }
              }
            });
          });
        });
        appOrVue.component(name, component);
      });
    }
    initAxios() {
      var $axios = this.options.services.axios;
      var axiosConfig = this.options.config.axios;
      var axiosConfigFlat = flat(this.options.config.axios);
      Object.keys(axiosConfigFlat).forEach(key => {
        var value = axiosConfigFlat[key];
        if (['onUnauthenticated'].indexOf(key) === -1 && key.indexOf('csrfRequest.') === -1) {
          _.set($axios.defaults, key, value);
        }
      });
      $axios.interceptors.response.use(r => r, error => {
        if (!error.response) {
          return Promise.reject(error);
        }
        return new Promise((resolve, reject) => {
          var response = error.response;
          var originalRequest = response.config;
          if ([401, 419].indexOf(error.response.status) !== -1) {
            if (axiosConfig.csrfRequest && !originalRequest.CSRF) {
              $axios.request(_objectSpread2(_objectSpread2({}, axiosConfig.csrfRequest), {}, {
                CSRF: true
              })).then(() => {
                resolve($axios.request(_objectSpread2(_objectSpread2({}, originalRequest), {}, {
                  CSRF: true
                })));
              }).catch(error => {
                reject(error);
              });
            } else if (axiosConfig.onUnauthenticated) {
              axiosConfig.onUnauthenticated(originalRequest);
            } else {
              reject(error);
            }
          } else {
            reject(error);
          }
        });
      });
    }
    initI18n() {
      this.options.i18n = new i18n({
        locales: this.options.locales,
        locale: this.options.config.locale,
        fallbackLocale: this.options.config.fallbackLocale
      });
    }
    createApiKeyError() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '=== Vueform API Key Missing ===';
      var error = "";
      error += "\n";
      error += " .....................  ......\n";
      error += "  ..................   ......\n";
      error += "   ................  .......\n";
      error += "     ......         ......\n";
      error += "      ..........  .......\n";
      error += "       ........  ......\n";
      error += "                ......\n";
      error += "          ...........\n";
      error += "            .......\n";
      error += "             .....\n";
      error += "               .\n";
      error += "\n";
      error += "===============================\n";
      error += "".concat(message, "\n");
      error += "===============================\n";
      error += "\n";
      error += "Create a free API Key at:\n";
      error += "https://vueform.com/docs/installation#api-key\n";
      error += "\n";
      return error;
    }
    install(appOrVue) {
      var _this$options$theme;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var version = parseInt(appOrVue.version.split('.')[0]);
      this.options.vueVersion = version;
      var PRO_AK = 'VUEFORM_API_KEY';
      var apikey = PRO_AK.length !== 7 && PRO_AK.charAt(0) !== 'V' && PRO_AK.charAt(7) !== '_' ? PRO_AK : options.apiKey;
      if (!apikey) {
        console.error(this.createApiKeyError('=== Vueform API Key Missing ==='));
        return;
      }
      if (!verifyApiKey(apikey.toUpperCase())) {
        console.error(this.createApiKeyError('=== Invalid Vueform API Key ==='));
        return;
      }
      if (navigator && navigator.onLine && window && window.location && ['http:', 'https:'].indexOf(window.location.protocol) !== -1 && typeof fetch !== 'undefined') {
        fetch("https://api.vueform.com/check?key=".concat(apikey)).then(response => response.json()).then(data => {
          // if (data?.valid !== true) {
          //   console.error(this.createApiKeyError('======= Invalid API Key ======='))
          // }
        }).catch(() => {});
      }
      var plugins = options.plugins || [];
      plugins.forEach(p => {
        if (typeof p === 'function') {
          p = p();
        }
        p = Array.isArray(p) ? p : [p];
        p.forEach(plugin => {
          var pluginOptions = typeof plugin === 'function' ? plugin() : plugin;
          if (pluginOptions.config) {
            pluginOptions.config(options);
          }
        });
      });
      if (options) {
        this.config(options);
      }
      this.options.plugins.forEach(p => {
        if (typeof p === 'function') {
          p = p();
        }
        p = Array.isArray(p) ? p : [p];
        p.forEach(plugin => {
          var pluginOptions = typeof plugin === 'function' ? plugin() : plugin;
          if (pluginOptions.install) {
            pluginOptions.install(appOrVue, this.options);
          }
        });
      });
      if (typeof config.axios !== 'function') {
        this.initAxios();
      }
      this.initI18n();
      this.registerComponents(appOrVue);
      var themeTemplates = ((_this$options$theme = this.options.theme) === null || _this$options$theme === void 0 ? void 0 : _this$options$theme.templates) || {};
      Object.keys(themeTemplates).forEach(componentName => {
        themeTemplates[componentName] = markRaw(themeTemplates[componentName]);
      });
      var $vueform = ref(_objectSpread2(_objectSpread2({}, this.options), {}, {
        theme: _objectSpread2(_objectSpread2({}, this.options.theme), {}, {
          templates: themeTemplates
        })
      }));
      switch (version) {
        case 2:
          appOrVue.config.ignoredElements = ['trix-editor'];
          appOrVue.config.unwrapInjectedRef = true;
          if (!appOrVue.prototype.$vueform) {
            appOrVue.prototype.$vueform = new Proxy($vueform, {
              get: (target, prop, receiver) => {
                return target.value[prop];
              }
            });
          }
          if (!appOrVue.__VUEFORM__) {
            appOrVue.__VUEFORM__ = true;
            appOrVue.mixin({
              methods: {
                __: (expr, data) => {
                  if (!data) {
                    console.warn('DEPRECATED: __ method should be no longer used for translating labels, only if they contain variables. For general translation use form$.translation.TAG instead.');
                  }
                  return this.options.i18n.$t(expr, data);
                }
              }
            });
          }
          break;
        case 3:
          // appOrVue.config.isCustomElement = (tag) => ['trix-editor'].indexOf(tag) !== -1
          appOrVue.config.compilerOptions.isCustomElement = tag => ['trix-editor'].indexOf(tag) !== -1;
          appOrVue.config.unwrapInjectedRef = true;
          appOrVue.config.globalProperties.$vueform = new Proxy($vueform, {
            get: (target, prop, receiver) => {
              return target.value[prop];
            }
          });
          appOrVue.provide('$vueform', $vueform);
          appOrVue.mixin({
            methods: {
              $set(obj, key, value) {
                obj[key] = value;
              },
              $delete(obj, key) {
                delete obj[key];
              },
              __: (expr, data) => {
                if (!data) {
                  console.warn('DEPRECATED: __ method should be no longer used for translating labels, only if they contain variables. For general translation use form$.translation.TAG instead.');
                }
                return this.options.i18n.$t(expr, data);
              }
            }
          });
          break;
      }
    }
  };
  return new Vueform();
}

export { installer as default };
