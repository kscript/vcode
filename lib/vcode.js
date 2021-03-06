!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ks-vcode",[],t):"object"==typeof exports?exports["ks-vcode"]=t():e["ks-vcode"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/lib/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"v-code",data:function(){return{code:[],activeIndex:0,inputEl:[],complete:!1}},props:{len:{type:Number,default:4},mode:{type:String,default:"mix"},groupClass:{type:String,default:""}},computed:{rule:function(){return{mix:/^[a-zA-Z0-9]$/,number:/^[0-9]$/,letter:/^[a-zA-Z]$/,all:/\*/}[this.mode]||/^[a-zA-Z0-9]$/}},methods:{vcodeChange:function(){this.complete||(this.code.length===this.len&&(this.complete=!this.code.includes(void 0)),this.$emit("change",this.code,this.activeIndex),this.complete&&this.$emit("complete",this.code))},verifyNum:function(e){var t=e>=65&&e<=90,n=e>=48&&e<=57||e>=96&&e<=105;return!0==={mix:t||n,number:n,letter:t,all:!0}[this.mode]},keyup:function(e,t){if(this.complete)return!1;var n=this.code[e],o=t.keyCode;8===o||37===o?n&&37!==o||this.toggleInput(e,e-1):39===o?this.toggleInput(e,e+1):n&&this.verifyNum(o)&&(this.$set(this.code,e,t.key),this.toggleInput(e,e+1),this.activeIndex=e,this.vcodeChange())},input:function(e,t){if(this.complete)return!1;if(this.rule.test(t.data)){""!==this.code[e]&&this.toggleInput(e,e+1),this.activeIndex=e,this.vcodeChange()}else this.$set(this.code,e,"")},toggleInput:function(e,t){t>=0&&t<this.len&&(this.$refs.inputEl[e].blur(),this.$refs.inputEl[t].focus())},clear:function(){this.code.splice(0),this.complete=!1}},mounted:function(){this.$on("clear",this.clear)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"Vcode",function(){return r});var o=n(2),r=o.a,i=[r],s=function e(t){e.installed||i.map(function(e){return t.component(e.name,e)})};"undefined"!=typeof window&&window.Vue&&s(window.Vue),t.default={install:s,Vcode:r}},function(e,t,n){"use strict";var o=n(3);o.a.install=function(e){e.component(o.a.name,o.a)},t.a=o.a},function(e,t,n){"use strict";function o(e){n(4)}var r=n(0),i=n(10),s=n(9),u=o,a=s(r.a,i.a,!1,u,null,null);t.a=a.exports},function(e,t,n){var o=n(5);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(7)("565c8538",o,!0,{})},function(e,t,n){t=e.exports=n(6)(!1),t.push([e.i,".v-code{display:table;width:100%}.v-code .input-group{display:table-cell;padding:0 10px}.v-code .input-group input{box-sizing:border-box;width:100%;padding:10px;text-align:center;outline:none}.v-code-none .input-group input{color:transparent;text-shadow:0 0 0 #555;border:1px solid #aaa}.v-code-none .input-group input:focus{text-shadow:0 0 0 #42abff;border:1px solid #42abff}",""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=d[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));d[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,n,o=document.querySelector("style["+g+'~="'+e.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(y){var i=f++;o=p||(p=r()),t=s.bind(null,o,i,!1),n=s.bind(null,o,i,!0)}else o=r(),t=u.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function u(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),m.ssrId&&e.setAttribute(g,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(8),d={},l=a&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,v=function(){},m=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){h=n,m=r||{};var i=c(e,t);return o(i),function(t){for(var n=[],r=0;r<i.length;r++){var s=i[r],u=d[s.id];u.refs--,n.push(u)}t?(i=c(e,t),o(i)):i=[];for(var r=0;r<n.length;r++){var u=n[r];if(0===u.refs){for(var a=0;a<u.parts.length;a++)u.parts[a]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],u=i[1],a=i[2],c=i[3],d={id:e+":"+r,css:u,media:a,sourceMap:c};o[s]?o[s].parts.push(d):n.push(o[s]={id:s,parts:[d]})}return n}},function(e,t){e.exports=function(e,t,n,o,r,i){var s,u=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,u=e.default);var c="function"==typeof u?u.options:u;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r);var d;if(i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):o&&(d=o),d){var l=c.functional,p=l?c.render:c.beforeCreate;l?(c._injectStyles=d,c.render=function(e,t){return d.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,d):[d]}return{esModule:s,exports:u,options:c}}},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-code",class:"v-code-"+e.mode},e._l(e.len,function(t,o){return n("div",{key:o,staticClass:"input-group",class:e.groupClass},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code[o],expression:"code[index]"}],ref:"inputEl",refInFor:!0,attrs:{type:"text",readonly:e.complete,maxlength:"1"},domProps:{value:e.code[o]},on:{input:[function(t){t.target.composing||e.$set(e.code,o,t.target.value)},function(t){return e.input(o,t)}],keyup:function(t){return e.keyup(o,t)}}})])}),0)},r=[],i={render:o,staticRenderFns:r};t.a=i}])});