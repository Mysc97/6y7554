// Sticky v1.0 by Daniel Raftery
// http://thrivingkings.com/sticky
//
// http://twitter.com/ThrivingKings

(function($) {

	// Using it without an object
	$.sticky = function(note, options, callback) {
		return $.fn.sticky(note, options, callback);
	};

	$.fn.sticky = function(note, options, callback) {
		// Default settings
		var position = 'bottom-right';
		// top-left, top-right, bottom-left, or bottom-right

		var settings = {
			'speed' : 'slow', // animations: fast, slow, or integer
			'duplicates' : false, // true or false
			'autoclose' : 8000 // integer or false
		};

		// Passing in the object instead of specifying a note
		if (!note) {
			note = this.html();
		}

		if (options) {
			$.extend(settings, options);
		}

		// Variables
		var display = true;
		var duplicate = 'no';

		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random() * 99999);

		// Handling duplicate notes and IDs
		$('.sticky-note').each(function() {
			if ($(this).html() == note && $(this).is(':visible')) {
				duplicate = 'no';
				if (!settings['duplicates']) {
					display = false;
				}
			}
			if ($(this).attr('id') == uniqID) {
				uniqID = Math.floor(Math.random() * 9999999);
			}
		});

		// Make sure the sticky queue exists
		if (!$('body').find('.sticky-queue').html()) {
			$('body').append('<div class="sticky-queue ' + position + '"></div>');
		}

		// Can it be displayed?
		if (display) {
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<span class="sticky-close" rel="' + uniqID + '" title="Close" style="display: inline-block;float: right;cursor: pointer;">✖</span<>');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');

			// Smoother animation

			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
		}

		// Listeners
		$('.sticky').ready(function() {
			// If 'autoclose' is enabled, set a timer to close the sticky
			if (settings['autoclose']) {
				$('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']);
			}
		});
		// Closing a sticky
		$('.sticky-close').click(function() {
			$('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']);
		});

		// Callback data
		var response = {
			'id' : uniqID,
			'duplicate' : duplicate,
			'displayed' : display,
			'position' : position
		}

		// Callback function?
		if (callback) {
			callback(response);
		} else {
			return (response);
		}

	}
})(jQuery);

$(document).ready(function() {
	$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> DavidGilbert Généré <img src="images/gold.png" width="15" height="17"/> - 900000 et <img src="images/cash.png" width="15" height="17"/> - 670000 et <img src="images/Cash.png" width="15" height="17"/> - 860000</b>');
	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> DoreneBeaudry19 Généré <img src="images/gold.png" width="15" height="17"/> - 150000</b>');
	}
	setInterval(callnotification, 5000);

	var callnotification = function() {
		$.sticky('<b><img src="images/be.png"/> AnoukMetivier Généré <img src="images/gold.png" width="15" height="17"/> - 350000 et <img src="images/gems.png" width="15" height="17"/> - 200000</b>');
	}
	setInterval(callnotification, 7000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> Duad1945 Généré <img src="images/gold.png" width="15" height="17"/> - 600000 et <img src="images/cash.png" width="15" height="17"/> - 640000</b>');
	}
	setInterval(callnotification, 8000);

	var callnotification = function() {
		$.sticky('<b><img src="images/be.png"/> RoyaleBourassa Généré <img src="images/gold.png" width="15" height="17"/> - 670000 et <img src="images/cash.png" width="15" height="17"/> - 650000 et <img src="images/gems.png" width="15" height="17"/> - 430000</b>');
	}
	setInterval(callnotification, 9000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> AudaBourget07 Généré <img src="images/gold.png" width="15" height="17"/> - 346000</b>');
	}
	setInterval(callnotification, 11000);

	var callnotification = function() {
		$.sticky('<b><img src="images/ch.png"/> KonstBR Généré <img src="images/gold.png" width="15" height="17"/> - 143000 et <img src="images/cash.png" width="15" height="17"/> - 320000</b>');
	}
	setInterval(callnotification, 13000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> IjTommy4 Généré <img src="images/gold.png" width="15" height="17"/> - 870000 et <img src="images/gems.png" width="15" height="17"/> - 708000</b>');
	}
	setInterval(callnotification, 15000);

	var callnotification = function() {
		$.sticky('<b><img src="images/ca.png"/>LanceClash22 Généré <img src="images/gold.png" width="15" height="17"/> - 740000 et <img src="images/cash.png" width="15" height="17"/> - 410000</b>');
	}
	setInterval(callnotification, 16000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> MaslinT21 Généré <img src="images/gold.png" width="15" height="17"/> - 122000</b>');
	}
	setInterval(callnotification, 18000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> GamerJohn201 Généré <img src="images/gold.png" width="15" height="17"/> - 480000 et <img src="images/cash.png" width="15" height="17"/> - 612000 et <img src="images/gems.png" width="15" height="17"/> - 430000</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="images/be.png"/> TheKingofCOC2014 Généré <img src="images/gold.png" width="15" height="17"/> - 550000 et <img src="images/cash.png" width="15" height="17"/> - 320000</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> GDufresneC  Généré <img src="images/gold.png" width="15" height="17"/> - 222000</b>');
	}
	setInterval(callnotification, 21000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> Gamer0102  Généré <img src="images/gold.png" width="15" height="17"/> - 980000 et <img src="images/cash.png" width="15" height="17"/> - 370000</b>');
	}
	setInterval(callnotification, 22000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> GabrielleJodion33  Généré <img src="images/gold.png" width="15" height="17"/> - 863000 et <img src="images/gems.png" width="15" height="17"/> - 980000</b>');
	}
	setInterval(callnotification, 24000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> VernonSalmonsd32  Généré <img src="images/gold.png" width="15" height="17"/> - 762000 et <img src="images/cash.png" width="15" height="17"/> - 850500</b>');
	}
	setInterval(callnotification, 25000);

}); 