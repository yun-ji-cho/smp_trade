import {infoList, smartphone, tablet, smartwatch} from './json.js'
import $ from 'jquery';

let SEARCH = window.SEARCH || {};
window.SEARCH = (($) => {
  'use strict';
  const dev = {
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
          dev.drawList();
				}
			});
		},
    drawList(wordList){
      
      const $choiceTab = $('.item_button.choice').attr('id');
      let categoryArr = ($choiceTab === 'SMP') ? smartphone : ($choiceTab === 'Tablet') ? tablet : smartwatch;
      
      const $list = $('.search_box .list');
      $list.empty();
      $list.scrollTop(0);
      
      let newList;
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
        dev.drawList();
      })
      $('.search_item').on('keyup', function(e){
        if(e.target.value === '') return;
        const arr_word = String(e.target.value).toLowerCase().split(' ');
        dev.drawList(arr_word);
      
      });
    },
    clearInput(){
      $('.btn_clear').on('click', (e) => {
        const el = $(e.target);
        el.siblings('input[type="text"]').val('')
      })
    },
    init: function() {
      dev.tabSectionChange();
      dev.inputChange();
      dev.clearInput();
    }
  }
  $(document).ready(function() {
    dev.init();

    console.log(['galaxy', 'z', 'fold2', '5g'].includes('galaxy'))
  });

  return {

  }

})($);

