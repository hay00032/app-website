var $videoDialog = $('dialog');
dialogPolyfill.registerDialog($videoDialog.get(0));

$('.btn-open').on('click', function () {
	$videoDialog.children('.video-js').html('<iframe src=http://player.vimeo.com/video/81359622?color=030303&amp;autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')

	/*
	When triggering built-in Javascript functions we need to bypass jQuery
	In order to get to the raw Javascript element we can use .get()

	Example:
	$videoDialog.show() - will trigger jQuery's show function
		not the raw Javascript show function
	$videoDialog.get(0).show() - will get the first raw Javascript
		element and trigger it native show function
	*/
	$videoDialog.get(0).showModal();
	/*
		.show() allows users to interact with stuff behind the dialog
		.showModal() disables user interaction behind the dialog
	*/
	$videoDialog.css('width', '80%');
})

$('.btn-close').on('click', function (){
	$videoDialog.get(0).close();
	$videoDialog.children('.video').html('');

})
