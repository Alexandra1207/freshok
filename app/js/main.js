
$(function () {

  // Выплывающее меню фильтров на адаптиве
  $('.catalog-content__filter-btn-adaptive').on('click', function() {
    $('.filters').slideToggle();
  })
  $('.close-btn').on('click', function () {
    $('.filters').slideToggle();
  })

  // Каталог, переключение списков

  $('.catalog-content__filter-btn').on('click', function () {
    $('.catalog-content__filter-btn').removeClass('catalog-content__filter-btn--active');
    $(this).addClass('catalog-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.catalog-content__items').addClass('catalog-content__items--list');
  });
  $('.button-grid').on('click', function () {
    $('.catalog-content__items').removeClass('catalog-content__items--list');
  });


  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.product__num').styler();


  // section top-slider

  $('.top-slider__list').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="arrow"><use xlink:href="images/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="arrow"><use xlink:href="images/sprite.svg#arrow-right"></use></svg></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
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


  $('.menu__btn, .header__adaptive-link, .header__adaptive-catalog-btn, .header__address').on('click', function () {
    $('.menu__btn, .header__adaptive').toggleClass('menu__btn--active');
  });

  let btnMenu = $('.menu__btn');
  let adaptiveMenu = $('.header__adaptive');

  $(document).on('click', function (e) {
    if (!btnMenu.is(e.target) && btnMenu.has(e.target).length === 0 &&
      !adaptiveMenu.is(e.target) && adaptiveMenu.has(e.target).length === 0) {
      btnMenu.removeClass('menu__btn--active');
      adaptiveMenu.removeClass('menu__btn--active');
    }
  });


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
    $('.cart').toggleClass('cart--active');
    $('body').addClass('lock');

  });

  $('.cart__btn-close').on('click', function () {
    $('.cart').removeClass('cart--active');
    $('body').removeClass('lock');
  });

  let userNav = $('.user-nav__item-cart');
  let cart = $('.cart');

  $(document).on('click', function (e) {
    if (!userNav.is(e.target) && userNav.has(e.target).length === 0 &&
      !cart.is(e.target) && cart.has(e.target).length === 0) {
      cart.removeClass('cart--active');
      $('body').removeClass('lock');
    }
  });

  // липкий хэдер

  let header = $('.header__content');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('header__content--fixed');
    } else {
      header.removeClass('header__content--fixed');
    }
  });

  // панель поиска

  $('.header__search-min').on('click', function () {
    $('.header__search-adaptive').toggleClass('header__search-adaptive--active');
  });

  let minSearch = $('.header__search-min');
  let adaptiveSearch = $('.header__search-adaptive');

  $(document).on('click', function (e) {
    if (!adaptiveSearch.is(e.target) && adaptiveSearch.has(e.target).length === 0 &&
      !minSearch.is(e.target) && minSearch.has(e.target).length === 0) {
      adaptiveSearch.removeClass('header__search-adaptive--active');
    }
  });


});



const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: true,
  spaceBetween: 93,
  autoplaySpeed: 3000,
  slidesPerGroup: 6,
  breakpoints: {
    310: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    560: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 140,
    }
  }

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


$(function () {
  if (($(window).width() < 1600) && ($(window).width() > 768)) {
    overflow.forEach(element => {
      if (element.textContent.length > 50) {
        element.textContent = element.textContent.substring(0, 50) + '...';
      }
    });
  } else {
    overflow.forEach(element => {
      if (element.textContent.length > 145) {
        element.textContent = element.textContent.substring(0, 145) + '...';
      }
    });
  }

});