$(document).ready(function(){
	$('shorturl').submit(function(e)){
		e.preventDefault();
		var u = $('#url').val();
		var k = $('#key').val();
			$.ajax({
				type: "POST",
				url: "/short",
				data: { url: u,key: k}
				});
	});
});