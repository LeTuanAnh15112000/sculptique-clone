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

  var stories_slider = new Swiper("#stories_slider", {
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
      renderBullet: function (index, className) {
        // Show only 7 bullets: limit to items 0-6
        if (index >= 7) return '';
        return '<span class="' + className + '" data-slide="' + index + '"></span>';
      }
    },
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function() {
        // Keep track of which slide is active for pagination styling
        document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet, i) => {
          if (i === this.realIndex) {
            bullet.classList.add('swiper-pagination-bullet-active');
          } else {
            bullet.classList.remove('swiper-pagination-bullet-active');
          }
        });
      }
    }
  });

  var currentActiveVideo = null;

  $(".stories_video").click(function () {
    var $this = $(this);
    var video = $this.find("video")[0];
    
    if (!video) return;
    
    // Check if current video is playing
    var isPlaying = !video.paused && video.currentTime > 0;
    
    if (isPlaying) {
      // Click on playing video → pause it
      video.pause();
      $this.find('.icon_play').show();
      $this.removeClass("active");
      currentActiveVideo = null;
    } else {
      // If there's a previously active video, pause and reset ONLY that one
      if (currentActiveVideo && currentActiveVideo !== video) {
        currentActiveVideo.pause();
        currentActiveVideo.currentTime = 0;
        $(currentActiveVideo).closest('.stories_video').find('.icon_play').show();
        $(currentActiveVideo).closest('.stories_video').removeClass("active");
      }
      
      // Reset current video and play
      video.currentTime = 0;
      video.play();
      $this.find('.icon_play').hide();
      $this.addClass("active");
      currentActiveVideo = video;
    }
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
