var jQuery = require("jquery")

const icon_login = {
  init_icon_login: function() {
    let khanhPopover = $('.khanh_popover:not(".processed")');
    khanhPopover.addClass('processed');
    khanhPopover.on('click', function() {
      khanhPopover.next().toggleClass('active');
    });
  }
}

$(function() {
	icon_login.init_icon_login();

  $('body').off('click.khanh_popover').on('click.khanh_popover', function (e) {
      let $target = $(e.target);
      
      let $khanhPopoverMenu = $('.khanh_popover_menu.active');

      if(!$target.hasClass('khanh_popover')) {
        $khanhPopoverMenu.removeClass('active');
      };

      // $khanhPopoverMenu.each(function () {
      //   let $popoverMenuItem = $(this);
        
      //   if(!$popoverMenuItem.is(e.target) ) {
      //     //$popoverMenuItem.toggleClass('active');
      //   }
      // });    
  });
});