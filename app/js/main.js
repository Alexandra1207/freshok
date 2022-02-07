
$(function () {

  $('.product__num').styler();

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


  $('.header__catalog-btn, .catalog__link').on('click', function () {
    $('.catalog, .header__catalog-btn').toggleClass('catalog--active');
  });

  let btnCatalog = $('.header__catalog-btn');
  let catalog = $('.catalog');

  $(document).on('click', function (e) {
    if (!btnCatalog.is(e.target) && btnCatalog.has(e.target).length === 0 &&
        !catalog.is(e.target) && catalog.has(e.target).length === 0) {
      catalog.removeClass('catalog--active'); 
      btnCatalog.removeClass('catalog--active');       
    }
  });


  $('.user-nav__item-cart').on('click', function () {
    $('.cart').addClass('cart--active');
  });

  $('.cart__btn-close').on('click', function () {
    $('.cart').removeClass('cart--active');
  });

  let userNav = $('.user-nav__item-cart');
  let cart = $('.cart');

  $(document).on('click', function (e) {
    if (!userNav.is(e.target) && userNav.has(e.target).length === 0 &&
      !cart.is(e.target) && cart.has(e.target).length === 0) {
      cart.removeClass('cart--active');
    }
  });

 
  let header = $('.header__content');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('header__content--fixed');
    } else {
      header.removeClass('header__content--fixed');
    }
  });

});

$('.header__search-min').on('click', function () {
  $('.header__search-adaptive').toggleClass('header__search-adaptive--active');
});



const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 140,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesPerGroup: 6
});




const overflowCart = document.querySelectorAll('.overflow-cart');

overflowCart.forEach(element => {
  if (element.textContent.length > 40) {
    element.textContent = element.textContent.substring(0, 40) + '...';
  }
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


