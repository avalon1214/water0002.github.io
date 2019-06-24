;(function( $ ) {


	var $hCarousel = $( '#header-carousel' );
	var $pCarousel = $( '#product_carousel' );
	var $nCarousel = $( '#news-carousel' );
	var $mobile_menu_btn = $( '#mobile-menu--btn' );
	var $mobile_menu_frame = $( '#mobile-menu--frame' );

	var $document_wrap = $('.document--wrap')

	$mobile_menu_btn.on( 'click', function() {

		if ( $mobile_menu_frame.hasClass( 'open' ) ) {
			$mobile_menu_frame.removeClass( 'open' );
			$document_wrap.removeClass( 'blur-effect' );

			return;
		}

		$mobile_menu_frame.addClass( 'open' );
		$document_wrap.addClass( 'blur-effect' );
		return
	});

	$hCarousel.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1800,
		autplayHoverPause: true,
		nav: true,
		loop: true,
	})
	
	$pCarousel.owlCarousel({
		items:3,
		autoplay: true,
		autoplayTimeout:5000,
		autoplaySpeed:1800,
		autplayHoverPause:true,
		nav:true,
		loop: true,
		center: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	})

	$nCarousel.owlCarousel({
		items:2,
		nav:true,
		loop: true,
    	nav:true,
    	merge:true
	})

	var testFunc = function() {
		alert();
	}

	var eventFunc = function() {
		$(document).trigger('test:event');
	}

	$('.btn').on('click', function(){
		alert( 'Sorry still not available' ); 
	})

	$(document).on('test', function(){
		alert();
	})

})(jQuery, window, document);