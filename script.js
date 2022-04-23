'use strict';

document.querySelector('.nav__links').addEventListener
  ('click', function (e) {
    e.preventDefault(); //prevents the anchor tags in this case.


    //Matching Strategy
    if (e.target.classList.contains('nav__link')) {

      //getting the href attribute
      const id = e.target.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });

// DESTINATIONS
const sliderDestination = function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide3');
  const linkContainer = document.querySelector('.btn-links');

  slider.style.overflow = 'hidden';

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => s.style.transform =
        `translateX(${150 * (i - slide)}%)`);
  }
  goToSlide(0);

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    // curSlide++;
    goToSlide(curSlide);
    // activateDot(curSlide);
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1
    }
    else {
      curSlide--;
    }
    goToSlide(curSlide);
    // activateDot(curSlide)
  }

  const init = function () {
    goToSlide(0);
    // createDots(0);
    // activateDot(0); //makes the dot active at position 0
  }
  init();


  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  })


  linkContainer.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('btn-link')) {
      // console.log('LINKER');

      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);

    };
  });
};
sliderDestination();




//SLIDER
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  //Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend',
        `<button class = "dots__dot" data-slide="${i}"></
     button>`
      );
    });
  };

  //Activate dot
  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove
        ('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]
  `).classList.add('dots__dot--active');

  };


  const goToSlide = function (slide) {
    slides.forEach((s, i) => (s.style.transform =
      `translateX(${100 * (i - slide)}%)`));
  }


  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    // curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1
    }
    else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide)
  }

  const init = function () {
    goToSlide(0);
    createDots(0);
    activateDot(0); //makes the dot active at position 0
  }
  init();

  //Next slide -- Event handlers
  // btnRight.addEventListener('click', nextSlide);
  // btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  })


  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // console.log('dots1')
      // const slide = e.target.dataset.slide;
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide)
    }
  });
};
slider();






//SLIDER
const slider2 = function () {
  const slides = document.querySelectorAll('.slide2');
  // console.log(slides);
  const dotContainer = document.querySelector('.dots2');
  // console.log(dotContainer);

  let curSlide = 0;
  const maxSlide = slides.length;

  //Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = "dots2__dot" data-slide="${i}"></
     button>`
      );
    });
  };

  //Activate dot
  const activateDot = function (slide) {
    document.querySelectorAll('.dots2__dot')
      .forEach(dot => dot.classList.remove
        ('dots2__dot--active'));

    document.querySelector(`.dots2__dot[data-slide="${slide}"]
  `)
      .classList.add('dots2__dot--active');
  };


  const goToSlide = function (slide) {
    slides.forEach((s, i) => (s.style.transform =
      `translateY(${200 * (i - slide)}%)`));
  }


  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    // curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1
    }
    else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide)
  }

  const init = function () {
    goToSlide(0);
    createDots(0);
    activateDot(0); //makes the dot active at position 0
  }
  init();


  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') prevSlide();
    e.key === 'ArrowDown' && nextSlide();
  })


  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots2__dot')) {
      console.log('dots1')
      // const slide = e.target.dataset.slide-2;
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide)
    }
  });
};
slider2();
