

$(document).ready(function() {

  $('body').on('change', '#sort-select', function() {
     var selection = $('#sort-select').val();
    // selection: 0=none, 1=name asc. 2= name dec.
    var sorted = sortTodoItems(selection);

		$('.todo_items').html(""); 

    _.each(sorted, function(x) {
    	$('.todo_items').append(x);
    });

    // rerun the toggle comments functionality
    toggleComments();
  });
});     


function sortTodoItems(selection) {
		//gets all the <a>'s containing a todo_item name
		var titlesA = $('.hide-me');

		switch(selection){
		case "1": { //by name ascending
			titlesA.sort(function(a, b) {
			 var aDiv = a;
			 var bDiv = b;
			 var nameA= $(aDiv.children).find('a').text().toLowerCase();
			 var nameB= $(bDiv.children).find('a').text().toLowerCase();
			 if (nameA < nameB) 
			  return -1 
			 if (nameA > nameB)
			  return 1
			 return 0 
			});
		break;
		}
		case "2": { //by name descending
			titlesA.sort(function(a, b) {
			 var nameA= $(a.children).find('a').text().toLowerCase();
			 var nameB= $(b.children).find('a').text().toLowerCase();
			 if (nameA > nameB) 
			  return -1 
			 if (nameA < nameB)
			  return 1
			 return 0 
			});
		break;
		}}		

		return titlesA ;
};






