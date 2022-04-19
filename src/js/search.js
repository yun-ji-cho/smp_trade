import {infoList, smartphone, tablet, smartwatch} from './json.js'
import $ from 'jquery';

let SEARCH = window.SEARCH || {};
window.SEARCH = (($) => {
  'use strict';
  const dev = {
    //탭 버튼 클릭했을 때
		tabSectionChange: function() {
			var tabItem = $('.tab .item button');
			tabItem.on('click', function() {
				if(!$(this).hasClass('choice')){
					$(this)
						.closest('.tab')
						.find('.item_button')
						.removeClass('choice');
					$(this).addClass('choice');
          dev.clearInput($(this).closest('.section').find('.btn_clear'));
				}
			});
		},
    drawList(wordList){
      
      const $choiceTab = $('.item_button.choice').attr('data-tab');
      let categoryArr = ($choiceTab === 'SMP') ? smartphone : ($choiceTab === 'Tablet') ? tablet : smartwatch;
      
      const $list = $('.search_box .list');
      $list.empty();
      $list.scrollTop(0);
      
      if(wordList){
        let wordArr = wordList.filter(item => item !== '');
        let newList = [];

        for(let i = 0; i < categoryArr.length; i++){ //단어 반복문
          let device = categoryArr[i].device.toLowerCase(); //['Galaxy', 'Note', '20', 'Ultra', '5G']
          let wordTrueCount = 0;
          for(let j = 0; j <wordArr.length; j++){
            if(device.includes(wordArr[j])) wordTrueCount++;
          }
          if(wordTrueCount === wordArr.length) newList.push(categoryArr[i]);
          
        }
        categoryArr = newList;
      }

      let html = '';
      if(categoryArr.length === 0){
        html = `<li>Your device is not eligible for trade-in.</li>`
      }else{
        categoryArr.forEach((item) => {
          const text = `<li><button type="button">${item.device}</button></li>`;
          html += text;
        });
      }
      
      $list.append(html);
    },
    inputChange(){
      $('.search_item').on('focus', function(e){
        $(this).closest('.search_box').addClass('active');
        if(e.target.value) drawTextList(e);
        else dev.drawList();
      })
      $('.search_item').on('keyup', function(e){
        if(e.target.value === '') return;
        drawTextList(e);
      });

      let drawTextList = (value) => {
        const arr_word = String(value.target.value).toLowerCase().split(' ');
        dev.drawList(arr_word);
      }
    },
    clearInput(target){
      const el = $(target);
      el.siblings('input[type="text"]').val('');
      dev.drawList();

    },
    listItemClick(){
      $('.search_box .list').on('click', function(e){
        if(e.target === e.currentTarget) return;
        let deviceName = $(e.target).text();
        $(e.target).closest('.search_box').removeClass('active');
        $('.your_device .device').text(deviceName);
        $('.your_device').removeClass('is-hidden');
        $('.section__trade').removeClass('is-hidden');
      });
    },
    init: function() {
      dev.tabSectionChange();
      dev.inputChange();
      dev.clearInput();
      dev.listItemClick();
    }
  }
  $(document).ready(function() {
    dev.init();


  });

  $(document).on('click', function (e) {
    var target = $(e.target);
    if (!target.hasClass('search_box') && !target.parents().hasClass('search_box')) {
        $('.search_box').removeClass('active');
    }
});

  return {
    clearInput : dev.clearInput,
  }

})($);

