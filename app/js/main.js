
$(function () {

  // Выплывание корзины

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




  // Выплывающее меню фильтров на адаптиве. Не получилось договриться с методом toggle(). Мне кажется, с затемнением это не работает. Пришлось вернуться к add/removeClass. Если, вдруг, знаешь, как это делается, подскажи. 
  // и еще не получается сделать плавность затемнения. Пробовала разные варианты trasition, не помогает 

  $('.catalog-content__filter-btn-adaptive').on('click', function () {
    $('.filters').addClass('filters--active');
    $('body').addClass('lock');

  });

  $('.filters__close-btn').on('click', function () {
    $('.filters').removeClass('filters--active');
    $('body').removeClass('lock');
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



  let filterBtn = $('.catalog-content__filter-btn-adaptive');
  let filters = $('.filters');

  $(document).on('click', function (e) {
    if (!filterBtn.is(e.target) && filterBtn.has(e.target).length === 0 &&
      !filters.is(e.target) && filters.has(e.target).length === 0) {
      filters.removeClass('filters--active');
      $('body').removeClass('lock');
    }
  });


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


  // ionRangeSlider
  

  let $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 10000000,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });


  // $('.filter-price__input').ionRangeSlider({
  //   type: 'double',
  //   onStart: function (data) {
  //     $('.filter-price__from').text(data.from);
  //     $('.filter-price__to').text(data.to);
  //   },
  //   onChange: function (data) {
  //     $('.filter-price__from').text(data.from);
  //     $('.filter-price__to').text(data.to);
  //   },
  // });



  $('.product__num').styler();
  $('.catalog-content__filter-sort').styler();


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

  // var containerEl1 = document.querySelector('[data-ref="container-1"]');
  // var containerEl2 = document.querySelector('[data-ref="container-2"]');

  // var config = {
  //   controls: {
  //     scope: 'local'
  //   }
  // };

  // var mixer1 = mixitup(containerEl1, config);
  // var mixer2 = mixitup(containerEl2, config);


  

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
