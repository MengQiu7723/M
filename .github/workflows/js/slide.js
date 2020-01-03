$(function(){
	var $slides = $('.slide_pics li');
	var len = $slides.length;
	var nowli = 0;
	var prevli = 0;
	var $prev = $('.prev');
	var $next = $('.next');
	var ismove = false;
	var timer = null;
	$slides.not(':first').css({left:800});
	$slides.each(function(index, el) {
		var $li = $('<li>');

		if(index==0)
		{
			$li.addClass('active');
		}

		$li.appendTo($('.points'));
	});
	$points = $('.points li');
	timer = setInterval(autoplay,4000);

	$('.slide').mouseenter(function() {
		clearInterval(timer);
	});

	$('.slide').mouseleave(function() {
		timer = setInterval(autoplay,4000);
	});

	function autoplay(){
		nowli++;
		move();
		$points.eq(nowli).addClass('active').siblings().removeClass('active');
	}

	$points.click(function(event) {
		if(ismove)
		{
			return;
		}
		nowli = $(this).index();

		if(nowli==prevli)
		{
			return;
		}
		
		$(this).addClass('active').siblings().removeClass('active');
		move();

	});

	$prev.click(function() {
		if(ismove)
		{
			return;
		}		
		nowli--;
		move();
		$points.eq(nowli).addClass('active').siblings().removeClass('active');

	});
	
	$next.click(function() {
		if(ismove)
		{
			return;
		}		
		nowli++;
		move();
		$points.eq(nowli).addClass('active').siblings().removeClass('active');

	});


	function move(){

		ismove = true;

		if(nowli<0)
		{
			nowli=len-1;
			prevli = 0
			$slides.eq(nowli).css({left:-150});
			$slides.eq(nowli).animate({left:0},800,'easeOutExpo');
			$slides.eq(prevli).animate({left:800},800,'easeOutExpo',function(){
				ismove = false;
			});
			prevli=nowli;
			return;
		}

		if(nowli>len-1)
		{
			nowli = 0;
			prevli = len-1;
			$slides.eq(nowli).css({left:800});
			$slides.eq(nowli).animate({left:0},800,'easeOutExpo');
			$slides.eq(prevli).animate({left:-850},800,'easeOutExpo',function(){
				ismove = false;
			});
			prevli=nowli;
			return;
		}


		if(prevli<nowli)
		{
			$slides.eq(nowli).css({left:800});			
			$slides.eq(prevli).animate({left:-850},800,'easeOutExpo');
			$slides.eq(nowli).animate({left:0},800,'easeOutExpo',function(){
				ismove = false;
			});
			prevli=nowli;
			
		}
		else
		{			
			$slides.eq(nowli).css({left:-800});			
			$slides.eq(prevli).animate({left:800},800,'easeOutExpo');	
			$slides.eq(nowli).animate({left:0},800,'easeOutExpo',function(){
				ismove = false;
			});
			prevli=nowli;		
		}

	}
})
function getScrollTop() {
    var scroll_top = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scroll_top = document.body.scrollTop;
    }
    return scroll_top;
}
function set_top_middle1() {
	var top_hover = document.getElementsByClassName("top_hover");
	top_hover[0].style.position = "fixed";
	
}
function set_top_middle2() {
	var top_hover = document.getElementsByClassName("top_hover");
	top_hover[0].style.position = "absolute";
}
    