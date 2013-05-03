

$(document).ready(function() {

	// search box function to show only searched results in the selected destination:
  $('body').on('change', '#todo-search', function() {
    var searchThis = $(this).val().toLowerCase();
    $('#todo-search').val("");

    //get the value of the selector = destination_id (0 = all)
    var destId = $('#search-select').val();
   
   	//gets all the <a>'s containing a todo_item name
    var titlesA = $('.hide-me').children().find('a');

    _.each(titlesA, function(x) {
    	var title = x.text.toLowerCase();
    	var hideMe = $(x).closest(".hide-me");
    	var hideMeDestId = hideMe.attr('data-item-id');

    	if ( (title.indexOf(searchThis) != -1 )   // true if matches the search term
    			 && ( hideMeDestId == destId || destId == 0 ) // true if in the selected destination or all selected
    			) {
    		hideMe.show("slow");
    	}
    	else{
    		hideMe.hide("slow");
    	}
    });
  });


});
