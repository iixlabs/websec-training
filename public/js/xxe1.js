$(document).ready(function() {
	$('#xxe1Send').click(function(e) {
		var xml = '<contact>' +
			'<name>' + $('#name').val() + '</name>' +
			'<phone>' + $('#phone').val() + '</phone>' +
			'<comments>' + $('#comments').val() + '</comments>' +
			'</contact>';

		$.post('/xxe/1/api/contact', {
			form: xml
		}, function(err, res, body) {
			$("#notice").html(body.responseText);
		});
	});
});
