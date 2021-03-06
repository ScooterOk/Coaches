var steps = {};

$(document).ready(function(e) {
	console.log('Hello Scooter)Ok');
	$(document).click(function(e) {
		if($(e.target).closest('.custom-select').length || $(e.target).closest('.search__filters-selected-item').length || $(e.target).closest('.header__user_menu').length || $(e.target).closest('.header__notifications').length || $(e.target).closest('.list__item_menu').length || $(e.target).closest('.results-list').length || $(e.target).closest('.coach-athlete__title_right-mobile').length) return;
		$('.custom-select__list').slideUp(70);
		$('.search__filters-selected .selects__list').slideUp(70);
		if(!$(e.target).hasClass('header__user_arrow'))$('.header__user_menu').slideUp(70);
		if(!$(e.target).hasClass('header__notifications_but'))$('.header__notifications').slideUp(70);
		if(!$(e.target).hasClass('list__item_menu-but'))$('.list__item_menu').slideUp(70);
		if(!$(e.target).hasClass('admin__body__title-but'))$('.coach-athlete__title_right-mobile').slideUp(70);
		$('.share-modal__form_to .results-list').fadeOut(150);		
		
	});

	if($('.scrollbar-inner').length){
		$('.scrollbar-inner').scrollbar({
			autoScrollSize : true,
			autoUpdate : true,
			onInit : function(e){
				$('.athletes-messenger__list_body').scrollTop(100000);
			}
		});
	}	
	if($('.athletes-menu__modal').length)autosize($('.athletes-menu__modal textarea'));
	if($('.coach-profile__edit-modal').length)autosize($('.coach-profile__edit-modal textarea'));
	if($('.share-modal').length)autosize($('.share-modal__form_message textarea'));
	if($('.datepicker').length){
		$( ".datepicker" ).datepicker({
			dateFormat: "dd M yy",
			changeMonth: true,
			changeYear: true
		});
	}
	$('.gotop-buttom').click(function(e) {
		var body = $("html, body");
		body.stop().animate({scrollTop:0}, 300, 'swing');
	});

	$('body').on('click', '.custom-select', function(e) {
		$('.custom-select__list').slideUp(70);
		if($(this).find('.custom-select__list').is(':hidden')){
			$(this).find('.custom-select__list').slideDown(70);
		}else{
			$(this).find('.custom-select__list').slideUp(70);
		}
	});
	$('body').on('click', '.custom-select__option', function(e) {
		var val = $(this).attr('data-option');
		var text = $(this).text();
		$(this).closest('.custom-select').addClass('selected');
		$(this).closest('.custom-select').find('.custom-select__option').removeClass('selected');
		$(this).addClass('selected');
		$(this).closest('.custom-select').attr('data-value', val);
		$(this).closest('.custom-select').find('span').text(text);		
	});
	$('body').on('click', '.modal', function(e){		
		if($(e.target).closest('.modal__body').length) return;
		$(this).fadeOut(200);
		$('body').removeClass('no-scroll');
	});	
	$('.modal .modal__head_buts .cancel, .modal .modal__footer_buts .cancel').click(function(e) {
		$('.modal').fadeOut(200);
		$('body').removeClass('no-scroll');
		e.preventDefault();
	});

	$('.header__menu_but').click(function(e) {
		$('body').toggleClass('mobile-menu');
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
		$('.leanding__hiw_athlete h3').click(function(e) {
			if($('.leanding__hiw_athlete').hasClass('active')){
				$('.leanding__hiw_athlete').removeClass('active');
				$('.leanding__hiw_athlete .wrapper').slideUp(200);
			}else{
				$('.leanding__hiw_athlete').addClass('active');
				$('.leanding__hiw_athlete .wrapper').slideDown(200);
			}
		});
		$('.leanding__hiw_college h3').click(function(e) {
			if($('.leanding__hiw_college').hasClass('active')){
				$('.leanding__hiw_college').removeClass('active');
				$('.leanding__hiw_college .wrapper').slideUp(200);
			}else{
				$('.leanding__hiw_college').addClass('active');
				$('.leanding__hiw_college .wrapper').slideDown(200);
			}
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
		$('.admin__body__title-but').click(function(e) {
			$('.coach-athlete__title_right-mobile').slideUp(70);
			$(this).closest('.admin__body__title').find('.coach-athlete__title_right-mobile').slideDown(70);
		});
		$('.athletes-menu .list__item_menu li').click(function(e) {
			var action = $(this).attr('data-action');
			if(action == 'edit'){
				$('body').addClass('no-scroll');
				$('#athletes-menu__edit-modal').fadeIn(200, function(e){
					autosize.update($('textarea'));
				});
			}
			if(action == 'delete'){
				$('body').addClass('no-scroll');
				$(this).closest('.athletes-menu__list_item').fadeOut(200, function() {
					$(this).remove();
				});
			}
		});
		$('.athletes-menu .add-new').click(function(e) {
			$('body').addClass('no-scroll');
			$('#athletes-menu__new-modal').fadeIn(200, function(e){
				autosize.update($('textarea'));
			});
			e.preventDefault();
		});

		$('.admin .coach-profile a.edit-profile').click(function(e) {
			$('body').addClass('no-scroll');
			$('.coach-profile__edit-modal').fadeIn(200, function(e){
				autosize.update($('textarea'));
			});
			e.preventDefault();
		});
		$('.admin .athletes-details a.edit').click(function(e) {
			$('body').addClass('no-scroll');
			$('#athletes-details__edit-modal').fadeIn(200, function(e){
				autosize.update($('textarea'));
			});
			e.preventDefault();
		});
		$('.admin .athletes-scholarships-details a.nominated__link').click(function(e) {
			$('body').addClass('no-scroll');
			$('#athletes-scholarships-nominatiing-modal').fadeIn(200);
			e.preventDefault();
		});
		$('.admin .athletes-scholarships-details a.nominated__link').click(function(e) {
			$('body').addClass('no-scroll');
			$('#athletes-scholarships-nominatiing-modal').fadeIn(200);
			e.preventDefault();
		});
		$('.scholarships-detiles .scholarships-detiles__title .title__delete').click(function(e) {
			$('body').addClass('no-scroll');
			$('#delete-modal').fadeIn(200);
			e.preventDefault();
		});
		$('.scholarships .item__head_edit a.edit, .scholarships-detiles .title__edit').click(function(e) {
			$('body').addClass('no-scroll');
			$('#collages-coach-scholarship-edit').fadeIn(200, function(e){
				autosize.update($('textarea'));
			});
			e.preventDefault();
		});
		$('.scholarships .scholarships__create a').click(function(e) {
			$('body').addClass('no-scroll');
			$('#collages-coach-scholarship-add').fadeIn(200, function(e){
				autosize.update($('textarea'));
			});
			e.preventDefault();
		});

		$('.edit-modal__photo input[type="file"]').change(function(e) {
			var reader = new FileReader();
			var img = $(this).closest('.edit-modal__photo').find('.edit-modal__photo_img img');
			if (this.files && this.files[0]) {
            	var reader = new FileReader();
	            reader.onload = function (e) {	            	
	                img.attr('src', e.target.result);
	            }
            	reader.readAsDataURL(this.files[0]);
            	$(this).closest('.edit-modal__photo').find('.edit-modal__photo_delete').show();
        	}		

		});
		$('.edit-modal__photo_delete').click(function(e) {
			var img = $(this).closest('.edit-modal__photo').find('.edit-modal__photo_img img');			
			img.attr('src', './img/profile-photo-default.svg');
			$(this).hide();
			e.preventDefault();
		});
		$('.athletes-menu__modal .edit-photo input[type="file"]').change(function(e) {
			var reader = new FileReader();
			var img = $(this).closest('.edit-photo').find('.edit-photo__img img');
			if (this.files && this.files[0]) {
            	var reader = new FileReader();
	            reader.onload = function (e) {	            	
	                img.attr('src', e.target.result);
	            }
            	reader.readAsDataURL(this.files[0]);
            	$(this).closest('.edit-photo').find('.edit-photo__but_delete').show();
        	}		

		});
		$('.edit-photo__but_delete').click(function(e) {
			var img = $(this).closest('.edit-photo').find('.edit-photo__img img');			
			img.attr('src', './img/profile-photo-default.svg');
			$(this).hide();
			e.preventDefault();
		});

		$('.scholarships-detiles .requests__table_item').click(function(e) {
			if($(e.target).closest('.athlete__share').length){
				return false;
			}
			$('body').addClass('no-scroll');
			$('#сolllegs-сoach-athlete-details-modal').fadeIn(200);
			e.preventDefault();
		});
		$('.coach-profile__description_text, .about__description .about__description_text').click(function(e) {
			$(this).addClass('show');
		});

		

		

		$('.athletes-messenger__contacts_search .search__button').click(function(e) {
			if($('.athletes-messenger__contacts_search').hasClass('active')){
				$('.athletes-messenger__contacts_search').removeClass('active');
				$('.athletes-messenger__results_list').fadeOut(100, function(){
					$('.athletes-messenger__contacts_list').fadeIn(100);
				});
			}else{
				$('.athletes-messenger__contacts_search').addClass('active');
				$('.athletes-messenger__contacts_list').fadeOut(100, function(){
					$('.athletes-messenger__results_list').fadeIn(100);
				});
			}
		});
		$('.athletes-messenger__contacts_search .search__input_back').click(function(e) {
			$('.athletes-messenger__contacts_search').removeClass('active');
			$('.athletes-messenger__results_list').fadeOut(100, function(){
				$('.athletes-messenger__contacts_list').fadeIn(100);
			});
			e.preventDefault();			
		});
		$('.scholarships-detiles__requests .athlete__share a').click(function(e) {
			$('body').addClass('no-scroll');
			$('#сolllegs-сoach-athlete-share-modal').fadeIn(200);
			e.preventDefault();			
		});
		$('.athletes-messenger__contacts_search .search__input input').keyup(function(e) {			
			// Retrieve the input field text and reset the count to zero
			var filter = $(this).val(), count = 0;
			if(filter.length){
				$('.results__list_letter-block .letter').fadeOut(100);
			}else{
				$('.results__list_letter-block .letter').fadeIn(100);
			}

			// Loop through the comment list
			$(".athletes-messenger__results_list .results__list_item").each(function(){
				// If the list item does not contain the text phrase fade it out
				if ($(this).find('.name p').text().search(new RegExp(filter, "i")) < 0) {
					$(this).fadeOut(100);
					// Show the list item if the phrase matches and increase the count by 1
				} else {
					console.log($(this).find('.name p').text());
					$(this).show();
					count++;
				}
			});

			// Update the count
			var numberItems = count;
			$("#filter-count").text("Number of Filter = "+count);
		});

		


		// Athletes-menu__edit-modal scripts
		$('.admin').on('click', '.athletes-menu__modal .edit-form__characteristics_add', function(){
			var item = '<li style="display : none;"><div class="edit-form__characteristics_slik edit-form__input"><label>Skill</label><input type="text" value=""></div><div class="edit-form__characteristics_value edit-form__input"><label>Value</label><input type="text" value=""></div><div class="edit-form__characteristics_remove"><i></i></div></li>'			
			$('.edit-form__characteristics').append(item);
			$('.edit-form__characteristics li:last-child').slideDown(150);
		});
		$('.admin').on('click', '.athletes-menu__modal .edit-form__available_add', function(){
			return false;
			var item = '<li style="display: none;"><div class="edit-form__available_year edit-form__input"><label>Year</label><div data-value="" class="custom-select"><span data-placeholder="Choose the Sport">2018</span><div class="custom-select__list"><div class="custom-select__option" data-option="">2019</div><div class="custom-select__option" data-option="">2020</div><div class="custom-select__option" data-option="">2021</div><div class="custom-select__option" data-option="">2022</div><div class="custom-select__option" data-option="">2023</div></div></div></div><div class="edit-form__available_qty edit-form__input"><label>Qty</label><input type="text" value="10"></div><div class="edit-form__available_remove"><i></i></div></li>';
			$('.edit-form__available').append(item);
			$('.edit-form__available li:last-child').slideDown(150);
		});
		$('.admin').on('click', '.athletes-menu__modal .edit-form__characteristics_remove i, .athletes-menu__modal .edit-form__available_remove i', function(e){
			$(this).closest('li').slideUp(150, function(e){
				$(this).remove();
				$(".edit-form__available_add").show();
			});
		});
		$('.admin').on('click', '.athletes-menu__modal .edit-form__notable-achievements_add', function(){
			var item = '<li style="display: none;"><div class="year edit-form__input"><label>Year</label><input type="text" value=""></div><div class="title edit-form__input"><label>Title</label><input type="text" value=""></div><div class="achievement edit-form__input"><label>Achievement</label><input type="text" value=""></div><div class="remove"><i></i></div></li>';
			$('.athletes-menu__modal .notable-achievements__list').append(item);
			$('.athletes-menu__modal .notable-achievements__list li:last-child').slideDown(150);
		});
		$('.admin').on('click', '.athletes-menu__modal .notable-achievements__list .remove i', function(e){
			$(this).closest('li').slideUp(150, function(e){
				$(this).remove();
			});
		});
		$('.admin').on('click', '.athletes-menu__modal .edit-form__video_add', function(){
			var item = '<li style="display: none;"><div class="edit-form__input"><label>Links</label><input type="text" value=""></div><div class="remove"><i></i></div></li>';
			$('.athletes-menu__modal .edit-form__video_list').append(item);
			$('.athletes-menu__modal .edit-form__video_list li:last-child').slideDown(150);
		});
		$('.admin').on('click', '.athletes-menu__modal .edit-form__video_list .remove i', function(e){
			$(this).closest('li').slideUp(150, function(e){
				$(this).remove();
			});
		});		


		$('.athletes-scholarships-details__modal .modal__choose-athlete__list li').click(function(e) {
			if($(this).hasClass('selected')){
				$(this).removeClass('selected');
			}else{
				$(this).addClass('selected');
			}			
		});
		$('.athletes-scholarships-details__modal .modal__choose-year_list li').click(function(e) {
			$(this).closest('.modal__choose-year_list').find('li').removeClass('selected');			
			$(this).addClass('selected');
			
		});
		$('.athletes-scholarships-details__modal .modal__send-message textarea').keydown(function(event) {
			var limit = 100;
			var length = $(this).val().length; 
			var val = $(this).val();
			if(length >= limit){
				$(this).val(val.slice(0, -1));
			}
		});
		$('.athletes-scholarships-details__modal .modal__send-message textarea').keyup(function(event) {
			var limit = 100;
			var length = $(this).val().length; 
			var val = $(this).val();			
			if(length <= limit){
				$(this).closest('.modal__send-message').find('span.length').html(length+' / 100');
			}
		});
		$('.athletes-scholarships-details__modal .modal__footer a.save').click(function(e) {
			$(this).closest('.modal').fadeOut(200);
			$('body').removeClass('no-scroll');
			$('.scholarships-detiles__notification').addClass('active');
			setTimeout(function(){
				$('.scholarships-detiles__notification').removeClass('active');
			}, 3000);
			e.preventDefault();
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
				
			}
		});

		$('.search__form .search__form_filter-but').click(function(e) {
			var name = $('.search__results').attr('data-current');
			$('.search__filters_list.'+name).show();
			$('.search__filters').slideDown(150);
			e.preventDefault();
		});

		$('.search__filters-selected .search__filters-selected-item_click').click(function(e) {			
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
function shareModalInit(){
	var count = null;
	$('.share-modal__form_to').click(function(e) {
		var focus = $(e.target).hasClass('share-modal__form_to');
		if(focus){
			$(this).find('input').focus();
		}
	});

	$('.share-modal__form_to input').keyup(function(e) {
		if(e.keyCode == 27)return false;
		if(e.keyCode == 13){
			$('.share-modal__form_to .results-list .active').click();
			$('.share-modal__form_to .results-list').fadeOut(150);
			$('.results__list_item').removeClass('active');
			count = null;
		}
		var length = $(this).val().length;		
		if(length){			
			if($('.share-modal__form_to .results-list').is(':hidden')){
				count = null;
				$('.results__list_item').removeClass('active');	
			}
			
			$(this).width(length == 0 ? 15 : length * 15);
			$('.share-modal__form_to .results-list').fadeIn(150);
		}else{
			$('.share-modal__form_to .results-list').fadeOut(150);
			$('.results__list_item').removeClass('active');
			if($('.share-modal__form_to .select-list__item').length){
				$('.share-modal__form_to input').attr('placeholder', '');
			}else{
				$('.share-modal__form_to input').attr('placeholder', 'Type the Name').width(120);
			}
			count = null;
		}
		//$(this).width(length == 0 ? 15 : length * 15);
	});

	$('.share-modal__form_to input').keydown(function(e) {
		if($(this).val().length){
			var length = $('.results__list_item').length;
			switch (e.keyCode) {
				case 27:					
					if($('.share-modal__form_to .results-list').is(':visible')){
						$('.share-modal__form_to .results-list').fadeOut(150);
						count = null;
						$('.results__list_item').removeClass('active');
					}					
					e.preventDefault();
				break;
				case 38:
					if(count == 0)return false;
					count--;
					$('.results__list_item').removeClass('active');
					$($('.results__list_item')[count]).addClass('active');
					e.preventDefault();
				break;
				case 40:
					if(count == null){
						count = 0;
						$('.results__list_item').removeClass('active');
						$($('.results__list_item')[count]).addClass('active');
					}else{
						if(count == (length-1))return false;
						count++;
						$('.results__list_item').removeClass('active');
						$($('.results__list_item')[count]).addClass('active');
					}
					// if(count != null && count == 0){
					// 	count++;
					// 	console.log(count);
					// 	$($('.results__list_item')[count]).addClass('active');
					// }else{
					// 	count = 0;
					// 	console.log(count);
					// 	$($('.results__list_item')[count]).addClass('active');
					// }
					e.preventDefault();
				break;			
				default:
				// statements_def
				break;
			}
		}		
	});

	$('body').on('click', '.share-modal .select-list__item i', function(e){
		$(this).closest('.select-list__item').remove();
		if(!$('.share-modal .select-list__item').length){
			$('.share-modal__form_to input').attr('placeholder', 'Type the Name').width(120);
		}
	});

	$('body').on('click', '.share-modal .results__list_item', function(e){
		var val = $(this).find('.name p').text();
		var label = '<div class="select-list__item"><span>'+val+'</span><i></i></div>';
		$('.share-modal__form_to input').attr('placeholder', '').val('');
		$('.share-modal .share-modal__form_to input').before(label);
		$('.share-modal .results-list').fadeOut(150);
	});
	$('body').on('mouseenter', '.share-modal .results__list_item', function(e){
		var t = this;
		$('.share-modal .results__list_item').removeClass('active');
		$('.share-modal .results__list_item').each(function(i, e) {
			if(t == e){
				count = i;
				$(this).addClass('active');
			}
			
		});
	});	
};
function scholarshipsInit(){
	var pull = true;
	var tab = 'current';
	var count = $('.scholarships__list.'+tab+' .scholarships__list_item').length;
	$('.scholarships .scholarships__title_tabs li').click(function(e) {
		if(!$(this).hasClass('current')){
			var name = $(this).attr('data-name');			
			tab = name;
			count = $('.scholarships__list.'+tab+' .scholarships__list_item').length;
			console.log(count);
			$('.scholarships__title_tabs li').removeClass('current');
			$(this).addClass('current');
			$('.scholarships__list').fadeOut(150, function() {
				$('.scholarships__list.'+name).fadeIn(150);
			});				
		}			
	});
	
	$(document).scroll(function(e) {
		if(count < 10)return false;
		var y = $($('.scholarships__list.'+tab+' .scholarships__list_item')[(count - 1)]).offset().top - $(window).height();

		if($(document).scrollTop() > y && pull){
			pull = false;
			$.ajax({
			  url: '/private/scholarships/more?offset='+count,
			  dataType : 'html',
			  success: function(data){
				$('.scholarships__list.'+tab).append(data);
				count = $('.scholarships__list.'+tab+' .scholarships__list_item').length;
				pull = true;
			  }
			});

			
		}


			
	});
};

shareModalInit();
scholarshipsInit();



