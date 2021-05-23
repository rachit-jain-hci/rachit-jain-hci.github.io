/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

function copyEmail() {
  	var x = document.getElementById("snackbar");
  	x.className = "show";

	var $temp = $("<input>");
  	$("body").append($temp);
  	$temp.val($("#emailid").text()).select();
  	document.execCommand("copy");
  	$temp.remove();
	
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}

//$( "#myemail" ).click(function() {
//   $( "#popup" ).show(); 
//
////src https://codepen.io/shaikmaqsood/pen/XmydxJ
//  
//   
//	setTimeout(function() {
//      $( "#popup" ).hide();
//    }, 2000);
//});

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header-index'),
		$footer = $('#footer-index'),
		$footerstudy=$('#footer-study'),
		$main = $('#main-index'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		if($('body').hasClass('index')) {
			breakpoints.on('<=medium', function() {
				$footer.insertAfter($main);
			});

			breakpoints.on('>medium', function() {
				$footer.appendTo($header);
			});
		}
	
		else	{
			$footerstudy.insertAfter($main);
		}

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image-index',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

})(jQuery);