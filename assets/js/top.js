$(document).ready(function () {
  "use strict";



  $(".content_heading").click(function () {
    $(this).parent().toggleClass("active");
    $(this).parent().children(".content_text").slideToggle();
    $(this).parent().children(".content_text").toggleClass("active");
  });

  // tab
  // $(".tabs_item").each(function (index, tab) {
  //   tab.onclick = function () {
  //     $(".tabs_item.active").removeClass("active");
  //     $(".tabs_pane.active").removeClass("active");
  //     this.classList.add("active");
  //     const pane = $(".tabs_pane")[index];
  //     pane.classList.add("active");
  //   };
  // });

});
