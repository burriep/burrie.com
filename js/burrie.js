// _now and _debounce functions taken from Underscore.js
// Underscore.js 1.8.3
// http://underscorejs.org
// (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
// Underscore may be freely distributed under the MIT license.
var _now = Date.now || function () { return (new Date).getTime() };
var _debounce = function (func, wait, immediate) { var timeout, args, context, timestamp, result; var later = function () { var last = _now() - timestamp; if (last < wait && last >= 0) timeout = setTimeout(later, wait - last); else { timeout = null; if (!immediate) { result = func.apply(context, args); if (!timeout) context = args = null } } }; return function () { context = this; args = arguments; timestamp = _now(); var callNow = immediate && !timeout; if (!timeout) timeout = setTimeout(later, wait); if (callNow) { result = func.apply(context, args); context = args = null } return result } };
// classList polyfill from https://github.com/eligrey/classList.js
if("document"in self){if(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){(function(t){"use strict";if(!("Element"in t))return;var e="classList",i="prototype",n=t.Element[i],s=Object,r=String[i].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[i].indexOf||function(t){var e=0,i=this.length;for(;e<i;e++){if(e in this&&this[e]===t){return e}}return-1},o=function(t,e){this.name=t;this.code=DOMException[t];this.message=e},l=function(t,e){if(e===""){throw new o("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(e)){throw new o("INVALID_CHARACTER_ERR","String contains an invalid character")}return a.call(t,e)},c=function(t){var e=r.call(t.getAttribute("class")||""),i=e?e.split(/\s+/):[],n=0,s=i.length;for(;n<s;n++){this.push(i[n])}this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=c[i]=[],f=function(){return new c(this)};o[i]=Error[i];u.item=function(t){return this[t]||null};u.contains=function(t){t+="";return l(this,t)!==-1};u.add=function(){var t=arguments,e=0,i=t.length,n,s=false;do{n=t[e]+"";if(l(this,n)===-1){this.push(n);s=true}}while(++e<i);if(s){this._updateClassName()}};u.remove=function(){var t=arguments,e=0,i=t.length,n,s=false,r;do{n=t[e]+"";r=l(this,n);while(r!==-1){this.splice(r,1);s=true;r=l(this,n)}}while(++e<i);if(s){this._updateClassName()}};u.toggle=function(t,e){t+="";var i=this.contains(t),n=i?e!==true&&"remove":e!==false&&"add";if(n){this[n](t)}if(e===true||e===false){return e}else{return!i}};u.toString=function(){return this.join(" ")};if(s.defineProperty){var h={get:f,enumerable:true,configurable:true};try{s.defineProperty(n,e,h)}catch(d){if(d.number===-2146823252){h.enumerable=false;s.defineProperty(n,e,h)}}}else if(s[i].__defineGetter__){n.__defineGetter__(e,f)}})(self)}else{(function(){"use strict";var t=document.createElement("_");t.classList.add("c1","c2");if(!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var i,n=arguments.length;for(i=0;i<n;i++){t=arguments[i];e.call(this,t)}}};e("add");e("remove")}t.classList.toggle("c3",false);if(t.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){if(1 in arguments&&!this.contains(t)===!e){return e}else{return i.call(this,t)}}}t=null})()}}

var year = new Date().getFullYear();
var years = document.getElementsByClassName('js-currentYear');
for (var i = 0; i < years.length; i++) {
	years[i].innerHTML = year;
}

var navToggle = document.getElementsByClassName('js-headerNavToggle')[0];
var headerNav = document.getElementsByClassName('js-headerNavList')[0];
navToggle.addEventListener('click', function() {
	navToggle.classList.toggle('button--open');
	headerNav.classList.toggle('nav--open');
});

var updateTelLinks = function() {
	var phones = document.getElementsByClassName('js-tel');
	if (window.innerWidth < 960) {
		for (var i = 0; i < phones.length; i++) {
			if (phones[i].hasAttribute('data-tel')){
				phones[i].href = 'tel:' + phones[i].getAttribute('data-tel');
				phones[i].setAttribute('onclick','ga(\'send\', \'event\', \'PhoneCalls\', \'ClickedPhone\', \'' + phones[i].getAttribute('data-tel') + '\');');
			}
		}
	} else {
		for (var i = 0; i < phones.length; i++) {
			phones[i].removeAttribute('onclick');
			if (!phones[i].classList.contains('js-telOnly')) {
				phones[i].href = './contact.html';
			}
		}
	}
}
var responsiveTelLinks = _debounce(updateTelLinks, 500);
responsiveTelLinks();
window.addEventListener('resize', responsiveTelLinks);
