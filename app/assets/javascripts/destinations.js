$(document).ready(function() {

	
	// sets each destination to be clickable
	$('.destinations').children().each( function() {

			this.onclick = function() {
				removeDestinationBackgrounds(); 
				this.style.backgroundColor = '#b1c0cf';
				var destinationId = this.dataset.itemId
				showByDestination(destinationId);
				var dLat = this.attributes.latitude.value
				var dLng = this.attributes.longitude.value
				recenterMap(dLat, dLng);
				// destinationSelectCorrect(destinationId);
				};				
	});

});

// when a destination is clicked, unhides all it's todo itmes
function showByDestination(id) {		
	$('[class=hide-me]').each(function() {		
			var i = this.dataset.itemId
			
			if (i==id){			
					this.style.display = "inherit";
			}	
			else{
				this.style.display = "none";
			}					
	});	
};



//clears the backgound of all destinations
function removeDestinationBackgrounds() {
	$('.destinations').children().each( function() {
		this.style.backgroundColor = 'white';
	});
};

// makes the destination selection show the current selected destination
function destinationSelectCorrect(id) {

};	

