$(document).ready(function () {
  "use strict";
  // handle selector block click
  $(".selector_block").click(function () {
    $(".selector_block.active").removeClass("active");
    $(this).addClass("active");
    const tab = $(this).data("tab");
    $(".product_atc-refills").addClass("hidden");
    $('.product_atc-refills[data-id="' + tab + '"]').removeClass("hidden");
  });

  // component content block click
  $(".content_block").click(function () {
    $(this).toggleClass("active");
    $(this).children(".content_text").slideToggle();
  });

  $(".formula_item").click(function () {
    $(this).find(".formula_text").slideToggle();
  });

  $(".faq_box").click(function () {
    $(this).toggleClass("active");
    $(this).children(".faq_content").slideToggle();
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
