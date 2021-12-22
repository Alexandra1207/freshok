$(function () {
  
  $('.top-slider__list').slick ({
    prevArrow: '<button type="button" class="slick-prev"><svg class="arrow-left"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="arrow-right"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    // autoplay: true,
    // autoplaySpeed: 2000,
    // infinite: false
  });

  var mixer = mixitup('.top-products__content');
})