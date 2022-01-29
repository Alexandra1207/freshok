
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

  // Не получается сделать так, чтобы меню каталога закрывалось при клике вне него. Заменить toggleClass на addClass и removeClass не получилось, не работает. Закоментировала тот код, который по идее должен работать, а он не работает ((

  $('.header__catalog-btn, .catalog__link').on('click', function () {
    $('.catalog, .header__catalog-btn').toggleClass('catalog--active');
  });

  //   $('.header__catalog-btn').on ('click', function() {
  //   $('.catalog').addClass('catalog--active');
  // });

  // $('.header__catalog-btn').on('click', function () {
  //   $('.catalog, .catalog__link').removeClass('catalog--active');
  // });


  // let btnCatalog = $('.header__catalog-btn');
  // let catalog = $('.catalog');

  // $(document).on(click, function (e) {
  //   if (!btnCatalog.is(e.target) && btnCatalog.has(e.target).length === 0 &&
  //       !catalog.is(e.target) && catalog.has(e.target).length === 0) {
  //     catalog.removeClass('catalog--active'); 
  //   }
  // });


  $('.user-nav__link').on('click', function () {
    $('.cart').addClass('cart--active');
  });

  $('.cart__btn-close').on('click', function () {
    $('.cart').removeClass('cart--active');
  });


  // липкий хэдер .Не смогла придумать нормального решения для замещения места под липкий хэдер.Сделала через border - bottom у header__top.Тупое решение, но я не знаю, что еще придумать


  let header = $('.header__content');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('header__content--fixed');
    } else {
      header.removeClass('header__content--fixed');
    }
  });

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


