/*!
 * jQuery Form Plugin
 * version: 3.18 (28-SEP-2012)
 * @requires jQuery v1.5 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses:
 *    http://malsup.github.com/mit-license.txt
 *    http://malsup.github.com/gpl-license-v2.txt
 */

!function(e){function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(this).ajaxSubmit(r))}function r(t){var r=t.target,n=e(r);if(!n.is(":submit,input:image")){var i=n.closest(":submit");if(0===i.length)return;r=i[0]}var a=this;if(a.clk=r,"image"==r.type)if(void 0!==t.offsetX)a.clk_x=t.offsetX,a.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=n.offset();a.clk_x=t.pageX-o.left,a.clk_y=t.pageY-o.top}else a.clk_x=t.pageX-r.offsetLeft,a.clk_y=t.pageY-r.offsetTop;setTimeout(function(){a.clk=a.clk_x=a.clk_y=null},100)}function n(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var i={};i.fileapi=void 0!==e("<input type='file'/>").get(0).files,i.formdata=void 0!==window.FormData,e.fn.ajaxSubmit=function(t){function r(t){var r,n,i=e.param(t).split("&"),a=i.length,o={};for(r=0;a>r;r++)n=i[r].split("="),o[decodeURIComponent(n[0])]=decodeURIComponent(n[1]);return o}function a(n){for(var i=new FormData,a=0;a<n.length;a++)i.append(n[a].name,n[a].value);if(t.extraData){var o=r(t.extraData);for(var l in o)o.hasOwnProperty(l)&&i.append(l,o[l])}t.data=null;var u=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:s||"POST"});t.uploadProgress&&(u.xhr=function(){var e=jQuery.ajaxSettings.xhr();return e.upload&&(e.upload.onprogress=function(e){var r=0,n=e.loaded||e.position,i=e.total;e.lengthComputable&&(r=Math.ceil(n/i*100)),t.uploadProgress(e,n,i,r)}),e}),u.data=null;var c=u.beforeSend;return u.beforeSend=function(e,t){t.data=i,c&&c.call(this,e,t)},e.ajax(u)}function o(r){function i(e){var t=e.contentWindow?e.contentWindow.document:e.contentDocument?e.contentDocument:e.document;return t}function a(){function t(){try{var e=i(g).readyState;n("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){n("Server abort: ",r," (",r.name,")"),o(S),w&&clearTimeout(w),w=void 0}}var r=c.attr("target"),a=c.attr("action");k.setAttribute("target",p),s||k.setAttribute("method","POST"),a!=d.url&&k.setAttribute("action",d.url),d.skipEncodingOverride||s&&!/post/i.test(s)||c.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),d.timeout&&(w=setTimeout(function(){x=!0,o(C)},d.timeout));var l=[];try{if(d.extraData)for(var u in d.extraData)d.extraData.hasOwnProperty(u)&&l.push(e.isPlainObject(d.extraData[u])&&d.extraData[u].hasOwnProperty("name")&&d.extraData[u].hasOwnProperty("value")?e('<input type="hidden" name="'+d.extraData[u].name+'">').attr("value",d.extraData[u].value).appendTo(k)[0]:e('<input type="hidden" name="'+u+'">').attr("value",d.extraData[u]).appendTo(k)[0]);d.iframeTarget||(m.appendTo("body"),g.attachEvent?g.attachEvent("onload",o):g.addEventListener("load",o,!1)),setTimeout(t,15),k.submit()}finally{k.setAttribute("action",a),r?k.setAttribute("target",r):c.removeAttr("target"),e(l).remove()}}function o(t){if(!v.aborted&&!D){try{L=i(g)}catch(r){n("cannot access response document: ",r),t=S}if(t===C&&v)return v.abort("timeout"),void T.reject(v,"timeout");if(t==S&&v)return v.abort("server abort"),void T.reject(v,"error","server abort");if(L&&L.location.href!=d.iframeSrc||x){g.detachEvent?g.detachEvent("onload",o):g.removeEventListener("load",o,!1);var a,s="success";try{if(x)throw"timeout";var l="xml"==d.dataType||L.XMLDocument||e.isXMLDoc(L);if(n("isXml="+l),!l&&window.opera&&(null===L.body||!L.body.innerHTML)&&--A)return n("requeing onLoad callback, DOM not available"),void setTimeout(o,250);var u=L.body?L.body:L.documentElement;v.responseText=u?u.innerHTML:null,v.responseXML=L.XMLDocument?L.XMLDocument:L,l&&(d.dataType="xml"),v.getResponseHeader=function(e){var t={"content-type":d.dataType};return t[e]},u&&(v.status=Number(u.getAttribute("status"))||v.status,v.statusText=u.getAttribute("statusText")||v.statusText);var c=(d.dataType||"").toLowerCase(),p=/(json|script|text)/.test(c);if(p||d.textarea){var h=L.getElementsByTagName("textarea")[0];if(h)v.responseText=h.value,v.status=Number(h.getAttribute("status"))||v.status,v.statusText=h.getAttribute("statusText")||v.statusText;else if(p){var y=L.getElementsByTagName("pre")[0],b=L.getElementsByTagName("body")[0];y?v.responseText=y.textContent?y.textContent:y.innerText:b&&(v.responseText=b.textContent?b.textContent:b.innerText)}}else"xml"==c&&!v.responseXML&&v.responseText&&(v.responseXML=R(v.responseText));try{F=O(v,c,d)}catch(t){s="parsererror",v.error=a=t||s}}catch(t){n("error caught: ",t),s="error",v.error=a=t||s}v.aborted&&(n("upload aborted"),s=null),v.status&&(s=v.status>=200&&v.status<300||304===v.status?"success":"error"),"success"===s?(d.success&&d.success.call(d.context,F,"success",v),T.resolve(v.responseText,"success",v),f&&e.event.trigger("ajaxSuccess",[v,d])):s&&(void 0===a&&(a=v.statusText),d.error&&d.error.call(d.context,v,s,a),T.reject(v,"error",a),f&&e.event.trigger("ajaxError",[v,d,a])),f&&e.event.trigger("ajaxComplete",[v,d]),f&&!--e.active&&e.event.trigger("ajaxStop"),d.complete&&d.complete.call(d.context,v,s),D=!0,d.timeout&&clearTimeout(w),setTimeout(function(){d.iframeTarget||m.remove(),v.responseXML=null},100)}}}var l,u,d,f,p,m,g,v,y,b,x,w,k=c[0],j=!!e.fn.prop,T=e.Deferred();if(e(":input[name=submit],:input[id=submit]",k).length)return alert('Error: Form elements must not have name or id of "submit".'),T.reject(),T;if(r)for(u=0;u<h.length;u++)l=e(h[u]),j?l.prop("disabled",!1):l.removeAttr("disabled");if(d=e.extend(!0,{},e.ajaxSettings,t),d.context=d.context||d,p="jqFormIO"+(new Date).getTime(),d.iframeTarget?(m=e(d.iframeTarget),b=m.attr("name"),b?p=b:m.attr("name",p)):(m=e('<iframe name="'+p+'" src="'+d.iframeSrc+'" />'),m.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=m[0],v={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";if(n("aborting upload... "+r),this.aborted=1,g.contentWindow.document.execCommand)try{g.contentWindow.document.execCommand("Stop")}catch(i){}m.attr("src",d.iframeSrc),v.error=r,d.error&&d.error.call(d.context,v,r,t),f&&e.event.trigger("ajaxError",[v,d,r]),d.complete&&d.complete.call(d.context,v,r)}},f=d.global,f&&0===e.active++&&e.event.trigger("ajaxStart"),f&&e.event.trigger("ajaxSend",[v,d]),d.beforeSend&&d.beforeSend.call(d.context,v,d)===!1)return d.global&&e.active--,T.reject(),T;if(v.aborted)return T.reject(),T;y=k.clk,y&&(b=y.name,b&&!y.disabled&&(d.extraData=d.extraData||{},d.extraData[b]=y.value,"image"==y.type&&(d.extraData[b+".x"]=k.clk_x,d.extraData[b+".y"]=k.clk_y)));var C=1,S=2,_=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&_&&(d.extraData=d.extraData||{},d.extraData[E]=_),d.forceSync?a():setTimeout(a,10);var F,L,D,A=50,R=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},q=e.parseJSON||function(e){return window.eval("("+e+")")},O=function(t,r,n){var i=t.getResponseHeader("content-type")||"",a="xml"===r||!r&&i.indexOf("xml")>=0,o=a?t.responseXML:t.responseText;return a&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),n&&n.dataFilter&&(o=n.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&i.indexOf("json")>=0?o=q(o):("script"===r||!r&&i.indexOf("javascript")>=0)&&e.globalEval(o)),o};return T}if(!this.length)return n("ajaxSubmit: skipping submit process - no element selected"),this;var s,l,u,c=this;"function"==typeof t&&(t={success:t}),s=this.attr("method"),l=this.attr("action"),u="string"==typeof l?e.trim(l):"",u=u||window.location.href||"",u&&(u=(u.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:u,success:e.ajaxSettings.success,type:s||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var d={};if(this.trigger("form-pre-serialize",[this,t,d]),d.veto)return n("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return n("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var f=t.traditional;void 0===f&&(f=e.ajaxSettings.traditional);var p,h=[],m=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,f)),t.beforeSubmit&&t.beforeSubmit(m,this,t)===!1)return n("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[m,this,t,d]),d.veto)return n("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(m,f);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var v=[];if(t.resetForm&&v.push(function(){c.resetForm()}),t.clearForm&&v.push(function(){c.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};v.push(function(r){var n=t.replaceTarget?"replaceWith":"html";e(t.target)[n](r).each(y,arguments)})}else t.success&&v.push(t.success);t.success=function(e,r,n){for(var i=t.context||this,a=0,o=v.length;o>a;a++)v[a].apply(i,[e,r,n||c,c])};var b=e("input:file:enabled[value]",this),x=b.length>0,w="multipart/form-data",k=c.attr("enctype")==w||c.attr("encoding")==w,j=i.fileapi&&i.formdata;n("fileAPI :"+j);var T,C=(x||k)&&!j;t.iframe!==!1&&(t.iframe||C)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){T=o(m)}):T=o(m):T=(x||k)&&j?a(m):e.ajax(t),c.removeData("jqxhr").data("jqxhr",T);for(var S=0;S<h.length;S++)h[S]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(i){if(i=i||{},i.delegation=i.delegation&&e.isFunction(e.fn.on),!i.delegation&&0===this.length){var a={s:this.selector,c:this.context};return!e.isReady&&a.s?(n("DOM not ready, queuing ajaxForm"),e(function(){e(a.s,a.c).ajaxForm(i)}),this):(n("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return i.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,i,t).on("click.form-plugin",this.selector,i,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",i,t).bind("click.form-plugin",i,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var n=[];if(0===this.length)return n;var a=this[0],o=t?a.getElementsByTagName("*"):a.elements;if(!o)return n;var s,l,u,c,d,f,p;for(s=0,f=o.length;f>s;s++)if(d=o[s],u=d.name)if(t&&a.clk&&"image"==d.type)d.disabled||a.clk!=d||(n.push({name:u,value:e(d).val(),type:d.type}),n.push({name:u+".x",value:a.clk_x},{name:u+".y",value:a.clk_y}));else if(c=e.fieldValue(d,!0),c&&c.constructor==Array)for(r&&r.push(d),l=0,p=c.length;p>l;l++)n.push({name:u,value:c[l]});else if(i.fileapi&&"file"==d.type&&!d.disabled){r&&r.push(d);var h=d.files;if(h.length)for(l=0;l<h.length;l++)n.push({name:u,value:h[l],type:d.type});else n.push({name:u,value:"",type:d.type})}else null!==c&&"undefined"!=typeof c&&(r&&r.push(d),n.push({name:u,value:c,type:d.type,required:d.required}));if(!t&&a.clk){var m=e(a.clk),g=m[0];u=g.name,u&&!g.disabled&&"image"==g.type&&(n.push({name:u,value:m.val()}),n.push({name:u+".x",value:a.clk_x},{name:u+".y",value:a.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var n=this.name;if(n){var i=e.fieldValue(this,t);if(i&&i.constructor==Array)for(var a=0,o=i.length;o>a;a++)r.push({name:n,value:i[a]});else null!==i&&"undefined"!=typeof i&&r.push({name:this.name,value:i})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],n=0,i=this.length;i>n;n++){var a=this[n],o=e.fieldValue(a,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var n=t.name,i=t.type,a=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!n||t.disabled||"reset"==i||"button"==i||("checkbox"==i||"radio"==i)&&!t.checked||("submit"==i||"image"==i)&&t.form&&t.form.clk!=t||"select"==a&&-1==t.selectedIndex))return null;if("select"==a){var o=t.selectedIndex;if(0>o)return null;for(var s=[],l=t.options,u="select-one"==i,c=u?o+1:l.length,d=u?o:0;c>d;d++){var f=l[d];if(f.selected){var p=f.value;if(p||(p=f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value),u)return p;s.push(p)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var n=this.type,i=this.tagName.toLowerCase();r.test(n)||"textarea"==i?this.value="":"checkbox"==n||"radio"==n?this.checked=!1:"select"==i?this.selectedIndex=-1:t&&(t===!0&&/hidden/.test(n)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var n=e(this).parent("select");t&&n[0]&&"select-one"==n[0].type&&n.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1}(jQuery),define("jquery.form",["jquery"],function(e){return function(){var t;return t||e.jQuery.fn.ajaxForm}}(this)),!function(e,t){var r=t.prototype.trim,n=t.prototype.trimRight,i=t.prototype.trimLeft,a=function(e){return 1*e||0},o=function(e,t){if(1>t)return"";for(var r="";t>0;)1&t&&(r+=e),t>>=1,e+=e;return r},s=[].slice,l=function(e){return null==e?"\\s":e.source?e.source:"["+p.escapeRegExp(e)+"]"},u={lt:"<",gt:">",quot:'"',apos:"'",amp:"&"},c={};for(var d in u)c[u[d]]=d;var f=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}var r=o,n=function(){return n.cache.hasOwnProperty(arguments[0])||(n.cache[arguments[0]]=n.parse(arguments[0])),n.format.call(null,n.cache[arguments[0]],arguments)};return n.format=function(n,i){var a,o,s,l,u,c,d,p=1,h=n.length,m="",g=[];for(o=0;h>o;o++)if(m=e(n[o]),"string"===m)g.push(n[o]);else if("array"===m){if(l=n[o],l[2])for(a=i[p],s=0;s<l[2].length;s++){if(!a.hasOwnProperty(l[2][s]))throw new Error(f('[_.sprintf] property "%s" does not exist',l[2][s]));a=a[l[2][s]]}else a=l[1]?i[l[1]]:i[p++];if(/[^s]/.test(l[8])&&"number"!=e(a))throw new Error(f("[_.sprintf] expecting number but found %s",e(a)));switch(l[8]){case"b":a=a.toString(2);break;case"c":a=t.fromCharCode(a);break;case"d":a=parseInt(a,10);break;case"e":a=l[7]?a.toExponential(l[7]):a.toExponential();break;case"f":a=l[7]?parseFloat(a).toFixed(l[7]):parseFloat(a);break;case"o":a=a.toString(8);break;case"s":a=(a=t(a))&&l[7]?a.substring(0,l[7]):a;break;case"u":a=Math.abs(a);break;case"x":a=a.toString(16);break;case"X":a=a.toString(16).toUpperCase()}a=/[def]/.test(l[8])&&l[3]&&a>=0?"+"+a:a,c=l[4]?"0"==l[4]?"0":l[4].charAt(1):" ",d=l[6]-t(a).length,u=l[6]?r(c,d):"",g.push(l[5]?a+u:u+a)}return g.join("")},n.cache={},n.parse=function(e){for(var t=e,r=[],n=[],i=0;t;){if(null!==(r=/^[^\x25]+/.exec(t)))n.push(r[0]);else if(null!==(r=/^\x25{2}/.exec(t)))n.push("%");else{if(null===(r=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)))throw new Error("[_.sprintf] huh?");if(r[2]){i|=1;var a=[],o=r[2],s=[];if(null===(s=/^([a-z_][a-z_\d]*)/i.exec(o)))throw new Error("[_.sprintf] huh?");for(a.push(s[1]);""!==(o=o.substring(s[0].length));)if(null!==(s=/^\.([a-z_][a-z_\d]*)/i.exec(o)))a.push(s[1]);else{if(null===(s=/^\[(\d+)\]/.exec(o)))throw new Error("[_.sprintf] huh?");a.push(s[1])}r[2]=a}else i|=2;if(3===i)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");n.push(r)}t=t.substring(r[0].length)}return n},n}(),p={VERSION:"2.3.0",isBlank:function(e){return null==e&&(e=""),/^\s*$/.test(e)},stripTags:function(e){return null==e?"":t(e).replace(/<\/?[^>]+>/g,"")},capitalize:function(e){return e=null==e?"":t(e),e.charAt(0).toUpperCase()+e.slice(1)},chop:function(e,r){return null==e?[]:(e=t(e),r=~~r,r>0?e.match(new RegExp(".{1,"+r+"}","g")):[e])},clean:function(e){return p.strip(e).replace(/\s+/g," ")},count:function(e,r){return null==e||null==r?0:t(e).split(r).length-1},chars:function(e){return null==e?[]:t(e).split("")},swapCase:function(e){return null==e?"":t(e).replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})},escapeHTML:function(e){return null==e?"":t(e).replace(/[&<>"']/g,function(e){return"&"+c[e]+";"})},unescapeHTML:function(e){return null==e?"":t(e).replace(/\&([^;]+);/g,function(e,r){var n;return r in u?u[r]:(n=r.match(/^#x([\da-fA-F]+)$/))?t.fromCharCode(parseInt(n[1],16)):(n=r.match(/^#(\d+)$/))?t.fromCharCode(~~n[1]):e})},escapeRegExp:function(e){return null==e?"":t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},splice:function(e,t,r,n){var i=p.chars(e);return i.splice(~~t,~~r,n),i.join("")},insert:function(e,t,r){return p.splice(e,t,0,r)},include:function(e,r){return""===r?!0:null==e?!1:-1!==t(e).indexOf(r)},join:function(){var e=s.call(arguments),t=e.shift();return null==t&&(t=""),e.join(t)},lines:function(e){return null==e?[]:t(e).split("\n")},reverse:function(e){return p.chars(e).reverse().join("")},startsWith:function(e,r){return""===r?!0:null==e||null==r?!1:(e=t(e),r=t(r),e.length>=r.length&&e.slice(0,r.length)===r)},endsWith:function(e,r){return""===r?!0:null==e||null==r?!1:(e=t(e),r=t(r),e.length>=r.length&&e.slice(e.length-r.length)===r)},succ:function(e){return null==e?"":(e=t(e),e.slice(0,-1)+t.fromCharCode(e.charCodeAt(e.length-1)+1))},titleize:function(e){return null==e?"":t(e).replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})},camelize:function(e){return p.trim(e).replace(/[-_\s]+(.)?/g,function(e,t){return t.toUpperCase()})},underscored:function(e){return p.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize:function(e){return p.trim(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()},classify:function(e){return p.titleize(t(e).replace(/_/g," ")).replace(/\s/g,"")},humanize:function(e){return p.capitalize(p.underscored(e).replace(/_id$/,"").replace(/_/g," "))},trim:function(e,n){return null==e?"":!n&&r?r.call(e):(n=l(n),t(e).replace(new RegExp("^"+n+"+|"+n+"+$","g"),""))},ltrim:function(e,r){return null==e?"":!r&&i?i.call(e):(r=l(r),t(e).replace(new RegExp("^"+r+"+"),""))},rtrim:function(e,r){return null==e?"":!r&&n?n.call(e):(r=l(r),t(e).replace(new RegExp(r+"+$"),""))},truncate:function(e,r,n){return null==e?"":(e=t(e),n=n||"...",r=~~r,e.length>r?e.slice(0,r)+n:e)},prune:function(e,r,n){if(null==e)return"";if(e=t(e),r=~~r,n=null!=n?t(n):"...",e.length<=r)return e;var i=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},a=e.slice(0,r+1).replace(/.(?=\W*\w*$)/g,i);return a=a.slice(a.length-2).match(/\w\w/)?a.replace(/\s*\S+$/,""):p.rtrim(a.slice(0,a.length-1)),(a+n).length>e.length?e:e.slice(0,a.length)+n},words:function(e,t){return p.isBlank(e)?[]:p.trim(e,t).split(t||/\s+/)},pad:function(e,r,n,i){e=null==e?"":t(e),r=~~r;var a=0;switch(n?n.length>1&&(n=n.charAt(0)):n=" ",i){case"right":return a=r-e.length,e+o(n,a);case"both":return a=r-e.length,o(n,Math.ceil(a/2))+e+o(n,Math.floor(a/2));default:return a=r-e.length,o(n,a)+e}},lpad:function(e,t,r){return p.pad(e,t,r)},rpad:function(e,t,r){return p.pad(e,t,r,"right")},lrpad:function(e,t,r){return p.pad(e,t,r,"both")},sprintf:f,vsprintf:function(e,t){return t.unshift(e),f.apply(null,t)},toNumber:function(e,r){if(null==e||""==e)return 0;e=t(e);var n=a(a(e).toFixed(~~r));return 0!==n||e.match(/^0+$/)?n:Number.NaN},numberFormat:function(e,t,r,n){if(isNaN(e)||null==e)return"";e=e.toFixed(~~t),n=n||",";var i=e.split("."),a=i[0],o=i[1]?(r||".")+i[1]:"";return a.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+n)+o},strRight:function(e,r){if(null==e)return"";e=t(e),r=null!=r?t(r):r;var n=r?e.indexOf(r):-1;return~n?e.slice(n+r.length,e.length):e},strRightBack:function(e,r){if(null==e)return"";e=t(e),r=null!=r?t(r):r;var n=r?e.lastIndexOf(r):-1;return~n?e.slice(n+r.length,e.length):e},strLeft:function(e,r){if(null==e)return"";e=t(e),r=null!=r?t(r):r;var n=r?e.indexOf(r):-1;return~n?e.slice(0,n):e},strLeftBack:function(e,t){if(null==e)return"";e+="",t=null!=t?""+t:t;var r=e.lastIndexOf(t);return~r?e.slice(0,r):e},toSentence:function(e,t,r,n){t=t||", ",r=r||" and ";var i=e.slice(),a=i.pop();return e.length>2&&n&&(r=p.rtrim(t)+r),i.length?i.join(t)+r+a:a},toSentenceSerial:function(){var e=s.call(arguments);return e[3]=!0,p.toSentence.apply(p,e)},slugify:function(e){if(null==e)return"";var r="ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź",n="aaaaaaaaceeeeeiiiilnoooooouuuunczz",i=new RegExp(l(r),"g");return e=t(e).toLowerCase().replace(i,function(e){var t=r.indexOf(e);return n.charAt(t)||"-"}),p.dasherize(e.replace(/[^\w\s-]/g,""))},surround:function(e,t){return[t,e,t].join("")},quote:function(e){return p.surround(e,'"')},exports:function(){var e={};for(var t in this)this.hasOwnProperty(t)&&!t.match(/^(?:include|contains|reverse)$/)&&(e[t]=this[t]);return e},repeat:function(e,r,n){if(null==e)return"";if(r=~~r,null==n)return o(t(e),r);for(var i=[];r>0;i[--r]=e);return i.join(n)},levenshtein:function(e,r){if(null==e&&null==r)return 0;if(null==e)return t(r).length;if(null==r)return t(e).length;e=t(e),r=t(r);for(var n,i,a=[],o=0;o<=r.length;o++)for(var s=0;s<=e.length;s++)i=o&&s?e.charAt(s-1)===r.charAt(o-1)?n:Math.min(a[s],a[s-1],n)+1:o+s,n=a[s],a[s]=i;return a.pop()}};p.strip=p.trim,p.lstrip=p.ltrim,p.rstrip=p.rtrim,p.center=p.lrpad,p.rjust=p.lpad,p.ljust=p.rpad,p.contains=p.include,p.q=p.quote,"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(module.exports=p),exports._s=p):"function"==typeof define&&define.amd?define("underscore.string",[],function(){return p}):(e._=e._||{},e._.string=e._.str=p)}(this,String),define("js/utils/templates",["jquery","underscore"],function(e,t){var r=function(r){var n="#"+r+"-tpl",i=e(n).text();return i||console.error("Failed to load "+r+" template"),t.template(i)};return{loadTemplate:r}}),define("js/views/feedback",["jquery","underscore","underscore.string","backbone","js/utils/templates"],function(e,t,r,n,i){var a=n.View.extend({options:{title:"",message:"",intent:null,type:null,shown:!0,icon:!0,closeIcon:!0,minShown:0,maxShown:1/0},initialize:function(){if(!this.options.type)throw"SystemFeedback: type required (given "+JSON.stringify(this.options)+")";if(!this.options.intent)throw"SystemFeedback: intent required (given "+JSON.stringify(this.options)+")";return this.template=i.loadTemplate("system-feedback"),this.setElement(e("#page-"+this.options.type)),this.options.actions&&this.options.actions.secondary&&!t.isArray(this.options.actions.secondary)&&(this.options.actions.secondary=[this.options.actions.secondary]),this},show:function(){return clearTimeout(this.hideTimeout),this.options.shown=!0,this.shownAt=new Date,this.render(),e.isNumeric(this.options.maxShown)&&(this.hideTimeout=setTimeout(t.bind(this.hide,this),this.options.maxShown)),this},hide:function(){return this.shownAt&&e.isNumeric(this.options.minShown)&&this.options.minShown>new Date-this.shownAt?(clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(t.bind(this.hide,this),this.options.minShown-(new Date-this.shownAt))):(this.options.shown=!1,delete this.shownAt,this.render()),this},events:{"click .action-close":"hide","click .action-primary":"primaryClick","click .action-secondary":"secondaryClick"},render:function(){var e=a["active_"+this.options.type];return e&&e!==this&&(e.stopListening(),e.undelegateEvents()),this.$el.html(this.template(this.options)),a["active_"+this.options.type]=this,this},primaryClick:function(e){var t,r;t=this.options.actions,t&&(r=t.primary,r&&(r.preventDefault!==!1&&e.preventDefault(),r.click&&r.click.call(e.target,this,e)))},secondaryClick:function(e){var r,n,i,a;r=this.options.actions,r&&(n=r.secondary,n&&(a=0,e&&e.target&&(a=t.indexOf(this.$(".action-secondary"),e.target)),i=n[a],i.preventDefault!==!1&&e.preventDefault(),i.click&&i.click.call(e.target,this,e)))}});return a}),define("js/views/feedback_notification",["jquery","underscore","underscore.string","js/views/feedback"],function(e,t,r,n){var i,a,o=n.extend({options:e.extend({},n.prototype.options,{type:"notification",closeIcon:!1})});i=t.compose(r.capitalize,r.camelize),a=["warning","error","confirmation","announcement","step-required","help","mini"],t.each(a,function(t){var r;r=o.extend({options:e.extend({},o.prototype.options,{intent:t})}),o[i(t)]=r});var s=o.Mini.prototype.options;return s.minShown=1250,s.closeIcon=!1,o}),define("js/views/feedback_prompt",["jquery","underscore","underscore.string","js/views/feedback"],function(e,t,r,n){var i,a,o=n.extend({options:e.extend({},n.prototype.options,{type:"prompt",closeIcon:!1,icon:!1}),render:function(){return window.$body||(window.$body=e(document.body)),this.options.shown?$body.addClass("prompt-is-shown"):$body.removeClass("prompt-is-shown"),n.prototype.render.apply(this,arguments)}});return i=t.compose(r.capitalize,r.camelize),a=["warning","error","confirmation","announcement","step-required","help","mini"],t.each(a,function(t){var r;r=o.extend({options:e.extend({},o.prototype.options,{intent:t})}),o[i(t)]=r}),o}),define("js/views/utils/view_utils",["jquery","underscore","gettext","js/views/feedback_notification","js/views/feedback_prompt"],function(e,t,r,n,i){var a,o,s,l,u,c,d,f,p,h,m,g,v,y,b,x,w,k=65;return a=function(e,t){t||(t="collapsed"),e.closest(".expand-collapse").toggleClass("expand collapse"),e.closest(".is-collapsible, .window").toggleClass(t),e.closest(".is-collapsible").children("article").slideToggle()},o=function(){e(".ui-loading").show()},s=function(){e(".ui-loading").hide()},l=function(e,t,n,a,o){return new i.Warning({title:e,message:t,actions:{primary:{text:n,click:function(e){e.hide(),a()}},secondary:{text:r("Cancel"),click:function(e){return o&&o(),e.hide()}}}}).show()},u=function(e,t){var i;return i=new n.Mini({title:r(e)}),i.show(),t().done(function(){i.hide()})},c=function(e,t){return e.addClass("is-disabled").attr("aria-disabled",!0),t().always(function(){e.removeClass("is-disabled").attr("aria-disabled",!1)})},v=function(t){return function(r){r.preventDefault(),e.ajax({url:e(this).data("dismiss-link"),type:"DELETE",success:t})}},p=function(t){e("html, body").animate({scrollTop:t},500)},d=function(t){var r=t.offset().top;return r-e(window).scrollTop()},f=function(e,t){var r=e.offset().top,n=r-t;p(n)},h=function(e){window.location=e},m=function(){window.location.reload()},g=function(e,r){var n,i=e.changedAttributes();if(!i)return!1;for(n=0;n<r.length;n++)if(t.has(i,r[n]))return!0;return!1},y=function(e){return 0===e.length?r("Required field."):""},b=function(e,t){var n=y(e);if(n)return n;if(t){if(/\s/g.test(e))return r("Please do not use any spaces in this field.")}else if(e!==encodeURIComponent(e)||e.match(/[!'()*]/))return r("Please do not use any spaces or special characters in this field.");return""},x=function(r){var n=t.reduce(r,function(t,r){return t+e(r).val().length},0);return k>=n},w=function(r,n,i,a){x(i)?e(r.errorWrapper).removeClass(n.shown).addClass(n.hiding):(e(r.errorWrapper).addClass(n.shown).removeClass(n.hiding),e(r.errorMessage).html("<p>"+t.template(a,{limit:k})+"</p>"),e(r.save).addClass(n.disabled))},{toggleExpandCollapse:a,showLoadingIndicator:o,hideLoadingIndicator:s,confirmThenRunOperation:l,runOperationShowingMessage:u,disableElementWhileRunning:c,deleteNotificationHandler:v,setScrollTop:p,getScrollOffset:d,setScrollOffset:f,redirect:h,reload:m,hasChangedAttributes:g,validateRequiredField:y,validateURLItemEncoding:b,validateTotalKeyLength:x,checkTotalKeyLengthViolations:w}}),define("js/views/utils/create_utils_base",["jquery","underscore","gettext","js/views/utils/view_utils"],function(e,t,r,n){return function(r,i,a,o,s){var l=this;return this.selectors=r,this.classes=i,this.validateRequiredField=n.validateRequiredField,this.validateURLItemEncoding=n.validateURLItemEncoding,this.keyLengthViolationMessage=a,this.keyFieldSelectors=o,this.nonEmptyCheckFieldSelectors=s,this.create=function(){},this.validateTotalKeyLength=function(){n.checkTotalKeyLengthViolations(l.selectors,l.classes,l.keyFieldSelectors,l.keyLengthViolationMessage)},this.toggleSaveButton=function(t){var r=!t;e(l.selectors.save).toggleClass(l.classes.disabled,r).attr("aria-disabled",r)},this.setFieldInErr=function(t,r){r?(t.addClass(l.classes.error),t.children(l.selectors.tipError).addClass(l.classes.showing).removeClass(l.classes.hiding).text(r),l.toggleSaveButton(!1)):(t.removeClass(l.classes.error),t.children(l.selectors.tipError).addClass(l.classes.hiding).removeClass(l.classes.showing),1===e(l.selectors.error).length&&l.toggleSaveButton(!0))},this.hasInvalidRequiredFields=function(){return t.reduce(l.nonEmptyCheckFieldSelectors,function(t,r){var n=e(r),i=l.validateRequiredField(n.val());return l.setFieldInErr(n.parent(),i),i?!0:t},!1)},this.validateFilledFields=function(){return t.reduce(l.nonEmptyCheckFieldSelectors,function(t,r){var n=e(r);return 0!==n.val().length?t:!1},!0)},this.configureHandlers=function(){t.each(l.keyFieldSelectors,function(t){var r=e(t);r.on("keyup",function(t){if(t.keyCode!==e.ui.keyCode.TAB){var n=l.validateURLItemEncoding(r.val(),"True"===e(l.selectors.allowUnicode).val());l.setFieldInErr(r.parent(),n),l.validateTotalKeyLength(),l.validateFilledFields()||l.toggleSaveButton(!1)}})});var r=e(l.selectors.name);r.on("keyup",function(){var e=l.validateRequiredField(r.val());l.setFieldInErr(r.parent(),e),l.validateTotalKeyLength(),l.validateFilledFields()||l.toggleSaveButton(!1)})},{validateTotalKeyLength:l.validateTotalKeyLength,setFieldInErr:l.setFieldInErr,hasInvalidRequiredFields:l.hasInvalidRequiredFields,create:l.create,validateFilledFields:l.validateFilledFields,configureHandlers:l.configureHandlers}}}),define("js/views/utils/create_course_utils",["jquery","gettext","js/views/utils/view_utils","js/views/utils/create_utils_base"],function(e,t,r,n){return function(i,a){var o=t("The combined length of the organization, course number, and course run fields cannot be more than <%=limit%> characters."),s=[i.org,i.number,i.run],l=[i.name,i.org,i.number,i.run];n.call(this,i,a,o,s,l),this.create=function(t,n){e.postJSON("/course/",t,function(e){void 0!==e.url?r.redirect(e.url):void 0!==e.ErrMsg&&n(e.ErrMsg)})}}}),define("js/views/course_rerun",["domReady","jquery","underscore","js/views/utils/create_course_utils","js/views/utils/view_utils"],function(e,t,r,n,i){var a=new n({name:".rerun-course-name",org:".rerun-course-org",number:".rerun-course-number",run:".rerun-course-run",save:".rerun-course-save",errorWrapper:".wrapper-error",errorMessage:"#course_rerun_error",tipError:"span.tip-error",error:".error",allowUnicode:".allow-unicode-course-id"},{shown:"is-shown",showing:"is-showing",hiding:"is-hidden",disabled:"is-disabled",error:"error"}),o=function(e){if(e.preventDefault(),!a.hasInvalidRequiredFields()){var r=t(this).closest("#rerun-course-form"),n=r.find(".rerun-course-name").val(),i=r.find(".rerun-course-org").val(),o=r.find(".rerun-course-number").val(),s=r.find(".rerun-course-run").val();course_info={source_course_key:source_course_key,org:i,number:o,display_name:n,run:s},analytics.track("Reran a Course",course_info),a.create(course_info,function(e){t(".wrapper-error").addClass("is-shown").removeClass("is-hidden"),t("#course_rerun_error").html("<p>"+e+"</p>"),t(".rerun-course-save").addClass("is-disabled").attr("aria-disabled",!0).removeClass("is-processing").html(gettext("Create Re-run")),t(".action-cancel").removeClass("is-hidden")
}),t(".rerun-course-save").addClass("is-disabled").attr("aria-disabled",!0).addClass("is-processing").html('<i class="icon fa fa-refresh fa-spin"></i>'+gettext("Processing Re-run Request")),t(".action-cancel").addClass("is-hidden")}},s=function(e){e.preventDefault(),t(".rerun-course-run").val(""),t("#course_rerun_error").html(""),t("wrapper-error").removeClass("is-shown").addClass("is-hidden"),t(".rerun-course-save").off("click"),i.redirect("/course/")},l=function(){var e=t(".rerun-course-cancel"),r=t(".rerun-course-run");r.focus().select(),t(".rerun-course-save").on("click",o),e.bind("click",s),t(".cancel-button").bind("click",s),a.configureHandlers()};return e(l),{saveRerunCourse:o,cancelRerunCourse:s,onReady:l}}),define("js/factories/course_create_rerun",["jquery","jquery.form","js/views/course_rerun"],function(){return function(){}});