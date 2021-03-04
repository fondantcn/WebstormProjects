$(function() {
	var toolTop = $(".recommend").offset().top;
	toggleTool()
	function toggleTool(){
		if ($(document).scrollTop() >= toolTop) {
			$('.fixedtool').fadeIn()
		} else {
			$('.fixedtool').fadeOut()
		}
	}
	$(window).scroll(function() {
		//console.log(toolTop, $(document).scrollTop())
		toggleTool()
	})
	$('.fixedtool li').click(function() {
		var current = $('.floor .w').eq($(this).index()).offset().top;
		console.log(current)
		$('body,html').stop().animate({
			scrollTop:current
		},function(){
			true
		})
		$(this).addClass('current').siblings().removeClass('current')
	})
})
