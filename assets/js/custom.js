'use-strict'
$(document).ready(function(){
	var docElem = document.documentElement,
	        header = document.getElementById( 'header-creative'),
	        didScroll = false,
	        changeHeaderOn = scrollY(); 
	function init() {
	    window.addEventListener( 'scroll', function( event ) {
	        if( !didScroll ) {
	            didScroll = true;
	            setTimeout( scrollPage, 250 );
	        }
	    }, false );
	}
	function scrollPage() {
	    var sy = scrollY();
	    if ( sy >= changeHeaderOn ) {
	        $(header).fadeIn();
	    }
	    else {
	        $(header).fadeOut();
	    }
	    didScroll = false;
	}
	function scrollY() {
	    return window.pageYOffset || docElem.scrollBottom;
	}
	init();
})