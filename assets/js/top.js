$(document).ready(function () {
  "use strict";
  // Popup handling
  $(".js-popup").click(function(e) {
    e.preventDefault();
    $(".js-popup-section").removeClass("hidden");
  });

  $(".js-close-popup").click(function() {
    $(".js-popup-section").addClass("hidden");
  });

  $(".js-popup-section").click(function(e) {
    if ($(e.target).hasClass("js-popup-section")) {
      $(".js-popup-section").addClass("hidden");
    }
  });

  // Selector click
  $(".js-selector").click(function () {
    $(".js-selector.active").removeClass("active");
    $(this).addClass("active");
    const tab = $(this).data("tab");
    $(".js-refills").addClass("hidden");
    $('.js-refills[data-id="' + tab + '"]').removeClass("hidden");
  });

  // Content block toggle
  $(".js-content-block").click(function () {
    $(this).toggleClass("active");
    $(this).children(".js-content-text").slideToggle();
  });

  // Formula item toggle
  $(".js-formula-item").click(function () {
    $(this).find(".js-formula-text").slideToggle();
  });

  // FAQ item toggle
  $(".js-faq-item").click(function () {
    $(this).toggleClass("active");
    $(this).children(".js-faq-answer").slideToggle();
  });


  // Main slider
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><img src="./assets/images/icon-prev.png" alt="Prev"></button>',
    nextArrow: '<button class="slick-next"><img src="./assets/images/icon-next.png" alt="Next"></button>',
    infinite: true,
    asNavFor: '.slider-nav',
    autoplay: false,
    speed: 500,
    cssEase: 'ease-in-out'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 4
        }
      },
      
    ]
  });


  // Stories slider
  $('.js-stories-slider-main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    cssEase: 'ease-in-out',
    prevArrow: '.js-stories-prev',
    nextArrow: '.js-stories-next',
    dots: true,
    appendDots: '.js-stories-dots',
    customPaging: function(slider, i) {
      return '<span class="js-dot-bullet block h-[4px] flex-1 bg-[#00000026] cursor-pointer transition-colors duration-200" data-slide="' + i + '"></span>';
    },
    responsive: [
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          infinite: false,
        }
      },
    ]
  });

  // Stories video handling
  var currentActiveVideo = null;
  $(".js-stories-video").click(function () {
    var $this = $(this);
    var video = $this.find("video")[0];
    if (!video) return;
    // Check if current video is playing
    var isPlaying = !video.paused && video.currentTime > 0;
    if (isPlaying) {
      // Click on playing video → pause it
      video.pause();
      $this.find('.js-icon-play').show();
      $this.removeClass("active");
      currentActiveVideo = null;
    } else {
      // If there's a previously active video, pause and reset ONLY that one
      if (currentActiveVideo && currentActiveVideo !== video) {
        currentActiveVideo.pause();
        currentActiveVideo.currentTime = 0;
        $(currentActiveVideo).closest('.js-stories-video').find('.js-icon-play').show();
        $(currentActiveVideo).closest('.js-stories-video').removeClass("active");
      }
      // Reset current video and play
      video.currentTime = 0;
      video.play();
      $this.find('.js-icon-play').hide();
      $this.addClass("active");
      currentActiveVideo = video;
    }
  });
});
