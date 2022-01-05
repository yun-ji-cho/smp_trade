import { itemInfo } from './data.js';
console.log(itemInfo);

var TRADE = window.TRADE || {};

TRADE = (function($) {
	'use strict';
	var dev = {
		itemChoiceChange: function() {
			$('.item_button').click(function() {
				$(this)
					.closest('.radio-wrap')
					.find('.item_button')
					.removeClass('choice');
				$(this).addClass('choice');
			});
		},
		tabSectionChange: function() {
			var tabitem = $('.tab.radio-wrap');
			var tabSection = $('.tab_section');
			var requestURL;

			// var request = new XMLHttpRequest();
			// request.open('GET', requestURL);
			// request.responseType = 'json';
			// request.send();

			tabitem.click(function() {});
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
