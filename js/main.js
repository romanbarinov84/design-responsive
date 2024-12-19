

$(function () {

  $(".header__btn").on("click" , function() {
 $(".rightSide-menu").removeClass("rightSide-menu--close");
  });
  $(".rightSide-menu__close").on("click" , function() {
    $(".rightSide-menu").addClass("rightSide-menu--close");
     });

     $(".header__btn-menu  ").on("click" , function() {
      $(".menu").toggleClass("menu--open");
       });
     
     if($(window).width() < 651){
      $(".work-pass__item--Measurements").appendTo($(".work-pass__item-box"));
     }


      

$(".top__slider").slick( {
  dots:true,
  arrows: false,
  fade:true,
  autoplay:true,
  autoplaySpeed: 2000,
  speed: 1000,  
  infinite: true,
});

$(".contact-slider").slick({
  slidesToShow: 10,  // Начальное количество картинок
  slidesToScroll: 10,  // Сколько картинок прокручивается за раз
  dots: true,  // Показывать точки для навигации
  arrows: false,  // Отключаем стрелки
  responsive: [
    {
      breakpoint: 1200,  // Для экранов шириной меньше 1700px
      settings: {
        slidesToShow: 8,  // Показывать 8 картинок
        slidesToScroll: 8,
      }
    },
    {
      breakpoint: 800,  // Для экранов шириной меньше 1500px
      settings: {
        slidesToShow: 6,  // Показывать 6 картинок
        slidesToScroll: 6,
      }
    },
    {
      breakpoint: 600,  // Для экранов шириной меньше 1200px
      settings: {
        slidesToShow: 4,  // Показывать 4 картинки
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 500,  // Для экранов шириной меньше 768px (например, планшеты)
      settings: {
        slidesToShow: 3,  // Показывать 3 картинки
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 400,  // Для экранов шириной меньше 480px (мобильные устройства)
      settings: {
        slidesToShow: 1,  // Показывать 1 картинку
        slidesToScroll: 1,
      }
    }
  ]
});



$(".article__slider-box").slick({
  prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft "><img src="images/arrowleft.svg" alt="img"></button>',
  nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"> <img src="images/arrowright.svg" alt="img"></button>'
});





const mixer = mixitup(".gallery__inner", {
  load:{
    filter:".Living"
  },


});

})

