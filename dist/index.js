import{ref as e,toRefs as t,computed as a,watch as n,getCurrentInstance as l,provide as r,onBeforeMount as i,onMounted as o,onBeforeUpdate as u,onUpdated as s,onBeforeUnmount as d,onUnmounted as c,inject as v,nextTick as p,markRaw as f,reactive as m}from"vue";import g from"lodash";import h from"moment";function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){D(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function w(e,t,a,n,l,r,i){try{var o=e[r](i),u=o.value}catch(e){return void a(e)}o.done?t(u):Promise.resolve(u).then(n,l)}function S(e){return function(){var t=this,a=arguments;return new Promise((function(n,l){var r=e.apply(t,a);function i(e){w(r,n,l,i,o,"next",e)}function o(e){w(r,n,l,i,o,"throw",e)}i(void 0)}))}}function D(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O={env:"development",plugins:[],elements:[],theme:{},templates:{},views:{},size:"md",addClasses:{},removeClasses:{},replaceClasses:{},overrideClasses:{},presets:{},usePresets:[],classHelpers:!1,columns:{},forceLabels:!1,floatPlaceholders:!0,displayErrors:!0,displayMessages:!0,breakpoints:["sm","md","lg","xl","2xl"],languages:{en:"English"},language:"en",locales:{},locale:null,fallbackLocale:"en",orderFrom:1,rules:{},validateOn:"change|step",endpoints:{submit:{url:"/vueform/process",method:"post"},uploadTempFile:{url:"/vueform/file/upload-temp",method:"post"},removeTempFile:{url:"/vueform/file/remove-temp",method:"post"},removeFile:{url:"/vueform/file/remove",method:"post"},attachment:{url:"/vueform/editor/attachment",method:"post"},activeUrl:{url:"/vueform/validators/active_url",method:"post"},unique:{url:"/vueform/validators/unique",method:"post"},exists:{url:"/vueform/validators/exists",method:"post"}},formData:e=>e.convertFormData(b(b({},e.requestData),e.formKey?{formKey:e.formKey}:{})),beforeSend:null,axios:{},locationProvider:"google",services:{algolia:{app_id:"",api_key:""}}},C=["presets","usePresets","addClasses","prependClasses","removeClasses","replaceClasses","overrideClasses"],q=["addClass","removeClass","replaceClass","overrideClass"];class E{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=e,this.shouldMergeTemplateClasses?(this.componentClasses=this.templateClasses,this.merge({overrideClasses:{[this.component]:this.themeClasses}})):this.componentClasses=this.templateClasses,this.merge(this.config),g.each(e.merge,(e=>{this.merge(e)})),this.merge(this.locals||this.component$.value,!0),this.config.classHelpers&&"production"!==this.config.env&&this.merge({prependClasses:{[this.component]:this.getClassHelpers(this.componentClasses,[this.component])}})}get classes(){return new Proxy(this.componentClasses,{get:(e,t)=>"string"!=typeof t?e[t]:this.getDynamicClasses(e,t)})}get config(){return this.options.config||{}}get component(){return this.options.component}get component$(){return this.options.component$}get locals(){return this.options.locals}get view(){return this.options.view}get theme(){return this.options.theme}get presets(){return this.config.presets}get templates(){return this.options.templates||{}}get template(){return this.view&&this.templates["".concat(this.component,"_").concat(this.view)]?this.templates["".concat(this.component,"_").concat(this.view)]:this.templates[this.component]||{}}get themeClasses(){return g.cloneDeep(this.toArray(this.view&&this.theme.classes["".concat(this.component,"_").concat(this.view)]?this.theme.classes["".concat(this.component,"_").concat(this.view)]:this.theme.classes[this.component]))}get templateClasses(){return g.cloneDeep(this.toArray(this.defaultClasses))}get shouldMergeTemplateClasses(){var e="function"==typeof this.template.data&&void 0!==this.template.data().merge?this.template.data().merge:this.component$.value.merge;return void 0!==e&&e}get defaultClasses(){return"function"==typeof this.template.data&&this.template.data().defaultClasses?this.template.data().defaultClasses:this.component$.value.defaultClasses}get mainClass(){var e="function"==typeof this.template.data&&this.template.data().defaultClasses?this.template.data().defaultClasses:this.component$.value.defaultClasses;return Object.keys(e)[0]}merge(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];g.each(this.pick(e,t?q:C),((e,t)=>{switch(t){case"addClasses":case"prependClasses":case"overrideClasses":if(!e||void 0===e[this.component])return;this.mergeComponentClasses(this.toArray(e[this.component]),t);break;case"removeClasses":case"replaceClasses":if(!e||void 0===e[this.component])return;this.mergeComponentClasses(e[this.component],t);break;case"addClass":case"removeClass":case"replaceClass":case"overrideClass":if(!e)return;"string"==typeof e||Array.isArray(e)?(Array.isArray(e)||(e=e.length>0?e.split(" "):[]),this.mergeComponentClasses({[this.mainClass]:e},"".concat(t,"es"))):"replaceClass"===t?this.mergeComponentClasses(e,"".concat(t,"es")):g.isPlainObject(e)&&this.mergeComponentClasses(this.toArray(e),"".concat(t,"es"));break;case"presets":case"usePresets":if(!Array.isArray(e))return;g.each(e,(e=>{this.merge(this.presets[e])}))}}))}mergeComponentClasses(e,t){g.each(e,((e,a)=>{this[t](e,[a])}))}addClasses(e,t){var a=g.get(this.componentClasses,t.join("."));(1!=e.length||e[0])&&(g.isPlainObject(a)?g.each(e,((e,a)=>{this.addClasses(e,t.concat(a))})):g.set(this.componentClasses,t.join("."),g.union(a,e)))}prependClasses(e,t){var a=g.get(this.componentClasses,t.join("."));(1!=e.length||e[0])&&(g.isPlainObject(a)?g.each(e,((e,a)=>{this.prependClasses(e,t.concat(a))})):g.set(this.componentClasses,t.join("."),g.union(e,a)))}removeClasses(e,t){var a=g.get(this.componentClasses,t.join("."));g.isPlainObject(a)?g.each(e,((e,a)=>{this.removeClasses(e,t.concat(a))})):Array.isArray(a)&&g.set(this.componentClasses,t.join("."),a.filter((t=>"string"!=typeof t||-1===e.indexOf(t))))}replaceClasses(e,t){var a=g.get(this.componentClasses,t.join("."));if(Array.isArray(e)){var n={};e.forEach((e=>{n=b(b({},n),e)})),e=n}g.isPlainObject(a)?g.each(e,((e,a)=>{this.replaceClasses(e,t.concat(a))})):Array.isArray(a)&&g.set(this.componentClasses,t.join("."),a.map((t=>"string"!=typeof t||-1===Object.keys(e).indexOf(t)?t:e[t])))}overrideClasses(e,t){var a=g.get(this.componentClasses,t.join("."));g.isPlainObject(a)?g.each(e,((e,a)=>{this.overrideClasses(e,t.concat(a))})):g.set(this.componentClasses,t.join("."),e)}toArray(e){var t={};return g.each(e,((e,a)=>{t[a]=this.classesToArray(e,[a])})),t}classesToArray(e,t){var a,n=e,l=t?g.get(this.componentClasses,t.join(".")):void 0;if("string"==typeof e)n=e.length>0?e.split(" "):[];else if(g.isPlainObject(e))l&&Array.isArray(l)?n=[e]:l&&!g.isPlainObject(l)||(n={},g.each(e,((e,a)=>{n[a]=this.classesToArray(e,t.concat([a]))})));else if("boolean"==typeof e||"object"==typeof e&&-1!==["ComputedRefImpl","RefImpl"].indexOf(null==e||null===(a=e.constructor)||void 0===a?void 0:a.name))throw Error("Cannot add conditional class to ".concat(this.component,": '").concat(t.join("."),"'"));return n}getDynamicClasses(e,t,a){a||(a=e);var n=Array.isArray(e[t])?g.flattenDeep(e[t]):e[t];return e["$".concat(t)]?g.flattenDeep(e["$".concat(t)](a,this.component$.value)):(g.isPlainObject(n)&&(n=g.cloneDeep(n),g.each(n,((t,a)=>{n[a]=this.getDynamicClasses(n,a,e)}))),n)}getClassHelpers(e,t){var a={};return g.each(e,((n,l)=>{l.match(/[$]/)||(g.isPlainObject(n)?a[l]=this.getClassHelpers(e[l],t.concat([l])):a[l]=["".concat(t.join("."),".").concat(l,"--\x3e")])})),a}pick(e,t){var a={};return e?(g.each(t,(t=>{t in e&&(a[t]=e[t])})),a):a}}var x=function e(t,a,n){return void 0===a&&(a=new FormData),void 0===n&&(n=""),g.isArray(t)?g.each(t,((t,l)=>{e(t,a,n+"["+l+"]")})):g.isPlainObject(t)?g.each(t,((t,l)=>{e(t,a,n?n+"["+l+"]":l)})):a.append(n,null===t?"":t),a};function $(e,t){return M.apply(this,arguments)}function M(){return M=S((function*(e,t){for(var a=0;a<(g.isPlainObject(e)?g.values(e):e).length;a++){var n=g.isPlainObject(e)?g.keys(e)[a]:a;yield t(e[n],n,e)}})),M.apply(this,arguments)}var T=function e(t){return t instanceof File?function(e){return{lastModified:e.lastModified,name:e.name,size:e.size,type:e.type}}(t):t instanceof Date?t.toString():Array.isArray(t)?t.map(e):"object"==typeof t&&null!==t?g.mapValues(t,e):t};function j(e,t){return g.isEqual(T(e),T(t))}var F=e=>{var t=[];return e.forEach((e=>{t.push(e.path),e.children&&F(e.children).forEach((e=>{t.push(e)}))})),t},A=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=a=>{var l=t[a],r=n.length?"".concat(n,".").concat(a):a,i={name:a,path:r,type:l.type};return-1!==["group","object"].indexOf(l.type)&&Object.keys(l.schema||{}).length&&(i.children=e(l.schema,null,r)),"list"===l.type&&Object.keys((null==l?void 0:l.element)||{}).length&&(i.children=e({0:l.element},null,r)),i},r=[];return a&&Object.keys(a).length?Object.values(a).forEach((e=>{e.elements.forEach((e=>{r.push(l(e))}))})):Object.keys(t).forEach((e=>{r.push(l(e))})),r},k=function(t,a,n){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!l.events)throw new Error("`events` option is required for useEvents");var r=e(l.events),i=e({}),o=(e,t)=>{i.value[e]||(i.value[e]=[]),i.value[e].push(t)};return g.each(r.value,(e=>{var a=t["on"+g.upperFirst(g.camelCase(e))];a&&o(e,a)})),{events:r,listeners:i,on:o,off:e=>{delete i.value[e]},fire:function(){var e=arguments[0],t=[].slice.call(arguments).splice(1);g.each(i.value[e],(e=>{e(...t)})),i.value[e]&&i.value[e].length||a.emit(...[e].concat(t))}}};var _=function(v,p){var{schema:f,tabs:m,steps:h,size:y,view:b,views:w,addClass:D,removeClass:O,replaceClass:C,overrideClass:q,addClasses:M,removeClasses:T,replaceClasses:_,overrideClasses:I,presets:L,templates:V,theme:B,messages:N,columns:P,languages:z,formKey:Y,endpoint:R,method:U,formData:H,language:W,locale:K,validateOn:X,forceLabels:G,floatPlaceholders:J,multilingual:Z,stepsControls:Q,displayErrors:ee,displayMessages:te,formatLoad:ae,formatData:ne,prepare:le,default:re,disabled:ie,loading:oe,onChange:ue,onReset:se,onClear:de,onSubmit:ce,onSuccess:ve,onError:pe,onLanguage:fe,onBeforeMount:me,onMounted:ge,onBeforeUpdate:he,onUpdated:ye,onBeforeUnmount:be,onUnmounted:we}=t(v),Se=["change","reset","clear","submit","success","error","language","beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted"],De=l().proxy,{events:Oe,listeners:Ce,fire:qe,on:Ee,off:xe}=k(v,p,{form$:De},{events:Se}),{externalValue:$e,model:Me,internalData:Te,intermediaryValue:je,isSync:Fe,updateModel:Ae}=function(l,r,i){var{value:o,modelValue:u,sync:s}=t(l),d=i.$this,c=3===d.$vueform.vueVersion?u:o,v=e({}),p=e(c&&c.value?g.cloneDeep(c.value):null),f=a((()=>s.value&&c&&void 0!==c.value)),m=a((()=>g.cloneDeep(c.value||v.value)));return c&&c.value&&n(m,((e,t)=>{j(e,t)||(v.value=e)}),{deep:!0,immediate:!1}),{model:m,internalData:v,intermediaryValue:p,externalValue:c,isSync:f,updateModel:(e,t)=>{if(c.value)if(e){var a=e.split("."),n=a.pop(),l=a.join(".")||null,r=l?g.get(c.value,l):c.value;void 0!==r&&d.$set(r,n,t),p.value=g.cloneDeep(c.value)}else g.each(t,((e,t)=>{void 0!==c.value&&d.$set(c.value,t,e),void 0!==p.value&&d.$set(p.value,t,e)}));else{var i=g.cloneDeep(c.value||v.value);e?g.set(i,e,t):i=Object.assign({},i,t),v.value=i}}}}(v,0,{$this:De,fire:qe}),ke=e({}),_e=e(null),Ie=e(null),Le=e(!0),Ve=e(!0),Be=e({}),Ne=e(!1),Pe=e(!1),ze=e(null),Ye=e({}),Re=e(!1),Ue=a((()=>De)),He=a((()=>De.$vueform)),We=a((()=>He.value)),Ke=a((()=>K.value||He.value.i18n.locale)),Xe=a((()=>De.$vueform.services)),Ge=a((()=>{var e={schema:Je.value,tabs:Qe.value,steps:et.value},t={columns:P,languages:z,language:W,theme:B,method:U,validateOn:X,messages:N,formKey:Y,multilingual:Z,formatLoad:ae,formatData:ne,prepare:le,default:re,formData:H,templates:V,addClass:D,removeClass:O,replaceClass:C,overrideClass:q,addClasses:M,removeClasses:T,replaceClasses:_,overrideClasses:I,presets:L,size:y,view:b,views:w},a={stepsControls:Q,displayErrors:ee,displayMessages:te,forceLabels:G,disabled:ie,loading:oe,floatPlaceholders:J,endpoint:R,onChange:ue.value,onReset:se.value,onClear:de.value,onSubmit:ce.value,onSuccess:ve.value,onError:pe.value,onLanguage:fe.value,onBeforeMount:me.value,onMounted:ge.value,onBeforeUpdate:he.value,onUpdated:ye.value,onBeforeUnmount:be.value,onUnmounted:we.value},n={languages:He.value.config.languages,language:He.value.config.language,endpoint:"function"==typeof He.value.config.endpoints.submit?He.value.config.endpoints.submit:He.value.config.endpoints.submit.url,method:"function"==typeof He.value.config.endpoints.submit?null:He.value.config.endpoints.submit.method,validateOn:He.value.config.validateOn,displayErrors:He.value.config.displayErrors,displayMessages:He.value.config.displayMessages,forceLabels:He.value.config.forceLabels,floatPlaceholders:He.value.config.floatPlaceholders,formData:He.value.config.formData,theme:He.value.theme,view:He.value.config.view,views:{},columns:{},size:null,addClass:null,removeClass:null,replaceClass:null,overrideClass:null,addClasses:{},removeClasses:{},replaceClasses:{},overrideClasses:{},presets:[],templates:{},messages:{},default:{},formKey:null,formatLoad:null,formatData:null,prepare:null,multilingual:!1,stepsControls:!0,disabled:!1,loading:!1};return g.each(t,((t,a)=>{e[a]=void 0!==Ye.value[a]?Ye.value[a]:(t&&t.value?t.value:void 0)||n[a]})),g.each(a,((t,a)=>{e[a]=void 0!==Ye.value[a]?Ye.value[a]:t&&null!==t.value?t.value:n[a]})),e})),Je=a((()=>{var e,t=Ze.value;return Object.keys(et.value).length>0&&(e=et.value),Object.keys(Qe.value).length>0&&(e=Qe.value),e&&(t={},g.each(e,(e=>{g.each(e.elements,(e=>{Ze.value[e]&&(t[e]=Ze.value[e])}))})),g.each(Object.keys(Ze.value),(e=>{void 0===t[e]&&(t[e]=Ze.value[e])}))),t})),Ze=a((()=>g.merge({},f&&f.value?f.value:{},Ye.value.schema||{}))),Qe=a((()=>g.merge({},m&&m.value?m.value:{},Ye.value.tabs||{}))),et=a((()=>g.merge({},h&&h.value?h.value:{},Ye.value.steps||{}))),tt=a((()=>A(Ze.value,xt.value?Qe.value:et.value))),at=a((()=>F(tt.value))),nt=a((()=>{var e={};return g.each(ke.value,(t=>{t.isStatic||(e=Object.assign({},e,t.data))})),e})),lt=a((()=>{var e={};return g.each(ke.value,(t=>{t.isStatic||(e=Object.assign({},e,t.requestData))})),ne.value?ne.value(e):e})),rt=a((()=>g.some(ke.value,(e=>!1===e.isStatic&&!0===e.available&&!0===e.dirty)))),it=a((()=>g.some(ke.value,(e=>!1===e.isStatic&&!0===e.available&&!0===e.invalid)))),ot=a((()=>g.some(ke.value,(e=>!1===e.isStatic&&!0===e.available&&!0===e.debouncing)))),ut=a((()=>g.some(ke.value,(e=>!1===e.isStatic&&!0===e.available&&!0===e.pending)))),st=a((()=>!g.some(ke.value,(e=>!1===e.isStatic&&!0===e.available&&!1===e.validated)))),dt=a((()=>g.some(ke.value,(e=>!1===e.isStatic&&!0===e.available&&!0===e.busy))||Ne.value||Pe.value||St.value)),ct=a((()=>{var e=[];return g.each(g.filter(ke.value,{available:!0,isStatic:!1}),(t=>{g.each(t.errors,(t=>{e.push(t)}))})),e})),vt=a((()=>Be.value.errors)),pt=a((()=>vt.value.length>0)),ft=a((()=>pt.value&&Ge.value.displayErrors)),mt=a((()=>Be.value.messages)),gt=a((()=>mt.value.length>0)),ht=a((()=>gt.value&&Ge.value.displayMessages)),yt=a((()=>Ge.value.multilingual)),bt=a((()=>yt.value)),wt=a((()=>it.value&&Dt.value||dt.value||Ge.value.disabled)),St=a((()=>Ge.value.loading)),Dt=a((()=>-1!==Ge.value.validateOn.split("|").indexOf("change"))),Ot=a((()=>-1!==Ge.value.validateOn.split("|").indexOf("step"))),Ct=a((()=>!g.isEmpty(Ge.value.steps))),qt=a((()=>Ct.value)),Et=a((()=>Ct.value&&Ge.value.stepsControls)),xt=a((()=>!g.isEmpty(Ge.value.tabs))),$t=a((()=>xt.value)),Mt=a((()=>{var e={};return g.each(He.value.config.usePresets.concat(Ge.value.presets),(t=>{var a=He.value.config.presets[t];a&&a.templates&&(e=Object.assign({},e,a.templates))})),Object.assign({},Ge.value.theme,{templates:Object.assign({},Ge.value.theme.templates,He.value.templates,e,Ge.value.templates||{})})})),Tt=a((()=>Mt.value.templates)),jt=a((()=>_t.value&&Tt.value["Vueform_".concat(_t.value)]?Tt.value["Vueform_".concat(_t.value)]:Tt.value.Vueform)),Ft=a((()=>new E({component:"Vueform",component$:Ue,theme:Mt.value,config:He.value.config,templates:Tt.value,view:_t.value,locals:Ge.value,merge:[Ge.value]}).classes)),At=a((()=>{var e;return Ge.value.size?e=Ge.value.size:g.each(He.value.config.usePresets.concat(Ge.value.presets),(t=>{var a=He.value.config.presets[t];a&&a.size&&(e=a.size)})),e||(e=He.value.config.size),e})),kt=a((()=>{var e=He.value.config.views;return g.each(He.value.config.usePresets.concat(Ge.value.presets),(t=>{var a=He.value.config.presets[t];a&&a.views&&(e=Object.assign({},e,a.views))})),e=Object.assign({},e,Ge.value.views)})),_t=a((()=>Ge.value.view?Ge.value.view:kt.value.Vueform)),It=a((()=>{var e=De.$vueform.i18n,t=e.locales,a=K.value||e.locale,n=e.fallbackLocale||"en";return a?g.merge({},t[n],t[a]):t[n]})),Lt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t?Ut(t).update(e):g.each(ke.value,(t=>{t.isStatic||(void 0!==e[t.name]||t.flat)&&t.update(t.flat?e:e[t.name])}))},Vt=function(){var e=S((function*(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];null!==Ie.value&&Ie.value.enableAllSteps();var a=t&&null!==Ge.value.formatLoad?Ge.value.formatLoad(e):e;yield $(ke.value,function(){var e=S((function*(e){if(!e.isStatic){var n=e.flat?a:a[e.name];void 0!==n?yield e.load(n,t):e.clear()}}));return function(t){return e.apply(this,arguments)}}())}));return function(t){return e.apply(this,arguments)}}(),Bt=function(){var e=S((function*(){if(it.value||!st.value||!Dt.value){var e=Object.values(ke.value).filter((e=>e.available&&!e.isStatic&&(!e.validated||!Dt.value)));yield $(e,function(){var e=S((function*(e){yield e.validate()}));return function(t){return e.apply(this,arguments)}}())}}));return function(){return e.apply(this,arguments)}}(),Nt=()=>{g.each(ke.value,(e=>{e.isStatic||e.resetValidators()}))},Pt=function(){var e=S((function*(){if(!wt.value&&(yield Bt(),!it.value)){Pe.value=!0;try{yield Yt(),"function"==typeof Ge.value.prepare&&(yield Ge.value.prepare(Ue.value)),"function"==typeof De.$vueform.config.beforeSend&&(yield De.$vueform.config.beforeSend(Ue.value))}catch(e){return qe("error",e,{type:"prepare"},Ue.value),void console.error(e)}finally{Pe.value=!1}qe("submit",Ue.value),Ge.value.endpoint&&zt()}}));return function(){return e.apply(this,arguments)}}(),zt=function(){var e=S((function*(){Ne.value=!0;var e={};try{var t,a;Nt();var n,l,r,i=Ge.value.formData(Ue.value);if("function"==typeof Ge.value.endpoint)e=yield Ge.value.endpoint(i,Ue.value);else{var o,u,s=(null===(o=De.$vueform.config.endpoints[Ge.value.endpoint])||void 0===o?void 0:o.url)||Ge.value.endpoint,d=(null===(u=De.$vueform.config.endpoints[Ge.value.endpoint])||void 0===u?void 0:u.method)||Ge.value.method;e=yield Xe.value.axios.request({url:s,method:d.toLowerCase(),["get"===d.toLowerCase()?"params":"data"]:i})}if(e&&!(e instanceof Promise))null!==(n=e)&&void 0!==n&&null!==(l=n.data)&&void 0!==l&&null!==(r=l.payload)&&void 0!==r&&r.updates&&Lt(e.data.payload.updates);(null===(t=e)||void 0===t?void 0:t.status)>=200&&(null===(a=e)||void 0===a?void 0:a.status)<300?qe("success",e,Ue.value):qe("error",null,{type:"submit"},Ue.value)}catch(e){qe("error",e,{type:"submit"},Ue.value),console.error(e)}finally{qe("response",e,Ue.value),Ne.value=!1}}));return function(){return e.apply(this,arguments)}}(),Yt=function(){var e=S((function*(){try{yield $(ke.value,function(){var e=S((function*(e){e.prepare&&(yield e.prepare())}));return function(t){return e.apply(this,arguments)}}())}catch(e){throw new Error(e)}}));return function(){return e.apply(this,arguments)}}(),Rt=e=>{ze.value=e,qe("language",e)},Ut=(e,t)=>{if(void 0===t&&(t=ke.value),g.isEmpty(t)||!e)return null;var a=String(e).match(/^[^.]+\./);if(a){var n=a[0].replace(".","");return t[n]?Ut(e.replace(a[0],""),t[n].children$):null}return void 0!==t[e]?t[e]:null},Ht=()=>{Be.value=new Xe.value.messageBag(ct)};return r("form$",Ue),r("theme",Mt),r("Size",At),r("Views",kt),r("translations",It),r("config$",We),Ht(),Rt(Ge.value.language),i((()=>{Ye.value=De.vueform||{},g.each(Se,(e=>{var t=Ge.value["on"+g.upperFirst(e)];t&&Ee(e,t)})),qe("beforeMount",De)})),o((()=>{Re.value=!0,n(nt,((e,t)=>{j(e,t)||(qe("change",e,t,De),$e&&void 0!==$e.value&&(p.emit("input",e),p.emit("update:modelValue",e)))}),{deep:!0,immediate:!1}),$e&&void 0!==$e.value&&JSON.stringify($e.value)!==JSON.stringify(nt.value)&&(p.emit("input",nt.value),p.emit("update:modelValue",nt.value)),qe("mounted",De)})),u((()=>qe("beforeUpdate",De))),s((()=>qe("updated",De))),d((()=>qe("beforeUnmount",De))),c((()=>qe("unmounted",De))),n(a((()=>Ge.value.language)),((e,t)=>{e&&Rt(e)})),{tabs$:_e,steps$:Ie,elements$:ke,options:Ge,validation:Le,conditions:Ve,messageBag:Be,selectedLanguage:ze,submitting:Ne,preparing:Pe,events:Oe,listeners:Ce,internalData:Te,data:nt,requestData:lt,dirty:rt,invalid:it,debouncing:ot,pending:ut,validated:st,busy:dt,formErrors:vt,formMessages:mt,isDisabled:wt,isLoading:St,shouldValidateOnChange:Dt,shouldValidateOnStep:Ot,hasSteps:Ct,hasTabs:xt,hasErrors:pt,hasMessages:gt,isMultilingual:yt,showErrors:ft,showMessages:ht,showLanguages:bt,showSteps:qt,showTabs:$t,showStepsControls:Et,classes:Ft,Templates:Tt,template:jt,extendedTheme:Mt,Size:At,View:_t,Views:kt,form$:Ue,model:Me,intermediaryValue:je,userConfig:Ye,isSync:Fe,tree:tt,flatTree:at,translations:It,locale$:Ke,prepareElements:Yt,updateModel:Ae,update:Lt,load:Vt,reset:()=>{g.each(ke.value,(e=>{e.isStatic||e.reset()})),null!==Ie.value&&Ie.value.reset(),null!==_e.value&&_e.value.reset(),qe("reset")},clear:()=>{g.each(ke.value,(e=>{e.isStatic||e.clear()})),null!==Ie.value&&Ie.value.reset(),null!==_e.value&&_e.value.reset(),qe("clear")},clean:()=>{g.each(ke.value,(e=>{e.isStatic||e.clean()}))},clearMessages:()=>{Be.value&&Be.value.clear(),g.each(ke.value,(e=>{e.isStatic||e.clearMessages()}))},validate:Bt,resetValidators:Nt,convertFormData:e=>x(e),submit:Pt,send:zt,disableValidation:()=>{Le.value=!1},enableValidation:()=>{Le.value=!0},enableConditions:()=>{Ve.value=!0},disableConditions:()=>{Ve.value=!1},setLanguage:Rt,handleSubmit:()=>{Pt()},el$:Ut,siblings$:e=>{var t;return/\.+/.test(e)?(null===(t=Ut(e.match(/.*(?=\.)/)[0]))||void 0===t?void 0:t.children$)||{}:ke.value},initMessageBag:Ht,fire:qe,on:Ee,off:xe}},I={name:"Vueform",emits:["input","update:modelValue","change","reset","clear","submit","success","error","response","language","beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted"],slots:["default","empty"],setup:(t,a)=>{a.emits=["input","update:modelValue","change","reset","clear","submit","success","error","response","language","beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted"],a.name=e("Vueform");var{tabs$:n,steps$:l,elements$:r,options:i,validation:o,conditions:u,messageBag:s,selectedLanguage:d,submitting:c,preparing:v,events:p,listeners:f,internalData:m,data:g,requestData:h,dirty:y,invalid:b,debouncing:w,pending:S,validated:D,busy:O,formErrors:C,formMessages:q,isDisabled:E,isLoading:x,shouldValidateOnChange:$,shouldValidateOnStep:M,hasSteps:T,hasTabs:j,hasErrors:F,hasMessages:A,isMultilingual:k,showErrors:I,showMessages:L,showLanguages:V,showSteps:B,showTabs:N,showStepsControls:P,classes:z,Templates:Y,template:R,extendedTheme:U,Size:H,View:W,Views:K,form$:X,model:G,intermediaryValue:J,userConfig:Z,isSync:Q,tree:ee,flatTree:te,translations:ae,locale$:ne,prepareElements:le,updateModel:re,update:ie,load:oe,reset:ue,clear:se,clean:de,clearMessages:ce,validate:ve,resetValidators:pe,convertFormData:fe,submit:me,send:ge,disableValidation:he,enableValidation:ye,enableConditions:be,disableConditions:we,setLanguage:Se,handleSubmit:De,el$:Oe,siblings$:Ce,initMessageBag:qe,fire:Ee,on:xe,off:$e}=_(t,a);return{tabs$:n,steps$:l,elements$:r,options:i,validation:o,conditions:u,messageBag:s,selectedLanguage:d,submitting:c,preparing:v,events:p,listeners:f,internalData:m,data:g,requestData:h,dirty:y,invalid:b,debouncing:w,pending:S,validated:D,busy:O,formErrors:C,formMessages:q,isDisabled:E,isLoading:x,shouldValidateOnChange:$,shouldValidateOnStep:M,hasSteps:T,hasTabs:j,hasErrors:F,hasMessages:A,isMultilingual:k,showErrors:I,showMessages:L,showLanguages:V,showSteps:B,showTabs:N,showStepsControls:P,classes:z,Templates:Y,template:R,extendedTheme:U,Size:H,View:W,Views:K,form$:X,model:G,intermediaryValue:J,userConfig:Z,isSync:Q,tree:ee,flatTree:te,translations:ae,locale$:ne,prepareElements:le,updateModel:re,update:ie,load:oe,reset:ue,clear:se,clean:de,clearMessages:ce,validate:ve,resetValidators:pe,convertFormData:fe,submit:me,send:ge,disableValidation:he,enableValidation:ye,enableConditions:be,disableConditions:we,setLanguage:Se,handleSubmit:De,el$:Oe,siblings$:Ce,initMessageBag:qe,fire:Ee,on:xe,off:$e}},props:{schema:{type:Object,required:!1,default:null},name:{type:String,required:!1,default:null,private:!0},tabs:{type:Object,required:!1,default:null},steps:{type:Object,required:!1,default:null},stepsControls:{type:Boolean,required:!1,default:null,"@default":!0},validateOn:{type:String,required:!1,default:null},displayErrors:{type:Boolean,required:!1,default:null},displayMessages:{type:Boolean,required:!1,default:null},messages:{type:Object,required:!1,default:null},endpoint:{type:[String,Boolean],required:!1,default:null},method:{type:String,required:!1,default:null},prepare:{type:Function,required:!1,default:null},formKey:{type:[String,Number],required:!1,default:null},formData:{type:Function,required:!1,default:null},value:{type:Object,required:!1,default:void 0},modelValue:{type:Object,required:!1,default:void 0},sync:{type:Boolean,required:!1,default:!1},default:{type:Object,required:!1,default:null},formatData:{type:Function,required:!1,default:null},formatLoad:{type:Function,required:!1,default:null},loading:{type:Boolean,required:!1,default:null},disabled:{type:Boolean,required:!1,default:null},columns:{type:Object,required:!1,default:null},forceLabels:{type:Boolean,required:!1,default:null},floatPlaceholders:{type:Boolean,required:!1,default:null},size:{required:!1,type:[String],default:null},view:{required:!1,type:[String],default:null},views:{required:!1,type:[Object],default:null},addClasses:{required:!1,type:[Object],default:null},addClass:{required:!1,type:[Array,Object,String],default:null},removeClasses:{required:!1,type:[Object],default:null},removeClass:{required:!1,type:[Array,Object],default:null},replaceClasses:{required:!1,type:[Object],default:null},replaceClass:{required:!1,type:[Object],default:null},overrideClasses:{required:!1,type:[Object],default:null},overrideClass:{required:!1,type:[Array,Object,String],default:null},templates:{type:Object,required:!1,default:null},presets:{required:!1,type:[Array],default:null},multilingual:{type:Boolean,required:!1,default:null},languages:{type:Object,required:!1,default:null},language:{type:String,required:!1,default:null},locale:{type:String,required:!1,default:null},onChange:{required:!1,type:[Function],default:null,private:!0},onReset:{required:!1,type:[Function],default:null,private:!0},onClear:{required:!1,type:[Function],default:null,private:!0},onSubmit:{required:!1,type:[Function],default:null,private:!0},onSuccess:{required:!1,type:[Function],default:null,private:!0},onError:{required:!1,type:[Function],default:null,private:!0},onLanguage:{required:!1,type:[Function],default:null,private:!0},onBeforeMount:{required:!1,type:[Function],default:null,private:!0},onMounted:{required:!1,type:[Function],default:null,private:!0},onBeforeUpdate:{required:!1,type:[Function],default:null,private:!0},onUpdated:{required:!1,type:[Function],default:null,private:!0},onBeforeUnmount:{required:!1,type:[Function],default:null,private:!0},onUnmounted:{required:!1,type:[Function],default:null,private:!0}},render(){return this.template.render.apply(this,arguments)}},L=function(e,t,a){return{form$:v("form$")}},V=function(e,t,a){return{theme:v("theme")}},B=function(e,t,a){return{Size:v("Size")}},N=function(n,l,r){var{view:i}=t(n),o=l.name,u=v("Views")||e({}),s=v("View",e(void 0));return{View:a((()=>i&&i.value?i.value:u.value[o.value]?u.value[o.value]:s.value))}},P=function(e,t,n){var r=t.name,{form$:i}=L(),{theme:o}=V(),{Size:u}=B(),{View:s}=N(e,t),d=a((()=>l().proxy)),c=a((()=>new E({component:r.value,component$:d,theme:o.value,config:i.value.$vueform.config,templates:p.value,view:s.value,merge:[i.value.options]}))),v=a((()=>c.value.classes)),p=a((()=>o.value.templates)),f=a((()=>s.value&&p.value["".concat(r.value,"_").concat(s.value)]?p.value["".concat(r.value,"_").concat(s.value)]:p.value[r.value]));return{form$:i,theme:o,Size:u,View:s,classesInstance:c,classes:v,Templates:p,template:f}},z={name:"FormErrors",props:{view:{required:!1,type:[String],default:void 0}},setup(e,t){var{form$:n,Size:l,View:r,classesInstance:i,theme:o,classes:u,Templates:s,template:d}=P(e,t),c=a((()=>n.value.formErrors));return{form$:n,Size:l,View:r,classesInstance:i,theme:o,classes:u,Templates:s,template:d,errors:c}}},Y={name:"FormMessages",props:{view:{required:!1,type:[String],default:void 0}},setup(e,t){var{form$:n,Size:l,View:r,classesInstance:i,theme:o,classes:u,Templates:s,template:d}=P(e,t),c=a((()=>n.value.formMessages));return{form$:n,Size:l,View:r,classesInstance:i,theme:o,classes:u,Templates:s,template:d,messages:c}}},R={name:"FormLanguages",props:{view:{required:!1,type:[String],default:void 0}},setup(e,t){var{form$:n,Size:l,View:i,classesInstance:o,theme:u,classes:s,Templates:d,template:c}=P(e,t),v=a((()=>n.value.selectedLanguage)),p=a((()=>n.value.options.languages)),f=e=>{n.value.setLanguage(e)};return r("View",i),{form$:n,Size:l,View:i,classesInstance:o,theme:u,classes:s,Templates:d,template:c,language:v,languages:p,select:f,handleSelect:e=>{f(e)}}}},U={name:"FormLanguage",emits:["select"],props:{language:{type:String,required:!0},code:{type:String,required:!0},view:{required:!1,type:[String],default:void 0}},setup(e,n){var{code:l}=t(e),{form$:r,Size:i,View:o,classesInstance:u,theme:s,classes:d,Templates:c,template:v}=P(e,n),p=a((()=>r.value.selectedLanguage)),f=a((()=>p.value==l.value));return{form$:r,Size:i,View:o,classesInstance:u,theme:s,selectedLanguage:p,selected:f,classes:d,Templates:c,template:v,select:()=>{n.emit("select",l.value)}}}},H=function(e){return void 0===e||"string"!=typeof e?e:e.match(/^-*\d+$/)?parseInt(e,10):e.match(/^\d+\.\d+$/)?parseFloat(e):e},W={name:"FormTabs",emits:["select"],props:{view:{required:!1,type:[String],default:void 0}},setup(t,u){var s=l().proxy,{form$:c,Size:v,View:f,classesInstance:m,theme:h,classes:y,Templates:b,template:w}=P(t,u),{events:D,listeners:O,on:C,off:q,fire:E}=k(t,u,{form$:c},{events:u.emits}),x=e([]),$=e(!0),M=a((()=>c.value.elements$)),T=a((()=>c.value.options.tabs)),j=a((()=>{var e={};return g.each(x.value,(t=>{e[t.name]=t})),e})),F=a((()=>{var e={};return g.each(j.value,(t=>{t.visible&&(e[t.name]=t)})),e})),A=a((()=>{var e=g.find(j.value,{active:!0});return void 0!==e?e:{}})),_=a((()=>g.find(F.value,(e=>e.visible)))),I=a((()=>Object.values(F.value).pop())),L=a((()=>g.find(F.value,(e=>e.index>A.value.index&&e.visible)))),V=a((()=>g.findLast(F.value,(e=>e.index<A.value.index&&e.visible)))),B=(e,t)=>{void 0!==e.tabs$?c.value.$set(e,"tabs$",s):t(e.$parent,t)},N=(e,t)=>{void 0!==e.tabs$?c.value.$set(e,"tabs$",null):t(e.$parent,t)};return r("View",f),n(M,((e,t)=>{var a=g.difference(g.keys(e),g.keys(t));g.each(a,(e=>{M.value[e].deactivate()}))}),{deep:!1,lazy:!0}),n(T,S((function*(){yield p(),yield p(),void 0!==A.value&&void 0!==A.value.index||_.value.select()})),{deep:!0,lazy:!0}),n(T,(e=>{var t=[];g.each(e,((e,a)=>{t.push(x.value[x.value.map((e=>H(e.name))).indexOf(H(a))])})),x.value=t}),{flush:"post"}),i((()=>{B(s.$parent,B)})),d((()=>{N(s.$parent,N)})),o((()=>{p((()=>{g.find(j.value,{active:!0})||_.value.select()}))})),{form$:c,Size:v,View:f,classesInstance:m,theme:h,tabs:T,elements$:M,tabs$Array:x,events:D,listeners:O,exists:$,classes:y,Templates:b,template:w,tabs$:j,visible$:F,current$:A,first$:_,last$:I,next$:L,previous$:V,goTo:e=>{F.value[e].select()},select:e=>{var t=A.value;g.each(M.value,(e=>{e.deactivate()})),g.each(j.value,(e=>{e.deactivate()})),E("select",e,t)},tab$:e=>g.find(j.value,{name:e}),reset:()=>{_.value.select()},on:C,off:q,fire:E}}},K=function(n,l,r){var{parent:i,conditions:o}=t(n),u=r.form$,s=r.path||e(null),d=r.el$||e(void 0),c=e(o.value),v=e({}),p=a((()=>!u.value.conditions||!(i&&i.value&&void 0!==i.value.available&&!i.value.available)&&(!c.value||!c.value.length||!g.some(c.value,(e=>!u.value.$vueform.services.condition.check(e,s.value,u.value,d.value)))))),f=()=>{c.value=Object.values(v.value).reduce(((e,t)=>e.concat(t)),o.value)};return{conditionList:c,available:p,additionalConditions:v,updateConditions:f,addConditions:(e,t)=>{v.value[e]=t,f()},removeConditions:e=>{delete v.value[e],f()}}},X=function(e,a,n){var{conditionList:l,available:r,additionalConditions:i,addConditions:o,removeConditions:u}=K(e,0,n),{conditions:s}=t(e),d=n.children$Array;return{conditionList:l,available:r,updateConditions:()=>{l.value=Object.values(i.value).reduce(((e,t)=>e.concat(t)),s.value),d.value.forEach((e=>{e.updateConditions()}))},addConditions:o,removeConditions:u}},G=X,J=X,{hasOwnProperty:Z,toString:Q}=Object.prototype;function ee(e){return"string"==typeof e&&e.trim().length>0}function te(e){return g.isPlainObject(e)&&(ee(e.template)||function(e){return"function"==typeof e}(e.render)||ee(e.el)||function(e){return function(e){return!!e}(e)&&1===e.nodeType&&Q.call(e).indexOf("Element")>-1}(e.el)||te(e.extends)||function(e){return Array.isArray(e)&&e.length>0}(e.mixins)&&e.mixins.some((e=>te(e))))||"function"==typeof e&&e.prototype&&"VueComponent"===e.prototype.constructor.name}function ae(e,t,a){var n=a.locale||t.i18n.locale;return n&&e&&"object"==typeof e?(null==e?void 0:e[n])||(null==e?void 0:e[n.toUpperCase()])||(null==e?void 0:e[t.i18n.fallbackLocale])||(null==e?void 0:e[t.i18n.fallbackLocale.toUpperCase()])||(null==e?void 0:e[Object.keys(e)[0]])||"":e}var ne=function(t,n,l){var r=l.labelDefinition,i=l.component$||e(null),o=v("form$"),u=v("config$"),s=a((()=>r.value)),d=a((()=>"function"==typeof s.value&&(!s.value.prototype||!s.value.prototype.constructor||s.value.prototype.constructor&&"VueComponent"!==s.value.prototype.constructor.name))),c=a((()=>te(s.value)));return{label:a((()=>{var e=d.value?s.value(i.value):s.value||null;return c.value||(e=ae(e,u.value,o.value)),e})),isLabelComponent:c}},le={name:"FormTab",emits:["activate","inactivate"],slots:["default"],props:{name:{type:[String,Number],required:!0},label:{type:[String,Object,Function],required:!1,default:null},elements:{type:[Array],required:!1,default:()=>[]},conditions:{type:[Array],required:!1,default:()=>[]},addClass:{required:!1,type:[Array,Object,String],default:null},removeClass:{required:!1,type:[Array,Object],default:null},replaceClass:{required:!1,type:[Object],default:null},overrideClass:{required:!1,type:[Array,Object,String],default:null},view:{required:!1,type:[String],default:void 0},onActivate:{type:[Function],required:!1,default:null,private:!0},onInactivate:{type:[Function],required:!1,default:null,private:!0}},setup(r,u){var{name:s,label:c,elements:v}=t(r),m=l().proxy,{form$:h,Size:y,View:b,classesInstance:w,theme:S,classes:D,Templates:O,template:C}=P(r,u),{available:q,conditionList:E,updateConditions:x}=K(r,0,{form$:h}),{isLabelComponent:$,label:M}=ne(0,0,{component$:h,labelDefinition:c}),{events:T,listeners:j,on:F,off:A,fire:_}=k(r,u,{form$:h},{events:u.emits}),I=e(!1),L=e(M.value&&"object"==typeof M.value?f(M.value):M.value),V=a((()=>h.value.elements$)),B=a((()=>h.value.tabs$)),N=a((()=>{var e;return Object.keys((null==B||null===(e=B.value)||void 0===e?void 0:e.tabs$)||{}).indexOf(s.value)})),z=a((()=>0===N.value)),Y=a((()=>B.value.last$.name===s.value)),R=a((()=>g.filter(V.value,((e,t)=>-1!==v.value.indexOf(t))))),U=a((()=>q.value)),W=a((()=>g.some(R.value,{available:!0,invalid:!0}))),X=a((()=>h.value.tabs$.tabs$[s.value])),G=()=>{I.value||(I.value=!0,g.each(R.value,(e=>{e.activate()})),_("activate"))},J=()=>{0!=E.value.length&&Object.values(R.value).forEach((e=>{e.addConditions("tab",E.value)}))},Z=()=>{Object.values(R.value).forEach((e=>{e.removeConditions("tab")}))},Q=(e,t)=>{e.tabs$Array?e.tabs$Array.push(m):t(e.$parent,t)},ee=(e,t)=>{e.tabs$Array?e.tabs$Array.splice(e.tabs$Array.map((e=>H(e.name))).indexOf(H(s.value)),1):t(e.$parent,t)};return n(R,(()=>{I.value&&g.each(R.value,(e=>{e.activate()}))}),{deep:!1,lazy:!0}),n(M,(()=>{L.value=M.value&&"object"==typeof M.value?f(M.value):M.value})),n(E,((e,t)=>{null!=e&&e.length?J():Z()})),o((()=>{p((()=>{J()}))})),i((()=>{Q(m.$parent,Q)})),d((()=>{Z(),ee(m.$parent,ee)})),{form$:h,Size:y,View:b,classesInstance:w,theme:S,elements$:V,index:N,isFirst:z,isLast:Y,active:I,events:T,listeners:j,children$:R,visible:U,invalid:W,classes:D,Templates:O,template:C,available:q,isLabelComponent:$,tabLabel:L,tab$:X,tabs$:B,select:()=>{var e,t;!I.value&&null!==(e=B.value)&&void 0!==e&&e.select&&(null===(t=B.value)||void 0===t||t.select(X.value),G())},activate:G,deactivate:()=>{I.value&&(I.value=!1,g.each(R.value,(e=>{e.deactivate()})),_("inactivate"))},on:F,off:A,fire:_,addChildConditions:J,removeChildConditions:Z,resetChildConditions:()=>{Z(),J()},updateConditions:x}}},re={name:"FormSteps",emits:["select","next","previous","finish"],props:{view:{required:!1,type:[String],default:void 0}},setup(t,u){var s=l().proxy,{form$:c,Size:v,View:f,classesInstance:m,theme:h,classes:y,Templates:b,template:w}=P(t,u),{events:D,listeners:O,on:C,off:q,fire:E}=k(t,u,{form$:c},{events:u.emits}),x=e([]),$=e(null),M=e(!0),T=a((()=>c.value.options.steps)),j=a((()=>c.value.elements$)),F=a((()=>g.some(B.value,{pending:!0}))),A=a((()=>g.some(B.value,{debouncing:!0}))),_=a((()=>g.some(B.value,{invalid:!0}))),I=a((()=>!g.some(B.value,{done:!1}))),L=a((()=>F.value||A.value)),V=a((()=>{var e={};return g.each(x.value,(t=>{e[t.name]=t})),e})),B=a((()=>{var e={};return g.each(V.value,(t=>{t.visible&&(e[t.name]=t)})),e})),N=a((()=>g.find(B.value,(e=>e.visible)))),z=a((()=>Object.values(B.value).pop())),Y=a((()=>{var e=g.find(V.value,{active:!0});return void 0!==e?e:{}})),R=a((()=>g.find(B.value,(e=>e.index>Y.value.index&&e.visible)))),U=a((()=>g.findLast(B.value,(e=>e.index<Y.value.index&&e.visible)))),W=a((()=>g.find(B.value,{invalid:!0}))),K=a((()=>g.find(B.value,{done:!1}))),X=a((()=>g.findLast(B.value,{isDisabled:!1}))),G=a((()=>{var e=g.findLast(B.value,{visible:!0});return!(!Y.value||!e)&&e.index===Y.value.index})),J=a((()=>0===Y.value.index)),Z=function(){var e=S((function*(){yield c.value.submit(),_.value?W.value.select():$.value=n(_,(e=>{e&&W.value.select(),$.value()}))}));return function(){return e.apply(this,arguments)}}(),Q=e=>{g.each(V.value,(t=>{t.index<=e&&t.visible&&t.enable()}))},ee=()=>{Q(Y.value.index)},te=()=>{(X.value||N.value)&&Q(void 0!==X.value?X.value.index:N.value.index)},ae=(e,t)=>{void 0!==e.steps$?c.value.$set(e,"steps$",s):t(e.$parent,t)},ne=(e,t)=>{void 0!==e.steps$?c.value.$set(e,"steps$",null):t(e.$parent,t)};return r("View",f),n(j,((e,t)=>{var a=g.difference(g.keys(e),g.keys(t));g.each(a,(e=>{j.value[e].deactivate()}))}),{deep:!1,lazy:!0}),n(T,(()=>{p((()=>{X.value,void 0===Y.value.index&&N.value&&N.value.select()}))}),{deep:!0,lazy:!0}),n(T,(e=>{var t=[];g.each(e,((e,a)=>{t.push(x.value[x.value.map((e=>H(e.name))).indexOf(H(a))])})),x.value=t}),{flush:"post"}),i((()=>{ae(s.$parent,ae)})),d((()=>{ne(s.$parent,ne)})),o((()=>{p((()=>{void 0!==Y.value&&void 0!==Y.value.index||(N.value.enable(),N.value.select()),ee(),n(B,(()=>{te()}),{flush:"post"})}))})),{form$:c,Size:v,View:f,classesInstance:m,theme:h,steps:T,elements$:j,steps$Array:x,events:D,listeners:O,exists:M,classes:y,Templates:b,template:w,steps$:V,pending:F,debouncing:A,invalid:_,done:I,busy:L,visible$:B,first$:N,last$:z,current$:Y,next$:R,previous$:U,firstInvalid$:W,firstNonDone$:K,lastEnabled$:X,isAtLastStep:G,isAtFirstStep:J,goTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=B.value[e];a.enable(),a.select(),t&&p((()=>{te()}))},next:()=>{E("next",R.value),R.value.enable(),R.value.select()},previous:()=>{E("previous",U.value),U.value.select()},complete:()=>{g.each(V.value,(e=>{e.complete()}))},step$:e=>g.find(B.value,{name:e}),reset:()=>{g.each(V.value,(e=>{e.uncomplete(),e.disable()})),N.value.enable(),N.value.select()},enableAllSteps:()=>{g.each(V.value,(e=>{e.enable()}))},submit:Z,select:e=>{var t=Y.value;g.each(j.value,(e=>{e.deactivate()})),g.each(V.value,(e=>{e.deactivate()})),E("select",e,t)},enableUntil:Q,enableUntilCurrent:ee,enableUntilLastEnabled:te,on:C,off:q,fire:E}}},ie={name:"FormStepsControls",slots:["previous","next","finish"],props:{labels:{type:Boolean,required:!1,default:!0},view:{required:!1,type:[String],default:void 0}},setup(e,t){var{form$:a,Size:n,View:l,classesInstance:i,theme:o,classes:u,Templates:s,template:d}=P(e,t);return r("View",l),{form$:a,Size:n,View:l,classesInstance:i,theme:o,classes:u,Templates:s,template:d}}},oe={name:"FormStepsControl",slots:["default"],props:{type:{type:[String],required:!0},labels:{type:[Boolean],required:!1,default:!0,private:!0},view:{required:!1,type:[String],default:void 0}},setup(e,n){var{type:l,labels:r}=t(e),{form$:i,Size:o,View:u,classesInstance:s,theme:d,classes:c,Templates:v,template:f}=P(e,n),m=a((()=>{if(!r.value)return null;var e=b&&b.value?b.value.labels:null;switch(l.value){case"previous":return e&&e.previous?e.previous:i.value.translations.vueform.steps.previous;case"next":return e&&e.next?e.next:i.value.translations.vueform.steps.next;case"finish":return e&&e.finish?e.finish:e&&e.next?e.next:i.value.translations.vueform.steps.finish}})),{isLabelComponent:g,label:h}=ne(0,0,{component$:i,labelDefinition:m}),y=a((()=>i.value.steps$)),b=a((()=>y.value?y.value.current$:void 0)),w=a((()=>{var e=b&&b.value?b.value.buttons:null;switch(l.value){case"previous":return!e||!1!==e.previous;case"next":return y.value&&!y.value.isAtLastStep&&(!e||!1!==e.next);case"finish":return y.value&&y.value.isAtLastStep}})),D=a((()=>{switch(l.value){case"previous":return y.value&&y.value.isAtFirstStep;case"next":return void 0!==b.value&&void 0!==b.value.index&&(b.value.invalid&&i.value.shouldValidateOnChange||b.value.busy||i.value.isLoading);case"finish":return y.value.invalid&&i.value.shouldValidateOnChange||y.value.busy||i.value.submitting||i.value.isDisabled||i.value.isLoading}})),O=a((()=>"previous"!==l.value&&(i.value.isLoading||i.value.submitting))),C=()=>{y.value.previous()},q=function(){var e=S((function*(){i.value.shouldValidateOnStep&&(yield b.value.validate()),b.value.invalid||(b.value.complete(),y.value.next())}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=S((function*(){y.value.fire("finish"),y.value.complete(),y.value.submit()}));return function(){return e.apply(this,arguments)}}();return{form$:i,Size:o,View:u,classesInstance:s,theme:d,steps$:y,classes:c,Templates:v,template:f,visible:w,isDisabled:D,isLoading:O,current$:b,label:h,isLabelComponent:g,previous:C,next:q,finish:E,handleClick:e=>{switch(l.value){case"previous":C();break;case"next":q(),"Enter"!==e.key&&" "!==e.key||p((()=>{p((()=>{var e,t=null==b||null===(e=b.value.children$)||void 0===e?void 0:e.find((e=>{var t;return e.name===(null==b||null===(t=b.value.elements)||void 0===t?void 0:t[0])}));t&&t.focus()}))}));break;case"finish":E()}}}}},ue={name:"FormStep",emits:["activate","inactivate","enable","disable","complete"],slots:["default"],props:{name:{type:[String,Number],required:!0},label:{type:[String,Object,Function],required:!1,default:null},labels:{type:[Object],required:!1,default:()=>({})},buttons:{type:[Object],required:!1,default:()=>({})},elements:{type:[Array],required:!1,default:()=>[]},conditions:{type:[Array],required:!1,default:()=>[]},addClass:{required:!1,type:[Array,Object,String],default:null},removeClass:{required:!1,type:[Array,Object],default:null},replaceClass:{required:!1,type:[Object],default:null},overrideClass:{required:!1,type:[Array,Object,String],default:null},view:{required:!1,type:[String],default:void 0},onActivate:{type:[Function],required:!1,default:null,private:!0},onInactivate:{type:[Function],required:!1,default:null,private:!0},onDisable:{type:[Function],required:!1,default:null,private:!0},onEnable:{type:[Function],required:!1,default:null,private:!0}},setup(r,u){var{name:s,label:c,elements:v}=t(r),m=l().proxy,{form$:h,Size:y,View:b,classesInstance:w,theme:D,classes:O,Templates:C,template:q}=P(r,u),{available:E,conditionList:x,updateConditions:M}=K(r,0,{form$:h}),{isLabelComponent:T,label:j}=ne(0,0,{component$:h,labelDefinition:c}),{events:F,listeners:A,on:_,off:I,fire:L}=k(r,u,{form$:h},{events:u.emits}),V=e(j.value&&"object"==typeof j.value?f(j.value):j.value),B=e(!1),N=e(!0),z=e(!1),Y=a((()=>h.value.elements$)),R=a((()=>h.value.steps$||{})),U=a((()=>c.value)),W=a((()=>{var e;return Object.keys((null==R||null===(e=R.value)||void 0===e?void 0:e.steps$)||{}).indexOf(s.value)})),X=a((()=>0===W.value)),G=a((()=>R.value.last$.name===s.value)),J=a((()=>g.filter(Y.value,((e,t)=>-1!==v.value.indexOf(t))))),Z=a((()=>E.value)),Q=a((()=>g.some(J.value,{available:!0,invalid:!0}))),ee=a((()=>g.some(J.value,{available:!0,pending:!0}))),te=a((()=>g.some(J.value,{available:!0,debouncing:!0}))),ae=a((()=>!g.some(J.value,{available:!0,validated:!1}))),le=a((()=>ee.value||te.value)),re=a((()=>z.value&&ae.value&&!Q.value&&!ee.value)),ie=a((()=>{var e;return null===(e=h.value.steps$)||void 0===e?void 0:e.steps$[s.value]})),oe=function(){var e=S((function*(){ae.value&&!Q.value&&h.value.shouldValidateOnChange||(yield $(J.value,function(){var e=S((function*(e){e.validated&&!e.invalid&&h.value.shouldValidateOnChange||!e.available||e.isStatic||(yield e.validate())}));return function(t){return e.apply(this,arguments)}}()))}));return function(){return e.apply(this,arguments)}}(),ue=()=>{B.value||(B.value=!0,L("activate"))},se=()=>{N.value&&(N.value=!1,L("enable"))},de=()=>{0!=x.value.length&&Object.values(J.value).forEach((e=>{e.addConditions("step",x.value)}))},ce=()=>{Object.values(J.value).forEach((e=>{e.removeConditions("step")}))},ve=(e,t)=>{e.steps$Array?e.steps$Array.push(m):t(e.$parent,t)},pe=(e,t)=>{e.steps$Array?e.steps$Array.splice(e.steps$Array.map((e=>H(e.name))).indexOf(H(s.value)),1):t(e.$parent,t)};return n(Z,(e=>{e&&W.value<h.value.steps$.current$.index&&se()})),n(J,(()=>{B.value&&g.each(J.value,(e=>{e.activate()}))}),{deep:!1,lazy:!0}),n(j,(()=>{V.value=j.value&&"object"==typeof j.value?f(j.value):j.value})),n(x,((e,t)=>{null!=e&&e.length?de():ce()})),o((()=>{p((()=>{de()}))})),i((()=>{ve(m.$parent,ve)})),d((()=>{ce(),pe(m.$parent,pe)})),{form$:h,Size:y,View:b,classesInstance:w,theme:D,steps$:R,elements$:Y,active:B,isDisabled:N,isFirst:X,isLast:G,completed:z,events:F,listeners:A,children$:J,visible:Z,invalid:Q,pending:ee,classes:O,Templates:C,template:q,available:E,baseLabel:U,debouncing:te,validated:ae,busy:le,done:re,step$:ie,isLabelComponent:T,stepLabel:V,index:W,validate:oe,activate:ue,deactivate:()=>{B.value&&(B.value=!1,L("inactivate"))},enable:se,disable:()=>{N.value||(N.value=!0,L("disable"))},complete:()=>{z.value||(z.value=!0,L("complete"))},uncomplete:()=>{z.value=!1},select:()=>{var e,t;!N.value&&null!==(e=R.value)&&void 0!==e&&e.select&&(null===(t=R.value)||void 0===t||t.select(ie.value),g.each(J.value,(e=>{e.activate()})),ue())},on:_,off:I,fire:L,addChildConditions:de,removeChildConditions:ce,resetChildConditions:()=>{ce(),de()},updateConditions:M}}},se=function(e,t,a){return{component:e=>"".concat(g.upperFirst(g.camelCase(e.type)),"Element")}},de={name:"FormElements",slots:["default"],props:{view:{required:!1,type:[String],default:void 0}},setup(e,t){var{form$:n,Size:l,View:r,classesInstance:i,theme:o,classes:u,Templates:s,template:d}=P(e,t),{component:c}=se(),v=a((()=>n.value.options.schema));return{form$:n,Size:l,View:r,classesInstance:i,theme:o,classes:u,Templates:s,template:d,schema:v,component:c}}},ce=function(e,t,n){var r=t.name,{form$:i}=L(),{el$:o}={el$:v("el$")},{theme:u}=V(),{Size:s}=B(),{View:d}=N(e,t),c=a((()=>l().proxy)),p=a((()=>new E({component:r.value,component$:c,theme:u.value,config:i.value.$vueform.config,templates:m.value,view:d.value,merge:[i.value.options,o.value]}))),f=a((()=>p.value.classes)),m=a((()=>o.value.Templates)),g=a((()=>d.value&&m.value["".concat(r.value,"_").concat(d.value)]?m.value["".concat(r.value,"_").concat(d.value)]:m.value[r.value]));return{el$:o,form$:i,theme:u,Size:s,View:d,classesInstance:p,classes:f,Templates:m,template:g}},ve={name:"ElementLayout",slots:["field","label","info","description","before","between","after"],props:{multiple:{type:[Boolean],required:!1,default:!1},view:{type:[String],required:!1,default:void 0}},setup(e,t){var{form$:n,el$:l,Size:r,View:i,classesInstance:o,classes:u,Templates:s,template:d,theme:c}=ce(e,t),v=a((()=>l.value.visible));return{el$:l,form$:n,Size:r,View:i,classesInstance:o,theme:c,Templates:s,template:d,classes:u,visible:v}}},pe={name:"ElementLayoutInline",slots:["field","label","info","description","before","between","after"],setup(e,t){var{form$:n,el$:l,Size:r,View:i,classesInstance:o,classes:u,Templates:s,template:d,theme:c}=ce(e,t),v=a((()=>l.value.visible));return{el$:l,form$:n,Size:r,View:i,classesInstance:o,theme:c,Templates:s,template:d,classes:u,visible:v}}},fe={name:"ElementLoader",setup(e,t){var{el$:a,form$:n,Size:l,View:r,classesInstance:i,classes:o,Templates:u,template:s,theme:d}=ce(e,t);return{el$:a,form$:n,Size:l,View:r,classesInstance:i,theme:d,classes:o,Templates:u,template:s}}},me={name:"ElementLabelFloating",props:{visible:{type:Boolean,default:!1}},setup(e,t){var{el$:n,form$:l,Size:r,View:i,classesInstance:o,classes:u,Templates:s,template:d,theme:c}=ce(e,t),p=v("config$"),f=a((()=>ae(n.value.floating||(l.value.options.floatPlaceholders?n.value.placeholder:null),p.value,l.value)));return{el$:n,form$:l,Size:r,View:i,classesInstance:o,theme:c,classes:u,Templates:s,template:d,floating:f}}},ge={name:"ElementLabel",slots:["default","info"],setup(e,t){var{el$:n,form$:l,Size:r,View:i,classesInstance:o,classes:u,Templates:s,template:d,theme:c}=ce(e,t),{label:v,isLabelComponent:p}=ne(0,0,{labelDefinition:a((()=>n.value.label)),component$:n}),f=a((()=>n.value.fieldId)),m=a((()=>n.value.labelId)),g=a((()=>n.value.hasLabel)),h=a((()=>{var e,t,a;return!!(null!==(e=n.value.slots)&&void 0!==e&&e.label||null!==(t=n.value.$slots)&&void 0!==t&&t.label||2===l.value.$vueform.vueVersion&&null!==(a=n.value.$scopedSlots)&&void 0!==a&&a.label)}));return{el$:n,form$:l,Size:r,View:i,classesInstance:o,theme:c,classes:u,Templates:s,template:d,label:v,isLabelComponent:p,name:f,id:m,hasLabel:g,isSlot:h}}};function he(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}var ye={name:"ElementInfo",slots:["default"],setup(t,n){var{el$:l,form$:r,Size:i,View:o,classesInstance:u,classes:s,Templates:d,template:c,theme:f}=ce(t,n),m=v("config$"),g=e(l.value.infoPosition),h=a((()=>ae(l.value.info,m.value,r.value))),y=a((()=>l.value.infoId)),b=a((()=>{var e,t,a;return!!(null!==(e=l.value.slots)&&void 0!==e&&e.info||null!==(t=l.value.$slots)&&void 0!==t&&t.info||2===r.value.$vueform.vueVersion&&null!==(a=l.value.$scopedSlots)&&void 0!==a&&a.info)})),w=function(){var e=S((function*(e){if(g.value===l.value.infoPosition){yield p();var t=e.target.querySelector("div");t&&(he(t)||(g.value="right"),yield p(),he(t)||(g.value="top"),yield p(),he(t)||(g.value="left"),yield p(),he(t)||(g.value="bottom"))}}));return function(t){return e.apply(this,arguments)}}();return{el$:l,form$:r,Size:i,View:o,classesInstance:u,theme:f,classes:s,Templates:d,template:c,info:h,isSlot:b,position:g,id:y,handleMouseOver:w}}},be={name:"ElementDescription",slots:["default"],setup(e,t){var{el$:n,form$:l,Size:r,View:i,classesInstance:o,classes:u,Templates:s,template:d,theme:c}=ce(e,t),p=v("config$"),f=a((()=>ae(n.value.description,p.value,l.value))),m=a((()=>n.value.descriptionId)),g=a((()=>{var e,t,a;return!!(null!==(e=n.value.slots)&&void 0!==e&&e.description||null!==(t=n.value.$slots)&&void 0!==t&&t.description||2===l.value.$vueform.vueVersion&&null!==(a=n.value.$scopedSlots)&&void 0!==a&&a.description)}));return{el$:n,form$:l,Size:r,View:i,classesInstance:o,theme:c,classes:u,Templates:s,template:d,description:f,isSlot:g,id:m}}},we={name:"ElementError",setup(e,t){var{el$:n,form$:l,Size:r,View:i,classesInstance:o,classes:u,Templates:s,template:d,theme:c}=ce(e,t),v=a((()=>n.value.error)),p=a((()=>n.value.errorId));return{el$:n,form$:l,Size:r,View:i,classesInstance:o,theme:c,classes:u,Templates:s,template:d,error:v,id:p}}},Se={name:"ElementMessage",setup(e,t){var{el$:n,form$:l,Size:r,View:i,classesInstance:o,classes:u,Templates:s,template:d,theme:c}=ce(e,t),v=a((()=>n.value.messageBag?n.value.messageBag.message:null));return{el$:n,form$:l,Size:r,View:i,classesInstance:o,theme:c,classes:u,Templates:s,template:d,message:v}}},De={name:"ElementText",slots:["default"],props:{type:{type:String,required:!0}},setup(e,n){var{type:l}=t(e),{el$:r,form$:i,Size:o,View:u,classesInstance:s,classes:d,Templates:c,template:p,theme:f}=ce(e,n),m=v("config$"),g=a((()=>ae(r.value[l.value],m.value,i.value))),h=a((()=>{var e,t,a;return!!(null!==(e=r.value.slots)&&void 0!==e&&e[l.value]||null!==(t=r.value.$slots)&&void 0!==t&&t[l.value]||2===i.value.$vueform.vueVersion&&null!==(a=r.value.$scopedSlots)&&void 0!==a&&a[l.value])}));return{el$:r,form$:i,Size:o,View:u,classesInstance:s,theme:f,classes:d,Templates:c,template:p,content:g,isSlot:h}}},Oe={name:"DragAndDrop",emits:["click","drop"],props:{title:{type:String,required:!0},description:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1}},setup(a,n){var{disabled:l}=t(a),{el$:r,form$:i,Size:u,View:s,classesInstance:d,classes:c,Templates:v,template:p,theme:f}=ce(a,n),m=e(!1),h=e(null);return o((()=>{g.each(["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"],(e=>{h.value.addEventListener(e,(e=>{e.preventDefault(),e.stopPropagation()}))})),h.value.addEventListener("drop",(e=>{l.value||(n.emit("drop",e),m.value=!1)})),h.value.addEventListener("dragover",(e=>{l.value||!0!==m.value&&(m.value=!0)})),h.value.addEventListener("dragleave",(e=>{l.value||(m.value=!1)})),h.value.addEventListener("dragend",(e=>{l.value||(m.value=!1)}))})),{el$:r,form$:i,Size:u,View:s,classesInstance:d,classes:c,Templates:v,template:p,theme:f,dragging:m,area:h,handleClick:()=>{n.emit("click")}}}},Ce={name:"ElementAddon",slots:["default"],props:{type:{required:!0,type:String}},setup(e,n){var{type:l}=t(e),{form$:r,el$:i,Size:o,View:u,classesInstance:s,classes:d,Templates:c,template:p,theme:f}=ce(e,n),m=v("config$"),g=a((()=>i.value.addons[l.value])),h=a((()=>{var e=y.value?g.value(i.value):g.value||null;return b.value||(e=ae(e,m.value,r.value)),e})),y=a((()=>"function"==typeof g.value&&(!g.value.prototype||!g.value.prototype.constructor||g.value.prototype.constructor&&"VueComponent"!==g.value.prototype.constructor.name))),b=a((()=>te(g.value))),w=a((()=>{var e,t,a;return!!(null!==(e=i.value.slots)&&void 0!==e&&e["addon-".concat(l.value)]||null!==(t=i.value.$slots)&&void 0!==t&&t["addon-".concat(l.value)]||2===r.value.$vueform.vueVersion&&null!==(a=i.value.$scopedSlots)&&void 0!==a&&a["addon-".concat(l.value)]||i.value.slots["addon-".concat(l.value)])}));return{el$:i,form$:r,theme:f,Size:o,View:u,classesInstance:s,Templates:c,template:p,classes:d,addon:h,isAddonComponent:b,isSlot:w}}},qe=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],Ee={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(e){return"undefined"!=typeof console&&console.warn(e)},getWeek:function(e){var t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var a=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-a.getTime())/864e5-3+(a.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},xe={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},$e=function(e,t){return void 0===t&&(t=2),("000"+e).slice(-1*t)},Me=function(e){return!0===e?1:0};function Te(e,t){var a;return function(){var n=this,l=arguments;clearTimeout(a),a=setTimeout((function(){return e.apply(n,l)}),t)}}var je=function(e){return e instanceof Array?e:[e]};function Fe(e,t,a){if(!0===a)return e.classList.add(t);e.classList.remove(t)}function Ae(e,t,a){var n=window.document.createElement(e);return t=t||"",a=a||"",n.className=t,void 0!==a&&(n.textContent=a),n}function ke(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function _e(e,t){return t(e)?e:e.parentNode?_e(e.parentNode,t):void 0}function Ie(e,t){var a=Ae("div","numInputWrapper"),n=Ae("input","numInput "+e),l=Ae("span","arrowUp"),r=Ae("span","arrowDown");if(-1===navigator.userAgent.indexOf("MSIE 9.0")?n.type="number":(n.type="text",n.pattern="\\d*"),void 0!==t)for(var i in t)n.setAttribute(i,t[i]);return a.appendChild(n),a.appendChild(l),a.appendChild(r),a}function Le(e){try{return"function"==typeof e.composedPath?e.composedPath()[0]:e.target}catch(t){return e.target}}var Ve=function(){},Be=function(e,t,a){return a.months[t?"shorthand":"longhand"][e]},Ne={D:Ve,F:function(e,t,a){e.setMonth(a.months.longhand.indexOf(t))},G:function(e,t){e.setHours((e.getHours()>=12?12:0)+parseFloat(t))},H:function(e,t){e.setHours(parseFloat(t))},J:function(e,t){e.setDate(parseFloat(t))},K:function(e,t,a){e.setHours(e.getHours()%12+12*Me(new RegExp(a.amPM[1],"i").test(t)))},M:function(e,t,a){e.setMonth(a.months.shorthand.indexOf(t))},S:function(e,t){e.setSeconds(parseFloat(t))},U:function(e,t){return new Date(1e3*parseFloat(t))},W:function(e,t,a){var n=parseInt(t),l=new Date(e.getFullYear(),0,2+7*(n-1),0,0,0,0);return l.setDate(l.getDate()-l.getDay()+a.firstDayOfWeek),l},Y:function(e,t){e.setFullYear(parseFloat(t))},Z:function(e,t){return new Date(t)},d:function(e,t){e.setDate(parseFloat(t))},h:function(e,t){e.setHours((e.getHours()>=12?12:0)+parseFloat(t))},i:function(e,t){e.setMinutes(parseFloat(t))},j:function(e,t){e.setDate(parseFloat(t))},l:Ve,m:function(e,t){e.setMonth(parseFloat(t)-1)},n:function(e,t){e.setMonth(parseFloat(t)-1)},s:function(e,t){e.setSeconds(parseFloat(t))},u:function(e,t){return new Date(parseFloat(t))},w:Ve,y:function(e,t){e.setFullYear(2e3+parseFloat(t))}},Pe={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},ze={Z:function(e){return e.toISOString()},D:function(e,t,a){return t.weekdays.shorthand[ze.w(e,t,a)]},F:function(e,t,a){return Be(ze.n(e,t,a)-1,!1,t)},G:function(e,t,a){return $e(ze.h(e,t,a))},H:function(e){return $e(e.getHours())},J:function(e,t){return void 0!==t.ordinal?e.getDate()+t.ordinal(e.getDate()):e.getDate()},K:function(e,t){return t.amPM[Me(e.getHours()>11)]},M:function(e,t){return Be(e.getMonth(),!0,t)},S:function(e){return $e(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,t,a){return a.getWeek(e)},Y:function(e){return $e(e.getFullYear(),4)},d:function(e){return $e(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return $e(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,t){return t.weekdays.longhand[e.getDay()]},m:function(e){return $e(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},Ye=function(e){var t=e.config,a=void 0===t?Ee:t,n=e.l10n,l=void 0===n?xe:n,r=e.isMobile,i=void 0!==r&&r;return function(e,t,n){var r=n||l;return void 0===a.formatDate||i?t.split("").map((function(t,n,l){return ze[t]&&"\\"!==l[n-1]?ze[t](e,r,a):"\\"!==t?t:""})).join(""):a.formatDate(e,t,r)}},Re=function(e){var t=e.config,a=void 0===t?Ee:t,n=e.l10n,l=void 0===n?xe:n;return function(e,t,n,r){if(0===e||e){var i,o=r||l,u=e;if(e instanceof Date)i=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)i=new Date(e);else if("string"==typeof e){var s=t||(a||Ee).dateFormat,d=String(e).trim();if("today"===d)i=new Date,n=!0;else if(a&&a.parseDate)i=a.parseDate(e,s);else if(/Z$/.test(d)||/GMT$/.test(d))i=new Date(e);else{for(var c=void 0,v=[],p=0,f=0,m="";p<s.length;p++){var g=s[p],h="\\"===g,y="\\"===s[p-1]||h;if(Pe[g]&&!y){m+=Pe[g];var b=new RegExp(m).exec(e);b&&(c=!0)&&v["Y"!==g?"push":"unshift"]({fn:Ne[g],val:b[++f]})}else h||(m+=".")}i=a&&a.noCalendar?new Date((new Date).setHours(0,0,0,0)):new Date((new Date).getFullYear(),0,1,0,0,0,0),v.forEach((function(e){var t=e.fn,a=e.val;return i=t(i,a,o)||i})),i=c?i:void 0}}if(i instanceof Date&&!isNaN(i.getTime()))return!0===n&&i.setHours(0,0,0,0),i;a.errorHandler(new Error("Invalid date provided: "+u))}}};function Ue(e,t,a){return void 0===a&&(a=!0),!1!==a?new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):e.getTime()-t.getTime()}var He=function(e,t,a){return e>Math.min(t,a)&&e<Math.max(t,a)},We=function(e,t,a){return 3600*e+60*t+a},Ke=function(e){var t=Math.floor(e/3600),a=(e-3600*t)/60;return[t,a,e-3600*t-60*a]},Xe={DAY:864e5};function Ge(e){var t=e.defaultHour,a=e.defaultMinute,n=e.defaultSeconds;if(void 0!==e.minDate){var l=e.minDate.getHours(),r=e.minDate.getMinutes(),i=e.minDate.getSeconds();t<l&&(t=l),t===l&&a<r&&(a=r),t===l&&a===r&&n<i&&(n=e.minDate.getSeconds())}if(void 0!==e.maxDate){var o=e.maxDate.getHours(),u=e.maxDate.getMinutes();(t=Math.min(t,o))===o&&(a=Math.min(u,a)),t===o&&a===u&&(n=e.maxDate.getSeconds())}return{hours:t,minutes:a,seconds:n}}"function"!=typeof Object.assign&&(Object.assign=function(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var n=function(t){t&&Object.keys(t).forEach((function(a){return e[a]=t[a]}))},l=0,r=t;l<r.length;l++){n(r[l])}return e});var Je=function(){return Je=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},Je.apply(this,arguments)},Ze=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),l=0;for(t=0;t<a;t++)for(var r=arguments[t],i=0,o=r.length;i<o;i++,l++)n[l]=r[i];return n},Qe=300;function et(e,t){var a={config:Je(Je({},Ee),at.defaultConfig),l10n:xe};function n(){var e;return(null===(e=a.calendarContainer)||void 0===e?void 0:e.getRootNode()).activeElement||document.activeElement}function l(e){return e.bind(a)}function r(){var e=a.config;!1===e.weekNumbers&&1===e.showMonths||!0!==e.noCalendar&&window.requestAnimationFrame((function(){if(void 0!==a.calendarContainer&&(a.calendarContainer.style.visibility="hidden",a.calendarContainer.style.display="block"),void 0!==a.daysContainer){var t=(a.days.offsetWidth+1)*e.showMonths;a.daysContainer.style.width=t+"px",a.calendarContainer.style.width=t+(void 0!==a.weekWrapper?a.weekWrapper.offsetWidth:0)+"px",a.calendarContainer.style.removeProperty("visibility"),a.calendarContainer.style.removeProperty("display")}}))}function i(e){if(0===a.selectedDates.length){var t=void 0===a.config.minDate||Ue(new Date,a.config.minDate)>=0?new Date:new Date(a.config.minDate.getTime()),n=Ge(a.config);t.setHours(n.hours,n.minutes,n.seconds,t.getMilliseconds()),a.selectedDates=[t],a.latestSelectedDateObj=t}void 0!==e&&"blur"!==e.type&&function(e){e.preventDefault();var t="keydown"===e.type,n=Le(e),l=n;void 0!==a.amPM&&n===a.amPM&&(a.amPM.textContent=a.l10n.amPM[Me(a.amPM.textContent===a.l10n.amPM[0])]);var r=parseFloat(l.getAttribute("min")),i=parseFloat(l.getAttribute("max")),o=parseFloat(l.getAttribute("step")),u=parseInt(l.value,10),s=e.delta||(t?38===e.which?1:-1:0),d=u+o*s;if(void 0!==l.value&&2===l.value.length){var c=l===a.hourElement,v=l===a.minuteElement;d<r?(d=i+d+Me(!c)+(Me(c)&&Me(!a.amPM)),v&&m(void 0,-1,a.hourElement)):d>i&&(d=l===a.hourElement?d-i-Me(!a.amPM):r,v&&m(void 0,1,a.hourElement)),a.amPM&&c&&(1===o?d+u===23:Math.abs(d-u)>o)&&(a.amPM.textContent=a.l10n.amPM[Me(a.amPM.textContent===a.l10n.amPM[0])]),l.value=$e(d)}}(e);var l=a._input.value;o(),Q(),a._input.value!==l&&a._debouncedChange()}function o(){if(void 0!==a.hourElement&&void 0!==a.minuteElement){var e,t,n=(parseInt(a.hourElement.value.slice(-2),10)||0)%24,l=(parseInt(a.minuteElement.value,10)||0)%60,r=void 0!==a.secondElement?(parseInt(a.secondElement.value,10)||0)%60:0;void 0!==a.amPM&&(e=n,t=a.amPM.textContent,n=e%12+12*Me(t===a.l10n.amPM[1]));var i=void 0!==a.config.minTime||a.config.minDate&&a.minDateHasTime&&a.latestSelectedDateObj&&0===Ue(a.latestSelectedDateObj,a.config.minDate,!0),o=void 0!==a.config.maxTime||a.config.maxDate&&a.maxDateHasTime&&a.latestSelectedDateObj&&0===Ue(a.latestSelectedDateObj,a.config.maxDate,!0);if(void 0!==a.config.maxTime&&void 0!==a.config.minTime&&a.config.minTime>a.config.maxTime){var u=We(a.config.minTime.getHours(),a.config.minTime.getMinutes(),a.config.minTime.getSeconds()),d=We(a.config.maxTime.getHours(),a.config.maxTime.getMinutes(),a.config.maxTime.getSeconds()),c=We(n,l,r);if(c>d&&c<u){var v=Ke(u);n=v[0],l=v[1],r=v[2]}}else{if(o){var p=void 0!==a.config.maxTime?a.config.maxTime:a.config.maxDate;(n=Math.min(n,p.getHours()))===p.getHours()&&(l=Math.min(l,p.getMinutes())),l===p.getMinutes()&&(r=Math.min(r,p.getSeconds()))}if(i){var f=void 0!==a.config.minTime?a.config.minTime:a.config.minDate;(n=Math.max(n,f.getHours()))===f.getHours()&&l<f.getMinutes()&&(l=f.getMinutes()),l===f.getMinutes()&&(r=Math.max(r,f.getSeconds()))}}s(n,l,r)}}function u(e){var t=e||a.latestSelectedDateObj;t&&t instanceof Date&&s(t.getHours(),t.getMinutes(),t.getSeconds())}function s(e,t,n){void 0!==a.latestSelectedDateObj&&a.latestSelectedDateObj.setHours(e%24,t,n||0,0),a.hourElement&&a.minuteElement&&!a.isMobile&&(a.hourElement.value=$e(a.config.time_24hr?e:(12+e)%12+12*Me(e%12==0)),a.minuteElement.value=$e(t),void 0!==a.amPM&&(a.amPM.textContent=a.l10n.amPM[Me(e>=12)]),void 0!==a.secondElement&&(a.secondElement.value=$e(n)))}function d(e){var t=Le(e),a=parseInt(t.value)+(e.delta||0);(a/1e3>1||"Enter"===e.key&&!/[^\d]/.test(a.toString()))&&T(a)}function c(e,t,n,l){return t instanceof Array?t.forEach((function(t){return c(e,t,n,l)})):e instanceof Array?e.forEach((function(e){return c(e,t,n,l)})):(e.addEventListener(t,n,l),void a._handlers.push({remove:function(){return e.removeEventListener(t,n,l)}}))}function v(){K("onChange")}function p(e,t){var n=void 0!==e?a.parseDate(e):a.latestSelectedDateObj||(a.config.minDate&&a.config.minDate>a.now?a.config.minDate:a.config.maxDate&&a.config.maxDate<a.now?a.config.maxDate:a.now),l=a.currentYear,r=a.currentMonth;try{void 0!==n&&(a.currentYear=n.getFullYear(),a.currentMonth=n.getMonth())}catch(e){e.message="Invalid date supplied: "+n,a.config.errorHandler(e)}t&&a.currentYear!==l&&(K("onYearChange"),D()),!t||a.currentYear===l&&a.currentMonth===r||K("onMonthChange"),a.redraw()}function f(e){var t=Le(e);~t.className.indexOf("arrow")&&m(e,t.classList.contains("arrowUp")?1:-1)}function m(e,t,a){var n=e&&Le(e),l=a||n&&n.parentNode&&n.parentNode.firstChild,r=X("increment");r.delta=t,l&&l.dispatchEvent(r)}function g(e,t,n,l){var r=j(t,!0),i=Ae("span",e,t.getDate().toString());return i.dateObj=t,i.$i=l,i.setAttribute("aria-label",a.formatDate(t,a.config.ariaDateFormat)),-1===e.indexOf("hidden")&&0===Ue(t,a.now)&&(a.todayDateElem=i,i.classList.add("today"),i.setAttribute("aria-current","date")),r?(i.tabIndex=-1,G(t)&&(i.classList.add("selected"),a.selectedDateElem=i,"range"===a.config.mode&&(Fe(i,"startRange",a.selectedDates[0]&&0===Ue(t,a.selectedDates[0],!0)),Fe(i,"endRange",a.selectedDates[1]&&0===Ue(t,a.selectedDates[1],!0)),"nextMonthDay"===e&&i.classList.add("inRange")))):i.classList.add("flatpickr-disabled"),"range"===a.config.mode&&function(e){return!("range"!==a.config.mode||a.selectedDates.length<2)&&(Ue(e,a.selectedDates[0])>=0&&Ue(e,a.selectedDates[1])<=0)}(t)&&!G(t)&&i.classList.add("inRange"),a.weekNumbers&&1===a.config.showMonths&&"prevMonthDay"!==e&&l%7==6&&a.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+a.config.getWeek(t)+"</span>"),K("onDayCreate",i),i}function h(e){e.focus(),"range"===a.config.mode&&_(e)}function y(e){for(var t=e>0?0:a.config.showMonths-1,n=e>0?a.config.showMonths:-1,l=t;l!=n;l+=e)for(var r=a.daysContainer.children[l],i=e>0?0:r.children.length-1,o=e>0?r.children.length:-1,u=i;u!=o;u+=e){var s=r.children[u];if(-1===s.className.indexOf("hidden")&&j(s.dateObj))return s}}function b(e,t){var l=n(),r=F(l||document.body),i=void 0!==e?e:r?l:void 0!==a.selectedDateElem&&F(a.selectedDateElem)?a.selectedDateElem:void 0!==a.todayDateElem&&F(a.todayDateElem)?a.todayDateElem:y(t>0?1:-1);void 0===i?a._input.focus():r?function(e,t){for(var n=-1===e.className.indexOf("Month")?e.dateObj.getMonth():a.currentMonth,l=t>0?a.config.showMonths:-1,r=t>0?1:-1,i=n-a.currentMonth;i!=l;i+=r)for(var o=a.daysContainer.children[i],u=n-a.currentMonth===i?e.$i+t:t<0?o.children.length-1:0,s=o.children.length,d=u;d>=0&&d<s&&d!=(t>0?s:-1);d+=r){var c=o.children[d];if(-1===c.className.indexOf("hidden")&&j(c.dateObj)&&Math.abs(e.$i-d)>=Math.abs(t))return h(c)}a.changeMonth(r),b(y(r),0)}(i,t):h(i)}function w(e,t){for(var n=(new Date(e,t,1).getDay()-a.l10n.firstDayOfWeek+7)%7,l=a.utils.getDaysInMonth((t-1+12)%12,e),r=a.utils.getDaysInMonth(t,e),i=window.document.createDocumentFragment(),o=a.config.showMonths>1,u=o?"prevMonthDay hidden":"prevMonthDay",s=o?"nextMonthDay hidden":"nextMonthDay",d=l+1-n,c=0;d<=l;d++,c++)i.appendChild(g("flatpickr-day "+u,new Date(e,t-1,d),0,c));for(d=1;d<=r;d++,c++)i.appendChild(g("flatpickr-day",new Date(e,t,d),0,c));for(var v=r+1;v<=42-n&&(1===a.config.showMonths||c%7!=0);v++,c++)i.appendChild(g("flatpickr-day "+s,new Date(e,t+1,v%r),0,c));var p=Ae("div","dayContainer");return p.appendChild(i),p}function S(){if(void 0!==a.daysContainer){ke(a.daysContainer),a.weekNumbers&&ke(a.weekNumbers);for(var e=document.createDocumentFragment(),t=0;t<a.config.showMonths;t++){var n=new Date(a.currentYear,a.currentMonth,1);n.setMonth(a.currentMonth+t),e.appendChild(w(n.getFullYear(),n.getMonth()))}a.daysContainer.appendChild(e),a.days=a.daysContainer.firstChild,"range"===a.config.mode&&1===a.selectedDates.length&&_()}}function D(){if(!(a.config.showMonths>1||"dropdown"!==a.config.monthSelectorType)){var e=function(e){return!(void 0!==a.config.minDate&&a.currentYear===a.config.minDate.getFullYear()&&e<a.config.minDate.getMonth())&&!(void 0!==a.config.maxDate&&a.currentYear===a.config.maxDate.getFullYear()&&e>a.config.maxDate.getMonth())};a.monthsDropdownContainer.tabIndex=-1,a.monthsDropdownContainer.innerHTML="";for(var t=0;t<12;t++)if(e(t)){var n=Ae("option","flatpickr-monthDropdown-month");n.value=new Date(a.currentYear,t).getMonth().toString(),n.textContent=Be(t,a.config.shorthandCurrentMonth,a.l10n),n.tabIndex=-1,a.currentMonth===t&&(n.selected=!0),a.monthsDropdownContainer.appendChild(n)}}}function O(){var e,t=Ae("div","flatpickr-month"),n=window.document.createDocumentFragment();a.config.showMonths>1||"static"===a.config.monthSelectorType?e=Ae("span","cur-month"):(a.monthsDropdownContainer=Ae("select","flatpickr-monthDropdown-months"),a.monthsDropdownContainer.setAttribute("aria-label",a.l10n.monthAriaLabel),c(a.monthsDropdownContainer,"change",(function(e){var t=Le(e),n=parseInt(t.value,10);a.changeMonth(n-a.currentMonth),K("onMonthChange")})),D(),e=a.monthsDropdownContainer);var l=Ie("cur-year",{tabindex:"-1"}),r=l.getElementsByTagName("input")[0];r.setAttribute("aria-label",a.l10n.yearAriaLabel),a.config.minDate&&r.setAttribute("min",a.config.minDate.getFullYear().toString()),a.config.maxDate&&(r.setAttribute("max",a.config.maxDate.getFullYear().toString()),r.disabled=!!a.config.minDate&&a.config.minDate.getFullYear()===a.config.maxDate.getFullYear());var i=Ae("div","flatpickr-current-month");return i.appendChild(e),i.appendChild(l),n.appendChild(i),t.appendChild(n),{container:t,yearElement:r,monthElement:e}}function C(){ke(a.monthNav),a.monthNav.appendChild(a.prevMonthNav),a.config.showMonths&&(a.yearElements=[],a.monthElements=[]);for(var e=a.config.showMonths;e--;){var t=O();a.yearElements.push(t.yearElement),a.monthElements.push(t.monthElement),a.monthNav.appendChild(t.container)}a.monthNav.appendChild(a.nextMonthNav)}function q(){a.weekdayContainer?ke(a.weekdayContainer):a.weekdayContainer=Ae("div","flatpickr-weekdays");for(var e=a.config.showMonths;e--;){var t=Ae("div","flatpickr-weekdaycontainer");a.weekdayContainer.appendChild(t)}return E(),a.weekdayContainer}function E(){if(a.weekdayContainer){var e=a.l10n.firstDayOfWeek,t=Ze(a.l10n.weekdays.shorthand);e>0&&e<t.length&&(t=Ze(t.splice(e,t.length),t.splice(0,e)));for(var n=a.config.showMonths;n--;)a.weekdayContainer.children[n].innerHTML="\n      <span class='flatpickr-weekday'>\n        "+t.join("</span><span class='flatpickr-weekday'>")+"\n      </span>\n      "}}function x(e,t){void 0===t&&(t=!0);var n=t?e:e-a.currentMonth;n<0&&!0===a._hidePrevMonthArrow||n>0&&!0===a._hideNextMonthArrow||(a.currentMonth+=n,(a.currentMonth<0||a.currentMonth>11)&&(a.currentYear+=a.currentMonth>11?1:-1,a.currentMonth=(a.currentMonth+12)%12,K("onYearChange"),D()),S(),K("onMonthChange"),J())}function $(e){return a.calendarContainer.contains(e)}function M(e){if(a.isOpen&&!a.config.inline){var t=Le(e),n=$(t),l=!(t===a.input||t===a.altInput||a.element.contains(t)||e.path&&e.path.indexOf&&(~e.path.indexOf(a.input)||~e.path.indexOf(a.altInput)))&&!n&&!$(e.relatedTarget),r=!a.config.ignoredFocusElements.some((function(e){return e.contains(t)}));l&&r&&(a.config.allowInput&&a.setDate(a._input.value,!1,a.config.altInput?a.config.altFormat:a.config.dateFormat),void 0!==a.timeContainer&&void 0!==a.minuteElement&&void 0!==a.hourElement&&""!==a.input.value&&void 0!==a.input.value&&i(),a.close(),a.config&&"range"===a.config.mode&&1===a.selectedDates.length&&a.clear(!1))}}function T(e){if(!(!e||a.config.minDate&&e<a.config.minDate.getFullYear()||a.config.maxDate&&e>a.config.maxDate.getFullYear())){var t=e,n=a.currentYear!==t;a.currentYear=t||a.currentYear,a.config.maxDate&&a.currentYear===a.config.maxDate.getFullYear()?a.currentMonth=Math.min(a.config.maxDate.getMonth(),a.currentMonth):a.config.minDate&&a.currentYear===a.config.minDate.getFullYear()&&(a.currentMonth=Math.max(a.config.minDate.getMonth(),a.currentMonth)),n&&(a.redraw(),K("onYearChange"),D())}}function j(e,t){var n;void 0===t&&(t=!0);var l=a.parseDate(e,void 0,t);if(a.config.minDate&&l&&Ue(l,a.config.minDate,void 0!==t?t:!a.minDateHasTime)<0||a.config.maxDate&&l&&Ue(l,a.config.maxDate,void 0!==t?t:!a.maxDateHasTime)>0)return!1;if(!a.config.enable&&0===a.config.disable.length)return!0;if(void 0===l)return!1;for(var r=!!a.config.enable,i=null!==(n=a.config.enable)&&void 0!==n?n:a.config.disable,o=0,u=void 0;o<i.length;o++){if("function"==typeof(u=i[o])&&u(l))return r;if(u instanceof Date&&void 0!==l&&u.getTime()===l.getTime())return r;if("string"==typeof u){var s=a.parseDate(u,void 0,!0);return s&&s.getTime()===l.getTime()?r:!r}if("object"==typeof u&&void 0!==l&&u.from&&u.to&&l.getTime()>=u.from.getTime()&&l.getTime()<=u.to.getTime())return r}return!r}function F(e){return void 0!==a.daysContainer&&(-1===e.className.indexOf("hidden")&&-1===e.className.indexOf("flatpickr-disabled")&&a.daysContainer.contains(e))}function A(e){var t=e.target===a._input,n=a._input.value.trimEnd()!==Z();!t||!n||e.relatedTarget&&$(e.relatedTarget)||a.setDate(a._input.value,!0,e.target===a.altInput?a.config.altFormat:a.config.dateFormat)}function k(t){var l=Le(t),r=a.config.wrap?e.contains(l):l===a._input,u=a.config.allowInput,s=a.isOpen&&(!u||!r),d=a.config.inline&&r&&!u;if(13===t.keyCode&&r){if(u)return a.setDate(a._input.value,!0,l===a.altInput?a.config.altFormat:a.config.dateFormat),a.close(),l.blur();a.open()}else if($(l)||s||d){var c=!!a.timeContainer&&a.timeContainer.contains(l);switch(t.keyCode){case 13:c?(t.preventDefault(),i(),z()):Y(t);break;case 27:t.preventDefault(),z();break;case 8:case 46:r&&!a.config.allowInput&&(t.preventDefault(),a.clear());break;case 37:case 39:if(c||r)a.hourElement&&a.hourElement.focus();else{t.preventDefault();var v=n();if(void 0!==a.daysContainer&&(!1===u||v&&F(v))){var p=39===t.keyCode?1:-1;t.ctrlKey?(t.stopPropagation(),x(p),b(y(1),0)):b(void 0,p)}}break;case 38:case 40:t.preventDefault();var f=40===t.keyCode?1:-1;a.daysContainer&&void 0!==l.$i||l===a.input||l===a.altInput?t.ctrlKey?(t.stopPropagation(),T(a.currentYear-f),b(y(1),0)):c||b(void 0,7*f):l===a.currentYearElement?T(a.currentYear-f):a.config.enableTime&&(!c&&a.hourElement&&a.hourElement.focus(),i(t),a._debouncedChange());break;case 9:if(c){var m=[a.hourElement,a.minuteElement,a.secondElement,a.amPM].concat(a.pluginElements).filter((function(e){return e})),g=m.indexOf(l);if(-1!==g){var h=m[g+(t.shiftKey?-1:1)];t.preventDefault(),(h||a._input).focus()}}else!a.config.noCalendar&&a.daysContainer&&a.daysContainer.contains(l)&&t.shiftKey&&(t.preventDefault(),a._input.focus())}}if(void 0!==a.amPM&&l===a.amPM)switch(t.key){case a.l10n.amPM[0].charAt(0):case a.l10n.amPM[0].charAt(0).toLowerCase():a.amPM.textContent=a.l10n.amPM[0],o(),Q();break;case a.l10n.amPM[1].charAt(0):case a.l10n.amPM[1].charAt(0).toLowerCase():a.amPM.textContent=a.l10n.amPM[1],o(),Q()}(r||$(l))&&K("onKeyDown",t)}function _(e,t){if(void 0===t&&(t="flatpickr-day"),1===a.selectedDates.length&&(!e||e.classList.contains(t)&&!e.classList.contains("flatpickr-disabled"))){for(var n=e?e.dateObj.getTime():a.days.firstElementChild.dateObj.getTime(),l=a.parseDate(a.selectedDates[0],void 0,!0).getTime(),r=Math.min(n,a.selectedDates[0].getTime()),i=Math.max(n,a.selectedDates[0].getTime()),o=!1,u=0,s=0,d=r;d<i;d+=Xe.DAY)j(new Date(d),!0)||(o=o||d>r&&d<i,d<l&&(!u||d>u)?u=d:d>l&&(!s||d<s)&&(s=d));Array.from(a.rContainer.querySelectorAll("*:nth-child(-n+"+a.config.showMonths+") > ."+t)).forEach((function(t){var r=t.dateObj.getTime(),i=u>0&&r<u||s>0&&r>s;if(i)return t.classList.add("notAllowed"),void["inRange","startRange","endRange"].forEach((function(e){t.classList.remove(e)}));o&&!i||(["startRange","inRange","endRange","notAllowed"].forEach((function(e){t.classList.remove(e)})),void 0!==e&&(e.classList.add(n<=a.selectedDates[0].getTime()?"startRange":"endRange"),l<n&&r===l?t.classList.add("startRange"):l>n&&r===l&&t.classList.add("endRange"),r>=u&&(0===s||r<=s)&&He(r,l,n)&&t.classList.add("inRange")))}))}}function I(){!a.isOpen||a.config.static||a.config.inline||N()}function L(e){return function(t){var n=a.config["_"+e+"Date"]=a.parseDate(t,a.config.dateFormat),l=a.config["_"+("min"===e?"max":"min")+"Date"];void 0!==n&&(a["min"===e?"minDateHasTime":"maxDateHasTime"]=n.getHours()>0||n.getMinutes()>0||n.getSeconds()>0),a.selectedDates&&(a.selectedDates=a.selectedDates.filter((function(e){return j(e)})),a.selectedDates.length||"min"!==e||u(n),Q()),a.daysContainer&&(P(),void 0!==n?a.currentYearElement[e]=n.getFullYear().toString():a.currentYearElement.removeAttribute(e),a.currentYearElement.disabled=!!l&&void 0!==n&&l.getFullYear()===n.getFullYear())}}function V(){return a.config.wrap?e.querySelector("[data-input]"):e}function B(){"object"!=typeof a.config.locale&&void 0===at.l10ns[a.config.locale]&&a.config.errorHandler(new Error("flatpickr: invalid locale "+a.config.locale)),a.l10n=Je(Je({},at.l10ns.default),"object"==typeof a.config.locale?a.config.locale:"default"!==a.config.locale?at.l10ns[a.config.locale]:void 0),Pe.D="("+a.l10n.weekdays.shorthand.join("|")+")",Pe.l="("+a.l10n.weekdays.longhand.join("|")+")",Pe.M="("+a.l10n.months.shorthand.join("|")+")",Pe.F="("+a.l10n.months.longhand.join("|")+")",Pe.K="("+a.l10n.amPM[0]+"|"+a.l10n.amPM[1]+"|"+a.l10n.amPM[0].toLowerCase()+"|"+a.l10n.amPM[1].toLowerCase()+")",void 0===Je(Je({},t),JSON.parse(JSON.stringify(e.dataset||{}))).time_24hr&&void 0===at.defaultConfig.time_24hr&&(a.config.time_24hr=a.l10n.time_24hr),a.formatDate=Ye(a),a.parseDate=Re({config:a.config,l10n:a.l10n})}function N(e){if("function"!=typeof a.config.position){if(void 0!==a.calendarContainer){K("onPreCalendarPosition");var t=e||a._positionElement,n=Array.prototype.reduce.call(a.calendarContainer.children,(function(e,t){return e+t.offsetHeight}),0),l=a.calendarContainer.offsetWidth,r=a.config.position.split(" "),i=r[0],o=r.length>1?r[1]:null,u=t.getBoundingClientRect(),s=window.innerHeight-u.bottom,d="above"===i||"below"!==i&&s<n&&u.top>n,c=window.pageYOffset+u.top+(d?-n-2:t.offsetHeight+2);if(Fe(a.calendarContainer,"arrowTop",!d),Fe(a.calendarContainer,"arrowBottom",d),!a.config.inline){var v=window.pageXOffset+u.left,p=!1,f=!1;"center"===o?(v-=(l-u.width)/2,p=!0):"right"===o&&(v-=l-u.width,f=!0),Fe(a.calendarContainer,"arrowLeft",!p&&!f),Fe(a.calendarContainer,"arrowCenter",p),Fe(a.calendarContainer,"arrowRight",f);var m=window.document.body.offsetWidth-(window.pageXOffset+u.right),g=v+l>window.document.body.offsetWidth,h=m+l>window.document.body.offsetWidth;if(Fe(a.calendarContainer,"rightMost",g),!a.config.static)if(a.calendarContainer.style.top=c+"px",g)if(h){var y=function(){for(var e=null,t=0;t<document.styleSheets.length;t++){var a=document.styleSheets[t];if(a.cssRules){try{a.cssRules}catch(e){continue}e=a;break}}return null!=e?e:(n=document.createElement("style"),document.head.appendChild(n),n.sheet);var n}();if(void 0===y)return;var b=window.document.body.offsetWidth,w=Math.max(0,b/2-l/2),S=y.cssRules.length,D="{left:"+u.left+"px;right:auto;}";Fe(a.calendarContainer,"rightMost",!1),Fe(a.calendarContainer,"centerMost",!0),y.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+D,S),a.calendarContainer.style.left=w+"px",a.calendarContainer.style.right="auto"}else a.calendarContainer.style.left="auto",a.calendarContainer.style.right=m+"px";else a.calendarContainer.style.left=v+"px",a.calendarContainer.style.right="auto"}}}else a.config.position(a,e)}function P(){a.config.noCalendar||a.isMobile||(D(),J(),S())}function z(){a._input.focus(),-1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(a.close,0):a.close()}function Y(e){e.preventDefault(),e.stopPropagation();var t=_e(Le(e),(function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled")&&!e.classList.contains("notAllowed")}));if(void 0!==t){var n=t,l=a.latestSelectedDateObj=new Date(n.dateObj.getTime()),r=(l.getMonth()<a.currentMonth||l.getMonth()>a.currentMonth+a.config.showMonths-1)&&"range"!==a.config.mode;if(a.selectedDateElem=n,"single"===a.config.mode)a.selectedDates=[l];else if("multiple"===a.config.mode){var i=G(l);i?a.selectedDates.splice(parseInt(i),1):a.selectedDates.push(l)}else"range"===a.config.mode&&(2===a.selectedDates.length&&a.clear(!1,!1),a.latestSelectedDateObj=l,a.selectedDates.push(l),0!==Ue(l,a.selectedDates[0],!0)&&a.selectedDates.sort((function(e,t){return e.getTime()-t.getTime()})));if(o(),r){var u=a.currentYear!==l.getFullYear();a.currentYear=l.getFullYear(),a.currentMonth=l.getMonth(),u&&(K("onYearChange"),D()),K("onMonthChange")}if(J(),S(),Q(),r||"range"===a.config.mode||1!==a.config.showMonths?void 0!==a.selectedDateElem&&void 0===a.hourElement&&a.selectedDateElem&&a.selectedDateElem.focus():h(n),void 0!==a.hourElement&&void 0!==a.hourElement&&a.hourElement.focus(),a.config.closeOnSelect){var s="single"===a.config.mode&&!a.config.enableTime,d="range"===a.config.mode&&2===a.selectedDates.length&&!a.config.enableTime;(s||d)&&z()}v()}}a.parseDate=Re({config:a.config,l10n:a.l10n}),a._handlers=[],a.pluginElements=[],a.loadedPlugins=[],a._bind=c,a._setHoursFromDate=u,a._positionCalendar=N,a.changeMonth=x,a.changeYear=T,a.clear=function(e,t){void 0===e&&(e=!0);void 0===t&&(t=!0);a.input.value="",void 0!==a.altInput&&(a.altInput.value="");void 0!==a.mobileInput&&(a.mobileInput.value="");a.selectedDates=[],a.latestSelectedDateObj=void 0,!0===t&&(a.currentYear=a._initialDate.getFullYear(),a.currentMonth=a._initialDate.getMonth());if(!0===a.config.enableTime){var n=Ge(a.config);s(n.hours,n.minutes,n.seconds)}a.redraw(),e&&K("onChange")},a.close=function(){a.isOpen=!1,a.isMobile||(void 0!==a.calendarContainer&&a.calendarContainer.classList.remove("open"),void 0!==a._input&&a._input.classList.remove("active"));K("onClose")},a.onMouseOver=_,a._createElement=Ae,a.createDay=g,a.destroy=function(){void 0!==a.config&&K("onDestroy");for(var e=a._handlers.length;e--;)a._handlers[e].remove();if(a._handlers=[],a.mobileInput)a.mobileInput.parentNode&&a.mobileInput.parentNode.removeChild(a.mobileInput),a.mobileInput=void 0;else if(a.calendarContainer&&a.calendarContainer.parentNode)if(a.config.static&&a.calendarContainer.parentNode){var t=a.calendarContainer.parentNode;if(t.lastChild&&t.removeChild(t.lastChild),t.parentNode){for(;t.firstChild;)t.parentNode.insertBefore(t.firstChild,t);t.parentNode.removeChild(t)}}else a.calendarContainer.parentNode.removeChild(a.calendarContainer);a.altInput&&(a.input.type="text",a.altInput.parentNode&&a.altInput.parentNode.removeChild(a.altInput),delete a.altInput);a.input&&(a.input.type=a.input._type,a.input.classList.remove("flatpickr-input"),a.input.removeAttribute("readonly"));["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach((function(e){try{delete a[e]}catch(e){}}))},a.isEnabled=j,a.jumpToDate=p,a.updateValue=Q,a.open=function(e,t){void 0===t&&(t=a._positionElement);if(!0===a.isMobile){if(e){e.preventDefault();var n=Le(e);n&&n.blur()}return void 0!==a.mobileInput&&(a.mobileInput.focus(),a.mobileInput.click()),void K("onOpen")}if(a._input.disabled||a.config.inline)return;var l=a.isOpen;a.isOpen=!0,l||(a.calendarContainer.classList.add("open"),a._input.classList.add("active"),K("onOpen"),N(t));!0===a.config.enableTime&&!0===a.config.noCalendar&&(!1!==a.config.allowInput||void 0!==e&&a.timeContainer.contains(e.relatedTarget)||setTimeout((function(){return a.hourElement.select()}),50))},a.redraw=P,a.set=function(e,t){if(null!==e&&"object"==typeof e)for(var n in Object.assign(a.config,e),e)void 0!==R[n]&&R[n].forEach((function(e){return e()}));else a.config[e]=t,void 0!==R[e]?R[e].forEach((function(e){return e()})):qe.indexOf(e)>-1&&(a.config[e]=je(t));a.redraw(),Q(!0)},a.setDate=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=a.config.dateFormat);if(0!==e&&!e||e instanceof Array&&0===e.length)return a.clear(t);U(e,n),a.latestSelectedDateObj=a.selectedDates[a.selectedDates.length-1],a.redraw(),p(void 0,t),u(),0===a.selectedDates.length&&a.clear(!1);Q(t),t&&K("onChange")},a.toggle=function(e){if(!0===a.isOpen)return a.close();a.open(e)};var R={locale:[B,E],showMonths:[C,r,q],minDate:[p],maxDate:[p],positionElement:[W],clickOpens:[function(){!0===a.config.clickOpens?(c(a._input,"focus",a.open),c(a._input,"click",a.open)):(a._input.removeEventListener("focus",a.open),a._input.removeEventListener("click",a.open))}]};function U(e,t){var n=[];if(e instanceof Array)n=e.map((function(e){return a.parseDate(e,t)}));else if(e instanceof Date||"number"==typeof e)n=[a.parseDate(e,t)];else if("string"==typeof e)switch(a.config.mode){case"single":case"time":n=[a.parseDate(e,t)];break;case"multiple":n=e.split(a.config.conjunction).map((function(e){return a.parseDate(e,t)}));break;case"range":n=e.split(a.l10n.rangeSeparator).map((function(e){return a.parseDate(e,t)}))}else a.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(e)));a.selectedDates=a.config.allowInvalidPreload?n:n.filter((function(e){return e instanceof Date&&j(e,!1)})),"range"===a.config.mode&&a.selectedDates.sort((function(e,t){return e.getTime()-t.getTime()}))}function H(e){return e.slice().map((function(e){return"string"==typeof e||"number"==typeof e||e instanceof Date?a.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:a.parseDate(e.from,void 0),to:a.parseDate(e.to,void 0)}:e})).filter((function(e){return e}))}function W(){a._positionElement=a.config.positionElement||a._input}function K(e,t){if(void 0!==a.config){var n=a.config[e];if(void 0!==n&&n.length>0)for(var l=0;n[l]&&l<n.length;l++)n[l](a.selectedDates,a.input.value,a,t);"onChange"===e&&(a.input.dispatchEvent(X("change")),a.input.dispatchEvent(X("input")))}}function X(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function G(e){for(var t=0;t<a.selectedDates.length;t++){var n=a.selectedDates[t];if(n instanceof Date&&0===Ue(n,e))return""+t}return!1}function J(){a.config.noCalendar||a.isMobile||!a.monthNav||(a.yearElements.forEach((function(e,t){var n=new Date(a.currentYear,a.currentMonth,1);n.setMonth(a.currentMonth+t),a.config.showMonths>1||"static"===a.config.monthSelectorType?a.monthElements[t].textContent=Be(n.getMonth(),a.config.shorthandCurrentMonth,a.l10n)+" ":a.monthsDropdownContainer.value=n.getMonth().toString(),e.value=n.getFullYear().toString()})),a._hidePrevMonthArrow=void 0!==a.config.minDate&&(a.currentYear===a.config.minDate.getFullYear()?a.currentMonth<=a.config.minDate.getMonth():a.currentYear<a.config.minDate.getFullYear()),a._hideNextMonthArrow=void 0!==a.config.maxDate&&(a.currentYear===a.config.maxDate.getFullYear()?a.currentMonth+1>a.config.maxDate.getMonth():a.currentYear>a.config.maxDate.getFullYear()))}function Z(e){var t=e||(a.config.altInput?a.config.altFormat:a.config.dateFormat);return a.selectedDates.map((function(e){return a.formatDate(e,t)})).filter((function(e,t,n){return"range"!==a.config.mode||a.config.enableTime||n.indexOf(e)===t})).join("range"!==a.config.mode?a.config.conjunction:a.l10n.rangeSeparator)}function Q(e){void 0===e&&(e=!0),void 0!==a.mobileInput&&a.mobileFormatStr&&(a.mobileInput.value=void 0!==a.latestSelectedDateObj?a.formatDate(a.latestSelectedDateObj,a.mobileFormatStr):""),a.input.value=Z(a.config.dateFormat),void 0!==a.altInput&&(a.altInput.value=Z(a.config.altFormat)),!1!==e&&K("onValueUpdate")}function ee(e){var t=Le(e),n=a.prevMonthNav.contains(t),l=a.nextMonthNav.contains(t);n||l?x(n?-1:1):a.yearElements.indexOf(t)>=0?t.select():t.classList.contains("arrowUp")?a.changeYear(a.currentYear+1):t.classList.contains("arrowDown")&&a.changeYear(a.currentYear-1)}return function(){a.element=a.input=e,a.isOpen=!1,function(){var n=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],r=Je(Je({},JSON.parse(JSON.stringify(e.dataset||{}))),t),i={};a.config.parseDate=r.parseDate,a.config.formatDate=r.formatDate,Object.defineProperty(a.config,"enable",{get:function(){return a.config._enable},set:function(e){a.config._enable=H(e)}}),Object.defineProperty(a.config,"disable",{get:function(){return a.config._disable},set:function(e){a.config._disable=H(e)}});var o="time"===r.mode;if(!r.dateFormat&&(r.enableTime||o)){var u=at.defaultConfig.dateFormat||Ee.dateFormat;i.dateFormat=r.noCalendar||o?"H:i"+(r.enableSeconds?":S":""):u+" H:i"+(r.enableSeconds?":S":"")}if(r.altInput&&(r.enableTime||o)&&!r.altFormat){var s=at.defaultConfig.altFormat||Ee.altFormat;i.altFormat=r.noCalendar||o?"h:i"+(r.enableSeconds?":S K":" K"):s+" h:i"+(r.enableSeconds?":S":"")+" K"}Object.defineProperty(a.config,"minDate",{get:function(){return a.config._minDate},set:L("min")}),Object.defineProperty(a.config,"maxDate",{get:function(){return a.config._maxDate},set:L("max")});var d=function(e){return function(t){a.config["min"===e?"_minTime":"_maxTime"]=a.parseDate(t,"H:i:S")}};Object.defineProperty(a.config,"minTime",{get:function(){return a.config._minTime},set:d("min")}),Object.defineProperty(a.config,"maxTime",{get:function(){return a.config._maxTime},set:d("max")}),"time"===r.mode&&(a.config.noCalendar=!0,a.config.enableTime=!0);Object.assign(a.config,i,r);for(var c=0;c<n.length;c++)a.config[n[c]]=!0===a.config[n[c]]||"true"===a.config[n[c]];qe.filter((function(e){return void 0!==a.config[e]})).forEach((function(e){a.config[e]=je(a.config[e]||[]).map(l)})),a.isMobile=!a.config.disableMobile&&!a.config.inline&&"single"===a.config.mode&&!a.config.disable.length&&!a.config.enable&&!a.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(c=0;c<a.config.plugins.length;c++){var v=a.config.plugins[c](a)||{};for(var p in v)qe.indexOf(p)>-1?a.config[p]=je(v[p]).map(l).concat(a.config[p]):void 0===r[p]&&(a.config[p]=v[p])}r.altInputClass||(a.config.altInputClass=V().className+" "+a.config.altInputClass);K("onParseConfig")}(),B(),function(){if(a.input=V(),!a.input)return void a.config.errorHandler(new Error("Invalid input element specified"));a.input._type=a.input.type,a.input.type="text",a.input.classList.add("flatpickr-input"),a._input=a.input,a.config.altInput&&(a.altInput=Ae(a.input.nodeName,a.config.altInputClass),a._input=a.altInput,a.altInput.placeholder=a.input.placeholder,a.altInput.disabled=a.input.disabled,a.altInput.required=a.input.required,a.altInput.tabIndex=a.input.tabIndex,a.altInput.type="text",a.input.setAttribute("type","hidden"),!a.config.static&&a.input.parentNode&&a.input.parentNode.insertBefore(a.altInput,a.input.nextSibling));a.config.allowInput||a._input.setAttribute("readonly","readonly");W()}(),function(){a.selectedDates=[],a.now=a.parseDate(a.config.now)||new Date;var e=a.config.defaultDate||("INPUT"!==a.input.nodeName&&"TEXTAREA"!==a.input.nodeName||!a.input.placeholder||a.input.value!==a.input.placeholder?a.input.value:null);e&&U(e,a.config.dateFormat);a._initialDate=a.selectedDates.length>0?a.selectedDates[0]:a.config.minDate&&a.config.minDate.getTime()>a.now.getTime()?a.config.minDate:a.config.maxDate&&a.config.maxDate.getTime()<a.now.getTime()?a.config.maxDate:a.now,a.currentYear=a._initialDate.getFullYear(),a.currentMonth=a._initialDate.getMonth(),a.selectedDates.length>0&&(a.latestSelectedDateObj=a.selectedDates[0]);void 0!==a.config.minTime&&(a.config.minTime=a.parseDate(a.config.minTime,"H:i"));void 0!==a.config.maxTime&&(a.config.maxTime=a.parseDate(a.config.maxTime,"H:i"));a.minDateHasTime=!!a.config.minDate&&(a.config.minDate.getHours()>0||a.config.minDate.getMinutes()>0||a.config.minDate.getSeconds()>0),a.maxDateHasTime=!!a.config.maxDate&&(a.config.maxDate.getHours()>0||a.config.maxDate.getMinutes()>0||a.config.maxDate.getSeconds()>0)}(),a.utils={getDaysInMonth:function(e,t){return void 0===e&&(e=a.currentMonth),void 0===t&&(t=a.currentYear),1===e&&(t%4==0&&t%100!=0||t%400==0)?29:a.l10n.daysInMonth[e]}},a.isMobile||function(){var e=window.document.createDocumentFragment();if(a.calendarContainer=Ae("div","flatpickr-calendar"),a.calendarContainer.tabIndex=-1,!a.config.noCalendar){if(e.appendChild((a.monthNav=Ae("div","flatpickr-months"),a.yearElements=[],a.monthElements=[],a.prevMonthNav=Ae("span","flatpickr-prev-month"),a.prevMonthNav.innerHTML=a.config.prevArrow,a.nextMonthNav=Ae("span","flatpickr-next-month"),a.nextMonthNav.innerHTML=a.config.nextArrow,C(),Object.defineProperty(a,"_hidePrevMonthArrow",{get:function(){return a.__hidePrevMonthArrow},set:function(e){a.__hidePrevMonthArrow!==e&&(Fe(a.prevMonthNav,"flatpickr-disabled",e),a.__hidePrevMonthArrow=e)}}),Object.defineProperty(a,"_hideNextMonthArrow",{get:function(){return a.__hideNextMonthArrow},set:function(e){a.__hideNextMonthArrow!==e&&(Fe(a.nextMonthNav,"flatpickr-disabled",e),a.__hideNextMonthArrow=e)}}),a.currentYearElement=a.yearElements[0],J(),a.monthNav)),a.innerContainer=Ae("div","flatpickr-innerContainer"),a.config.weekNumbers){var t=function(){a.calendarContainer.classList.add("hasWeeks");var e=Ae("div","flatpickr-weekwrapper");e.appendChild(Ae("span","flatpickr-weekday",a.l10n.weekAbbreviation));var t=Ae("div","flatpickr-weeks");return e.appendChild(t),{weekWrapper:e,weekNumbers:t}}(),n=t.weekWrapper,l=t.weekNumbers;a.innerContainer.appendChild(n),a.weekNumbers=l,a.weekWrapper=n}a.rContainer=Ae("div","flatpickr-rContainer"),a.rContainer.appendChild(q()),a.daysContainer||(a.daysContainer=Ae("div","flatpickr-days"),a.daysContainer.tabIndex=-1),S(),a.rContainer.appendChild(a.daysContainer),a.innerContainer.appendChild(a.rContainer),e.appendChild(a.innerContainer)}a.config.enableTime&&e.appendChild(function(){a.calendarContainer.classList.add("hasTime"),a.config.noCalendar&&a.calendarContainer.classList.add("noCalendar");var e=Ge(a.config);a.timeContainer=Ae("div","flatpickr-time"),a.timeContainer.tabIndex=-1;var t=Ae("span","flatpickr-time-separator",":"),n=Ie("flatpickr-hour",{"aria-label":a.l10n.hourAriaLabel});a.hourElement=n.getElementsByTagName("input")[0];var l=Ie("flatpickr-minute",{"aria-label":a.l10n.minuteAriaLabel});a.minuteElement=l.getElementsByTagName("input")[0],a.hourElement.tabIndex=a.minuteElement.tabIndex=-1,a.hourElement.value=$e(a.latestSelectedDateObj?a.latestSelectedDateObj.getHours():a.config.time_24hr?e.hours:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(e.hours)),a.minuteElement.value=$e(a.latestSelectedDateObj?a.latestSelectedDateObj.getMinutes():e.minutes),a.hourElement.setAttribute("step",a.config.hourIncrement.toString()),a.minuteElement.setAttribute("step",a.config.minuteIncrement.toString()),a.hourElement.setAttribute("min",a.config.time_24hr?"0":"1"),a.hourElement.setAttribute("max",a.config.time_24hr?"23":"12"),a.hourElement.setAttribute("maxlength","2"),a.minuteElement.setAttribute("min","0"),a.minuteElement.setAttribute("max","59"),a.minuteElement.setAttribute("maxlength","2"),a.timeContainer.appendChild(n),a.timeContainer.appendChild(t),a.timeContainer.appendChild(l),a.config.time_24hr&&a.timeContainer.classList.add("time24hr");if(a.config.enableSeconds){a.timeContainer.classList.add("hasSeconds");var r=Ie("flatpickr-second");a.secondElement=r.getElementsByTagName("input")[0],a.secondElement.value=$e(a.latestSelectedDateObj?a.latestSelectedDateObj.getSeconds():e.seconds),a.secondElement.setAttribute("step",a.minuteElement.getAttribute("step")),a.secondElement.setAttribute("min","0"),a.secondElement.setAttribute("max","59"),a.secondElement.setAttribute("maxlength","2"),a.timeContainer.appendChild(Ae("span","flatpickr-time-separator",":")),a.timeContainer.appendChild(r)}a.config.time_24hr||(a.amPM=Ae("span","flatpickr-am-pm",a.l10n.amPM[Me((a.latestSelectedDateObj?a.hourElement.value:a.config.defaultHour)>11)]),a.amPM.title=a.l10n.toggleTitle,a.amPM.tabIndex=-1,a.timeContainer.appendChild(a.amPM));return a.timeContainer}());Fe(a.calendarContainer,"rangeMode","range"===a.config.mode),Fe(a.calendarContainer,"animate",!0===a.config.animate),Fe(a.calendarContainer,"multiMonth",a.config.showMonths>1),a.calendarContainer.appendChild(e);var r=void 0!==a.config.appendTo&&void 0!==a.config.appendTo.nodeType;if((a.config.inline||a.config.static)&&(a.calendarContainer.classList.add(a.config.inline?"inline":"static"),a.config.inline&&(!r&&a.element.parentNode?a.element.parentNode.insertBefore(a.calendarContainer,a._input.nextSibling):void 0!==a.config.appendTo&&a.config.appendTo.appendChild(a.calendarContainer)),a.config.static)){var i=Ae("div","flatpickr-wrapper");a.element.parentNode&&a.element.parentNode.insertBefore(i,a.element),i.appendChild(a.element),a.altInput&&i.appendChild(a.altInput),i.appendChild(a.calendarContainer)}a.config.static||a.config.inline||(void 0!==a.config.appendTo?a.config.appendTo:window.document.body).appendChild(a.calendarContainer)}(),function(){a.config.wrap&&["open","close","toggle","clear"].forEach((function(e){Array.prototype.forEach.call(a.element.querySelectorAll("[data-"+e+"]"),(function(t){return c(t,"click",a[e])}))}));if(a.isMobile)return void function(){var e=a.config.enableTime?a.config.noCalendar?"time":"datetime-local":"date";a.mobileInput=Ae("input",a.input.className+" flatpickr-mobile"),a.mobileInput.tabIndex=1,a.mobileInput.type=e,a.mobileInput.disabled=a.input.disabled,a.mobileInput.required=a.input.required,a.mobileInput.placeholder=a.input.placeholder,a.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",a.selectedDates.length>0&&(a.mobileInput.defaultValue=a.mobileInput.value=a.formatDate(a.selectedDates[0],a.mobileFormatStr));a.config.minDate&&(a.mobileInput.min=a.formatDate(a.config.minDate,"Y-m-d"));a.config.maxDate&&(a.mobileInput.max=a.formatDate(a.config.maxDate,"Y-m-d"));a.input.getAttribute("step")&&(a.mobileInput.step=String(a.input.getAttribute("step")));a.input.type="hidden",void 0!==a.altInput&&(a.altInput.type="hidden");try{a.input.parentNode&&a.input.parentNode.insertBefore(a.mobileInput,a.input.nextSibling)}catch(e){}c(a.mobileInput,"change",(function(e){a.setDate(Le(e).value,!1,a.mobileFormatStr),K("onChange"),K("onClose")}))}();var e=Te(I,50);a._debouncedChange=Te(v,Qe),a.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&c(a.daysContainer,"mouseover",(function(e){"range"===a.config.mode&&_(Le(e))}));c(a._input,"keydown",k),void 0!==a.calendarContainer&&c(a.calendarContainer,"keydown",k);a.config.inline||a.config.static||c(window,"resize",e);void 0!==window.ontouchstart?c(window.document,"touchstart",M):c(window.document,"mousedown",M);c(window.document,"focus",M,{capture:!0}),!0===a.config.clickOpens&&(c(a._input,"focus",a.open),c(a._input,"click",a.open));void 0!==a.daysContainer&&(c(a.monthNav,"click",ee),c(a.monthNav,["keyup","increment"],d),c(a.daysContainer,"click",Y));if(void 0!==a.timeContainer&&void 0!==a.minuteElement&&void 0!==a.hourElement){var t=function(e){return Le(e).select()};c(a.timeContainer,["increment"],i),c(a.timeContainer,"blur",i,{capture:!0}),c(a.timeContainer,"click",f),c([a.hourElement,a.minuteElement],["focus","click"],t),void 0!==a.secondElement&&c(a.secondElement,"focus",(function(){return a.secondElement&&a.secondElement.select()})),void 0!==a.amPM&&c(a.amPM,"click",(function(e){i(e)}))}a.config.allowInput&&c(a._input,"blur",A)}(),(a.selectedDates.length||a.config.noCalendar)&&(a.config.enableTime&&u(a.config.noCalendar?a.latestSelectedDateObj:void 0),Q(!1)),r();var n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!a.isMobile&&n&&N(),K("onReady")}(),a}function tt(e,t){for(var a=Array.prototype.slice.call(e).filter((function(e){return e instanceof HTMLElement})),n=[],l=0;l<a.length;l++){var r=a[l];try{if(null!==r.getAttribute("data-fp-omit"))continue;void 0!==r._flatpickr&&(r._flatpickr.destroy(),r._flatpickr=void 0),r._flatpickr=et(r,t||{}),n.push(r._flatpickr)}catch(e){console.error(e)}}return 1===n.length?n[0]:n}"undefined"!=typeof HTMLElement&&"undefined"!=typeof HTMLCollection&&"undefined"!=typeof NodeList&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return tt(this,e)},HTMLElement.prototype.flatpickr=function(e){return tt([this],e)});var at=function(e,t){return"string"==typeof e?tt(window.document.querySelectorAll(e),t):e instanceof Node?tt([e],t):tt(e,t)};at.defaultConfig={},at.l10ns={en:Je({},xe),default:Je({},xe)},at.localize=function(e){at.l10ns.default=Je(Je({},at.l10ns.default),e)},at.setDefaults=function(e){at.defaultConfig=Je(Je({},at.defaultConfig),e)},at.parseDate=Re({}),at.formatDate=Ye({}),at.compareDates=Ue,"undefined"!=typeof jQuery&&void 0!==jQuery.fn&&(jQuery.fn.flatpickr=function(e){return tt(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},"undefined"!=typeof window&&(window.flatpickr=at);var nt={name:"DatepickerWrapper",emits:["change"],props:{value:{required:!0},options:{type:[Object],required:!0},id:{type:[Number,String],required:!0},placeholder:{type:[Number,String],required:!1},attrs:{required:!1,type:[Object],default:()=>({})}},setup(r,i){var{id:u,options:s,value:d}=t(r),{el$:c,form$:v,Size:f,View:m,classesInstance:y,classes:b,Templates:w,template:D,theme:O}=ce(r,i),C=l().proxy,q=e(null),E=e(null),x=a((()=>{var e,t,a,n;return(null===(e=C.$vueform.i18n.locales[C.$vueform.i18n.locale])||void 0===e||null===(t=e.vueform)||void 0===t?void 0:t.datepicker)||(null===(a=C.$vueform.i18n.locales[C.$vueform.i18n.fallbackLocale])||void 0===a||null===(n=a.vueform)||void 0===n?void 0:n.datepicker)||{}})),$=a((()=>s.value.mode||"single")),M=a((()=>{var e={};return g.each(s.value,((t,a)=>{null!=t&&(e[a]=t)})),e.static=!0,e})),T=e=>{i.emit("change","single"==$.value?e[0]||null:e)},j=()=>{q.value.input.parentElement.id="datepicker-"+u.value},F=function(){var e=S((function*(){E.value||(yield p()),q.value=at(E.value,Object.assign({},M.value,{onChange:e=>{T(e)},onClose:e=>{e="range"==$.value&&e.length<2?[]:e,T(e)},parseDate:(e,t)=>h(e,t,!0).toDate(),formatDate:(e,t)=>h(e).format(t),ariaDateFormat:"MMMM D, YYYY",disableMobile:!0,locale:x.value})),q.value.calendarContainer&&b.value.calendarContainer.forEach((e=>{q.value.calendarContainer.classList.add(e)})),j(),null!==d.value&&q.value.setDate(d.value,!1)}));return function(){return e.apply(this,arguments)}}();return n(d,((e,t)=>{var a;null===(a=q.value)||void 0===a||a.setDate(e,!1)})),n(u,((e,t)=>{j()}),{immediate:!1}),n(s,((e,t)=>{g.isEqual(e,t)||F()}),{deep:!0}),n(x,((e,t)=>{F()}),{deep:!0}),o((()=>{F()})),{el$:c,form$:v,Size:f,View:m,classesInstance:y,theme:O,classes:b,Templates:w,template:D,datepicker$:q,input:E,config:M,mode:$,locale:x,update:T}}},lt={name:"EditorWrapper",emits:["input","alert","error","blur"],props:{value:{required:!1,default:null},placeholder:{required:!1,type:[String,Number],default:null},name:{required:!1,type:[String,Number],default:null},id:{required:!1,type:[String,Number],default:null},accept:{required:!1,type:Array,default:()=>[]},acceptMimes:{required:!1,type:Array,default:()=>[]},endpoint:{required:!1,type:[String,Function],default:null},method:{required:!1,type:String,default:"post"},disabled:{required:!1,type:Boolean,default:!1},hideTools:{required:!1,type:[Array],default:()=>[]},attrs:{required:!1,type:[Object],default:()=>({})}},setup(l,r){var{value:i,disabled:u,acceptMimes:s,accept:d,endpoint:c,method:v}=t(l),{el$:p,form$:f,Size:m,View:g,classesInstance:h,classes:y,Templates:b,template:w,theme:D}=ce(l,r),O=e(null),C=a((()=>c.value?"function"==typeof c.value?c.value:f.value.$vueform.config.endpoints[c.value]||c.value:"function"==typeof f.value.$vueform.config.endpoints.attachment?f.value.$vueform.config.endpoints.attachment:f.value.$vueform.config.endpoints.attachment.url)),q=a((()=>"function"==typeof C.value?null:c.value&&f.value.$vueform.config.endpoints[c.value]?f.value.$vueform.config.endpoints[c.value]:v.value||f.value.$vueform.config.endpoints.attachment.method)),E=function(){var e=S((function*(e){if(e.attachment.file){var t,a=new FormData;a.append("Content-Type",e.attachment.file.type),a.append("file",e.attachment.file);try{t="function"==typeof C.value?yield C.value(e.attachment,p.value):(t=yield p.value.$vueform.services.axios.request({url:C.value,method:q.value,["get"===q.value.toLowerCase()?"params":"data"]:a,onUploadProgress:t=>{e.attachment.setUploadProgress(Math.round(100*t.loaded/t.total))}})).data,e.attachment.setAttributes({url:t.url,href:t.href})}catch(e){r.emit("error",e)}}}));return function(t){return e.apply(this,arguments)}}();return n(u,(e=>{O.value.contentEditable=!e})),o((()=>{u.value&&(O.value.contentEditable=!1)})),{el$:p,form$:f,Size:m,View:g,classesInstance:h,resolvedEndpoint:C,theme:D,classes:y,Templates:b,template:w,editor$:O,update:e=>{"number"==typeof e&&(e=String(e)),O.value.editor.loadHTML(e)},setOption:(e,t)=>{O.value[e]=t},handleChange:()=>{O.value.value!=i.value&&(O.value.value||i.value)&&r.emit("input",{target:{value:O.value.value}})},handleFileAccept:e=>{if(u.value)e.preventDefault();else if(e.file){s.value&&s.value.length&&-1===s.value.indexOf(e.file.type)&&(e.preventDefault(),r.emit("alert",f.value.__(f.value.translations.vueform.editor.acceptedMimesError,{mimes:s.value.join(", ")})));var t=e.file.name.split(".").pop();d.value&&d.value.length&&-1===d.value.indexOf(t)&&(e.preventDefault(),r.emit("alert",f.value.__(f.value.translations.vueform.editor.acceptedExtensionsError,{extensions:d.value.join(", ")})))}else e.preventDefault()},handleAttachmentAdd:E,handleBlur:()=>{r.emit("blur")}}}},rt=function(e,n,l){var{label:r}=t(e),i=l.form$,o=l.el$,u=v("config$"),s=a((()=>{var e,t;return!!(i.value.options.forceLabels||r.value||o.value.slots.label||null!==(e=o.value.$slots)&&void 0!==e&&e.label||2===i.value.$vueform.vueVersion&&null!==(t=o.value.$scopedSlots)&&void 0!==t&&t.label)})),d=a((()=>"function"==typeof r.value&&(!r.value.prototype||!r.value.prototype.constructor||r.value.prototype.constructor&&"VueComponent"!==r.value.prototype.constructor.name))),c=a((()=>te(r.value)));return{hasLabel:s,Label:a((()=>{var e=d.value?r.value(o.value):r.value||null;return c.value||(e=ae(e,u.value,i.value)),e}))}},it=function(l,r,i){var{columns:o,presets:u}=t(l),s=i.form$,d=i.theme,c=i.hasLabel,v=e(g.cloneDeep(o.value)),p=a((()=>{var e=s.value.$vueform.config;return new s.value.$vueform.services.columns({configPresetColumns:e.usePresets,configColumns:e.columns,formPresetColumns:s.value.options.presets,formColumns:s.value.options.columns,elementPresetColumns:u.value,elementColumns:v.value},c.value,d.value.columns,e.presets)})),f=a((()=>p.value.classes)),m=a((()=>p.value.cols));return n(o,(e=>{v.value=g.cloneDeep(e)}),{immediate:!1,deep:!0}),{cols:m,columnsClassesService:p,columnsClasses:f,updateColumns:e=>{v.value=g.cloneDeep(e)}}},ot=function(n,l,i){var{size:o,view:u,views:s,presets:d}=t(n),c=l.name,v=i.available,p=i.active,f=i.form$,m=i.parent,h=e(!1),y=a((()=>v.value&&!h.value&&p.value)),b=a((()=>{var e;return o.value?e=o.value:g.each(d.value,(t=>{var a=f.value.$vueform.config.presets[t];a&&a.size&&(e=a.size)})),e||(e=m.value?m.value.Size:f.value.Size),e})),w=a((()=>u.value?u.value:S.value[c.value])),S=a((()=>{var e=f.value.Views;return g.each(d.value,(t=>{var a=f.value.$vueform.config.presets[t];a&&a.views&&(e=Object.assign({},e,a.views))})),e=Object.assign({},e,s.value)}));return r("Size",b),r("View",w),r("Views",S),{hidden:h,visible:y,Size:b,View:w,Views:S,hide:()=>{h.value=!0},show:()=>{h.value=!1}}},ut=function(e,n,l){var{templates:r,presets:i}=t(e),o=n.name,u=l.theme,s=l.View,d=l.form$,c=a((()=>{var e={};return g.each(i?i.value:[],(t=>{var a=d.value.$vueform.config.presets[t];a&&a.templates&&(e=Object.assign({},e,a.templates))})),b(b(b({},u.value.templates),e),r?r.value:{})})),v=a((()=>s&&s.value&&c.value["".concat(o.value,"_").concat(s.value)]?c.value["".concat(o.value,"_").concat(s.value)]:c.value[o.value]));return{Templates:c,template:v}},st=function(e,n,l){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(e);var i=l.el$,o=["label","info","description","before","between","after"],u=["checkbox","radio","option","single-label","multiple-label","tag","no-results","no-options","after-list","before-list","placeholder","group-label","caret","clear","spinner","option","default"];return{elementSlots:a((()=>{var e={};return o.filter((e=>-1!==r.slots.indexOf(e))).forEach((t=>{var a=i.value.slots[t]||i.value.slots[g.camelCase(t)];"object"==typeof a&&(a.props&&(Array.isArray(a.props)&&-1===a.props.indexOf("el$")||!Array.isArray(a.props)&&-1===Object.keys(a.props).indexOf("el$"))?Array.isArray(a.props)?a.props.push("el$"):a.props.el$={type:Object,required:!0}:a.props||(a.props=["el$"])),e[t]=a})),e})),fieldSlots:a((()=>{var e={};return u.filter((e=>-1!==r.slots.indexOf(e))).forEach((t=>{var a=i.value.slots[t]||i.value.slots[g.camelCase(t)];"object"==typeof a&&(a.props&&(Array.isArray(a.props)&&-1===a.props.indexOf("el$")||!Array.isArray(a.props)&&-1===Object.keys(a.props).indexOf("el$"))?Array.isArray(a.props)?a.props.push("el$"):a.props.el$={type:Object,required:!0}:a.props||(a.props=["el$"])),e[t]=a})),e}))}},dt=function(e,n,l){var{buttonLabel:r,buttonType:i,href:o,target:u,loading:s,onClick:d,resets:c,submits:v}=t(e),p=l.form$,f=l.isDisabled,m=l.fieldId,g=l.fire,h=l.el$,y=a((()=>"function"==typeof s.value?s.value(p.value,h.value):!(!v.value||!(p.value.submitting||p.value.preparing||p.value.isLoading))||s.value));return{isButtonLabelComponent:a((()=>null!==r.value&&"object"==typeof r.value)),button:a((()=>{var e={id:m.value};switch(i.value){case"anchor":e.href=o.value,e.target=u.value;break;case"button":e.disabled=f.value}return y.value&&(e.tabindex=void 0),e})),isLoading:y,handleClick:e=>{"anchor"!==i.value||o.value||e.preventDefault(),f.value||y.value?e.preventDefault():(c.value&&p.value.reset(),v.value&&p.value.submit(),"function"==typeof d.value&&g("click",p.value,h.value,e))}}},ct=function(e,n,l){var{layout:r,inline:i}=t(e);return{elementLayout:a((()=>i.value||!r.value?"ElementLayoutInline":r.value))}},vt=function(e,t,n){var l=t.name,r=n.form$,i=n.el$,o=n.theme,u=n.Templates,s=n.View,d=a((()=>new E({component:l.value,component$:i,theme:o.value,config:r.value.$vueform.config,templates:u.value,view:s.value,merge:[r.value.options,i.value]})));return{classes:a((()=>{var e;return b({},null===(e=d.value)||void 0===e?void 0:e.classes)})),classesInstance:d}},pt=function(e,n,l){var{id:r}=t(e),i=l.path;return{fieldId:a((()=>r.value||i.value))}},ft=function(e,t,a){var{container:n}=a;return{focus:()=>{var e,t,a=(null===(e=n.value)||void 0===e?void 0:e.$el)||n.value;null==a||null===(t=a.querySelector("a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,[tabindex],[contentEditable=true],trix-editor"))||void 0===t||t.focus()}}},mt=function(e,t,a){var{input:n}=a;return{focus:()=>{n.value.editor$.focus()}}},gt=function(n,l,r){var{disabled:i}=t(n),o=e(null),u=a((()=>i.value&&!1!==o.value||!0===o.value));return{localDisabled:o,isDisabled:u,disable:()=>{o.value=!0},enable:()=>{o.value=!1}}},ht=function(a,n,l){var{disables:r}=t(a),{localDisabled:i,isDisabled:o}=gt(a),u=e([]);return u.value=g.map(r.value||[],(e=>String(e))),{disabledItems:u,isDisabled:o,disableAll:()=>{i.value=!0},enableAll:()=>{i.value=!1,u.value=[]},disable:e=>{g.isArray(e)||(e=[e]);var t=g.clone(u.value);g.each(e,(e=>{e=String(e),-1===t.indexOf(e)&&t.push(e)})),u.value=t},enable:e=>{g.isArray(e)||(e=[e]);var t=g.clone(u.value);g.each(e,(e=>{e=String(e);var a=t.indexOf(e);-1!==a&&t.splice(a,1)})),u.value=t}}},yt=function(e,n,l){var{disabled:r,submits:i}=t(e),o=l.form$,u=l.el$;return{isDisabled:a((()=>"function"==typeof r.value?r.value(u.value,o.value):!(!i.value||!(o.value.invalid&&o.value.shouldValidateOnChange||o.value.busy||o.value.isDisabled))||r.value))}},bt=ht,wt=function(e,t,n){var l=n.fieldId,r=n.invalid,i=n.isDisabled,o=n.busy,u=a((()=>"".concat(l.value,"__label"))),s=a((()=>"".concat(l.value,"__description"))),d=a((()=>"".concat(l.value,"__info"))),c=a((()=>"".concat(l.value,"__error"))),v=a((()=>({"aria-labelledby":u.value,"aria-describedby":"".concat(s.value," ").concat(d.value),"aria-invalid":r.value,"aria-errormessage":c.value,"aria-disabled":null==i?void 0:i.value,"aria-busy":o.value})));return{descriptionId:s,labelId:u,infoId:d,errorId:c,aria:v}},St=function(e,n,l){var{text:r}=t(e),{descriptionId:i,labelId:o,infoId:u,errorId:s}=wt(0,0,l),d=l.invalid,c=l.isDisabled,v=l.busy,p=a((()=>{var e={"aria-label":r.value,"aria-describedby":"".concat(o.value," ").concat(i.value," ").concat(u.value),"aria-invalid":d.value,"aria-errormessage":s.value,"aria-disabled":c.value,"aria-busy":v.value};return e["aria-label"]||(e["aria-labelledby"]=o.value),e}));return{descriptionId:i,labelId:o,infoId:u,errorId:s,aria:p}},Dt=function(e,t,n){var{descriptionId:l,labelId:r,infoId:i,errorId:o}=wt(0,0,n),u=n.invalid,s=n.isDisabled,d=n.busy,c=a((()=>({"aria-describedby":"".concat(l.value," ").concat(i.value),"aria-invalid":u.value,"aria-errormessage":o.value,"aria-disabled":s.value,"aria-busy":d.value})));return{descriptionId:l,labelId:r,infoId:i,errorId:o,aria:c}},Ot=function(e,t,n){var{descriptionId:l,labelId:r,infoId:i,errorId:o}=wt(0,0,n),u=n.isDisabled,s=a((()=>({"aria-labelledby":r.value,"aria-describedby":"".concat(l.value," ").concat(i.value),"aria-disabled":u.value})));return{descriptionId:l,labelId:r,infoId:i,errorId:o,aria:s}},Ct=function(e,t,n){var{descriptionId:l,labelId:r,infoId:i,errorId:o}=wt(0,0,n),u=a((()=>({"aria-labelledby":r.value,"aria-describedby":"".concat(l.value," ").concat(i.value)})));return{descriptionId:l,labelId:r,infoId:i,errorId:o,aria:u}},qt=Dt,Et=St,xt=St,$t=Dt,Mt=function(n,v,p){var f={onBeforeMount:i,onMounted:o,onBeforeUpdate:u,onUpdated:s,onBeforeUnmount:d,onUnmounted:c},m=l(),h=p.form$,y=p.fire,{assignToParent:b,removeFromParent:w}=function(e,a,n){var{name:r}=t(e),i=l(),o=n.form$;return{assignToParent:(e,t)=>{e.children$Array?e.children$Array.push(i.proxy):e.elements$?o.value.$set(e.elements$,r.value,i.proxy):t(e.$parent,t)},removeFromParent:(e,t)=>{e.children$Array?e.children$Array.splice(e.children$Array.map((e=>H(e.name))).indexOf(H(r.value)),1):e.elements$?o.value.$delete(e.elements$,r.value):t(e.$parent,t)}}}(n,0,{form$:h}),S=e(null),D=e(!1),O=e(!0),C=a((()=>!1)),q=a((()=>!1)),E=a((()=>!1)),x=a((()=>!1)),$=a((()=>O.value)),M=a((()=>m.proxy));return r("el$",M),i((()=>{b(m.proxy.$parent,b)})),o((()=>{D.value=!0})),d((()=>{w(m.proxy.$parent,w)})),Object.values(["onBeforeCreate","onCreated"]).forEach((e=>{y(g.lowerFirst(e.replace("on","")),M.value)})),Object.keys(f).forEach((e=>{f[e]((()=>{y(g.lowerFirst(e.replace("on","")),M.value)}))})),{el$:M,isStatic:C,isFileType:q,isArrayType:x,isImageType:E,isActive:$,active:O,mounted:D,container:S,activate:()=>{O.value=!0},deactivate:()=>{O.value=!1}}},Tt=function(e,t,n){var{el$:l,isStatic:r,isFileType:i,isImageType:o,isActive:u,active:s,mounted:d,container:c,activate:v,deactivate:p}=Mt(e,0,n);return{el$:l,isStatic:r,isFileType:i,isArrayType:a((()=>!0)),isImageType:o,isActive:u,active:s,mounted:d,container:c,activate:v,deactivate:p}},jt=function(e,n,l){var{view:r}=t(e),{el$:i,isStatic:o,isArrayType:u,isActive:s,active:d,mounted:c,container:v,activate:p,deactivate:f}=Mt(e,0,l);return{el$:i,isStatic:o,isFileType:a((()=>!0)),isArrayType:u,isImageType:a((()=>-1!==["gallery","image"].indexOf(r.value))),isActive:s,active:d,mounted:c,container:v,activate:p,deactivate:f}},Ft=function(e,t,n){var{el$:l,isArrayType:r,isFileType:i,isImageType:o,isActive:u,active:s,mounted:d,container:c,activate:v,deactivate:p}=Mt(e,0,n);return{el$:l,isStatic:a((()=>!0)),isFileType:i,isArrayType:r,isImageType:o,isActive:u,active:s,mounted:d,container:c,activate:v,deactivate:p}},At=Tt,kt=Tt,_t=Tt,It=Tt,Lt=function(e,n,r){var{name:i}=t(e),o=l(),{form$:u}=r,s=a((()=>{var e=(e,t)=>e&&(3===u.value.$vueform.vueVersion&&e.$options.name&&e.$options.name.match(/^[a-zA-Z\-]*Element$/)||2===u.value.$vueform.vueVersion&&e.hasOwnProperty("el$")&&"function"!=typeof e.el$)?e.el$:e.$parent?t(e.$parent,t):null;return e(3===u.value.$vueform.vueVersion?o.parent.proxy:o.proxy.$parent,e)})),d=a((()=>s.value&&s.value.path?s.value.path+"."+i.value:i.value)),c=a((()=>s.value&&s.value.dataPath?s.value.dataPath+"."+i.value:i.value)),v=a((()=>!1));return{parent:s,path:d,dataPath:c,flat:v}},Vt=function(e,t,n){var{path:l,parent:r}=Lt(e,0,n);return{path:l,dataPath:a((()=>r.value&&r.value.dataPath?r.value.dataPath:null)),flat:a((()=>!0)),parent:r}},Bt=function(e,t,a){var{path:n,parent:l,flat:r}=Lt(e,0,a);return{path:n,flat:r,parent:l}};function Nt(e,t,a){var n=a.deps||{};return a=b(b({},a),{},{events:t.emits,slots:t.slots}),t.features.forEach((l=>{g.each(l(e,t,n,a),((e,t)=>{n[t]=e}))})),n}var Pt=function(e,t){var a=Nt(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{});return o((()=>{a.initWatcher&&a.initWatcher(),a.initMessageBag&&a.initMessageBag(),a.initValidation&&a.initValidation()})),b({},a)},zt=function(e,t){return b({},Nt(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}))},Yt=function(e,t){var a=Nt(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{});return o((()=>{a.initWatcher(),a.initState(),a.initMessageBag(),a.initValidation()})),b({},a)},Rt={props:{name:{required:!0,type:[String,Number]},conditions:{required:!1,type:[Array],default:()=>[]},onBeforeCreate:{required:!1,type:[Function],default:null,private:!0},onCreated:{required:!1,type:[Function],default:null,private:!0},onBeforeMount:{required:!1,type:[Function],default:null,private:!0},onMounted:{required:!1,type:[Function],default:null,private:!0},onBeforeUpdate:{required:!1,type:[Function],default:null,private:!0},onUpdated:{required:!1,type:[Function],default:null,private:!0},onBeforeUnmount:{required:!1,type:[Function],default:null,private:!0},onUnmounted:{required:!1,type:[Function],default:null,private:!0}}},Ut={props:{inline:{required:!1,type:[Boolean],default:!1},layout:{required:!1,type:[String,Object,Boolean],default:"ElementLayout",private:!0},addClass:{required:!1,type:[Array,Object,String],default:null},removeClass:{required:!1,type:[Array,Object],default:null},replaceClass:{required:!1,type:[Object],default:null},overrideClass:{required:!1,type:[Array,Object,String],default:null},addClasses:{required:!1,type:[Object],default:()=>({})},replaceClasses:{required:!1,type:[Object],default:()=>({})},removeClasses:{required:!1,type:[Object],default:()=>({})},overrideClasses:{required:!1,type:[Object],default:()=>({})},presets:{required:!1,type:[Array],default:()=>[]},view:{required:!1,type:[String],default:void 0},views:{required:!1,type:[Object],default:()=>({})},size:{required:!1,type:[String],default:void 0},columns:{required:!1,type:[Object,String,Number],default:null},templates:{required:!1,type:[Object],default:()=>({})},description:{required:!1,type:[String,Object],localized:!0,default:null},info:{required:!1,type:[String,Object],localized:!0,default:null},infoPosition:{required:!1,type:[String],default:"right"},label:{required:!1,type:[String,Object,Function],localized:!0,default:null},before:{required:!1,type:[Object,String,Number],localized:!0,default:null},between:{required:!1,type:[Object,String,Number],localized:!0,default:null},after:{required:!1,type:[Object,String,Number],localized:!0,default:null},slots:{required:!1,type:[Object],default:()=>({})}}},Ht={name:"ButtonElement",mixins:[Rt,Ut],emits:["click","beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted"],props:{type:{required:!1,type:[String],default:"button",private:!0},buttonLabel:{required:!1,type:[String,Object,Function],default:null},buttonType:{required:!1,type:[String],default:"button"},buttonClass:{required:!1,type:[String,Array,Object],default:null},id:{required:!1,type:[String],default:null},disabled:{required:!1,type:[Function,Boolean],default:!1},loading:{required:!1,type:[Function,Boolean],default:!1},href:{required:!1,type:[String],default:""},target:{required:!1,type:[String],default:null},onClick:{required:!1,type:[Function],default:null,private:!0},resets:{required:!1,type:[Boolean],default:!1},submits:{required:!1,type:[Boolean],default:!1},secondary:{required:!1,type:[Boolean],default:!1},danger:{required:!1,type:[Boolean],default:!1}},setup:(e,t)=>(t.features=[L,V,ct,Bt,k,Ft,yt,K,rt,ot,ut,pt,dt,vt,it,st,Ot,ft],t.slots=["label","info","description","before","between","after","default"],b({},zt(e,t)))},Wt=function(t,a,n){return{input:e(null)}};function Kt(e,t){t instanceof Date||h(t,e).format(e)===t||console.warn('Wrong formatted date. Expected format: "'.concat(e,'", received: "').concat(t,'"'))}var Xt=function(e,n,l){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{submit:i,formatData:o,formatLoad:u,name:s}=t(e),d=l.form$,c=l.available,v=l.value,p=l.resetValidators,f=l.defaultValue,m=l.nullValue,h=e=>{if(r.setValue)return r.setValue(e);v.value=e},y=a((()=>({[s.value]:v.value}))),b=a((()=>c.value&&i.value?o.value?o.value(s.value,v.value,d.value):{[s.value]:v.value}:{})),w=function(){var e=S((function*(){}));return function(){return e.apply(this,arguments)}}();return{data:y,requestData:b,load:function(e){h(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&u.value?u.value(e,d.value):e)},update:e=>{h(e)},clear:()=>{h(g.cloneDeep(m.value))},reset:()=>{h(g.cloneDeep(f.value)),p()},prepare:w}},Gt=function(e,n,l){var{name:r,formatLoad:i,formatData:o,submit:u}=t(e),{data:s,prepare:d}=Xt(e,n,l),c=l.form$,v=l.available,p=l.children$;return{data:s,requestData:a((()=>{if(!v.value||!u.value)return{};var e={};return g.each(p.value,(t=>{t.isStatic||(e=Object.assign({},e,t.requestData))})),o.value?o.value(r.value,e,c.value):{[r.value]:e}})),load:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=t&&i.value?i.value(e,c.value):e;g.each(p.value,(e=>{e.isStatic||(e.flat||void 0!==a[e.name]?e.load(e.flat?a:a[e.name],t):e.clear())}))},update:e=>{g.each(p.value,(t=>{t.isStatic||(void 0!==e[t.name]||t.flat)&&t.update(t.flat?e:e[t.name])}))},clear:()=>{g.each(p.value,(e=>{e.isStatic||e.clear()}))},reset:()=>{g.each(p.value,(e=>{e.isStatic||e.reset()}))},prepare:d}},Jt=function(e,n,l){var{name:r,formatData:i,submit:o}=t(e),{load:u,update:s,clear:d,reset:c,prepare:v}=Gt(e,n,l),p=l.form$,f=l.children$,m=l.available,h=l.value;return{data:a((()=>h.value)),requestData:a((()=>{if(!m.value||!o.value)return{};var e={};return g.each(f.value,(t=>{t.isStatic||(e=Object.assign({},e,t.requestData))})),i.value?i.value(r.value,e,p.value):e})),load:u,update:s,clear:d,reset:c,prepare:v}},Zt=function(n,l,r,i){var{name:o,storeOrder:u,formatLoad:s,formatData:d,order:c,submit:v,initial:f,default:m}=t(n),{update:h,clear:y,prepare:b,data:w}=Xt(n,l,r),D=r.form$,O=r.children$,C=r.children$Array,q=r.available,E=r.isDisabled,x=r.value,$=r.orderByName,M=r.refreshOrderStore,T=r.dataPath,j=r.parent,F=r.nullValue,A=r.defaultValue,k=r.fire,_=r.resetValidators,I=e(g.get(D.value.model,T.value)),L=a((()=>j&&j.value?j.value.defaultValue[o.value]:D.value.options.default[o.value])),V=a((()=>{if(!q.value||!v.value)return{};var e=[];return g.each(O.value,(t=>{var a=t.requestData[t.name];void 0!==a&&e.push(a)})),d.value?d.value(o.value,e,D.value):{[o.value]:e}})),B=a((()=>Object.keys(x.value||{}).length)),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=u.value?Object.assign({},e||{},{[u.value]:e?e[u.value]:void 0}):e;x.value=M(x.value.concat([a]));var n=x.value.length-1;return k("add",n,a,x.value),t&&p((()=>{C.value[C.value.length-1].focus()})),n},P=e=>{x.value=x.value.filter(((t,a)=>a!==e)),M(x.value),k("remove",e,x.value)},z=function(){var e=S((function*(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=Y(t&&s.value?s.value(e,D.value):e);y(),yield p();for(var n=0;n<a.length;n++)N();yield p(),g.each(O.value,((e,n)=>{e.load(a[n],t)}))}));return function(t){return e.apply(this,arguments)}}(),Y=e=>{if(!c.value&&!$.value||!e)return e;var t=c.value&&"string"==typeof c.value&&"DESC"==c.value.toUpperCase();return $.value?e=t?g.sortBy(e,$.value).reverse():g.sortBy(e,$.value):c.value&&(e=t?e.sort().reverse():e.sort()),e};if(void 0===I.value&&void 0===L.value&&void 0===m.value)if(f.value>0)for(var R=0;R<f.value;R++)N();else x.value=F.value;else void 0===I.value&&(x.value=A.value);return{requestData:V,data:w,length:B,add:N,remove:P,load:z,update:h,clear:y,reset:()=>{if(x.value=g.cloneDeep(A.value),_(),!x.value.length&&f.value>0){for(var e=0;e<f.value;e++)N();p((()=>{C.value.forEach((e=>{e.reset()}))}))}p((()=>{M(x.value)}))},handleAdd:()=>{E.value||N(void 0,!0)},handleRemove:e=>{E.value||P(e)},prepare:b}},Qt=function(e,a,n){var{formatLoad:l}=t(e),{data:r,requestData:i,update:o,clear:u,reset:s,prepare:d}=Xt(e,a,n),c=n.form$,v=n.value,p=n.loadDateFormat;return{data:r,requestData:i,load:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&l.value?l.value(e,c.value):e;Kt(p.value,t),v.value=t instanceof Date||!t?t:h(t,p.value).toDate()},update:o,clear:u,reset:s,prepare:d}},ea=function(e,a,n){var{formatLoad:l}=t(e),{data:r,requestData:i,update:o,clear:u,reset:s,prepare:d}=Xt(e,a,n),c=n.form$,v=n.value,p=n.loadDateFormat;return{data:r,requestData:i,load:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&l.value?l.value(e,c.value):e;v.value=g.map(t,(e=>(Kt(p.value,e),e instanceof Date?e:h(e,p.value).toDate())))},update:o,clear:u,reset:s,prepare:d}},ta=function(e,a,n){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{formatLoad:r}=t(e),{data:i,requestData:o,clear:u,reset:s,prepare:d}=Xt(e,a,n,l),c=n.form$,v=n.value,p=n.language,f=n.nullValue,m=e=>{if(l.setValue)return l.setValue(e);v.value=e};return{data:i,requestData:o,load:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&r.value?r.value(e,c.value):e;if(!g.isPlainObject(t))throw new Error("Multilingual element requires an object to load");m(Object.assign({},g.clone(f.value),t))},update:e=>{var t=e;g.isPlainObject(t)||(t={[p.value]:e}),m(Object.assign({},v.value,t))},clear:u,reset:s,prepare:d}},aa=function(e,t,a){var{data:n,requestData:l,load:r,update:i,clear:o,reset:u,prepare:s}=Xt(e,t,a,{setValue:e=>{c.value=e,p((()=>{d.value.update(e)}))}}),d=a.input,c=a.value;return{data:n,requestData:l,load:r,update:i,clear:o,reset:u,prepare:s}},na=function(e,t,a){var{data:l,requestData:r,load:i,update:o,clear:u,reset:s,prepare:d}=ta(e,t,a,{setValue:e=>{f.value=e,p((()=>{c.value.update(e[m.value])}))}}),c=a.input,v=a.model,f=a.value,m=a.language;return n(m,(()=>{c.value.update(v.value)})),{data:l,requestData:r,load:i,update:o,clear:u,reset:s,prepare:d}},la=function(e,n,l){var{load:r,update:i,clear:o,reset:u,prepare:s}=Xt(e,n,l),{submit:d,formatData:c,name:v}=t(e),p=l.form$,f=l.available,m=l.value;return{data:a((()=>{var e,t=m.value;return"object"==typeof t&&null!==(e=t)&&void 0!==e&&e.__file__&&delete(t=b({},t)).__file__,{[v.value]:t}})),requestData:a((()=>{var e;if(!f.value||!d.value)return{};var t=m.value;return"object"==typeof t&&null!==(e=t)&&void 0!==e&&e.__file__&&delete(t=b({},t)).__file__,c.value?c.value(v.value,t,p.value):{[v.value]:t}})),load:r,update:i,clear:o,reset:u,prepare:s}},ra=function(e,n,l){var{length:r,add:i,remove:o,load:u,update:s,clear:d,reset:c,handleAdd:v,handleRemove:p,prepare:f}=Zt(e,n,l),{submit:m,formatData:h,name:y}=t(e),w=l.form$,S=l.available,D=l.value,O=l.children$,C=a((()=>{var e=D.value;return e=e.map((e=>{if("object"==typeof e&&null!=e&&e.__file__){var t=b({},e);return delete t.__file__,t}return e})),{[y.value]:e}}));return{requestData:a((()=>{if(!S.value||!m.value)return{};var e=[];return g.each(O.value,(t=>{var a=t.requestData[t.name];if(void 0!==a){var n;if("object"==typeof a&&null!==(n=a)&&void 0!==n&&n.__file__){var l=b({},la);delete l.__file__,a=l}e.push(a)}})),h.value?h.value(y.value,e,w.value):{[y.value]:e}})),data:C,length:r,add:i,remove:o,load:u,update:s,clear:d,reset:c,handleAdd:v,handleRemove:p,prepare:f}},ia=function(e,n,l){var{default:r,name:i}=t(e),o=l.nullValue,u=l.form$,s=l.parent;return{defaultValue:a((()=>{var e;return s&&s.value&&!s.value.mounted?e=s.value.defaultValue[i.value]:!u.value.mounted&&u.value.options.default[i.value]&&(e=u.value.options.default[i.value]),void 0!==e?e instanceof File?new File([e],e.name,e):g.cloneDeep(e):void 0!==r.value?r.value instanceof File?new File([r.value],r.value.name,r.value):g.cloneDeep(r.value):g.cloneDeep(o.value)}))}},oa=function(e,n,l){var{default:r,name:i}=t(e),o=l.nullValue,u=l.form$,s=l.parent,d=v("config$");return{defaultValue:a((()=>{var e;return s&&s.value&&!s.value.mounted?e=s.value.defaultValue[i.value]:!u.value.mounted&&u.value.options.default[i.value]&&(e=u.value.options.default[i.value]),void 0!==e?e instanceof File?new File([e],e.name,e):g.isPlainObject(e)?ae(g.cloneDeep(e),d.value,u.value):g.cloneDeep(e):void 0!==r.value?r.value instanceof File?new File([r.value],r.value.name,r.value):g.isPlainObject(r.value)?ae(g.cloneDeep(r.value),d.value,u.value):g.cloneDeep(r.value):g.cloneDeep(o.value)}))}},ua=function(e,n,l){var{default:r,name:i}=t(e),o=l.nullValue,u=l.form$,s=l.parent;return{defaultValue:a((()=>{var e;return s&&s.value&&!s.value.mounted?e=s.value.defaultValue[i.value]:!u.value.mounted&&u.value.options.default[i.value]&&(e=u.value.options.default[i.value]),void 0!==e?g.cloneDeep(g.merge({},r.value||o.value,e)):Object.keys(r.value).length>0?g.cloneDeep(r.value):g.cloneDeep(o.value)}))}},sa=function(e,n,l){var{default:r}=t(e),i=l.form$,o=l.parent;return{defaultValue:a((()=>{var e={};return o&&o.value&&!o.value.mounted?e=o.value.defaultValue:!i.value.mounted&&i.value.options.default&&(e=i.value.options.default),g.cloneDeep(g.merge({},r.value,e))}))}},da=function(e,n,l){var{default:r,name:i}=t(e),o=l.nullValue,u=l.form$,s=l.parent;return{defaultValue:a((()=>{var e;if(s&&s.value&&!s.value.mounted?e=s.value.defaultValue[i.value]:!u.value.mounted&&u.value.options.default[i.value]&&(e=u.value.options.default[i.value]),void 0!==e)return g.cloneDeep(Object.assign({},g.clone(o.value),e));if(void 0===r.value)return g.clone(o.value);var t=g.clone(r.value);if(!g.isPlainObject(t)){var a={};g.each(o.value,((e,n)=>{a[n]=t})),t=a}return Object.assign({},g.clone(o.value),t)}))}},ca=function(n,l,r){var{rules:i}=t(n),o=r.form$,u=r.path,s=e({dirty:!1,validated:!0}),d=e([]),c=e({}),v=m({}),p=a((()=>i.value)),f=a((()=>s.value.dirty)),h=a((()=>s.value.validated)),y=a((()=>g.some(d.value,{invalid:!0}))),b=a((()=>g.some(d.value,{pending:!0}))),w=a((()=>b.value)),D=a((()=>{var e=[];return g.each(d.value,(t=>{t.failing&&e.push(t.message)})),e})),O=a((()=>c.value.errors)),C=a((()=>c.value.error||null)),q=a((()=>null!==C.value)),E=a((()=>p.value&&p.value.length>0&&s.value.validated&&!y.value||(!p.value||!p.value.length)&&f.value)),x=function(){var e=S((function*(){p.value&&!1!==o.value.validation&&(yield $(d.value,function(){var e=S((function*(e){yield e.validate()}));return function(t){return e.apply(this,arguments)}}()),s.value.validated=!0)}));return function(){return e.apply(this,arguments)}}(),M=()=>{p.value&&(s.value.validated=!1,v.value=new o.value.$vueform.services.validation.factory(u.value,o.value),d.value=[],g.each(v.value.makeAll(p.value),(e=>{d.value.push(e)})))};return{state:s,Validators:d,messageBag:c,dirty:f,validated:h,invalid:y,pending:b,busy:w,errors:O,error:C,validationRules:p,isDanger:q,isSuccess:E,validate:x,dirt:()=>{s.value.dirty=!0},clean:()=>{s.value.dirty=!1},clearMessages:()=>{c.value&&c.value.clear()},resetValidators:()=>{g.each(d.value,(e=>{e.reset()})),s.value.validated=!p.value},initMessageBag:()=>{c.value=new o.value.$vueform.services.messageBag(D)},initValidation:M,reinitValidation:()=>{M()}}},va=function(e,t,n){var{state:l,Validators:r,messageBag:i,dirty:o,validated:u,invalid:s,pending:d,errors:c,error:v,validationRules:p,isDanger:f,isSuccess:m,validate:h,dirt:y,clean:b,clearMessages:w,resetValidators:S,initMessageBag:D,initValidation:O,reinitValidation:C}=ca(e,0,n),q=a((()=>g.some(r.value,{debouncing:!0}))),E=a((()=>d.value||q.value));return{state:l,Validators:r,messageBag:i,dirty:o,validated:u,invalid:s,pending:d,debouncing:q,busy:E,errors:c,error:v,validationRules:p,isDanger:f,isSuccess:m,validate:h,dirt:y,clean:b,clearMessages:w,resetValidators:S,initMessageBag:D,initValidation:O,reinitValidation:C}},pa=function(e,t,n){var{state:l,Validators:r,messageBag:i,validationRules:o,dirt:u,initValidation:s}=ca(e,0,n),d=n.form$,c=n.children$,v=a((()=>g.some(c.value,{available:!0,dirty:!0})||l.value.dirty)),p=a((()=>!g.some(c.value,{available:!0,validated:!1})&&l.value.validated)),f=a((()=>g.some(c.value,{available:!0,invalid:!0})||g.some(r.value,{invalid:!0}))),m=a((()=>g.some(c.value,{available:!0,pending:!0})||g.some(r.value,{pending:!0}))),h=a((()=>g.some(c.value,{available:!0,debouncing:!0})||g.some(r.value,{debouncing:!0}))),y=a((()=>g.some(c.value,{available:!0,busy:!0})||m.value||h.value)),b=a((()=>{var e=[];return g.each(r.value,(t=>{t.failing&&e.push(t.message)})),e})),w=a((()=>{var e=[];return g.each(c.value,(t=>{t.available&&!t.isStatic&&g.each(t.errors,(t=>{e.push(t)}))})),e})),D=a((()=>b.value.concat(w.value))),O=a((()=>i.value.errors)),C=a((()=>g.head(b.value))),q=function(){var e=S((function*(){yield E(),yield x()}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=S((function*(){!1!==d.value.validation&&(yield $(r.value,function(){var e=S((function*(e){yield e.validate()}));return function(t){return e.apply(this,arguments)}}()),l.value.validated=!0)}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=S((function*(){!1!==d.value.validation&&(yield $(c.value,function(){var e=S((function*(e){e.isStatic||(yield e.validate())}));return function(t){return e.apply(this,arguments)}}()))}));return function(){return e.apply(this,arguments)}}();return{state:l,Validators:r,messageBag:i,dirty:v,validated:p,invalid:f,pending:m,debouncing:h,busy:y,validatorErrors:b,childrenErrors:w,errors:O,error:C,validationRules:o,validate:q,validateValidators:E,validateChildren:x,dirt:u,clean:()=>{g.each(c.value,(e=>{e.isStatic||e.clean()})),l.value.dirty=!1},clearMessages:()=>{i.value&&i.value.clear(),g.each(c.value,(e=>{e.isStatic||e.clearMessages()}))},resetValidators:()=>{g.each(c.value,(e=>{e.isStatic||e.resetValidators()})),g.each(r.value,(e=>{e.reset()})),l.value.validated=!o.value},initMessageBag:()=>{i.value=new d.value.$vueform.services.messageBag(D)},initValidation:s,reinitValidation:()=>{s(),g.each(c.value,(e=>{e.isStatic||e.reinitValidation()}))}}},fa=function(n,l,r){var{rules:i}=t(n),o=r.form$,u=r.path,s=r.languages,d=r.language,c=r.value,{messageBag:v,clearMessages:p}=va(n,0,r),f=e({dirty:{},validated:{}}),m=e({}),h=a((()=>{var e={};return i.value?(g.each(s.value,(t=>{e[t]=g.isPlainObject(i.value)?i.value[t]||null:i.value})),e):e})),y=a((()=>g.some(f.value.dirty,(e=>!0===e)))),b=a((()=>!g.some(f.value.validated,(e=>!1===e)))),w=a((()=>{var e=!1;return g.each(m.value,(t=>{g.some(t,{invalid:!0})&&(e=!0)})),e})),D=a((()=>{var e=!1;return g.each(m.value,(t=>{g.some(t,{pending:!0})&&(e=!0)})),e})),O=a((()=>{var e=!1;return g.each(m.value,(t=>{g.some(t,{debouncing:!0})&&(e=!0)})),e})),C=a((()=>D.value||O.value)),q=a((()=>{var e=[];return g.each(m.value,((t,a)=>{g.each(t,(t=>{t.failing&&e.push(t.message+" ("+a+")")}))})),e})),E=a((()=>v.value.errors)),x=a((()=>{var e=null;g.each(m.value[d.value],(t=>{if(null!==e)return!1;t.failing&&(e=t.message)}));var t=v.value.prepends?v.value.prepends.errors:[];return null!==e&&(t=g.concat(t,[e])),t=g.concat(t,v.value.appends?v.value.appends.errors:[]),g.head(t)})),M=a((()=>null!==x.value&&void 0!==x.value)),T=a((()=>h.value[d.value]&&h.value[d.value].length>0&&f.value.validated[d.value]&&!g.some(m.value[d.value],{invalid:!0})||(!h.value[d.value]||!h.value[d.value].length)&&f.value.dirty[d.value])),j=function(){var e=S((function*(){yield $(s.value,function(){var e=S((function*(e){yield F(e)}));return function(t){return e.apply(this,arguments)}}())}));return function(){return e.apply(this,arguments)}}(),F=function(){var e=S((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.value;!1!==o.value.validation&&m.value[e]&&(yield $(m.value[e],function(){var t=S((function*(t){yield t.validate(c.value[e])}));return function(e){return t.apply(this,arguments)}}()),f.value.validated[e]=!0)}));return function(){return e.apply(this,arguments)}}(),A=()=>{if(h.value){g.each(h.value,((e,t)=>{f.value.validated[t]=!(null!==e&&e.length>0)}));var e=new o.value.$vueform.services.validation.factory(u.value,o.value);m.value={},g.each(h.value,((t,a)=>{null!==t&&(m.value[a]||(m.value=Object.assign({},m.value,{[a]:[]})),g.each(e.makeAll(t),(e=>{m.value[a].push(e)})))}))}};return{state:f,Validators:m,messageBag:v,dirty:y,validated:b,invalid:w,pending:D,debouncing:O,busy:C,errors:E,error:x,validationRules:h,isDanger:M,isSuccess:T,validate:j,validateLanguage:F,dirt:()=>{f.value.dirty[d.value]=!0},clean:()=>{f.value.dirty[d.value]=!1},clearMessages:p,resetValidators:()=>{g.each(s.value,(e=>{g.each(m.value[e],(e=>{e.reset()})),g.each(h.value,((e,t)=>{f.value.validated[t]=!(e.length>0)}))}))},initState:()=>{var e={},t={};g.each(s.value,(t=>{e[t]=!1})),g.each(s.value,(e=>{t[e]=!0})),f.value={dirty:e,validated:t}},initMessageBag:()=>{v.value=new o.value.$vueform.services.messageBag(q)},initValidation:A,reinitValidation:()=>{A()}}},ma=function(e,t,a){var n=a.value,{state:l,Validators:r,messageBag:i,dirty:o,validated:u,invalid:s,pending:d,busy:c,errors:v,error:p,validationRules:f,dirt:m,clean:h,clearMessages:y,resetValidators:b,initMessageBag:w,initValidation:D,reinitValidation:O}=ca(e,0,a),C=function(){var e=S((function*(){f.value&&(g.isArray(n.value)?yield $(n.value,function(){var e=S((function*(e){if(yield $(r.value,function(){var t=S((function*(t){yield t.validate(e)}));return function(e){return t.apply(this,arguments)}}()),s.value)return!1}));return function(t){return e.apply(this,arguments)}}()):yield $(r.value,function(){var e=S((function*(e){yield e.validate(n.value)}));return function(t){return e.apply(this,arguments)}}()),l.value.validated=!0)}));return function(){return e.apply(this,arguments)}}();return{state:l,Validators:r,messageBag:i,dirty:o,validated:u,invalid:s,pending:d,busy:c,errors:v,error:p,validationRules:f,validate:C,dirt:m,clean:h,clearMessages:y,resetValidators:b,initMessageBag:w,initValidation:D,reinitValidation:O}},ga=function(e,t,n){var l=n.form$,r=n.value,i=n.uploading,o=n.removing,{state:u,Validators:s,messageBag:d,dirty:c,validated:v,invalid:p,pending:f,errors:m,error:g,validationRules:h,dirt:y,clean:b,clearMessages:w,resetValidators:D,initMessageBag:O,initValidation:C,reinitValidation:q}=ca(e,0,n),E=a((()=>f.value||i.value||o.value)),x=function(){var e=S((function*(){if(h.value&&!1!==l.value.validation){var e=["min","max","between","size","mimetypes","mimes","dimensions","file","image","gt","gte","lt","lte"];yield $(s.value,function(){var t=S((function*(t){(r.value instanceof File||!r.value||-1===e.indexOf(t.name))&&(yield t.validate())}));return function(e){return t.apply(this,arguments)}}()),u.value.validated=!0}}));return function(){return e.apply(this,arguments)}}();return{state:u,Validators:s,messageBag:d,dirty:c,validated:v,invalid:p,pending:f,busy:E,errors:m,error:g,validationRules:h,validate:x,dirt:y,clean:b,clearMessages:w,resetValidators:D,initMessageBag:O,initValidation:C,reinitValidation:q}},ha=function(e,a,n){var{displayKey:l}=t(e),r=n.form$,i=n.value,{state:o,Validators:u,messageBag:s,dirty:d,validated:c,invalid:v,pending:p,debouncing:f,busy:m,errors:g,error:h,validationRules:y,isSuccess:b,isDanger:w,dirt:D,clean:O,clearMessages:C,resetValidators:q,initMessageBag:E,initValidation:x,reinitValidation:M}=va(e,0,n),T=function(){var e=S((function*(){y.value&&!1!==r.value.validation&&(yield $(u.value,function(){var e=S((function*(e){yield e.validate(i.value[l.value])}));return function(t){return e.apply(this,arguments)}}()),o.value.validated=!0)}));return function(){return e.apply(this,arguments)}}();return{state:o,Validators:u,messageBag:s,dirty:d,validated:c,invalid:v,pending:p,debouncing:f,busy:m,errors:g,error:h,validationRules:y,isSuccess:b,isDanger:w,validate:T,dirt:D,clean:O,clearMessages:C,resetValidators:q,initMessageBag:E,initValidation:x,reinitValidation:M}},ya=pa,ba=pa,wa=function(e,n,l){var{name:r,floating:i,placeholder:o,label:u,fieldName:s}=t(e),d=l.form$,c=l.Label,p=v("config$");return{genericName:a((()=>s&&s.value?ae(s.value,p.value,d.value):u&&u.value?c.value:i&&i.value?ae(i.value,p.value,d.value):o&&o.value&&d.value.options.floatPlaceholders?ae(o.value,p.value,d.value):g.upperFirst(r.value).replace(/_|-/g," ")))}},Sa=function(n,l,r){var{name:i,embed:o,label:u,fieldName:s}=t(n),d=r.form$,c=r.Label,p=r.filename||e(null),f=v("config$");return{genericName:a((()=>o.value&&p.value?p.value:s&&s.value?ae(s.value,f.value,d.value):u.value?c.value:/^\d+$/.test(i.value)?d.value.translations.vueform.elements.file.defaultName:g.upperFirst(i.value).replace(/_|-/g," ")))}},Da=function(l,r,i){var o,u,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{name:d,type:c}=t(l),v=i.parent,p=i.defaultValue,f=i.dataPath,m=i.form$,h=e(void 0);m.value.isSync?h.value=g.get(m.value.model,f.value):v.value&&-1!==["group","object","list","multifile"].indexOf(v.value.type)&&(h.value=v.value.value[d.value]);var y=e(p.value instanceof File?p.value:g.cloneDeep(p.value)),b=a({get:(null===(o=s.value)||void 0===o?void 0:o.get)||function(){var e;return void 0!==(e=m.value.isSync?g.get(m.value.model,f.value):v.value&&-1!==["group","object","list","multifile"].indexOf(v.value.type)?v.value.value[d.value]:y.value)?e:p.value instanceof File?p.value:g.cloneDeep(p.value)},set:(null===(u=s.value)||void 0===u?void 0:u.set)||function(e){if(m.value.isSync)m.value.updateModel(f.value,e);else if(v.value&&-1!==["list","multifile"].indexOf(v.value.type)){var t=v.value.value.map(((t,a)=>a==d.value?e:t));v.value.update(t)}else v.value&&-1!==["group","object"].indexOf(v.value.type)?v.value.value=Object.assign({},v.value.value,{[d.value]:e}):y.value=e}}),w=a({get:()=>b.value,set(e){b.value=e}});return void 0!==s.init&&!1===s.init||void 0===h.value&&(b.value=p.value instanceof File?p.value:g.cloneDeep(p.value)),n(c,(()=>{b.value=p.value instanceof File?p.value:g.cloneDeep(p.value)})),{initialValue:h,internalValue:y,value:b,model:w}},Oa=function(e,t,a){var{initialValue:n,internalValue:l,value:r,model:i}=Da(e,t,a,{init:!1});return{initialValue:n,internalValue:l,value:r,model:i}},Ca=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{initialValue:l,internalValue:r,value:i}=Da(e,t,a,{init:!1}),o=a.defaultValue;return void 0!==n.init&&!1===n.init||(void 0===l.value?i.value=o.value:i.value=Object.assign({},o.value,i.value)),{internalValue:r,value:i}},qa=function(t,n,l){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=l.parent,o=l.dataPath,u=l.defaultValue,s=l.children$Array,d=l.form$,c=e(g.cloneDeep(u.value)),v=a(r.value||{get(){var e;e=d.value.isSync?o.value?g.get(d.value.model,o.value)||{}:d.value.model:i.value&&-1!==["group","object"].indexOf(i.value.type)?i.value.value:c.value;var t=s.value.reduce(((e,t)=>{if(t.isStatic||!t)return e;var a=[];if(t.flat){var n=e=>{e.forEach((e=>{!e.isStatic&&e.flat?n(e.children$Array):e.isStatic||a.push(e.name)}))};n(t.children$Array)}else a.push(t.name);return e.concat(a)}),[]),a={};return t.forEach((t=>{void 0!==e[t]&&(a[t]=e[t])})),void 0!==(e=a)?e:g.cloneDeep(u.value)},set(e){d.value.isSync?d.value.updateModel(o.value,e):i.value&&-1!==["group","object"].indexOf(i.value.type)?i.value.value=Object.assign({},i.value.value,e):c.value=e}});return{value:v}},Ea=function(e,t,n){var{value:l}=Da(e,t,n),r=n.language,i=a({get:()=>l.value[r.value],set(e){l.value=Object.assign({},l.value,{[r.value]:e})}});return{value:l,model:i}},xa=function(n,l,r){var{name:i}=t(n),o=r.parent,u=r.valueDateFormat,s=r.defaultValue,d=r.dataPath,c=r.form$,v=e(s.value instanceof File?s.value:g.cloneDeep(s.value)),{value:p,initialValue:f}=Da(n,l,r,{value:{get(){var e;return void 0!==(e=c.value.isSync?g.get(c.value.model,d.value):o.value&&-1!==["object","list","multifile"].indexOf(o.value.type)?o.value.value[i.value]:v.value)?e:s.value instanceof File?s.value:g.cloneDeep(s.value)},set(e){if(g.isEmpty(e)||e instanceof Date||!1===u.value||Kt(u.value,e),e=e&&e instanceof Date&&!1!==u.value?h(e).format(u.value):e,c.value.isSync)c.value.updateModel(d.value,e);else if(o.value&&-1!==["list","multifile"].indexOf(o.value.type)){var t=o.value.value.map(((t,a)=>a==i.value?e:t));o.value.update(t)}else o.value&&-1!==["object"].indexOf(o.value.type)?o.value.value=Object.assign({},o.value.value,{[i.value]:e}):v.value=e}}}),m=a((()=>p.value instanceof Date||!p.value?p.value:h(p.value,u.value).toDate()));return{value:p,model:m,initialValue:f,internalValue:v}},$a=function(n,l,r){var{name:i}=t(n),o=r.parent,u=r.valueDateFormat,s=r.defaultValue,d=r.dataPath,c=r.form$,v=e(s.value instanceof File?s.value:g.cloneDeep(s.value)),{value:p,initialValue:f}=Da(n,l,r,{value:{get(){var e;return void 0!==(e=c.value.isSync?g.get(c.value.model,d.value):o.value&&-1!==["object","list","multifile"].indexOf(o.value.type)?o.value.value[i.value]:v.value)?e:s.value instanceof File?s.value:g.cloneDeep(s.value)},set(e){if(Array.isArray(e)||(e=[e]),e=e.map((e=>(g.isEmpty(e)||e instanceof Date||!1===u.value||Kt(u.value,e),e&&e instanceof Date&&!1!==u.value?h(e).format(u.value):e))),c.value.isSync)c.value.updateModel(d.value,e);else if(o.value&&-1!==["list","multifile"].indexOf(o.value.type)){var t=o.value.value.map(((t,a)=>a==i.value?e:t));o.value.update(t)}else o.value&&-1!==["object"].indexOf(o.value.type)?o.value.value=Object.assign({},o.value.value,{[i.value]:e}):v.value=e}}}),m=a((()=>p.value.map((e=>e instanceof Date||!e?e:h(e,u.value).toDate()))));return{value:p,model:m,initialValue:f,internalValue:v}},Ma=function(e,t,a){var l=a.form$,r=a.el$,i=a.fire,o=a.dirt,u=a.validate,s=a.value;return{initWatcher:()=>{n(s,((e,t)=>{j(e,t)||(i("change",e,t,r.value),o&&o(),u&&l.value.shouldValidateOnChange&&u())}),{immediate:!1,deep:!0})}}},Ta=function(e,t,a){var l=a.form$,r=a.el$,i=a.fire,o=a.dirt,u=a.value,s=a.language,d=a.validateLanguage;return{initWatcher:()=>{n(u,((e,t)=>{j(e,t)||(i("change",e,t,r.value),o&&o(),l.value.shouldValidateOnChange&&d(s.value))}),{immediate:!1,deep:!0})}}},ja=function(e,t,a){var l=a.form$,r=a.el$,i=a.fire,o=a.dirt,u=a.validateValidators,s=a.value;return{initWatcher:()=>{n(s,((e,t)=>{j(e,t)||(i("change",e,t,r.value),o&&o(),u&&l.value.shouldValidateOnChange&&u())}),{immediate:!1,deep:!0})}}},Fa=function(e,t,a){var l=a.form$,r=a.fire,i=a.value,o=a.el$,u=a.dirt,s=a.validateValidators;return{initWatcher:()=>{n(i,((e,t)=>{j(e,t)||(r("change",e,t,o.value),u&&u(),s&&l.value.shouldValidateOnChange&&s())}),{immediate:!1,deep:!0})}}},Aa=function(e,a,l){var{displayKey:r}=t(e),i=l.form$,o=l.el$,u=l.fire,s=l.dirt,d=l.validate,c=l.value,v=l.input;return{initWatcher:()=>{n(c,((e,t)=>{j(e,t)||(u("change",e,t,o.value),s(),v.value.value=v.value&&c.value&&void 0!==c.value[r.value]?c.value[r.value]:"",d&&i.value.shouldValidateOnChange&&d())}),{immediate:!1,deep:!0})}}},ka=ja,_a=Fa,Ia=function(e,n,l){var{text:r}=t(e),i=v("config$"),o=v("form$");return{Text:a((()=>ae(r.value,i.value,o.value)||""))}},La=function(e,t,n){return{nullValue:a((()=>null))}},Va=function(e,t,n){return{nullValue:a((()=>[]))}},Ba=function(e,n,l){var{falseValue:r}=t(e);return{nullValue:a((()=>r.value))}},Na=function(e,n,l){var{min:r,default:i}=t(e);return{nullValue:a((()=>void 0!==i.value&&g.isArray(i.value)?i.value.map((e=>r.value)):r.value))}},Pa=function(e,t,n){return{nullValue:a((()=>({})))}},za=function(e,t,n){return{nullValue:a((()=>({country:null,country_code:null,state:null,state_code:null,city:null,zip:null,address:null,formatted_address:null,lat:null,lng:null})))}},Ya=function(e,t,n){var l=n.languages;return{nullValue:a((()=>{var e={};return g.each(l.value,(t=>{e[t]=null})),e}))}},Ra=function(e,a,n){var{trueValue:l,falseValue:r}=t(e),i=n.update;return{check:()=>{i(l.value)},uncheck:()=>{i(r.value)}}},Ua=function(e,a,n){var{trueValue:l,falseValue:r}=t(e),i=n.update;return{check:()=>{i(l.value)},uncheck:()=>{i(r.value)}}},Ha={props:{onChange:{required:!1,type:[Function],default:null,private:!0}}},Wa={props:{formatData:{required:!1,type:[Function],default:null},formatLoad:{required:!1,type:[Function],default:null},submit:{required:!1,type:[Boolean],default:!0}}},Ka={props:{rules:{required:!1,type:[Array,String,Object],default:null},messages:{required:!1,type:[Object],default:()=>({})},fieldName:{required:!1,type:[String],"@default":"name|label"}}},Xa={name:"CheckboxElement",mixins:[Rt,Ut,Ha,Wa,Ka],emits:["change","beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted"],props:{type:{required:!1,type:[String],default:"checkbox",private:!0},default:{required:!1,type:[String,Boolean,Number],default:void 0},id:{required:!1,type:[String],default:null},text:{required:!1,type:[String,Object],localized:!0,default:null},disabled:{required:!1,type:[Boolean],default:!1},trueValue:{required:!1,type:[Boolean,String,Number],default:!0},falseValue:{required:!1,type:[Boolean,String,Number],default:!1}},setup:(e,t)=>(t.features=[L,V,ct,Wt,Lt,gt,Ba,pt,k,Mt,ia,K,ca,Da,Xt,rt,wa,ot,ut,vt,it,st,Ua,St,Ma,ft,Ia],t.slots=["default","label","info","description","before","between","after"],b({},Pt(e,t)))},Ga=function(e,t,a){var n=a.value,l=a.resolvedOptions,r=e=>{g.isArray(e)||(e=[e]);var t=g.clone(n.value);g.each(e,(e=>{-1===t.indexOf(String(e))&&-1===t.indexOf(Number(e))&&t.push(e)})),n.value=t},i=e=>{g.isArray(e)||(e=[e]);var t=g.clone(n.value);g.each(e,(e=>{var a=t.indexOf(String(e));-1===a&&(a=t.indexOf(Number(e))),-1!==a&&t.splice(a,1)})),n.value=t};return{toggle:e=>{-1===n.value.indexOf(String(e))&&-1===n.value.indexOf(Number(e))?r(e):i(e)},check:r,uncheck:i,checkAll:()=>{r(l.value.map((e=>e.value)))},uncheckAll:()=>{i(l.value.map((e=>e.value)))}}},Ja=function(l,r,i){var{items:o,valueProp:u,labelProp:s,dataKey:d,searchParam:c}=t(l),p=i.isNative,f=i.disable,m=i.enable,h=i.input,y=i.el$,w=i.form$,D=v("config$"),O=e(null),C=a((()=>{if(!p.value)return O.value;var e=[];return g.each(O.value,((t,a)=>{-1===[null,void 0].indexOf(t)&&(Array.isArray(O.value)&&"object"==typeof t?(void 0===t[u.value]&&console.warn("You must define `value` property for each option when using an array of objects options for select element"),e.push({value:t[u.value],label:t[s.value]})):Array.isArray(O.value)?e.push({value:t,label:t}):e.push({value:a,label:t}))})),e.map((e=>b(b({},e),{},{label:ae(e.label,D.value,w.value)})))})),q=function(){var e=S((function*(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];p.value?(t&&f(),"string"==typeof o.value?yield E():"function"==typeof o.value?yield $():O.value=o.value,t&&m()):yield null===(e=h.value)||void 0===e?void 0:e.resolveOptions()}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=S((function*(){try{var e,t=(null===(e=yield w.value.$vueform.services.axios.get(o.value))||void 0===e?void 0:e.data)||[];d&&d.value&&Object.keys(t).length&&(t=g.get(t,d.value)||[]),O.value=t}catch(e){O.value=[],console.warn("Couldn't resolve items from ".concat(o.value),e)}}));return function(){return e.apply(this,arguments)}}(),x=()=>function(){var e=S((function*(e){var t,a=(null===(t=yield w.value.$vueform.services.axios.get("".concat(o.value).concat(o.value.match(/\?/)?"&":"?").concat(c.value,"=").concat(e||"")))||void 0===t?void 0:t.data)||[];return d&&d.value&&Object.keys(a).length&&(a=g.get(a,d.value)||[]),a}));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=S((function*(){try{O.value=(yield o.value(y.value))||[]}catch(e){O.value=[],console.warn("Couldn't resolve items from async function",e)}}));return function(){return e.apply(this,arguments)}}(),M=function(){var e=S((function*(e,t){"function"==typeof o.value&&p.value?yield $():(!g.isEqual(e,t)||void 0===e&&void 0===t)&&("string"==typeof o.value&&p.value?yield E():"string"!=typeof o.value||p.value?O.value=o.value:O.value=x())}));return function(t,a){return e.apply(this,arguments)}}();return M(),n(o,M),n(p,M),{resolvedOptions:C,updateItems:q}},Za=function(l,r,i){var{items:o}=t(l),u=i.disableAll,s=i.enableAll,d=i.el$,c=i.form$,p=v("config$"),f=e(null),m=a((()=>{var e=[];return g.each(f.value,((t,a)=>{-1===[null,void 0].indexOf(t)&&(Array.isArray(f.value)&&"object"==typeof t?(void 0===t.value&&console.warn("You must define `value` property for each item when using an array of objects options"),e.push(t)):Array.isArray(f.value)?e.push({value:t,label:t}):"object"==typeof t?e.push(b(b({},t),{},{value:a})):e.push({label:t,value:a}))})),e.map((e=>b(b({},e),{},{label:ae(e.label,p.value,c.value)})))})),h=function(){var e=S((function*(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&u(),"string"==typeof o.value?yield y():yield w(),e&&s()}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=S((function*(){try{var e;f.value=(null===(e=yield c.value.$vueform.services.axios.get(o.value))||void 0===e?void 0:e.data)||[]}catch(e){f.value=[],console.warn("Couldn't resolve items from ".concat(o.value),e)}}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=S((function*(){try{f.value=(yield o.value(d.value))||[]}catch(e){f.value=[],console.warn("Couldn't resolve items from async function",e)}}));return function(){return e.apply(this,arguments)}}(),D=function(){var e=S((function*(){"function"==typeof o.value?yield w():"string"==typeof o.value?yield y():f.value=o.value}));return function(){return e.apply(this,arguments)}}();return D(),n(o,D),{resolvedOptions:m,updateItems:h}},Qa=Za,en={name:"CheckboxgroupElement",mixins:[Rt,Ut,Ha,Wa,Ka],emits:["change","beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted"],props:{type:{required:!1,type:[String],default:"checkboxgroup",private:!0},default:{required:!1,type:[Array],default:()=>[]},id:{required:!1,type:[String],default:null},items:{required:!1,type:[Object,Array,Function,String],localized:!0,default:()=>({})},disabled:{required:!1,type:[Boolean],default:!1},disables:{required:!1,type:[Array],default:()=>[]}},setup:(e,t)=>(t.features=[L,V,ct,Lt,Va,pt,k,At,ht,Za,ia,K,ca,Da,Ga,Xt,rt,wa,it,ot,ut,vt,st,Dt,Ma,ft],t.slots=["checkbox","label","info","description","before","between","after"],b({},Pt(e,t)))},tn=function(e,n,l){var{addons:r,slots:i}=t(e),o=l.el$,u=l.form$;return{hasAddonBefore:a((()=>{var e,t;return!!(r.value.before||null!==(e=o.value.$slots)&&void 0!==e&&e["addon-before"]||2===u.value.$vueform.vueVersion&&null!==(t=o.value.$scopedSlots)&&void 0!==t&&t["addon-before"]||i.value["addon-before"])})),hasAddonAfter:a((()=>{var e,t;return!!(r.value.after||null!==(e=o.value.$slots)&&void 0!==e&&e["addon-after"]||2===u.value.$vueform.vueVersion&&null!==(t=o.value.$scopedSlots)&&void 0!==t&&t["addon-after"]||i.value["addon-after"])}))}},an=function(e,t,n){var l=n.value,r=n.nullValue;return{empty:a((()=>g.isEqual(l.value,r.value)||-1!==[void 0,null,""].indexOf(l.value)))}},nn=function(e,t,n){var l=n.value,r=n.nullValue,i=n.language;return{empty:a((()=>l.value[i.value]==r.value[i.value]||""===l.value[i.value]))}},ln=function(e,t,n){var l=n.value,r=n.nullValue;return{empty:a((()=>g.isEqual(l.value,r.value)||-1!==[void 0,null,""].indexOf(l.value)||0==l.value.length))}},rn=function(e,n,l){var{displayFormat:r,valueFormat:i,loadFormat:o,date:u,time:s,seconds:d,hour24:c}=t(e),v=l.form$,p=a((()=>u.value&&s.value&&d.value&&c.value?"datetimeSeconds24":u.value&&s.value&&d.value&&!c.value?"datetimeSeconds12":u.value&&s.value&&!d.value&&c.value?"datetime24":u.value&&s.value&&!d.value&&!c.value?"datetime12":!u.value&&s.value&&d.value&&c.value?"timeSeconds24":!u.value&&s.value&&d.value&&!c.value?"timeSeconds12":!u.value&&s.value&&!d.value&&c.value?"time24":u.value||!s.value||d.value||c.value?"date":"time12")),f=a((()=>v.value.translations.vueform.dateFormats[p.value])),m=a((()=>({datetimeSeconds24:"YYYY-MM-DD HH:mm:ss",datetimeSeconds12:"YYYY-MM-DD hh:mm:ss a",datetime24:"YYYY-MM-DD HH:mm",datetime12:"YYYY-MM-DD hh:mm a",timeSeconds24:"HH:mm:ss",timeSeconds12:"hh:mm:ss a",time24:"HH:mm",time12:"hh:mm a",date:"YYYY-MM-DD"}[p.value])));return{displayDateFormat:a((()=>null!==r.value?r.value:f.value)),valueDateFormat:a((()=>null!==i.value||!1===i.value?i.value:m.value)),loadDateFormat:a((()=>null!==o.value?o.value:m.value))}},on=function(e,n,l){var{displayFormat:r,valueFormat:i,loadFormat:o}=t(e),u=l.form$,s=a((()=>u.value.translations.vueform.dateFormats.date));return{displayDateFormat:a((()=>null!==r.value?r.value:s.value)),valueDateFormat:a((()=>null!==i.value||!1===i.value?i.value:s.value)),loadDateFormat:a((()=>null!==o.value?o.value:s.value))}},un=function(e,t,a){var n=a.value;return{handleChange:e=>{n.value=e}}},sn=function(e,n,l){var{floating:r,placeholder:i}=t(e),o=l.form$;return{hasFloating:a((()=>!!(r.value||i.value&&o.value.options.floatPlaceholders)&&!1!==r.value))}},dn=function(e,n,l){var{placeholder:r}=t(e),i=v("config$"),o=v("form$");return{Placeholder:a((()=>ae(r.value,i.value,o.value)))}},cn=function(e,n,l){var{disables:r,min:i,max:o,extendOptions:u,readonly:s,hour24:d,seconds:c,date:v,time:p}=t(e),f=l.isDisabled,m=l.displayDateFormat,y=l.valueDateFormat,b=a((()=>void 0===r.value?[]:g.map(r.value,(e=>(Kt(y.value,e),e instanceof Date?e:h(e,y.value,!0).toDate()))))),w=a((()=>i.value?(Kt(y.value,i.value),i.value instanceof Date?i.value:h(i.value,y.value,!0).toDate()):null)),S=a((()=>o.value?(Kt(y.value,o.value),o.value instanceof Date?o.value:h(o.value,y.value,!0).toDate()):null)),D=a((()=>({dateFormat:m.value,minDate:w.value,maxDate:S.value,disable:b.value,clickOpens:!f.value&&!s.value,time_24hr:d.value,enableTime:p.value,enableSeconds:c.value,noCalendar:!v.value}))),O=a((()=>Object.assign({},D.value,u.value||{}))),C=a((()=>!0)),q=a((()=>!1));return{minDate:w,maxDate:S,disabledDates:b,fieldOptions:O,hasDate:C,hasTime:q}},vn=function(e,n,l){var{mode:r,extendOptions:i,readonly:o}=t(e),{minDate:u,maxDate:s,disabledDates:d}=cn(e,0,l),c=l.isDisabled,v=l.displayDateFormat,p=a((()=>({mode:r.value,dateFormat:v.value,minDate:u.value,maxDate:s.value,disable:d.value,clickOpens:!c.value&&!o.value}))),f=a((()=>Object.assign({},p.value,i.value||{}))),m=a((()=>!0)),g=a((()=>!1));return{minDate:u,maxDate:s,disabledDates:d,fieldOptions:f,hasDate:m,hasTime:g}},pn=function(e,n,l){var{native:r,extendOptions:i,labelProp:o,trackBy:u,valueProp:s,search:d,limit:c,noOptionsText:p,noResultsText:f,caret:m,object:g,delay:h,minChars:y,resolveOnLoad:b,filterResults:w,clearOnSearch:S,canDeselect:D,canClear:O,openDirection:C,strict:q,closeOnSelect:E,closeOnDeselect:x,autocomplete:$,groups:M,groupLabel:T,groupOptions:j,groupHideEmpty:F,inputType:A,create:k,appendNewOption:_,addOptionOn:I}=t(e),L=l.form$,V=l.isLoading,B=v("config$"),N=a((()=>r.value&&!d.value)),P=a((()=>({mode:"single",searchable:d.value||k.value,noOptionsText:p.value||L.value.translations.vueform.multiselect.noOptions,noResultsText:f.value||L.value.translations.vueform.multiselect.noResults,locale:Object.keys(B.value.i18n.locales).length>1?B.value.i18n.locale:null,fallbackLocale:B.value.i18n.fallbackLocale,label:o.value,trackBy:u.value,valueProp:s.value,limit:c.value,caret:m.value,loading:V.value,object:g.value,delay:h.value,minChars:y.value,resolveOnLoad:b.value,filterResults:w.value,clearOnSearch:S.value,canDeselect:D.value,canClear:O.value,openDirection:C.value,strict:q.value,closeOnSelect:E.value,closeOnDeselect:x.value,autocomplete:$.value,groups:M.value,groupLabel:T.value,groupOptions:j.value,groupHideEmpty:F.value,inputType:A.value,createOption:k.value,appendNewOption:_.value,addOptionOn:I.value})));return{fieldOptions:a((()=>Object.assign({},P.value,i.value||{}))),isNative:N}},fn=function(e,n,l){var{native:r,extendOptions:i,labelProp:o,trackBy:u,valueProp:s,search:d,limit:c,noOptionsText:p,noResultsText:f,caret:m,object:g,delay:h,minChars:y,resolveOnLoad:b,filterResults:w,clearOnSearch:S,clearOnSelect:D,canClear:O,max:C,openDirection:q,strict:E,closeOnSelect:x,closeOnDeselect:$,autocomplete:M,groups:T,groupLabel:j,groupOptions:F,groupHideEmpty:A,groupSelect:k,inputType:_,hideSelected:I,multipleLabel:L,multipleLabelMultiple:V,multipleLabelSingle:B,create:N,appendNewOption:P,addOptionOn:z}=t(e),Y=l.form$,R=l.isLoading,U=v("config$"),H=a((()=>r.value&&!d.value)),W=a((()=>({mode:"multiple",searchable:d.value||N.value,noOptionsText:p.value||Y.value.translations.vueform.multiselect.noOptions,noResultsText:f.value||Y.value.translations.vueform.multiselect.noResults,multipleLabel:L.value||((e,t)=>e&&e.length>1?V.value?V.value.replace(":x:",e.length):Y.value.__(Y.value.translations.vueform.multiselect.multipleLabelMore,{options:e.length}):B.value||Y.value.translations.vueform.multiselect.multipleLabelOne),locale:Object.keys(U.value.i18n.locales).length>1?U.value.i18n.locale:null,fallbackLocale:U.value.i18n.fallbackLocale,label:o.value,trackBy:u.value,valueProp:s.value,limit:c.value,caret:m.value,loading:R.value,object:g.value,delay:h.value,minChars:y.value,resolveOnLoad:b.value,filterResults:w.value,clearOnSearch:S.value,clearOnSelect:D.value,canClear:O.value,max:C.value,openDirection:q.value,strict:E.value,closeOnSelect:x.value,closeOnDeselect:$.value,autocomplete:M.value,groups:T.value,groupLabel:j.value,groupOptions:F.value,groupHideEmpty:A.value,groupSelect:k.value,inputType:_.value,hideSelected:I.value,createOption:N.value,appendNewOption:P.value,addOptionOn:z.value})));return{fieldOptions:a((()=>Object.assign({},W.value,i.value||{}))),isNative:H}},mn=function(n,l,r){var{extendOptions:i,labelProp:o,trackBy:u,valueProp:s,search:d,limit:c,noOptionsText:p,noResultsText:f,caret:m,object:g,delay:h,minChars:y,resolveOnLoad:b,filterResults:w,clearOnSearch:S,clearOnSelect:D,canClear:O,max:C,showOptions:q,openDirection:E,strict:x,closeOnSelect:$,closeOnDeselect:M,autocomplete:T,groups:j,groupLabel:F,groupOptions:A,groupHideEmpty:k,groupSelect:_,inputType:I,hideSelected:L,create:V,appendNewOption:B,addOptionOn:N}=t(n),P=r.form$,z=r.isLoading,Y=v("config$"),R=e(!1),U=a((()=>!1)),H=a((()=>({mode:"tags",searchable:d.value||V.value,noOptionsText:p.value||P.value.translations.vueform.multiselect.noOptions,noResultsText:f.value||P.value.translations.vueform.multiselect.noResults,locale:Object.keys(Y.value.i18n.locales).length>1?Y.value.i18n.locale:null,fallbackLocale:Y.value.i18n.fallbackLocale,label:o.value,trackBy:u.value,valueProp:s.value,limit:c.value,caret:m.value,loading:z.value,object:g.value,delay:h.value,minChars:y.value,resolveOnLoad:b.value,filterResults:w.value,clearOnSearch:S.value,clearOnSelect:D.value,canClear:O.value,max:C.value,showOptions:q.value,openDirection:E.value,strict:x.value,closeOnSelect:$.value,closeOnDeselect:M.value,autocomplete:T.value,groups:j.value,groupLabel:F.value,groupOptions:A.value,groupHideEmpty:k.value,groupSelect:_.value,inputType:I.value,hideSelected:L.value,createOption:V.value,appendNewOption:B.value,addOptionOn:N.value})));return{native:R,fieldOptions:a((()=>Object.assign({},H.value,i.value||{}))),isNative:U}},gn=function(e,n,l){var{min:r,max:i,step:o,tooltips:u,merge:s,format:d,orientation:c,direction:v,extendOptions:p,showTooltip:f,tooltipPosition:m,lazy:g}=t(e),h=l.isDisabled;l.labelId;var y=a((()=>({min:r.value,max:i.value,step:o.value,tooltips:u.value,merge:s.value,format:d.value,orientation:c.value,direction:v.value,disabled:h.value,showTooltip:f.value,tooltipPosition:m.value,lazy:g.value})));return{fieldOptions:a((()=>Object.assign({},y.value,p.value||{})))}},hn=function(e,n,l){var{labels:r,extendOptions:i,trueValue:o,falseValue:u}=t(e),s=l.isDisabled,d=l.form$,c=v("config$"),p=a((()=>({disabled:s.value,offLabel:r.value&&ae(r.value.off,c.value,d.value)||"",onLabel:r.value&&ae(r.value.on,c.value,d.value)||"",trueValue:o.value,falseValue:u.value})));return{fieldOptions:a((()=>Object.assign({},p.value,i.value||{})))}},yn=function(t,a,n){var l=n.input,r=e(!1);return o((()=>{l&&l.value&&l.value.addEventListener&&(l.value.addEventListener("focus",(()=>{r.value=!0})),l.value.addEventListener("blur",(()=>{r.value=!1})))})),{focused:r}},bn=function(t,a,n){var l=n.input,r=e(!1);return o((()=>{l.value.input.addEventListener("focus",(()=>{r.value=!0})),l.value.input.addEventListener("blur",(()=>{r.value=!1}))})),{focused:r}},wn=function(t,l,r){var i=r.input,u=r.isNative,s=e(!1);return o((()=>{u.value?(i.value.addEventListener("focus",(()=>{s.value=!0})),i.value.addEventListener("blur",(()=>{s.value=!1}))):n(a((()=>{var e;return null===(e=i.value)||void 0===e?void 0:e.isOpen})),(e=>{s.value=e}))})),{focused:s}},Sn=bn,Dn=wn,On=wn,Cn={name:"DateElement",mixins:[Rt,Ut,Ha,Wa,Ka],emits:["change","beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted"],props:{type:{required:!1,type:[String],default:"date",private:!0},default:{required:!1,type:[String,Date],default:null},addons:{required:!1,type:[Object],localized:!0,default:()=>({})},disabled:{required:!1,type:[Boolean],default:!1},floating:{required:!1,type:[String,Boolean,Object],localized:!0,default:null},id:{required:!1,type:[String],default:null},displayFormat:{required:!1,type:[String],default:null,"@default":"locale.vueform.dateFormats.*"},valueFormat:{required:!1,type:[String,Boolean],default:null,"@default":"locale.vueform.dateFormats.*"},loadFormat:{required:!1,type:[String],default:null,"@default":"locale.vueform.dateFormats.*"},date:{required:!1,type:[Boolean],default:!0},time:{required:!1,type:[Boolean],default:!1},seconds:{required:!1,type:[Boolean],default:!1},hour24:{required:!1,type:[Boolean],default:!0},min:{required:!1,type:[String,Date],default:null},max:{required:!1,type:[String,Date],default:null},disables:{required:!1,type:[Array],default:()=>[]},extendOptions:{required:!1,type:[Object],default:()=>({})},placeholder:{required:!1,type:[String,Object],localized:!0,default:null},readonly:{required:!1,type:[Boolean],default:!1}},setup:(e,t)=>(t.features=[L,V,ct,Wt,Lt,gt,La,pt,sn,k,Mt,tn,rn,cn,ia,K,ca,xa,Qt,an,rt,wa,ot,ut,vt,it,st,un,bn,wt,Ma,ft,dn],t.slots=["label","info","description","before","between","after","addon-before","addon-after"],b({},Pt(e,t)))},qn={name:"DatesElement",mixins:[Rt,Ut,Ha,Wa,Ka],emits:["change","beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted"],props:{type:{required:!1,type:[String],default:"dates",private:!0},default:{required:!1,type:[Array],default:()=>[]},addons:{required:!1,type:[Object],localized:!0,default:()=>({})},disabled:{required:!1,type:[Boolean],default:!1},floating:{required:!1,type:[String,Boolean,Object],localized:!0,default:null},id:{required:!1,type:[String],default:null},displayFormat:{required:!1,type:[String],default:null},valueFormat:{required:!1,type:[String,Boolean],default:null},loadFormat:{required:!1,type:[String,Boolean],default:null},mode:{required:!1,type:[String],default:"multiple"},min:{required:!1,type:[String,Date],default:null},max:{required:!1,type:[String,Date],default:null},disables:{required:!1,type:[Array],default:()=>[]},extendOptions:{required:!1,type:[Object],default:()=>({})},placeholder:{required:!1,type:[String,Object],localized:!0,default:null},readonly:{required:!1,type:[Boolean],default:!1}},setup:(e,t)=>(t.features=[L,V,ct,Wt,Lt,gt,Va,pt,sn,k,kt,tn,on,vn,ia,$a,K,ca,ea,an,rt,wa,ot,ut,vt,it,st,un,Sn,wt,Ma,ft,dn],t.slots=["label","info","description","before","between","after","addon-before","addon-after"],b({},Pt(e,t)))},En=function(l,r,i){var{type:o,embed:u,auto:s,methods:d,urls:c,uploadTempEndpoint:v,removeTempEndpoint:f,removeEndpoint:m,url:h,previewUrl:y,params:b,softRemove:w,view:D}=t(l),O=i.form$,C=i.value,q=i.isDisabled,E=i.validate,$=i.invalid,M=i.path,T=i.axios,j=i.request,F=i.uploading,A=i.input,k=i.update,_=i.fire,I=i.isImageType,L=i.removing,V=i.handleError,B=i.el$,N=e(!1),P=e(null),z=e(0),Y=e(!1),R=e({}),U=a((()=>{var e=O.value.$vueform.config.endpoints,t={uploadTempFile:v.value,removeTempFile:f.value,removeFile:m.value},a={};return Object.keys(t).forEach((n=>{var l=e[n];c.value[n]&&(l={url:c.value[n],method:"POST"}),d.value[n]&&"object"==typeof l&&(l.method=d.value[n]),"string"==typeof t[n]&&(void 0!==e[t[n]]?l=e[t[n]]:l.url=t[n]),"function"==typeof t[n]&&(l=t[n]),"object"==typeof t[n]&&(l={url:t[n].url||t[n].endpoint||e[n].url,method:t[n].method||e[n].method}),a[n]=l})),a})),H=a((()=>{if(void 0===h.value)return"/";if(!1===h.value)return"";var e=h.value;return e.match(/\/$/)||(e+="/"),e.match(/^http/)||e.match(/^\//)||(e="/"+e),e})),W=a((()=>{if(void 0===y.value)return H.value;var e=y.value;return e.match(/\/$/)||(e+="/"),e.match(/^http/)||e.match(/^\//)||(e="/"+e),e})),K=a((()=>null===C.value?0:C.value instanceof File?1:g.isObject(C.value)&&void 0!==C.value.tmp?2:g.isString(C.value)?3:-1)),X=a((()=>{switch(K.value){case 1:return C.value.name;case 2:return C.value.originalName;case 3:return C.value;default:return null}})),G=a((()=>{if(Q.value)return H.value+X.value})),J=a((()=>{if(Q.value)return W.value+X.value})),Z=a((()=>"file"===D.value?null:Q.value?J.value:P.value)),Q=a((()=>3===K.value)),ee=a((()=>K.value>0&&!F.value&&!q.value&&!Y.value&&!L.value)),te=a((()=>1===K.value&&!s.value&&!F.value&&!q.value)),ae=a((()=>!u.value&&0==K.value)),ne=function(){var e=S((function*(){if(1!==K.value)throw new Error("No file is selected");if(yield E(),!$.value){j.value=T.value.CancelToken.source();try{var e,t=x(Object.assign({},b.value,{file:C.value,formKey:O.value.options.formKey,path:M.value}));if(N.value=!1,"function"==typeof U.value.uploadTempFile)e=yield U.value.uploadTempFile(C.value,B.value);else{var a=U.value.uploadTempFile.method.toLowerCase();e=(e=yield T.value.request({url:U.value.uploadTempFile.url,method:a,["get"===a?"params":"data"]:t,onUploadProgress:e=>{z.value=Math.round(100*e.loaded/e.total)},cancelToken:j.value.token})).data}e&&"object"==typeof e&&(e.__file__=C.value),k(e)}catch(e){throw z.value=0,T.value.isCancel(e)||(N.value=!0,V(e)),new Error(e)}finally{j.value=null}}}));return function(){return e.apply(this,arguments)}}(),le=function(){var e=S((function*(){L.value=!0,N.value=!1;try{if(3!==K.value||w.value){if(2===K.value&&!w.value)if("function"==typeof U.value.removeTempFile)yield U.value.removeTempFile(C.value,B.value);else{var e=U.value.removeTempFile.method.toLowerCase();yield T.value.request({method:e,url:U.value.removeTempFile.url,["get"===e?"params":"data"]:Object.assign({},b.value,{file:C.value.tmp,formKey:O.value.options.formKey,path:M.value})})}}else{if(!confirm(O.value.translations.vueform.elements.file.removeConfirm))return!1;if("function"==typeof U.value.removeFile)yield U.value.removeFile(C.value,B.value);else{var t=U.value.removeFile.method.toLowerCase();yield T.value.request({method:t,url:U.value.removeFile.url,["get"===t?"params":"data"]:Object.assign({},b.value,{file:C.value,formKey:O.value.options.formKey,path:M.value})})}}}catch(e){return void V(e)}finally{L.value=!1}k(null),z.value=0,_("remove")}));return function(){return e.apply(this,arguments)}}(),re=function(){var e=S((function*(){if(1===K.value){Y.value=!0;try{yield ne()}finally{Y.value=!1}}}));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.value,t=new FileReader;t.onload=e=>{P.value=e.target.result},t.readAsDataURL(e)};return R.value.value=n(C,(e=>{var t,a;e?I.value&&"file"!==D.value&&(C.value instanceof File||null!==(t=C.value)&&void 0!==t&&t.__file__)&&ie(C.value instanceof File?C.value:null===(a=C.value)||void 0===a?void 0:a.__file__):P.value=null}),{immediate:!0}),R.value.view=n(D,(e=>{-1!==["image","gallery"].indexOf(e)&&!P.value&&C.value instanceof File&&ie()})),C.value instanceof File&&s.value&&p((()=>{ne()})),{hasUploadError:N,base64:P,progress:z,preparing:Y,endpoints:U,fileUrl:H,stage:K,filename:X,link:G,preview:Z,uploaded:Q,canRemove:ee,canUploadTemp:te,canSelect:ae,watchers:R,uploadTemp:ne,remove:le,prepare:re,handleChange:e=>{var t=e.target.files[0];k(t||null),s.value&&ne(),A.value.value="",O.value.shouldValidateOnChange&&E()},handleClick:()=>{q.value||A.value.click()},handleUploadTemp:()=>{ne()},handleRemove:()=>{le()},handleAbort:()=>{null!==j.value&&j.value.cancel()}}},xn=function(t,n,l){var r=l.form$,i=e(null),u=e(null),s=a((()=>null!==i.value));return o((()=>{u.value=r.value.$vueform.services.axios})),{request:i,axios:u,uploading:s}};function $n(e,t){return!t||(g.isArray(t)||(t=t.split(","),g.each(t,((e,a)=>{t[a]=e.trim()}))),g.some(t,(t=>{var a=t.match(/^([^\/]+)\/\*$/);return a?!!new RegExp("^".concat(a[1],"/")).exec(e.type):t==e.type||t==".".concat(e.name.split(".").pop())})))}var Mn=function(e,n,l){var{accept:r,auto:i}=t(e),o=l.update,u=l.isDisabled,s=l.uploadTemp;return{canDrop:a((()=>{var e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&"FormData"in window&&"FileReader"in window})),handleDrop:e=>{if(!u.value){var t=e.dataTransfer.files[0];$n(t,r.value)&&(o(t||null),i.value&&s(),t.value=null)}}}},Tn=function(e,a,n){var{accept:l}=t(e),{canDrop:r}=Mn(e,0,n),i=n.add,o=n.isDisabled,u=n.isObject,s=n.storeFileName;return{canDrop:r,handleDrop:e=>{e.dataTransfer&&e.dataTransfer.files&&0!=e.dataTransfer.files.length&&!o.value&&g.each(e.dataTransfer.files,(e=>{$n(e,l.value)&&i(u.value?{[s.value]:e}:e)}))}}},jn=function(t,a,n){return{removing:e(!1)}},Fn=function(e,t,a){var n=a.fire;a.listeners;return{handleError:e=>{n("error",e)}}},An={name:"FileElement",mixins:[Rt,Ut,Ha,Wa,Ka],emits:["change","remove","error","beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted"],props:{type:{required:!1,type:[String],default:"file",private:!0},default:{required:!1,type:[String,Object],default:null},disabled:{required:!1,type:[Boolean],default:!1},id:{required:!1,type:[String],default:null},onRemove:{required:!1,type:[Function],default:null,private:!0},onError:{required:!1,type:[Function],default:null,private:!0},view:{type:[String],required:!1,default:"file"},drop:{required:!1,type:[Boolean],default:!1},accept:{required:!1,type:[String,Array],default:null},clickable:{required:!1,type:[Boolean],default:!0},url:{required:!1,type:[String,Boolean],default:"/"},previewUrl:{required:!1,type:[String],default:void 0},auto:{required:!1,type:[Boolean],default:!0},urls:{required:!1,type:[Object],default:()=>({})},methods:{required:!1,type:[Object],default:()=>({})},uploadTempEndpoint:{required:!1,type:[Object,String,Function],default:void 0,"@default":"config.endpoints.uploadTempFile"},removeTempEndpoint:{required:!1,type:[Object,String,Function],default:void 0,"@default":"config.endpoints.removeTempFile"},removeEndpoint:{required:!1,type:[Object,String,Function],default:void 0,"@default":"config.endpoints.removeFile"},params:{required:!1,type:[Object],default:()=>({})},softRemove:{required:!1,type:[Boolean],default:!1},embed:{type:[Boolean],required:!1,default:!1,private:!0}},setup:(e,t)=>(t.features=[L,V,ct,Wt,Lt,gt,La,jn,pt,k,jt,xn,ia,K,Da,ga,la,Fn,En,Mn,an,rt,Sa,ot,ut,vt,it,st,$t,Ma,ft],t.slots=["label","info","description","before","between","after"],b({},Pt(e,t)))},kn=function(t,n,l){var r=e([]),i=a((()=>{var e={};return r.value.forEach((t=>{e[t.name]=t})),e}));return{children$Array:r,children$:i}},_n=function(e,l,r){var i=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).schemaName||"schema",{[i]:o}=t(e),{children$Array:u,children$:s}=kn(),d=a((()=>o.value));return o&&n(o,(e=>{var t=[];g.each(e,((e,a)=>{t.push(u.value[u.value.map((e=>H(e.name))).indexOf(H(a))])})),u.value=t}),{flush:"post",deep:!0}),{children:d,children$Array:u,children$:s}},In=_n,Ln={name:"GroupElement",mixins:[Rt,Ut,Ha,Wa,Ka],emits:["change","beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted"],props:{type:{required:!1,type:[String],default:"group",private:!0},default:{required:!1,type:[Object],default:()=>({})},id:{required:!1,type:[String],default:null},schema:{required:!1,type:[Object],default:()=>({})}},setup:(e,t)=>(t.features=[L,V,ct,Vt,pt,Pa,k,Mt,In,sa,rt,ya,qa,se,J,ot,ut,vt,it,st,Jt,wt,_a,ft],t.slots=["label","info","description","before","between","after"],b({},Pt(e,t)))},Vn={name:"HiddenElement",mixins:[Rt,Ha,Wa,Ka],emits:["change","beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeUnmount","unmounted"],props:{type:{required:!1,type:[String],default:"hidden",private:!0},default:{required:!1,type:[String,Number],default:null},id:{required:!1,type:[String],default:null},meta:{required:!1,type:[Boolean],default:!1}},setup:(e,t)=>(t.features=[L,V,Wt,Lt,La,wa,pt,ut,k,Mt,ia,K,ca,Da,Xt,an,Ma,ft],b({},Pt(e,t)))};
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var version = "1.15.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index$1(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, _excluded);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index$1(target);
    oldDraggableIndex = index$1(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index$1(dragEl);
      newDraggableIndex = index$1(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // if there is a last element, it is the target


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();

          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }

          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);

        if (firstChild === dragEl) {
          return completed(false);
        }

        target = firstChild;
        targetRect = getRect(target);

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index$1(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index$1(dragEl);
    newDraggableIndex = index$1(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index$1(dragEl);
    newDraggableIndex = index$1(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index$1(dragEl) < index$1(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index$1,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

var base$l = function base(props, context, dependencies, options) {
  var {
    sort
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;
  var fire = dependencies.fire;
  var refreshOrderStore = dependencies.refreshOrderStore;
  var value = dependencies.value;
  var sorting = dependencies.sorting;
  var length = dependencies.length;
  var path = dependencies.path;

  // ================ DATA ================

  /**
   * The DOM element containing list items.
   * 
   * @type {HTMLElement}
   * @private
   */
  var list = ref(null);

  /**
   * The `Sortable.js` instance.
   * 
   * @type {object}
   * @private
   */
  var sortable = ref(null);

  // ============== COMPUTED ==============

  /**
   * Whether the list is sortable. Can be enabled with [`sort`](#option-sort) option, but it will disabled if [`isDisabled`](#property-is-disabled) is `true`.
   * 
   * @type {boolean}
   */
  var isSortable = computed(() => {
    return sort.value && !isDisabled.value;
  });

  // =============== METHODS ==============

  /**
   * Inits Sortable.js.
   *
   * @returns {void}
   * @private
   */
  var initSortable = () => {
    sortable.value = new Sortable(list.value, {
      handle: "[data-handle]",
      onStart: () => {
        sorting.value = true;
      },
      onEnd: handleSort
    });
  };

  /**
   * Destroys Sortable.js.
   *
   * @returns {void}
   * @private
   */
  var destroySortable = () => {
    var _sortable$value;
    (_sortable$value = sortable.value) === null || _sortable$value === void 0 ? void 0 : _sortable$value.destroy();
    sortable.value = null;
  };

  /**
   * Handles `sort` event.
   *
   * @param {Event} e Sortable.js event
   * @private
   */
  var handleSort = _ref => {
    var {
      oldIndex,
      newIndex,
      item
    } = _ref;
    sorting.value = false;
    if (oldIndex === newIndex || isDisabled.value) {
      return;
    }
    list.value.children[newIndex].remove();
    list.value.insertBefore(item, list.value.children[oldIndex]);
    var valueClone = _.cloneDeep(value.value);
    valueClone.splice(newIndex, 0, valueClone.splice(oldIndex, 1)[0]);
    value.value = valueClone;
    refreshOrderStore(value.value);
    fire('sort', value.value);
  };

  // ============== WATCHERS ==============

  watch(isSortable, (n, o) => {
    if (n === true && o === false) {
      initSortable();
    } else if (n === false && o === true) {
      destroySortable();
    }
  }, {
    immediate: false
  });

  // ================ HOOKS ===============

  onMounted(() => {
    if (isSortable.value) {
      initSortable();
    }
  });
  watch(length, n => {
    var _sortable$value2;
    if (!isSortable.value) {
      return;
    }
    (_sortable$value2 = sortable.value) === null || _sortable$value2 === void 0 ? void 0 : _sortable$value2.sort(Array.from(Array(n).keys()).reduce((a, b, i) => {
      a.push("".concat(path.value, "-").concat(i));
      return a;
    }, []));
  }, {
    flush: 'post'
  });
  return {
    list,
    sortable,
    isSortable,
    handleSort,
    initSortable,
    destroySortable
  };
};

var base$k = function base(props, context, dependencies) {
  // ================ DATA ================

  /**
   * Whether the list is currently being sorted (an item is dragged).
   * 
   * @type {boolean}
   */
  var sorting = ref(false);
  return {
    sorting
  };
};

var base$j = function base(props, context, dependencies, options) {
  var {
    storeOrder,
    orderBy,
    order
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var value = dependencies.value;

  // ================= DATA ===============

  var orderFrom = ref(form$.value.$vueform.config.orderFrom);

  // =============== METHODS ==============

  /**
   * Sets the value of `storeOrder` field within a list of items to match the order.
   *
   * @param {array} value* list of items
   * @returns {void}
   * @private
   */
  var refreshOrderStore = value => {
    if (storeOrder.value) {
      _.each(value, (val, index) => {
        val[storeOrder.value] = order.value && order.value.toUpperCase() === 'DESC' ? value.length - index - (orderFrom.value == 0 ? 1 : 0) : parseInt(index) + orderFrom.value;
      });
    }
    return value;
  };

  /**
   * The name of the child (when using [`object`](#option-object)) by which the items should ordered.
   * 
   * @type {string}
   */
  var orderByName = computed(() => {
    return orderBy.value || storeOrder.value;
  });
  watch(storeOrder, (n, o) => {
    // If storeOrder exists, refresh
    if (n) {
      refreshOrderStore(value.value);
    }

    // If not, clear its value
    else {
      _.each(value.value, (val, index) => {
        val[o] = null;
      });
    }
  }, {
    immediate: false
  });
  return {
    refreshOrderStore,
    orderByName
  };
};
var multifile$2 = function multifile(props, context, dependencies, options) {
  var {
    storeOrder,
    orderBy
  } = toRefs(props);
  var {
    refreshOrderStore
  } = base$j(props, context, dependencies);

  // =============== METHODS ==============

  /**
   * The name of the field (when using [`fields`](#option-fiels)) by which the files should ordered.
   * 
   * @type {string}
   */
  var orderByName = computed(() => {
    return orderBy.value || storeOrder.value;
  });
  return {
    refreshOrderStore,
    orderByName
  };
};

var base$i = function base(props, context, dependencies) {
  var {
    object,
    element
  } = toRefs(props);

  // ============== COMPUTED ==============

  /**
    * The schema of a child element.
    * 
    * @type {object}
    * @private
    */
  var prototype = computed(() => {
    return isObject.value ? Object.assign({}, object.value, {
      type: 'object'
    }) : element.value || {};
  });

  /**
   * Whether childrens are objects.
   *
   * @type {boolean}
   * @private
   */
  var isObject = computed(() => {
    return !!object.value;
  });
  return {
    prototype,
    isObject
  };
};
var multifile$1 = function multifile(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var {
    auto,
    object,
    file,
    fields,
    storeFile,
    storeOrder,
    view,
    clickable,
    url,
    previewUrl,
    uploadTempEndpoint,
    removeTempEndpoint,
    removeEndpoint,
    params,
    softRemove
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;

  // =============== PRIVATE ==============

  var type = computed(() => {
    return options.type || 'file';
  });

  // ============== COMPUTED ==============

  /**
   * The `name` of the child element that stores the filename.
   * 
   * @type {string}
   * @private
   */
  var storeFileName = computed(() => {
    if (storeFile.value) {
      return storeFile.value;
    }
    return object.value || _.keys(fields.value).length || storeOrder.value ? 'file' : null;
  });
  var isObject = computed(() => {
    return !!object.value || !!storeOrder.value || !!_.keys(fields.value).length;
  });
  var prototype = computed(() => {
    var fileSchema = {
      type: type.value,
      auto: auto.value,
      view: view.value,
      layout: view.value === 'gallery' ? 'ElementLayoutInline' : 'ElementLayout',
      disabled: isDisabled.value,
      clickable: clickable.value,
      url: url.value,
      previewUrl: previewUrl.value,
      uploadTempEndpoint: uploadTempEndpoint.value,
      removeTempEndpoint: removeTempEndpoint.value,
      removeEndpoint: removeEndpoint.value,
      params: params.value,
      softRemove: softRemove.value
    };
    if (!isObject.value) {
      return Object.assign({}, fileSchema, file.value);
    }
    return {
      type: 'object',
      schema: Object.assign({},
      // File
      {
        [storeFileName.value]: Object.assign({}, fileSchema, {
          embed: true
        }, file.value)
      },
      // Order
      storeOrder.value ? {
        [storeOrder.value]: {
          type: 'hidden',
          meta: true
        }
      } : {},
      // Other fields
      fields.value)
    };
  });
  return {
    storeFileName,
    isObject,
    prototype
  };
};

var base$h = function base(props, context, dependencies) {
  var {
    controls,
    sort,
    min,
    max,
    addText
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;
  var value = dependencies.value;
  var form$ = dependencies.form$;

  // ================ DATA ================

  /**
   * Whether adding new items is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or have reached [`max`](#option-max) items. Can be disabled manually by setting [`controls.add`](#option-controls) to `false`.
   * 
   * @type {boolean}
   */
  var hasAdd = computed(() => {
    return !isDisabled.value && (controls.value.add || controls.value.add === undefined) && (max.value === -1 || max.value > value.value.length);
  });

  /**
   * Whether remove items is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or has <= [`min`](#option-min) items. Can be disabled manually by setting [`controls.remove`](#option-controls) to `false`.
   * 
   * @type {boolean}
   */
  var hasRemove = computed(() => {
    return !isDisabled.value && (controls.value.remove || controls.value.remove === undefined) && (min.value === -1 || min.value < value.value.length);
  });

  /**
   * Whether list items should be sortable. Can be enabled by setting [`sort`](#option-sort) to `true`, but will return `false` if the element has [`isDisabled: true`](#property-is-disabled).
   * 
   * @type {boolean}
   */
  var hasSort = computed(() => {
    return !isDisabled.value && (controls.value.sort || controls.value.sort === undefined) && sort.value;
  });

  /**
   * The label of add button.
   * 
   * @type {string}
   */
  var addLabel = computed(() => {
    return addText.value || form$.value.translations.vueform.elements.list.add;
  });
  return {
    hasAdd,
    hasRemove,
    hasSort,
    addLabel
  };
};
var multifile = function multifile(props, context, dependencies) {
  var {
    controls,
    sort
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;
  var hasUploading = dependencies.hasUploading;

  // ================ DATA ================

  /**
   * Whether adding new files is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled). Can be disabled manually by setting [`controls.add`](#option-controls) to `false`.
   * 
   * @type {boolean}
   */
  var hasAdd = computed(() => {
    return controls.value.add || controls.value.add === undefined;
  });

  /**
   * Whether remove files is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or a temporary file upload is in progress. Can be disabled manually by setting [`controls.remove`](#option-controls) to `false`.
   * 
   * @type {boolean}
   */
  var hasRemove = computed(() => {
    return !isDisabled.value && (controls.value.remove || controls.value.remove === undefined) && !hasUploading.value;
  });

  /**
   * Whether list files should be sortable. Can be enabled by setting [`sort`](#option-sort) to `true`, but will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or a temporary file upload is in progress.
   * 
   * @type {boolean}
   */
  var hasSort = computed(() => {
    return !isDisabled.value && (controls.value.sort || controls.value.sort === undefined) && sort.value && !hasUploading.value;
  });
  return {
    hasAdd,
    hasRemove,
    hasSort
  };
};

var ListElement = {
  name: 'ListElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'add', 'remove', 'sort', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'list',
      private: true
    },
    default: {
      required: false,
      type: [Array],
      default: undefined
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    onAdd: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onRemove: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onSort: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    element: {
      required: false,
      type: [Object],
      default: null
    },
    object: {
      required: false,
      type: [Object],
      default: null
    },
    initial: {
      required: false,
      type: [Number],
      default: 1
    },
    min: {
      required: false,
      type: [Number],
      default: -1
    },
    max: {
      required: false,
      type: [Number],
      default: -1
    },
    addText: {
      required: false,
      type: [String],
      default: null,
      '@default': 'locale.elements.list.add'
    },
    sort: {
      required: false,
      type: [Boolean],
      default: false
    },
    controls: {
      required: false,
      type: [Object],
      default: () => ({
        add: true,
        remove: true,
        sort: true
      })
    },
    storeOrder: {
      required: false,
      type: [String],
      default: null
    },
    order: {
      required: false,
      type: [String],
      default: null
    },
    orderBy: {
      required: false,
      type: [String],
      default: null
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$M, base$S, base$Q, array$1, base$i, base$m, base$k, base$j, base$1a, list$4, base$I, base$_, base$G, base$11, list$5, list$2, list$1, base$h, array, base$Z, base$Y, base$X, base$T, base$W, list$3, base$l, base$P, list, base$R];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var base$g = function base(props, context, dependencies) {
  var options_ = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var {
    provider,
    extendOptions
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var value = dependencies.value;
  var clear = dependencies.clear;
  var input = dependencies.input;

  // ============== PRIVATE ===============

  var inputElement = () => {
    return options_.input ? options_.input.value : input.value;
  };

  // ================ DATA ================

  /**
   * The location service that's initalized once the component is mounted.
   * 
   * @type {class}
   * @default null
   */
  var locationService = ref(null);

  /**
   * The raw location object of location provider (Google/Algolia).
   * 
   * @type {class}
   * @default null
   */
  var location = ref({});

  // ============== COMPUTED ==============

  var locationProvider = computed(() => {
    return provider.value || form$.value.$vueform.config.locationProvider;
  });

  /**
  * Default options for location provider. Can be extended with [`extendOptions`](#option-extend-options).
  * 
  * @type {object} 
  * @default {}
  */
  var defaultOptions = computed(() => {
    var providers = {
      google: {
        fields: ['geometry', 'formatted_address', 'address_components']
      },
      algolia: {
        type: 'address',
        appId: form$.value.$vueform.config.services.algolia.app_id,
        apiKey: form$.value.$vueform.config.services.algolia.api_key,
        templates: options_.templates || {}
      }
    };
    return providers[locationProvider.value];
  });

  /**
  * Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider.
  * 
  * @type {object} 
  * @default {}
  * @option
  */
  var providerOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });

  // =============== METHODS ==============

  /**
   * Handles location service's address change.
   *
   * @param {object} data an object containing address data
   * @param {object} raw an object containing raw address data (based on provider)
   * @private
   */
  var handleAddressChange = (data, raw) => {
    if (options_.handleAddressChange) {
      options_.handleAddressChange(data, raw);
      return;
    }
    location.value = raw;
    value.value = data;
  };

  /* istanbul ignore next */
  /**
   * 
   *
   * @private
   */
  var handleLocationBlur = () => {
    if (inputElement().value.length) {
      inputElement().value = value.value.formatted_address;
    } else {
      clear();
    }
  };

  /**
   * Initalizes location service. Can be used to re-initalize location service.
   *
   * @returns {void}
   */
  var initLocationService = () => {
    if (locationService.value) {
      locationService.value.destroy();
    }
    locationService.value = new form$.value.$vueform.services.location[locationProvider.value]();
    locationService.value.init(inputElement(), handleAddressChange, providerOptions.value);
  };

  // ============== WATCHERS ==============

  watch([locationProvider, providerOptions], () => {
    initLocationService();
  }, {
    deep: true,
    immediate: false
  });

  // =============== HOOKS ================

  onMounted(() => {
    initLocationService();
  });
  return {
    locationService,
    location,
    defaultOptions,
    providerOptions,
    handleAddressChange,
    handleLocationBlur,
    initLocationService
  };
};

var LocationElement = {
  name: 'LocationElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'location',
      private: true
    },
    default: {
      required: false,
      type: [Object],
      default: () => ({
        country: null,
        country_code: null,
        state: null,
        state_code: null,
        city: null,
        zip: null,
        address: null,
        formatted_address: null,
        lat: null,
        lng: null
      })
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean, Object],
      localized: true,
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addons: {
      required: false,
      type: [Object],
      localized: true,
      default: () => ({})
    },
    provider: {
      required: false,
      type: [String],
      default: 'google'
    },
    displayKey: {
      required: false,
      type: [String],
      default: 'formatted_address'
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, location, base$S, base$u, base$1a, base$N, base$y, base$I, base$F, location$2, base$13, base$J, base$g, base$x, base$_, base$G, base$Y, base$X, base$T, base$Z, base$W, base$s, base$P, location$1, base$R, base$t];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after'];
    return _objectSpread2$1({}, location$3(props, context));
  }
};

var base$f = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;
  var add = dependencies.add;
  var input = dependencies.input;
  var isObject = dependencies.isObject;
  var storeFileName = dependencies.storeFileName;
  var children$ = dependencies.children$;

  // ============== COMPUTED ==============

  /**
   * Whether any of the files are currently being uploaded to the server (initiated by form submit).
   * 
   * @type {boolean}
   */
  var preparing = computed(() => {
    return _.some(children$.value, {
      available: true,
      preparing: true
    });
  });

  /**
   * Whether any of the files are currently being uploaded to the server (initiated by the user).
   * 
   * @type {boolean}
   */
  var hasUploading = computed(() => {
    return _.some(children$.value, {
      uploading: true
    });
  });

  // =============== METHODS ==============

  /**
   * Handles `change` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */
  var handleChange = e => {
    if (!e.target || !e.target.files || e.target.files.length == 0 || isDisabled.value) {
      return;
    }
    _.each(e.target.files, file => {
      add(isObject.value ? {
        [storeFileName.value]: file
      } : file);
    });
    input.value.value = '';
  };

  /**
   * Handles `click` event.
   * 
   * @returns {void}
   * @private
   */
  var handleClick = () => {
    if (isDisabled.value) {
      return;
    }
    input.value.click();
  };
  return {
    preparing,
    hasUploading,
    handleChange,
    handleClick
  };
};

var MultifileElement = {
  name: 'MultifileElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'add', 'remove', 'sort', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'multifile',
      private: true
    },
    default: {
      required: false,
      type: [Array],
      default: () => []
    },
    initial: {
      required: false,
      type: [Number],
      default: 0,
      private: true
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    onAdd: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onRemove: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onSort: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    view: {
      type: [String],
      required: false,
      default: 'file'
    },
    drop: {
      required: false,
      type: [Boolean],
      default: false
    },
    sort: {
      required: false,
      type: [Boolean],
      default: false
    },
    controls: {
      required: false,
      type: [Object],
      default: () => ({
        add: true,
        remove: true,
        sort: true
      })
    },
    object: {
      required: false,
      type: [Boolean],
      default: null
    },
    storeFile: {
      required: false,
      type: [String],
      default: 'file'
    },
    fields: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    storeOrder: {
      required: false,
      type: [String],
      default: null
    },
    order: {
      required: false,
      type: [String],
      default: null
    },
    orderBy: {
      required: false,
      type: [String],
      default: null
    },
    file: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    accept: {
      required: false,
      type: [String, Array],
      default: null
    },
    clickable: {
      required: false,
      type: [Boolean],
      default: true
    },
    url: {
      required: false,
      type: [String, Boolean],
      default: '/'
    },
    previewUrl: {
      required: false,
      type: [String],
      default: undefined
    },
    auto: {
      required: false,
      type: [Boolean],
      default: true
    },
    uploadTempEndpoint: {
      required: false,
      type: [Object, String, Function],
      default: undefined,
      '@default': 'config.endpoints.uploadTempFile'
    },
    removeTempEndpoint: {
      required: false,
      type: [Object, String, Function],
      default: undefined,
      '@default': 'config.endpoints.removeTempFile'
    },
    removeEndpoint: {
      required: false,
      type: [Object, String, Function],
      default: undefined,
      '@default': 'config.endpoints.removeFile'
    },
    params: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    softRemove: {
      required: false,
      type: [Boolean],
      default: false
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$M, base$Q, array$1, base$m, base$K, base$k, multifile$1, base$S, base$1a, list$4, base$I, base$_, base$G, list$2, base$F, array, base$11, base$13, base$Z, base$Y, base$X, base$W, multifile$2, multifile$5, base$f, multifile, multifile$3, base$T, base$l, base$P, multifile$4, base$R];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var base$e = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var fire = dependencies.fire;
  var el$ = dependencies.el$;

  // =============== METHODS ==============

  /**
   * Handles `select` event.
   *
   * @param {object} option* the selected option object
   * @returns {void}
   * @private
   */
  var handleSelect = option => {
    fire('select', option, el$.value);
  };

  /**
   * Handles `deselect` event.
   *
   * @param {object} option* the deselected option object
   * @returns {void}
   * @private
   */
  var handleDeselect = option => {
    fire('deselect', option, el$.value);
  };

  /**
   * Handles `search-change` event.
   *
   * @param {string} searchQuery* the current search query
   * @returns {void}
   * @private
   */
  var handleSearchChange = searchQuery => {
    fire('search-change', searchQuery, el$.value);
  };

  /**
   * Handles `open` event.
   *
   * @returns {void}
   * @private
   */
  var handleOpen = () => {
    fire('open', el$.value);
  };

  /**
   * Handles `close` event.
   *
   * @returns {void}
   * @private
   */
  var handleClose = () => {
    fire('close', el$.value);
  };

  /**
   * Handles `clear` event.
   *
   * @returns {void}
   * @private
   */
  var handleClear = () => {
    fire('clear', el$.value);
  };

  /**
   * Handles `paste` event.
   * 
   * @param {Event} e event
   * @returns {void}
   * @private
   */
  var handlePaste = e => {
    fire('paste', e, el$.value);
  };

  /**
   * Handles `tag` event.
   *
   * @param {string} searchQuery* the current search query
   * @returns {void}
   * @private
   */
  var handleTag = searchQuery => {
    // unimplemented
  };

  // =============== HOOKS ================

  return {
    handleSelect,
    handleDeselect,
    handleSearchChange,
    handleOpen,
    handleClose,
    handleClear,
    handlePaste,
    handleTag
  };
};

function spliceMultiple(array, indexes) {
  indexes.sort();
  for (var i = indexes.length - 1; i >= 0; i--) {
    array.splice(indexes[i], 1);
  }
  return array;
}

var base$d = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var value = dependencies.value;

  // =============== PRIVATE ==============

  /**
   * Whether an option is already selected.
   *
   * @param {object} option* value of the option
   * @returns {boolean}
   * @private
   */
  var inValue = option => {
    return value.value.indexOf(option) !== -1;
  };

  // =============== METHODS ==============

  /**
   * Selects one or more options.
   *
   * @param {str|array} options* value(s) of the option(s) to select
   * @returns {void}
   */
  var select = options => {
    if (!_.isArray(options)) {
      options = [options];
    }
    var val = _.clone(value.value);
    _.each(options, option => {
      if (inValue(normalize(option))) {
        return;
      }
      val.push(option);
    });
    value.value = val;
  };

  /**
   * Deselects one or more options.
   *
   * @param {str|array} options* value(s) of the option(s) to deselect
   * @returns {void}
   */
  var deselect = options => {
    if (!_.isArray(options)) {
      options = [options];
    }
    var val = _.clone(value.value);
    var indexes = [];
    _.each(options, option => {
      var i = value.value.indexOf(option);
      if (i === -1 || indexes.indexOf(i) !== -1) {
        return;
      }
      indexes.push(i);
    });
    value.value = spliceMultiple(val, indexes);
  };
  return {
    select,
    deselect
  };
};

var base$c = function base(props, context, dependencies) {
  var {
    loading
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var pending = dependencies.pending;

  // ============== COMPUTED ==============

  /**
  * Whether the element is in loading state.
  * 
  * @type {boolean}
  */
  var isLoading = computed(() => {
    return pending.value || loading.value;
  });
  return {
    isLoading
  };
};

var MultiselectElement = {
  name: 'MultiselectElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'select', 'deselect', 'search-change', 'open', 'close', 'clear', 'paste', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'multiselect',
      private: true
    },
    default: {
      required: false,
      type: [Array],
      default: () => []
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean, Object],
      localized: true,
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null,
      native: false
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    onSelect: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onDeselect: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onSearchChange: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onOpen: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClose: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClear: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onPaste: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    native: {
      required: false,
      type: [Boolean],
      default: true
    },
    items: {
      required: false,
      type: [Object, Array, Function, String],
      localized: true,
      default: () => ({})
    },
    labelProp: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    valueProp: {
      type: [String],
      required: false,
      default: 'value',
      native: false
    },
    dataKey: {
      type: [String],
      required: false,
      default: undefined
    },
    searchParam: {
      type: [String],
      required: false,
      default: 'query'
    },
    search: {
      required: false,
      type: [Boolean],
      default: false,
      native: false
    },
    trackBy: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    strict: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    multipleLabel: {
      type: [Function],
      required: false,
      native: false
    },
    multipleLabelSingle: {
      type: [String],
      required: false,
      native: false,
      '@default': 'locale.vueform.multiselect.multipleLabelOne'
    },
    multipleLabelMultiple: {
      type: [String],
      required: false,
      native: false,
      '@default': 'locale.vueform.multiselect.multipleLabelMore'
    },
    create: {
      required: false,
      type: [Boolean],
      default: false,
      native: false
    },
    appendNewOption: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    addOptionOn: {
      type: [Array],
      required: false,
      default: () => ['enter'],
      native: false
    },
    object: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    limit: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    max: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    groups: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    groupLabel: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    groupOptions: {
      type: [String],
      required: false,
      default: 'items',
      native: false
    },
    groupHideEmpty: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    groupSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    openDirection: {
      type: [String],
      required: false,
      default: 'bottom',
      native: false
    },
    canClear: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    clearOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    closeOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    closeOnDeselect: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    delay: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    minChars: {
      type: [Number],
      required: false,
      default: 0,
      native: false
    },
    resolveOnLoad: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    filterResults: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    clearOnSearch: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    hideSelected: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    caret: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    noOptionsText: {
      type: [String, Object],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noOptions',
      localized: true,
      native: false
    },
    noResultsText: {
      type: [String, Object],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noResults',
      localized: true,
      native: false
    },
    autocomplete: {
      type: [String],
      required: false,
      native: false
    },
    inputType: {
      type: [String],
      required: false,
      default: 'text',
      native: false
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, array$1, base$S, base$u, base$1a, multiselect$2, base$I, base$H, base$c, multiselect$1, base$z, base$F, base$13, base$J, array, base$_, base$G, base$Y, base$X, base$T, base$Z, base$W, base$e, base$d, multiselect, base$P, base$E, base$R, base$t];
    context.slots = ['option', 'multiple-label', 'placeholder', 'group-label', 'before-list', 'after-list', 'no-results', 'no-options', 'caret', 'spinner', 'clear', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var ObjectElement = {
  name: 'ObjectElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'remove', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'object',
      private: true
    },
    default: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    schema: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    embed: {
      required: false,
      type: [Boolean],
      default: false
    },
    onRemove: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$M, base$S, object$1, base$1a, base$N, object$5, object$3, base$_, object, base$11, object$7, object$4, base$Y, base$X, base$T, base$Z, base$W, object$6, base$P, object$2, base$R];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var base$b = function base(props, context, dependencies) {
  var {
    radioName,
    radioValue
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var update = dependencies.update;
  var nullValue = dependencies.nullValue;
  var fieldId = dependencies.fieldId;
  var path = dependencies.path;
  var form$ = dependencies.form$;

  // ================ DATA ================

  /**
   * The list of listeners.
   * 
   * @type {array}
   * @default []
   * @private
   */
  var listeners = ref([]);

  // ============== COMPUTED ==============

  /**
   * The `name` attribute of the element. If [`id`](#option-id) is not provided [`name`](#option-name) will be used.
   * 
   * @type {string}
   */
  var inputName = computed(() => {
    return radioName.value || path.value;
  });

  // =============== METHODS ==============

  /**
   * Checks the radio.
   *
   * @returns {void}
   */
  var check = () => {
    update(radioValue.value);
  };

  /**
   * Unhecks the radio.
   *
   * @returns {void}
   */
  var uncheck = () => {
    update(nullValue.value);
  };

  /**
   * Watches radio name change.
   *
   * @returns {void}
   * @private
   */
  var watchChange = (value, old) => {
    if (old) {
      form$.value.$el.querySelectorAll("input[name=\"".concat(value, "\"")).forEach((element, i) => {
        if (listeners.value[i]) {
          element.removeEventListener('change', listeners.value[i]);
        }
      });
    }
    form$.value.$el.querySelectorAll("input[name=\"".concat(value, "\"")).forEach(element => {
      var listener = () => {
        if (element.id != fieldId.value) {
          update(nullValue.value);
        }
      };
      listeners.value.push(listener);
      element.addEventListener('change', listener);
    });
  };

  // =============== HOOKS ================

  onMounted(() => {
    watchChange(inputName.value);
  });

  // ============= WATCTHERS ==============

  watch(inputName, watchChange);
  return {
    inputName,
    check,
    uncheck
  };
};

var RadioElement = {
  name: 'RadioElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'radio',
      private: true
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    radioName: {
      required: false,
      type: [String],
      default: null
    },
    radioValue: {
      required: false,
      type: [Boolean, String, Number],
      default: 1
    },
    text: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, base$S, base$1a, base$N, base$C, base$I, base$13, base$H, base$F, base$J, base$_, base$G, base$Y, base$X, base$T, base$Z, base$W, base$b, radio, base$E, base$R, base$D];
    context.slots = ['default', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var RadiogroupElement = {
  name: 'RadiogroupElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'radiogroup',
      private: true
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    items: {
      required: false,
      type: [Object, Array, Function, String],
      localized: true,
      default: () => ({})
    },
    disables: {
      required: false,
      type: [Array],
      default: () => []
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$M, base$C, base$S, base$1a, base$N, radiogroup$2, radiogroup, base$I, base$13, base$H, base$F, base$J, base$_, base$G, base$Y, base$X, base$T, base$Z, base$W, radiogroup$1, base$E, base$R];
    context.slots = ['radio', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var SelectElement = {
  name: 'SelectElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'select', 'deselect', 'search-change', 'open', 'close', 'clear', 'paste', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'select',
      private: true
    },
    default: {
      required: false,
      type: [String, Number, Object],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean, Object],
      localized: true,
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    onSelect: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onDeselect: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onSearchChange: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onOpen: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClose: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClear: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onPaste: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    native: {
      required: false,
      type: [Boolean],
      default: true
    },
    items: {
      required: false,
      type: [Object, Array, Function, String],
      localized: true,
      default: () => ({})
    },
    labelProp: {
      type: [String],
      required: false,
      default: 'label'
    },
    valueProp: {
      type: [String],
      required: false,
      default: 'value'
    },
    dataKey: {
      type: [String],
      required: false,
      default: undefined
    },
    searchParam: {
      type: [String],
      required: false,
      default: 'query'
    },
    search: {
      required: false,
      type: [Boolean],
      default: false,
      native: false
    },
    trackBy: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    strict: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    create: {
      required: false,
      type: [Boolean],
      default: false,
      native: false
    },
    appendNewOption: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    addOptionOn: {
      type: [Array],
      required: false,
      default: () => ['enter'],
      native: false
    },
    object: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    limit: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    groups: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    groupLabel: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    groupOptions: {
      type: [String],
      required: false,
      default: 'items',
      native: false
    },
    groupHideEmpty: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    openDirection: {
      type: [String],
      required: false,
      default: 'bottom',
      native: false
    },
    canDeselect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    canClear: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    closeOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    closeOnDeselect: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    delay: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    minChars: {
      type: [Number],
      required: false,
      default: 0,
      native: false
    },
    resolveOnLoad: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    filterResults: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    clearOnSearch: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    caret: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    truncate: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    noOptionsText: {
      type: [String, Object],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noOptions',
      localized: true,
      native: false
    },
    noResultsText: {
      type: [String, Object],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noResults',
      localized: true,
      native: false
    },
    autocomplete: {
      type: [String],
      required: false,
      native: false
    },
    inputType: {
      type: [String],
      required: false,
      default: 'text',
      native: false
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, base$C, base$S, base$u, base$1a, base$N, base$I, base$H, base$c, select$1, base$z, base$F, base$13, base$J, base$x, base$_, base$G, base$Y, base$X, base$T, base$Z, base$W, base$e, select, base$P, base$E, base$R, base$t];
    context.slots = ['option', 'single-label', 'placeholder', 'group-label', 'before-list', 'after-list', 'no-results', 'no-options', 'caret', 'spinner', 'clear', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var base$a = function base(props, context, dependencies) {
  var {
    lazy
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var value = dependencies.value;

  // =============== METHODS ==============

  /**
   * Handles `update` event if not lazy.
   *
   * @param {string} val* value of the element
   * @returns {void}
   * @private
   */
  var handleUpdate = val => {
    if (lazy.value) {
      return;
    }
    value.value = val;
  };
  return {
    handleUpdate
  };
};

var SliderElement = {
  name: 'SliderElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'slider',
      private: true
    },
    default: {
      required: false,
      type: [Number, Array],
      default: 0
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    min: {
      required: false,
      type: [Number],
      default: 0
    },
    max: {
      required: false,
      type: [Number],
      default: 100
    },
    step: {
      required: false,
      type: [Number],
      default: 1
    },
    tooltips: {
      required: false,
      type: [Boolean],
      default: true
    },
    showTooltip: {
      required: false,
      type: [String],
      default: 'always'
    },
    tooltipPosition: {
      required: false,
      type: [String],
      default: null
    },
    merge: {
      required: false,
      type: [Number],
      default: -1
    },
    format: {
      required: false,
      type: [Object, Function],
      default: null
    },
    orientation: {
      required: false,
      type: [String],
      default: 'horizontal'
    },
    direction: {
      required: false,
      type: [String],
      default: 'ltr'
    },
    lazy: {
      required: false,
      type: [Boolean],
      default: true,
      private: true
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, min, base$S, base$1a, base$N, base$I, slider, base$F, slider$1, base$13, base$J, base$_, base$G, base$Y, base$X, base$T, base$Z, base$W, base$v, base$a, base$P, base$E, base$R];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var base$9 = function base(props, context, dependencies) {
  var {
    content
  } = toRefs(props);

  // ============== COMPUTED ==============

  /**
   * Determines if HTML content should be rendered for the element.
   * 
   * @type {boolean}
   * @private
   */
  var isHtml = computed(() => {
    return typeof content.value == 'string';
  });
  return {
    isHtml
  };
};

var StaticElement = {
  name: 'StaticElement',
  mixins: [BaseElement, HasView],
  emits: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'static',
      private: true
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    content: {
      required: false,
      type: [String, Object],
      default: ''
    },
    wrap: {
      required: false,
      type: [Boolean],
      default: true
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, static_$1, base$9, base$1a, static_$2, base$13, base$_, base$Y, base$X, base$T, base$Z, base$W, base$S, static_$3, base$R];
    context.slots = ['default', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, static_(props, context));
  }
};

var base$8 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var fire = dependencies.fire;
  var el$ = dependencies.el$;

  /**
   * Handles `tag` event.
   *
   * @param {string} searchQuery* the current search query.
   * @returns {void}
   * @private
   */
  var handleTag = searchQuery => {
    fire('tag', searchQuery, el$.value);
  };
  return {
    handleTag
  };
};

var TagsElement = {
  name: 'TagsElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'select', 'deselect', 'search-change', 'open', 'close', 'tag', 'clear', 'paste', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'tags',
      private: true
    },
    default: {
      required: false,
      type: [Array],
      default: () => []
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean, Object],
      localized: true,
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    onSelect: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onDeselect: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onSearchChange: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onOpen: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClose: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onTag: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClear: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onPaste: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    items: {
      required: false,
      type: [Object, Array, Function, String],
      localized: true,
      default: () => ({})
    },
    labelProp: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    valueProp: {
      type: [String],
      required: false,
      default: 'value',
      native: false
    },
    dataKey: {
      type: [String],
      required: false,
      default: undefined
    },
    searchParam: {
      type: [String],
      required: false,
      default: 'query'
    },
    search: {
      required: false,
      type: [Boolean],
      default: false,
      native: false
    },
    trackBy: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    strict: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    create: {
      required: false,
      type: [Boolean],
      default: false
    },
    appendNewOption: {
      type: [Boolean],
      required: false,
      default: true
    },
    addOptionOn: {
      type: [Array],
      required: false,
      default: () => ['enter']
    },
    object: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    limit: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    max: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    groups: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    groupLabel: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    groupOptions: {
      type: [String],
      required: false,
      default: 'items',
      native: false
    },
    groupHideEmpty: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    groupSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    openDirection: {
      type: [String],
      required: false,
      default: 'bottom',
      native: false
    },
    canClear: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    clearOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    closeOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    closeOnDeselect: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    delay: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    minChars: {
      type: [Number],
      required: false,
      default: 0,
      native: false
    },
    resolveOnLoad: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    filterResults: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    clearOnSearch: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    hideSelected: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    showOptions: {
      type: [Boolean],
      required: false,
      default: true
    },
    caret: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    noOptionsText: {
      type: [String, Object],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noOptions',
      localized: true,
      native: false
    },
    noResultsText: {
      type: [String, Object],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noResults',
      localized: true,
      native: false
    },
    autocomplete: {
      type: [String],
      required: false,
      native: false
    },
    inputType: {
      type: [String],
      required: false,
      default: 'text',
      native: false
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, array$1, base$S, base$u, base$1a, tags$2, base$I, base$H, base$c, tags$1, base$z, base$F, base$13, base$J, array, base$_, base$G, base$Y, base$X, base$T, base$Z, base$W, base$e, base$8, base$d, tags, base$P, base$E, base$R, base$t];
    context.slots = ['tag', 'option', 'placeholder', 'group-label', 'before-list', 'after-list', 'no-results', 'no-options', 'caret', 'spinner', 'clear', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var base$7 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var model = dependencies.model;

  // =============== METHODS ==============

  /**
   * Handles `input` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */
  var handleInput = e => {
    model.value = e.target.value;
  };
  return {
    handleInput
  };
};

var base$6 = function base(props, context, dependencies) {
  var {
    autogrow
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var input = dependencies.input;
  var value = dependencies.value;

  // =============== METHODS ==============

  /**
   * Updates the height of the input based in its contents when [`autogrow`](#option-autogrow) is enabled.
   * 
   * @returns {void}
   */
  var autosize = () => {
    if (!autogrow.value) {
      return;
    }
    form$.value.$vueform.services.autosize.update(input.value);
  };

  // ============== WATCHERS ==============

  watch(autogrow, newValue => {
    if (newValue) {
      form$.value.$vueform.services.autosize(input.value);
    } else {
      form$.value.$vueform.services.autosize.destroy(input.value);
    }
  });
  watch(value, () => {
    autosize();
  });

  // =============== HOOKS ================

  onMounted(() => {
    if (autogrow.value) {
      nextTick(() => {
        form$.value.$vueform.services.autosize(input.value);
      });
    }
  });
  return {
    autosize
  };
};
var multilingual = function multilingual(props, context, dependencies) {
  var {
    autosize
  } = base$6(props, context, dependencies);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;

  // =============== HOOKS ================

  onMounted(() => {
    form$.value.on('language', () => {
      autosize();
    });
  });
  return {
    autosize
  };
};

var base$5 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var fire = dependencies.fire;
  var el$ = dependencies.el$;

  // =============== METHODS ==============

  /**
   * Handles `blur` event.
   *
   * @returns {void}
   * @private
   */
  var handleBlur = () => {
    fire('blur', el$.value);
  };
  return {
    handleBlur
  };
};

var base$4 = function base(props, context, dependencies) {
  var {
    fire,
    el$
  } = dependencies;

  // =============== METHODS ==============

  /**
   * Handles `keydown` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */
  var handleKeydown = e => {
    fire('keydown', e, el$.value);
  };

  /**
   * Handles `keyup` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */
  var handleKeyup = e => {
    fire('keyup', e, el$.value);
  };

  /**
   * Handles `keypress` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */
  var handleKeypress = e => {
    fire('keypress', e, el$.value);
  };
  return {
    handleKeydown,
    handleKeyup,
    handleKeypress
  };
};

var TextareaElement = {
  name: 'TextareaElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'keydown', 'keyup', 'keypress', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'textarea',
      private: true
    },
    default: {
      required: false,
      type: [String, Number, Object],
      localized: true,
      default: null
    },
    addons: {
      required: false,
      type: [Object],
      localized: true,
      default: () => ({})
    },
    autogrow: {
      required: false,
      type: [Boolean],
      default: true
    },
    rows: {
      required: false,
      type: [Number],
      default: 3
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean, Object],
      localized: true,
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onKeydown: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onKeyup: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onKeypress: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, base$C, base$S, base$u, base$1a, base$N, base$y, text$1, base$13, text, base$F, base$J, base$x, base$_, base$G, base$Y, base$X, base$T, base$Z, base$W, base$7, base$6, base$s, base$5, base$P, base$E, base$R, base$4, base$t];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var TextElement = {
  name: 'TextElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'keydown', 'keyup', 'keypress', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'text',
      private: true
    },
    default: {
      required: false,
      type: [String, Number, Object],
      localized: true,
      default: null
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean, Object],
      localized: true,
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    inputType: {
      required: false,
      type: [String],
      default: 'text'
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addons: {
      required: false,
      type: [Object],
      localized: true,
      default: () => ({})
    },
    autocomplete: {
      required: false,
      type: [String, Number],
      default: null
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false
    },
    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onKeydown: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onKeyup: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onKeypress: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, base$C, base$S, base$u, base$1a, base$N, base$y, text$1, base$13, text, base$c, base$F, base$J, base$x, base$_, base$G, base$Y, base$X, base$T, base$Z, base$W, base$7, base$s, base$5, base$P, base$E, base$R, base$4, base$t];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var ToggleElement = {
  name: 'ToggleElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'toggle',
      private: true
    },
    default: {
      required: false,
      type: [String, Number, Boolean],
      default: undefined // falseValue
    },

    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    text: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    labels: {
      required: false,
      type: [Object],
      localized: true,
      default: () => ({})
    },
    trueValue: {
      required: false,
      type: [Boolean, String, Number],
      default: true
    },
    falseValue: {
      required: false,
      type: [Boolean, String, Number],
      default: false
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, boolean, base$S, base$1a, base$N, toggle, base$I, base$13, base$H, base$F, base$J, base$_, base$G, base$Y, base$X, base$T, base$Z, base$W, base$v, base$B, toggle$1, base$E, base$R, base$D];
    context.slots = ['default', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var base$3 = function base(props, context, dependencies) {
  var {
    endpoint,
    method
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var input = dependencies.input;

  // ================ DATA ================

  /**
   * Whether the editor is focused.
   * 
   * @type {boolean}
   */
  var focused = ref(false);

  // ============== COMPUTED ==============

  /**
  * The endpoint that uploads attachment. Can be changed by setting [`endpoint`](#endpoint) option.
  * 
  * @type {string}
  * @default `config.endpoints.attachment.url`
  * @private
  */
  var editorEndpoint = computed(() => {
    return endpoint.value || form$.value.$vueform.config.endpoints.attachment.url;
  });

  /**
  * The method to use to upload attachment. Can be changed by setting [`method`](#method) option.
  * 
  * @type {string}
  * @default `config.endpoints.attachment.method`
  * @private
  */
  var editorMethod = computed(() => {
    return method.value || form$.value.$vueform.config.endpoints.attachment.method;
  });

  // =============== HOOKS ================

  onMounted(() => {
    input.value.editor$.addEventListener('focus', () => {
      focused.value = true;
    });
    input.value.editor$.addEventListener('blur', () => {
      focused.value = false;
    });
  });
  return {
    editorEndpoint,
    editorMethod,
    focused
  };
};

var base$2 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var fire = dependencies.fire;
  var listeners = dependencies.listeners;

  // =============== METHODS ==============

  /**
   * Handles `alert` event.
   *
   * @param {string} message* alert message
   * @returns {void}
   * @private
   */
  var handleAlert = message => {
    fire('alert', message);
    if (!listeners.value.alert) {
      alert(message);
    }
  };
  return {
    handleAlert
  };
};

var EditorElement = {
  name: 'EditorElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'alert', 'error', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'editor',
      private: true
    },
    default: {
      required: false,
      type: [String, Number, Object],
      localized: true,
      default: null
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    onError: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onAlert: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    accept: {
      required: false,
      type: [Array],
      default: () => []
    },
    acceptMimes: {
      required: false,
      type: [Array],
      default: () => []
    },
    endpoint: {
      required: false,
      type: [String, Function],
      default: null,
      '@default': 'config.endpoints.attachment.url'
    },
    method: {
      required: false,
      type: [String],
      default: null,
      '@default': 'config.endpoints.attachment.method'
    },
    hideTools: {
      required: false,
      type: [Array],
      default: () => []
    },
    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, base$C, base$S, base$1a, base$N, text$1, base$13, text, base$F, editor, base$x, base$_, base$G, base$Y, base$X, base$3, base$T, base$Z, base$W, base$7, base$2, base$n, base$5, base$P, base$E, editor$1, base$t];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$L(props, context));
  }
};

var base$1 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;

  // ============== COMPUTED ===============

  /**
   * The language code of the currently selected language (2 letters).
   * 
   * @type {string}
   */
  var language = computed(() => {
    return form$.value.selectedLanguage;
  });

  /**
   * Available language codes.
   * 
   * @type {array}
   */
  var languages = computed(() => {
    return _.keys(form$.value.options.languages);
  });
  return {
    language,
    languages
  };
};

var TTextareaElement = {
  name: 'TTextareaElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'keydown', 'keyup', 'keypress', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 't-textarea',
      private: true
    },
    default: {
      required: false,
      type: [Object, String, Number],
      localized: true,
      default: null
    },
    addons: {
      required: false,
      type: [Object],
      localized: true,
      default: () => ({})
    },
    autogrow: {
      required: false,
      type: [Boolean],
      default: true
    },
    rows: {
      required: false,
      type: [Number],
      default: 3
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean, Object],
      localized: true,
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onKeydown: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onKeyup: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onKeypress: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, base$S, base$u, base$1a, base$N, base$y, base$1, multilingual$2, multilingual$6, multilingual$4, base$13, multilingual$5, multilingual$7, multilingual$1, base$_, base$G, base$Y, base$X, base$T, base$Z, base$W, base$7, multilingual, base$s, base$5, base$P, multilingual$3, base$R, base$4, base$t];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after'];
    return _objectSpread2$1({}, multilingual$8(props, context));
  }
};

var TTextElement = {
  name: 'TTextElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'keydown', 'keyup', 'keypress', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 't-text',
      private: true
    },
    default: {
      required: false,
      type: [Object, String, Number],
      localized: true,
      default: undefined
    },
    addons: {
      required: false,
      type: [Object],
      localized: true,
      default: () => ({})
    },
    autocomplete: {
      required: false,
      type: [String, Number],
      default: null
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean, Object],
      localized: true,
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    inputType: {
      required: false,
      type: [String],
      default: 'text'
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    placeholder: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false
    },
    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onKeydown: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onKeyup: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onKeypress: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, base$S, base$u, base$1a, base$N, base$y, base$1, multilingual$2, multilingual$6, multilingual$4, base$13, multilingual$5, base$c, multilingual$7, multilingual$1, base$_, base$G, base$Y, base$X, base$T, base$Z, base$W, base$7, base$s, base$5, base$P, multilingual$3, base$R, base$4, base$t];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after'];
    return _objectSpread2$1({}, multilingual$8(props, context));
  }
};

var TEditorElement = {
  name: 'TEditorElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'alert', 'error', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 't-editor',
      private: true
    },
    default: {
      required: false,
      type: [Object, String, Number],
      localized: true,
      default: null
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    onError: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onAlert: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    accept: {
      required: false,
      type: [Array],
      default: null
    },
    acceptMimes: {
      required: false,
      type: [Array],
      default: null
    },
    endpoint: {
      required: false,
      type: [String, Function],
      default: null,
      '@default': 'config.endpoints.attachment.url'
    },
    method: {
      required: false,
      type: [String],
      default: null,
      '@default': 'config.endpoints.attachment.method'
    },
    hideTools: {
      required: false,
      type: [Array],
      default: () => []
    },
    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$18, base$17, base$U, base$K, base$M, base$Q, base$S, base$1a, base$N, base$1, multilingual$2, multilingual$6, multilingual$4, base$13, multilingual$5, teditor, multilingual$1, base$_, base$G, base$Y, base$X, base$3, base$T, base$Z, base$W, base$7, base$2, base$n, base$5, base$P, multilingual$3, base$R, base$t];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, multilingual$8(props, context));
  }
};

var CheckboxgroupCheckbox = {
  name: 'CheckboxgroupCheckbox',
  props: {
    item: {
      type: [Object, String, Number],
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    items: {
      type: [Object, Array],
      required: true
    },
    index: {
      type: [Number],
      required: true
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    var {
      value,
      item
    } = toRefs(props);
    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$$(props, context);

    // ============== COMPUTED ==============

    /**
     * Whether the checkbox should be disabled.
     * 
     * @type {boolean}
     */
    var isDisabled = computed(() => {
      var _item$value;
      return el$.value.disabledItems.map(i => String(i)).indexOf(String(value.value)) !== -1 || el$.value.isDisabled || !!((_item$value = item.value) !== null && _item$value !== void 0 && _item$value.disabled);
    });

    /**
     * Whether the checkbox is checked.
     * 
     * @type {boolean}
     */
    var checked = computed(() => {
      return el$.value.value.indexOf(String(value.value)) !== -1 || el$.value.value.indexOf(Number(value.value)) !== -1;
    });

    /**
     * The `id` attribute of the input.
     * 
     * @type {boolean}
     */
    var id = computed(() => {
      return "".concat(el$.value.fieldId, "-").concat(value.value);
    });

    /**
     * The `name` attribute of the input.
     * 
     * @type {boolean}
     */
    var name = computed(() => {
      return "".concat(el$.value.path, "-").concat(value.value);
    });

    // =============== METHODS ==============

    /**
     * Handles `keydown` event.
     * 
     * @param {Event} e* 
     * @returns {void}
     * @private
     */
    var handleKeydown = e => {
      if (['ArrowRight', 'ArrowDown'].indexOf(e.key) !== -1) {
        e.preventDefault();
        var next = e.target.nextElementSibling;
        if ((next === null || next === void 0 ? void 0 : next.getAttribute('role')) === 'checkbox') {
          next.focus();
        }
      } else if (['ArrowLeft', 'ArrowUp'].indexOf(e.key) !== -1) {
        e.preventDefault();
        var previous = e.target.previousElementSibling;
        if ((previous === null || previous === void 0 ? void 0 : previous.getAttribute('role')) === 'checkbox') {
          previous.focus();
        }
      }
    };
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
      isDisabled,
      id,
      name,
      checked,
      handleKeydown
    };
  }
};

var base = function base(props, context, dependencies) {
  var el$ = dependencies.el$;
  var form$ = dependencies.form$;

  // ============== COMPUTED ==============

  /**
   * Whether the preview component should be visible.
   * 
   * @type {boolean}
   */
  var visible = computed(() => {
    return el$.value.stage > 0;
  });

  /**
   * Whether the file has link and should be clickable.
   * 
   * @type {boolean}
   */
  var hasLink = computed(() => {
    return el$.value.link && el$.value.clickable;
  });

  /**
   * Whether the preview has upload error.
   * 
   * @type {boolean}
   */
  var hasError = computed(() => {
    return el$.value.hasUploadError;
  });

  /**
   * The link for the file.
   * 
   * @type {string}
   */
  var link = computed(() => {
    return el$.value.link;
  });

  /**
   * The filename to display.
   * 
   * @type {string}
   */
  var filename = computed(() => {
    var filename = el$.value.filename && typeof el$.value.filename === 'string' ? el$.value.filename.split('\\').pop().split('/').pop() : el$.value.filename;
    if (filename) {
      filename = filename.split('?')[0];
    }
    return filename;
  });

  /**
   * Whether the file should be clickable if it is already permantently uploaded.
   * 
   * @type {boolean}
   */
  var clickable = computed(() => {
    return el$.value.clickable;
  });

  /**
   * Whether the temporary or permanent file is uploaded.
   * 
   * @type {boolean}
   */
  var uploaded = computed(() => {
    return el$.value.stage > 1;
  });

  /**
   * Whether the file is currently uploading.
   * 
   * @type {boolean}
   */
  var uploading = computed(() => {
    return el$.value.uploading;
  });

  /**
   * The percentage of progress when the file is being temporarily uploaded (0-100).
   * 
   * @type {number}
   */
  var progress = computed(() => {
    return el$.value.progress;
  });

  /**
   * Whether the file can be removed. 
   * 
   * @type {boolean}
   */
  var canRemove = computed(() => {
    return (el$.value.canRemove || el$.value.uploading) && !el$.value.isDisabled;
  });

  /**
   * Whether temporary file can be uploaded.
   * 
   * @type {boolean}
   */
  var canUploadTemp = computed(() => {
    return el$.value.canUploadTemp;
  });

  /**
   * The text for upload button. Can be also changed in the locale file: `vueform.elements.file.upload`
   * 
   * @type {string}
   */
  var uploadText = computed(() => {
    return form$.value.translations.vueform.elements.file.upload;
  });

  /**
   * The `aria-labelledby` attribute of the preview.
   * 
   * @type {string}
   */
  var ariaLabelledby = computed(() => {
    return el$.value.embed ? undefined : el$.value.labelId;
  });

  // =============== METHODS ==============

  /**
   * Upload the currently selected file as temporary.
   * 
   * @returns {void}
   */
  var upload = () => {
    el$.value.uploadTemp();
  };

  /**
   * Remove the file.
   * 
   * @returns {void}
   */
  var remove = () => {
    if (uploading.value) {
      el$.value.handleAbort();
    } else {
      el$.value.handleRemove();
    }
  };

  /**
   * Handle the keyup event of the preview.
   * 
   * @param {Event} event the keyup Event
   * @returns {void}
   * @private
   */
  var handleKeyup = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (e) {
      switch (e.key) {
        case 'Backspace':
        case 'Delete':
          remove();
          if (!el$.value.canSelect) {
            return;
          }
          yield nextTick();
          document.querySelector("#".concat(el$.value.fieldId)).focus();
          break;
        case 'Enter':
          if (el$.value.auto) {
            return;
          }
          upload();
          break;
      }
    });
    return function handleKeyup(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // =============== HOOKS ================

  return {
    visible,
    hasLink,
    hasError,
    link,
    filename,
    clickable,
    uploaded,
    uploading,
    progress,
    canRemove,
    canUploadTemp,
    uploadText,
    ariaLabelledby,
    upload,
    remove,
    handleKeyup
  };
};

var FilePreview = {
  name: 'FilePreview',
  props: {
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$$(props, context);
    var {
      visible,
      hasLink,
      hasError,
      link,
      filename,
      clickable,
      uploaded,
      uploading,
      progress,
      canRemove,
      canUploadTemp,
      uploadText,
      ariaLabelledby,
      upload,
      remove,
      handleKeyup
    } = base(props, context, {
      el$,
      form$
    });

    // ============== COMPUTED ==============

    /**
     * The image's preview when [`view`](#option-view) is `image` or `gallery`. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded.
     * 
     * @type {string}
     */
    var preview = computed(() => {
      return ['image', 'gallery'].indexOf(el$.value.View) !== -1 ? el$.value.preview : null;
    });

    /**
     * The `aria-placeholder` attribute of the preview.
     * 
     * @type {string}
     */
    var ariaPlaceholder = computed(() => {
      var text = el$.value.embed && el$.value.View !== 'gallery' ? undefined : filename.value;
      if (hasError.value) {
        if (text) {
          text += ', error';
        } else {
          text = 'error';
        }
      }
      return text;
    });

    /**
     * The `aria-roledescription` attribute of the preview.
     * 
     * @type {string}
     */
    var ariaRoledescription = computed(() => {
      return el$.value.embed && el$.value.View !== 'gallery' || uploaded.value || el$.value.auto ? undefined : uploadText.value;
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
      visible,
      hasLink,
      hasError,
      link,
      filename,
      clickable,
      uploaded,
      uploading,
      progress,
      canRemove,
      canUploadTemp,
      uploadText,
      preview,
      ariaLabelledby,
      ariaPlaceholder,
      ariaRoledescription,
      upload,
      remove,
      handleKeyup
    };
  }
};

var RadiogroupRadio = {
  name: 'RadiogroupRadio',
  props: {
    item: {
      type: [Object, String, Number],
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    items: {
      type: [Object, Array],
      required: true
    },
    index: {
      type: [Number],
      required: true
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    var {
      value,
      item
    } = toRefs(props);
    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$$(props, context);

    // ============== COMPUTED ==============

    /**
     * Whether the radio should be disabled.
     * 
     * @type {boolean}
     */
    var isDisabled = computed(() => {
      var _item$value;
      return el$.value.disabledItems.map(i => String(i)).indexOf(String(value.value)) !== -1 || el$.value.isDisabled || !!((_item$value = item.value) !== null && _item$value !== void 0 && _item$value.disabled);
    });

    /**
     * Whether the radio is checked.
     * 
     * @type {boolean}
     */
    var checked = computed(() => {
      return el$.value.value === String(value.value) || el$.value.value === Number(value.value);
    });

    /**
     * The `id` attribute of the input.
     * 
     * @type {boolean}
     */
    var id = computed(() => {
      return "".concat(el$.value.fieldId, "-").concat(value.value);
    });

    /**
     * The `name` attribute of the input.
     * 
     * @type {boolean}
     */
    var name = computed(() => {
      return el$.value.path;
    });

    // =============== METHODS ==============

    /**
     * Handles `keydown` event.
     * 
     * @param {Event} e* 
     * @returns {void}
     * @private
     */
    var handleKeydown = e => {
      if (['ArrowRight', 'ArrowDown'].indexOf(e.key) !== -1) {
        e.preventDefault();
        var next = e.target.nextElementSibling;
        if ((next === null || next === void 0 ? void 0 : next.getAttribute('role')) === 'radio') {
          next.focus();
        }
      } else if (['ArrowLeft', 'ArrowUp'].indexOf(e.key) !== -1) {
        e.preventDefault();
        var previous = e.target.previousElementSibling;
        if ((previous === null || previous === void 0 ? void 0 : previous.getAttribute('role')) === 'radio') {
          previous.focus();
        }
      }
    };
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
      isDisabled,
      id,
      name,
      checked,
      handleKeydown
    };
  }
};

var index = {
  Vueform,
  FormErrors,
  FormMessages,
  FormLanguages,
  FormLanguage,
  FormTabs,
  FormTab,
  FormSteps,
  FormStepsControls,
  FormStepsControl,
  FormStep,
  FormElements,
  ElementLayout,
  ElementLayoutInline,
  ElementLoader,
  ElementLabelFloating,
  ElementLabel,
  ElementInfo,
  ElementDescription,
  ElementError,
  ElementMessage,
  ElementText,
  DragAndDrop,
  ElementAddon,
  DatepickerWrapper,
  EditorWrapper,
  ButtonElement,
  CheckboxElement,
  CheckboxgroupElement,
  DateElement,
  DatesElement,
  FileElement,
  GroupElement,
  HiddenElement,
  ListElement,
  LocationElement,
  MultifileElement,
  MultiselectElement,
  ObjectElement,
  RadioElement,
  RadiogroupElement,
  SelectElement,
  SliderElement,
  StaticElement,
  TagsElement,
  TextareaElement,
  TextElement,
  ToggleElement,
  EditorElement,
  TTextareaElement,
  TTextElement,
  TEditorElement,
  CheckboxgroupCheckbox,
  FilePreview,
  RadiogroupRadio
};

var runtime = {exports: {}};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (module) {
	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
	  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
	  defineProperty(
	    GeneratorFunctionPrototype,
	    "constructor",
	    { value: GeneratorFunction, configurable: true }
	  );
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    defineProperty(this, "_invoke", { value: enqueue });
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  });
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var methodName = context.method;
	    var method = delegate.iterator[methodName];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method, or a missing .next mehtod, always terminate the
	      // yield* loop.
	      context.delegate = null;

	      // Note: ["return"] must be used for ES3 parsing compatibility.
	      if (methodName === "throw" && delegate.iterator["return"]) {
	        // If the delegate iterator has a return method, give it a
	        // chance to clean up.
	        context.method = "return";
	        context.arg = undefined$1;
	        maybeInvokeDelegate(delegate, context);

	        if (context.method === "throw") {
	          // If maybeInvokeDelegate(context) changed context.method from
	          // "return" to "throw", let that override the TypeError below.
	          return ContinueSentinel;
	        }
	      }
	      if (methodName !== "return") {
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a '" + methodName + "' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  define(Gp, iteratorSymbol, function() {
	    return this;
	  });

	  define(Gp, "toString", function() {
	    return "[object Generator]";
	  });

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(val) {
	    var object = Object(val);
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, in modern engines
	  // we can explicitly access globalThis. In older engines we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}
} (runtime));

var Validator = class {
  constructor(rule, props) {
    var _props$element$;
    this.rule = rule;
    this.attributes = rule.attributes || {};
    this.conditions = rule.conditions || [];
    this.dependents = rule.dependents || [];
    this.element$ = props.element$;
    this.form$ = ((_props$element$ = props.element$) === null || _props$element$ === void 0 ? void 0 : _props$element$.form$) || {};
    this.numeric = props.numeric || false;
    this.elementMessages = props.element$.messages;
    this.invalid = false;
    this.pending = false;
    this.debouncer = null;
    this.lastValue = null;
    this.watchers = {};
    this.dependents.forEach(dependent => {
      watch(computed(() => _.get(this.form$.data, dependent)), () => {
        if (this.element$.validated) {
          // we need to revalidate the whole element
          if (this.name === 'nullable') {
            this.element$.validate();
          }

          // we need to revalidate only current validator
          else {
            // We need to do this instead of this.validate()
            // because Vue3 does not recognize `invalid` as
            // as a reactive property if used that way.
            this.revalidate();
          }
        }
      });
    });
    watch(computed(() => props.element$.messages), (n, o) => {
      if (_.isEqual(n, o)) {
        return;
      }
      this.elementMessages = props.element$.messages;
    }, {
      deep: true
    });
    this.init();
  }
  get name() {
    return this.rule.name;
  }
  get failing() {
    return this.invalid;
  }
  get defaultMessage() {
    return this.form$.translations.vueform.defaultMessage;
  }
  get message() {
    var _this$form$$translati;
    var message = '';
    if (this.elementMessages[this.name]) {
      message = this.elementMessages[this.name];
    } else if (this.form$.options.messages[this.name]) {
      message = this.form$.options.messages[this.name];
    } else if (this.name !== '_class' && ((_this$form$$translati = this.form$.translations.validation) === null || _this$form$$translati === void 0 ? void 0 : _this$form$$translati[this.name]) !== undefined) {
      message = this.form$.translations.validation[this.name];
      if (_.isPlainObject(message)) {
        message = message[this.messageType];
      }
    } else {
      message = this.defaultMessage;
    }

    // replace :params
    _.each(_.map(message.match(/:\w+/g), p => p.replace(':', '')), param => {
      message = message.replace(":".concat(param), this.messageParams[param]);
    });

    // replace {params}
    _.each(_.map(message.match(/{[^}]+/g), p => p.replace('{', '')), param => {
      message = message.replace("{".concat(param, "}"), this.messageParams[param]);
    });
    return message;
  }
  get messageType() {
    if (this.isNumeric) {
      return 'numeric';
    } else if (this.isFile) {
      return 'file';
    } else if (this.isArray) {
      return 'array';
    }
    return 'string';
  }
  get messageParams() {
    return {
      attribute: this.attributeName
    };
  }
  get attributeName() {
    return this.element$.genericName;
  }
  get type() {
    if (this.isNumeric) {
      return 'numeric';
    } else if (this.isFile) {
      return 'file';
    } else if (this.isArray) {
      return 'array';
    }
    return 'string';
  }
  get isNumeric() {
    return _.some(this.element$.Validators, {
      name: 'numeric'
    }) || _.some(this.element$.Validators, {
      name: 'integer'
    });
  }
  get isNullable() {
    var nullable = false;
    _.each(this.element$.Validators, Validator => {
      if (Validator.name !== 'nullable') {
        return;
      }
      if (!Validator.conditions.length) {
        nullable = true;
        return;
      }
      nullable = Validator.conditions(this.form$, this, this.element$);
    });
    return nullable;
  }
  get isFile() {
    return this.element$.isFileType;
  }
  get isArray() {
    return this.element$.isArrayType;
  }
  get isAsync() {
    return false;
  }
  get debounce() {
    if (this.attributes.debounce) {
      return this.attributes.debounce;
    }
    if (this.element$.debounce) {
      return this.element$.debounce;
    }
    return false;
  }
  get debouncing() {
    return this.debouncer !== null;
  }
  init() {}
  validate(value) {
    var _this = this;
    return _asyncToGenerator(function* () {
      if (value === undefined) {
        var _this$element$;
        value = (_this$element$ = _this.element$) === null || _this$element$ === void 0 ? void 0 : _this$element$.value;
      }
      if (!_this.form$.validation) {
        return;
      }
      if (_this.isNullable && !_this.filled(value)) {
        _this.invalid = false;
        return;
      }
      if (_this.conditions.length) {
        if (!_this.conditions(_this.form$, _this, _this.element$)) {
          _this.invalid = false;
          return;
        }
      }
      if (_this.debounce && _this.filled(value)) {
        yield _this._validateWithDebounce(value);
      } else {
        if (_this.debounce && _this.debouncer) {
          clearTimeout(_this.debouncer);
        }
        yield _this._validate(value);
      }
    })();
  }
  reset() {
    this.invalid = false;
  }
  watch(variables) {
    if (!Array.isArray(variables)) {
      variables = [variables];
    }
    variables.forEach(variable => {
      this.addWatcher(variable);
    });
  }
  addWatcher(variable) {
    if (this.watchers[variable]) {
      return;
    }
    this.watchers[variable] = watch(computed(() => _.get(this.form$.data, variable)), () => {
      this.revalidate();
    });
  }
  revalidate() {
    this.element$.Validators.forEach(Validator => {
      if (Validator.rule.name === this.rule.name) {
        Validator.validate();
      }
    });
  }
  watchOther() {
    this.form$.$nextTick(() => {
      if (!this.other$) {
        return;
      }
      this.form$.$watch(() => {
        var _this$other$;
        return (_this$other$ = this.other$) === null || _this$other$ === void 0 ? void 0 : _this$other$.value;
      }, () => {
        if (this.element$.validated) {
          this.element$.validate();
        }
      });
    });
  }
  size(value) {
    if (this.isNumeric) {
      return value;
    } else if (this.isFile) {
      return value ? value.size / 1000 : 0;
    } else if (this.isArray) {
      return value.length;
    } else if (value === null) {
      return 0;
    } else if (value === undefined) {
      return 0;
    } else if (value === '') {
      return 0;
    }
    return String(value).length;
  }
  filled(value) {
    if (value === undefined || value === null && value !== this.element$.trueValue || value === this.element$.falseValue) {
      return false;
    } else if (this.isNumeric && value === 0) {
      return false;
    } else if (_.isString(value) && _.trim(value) === '') {
      return false;
    } else if (_.isArray(value) && value.length < 1) {
      return false;
    } else if (value instanceof File && value.name === '') {
      return false;
    }
    return true;
  }
  _validate(value) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      if (_this2.isAsync) {
        yield _this2._validateAsync(value);
      } else {
        _this2._validateSync(value);
      }
    })();
  }
  _validateAsync(value) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      _this3.lastValue = value;
      _this3.pending = true;
      var valid = yield _this3.check(value);
      if (dataEquals(_this3.lastValue, value)) {
        _this3.invalid = !valid;
        _this3.pending = false;
      }
    })();
  }
  _validateSync(value) {
    this.invalid = !this.check(value);
  }
  _validateWithDebounce(value) {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      return new Promise((resolve, reject) => {
        if (_this4.debouncer) {
          resolve();
          clearTimeout(_this4.debouncer);
        }
        _this4.debouncer = setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
          yield _this4._validate(value);
          _this4.debouncer = null;
          resolve();
        }), _this4.debounce);
      });
    })();
  }
};

export { Validator, Vueform, index as components, config, base$19 as useVueform };
