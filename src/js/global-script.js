
jQuery( document ).ready(function($) {

  $('.gallery__carousel').owlCarousel({
    loop: true,
    autoWidth: true,
    nav: true,
    items: 2
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

  // $('.show-offer-form').on('click', function(e){
  //   e.preventDefault();
  //   $('#offer-form').css('display', 'flex');
  // });
  $('.popup_link').on('click', function(e){
    e.preventDefault();
    $($(this).attr('href')).css('display', 'flex');
  });
  $('.offer-form__close').on('click', function(){
    $('#offer-form').css('display', 'none');
  });

  //tooltip-form

  function stickyForm() {
    var sofa = $('#sofa'),
      sizes = $('#supsofa-sizes'),
      sofa_offset_bottom;
      if ($(window).width() > 1280) {
        sofa_offset_bottom = parseInt(sofa.height() - parseFloat(sizes.css('top')) - sizes.height() - 3);
      } else {
        sofa_offset_bottom = parseInt(sofa.height() - parseFloat(sizes.css('top')) - sizes.height() - 4);
      }
      
    $('.style-form').css('height', sofa_offset_bottom);
  }

  $(window).resize(function() {
    if ($('.style-form').is(':visible'))  {
      stickyForm();
    }
  });

  //////////

  var form = $('#field-file__input');
    form.change(function(){
        // if ($(window).width() >= 1280) {
          stickyForm();
            $('.style-form').animate({bottom: 0}, 500);
        // } else {
            // $('.style-form').animate({left: 0}, 500);
            $('#supsofa-sizes').css('display', 'flex');
        // }
    });

  //tooltip
  var tooltip = $('#tooltip');
  $('.tooltip-wrap').hover(function() {
    tooltip.animate({left: 0}, {queue: false, duration: 500});
  }, function() {
    tooltip.animate({left: -500}, {queue: false, duration: 500});
  });
});
