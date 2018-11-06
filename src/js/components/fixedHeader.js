import $ from 'jquery';
import { WINDOW, ISFIXED } from '../_constants';
import { getElemHeight } from './getElemSize.js';


export function fixedHeader() {    
  let popupVisible = $('.js-popup').is(':visible'); // remove if all ok with popups
  if (WINDOW.scrollTop() > (getElemHeight('.js-hero')) || popupVisible) {
    $('.js-header').addClass(ISFIXED);
  } else {
    $('.js-header').removeClass(ISFIXED);
  }
}
