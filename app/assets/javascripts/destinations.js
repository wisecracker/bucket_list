$(document).ready(function() {

	
	// sets each destination to be clickable and show onle todo_items belonging to it:
	$('.destinations').children().each( function() {

			this.onclick = function() {
				removeDestinationBackgrounds(); 
				this.style.backgroundColor = '#b1c0cf';
				
				var destinationId = this.dataset.itemId
				if (destinationId == "all") {
					showAll();
				}
				else {
					showByDestination(destinationId);
				};				

				var dLat = this.attributes.latitude.value
				var dLng = this.attributes.longitude.value
				recenterMap(dLat, dLng);
				destinationSelectCorrect(destinationId);
				searchSelectCorrect(destinationId);
			};				
	});

});

function setActiveDestination() {

};

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

function showAll() {	
	$('[class=hide-me]').each(function() {
		this.style.display = "inherit";
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
	$('#todo_item_destination_id').val(id);
};

function searchSelectCorrect(id) {
	$('#search-select').val(id);
};		

