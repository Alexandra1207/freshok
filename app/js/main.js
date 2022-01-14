

$(function () {

  $('.top-slider__list').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg class="arrow-left"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="arrow-right"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    autoplay: true,
    autoplaySpeed: 2000,
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
    autoplay: true,
    autoplaySpeed: 2000
  })


});


const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 140,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesPerGroup: 6 
});


const overflowCard = document.querySelectorAll('.overflow-card');

overflowCard.forEach(element => {
  if (element.textContent.length > 106) {
    element.textContent = element.textContent.substring(0, 106) + '...';
  }
});


const overflowCardMini = document.querySelectorAll('.overflow-cardmini');

overflowCardMini.forEach(element => {
  if (element.textContent.length > 49) {
    element.textContent = element.textContent.substring(0, 49) + '...';
  }
});


const overflow = document.querySelectorAll('.overflow');

overflow.forEach(element => {
  if (element.textContent.length > 145) {
    element.textContent = element.textContent.substring(0, 145) + '...';
  }
});


