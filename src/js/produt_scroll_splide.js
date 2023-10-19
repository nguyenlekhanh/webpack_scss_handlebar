var jQuery = require("jquery")
import Splide from '@splidejs/splide';


const productScroll = {
  init_product_scroll: function() {
    let $productScroll = $(".splide:has(> :gt(4))");
  }
}

$(function() {
  productScroll.init_product_scroll();
});


const splide = new Splide( '.splide', {
  type: 'loop',
  perPage    : 3,
  perMove    : 1,
  gap        : '1rem',
  trimSpace  : false,
  speed      : 760,
  rewindSpeed: 760,
  breakpoints: {
    400: {
      perPage: 3,
      gap        : '1rem',
      // height : '6rem',
    },
    900: {
      perPage: 4,
      gap: '1rem',
    },
    1200: {
      perPage: 5,
      gap: "2rem"
    },
    3000: {
      perPage: 5,
      gap: "2rem"
    },
  },
} );

splide.mount();