var jQuery = require("jquery")
import Splide from '@splidejs/splide';


const productScroll = {
  init_product_scroll: function() {
    // let $productScroll = $(".splide__list");

    // console.log($productScroll);

    // if($productScroll.length) {
    //   $productScroll.each(function() {
    //     let $productScrollItem = $(this);

    //     if($productScrollItem.children().length > 1) {
    //       console.log($productScrollItem.closest('.splide'));
    //     }
    //   })
    // }

    var elms = document.getElementsByClassName( 'splide' );

    for ( var i = 0; i < elms.length; i++ ) {
      //new Splide( elms[ i ] ).mount();

      const splide = new Splide( elms[ i ], {
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
    }

    
  },
  init_product_tooltip: function() {
    $('.card__icon-group__icon').tooltip();
  }
}

$(function() {
  productScroll.init_product_scroll();
  productScroll.init_product_tooltip();
});
