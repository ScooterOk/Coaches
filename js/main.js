var steps = {};

$(document).ready(function(e) {
	if($('body').hasClass('leanding')){
		initLeanding();
		$(document).scroll(function(e) {
			if(blueScroller()){			
				if(!$('.scroller ul').hasClass('blue'))$('.scroller ul').addClass('blue');
			}else{
				if($('.scroller ul').hasClass('blue'))$('.scroller ul').removeClass('blue');
			}
			if(reverseScroller()){
				if(!$('.scroller ul').hasClass('reverse'))$('.scroller ul').addClass('reverse');
			}else{
				if($('.scroller ul').hasClass('reverse'))$('.scroller ul').removeClass('reverse');
			}			
			if($(document).scrollTop() < steps.step2){
				$('.scroller ul li').removeClass('current');
				$('.scroller__stage-1').addClass('current');
			}else if($(document).scrollTop() > steps.step2 && $(document).scrollTop() < steps.step3){
				$('.scroller ul li').removeClass('current');
				$('.scroller__stage-2').addClass('current');
			}else if($(document).scrollTop() > steps.step3 && $(document).scrollTop() < steps.step4){
				$('.scroller ul li').removeClass('current');
				$('.scroller__stage-3').addClass('current');
			}else if($(document).scrollTop() > steps.step4 && $(document).scrollTop() < steps.step5){
				$('.scroller ul li').removeClass('current');
				$('.scroller__stage-4').addClass('current');
			}else if($(document).scrollTop() > steps.step5){
				$('.scroller ul li').removeClass('current');
				$('.scroller__stage-5').addClass('current');
			}		
		});
		$(window).resize(function(e) {
			steps = {
				step1 : 0,
				step2 : $('.leanding__wic').offset().top - ($(window).height() / 3) ,
				step3 : $('.leanding__wuct').offset().top - ($(window).height() / 3),
				step4 : $('.leanding__hiw').offset().top - ($(window).height() / 3),
				step5 : $('.leanding__subscribe').offset().top - ($(window).height() - 100 - 40)
			};	
		});
	}	
});

function initLeanding(){
	steps = {
		step1 : 0,
		step2 : $('.leanding__wic').offset().top - ($(window).height() / 3) ,
		step3 : $('.leanding__wuct').offset().top - ($(window).height() / 3),
		step4 : $('.leanding__hiw').offset().top - ($(window).height() / 3),
		step5 : $('.leanding__subscribe').offset().top - ($(window).height() - 100 - 40)
	};
	if(blueScroller()){			
			if(!$('.scroller ul').hasClass('blue'))$('.scroller ul').addClass('blue');
		}else{
			if($('.scroller ul').hasClass('blue'))$('.scroller ul').removeClass('blue');
		}
		if(reverseScroller()){
			if(!$('.scroller ul').hasClass('reverse'))$('.scroller ul').addClass('reverse');
		}else{
			if($('.scroller ul').hasClass('reverse'))$('.scroller ul').removeClass('reverse');
		}
		
		if($(document).scrollTop() < steps.step2){
			$('.scroller ul li').removeClass('current');
			$('.scroller__stage-1').addClass('current');
		}else if($(document).scrollTop() > steps.step2 && $(document).scrollTop() < steps.step3){
			$('.scroller ul li').removeClass('current');
			$('.scroller__stage-2').addClass('current');
		}else if($(document).scrollTop() > steps.step3 && $(document).scrollTop() < steps.step4){
			$('.scroller ul li').removeClass('current');
			$('.scroller__stage-3').addClass('current');
		}else if($(document).scrollTop() > steps.step4 && $(document).scrollTop() < steps.step5){
			$('.scroller ul li').removeClass('current');
			$('.scroller__stage-4').addClass('current');
		}else if($(document).scrollTop() > steps.step5){
			$('.scroller ul li').removeClass('current');
			$('.scroller__stage-5').addClass('current');
		}
}

function blueScroller(){
	var t = $('.leanding__head').height() - ($(window).height() - (100 + 50));
	var b = $('.leanding__subscribe').offset().top - ($(window).height() - 200 - 40);
	if($(document).scrollTop() > t && $(document).scrollTop() < b){
		return true;
	}else if($(document).scrollTop() > b){
		return false;
	}
}
function reverseScroller(){
	var y = $('.leanding__subscribe').offset().top - ($(window).height() - 200 - 40);
	if($(document).scrollTop() > y){
		return true;
	}else{
		return false;
	}
}