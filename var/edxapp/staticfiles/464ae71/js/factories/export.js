!function(e,t){var n=t.prototype.trim,r=t.prototype.trimRight,i=t.prototype.trimLeft,o=function(e){return 1*e||0},s=function(e,t){if(1>t)return"";for(var n="";t>0;)1&t&&(n+=e),t>>=1,e+=e;return n},a=[].slice,u=function(e){return null==e?"\\s":e.source?e.source:"["+f.escapeRegExp(e)+"]"},l={lt:"<",gt:">",quot:'"',apos:"'",amp:"&"},c={};for(var p in l)c[l[p]]=p;var h=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}var n=s,r=function(){return r.cache.hasOwnProperty(arguments[0])||(r.cache[arguments[0]]=r.parse(arguments[0])),r.format.call(null,r.cache[arguments[0]],arguments)};return r.format=function(r,i){var o,s,a,u,l,c,p,f=1,d=r.length,g="",m=[];for(s=0;d>s;s++)if(g=e(r[s]),"string"===g)m.push(r[s]);else if("array"===g){if(u=r[s],u[2])for(o=i[f],a=0;a<u[2].length;a++){if(!o.hasOwnProperty(u[2][a]))throw new Error(h('[_.sprintf] property "%s" does not exist',u[2][a]));o=o[u[2][a]]}else o=u[1]?i[u[1]]:i[f++];if(/[^s]/.test(u[8])&&"number"!=e(o))throw new Error(h("[_.sprintf] expecting number but found %s",e(o)));switch(u[8]){case"b":o=o.toString(2);break;case"c":o=t.fromCharCode(o);break;case"d":o=parseInt(o,10);break;case"e":o=u[7]?o.toExponential(u[7]):o.toExponential();break;case"f":o=u[7]?parseFloat(o).toFixed(u[7]):parseFloat(o);break;case"o":o=o.toString(8);break;case"s":o=(o=t(o))&&u[7]?o.substring(0,u[7]):o;break;case"u":o=Math.abs(o);break;case"x":o=o.toString(16);break;case"X":o=o.toString(16).toUpperCase()}o=/[def]/.test(u[8])&&u[3]&&o>=0?"+"+o:o,c=u[4]?"0"==u[4]?"0":u[4].charAt(1):" ",p=u[6]-t(o).length,l=u[6]?n(c,p):"",m.push(u[5]?o+l:l+o)}return m.join("")},r.cache={},r.parse=function(e){for(var t=e,n=[],r=[],i=0;t;){if(null!==(n=/^[^\x25]+/.exec(t)))r.push(n[0]);else if(null!==(n=/^\x25{2}/.exec(t)))r.push("%");else{if(null===(n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)))throw new Error("[_.sprintf] huh?");if(n[2]){i|=1;var o=[],s=n[2],a=[];if(null===(a=/^([a-z_][a-z_\d]*)/i.exec(s)))throw new Error("[_.sprintf] huh?");for(o.push(a[1]);""!==(s=s.substring(a[0].length));)if(null!==(a=/^\.([a-z_][a-z_\d]*)/i.exec(s)))o.push(a[1]);else{if(null===(a=/^\[(\d+)\]/.exec(s)))throw new Error("[_.sprintf] huh?");o.push(a[1])}n[2]=o}else i|=2;if(3===i)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");r.push(n)}t=t.substring(n[0].length)}return r},r}(),f={VERSION:"2.3.0",isBlank:function(e){return null==e&&(e=""),/^\s*$/.test(e)},stripTags:function(e){return null==e?"":t(e).replace(/<\/?[^>]+>/g,"")},capitalize:function(e){return e=null==e?"":t(e),e.charAt(0).toUpperCase()+e.slice(1)},chop:function(e,n){return null==e?[]:(e=t(e),n=~~n,n>0?e.match(new RegExp(".{1,"+n+"}","g")):[e])},clean:function(e){return f.strip(e).replace(/\s+/g," ")},count:function(e,n){return null==e||null==n?0:t(e).split(n).length-1},chars:function(e){return null==e?[]:t(e).split("")},swapCase:function(e){return null==e?"":t(e).replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})},escapeHTML:function(e){return null==e?"":t(e).replace(/[&<>"']/g,function(e){return"&"+c[e]+";"})},unescapeHTML:function(e){return null==e?"":t(e).replace(/\&([^;]+);/g,function(e,n){var r;return n in l?l[n]:(r=n.match(/^#x([\da-fA-F]+)$/))?t.fromCharCode(parseInt(r[1],16)):(r=n.match(/^#(\d+)$/))?t.fromCharCode(~~r[1]):e})},escapeRegExp:function(e){return null==e?"":t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},splice:function(e,t,n,r){var i=f.chars(e);return i.splice(~~t,~~n,r),i.join("")},insert:function(e,t,n){return f.splice(e,t,0,n)},include:function(e,n){return""===n?!0:null==e?!1:-1!==t(e).indexOf(n)},join:function(){var e=a.call(arguments),t=e.shift();return null==t&&(t=""),e.join(t)},lines:function(e){return null==e?[]:t(e).split("\n")},reverse:function(e){return f.chars(e).reverse().join("")},startsWith:function(e,n){return""===n?!0:null==e||null==n?!1:(e=t(e),n=t(n),e.length>=n.length&&e.slice(0,n.length)===n)},endsWith:function(e,n){return""===n?!0:null==e||null==n?!1:(e=t(e),n=t(n),e.length>=n.length&&e.slice(e.length-n.length)===n)},succ:function(e){return null==e?"":(e=t(e),e.slice(0,-1)+t.fromCharCode(e.charCodeAt(e.length-1)+1))},titleize:function(e){return null==e?"":t(e).replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})},camelize:function(e){return f.trim(e).replace(/[-_\s]+(.)?/g,function(e,t){return t.toUpperCase()})},underscored:function(e){return f.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize:function(e){return f.trim(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()},classify:function(e){return f.titleize(t(e).replace(/_/g," ")).replace(/\s/g,"")},humanize:function(e){return f.capitalize(f.underscored(e).replace(/_id$/,"").replace(/_/g," "))},trim:function(e,r){return null==e?"":!r&&n?n.call(e):(r=u(r),t(e).replace(new RegExp("^"+r+"+|"+r+"+$","g"),""))},ltrim:function(e,n){return null==e?"":!n&&i?i.call(e):(n=u(n),t(e).replace(new RegExp("^"+n+"+"),""))},rtrim:function(e,n){return null==e?"":!n&&r?r.call(e):(n=u(n),t(e).replace(new RegExp(n+"+$"),""))},truncate:function(e,n,r){return null==e?"":(e=t(e),r=r||"...",n=~~n,e.length>n?e.slice(0,n)+r:e)},prune:function(e,n,r){if(null==e)return"";if(e=t(e),n=~~n,r=null!=r?t(r):"...",e.length<=n)return e;var i=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},o=e.slice(0,n+1).replace(/.(?=\W*\w*$)/g,i);return o=o.slice(o.length-2).match(/\w\w/)?o.replace(/\s*\S+$/,""):f.rtrim(o.slice(0,o.length-1)),(o+r).length>e.length?e:e.slice(0,o.length)+r},words:function(e,t){return f.isBlank(e)?[]:f.trim(e,t).split(t||/\s+/)},pad:function(e,n,r,i){e=null==e?"":t(e),n=~~n;var o=0;switch(r?r.length>1&&(r=r.charAt(0)):r=" ",i){case"right":return o=n-e.length,e+s(r,o);case"both":return o=n-e.length,s(r,Math.ceil(o/2))+e+s(r,Math.floor(o/2));default:return o=n-e.length,s(r,o)+e}},lpad:function(e,t,n){return f.pad(e,t,n)},rpad:function(e,t,n){return f.pad(e,t,n,"right")},lrpad:function(e,t,n){return f.pad(e,t,n,"both")},sprintf:h,vsprintf:function(e,t){return t.unshift(e),h.apply(null,t)},toNumber:function(e,n){if(null==e||""==e)return 0;e=t(e);var r=o(o(e).toFixed(~~n));return 0!==r||e.match(/^0+$/)?r:Number.NaN},numberFormat:function(e,t,n,r){if(isNaN(e)||null==e)return"";e=e.toFixed(~~t),r=r||",";var i=e.split("."),o=i[0],s=i[1]?(n||".")+i[1]:"";return o.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+r)+s},strRight:function(e,n){if(null==e)return"";e=t(e),n=null!=n?t(n):n;var r=n?e.indexOf(n):-1;return~r?e.slice(r+n.length,e.length):e},strRightBack:function(e,n){if(null==e)return"";e=t(e),n=null!=n?t(n):n;var r=n?e.lastIndexOf(n):-1;return~r?e.slice(r+n.length,e.length):e},strLeft:function(e,n){if(null==e)return"";e=t(e),n=null!=n?t(n):n;var r=n?e.indexOf(n):-1;return~r?e.slice(0,r):e},strLeftBack:function(e,t){if(null==e)return"";e+="",t=null!=t?""+t:t;var n=e.lastIndexOf(t);return~n?e.slice(0,n):e},toSentence:function(e,t,n,r){t=t||", ",n=n||" and ";var i=e.slice(),o=i.pop();return e.length>2&&r&&(n=f.rtrim(t)+n),i.length?i.join(t)+n+o:o},toSentenceSerial:function(){var e=a.call(arguments);return e[3]=!0,f.toSentence.apply(f,e)},slugify:function(e){if(null==e)return"";var n="ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź",r="aaaaaaaaceeeeeiiiilnoooooouuuunczz",i=new RegExp(u(n),"g");return e=t(e).toLowerCase().replace(i,function(e){var t=n.indexOf(e);return r.charAt(t)||"-"}),f.dasherize(e.replace(/[^\w\s-]/g,""))},surround:function(e,t){return[t,e,t].join("")},quote:function(e){return f.surround(e,'"')},exports:function(){var e={};for(var t in this)this.hasOwnProperty(t)&&!t.match(/^(?:include|contains|reverse)$/)&&(e[t]=this[t]);return e},repeat:function(e,n,r){if(null==e)return"";if(n=~~n,null==r)return s(t(e),n);for(var i=[];n>0;i[--n]=e);return i.join(r)},levenshtein:function(e,n){if(null==e&&null==n)return 0;if(null==e)return t(n).length;if(null==n)return t(e).length;e=t(e),n=t(n);for(var r,i,o=[],s=0;s<=n.length;s++)for(var a=0;a<=e.length;a++)i=s&&a?e.charAt(a-1)===n.charAt(s-1)?r:Math.min(o[a],o[a-1],r)+1:s+a,r=o[a],o[a]=i;return o.pop()}};f.strip=f.trim,f.lstrip=f.ltrim,f.rstrip=f.rtrim,f.center=f.lrpad,f.rjust=f.lpad,f.ljust=f.rpad,f.contains=f.include,f.q=f.quote,"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(module.exports=f),exports._s=f):"function"==typeof define&&define.amd?define("underscore.string",[],function(){return f}):(e._=e._||{},e._.string=e._.str=f)}(this,String),define("js/utils/templates",["jquery","underscore"],function(e,t){var n=function(n){var r="#"+n+"-tpl",i=e(r).text();return i||console.error("Failed to load "+n+" template"),t.template(i)};return{loadTemplate:n}}),define("js/views/feedback",["jquery","underscore","underscore.string","backbone","js/utils/templates"],function(e,t,n,r,i){var o=r.View.extend({options:{title:"",message:"",intent:null,type:null,shown:!0,icon:!0,closeIcon:!0,minShown:0,maxShown:1/0},initialize:function(){if(!this.options.type)throw"SystemFeedback: type required (given "+JSON.stringify(this.options)+")";if(!this.options.intent)throw"SystemFeedback: intent required (given "+JSON.stringify(this.options)+")";return this.template=i.loadTemplate("system-feedback"),this.setElement(e("#page-"+this.options.type)),this.options.actions&&this.options.actions.secondary&&!t.isArray(this.options.actions.secondary)&&(this.options.actions.secondary=[this.options.actions.secondary]),this},show:function(){return clearTimeout(this.hideTimeout),this.options.shown=!0,this.shownAt=new Date,this.render(),e.isNumeric(this.options.maxShown)&&(this.hideTimeout=setTimeout(t.bind(this.hide,this),this.options.maxShown)),this},hide:function(){return this.shownAt&&e.isNumeric(this.options.minShown)&&this.options.minShown>new Date-this.shownAt?(clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(t.bind(this.hide,this),this.options.minShown-(new Date-this.shownAt))):(this.options.shown=!1,delete this.shownAt,this.render()),this},events:{"click .action-close":"hide","click .action-primary":"primaryClick","click .action-secondary":"secondaryClick"},render:function(){var e=o["active_"+this.options.type];return e&&e!==this&&(e.stopListening(),e.undelegateEvents()),this.$el.html(this.template(this.options)),o["active_"+this.options.type]=this,this},primaryClick:function(e){var t,n;t=this.options.actions,t&&(n=t.primary,n&&(n.preventDefault!==!1&&e.preventDefault(),n.click&&n.click.call(e.target,this,e)))},secondaryClick:function(e){var n,r,i,o;n=this.options.actions,n&&(r=n.secondary,r&&(o=0,e&&e.target&&(o=t.indexOf(this.$(".action-secondary"),e.target)),i=r[o],i.preventDefault!==!1&&e.preventDefault(),i.click&&i.click.call(e.target,this,e)))}});return o}),define("js/views/feedback_prompt",["jquery","underscore","underscore.string","js/views/feedback"],function(e,t,n,r){var i,o,s=r.extend({options:e.extend({},r.prototype.options,{type:"prompt",closeIcon:!1,icon:!1}),render:function(){return window.$body||(window.$body=e(document.body)),this.options.shown?$body.addClass("prompt-is-shown"):$body.removeClass("prompt-is-shown"),r.prototype.render.apply(this,arguments)}});return i=t.compose(n.capitalize,n.camelize),o=["warning","error","confirmation","announcement","step-required","help","mini"],t.each(o,function(t){var n;n=s.extend({options:e.extend({},s.prototype.options,{intent:t})}),s[i(t)]=n}),s}),define("js/factories/export",["gettext","js/views/feedback_prompt"],function(e,t){return function(n,r,i,o){var s;if(n)s=new t({title:e("There has been an error while exporting."),message:e("There has been a failure to export to XML at least one component. It is recommended that you go to the edit page and repair the error before attempting another export. Please check that all components on the page are valid and do not display any error messages."),intent:"error",actions:{primary:{text:e("Correct failed component"),click:function(e){e.hide(),document.location=r}},secondary:{text:e("Return to Export"),click:function(e){e.hide()}}}});else{var a="<p>"+e("There has been a failure to export your course to XML. Unfortunately, we do not have specific enough information to assist you in identifying the failed component. It is recommended that you inspect your courseware to identify any components in error and try again.")+"</p><p>"+e("The raw error message is:")+"</p>"+o;s=new t({title:e("There has been an error with your export."),message:a,intent:"error",actions:{primary:{text:e("Yes, take me to the main course page"),click:function(e){e.hide(),document.location=i}},secondary:{text:e("Cancel"),click:function(e){e.hide()}}}})}$("body").addClass("js"),s.show()}});