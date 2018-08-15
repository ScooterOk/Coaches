var steps = {};

$(document).ready(function(e) {	
	$(document).click(function(e) {
		if($(e.target).closest('.custom-select').length || $(e.target).closest('.search__filters-selected-item').length || $(e.target).closest('.header__user_menu').length || $(e.target).closest('.header__notifications').length || $(e.target).closest('.list__item_menu').length) return;
		$('.custom-select__list').slideUp(70);
		$('.search__filters-selected .selects__list').slideUp(70);
		if(!$(e.target).hasClass('header__user_arrow'))$('.header__user_menu').slideUp(70);
		if(!$(e.target).hasClass('header__notifications_but'))$('.header__notifications').slideUp(70);
		if(!$(e.target).hasClass('list__item_menu-but'))$('.list__item_menu').slideUp(70);
	});

	if($('.scrollbar-inner').length){
		$('.scrollbar-inner').scrollbar({
			autoScrollSize : true,
			autoUpdate : true
		});
	}	
	if($('.athletes-menu__edit-modal').length)autosize($('.athletes-menu__edit-modal textarea'));
	if($('.datepicker').length)$( ".datepicker" ).datepicker({
		dateFormat: "dd M yy",
	    changeMonth: true,
	    changeYear: true
	  });
	$('.gotop-buttom').click(function(e) {
		var body = $("html, body");
		body.stop().animate({scrollTop:0}, 300, 'swing');
	});

	$('.custom-select').click(function(e) {
		$('.custom-select__list').slideUp(70);
		if($(this).find('.custom-select__list').is(':hidden')){
			$(this).find('.custom-select__list').slideDown(70);
		}else{
			$(this).find('.custom-select__list').slideUp(70);
		}
	});
	$('.custom-select__option').click(function(e) {
		var val = $(this).attr('data-option');
		var text = $(this).text();
		$(this).closest('.custom-select').addClass('selected');
		$(this).closest('.custom-select').find('.custom-select__option').removeClass('selected');
		$(this).addClass('selected');
		$(this).closest('.custom-select').attr('data-value', val);
		$(this).closest('.custom-select').find('span').text(text);		
	});
	$('.modal').click(function(e) {
		if($(e.target).closest('.modal__body').length) return;
		$(this).fadeOut(200);
	});
	$('.modal .modal__head_buts .cancel, .modal .modal__footer_buts .cancel').click(function(e) {
		$('.modal').fadeOut(200);
		e.preventDefault();
	});

	/*******************************************************************************
								 Leanding scripts
	*********************************************************************************/

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

	
	/*******************************************************************************
								 Admin scripts
	*********************************************************************************/
	if($('body').hasClass('admin')){		
		$('.admin .tooltip').mouseenter(function(e) {
			$(this).find('.tooltip__body').fadeIn(150);
		});
		$('.admin .tooltip').mouseleave(function(e) {
			$(this).find('.tooltip__body').fadeOut(150);
		});
		$('.admin .scholarships-detiles .requests__nav_years a').click(function(e) {
			$('.admin .scholarships-detiles .requests__nav_years a').removeClass('current');
			$(this).addClass('current');
			e.preventDefault();
		});
		$('.header__user_arrow').click(function(e) {			
			if($('.header__user_menu').is(':hidden')){
				$('.header__user_menu').slideDown(70);
			}else{
				$('.header__user_menu').slideUp(70);
			}
		});
		$('.header__notifications_but').click(function(e) {			
			if($('.header__notifications').is(':hidden')){
				$('.header__notifications').slideDown(70);
			}else{
				$('.header__notifications').slideUp(70);
			}
		});
		$('.athletes-menu__list_item .list__item_menu-but').click(function(e) {
			$('.list__item_menu').slideUp(70);
			$(this).closest('.athletes-menu__list_item').find('.list__item_menu').slideDown(70);
		});
		$('.athletes-menu .list__item_menu li').click(function(e) {
			var action = $(this).attr('data-action');
			if(action == 'edit'){
				$('.athletes-menu__edit-modal').fadeIn(200, function(e){
					autosize.update($('textarea'));
				});
			}
			if(action == 'delete'){
				$(this).closest('.athletes-menu__list_item').fadeOut(200, function() {
					$(this).remove();
				});
			}
		});


		// Athletes-menu__edit-modal scripts
		$('.admin').on('click', '.athletes-menu__edit-modal .edit-form__characteristics_add', function(){
			var item = '<li style="display : none;"><div class="edit-form__characteristics_slik edit-form__input"><label>Skill</label><input type="text" value=""></div><div class="edit-form__characteristics_value edit-form__input"><label>Value</label><input type="text" value=""></div><div class="edit-form__characteristics_remove"><i></i></div></li>'			
			$('.edit-form__characteristics').append(item);
			$('.edit-form__characteristics li:last-child').slideDown(150);
		});
		$('.admin').on('click', '.athletes-menu__edit-modal .edit-form__characteristics_remove i', function(e){
			$(this).closest('li').slideUp(150, function(e){
				$(this).remove();

			});
		});
		$('.admin').on('click', '.athletes-menu__edit-modal .edit-form__notable-achievements_add', function(){
			var item = '<li style="display: none;"><div class="year edit-form__input"><label>Year</label><input type="text" value=""></div><div class="title edit-form__input"><label>Title</label><input type="text" value=""></div><div class="achievement edit-form__input"><label>Achievement</label><input type="text" value=""></div><div class="remove"><i></i></div></li>';
			$('.athletes-menu__edit-modal .notable-achievements__list').append(item);
			$('.athletes-menu__edit-modal .notable-achievements__list li:last-child').slideDown(150);
		});
		$('.admin').on('click', '.athletes-menu__edit-modal .notable-achievements__list .remove i', function(e){
			$(this).closest('li').slideUp(150, function(e){
				$(this).remove();
			});
		});
		$('.admin').on('click', '.athletes-menu__edit-modal .edit-form__video_add', function(){
			var item = '<li style="display: none;"><div class="edit-form__input"><label>Links</label><input type="text" value=""></div><div class="remove"><i></i></div></li>';
			$('.athletes-menu__edit-modal .edit-form__video_list').append(item);
			$('.athletes-menu__edit-modal .edit-form__video_list li:last-child').slideDown(150);
		});
		$('.admin').on('click', '.athletes-menu__edit-modal .edit-form__video_list .remove i', function(e){
			$(this).closest('li').slideUp(150, function(e){
				$(this).remove();
			});
		});
		
	}


	/*******************************************************************************
								 Search scripts
	*********************************************************************************/	
	if($('body').hasClass('search')){		
		if($('.search__form_input input').val().length)$('.search__form_input').addClass('value');
		$('.search__form_input input').keyup(function(e) {
			if($(this).val().length){
				$(this).closest('.search__form_input').addClass('value');
			}else{
				$(this).closest('.search__form_input').removeClass('value');
			}
		});
		$('.search__form_clear').click(function(e) {
			$('.search__form_input input').val('');
			$('.search__form_input').removeClass('value');
		});
		$('.search .tooltip').mouseenter(function(e) {
			$(this).find('.tooltip__body').fadeIn(150);
		});
		$('.search .tooltip').mouseleave(function(e) {
			$(this).find('.tooltip__body').fadeOut(150);
		});

		$('.search .search__tabs li').click(function(e) {
			if(!$(this).hasClass('current')){
				var name = $(this).attr('data-name');
				$('.search__results').attr('data-current', name);
				$('.search .search__tabs li').removeClass('current');
				$(this).addClass('current');
				$('.search__results_tab').fadeOut(150, function() {
					$('.search__results_tab.'+name).fadeIn(150);
				});
				$('.search__filters_list').hide();
				$('.search__filters_list.'+name).show();

				console.log(name);
			}			
		});

		$('.search__form .search__form_filter-but').click(function(e) {
			var name = $('.search__results').attr('data-current');
			$('.search__filters_list.'+name).show();
			$('.search__filters').slideDown(150);
			e.preventDefault();
		});

		$('.search__filters-selected .search__filters-selected-item_click').click(function(e) {
			console.log(e.target);
			$('.search__filters-selected .selects__list').slideUp(70);
			if($(this).closest('.search__filters-selected-item').find('.selects__list').is(':hidden')){
				$(this).closest('.search__filters-selected-item').find('.selects__list').slideDown(70);
			}else{
				$(this).closest('.search__filters-selected-item').find('.selects__list').slideUp(70);
			}
			
		});


		//Close filters
		$('.search__filters_close').click(function(e) {
			$('.search__filters').slideUp(150, function(){
				$('.search__filters_list').hide();
			});
		});

		//Apply filters
		$('.search__filters_list a.apply').click(function(e) {
			$('.search__filters').slideUp(150);
			$('.search__filters-selected').slideDown(150);
			e.preventDefault();
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