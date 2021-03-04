$(function() {
	$('.target').click(function() {
		const target = $(this).val();
		$('.card-'+target).siblings('.card').css('z-index', '1').fadeOut()//.css('z-index', '999').fadeIn()
		$('.card-'+target).css('z-index', '999').fadeIn()
		if (target === 0) {
			$('#info').css('left', '0px');
		} else {
			$('#info').css('left', '320px');
		}
	})
})
