// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {

	$('body').bind("ajax:success", function(e, data) {
		$('.list_of_todo_items').append(data);
		$('.todo_items').append(data);

	  });


	$('.toggle-comments-trigger').click(function(){
		$(this).next().slideToggle('slow');

	});


});


