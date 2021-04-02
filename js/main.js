const specialSlider = new Swiper('.special-slider', {
    loop: true,
    speed: 1000,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,

    navigation: {
      nextEl: '.special-slider__next',
      prevEl: '.special-slider__prev',
    },
    watchOverflow: true,
    grabCursor: true,

    on: {

      init: makeSlidesTransparent,
      slideChangeTransitionStart: makeSlidesTransparent,
    }

  });

  function makeSlidesTransparent() {

    //Hide old slides
    const oldSlides = d.getAll('.special-slider__item.js-visible');
    for (let i = 0; i < oldSlides.length; i++) {
      oldSlides[i].classList.remove('js-visible')
    }
