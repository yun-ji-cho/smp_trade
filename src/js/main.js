import { itemArray } from './new_item_data.js';
import { returnItemArray } from './return_item_data.js';
import $ from 'jquery';

var trade = window.trade || {};
trade = (function($) {
	'use strict';
	var dev = {
		//탭 버튼 클릭했을 때
		tabSectionChange: function() {
			var tabitem = $('.tab .item button');
			tabitem.on('click', function() {
				if(!$(this).hasClass('choice')){
					$(this)
						.closest('.tab')
						.find('.item_button')
						.removeClass('choice');
					$(this).addClass('choice');
					dev.tabSectionView();
				}
			});
		},
		//탭 버튼 클릭시 신상품 리스트 보여지게
		tabSectionView: function() {
			var choiceTab = $('.tab button.choice');
			var targetId = choiceTab.attr('id');
			var category = itemArray.filter(item => item.category === targetId);
			var targetSection = $('.tab_section');

			// 배열 아이템 목록 html 로 넣기
			var itemGroupHtml = '';
			category.forEach((item, index) => {
				var addClass = (index === 0) ?  'choice' : '';
				var itemHtml = '<div class="item"><button class="item_button '+ addClass+'">';
				itemHtml += '<img src="' + item['IMAGE URL'] + '" data-url="'+ item['CTA Landing'] +'" alt="">';
				itemHtml += '<p class="item_name">' + item.NAME + '</p><p class="price">' + item.PRICE + '</p>';
				itemHtml += '</button></div>';
				itemGroupHtml += itemHtml;
			});
			targetSection.html(itemGroupHtml);

			//신상품 리스트 보여진 뒤
			dev.itemChoiceChange();

			//tab 클릭시 첫번째 아이템이 BUY NOW url로 들어가도록
			dev.ctaLinkChange(category, 0);

			dev.listItemConnect();  

			dev.changeListView();  

		},
		//Buy Now 버튼 URL 변경
		ctaLinkChange : function(array, index){
			var ctaButton = $('.ctaButton');
			var pageURL = array[index]['CTA Landing'];
			ctaButton.attr('href', pageURL);
		},
		//아이템이 클릭 되었을 때,
		itemChoiceChange: function() {
			$('.tab_section .item_button').on('click', function() {
				if(!$(this).hasClass('choice')){
					$(this)
						.closest('.tab_section')
						.find('.item_button')
						.removeClass('choice');
					$(this).addClass('choice');

					var itemURL = $(this).find('img').data('url');
					$('.ctaButton').attr('href', itemURL);

					//구 기종 리스트 보이기
					dev.changeListView();
				}
			});
		},
		//기종 리스트 접기/펼치기
		listfoldToggle: function(button) {
			$(button)
				.closest('.device')
				.toggleClass('list-hidden');
		},
		//구 기종 리스트 보이게
		changeListView : function(){
			var target = $('.tab_section .item_button.choice');
			var targetName = target.find('.item_name').text().replace('Galaxy','').replace('5G','').replace('  ',' ').trim();
			
			var list = returnItemArray.filter(item => item.device === targetName);
			var listWrap = $('.device .list');

			var itemGroupHtml = '';
			list.forEach((item, index) => {
				var inputCheck = (index === 0) ?  'checked' : '';
				var deviceName = item.return_phone.trim();
				var deviceId = item.return_phone.trim().replace(/ /gi, "_");
				var deviceRemainPrice = item.remain_price;

				var itemHtml = '<li class="item"><div class="radio-btn">';
				itemHtml += '<input type="radio" id="'+ deviceId+ '" name="change_item" '+inputCheck+'>';
				itemHtml += '<label for="'+ deviceId+ '">' +deviceName+ '</label>';
				itemHtml += '</div><p class="price">Up to <span>'+ deviceRemainPrice +'</span></p></li>';
				itemGroupHtml += itemHtml;
			});
			listWrap.html(itemGroupHtml);

			dev.listItemConnect(); 
			dev.listItemChoice();
		},
		// 구 기종 선택시 회색박스에 연동시키기
		listItemConnect : function(){
			var checkedLabel = $('input:radio[name="change_item"]:checked').siblings('label');
			var itemPrice = checkedLabel.closest('.item').find('.price span').text();
			var itemName = checkedLabel.text();
			$('#item_name').text(itemName);
			$('#item_price').text(itemPrice);
		},

		listItemChoice : function(){
			//라디오박스 체크 변화될 때마다 아이템의 이름, 가격 가져와 회색박스에 연동
			$("input[name='change_item']:radio").change(function () {
        dev.listItemConnect();          
			});

		},
		init: function() {
			if ($('.section__purchase').length > 0) {
				dev.tabSectionChange();
				dev.tabSectionView();
				dev.changeListView();
				dev.listItemConnect();
				dev.listItemChoice();
			}
		},
	};
	$(function() {
		dev.init();
	});

	return {
		listfoldToggle: dev.listfoldToggle,
	};
})($)

//전역 객체로 등록
window.TRADE = trade;