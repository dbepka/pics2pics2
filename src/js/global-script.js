
jQuery( document ).ready(function($) {

  $('.gallery__carousel').owlCarousel({
    loop: true,
    autoWidth: true,
    nav: true,
    items: 2
  });

  $('#show-gallery-hidden-msg').on('click', function(e){
    e.preventDefault();
    $('#gallery-hidden-msg').slideToggle();
  });

  $('.videos__item:has(video)')
    .on('mouseenter', function(){
      $(this).find('video').get(0).play();
    })
    .on('mouseleave', function(){
      $(this).find('video').get(0).pause();
    });

  // Карусель с отзывами
  var carouselReviews = $('#carousel-reviews');
  $(carouselReviews).owlCarousel({
    items: 1,
    stagePadding: 110,
    nav: true,
    mouseDrag: false,
    touchDrag: false,
    smartSpeed: 500,
    onTranslate: changeBegin
  });

  // Добавим предыдущему и следующему слайдам классы
  $('#carousel-reviews .active').prev().addClass('prev');
  $('#carousel-reviews .active').next().addClass('next');

  // По факту смены слайда перемещаем классы для предыдущего и следующего
  function changeBegin(event) {
    $('#carousel-reviews .next').removeClass('next');
    $('#carousel-reviews .prev').removeClass('prev');
    $('#carousel-reviews .owl-item').eq(event.item.index + 1).addClass('next');
    $('#carousel-reviews .owl-item').eq(event.item.index - 1).addClass('prev');
  }

  // Следим за кликами на аватарах непоказанных слайдов, меняем слайды
  $(document).on('click', '.owl-item.next .reviews__item-avatar', function(){
    carouselReviews.trigger('next.owl.carousel');
  });
  $(document).on('click', '.owl-item.prev .reviews__item-avatar', function(){
    carouselReviews.trigger('prev.owl.carousel');
  });

  $('#shown-add-reviews').on('click', function(e){
    e.preventDefault();
    $('#add-reviews').addClass('add-reviews--shown');
  });
  $('.add-reviews__close').on('click', function(){
    $('#add-reviews').removeClass('add-reviews--shown');
  });

});
