// Gumby is ready to go
Gumby.ready(function() {
	console.log('Gumby is ready to go...', Gumby.debug());

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}
});

// Oldie document loaded
Gumby.oldie(function() {
	console.log("This is an oldie browser...");
});

// Touch devices loaded
Gumby.touch(function() {
	console.log("This is a touch enabled device...");
});

// Document ready
$(function() {
	$('[gumby-shuffle]').on('gumby.onShuffle', function(e, data) {
		console.log("Shuffle!");
		console.log(data);
	});

	setTimeout(function() {
		console.log("TRIGGERING");
		$('[gumby-shuffle]').trigger('gumby.shuffle');
	}, 5000);
});

