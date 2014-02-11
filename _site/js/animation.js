var $win = $(window);
var $logo = $('.logo');
var $phone = $('.phone');


$win.on('scroll', function (){
	//console.log($win.scrollTop());
	$sun.css('transform', 'rotate(' + $win.scrollTop() /5 + 'deg)')

});

$('.logo-section').waypoint(function () {
	$logo.addClass('js-logo-animate');
}, { offset: '60%' });

$('.phone-section').waypoint(function () {
	$phone.addClass('js-phone-animate');
}, { offset: '60%' });

$('.ships-section').waypoint(function () {
	$ships.eq(0).addClass('js-ship-delay-1');
	$ships.eq(2).addClass('js-ship-delay-3');
	$ships.eq(3).addClass('js-ship-delay-2');
	$ships.addClass('js-ships-animate');
}, { offset: '60%' });

