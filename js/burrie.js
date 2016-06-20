// _now and _debounce functions taken from Underscore.js
// Underscore.js 1.8.3
// http://underscorejs.org
// (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
// Underscore may be freely distributed under the MIT license.
var _now = Date.now || function () { return (new Date).getTime() };
var _debounce = function (func, wait, immediate) { var timeout, args, context, timestamp, result; var later = function () { var last = _now() - timestamp; if (last < wait && last >= 0) timeout = setTimeout(later, wait - last); else { timeout = null; if (!immediate) { result = func.apply(context, args); if (!timeout) context = args = null } } }; return function () { context = this; args = arguments; timestamp = _now(); var callNow = immediate && !timeout; if (!timeout) timeout = setTimeout(later, wait); if (callNow) { result = func.apply(context, args); context = args = null } return result } };

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
	if (window.innerWidth < 1000) {
		for (var i = 0; i < phones.length; i++) {
			if (phones[i].hasAttribute('data-tel')){
				phones[i].href = 'tel:' + phones[i].getAttribute('data-tel');
			}
		}
	} else {
		for (var i = 0; i < phones.length; i++) {
			phones[i].href = './contact.html';
		}
	}
}
var responsiveTelLinks = _debounce(updateTelLinks, 500);
responsiveTelLinks();
window.addEventListener('resize', responsiveTelLinks);
