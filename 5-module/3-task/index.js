function initCarousel() {
  let carouselWrapper;
  let carouselInner;
  let carouselArrowRight;
  let carouselArrowLeft;
  let slides;
  let currentSlideId = 0;

  function clickEventHandler(event) {
    switch (event.currentTarget) {
    case carouselArrowLeft:
      slideBy(-1);
      break;
    case carouselArrowRight:
      slideBy(1);
      break;
    default:
      console.error('Unknown element clicked');
    }
  }

  function slideBy(slideStep) {
    let nextSlideId = currentSlideId + slideStep;

    currentSlideId = Math.max(nextSlideId, 0);
    currentSlideId = Math.min(currentSlideId, slides.length - 1);

    carouselArrowLeft.style.display = currentSlideId <= 0 ? 'none' : '';
    console.log(carouselArrowLeft.style.display);
    carouselArrowRight.style.display = currentSlideId >= slides.length - 1 ? 'none' : '';

    carouselInner.style.transform = `translateX(${-currentSlideId * carouselInner.offsetWidth}px)`;
  }

  carouselWrapper = document;

  carouselInner = carouselWrapper.querySelector('.carousel__inner');
  slides = carouselWrapper.querySelectorAll('.carousel__slide');

  carouselArrowRight = carouselWrapper.querySelector('.carousel__arrow_right');
  carouselArrowLeft = carouselWrapper.querySelector('.carousel__arrow_left');

  carouselArrowRight.addEventListener('click', clickEventHandler);
  carouselArrowLeft.addEventListener('click', clickEventHandler);
  slideBy(0);
}
