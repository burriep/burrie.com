var d = new Date();
var years = document.getElementsByClassName('currentYear');
for (var i = 0; i < years.length; i++) {
  years[i].innerHTML = d.getFullYear();
}
var anchors = document.getElementsByTagName('a');
var currentPage = window.location.pathname;
for (var i = 0; i < anchors.length; i++) {
  if (anchors[i].href === currentPage) {
    anchors[i].classList.add('link--current-page');
  }
}
function toggleNavDrawer() {
  document.getElementsByClassName('nav--header')[0].classList.toggle('nav--open');
}
var navToggle = document.getElementsByClassName('button--nav-toggle')[0];
navToggle.addEventListener('click',function() {toggleNavDrawer();});

function updatePhoneLinks() {
  var phones = document.getElementsByClassName('tel-link');
  if (window.innerWidth < 1000) {
    for (var i = 0; i < phones.length; i++) {
      if (phones[i].classList.contains('phone--alternate')) {
        phones[i].href = 'tel:' + phones[i].innerHTML;
      } else {
        phones[i].href = 'tel:+1-262-544-6032';
      }
    }
  } else {
    for (var i = 0; i < phones.length; i++) {
      phones[i].href = '/contact';
    }
  }
}
updatePhoneLinks();
window.addEventListener('resize', function() {
  updatePhoneLinks();
});
