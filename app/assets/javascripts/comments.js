$(document).ready(function() {

	$('body').bind("ajax:success", function(e, data) {
	  
	  var x =$('<div>').append(data).children().first().attr('todo-id')
		$('.comments[todo-id =' + x +']').append(data)
	});	

});