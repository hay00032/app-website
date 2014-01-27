$(function(){
	$('.items img:gt(0)').hide();
	setInterval(function(){
		$('.items :first-child').fadeOut()
			.next('img').fadeIn()
			.end().appendTo('.items');},
		3000);
});


//animate - 100% - 0, 0- -100%
//github algonquin design sliding demo
