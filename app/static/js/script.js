$(window).on("load", function () {
    if ($(".preloader").length) {
      $(".preloader").fadeOut();
    }
    thmSwiperInit();
    thmOwlInit();
    projectMasonaryLayout();
    priceFilter()


    if ($(".curved-circle--item").length) {
      $(".curved-circle--item").circleType();
    }

    //Jquery Spinner / Quantity Spinner
    if ($('.quantity-spinner').length) {
      $("input.quantity-spinner").TouchSpin({
        verticalbuttons: true
      });
    }



    if ($(".post-filter").length) {
      var postFilterList = $(".post-filter li");
      // for first init
      $(".filter-layout").isotope({
        filter: ".filter-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
      // on click filter links
      postFilterList.on("click", function () {
        var Self = $(this);
        var selector = Self.attr("data-filter");
        postFilterList.removeClass("active");
        Self.addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    }

    if ($(".post-filter.has-dynamic-filter-counter").length) {
      // var allItem = $('.single-filter-item').length;

      var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
        "li"
      );

      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this).append("<sup>[" + count + "]</sup>");
      });
    }

    //Testimonials Two
    if ($(".listing-details__gallery .bxslider").length) {
      $(".listing-details__gallery .bxslider").bxSlider({
        nextSelector: ".listing-details__gallery #slider-next",
        prevSelector: ".listing-details__gallery #slider-prev",
        nextText: '<i class="icon-right-arrow1"></i>',
        prevText: '<i class="icon-right-arrow1 icon-prev"></i>',
        mode: "horizontal",
        auto: "true",
        speed: "1000",
        pagerCustom: ".listing-details__gallery .slider-pager .listing-details__thumb-box"
      });
    }



    if ($("#testimonials-two__thumb").length) {
      let testimonialsThumb = new Swiper("#testimonials-two__thumb", {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1400,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        autoplay: {
          delay: 5000
        }
      });

      let testimonialsCarousel = new Swiper("#testimonials-two__carousel", {
        observer: true,
        observeParents: true,
        speed: 1400,
        mousewheel: false,
        slidesPerView: 1,
        autoplay: {
          delay: 5000
        },
        thumbs: {
          swiper: testimonialsThumb
        },
        pagination: {
          el: '#testimonials-one__carousel-pagination',
          type: 'bullets',
          clickable: true
        },
      });
    }











  });