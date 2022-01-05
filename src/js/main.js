import { itemInfo } from './data.js';
var TRADE = window.TRADE || {};

TRADE = (function($) {
	'use strict';
	var dev = {
		itemChoiceChange: function() {
			function itemChoice(target) {
				target
					.closest('.radio-wrap')
					.find('.item_button')
					.removeClass('choice');
				target.addClass('choice');

				console.log(target);
			}

			itemChoice($('.item_button').eq(0));
			$('.item_button').click(itemChoice(this));
		},
		tabSectionChange: function() {
			var tabitem = $('.tab.radio-wrap .item button');
			// var tabSection = $('.tab_section');

			// var request = new XMLHttpRequest();
			// request.open('GET', requestURL);
			// request.responseType = 'json';
			// request.send();
			tabChange();
			tabitem.each(function() {
				$(this).click(tabChange);
			});

			function tabChange() {
				// console.log($(this))
				var targetId = $(this).attr('id');
				const category = itemInfo.filter(item => item.NAME === targetId);
				var targetSection = $('.tab_section');
				var url = 'https://images.samsung.com/is/image/samsung/p6pim/uk/galaxy-s21/gallery/uk-galaxy-s21-ultra-5g-g988-sm-g998bzsgeua-thumb-368888054?$160_160_PNG$';
				var product_name = 'S21 Ultra 5G (128GB)';
				var price = '£1,149.00';
				var html = '<div class="item"><button class="item_button">';
				html += '<img src="' + url + '" alt="">';
				html += '<p class="item_name">' + product_name + '</p><p class="price">' + price + '</p>';
				html += '</button></div>';
				targetSection.append(html);
			}

		},
		listfoldToggle: function(button) {
			$(button)
				.closest('.device')
				.toggleClass('list-hidden');
		},
		init: function() {
			if ($('.section__purchase').length > 0) {
				dev.itemChoiceChange();
				dev.tabSectionChange();
			}
		},
	};
	$(document).ready(function() {
		dev.init();
	});

	return {
		listfoldToggle: dev.listfoldToggle,
	};
})($);
