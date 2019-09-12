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
	    if(changeHeaderOn == undefined){
	    	changeHeaderOn = scrollY();
	    }
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

function showModal(param1, param2){
	let img = document.getElementById('img');
	let pn = document.getElementById('project-name');
	let purl = document.getElementById('project-url');
	img.src = param1.toString();
	pn.innerHTML = param2.toString();
	purl.innerHTML = "www." + param2.toString().replace(" ", "") + ".com"
}