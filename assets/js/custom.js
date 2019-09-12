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

function showModal(param1, param2, id){

	let img = document.getElementById('img');
	let pn = document.getElementById('project-name');
	let purl = document.getElementById('project-url');
	img.src = param1.toString();
	pn.innerHTML = param2.toString();
	purl.innerHTML = "www." + param2.toString().replace(" ", "") + ".com"

	let carousel_container = $('#carousel-container') 

	let carousel_item = '<div class="carousel-item"><img id="img" class="d-block w-100" src="assets/image/5.png"></div>'

	carousel_container.append(carousel_item);
	carousel_container.append(carousel_item);
	carousel_container.append(carousel_item);

	// Traerte este elemento <div class="carousel-inner"> con jquery e insertar div que forman parte del carousel 
	// Tienen la forma 
	//<div class="carousel-item">
	//	<img id="img" class="d-block w-100" src="assets/image/5.png" alt="First slide">
	//</div>
	

	// For para crear div dentro del carousel o slider de la forma

	//<div class="carousel-item">
	//	<img id="img" class="d-block w-100" src="assets/image/5.png" alt="First slide">
	//</div>

		// Crear tag div del carousel 
		// Añadir clase carousel-item
		// Insertar dentro del div un tag img con el src 'assets/image/1.png' (imagen)

}