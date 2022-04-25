import {infoList, smartphone, tablet, smartwatch} from './json.js'
import $ from 'jquery';

let SEARCH = window.SEARCH || {};
window.SEARCH = (($) => {
  'use strict';

  const dev = {
    myDevicePrice : '',
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
    drawList($searchBox, wordList){
      const searchboxNum = $searchBox.attr('data-search');
      const $choiceTab = $searchBox.siblings('.tab').find('.item_button.choice').attr('data-tab');

      let categoryArr;


      if(searchboxNum === '1'){ //1번 인풋
        categoryArr = ($choiceTab === 'smartphone') ? smartphone 
                      : ($choiceTab === 'tablet') ? tablet 
                      : smartwatch;

      }else if(searchboxNum === '2'){ //2번 인풋
        categoryArr = ($choiceTab === 'smartphone') ? infoList.filter(item => item.category ==='smartphone')
                    : ($choiceTab === 'tablet') ? infoList.filter(item => item.category ==='tablet')
                    : infoList.filter(item => item.category ==='smartwatch');
      }
      
      
      const $list = $('.search_box .list');
      $list.empty();
      $list.scrollTop(0);
      
      if(wordList){
        let wordArr = wordList.filter(item => item !== '');
        let newList = [];
        for(let i = 0; i < categoryArr.length; i++){ 
          let device = (searchboxNum === '1') ? categoryArr[i].device : categoryArr[i].model;
          let wordTrueCount = 0;
          for(let j = 0; j <wordArr.length; j++){
            if(device.toLowerCase().includes(wordArr[j])) wordTrueCount++;
          }
          if(wordTrueCount === wordArr.length) newList.push(categoryArr[i]);
          
        }

        console.log(newList);
        // categoryArr = newList.filter((el, index) => {
        //   return newList.indexOf(el) === index;
        // })

        categoryArr = newList;


      }

      let html = '';
      if(categoryArr.length === 0){
        html = `<li>Your device is not eligible for trade-in.</li>`
      }else{

        let itemNameArr = [];
        if(searchboxNum === '1'){
          categoryArr.forEach((item) => itemNameArr.push(item.device));
        }else{
          categoryArr.forEach((item) => itemNameArr.push(item.model));
        }

        itemNameArr = new Set(itemNameArr);
        console.log(itemNameArr);
        itemNameArr.forEach((item) => {
          const text = `<li><button type="button">${item}</button></li>`;
          html += text;
        });
      }
      
      $list.append(html);
    },
    inputChange(){
      $('.search_item').on('focus', function(e){
        $(this).closest('.search_box').addClass('active');
        let $currentBox = $(e.target).closest('.search_box');
        if(e.target.value) drawTextList($currentBox, e);
        else dev.drawList($currentBox);
      })
      $('.search_item').on('keyup', function(e){
        let $currentBox = $(e.target).closest('.search_box');
        if(e.target.value === '') return;
        drawTextList($currentBox, e);
      });

      let drawTextList = (current, eve) => {
        const arr_word = String(eve.target.value).toLowerCase().split(' ');
        dev.drawList(current, arr_word);
      }
    },
    clearInput(target){
      const el = $(target);
      el.siblings('input[type="text"]').val('');
      dev.drawList(el.closest('.search_box'));
    },
    listItemClick(e){
      if(e.target === e.currentTarget) return;
      const $clickItem = $(e.target);
      const $listWrap = $(e.currentTarget);
      const deviceName = $clickItem.text();
      const $searchBox = $listWrap.closest('.search_box');
      const $yourDevice = $searchBox.siblings('.your_device');
      const $result = $('.section__result');
      const html = `<li class="no_result">The device you're looking for is currently not available.</li>`;
      
      const drawDevice = () => {
        $searchBox.removeClass('active');
        $yourDevice.find('.device_model').text(deviceName).attr('data-price', $clickItem.attr('data-price'));
        $yourDevice.removeClass('is-hidden');
      }
    

      const current = $searchBox.attr('data-search');
      if(current === '1'){
        $('.section__trade').removeClass('is-hidden');
        dev.myDevicePrice = $clickItem.data('price');
        drawDevice();
      }else if(current === '2') {
        if($('.section__purchase .choice').data('tab') !== $('.section__trade .choice').data('tab')){ //카테고리가 서로 일치하지 않는경우
          $('.search_box .list2').empty().append(html);
          $result.empty();
          $yourDevice.addClass('is-hidden');
          setTimeout(() => {
            $searchBox.addClass('active');
          }, 500);
        }else{ //일치하는 경우
          drawDevice();
          dev.drawResult($clickItem); //최종 결과보여줌
          $result.removeClass('is-hidden');
        }
      }
    },
    drawResult(targetElem){
      let myDevicePrice = dev.myDevicePrice;
      let newItemPrice = targetElem.data('price');
      let finalPrice = Number(targetElem.data('price').replace(/,/g, '')) - Number(dev.myDevicePrice.replace(/,/g, '')) ;
      console.log(myDevicePrice, newItemPrice, finalPrice);
      let item;
      for(let i = 0; i < infoList.length; i++){
        if(infoList[i].model === targetElem.text()){
          item = infoList[i];
          break;
        }
      }
      let html = `<div class="result">
          <div class="image">
              <img src= ${item.image} alt="">
          </div>
          <div class="device_info">
            <p class="device_name">${item.model}</p>
            <span>From</span>
            <p class="price"><span class="blue">£${finalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span><del>£${newItemPrice}</del></p>
            <p class="value">Trade-in Value <span class="blue">£${myDevicePrice}</span></p>

            <div class="button_wrap">
                <a href="${item.url}" class="ctaButton button">Buy now</a>
            </div>
          </div>s
      </div>`;

      $('.section__result').empty().append(html);
    },

    init: function() {
      dev.tabSectionChange();
      dev.inputChange();
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

  $('.search_box .list').on('click', (e) => {
    dev.listItemClick(e);
  });

  return {
    clearInput : dev.clearInput,
  }

})($);

