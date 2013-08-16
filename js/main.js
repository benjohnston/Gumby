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

	$('[gumby-shuffle]').attr('gumby-shuffle', 'only screen and (max-width: 820px) and (min-width: 768px)|1-0-2,only screen and (max-width: 768px) and (min-width: 400px)|1-0-2,only screen and (max-width: 400px)|2-1-0');
	Gumby.initialize('shuffle', true);
});

