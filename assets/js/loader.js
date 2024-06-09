$(window).load(function() {
	$('#loader').addClass('is_active');
	setTimeout(function() {
		$('#loader').addClass('is_loaded');
	}, 5000);
	setTimeout(function() {
		$('#loader_second').addClass('is_loaded');
	}, 1800);
});

