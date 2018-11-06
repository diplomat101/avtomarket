import debounce from 'debounce';
import { fixedHeader } from './fixedHeader.js';

export function fixedHeaderOnScroll() {
  window.onscroll = debounce(fixedHeader, 25);
}
