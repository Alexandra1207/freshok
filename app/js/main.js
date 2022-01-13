

$(function () {

  $('.top-slider__list').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg class="arrow-left"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="arrow-right"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: false
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);


  $('.partners__list').slick ({
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    // autoplay: true,
    // autoplaySpeed: 2000
  })


});


const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 140,
  // autoplay: true,
  // autoplaySpeed: 3000,
  // slidesPerGroup: 6 
});



let overflow = document.querySelectorAll('.overflow')[0].innerHTML;
console.log(overflow);

if (overflow.length > 105) {
  overflow = overflow.substring(0, 105) + '...';
}
console.log(overflow);

document.querySelectorAll('.overflow')[0].innerHTML = overflow;


