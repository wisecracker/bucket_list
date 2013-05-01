$(document).ready(function() {

	

	$('.destinations').children().each( function() {
			console.log(this);

			this.onmouseover = function() {
    		this.style.backgroundColor = 'rgb(219, 189, 189)';
				};

			this.onmouseout = function() {
    		this.style.backgroundColor = 'white';
				};	

			this.onclick = function() {
				this.style.backgroundColor = 'green';
				var destinationId = this.dataset.itemId
				showByDestination(destinationId);
				};

	});


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

});


