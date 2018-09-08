/*
 * terms-and-conditions-banner.js
 * ------------------------------
 * Script to check for and create a cookie when the user clicks the `I agree`
 * button on the terms and conditions banner. 
 */

window.addEventListener('DOMContentLoaded', function() {

    // Check if the user has a cookie for this banner and hide the banner if
    // the cookie is present.
    checkForBannerCookie();

    // Hide banner when clicking its close button
	var banner = document.querySelector('#terms-and-conditions-banner');
	var closeBtn = banner.querySelector('.btn-close');

	closeBtn.addEventListener('click', function() {
		banner.style.display = 'none';
		setCookie('terms_and_conditions_banner', true, 3650);
	}, false);

}, false); 

// Define functions to set/get a cookie for the banner so that it only 
// appears once for the user if they have manually closed the cookie.
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime( d.getTime() + (exdays * 24 * 60 * 60 * 1000) );
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Hide the banner if a cookie has been set by the user clicking the
// close button on the banner.
function checkForBannerCookie() {
	var bannerCookie = getCookie('terms_and_conditions_banner');
	if(!bannerCookie) {
		var banner = document.querySelector('#terms-and-conditions-banner');
		banner.style.display = 'block';
	}
}