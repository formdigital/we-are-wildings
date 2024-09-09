"use strict";
(self["webpackChunkmix_webpack_starter"] = self["webpackChunkmix_webpack_starter"] || []).push([["/js/app"],{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unseenco_taxi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @unseenco/taxi */ "./node_modules/@unseenco/taxi/src/taxi.js");
/* harmony import */ var _modules_renderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderers */ "./src/js/modules/renderers.js");
/* harmony import */ var _modules_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/transition */ "./src/js/modules/transition.js");




// Page transitions
var taxi = new _unseenco_taxi__WEBPACK_IMPORTED_MODULE_0__.Core({
  renderers: {
    "default": _modules_renderers__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  transitions: {
    "default": _modules_transition__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordions: () => (/* binding */ Accordions)
/* harmony export */ });
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_0__);

function Accordions() {
  var accordions = document.querySelectorAll('.accordionContainer');
  accordions.forEach(function (accordion) {
    new (accordion_js__WEBPACK_IMPORTED_MODULE_0___default())(accordion);
  });
}

/***/ }),

/***/ "./src/js/modules/amenitiesList.js":
/*!*****************************************!*\
  !*** ./src/js/modules/amenitiesList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmenitiesList: () => (/* binding */ AmenitiesList)
/* harmony export */ });
function AmenitiesList() {
  var amenitiesLists = document.querySelectorAll('.amenitiesList');
  amenitiesLists.forEach(function (list) {
    var toggle = list.querySelector('.amenitiesListBtn');
    var toggleLabel = toggle.querySelector('.label');
    var collapse = list.querySelector('.amenitiesListCollapse');
    var container = list.querySelector('.amenitiesListContainer');
    var containerHeight = container.offsetHeight;
    var isOpen;
    toggle.addEventListener('click', function () {
      containerHeight = container.offsetHeight;
      isOpen = !isOpen;
      if (isOpen) {
        toggleLabel.innerHTML = 'View less';
        list.classList.add('is-open');
        collapse.style.height = "".concat(containerHeight, "px");
      } else {
        toggleLabel.innerHTML = 'View more';
        list.classList.remove('is-open');
        collapse.style.height = '300px';
      }
    });
  });
}

/***/ }),

/***/ "./src/js/modules/animation.js":
/*!*************************************!*\
  !*** ./src/js/modules/animation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animations: () => (/* binding */ Animations),
/* harmony export */   FadeIns: () => (/* binding */ FadeIns)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


function Animations() {
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);

  // Hero background parallax
  if (document.querySelector('.heroBg')) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.heroBg', {
      yPercent: 20,
      opacity: 0.2,
      ease: 'none',
      scrollTrigger: {
        trigger: '.heroBg',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // Parallax images
  var parallaxContainers = document.querySelectorAll('.parallaxContainer');
  parallaxContainers.forEach(function (container) {
    var media = container.querySelector('img');
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(media, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // Footer logo animation
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].from('.siteFooterLogo .type', {
    rotate: -135,
    transformOrigin: '50% 50%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.siteFooter',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true
    }
  });

  // Fade in reveals on scroll
  if (document.querySelector('.fadeInReveal')) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set('.fadeInReveal', {
      autoAlpha: 0,
      y: 30
    });
  }

  // About page history section
  if (document.querySelector('.historyContainer')) {
    var background = document.querySelector('.historySticky .background');
    var backgroundImage = background.querySelector('img');
    var left = document.querySelector('.historySticky .left');
    var right = document.querySelector('.historySticky .right');
    var content = document.querySelector('.historyContent');
    var mm = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].matchMedia();
    mm.add("(max-width: 959px)", function () {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(background, {
        clipPath: 'inset(20% 5% round 4px)'
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(content, {
        opacity: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(background, {
        clipPath: 'inset(0% 0% round 4px)',
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(backgroundImage, {
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(content, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: '50% 70%',
          end: '50% 60%',
          scrub: true
        }
      });
    });
    mm.add("(min-width: 960px) and (max-width: 1599px)", function () {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(background, {
        clipPath: 'inset(15% 25% round 4px)'
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(content, {
        opacity: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(background, {
        clipPath: 'inset(0% 0% round 4px)',
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(backgroundImage, {
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(left, {
        xPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(right, {
        xPercent: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(content, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: '50% 70%',
          end: '50% 60%',
          scrub: true
        }
      });
    });
    mm.add("(min-width: 1600px)", function () {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(background, {
        clipPath: 'inset(10% 30% round 4px)'
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set(content, {
        opacity: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(background, {
        clipPath: 'inset(0% 0% round 4px)',
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(backgroundImage, {
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(left, {
        xPercent: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(right, {
        xPercent: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: 'top bottom',
          end: 'top top',
          scrub: true
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(content, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: content,
          start: '50% 70%',
          end: '50% 60%',
          scrub: true
        }
      });
    });
  }
}
function FadeIns() {
  if (document.querySelector('.fadeInReveal')) {
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.batch(".fadeInReveal", {
      batchMax: 10,
      onEnter: function onEnter(elements) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(elements, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          clearProps: "all"
        });
      },
      start: function start(batch) {
        if (batch.trigger.getBoundingClientRect().top + window.scrollY > window.innerHeight) {
          return "top bottom-=100px";
        } else {
          return "top bottom";
        }
      },
      once: true
    });
  }
}

/***/ }),

/***/ "./src/js/modules/carousel.js":
/*!************************************!*\
  !*** ./src/js/modules/carousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousels: () => (/* binding */ Carousels)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mixitup */ "./node_modules/mixitup/dist/mixitup.js");
/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mixitup__WEBPACK_IMPORTED_MODULE_2__);



function Carousels() {
  var articleGalleries = document.querySelectorAll('.articleGallery');
  var articleGalleriesFull = document.querySelectorAll('.articleGalleryFull');
  var articleReviews = document.querySelectorAll('.articleReviews');
  var accommodationCarousels = document.querySelectorAll('.accommodationCarousel');
  var newsCarousels = document.querySelectorAll('.newsCarousel');
  var testimonialsCarousels = document.querySelectorAll('.testimonialsCarousel');
  articleGalleries.forEach(function (carousel) {
    var prevBtn = carousel.querySelector('.prev');
    var nextBtn = carousel.querySelector('.next');
    var pagination = carousel.querySelector('.articleGalleryPagination');
    var articleGallerySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](carousel, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      slidesPerView: 1,
      autoHeight: true,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn
      },
      pagination: {
        el: pagination,
        clickable: true
      }
    });
  });
  articleGalleriesFull.forEach(function (carousel) {
    var prevBtn = carousel.querySelector('.prev');
    var nextBtn = carousel.querySelector('.next');
    var scrollbar = carousel.querySelector('.scrollbar');
    var articleGalleryFullSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](carousel, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Scrollbar],
      slidesPerView: 'auto',
      spaceBetween: 12,
      freeMode: true,
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn
      },
      scrollbar: {
        el: scrollbar,
        draggable: true
      },
      breakpoints: {
        600: {
          spaceBetween: 15
        },
        800: {
          spaceBetween: 18
        },
        1000: {
          spaceBetween: 21
        },
        1200: {
          spaceBetween: 24
        }
      }
    });
  });
  articleReviews.forEach(function (container) {
    var carousel = container.querySelector('.articleReviewsCarousel');
    var prevBtn = container.querySelector('.prev');
    var nextBtn = container.querySelector('.next');
    var pagination = container.querySelector('.articleReviewsPagination');
    var articleReviewsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](carousel, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      slidesPerView: 1,
      autoHeight: true,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn
      },
      pagination: {
        el: pagination,
        type: 'fraction'
      }
    });
  });
  accommodationCarousels.forEach(function (carousel) {
    var prevBtn = carousel.querySelector('.prev');
    var nextBtn = carousel.querySelector('.next');
    var scrollbar = carousel.querySelector('.scrollbar');
    var accommodationCarouselSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](carousel, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Scrollbar],
      slidesPerView: 1.1,
      spaceBetween: 16,
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn
      },
      scrollbar: {
        el: scrollbar,
        draggable: true
      },
      breakpoints: {
        600: {
          slidesPerView: 1.5,
          spaceBetween: 18
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1000: {
          slidesPerView: 2.5,
          spaceBetween: 22
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }
    });
  });
  newsCarousels.forEach(function (carousel) {
    var prevBtn = carousel.querySelector('.prev');
    var nextBtn = carousel.querySelector('.next');
    var scrollbar = carousel.querySelector('.scrollbar');
    var newsCarouselSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](carousel, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Scrollbar],
      slidesPerView: 1.1,
      spaceBetween: 16,
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn
      },
      scrollbar: {
        el: scrollbar,
        draggable: true
      },
      breakpoints: {
        600: {
          slidesPerView: 1.5,
          spaceBetween: 18
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1000: {
          slidesPerView: 2.5,
          spaceBetween: 22
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 24
        }
      }
    });

    // Carousel filtering
    var filter = carousel.querySelector('.mix-container');
    if (filter) {
      var mixer = mixitup__WEBPACK_IMPORTED_MODULE_2___default()(filter, {
        load: {
          filter: '.mix-category-news'
        },
        animation: {
          effects: 'fade translateX(200px) stagger(50ms)',
          duration: 400,
          reverseOut: true,
          nudge: false
        },
        callbacks: {
          onMixStart: function onMixStart() {
            newsCarouselSwiper.setProgress(0, 100);
          },
          onMixEnd: function onMixEnd() {
            newsCarouselSwiper.update();
          }
        }
      });
    }
  });
  testimonialsCarousels.forEach(function (carousel) {
    var prevBtn = carousel.querySelector('.prev');
    var nextBtn = carousel.querySelector('.next');
    var pagination = carousel.querySelector('.pagination');
    var testimonialsCarouselSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](carousel, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn
      },
      pagination: {
        el: pagination
      }
    });
  });
}

/***/ }),

/***/ "./src/js/modules/fancybox.js":
/*!************************************!*\
  !*** ./src/js/modules/fancybox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FancyboxModals: () => (/* binding */ FancyboxModals)
/* harmony export */ });
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");

function FancyboxModals() {
  _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"]
      }
    },
    Carousel: {
      transition: "slide"
    }
  });
}

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filters: () => (/* binding */ Filters)
/* harmony export */ });
/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mixitup */ "./node_modules/mixitup/dist/mixitup.js");
/* harmony import */ var mixitup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mixitup__WEBPACK_IMPORTED_MODULE_0__);

function Filters() {
  // Carousel filtering
  var newsFilter = document.querySelector('.newsListings.mix-container');
  if (newsFilter) {
    var mixer = mixitup__WEBPACK_IMPORTED_MODULE_0___default()(newsFilter, {
      animation: {
        effects: 'fade scale(0.8) stagger(50ms)',
        duration: 400
      }
    });
  }
}

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderHeight: () => (/* binding */ HeaderHeight),
/* harmony export */   HeaderHide: () => (/* binding */ HeaderHide)
/* harmony export */ });
function HeaderHeight() {
  var windowWidth = window.innerWidth;
  var headerHeight;
  var headerContainerHeight;
  function setHeight() {
    headerHeight = document.querySelector('.siteHeader').offsetHeight;
    headerContainerHeight = document.querySelector('.siteHeaderContainer').offsetHeight;
    document.body.style.setProperty('--header-height', "".concat(headerHeight, "px"));
    document.body.style.setProperty('--header-container-height', "".concat(headerContainerHeight, "px"));
  }
  setHeight();
  window.addEventListener('resize', function () {
    if (window.innerWidth !== windowWidth) {
      setHeight();
      windowWidth = window.innerWidth;
    }
  });
}
function HeaderHide() {
  // Show/hide header on scroll
  var header = document.querySelector(".siteHeader");
  var lastScroll = 0;
  var throttle = function throttle(func) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var lastTime = 0;
    return function () {
      var now = new Date();
      if (now - lastTime >= time) {
        func();
        time = now;
      }
    };
  };
  var validateHeader = function validateHeader() {
    var windowY = window.scrollY;
    var headerHeight = header.offsetHeight;
    if (windowY > headerHeight * 2) {
      document.body.classList.add("siteHeader__fixed");
      if (windowY > window.innerHeight / 2) {
        document.body.classList.add("siteHeader__can-animate");
        if (windowY < lastScroll) {
          document.body.classList.add("siteHeader__scroll-up");
        } else {
          document.body.classList.remove("siteHeader__scroll-up");
        }
      } else {
        document.body.classList.remove("siteHeader__scroll-up");
      }
    } else {
      document.body.classList.remove("siteHeader__fixed", "siteHeader__can-animate");
    }
    lastScroll = windowY;
  };
  document.addEventListener("scroll", throttle(validateHeader, 100));
}

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ Menu),
/* harmony export */   MenuClose: () => (/* binding */ MenuClose),
/* harmony export */   MenuOpen: () => (/* binding */ MenuOpen),
/* harmony export */   MenuReset: () => (/* binding */ MenuReset)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

function Menu() {
  var siteMenuToggles = document.querySelectorAll('.siteMenuToggle');
  MenuReset();
  siteMenuToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      if (document.body.classList.contains('siteMenuOpen')) {
        MenuClose();
      } else {
        MenuOpen();
      }
    });
  });

  // Update images on link hover
  var siteMenuLinks = document.querySelectorAll('.siteMenuNav a:not(.btn)');
  var siteMenuImages = document.querySelector('.siteMenuImages');
  siteMenuLinks.forEach(function (link) {
    var id = link.dataset.image;
    var image = siteMenuImages.querySelector("#".concat(id));
    var activeImage;
    if (link.classList.contains('active')) {
      image.classList.add('active');
    }
    link.addEventListener('mouseenter', function () {
      activeImage = siteMenuImages.querySelector('.active');
      if (!image.classList.contains('active')) {
        activeImage.classList.remove('active');
        image.classList.add('active');
      }
    });
  });
}
function MenuOpen() {
  var siteMenu = document.querySelector('.siteMenu');
  document.body.classList.add('siteMenuOpen');
  var menuOpenTimeline = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
    onStart: function onStart() {
      document.body.classList.add('siteMenuOpening');
    },
    onComplete: function onComplete() {
      document.body.classList.remove('siteMenuOpening');
    }
  });
  menuOpenTimeline.set(siteMenu, {
    delay: 0.3,
    autoAlpha: 1
  });
  menuOpenTimeline.to(siteMenu, {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    duration: 0.6,
    ease: 'power3.inOut'
  });
  menuOpenTimeline.to('.siteMenu__fadeIn', {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.1
  });
  console.log('open menu');
}
function MenuClose() {
  var siteMenu = document.querySelector('.siteMenu');
  var menuCloseTimeline = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
    onStart: function onStart() {
      document.body.classList.add('siteMenuClosing');
    },
    onComplete: function onComplete() {
      document.body.classList.remove('siteMenuClosing');
      document.body.classList.remove('siteMenuOpen');
    }
  });
  menuCloseTimeline.to('.siteMenu__fadeIn', {
    autoAlpha: 0,
    duration: 0.6,
    ease: 'power2.inOut'
  });
  menuCloseTimeline.to(siteMenu, {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    duration: 0.6,
    ease: 'power3.inOut'
  });
  menuCloseTimeline.set('.siteMenu__fadeIn', {
    y: 30
  });
  menuCloseTimeline.set(siteMenu, {
    autoAlpha: 0
  });
  console.log('close menu');
}
function MenuReset() {
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set('.siteMenu', {
    autoAlpha: 0,
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set('.siteMenu__fadeIn', {
    autoAlpha: 0,
    y: 30
  });
}

/***/ }),

/***/ "./src/js/modules/pageNav.js":
/*!***********************************!*\
  !*** ./src/js/modules/pageNav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageNavs: () => (/* binding */ PageNavs)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


function PageNavs() {
  var pageNav = document.querySelector('.pageNav');
  var pageNavLinks = document.querySelectorAll('.pageNavLink');
  var pageNavTargets = document.querySelectorAll('.pageNavTarget');
  var pageNavCarousels = document.querySelectorAll('.pageNavCarousel');
  var pageNavDropdown = document.querySelector('.pageNavDropdown');
  var dropdownBreakpoint = window.matchMedia("(min-width: 720px)");

  // Add active state to links
  window.onscroll = function () {
    var current;
    pageNavTargets.forEach(function (target) {
      var targetTopDistance = window.scrollY + target.getBoundingClientRect().top;
      var headerHeight = document.querySelector('.siteHeader').offsetHeight;
      if (pageNavDropdown && !dropdownBreakpoint.matches) {
        if (window.scrollY >= targetTopDistance - headerHeight - 60) {
          current = target.getAttribute('id');
        }
      } else {
        var pageNavHeight = document.querySelector('.pageNav').offsetHeight;
        if (window.scrollY >= targetTopDistance - headerHeight - pageNavHeight - 60) {
          current = target.getAttribute('id');
        }
      }
    });
    pageNavLinks.forEach(function (link) {
      var target = link.dataset.target;
      link.classList.remove('active');
      if (current == target) {
        link.classList.add('active');
      }
    });
  };

  // Scroll to link target
  pageNavLinks.forEach(function (link) {
    var target = document.querySelector("#".concat(link.dataset.target));
    link.addEventListener('click', function () {
      var headerHeight = document.querySelector('.siteHeader').offsetHeight;
      var pageScroll = window.scrollY;
      var targetTopDistance = window.scrollY + target.getBoundingClientRect().top;
      if (pageNavDropdown && !dropdownBreakpoint.matches) {
        if (pageScroll > targetTopDistance - 30) {
          window.scrollTo({
            top: targetTopDistance - headerHeight - 30,
            behavior: "smooth"
          });
        } else {
          window.scrollTo({
            top: targetTopDistance - 30,
            behavior: "smooth"
          });
        }
      } else {
        var pageNavHeight = document.querySelector('.pageNav').offsetHeight;
        if (pageScroll > targetTopDistance - pageNavHeight - 30) {
          window.scrollTo({
            top: targetTopDistance - pageNavHeight - headerHeight - 30,
            behavior: "smooth"
          });
        } else {
          window.scrollTo({
            top: targetTopDistance - pageNavHeight - 30,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // Carousel
  pageNavCarousels.forEach(function (carousel) {
    var prevBtn = carousel.querySelector('.pageNavCarousel .prev');
    var nextBtn = carousel.querySelector('.pageNavCarousel .next');
    var pageNavSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](carousel, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
      slidesPerView: 'auto',
      freeMode: true,
      slideToClickedSlide: true,
      centerInsufficientSlides: true,
      focusableElements: 'input, select, option, textarea, video, label',
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn
      }
    });
  });
  if (document.querySelector('.heroFull + .pageNavContainer')) {
    var showHeroPageNav = function showHeroPageNav() {
      heroHeight = "".concat(window.innerHeight - nav.offsetHeight, "px");
      hero.style.minHeight = heroHeight;
    };
    var hero = document.querySelector('.heroFull');
    var nav = document.querySelector('.heroFull + .pageNavContainer > .pageNavSticky');
    var windowWidth = window.innerWidth;
    var heroHeight;
    showHeroPageNav();
    window.addEventListener('resize', function () {
      if (window.innerWidth !== windowWidth) {
        showHeroPageNav();
        windowWidth = window.innerWidth;
      }
    });
  }

  // Responsive dropdown
  if (pageNavDropdown) {
    var showDropdown = function showDropdown() {
      pageNavDropdown.classList.add('is-open');
      if (document.body.classList.contains("siteHeader__scroll-up")) {
        document.body.classList.remove("siteHeader__scroll-up");
      }
    };
    var hideDropdown = function hideDropdown() {
      pageNavDropdown.classList.remove('is-open');
    };
    var toggleDropdown = function toggleDropdown() {
      isActive = !isActive;
      if (isActive) {
        showDropdown();
      } else {
        hideDropdown();
      }
    };
    var toggle = pageNavDropdown.querySelector('.toggle');
    var backdrop = pageNavDropdown.querySelector('.backdrop');
    var dropdownLinks = pageNavDropdown.querySelectorAll('.pageNavLink');
    var bookBtn = document.querySelector('.pageNav .book-btn .pageNavLink');
    var isActive;
    toggle.addEventListener('click', toggleDropdown);
    backdrop.addEventListener('click', toggleDropdown);
    dropdownLinks.forEach(function (link) {
      link.addEventListener('click', toggleDropdown);
    });
    bookBtn.addEventListener('click', function () {
      if (isActive) {
        hideDropdown();
        isActive = !isActive;
      }
    });

    // Hide dropdown when scrolled to the bottom of page
    if (!dropdownBreakpoint.matches) {
      window.addEventListener('scroll', function () {
        var pageNavTop = pageNav.getBoundingClientRect().top;
        var footerTop = document.querySelector('.siteFooter').getBoundingClientRect().top;
        if (footerTop < pageNavTop) {
          if (isActive) {
            hideDropdown();
            setTimeout(function () {
              isActive = !isActive;
              pageNav.classList.add('is-hidden');
            }, 400);
          } else {
            pageNav.classList.add('is-hidden');
          }
        } else if (pageNavTop < footerTop && pageNav.classList.contains('is-hidden')) {
          pageNav.classList.remove('is-hidden');
        }
      });
    }
  }
}

/***/ }),

/***/ "./src/js/modules/renderers.js":
/*!*************************************!*\
  !*** ./src/js/modules/renderers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultRenderer)
/* harmony export */ });
/* harmony import */ var _unseenco_taxi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @unseenco/taxi */ "./node_modules/@unseenco/taxi/src/taxi.js");
/* harmony import */ var lenis__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lenis */ "./node_modules/lenis/dist/lenis.mjs");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _amenitiesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./amenitiesList */ "./src/js/modules/amenitiesList.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "./src/js/modules/animation.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel */ "./src/js/modules/carousel.js");
/* harmony import */ var _fancybox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fancybox */ "./src/js/modules/fancybox.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter */ "./src/js/modules/filter.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header */ "./src/js/modules/header.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu */ "./src/js/modules/menu.js");
/* harmony import */ var _pageNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pageNav */ "./src/js/modules/pageNav.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transition */ "./src/js/modules/transition.js");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./video */ "./src/js/modules/video.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
















// Scripts to load on initial page entry
function initialScripts() {
  var bodyScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.setAttribute('style', "--body-scrollbar-width: ".concat(bodyScrollbarWidth, "px;"));
  var lenis = new lenis__WEBPACK_IMPORTED_MODULE_12__["default"]();
  lenis.on('scroll', gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_13__.ScrollTrigger.update);
  gsap__WEBPACK_IMPORTED_MODULE_14__["default"].ticker.add(function (time) {
    lenis.raf(time * 1000);
  });
  gsap__WEBPACK_IMPORTED_MODULE_14__["default"].ticker.lagSmoothing(0);
  (0,_transition__WEBPACK_IMPORTED_MODULE_10__.initialTransition)();
}

// Scripts to load on every page entry
function enterScripts() {
  console.log('page entered');
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  });
  (0,_accordion__WEBPACK_IMPORTED_MODULE_1__.Accordions)();
  (0,_amenitiesList__WEBPACK_IMPORTED_MODULE_2__.AmenitiesList)();
  (0,_animation__WEBPACK_IMPORTED_MODULE_3__.Animations)();
  (0,_carousel__WEBPACK_IMPORTED_MODULE_4__.Carousels)();
  (0,_fancybox__WEBPACK_IMPORTED_MODULE_5__.FancyboxModals)();
  (0,_filter__WEBPACK_IMPORTED_MODULE_6__.Filters)();
  (0,_header__WEBPACK_IMPORTED_MODULE_7__.HeaderHeight)();
  (0,_header__WEBPACK_IMPORTED_MODULE_7__.HeaderHide)();
  (0,_menu__WEBPACK_IMPORTED_MODULE_8__.Menu)();
  (0,_pageNav__WEBPACK_IMPORTED_MODULE_9__.PageNavs)();
  (0,_video__WEBPACK_IMPORTED_MODULE_11__.Videos)();
}

// Scripts to load on every page exit
function leaveScripts() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  });
}
var DefaultRenderer = /*#__PURE__*/function (_Renderer) {
  _inherits(DefaultRenderer, _Renderer);
  var _super = _createSuper(DefaultRenderer);
  function DefaultRenderer() {
    _classCallCheck(this, DefaultRenderer);
    return _super.apply(this, arguments);
  }
  _createClass(DefaultRenderer, [{
    key: "initialLoad",
    value: function initialLoad() {
      initialScripts();
      this.onEnter();
      this.onEnterCompleted();
    }
  }, {
    key: "onLeave",
    value: function onLeave() {}
  }, {
    key: "onLeaveCompleted",
    value: function onLeaveCompleted() {
      leaveScripts();
    }
  }, {
    key: "onEnter",
    value: function onEnter() {
      enterScripts();
    }
  }, {
    key: "onEnterCompleted",
    value: function onEnterCompleted() {}
  }]);
  return DefaultRenderer;
}(_unseenco_taxi__WEBPACK_IMPORTED_MODULE_0__.Renderer);


/***/ }),

/***/ "./src/js/modules/transition.js":
/*!**************************************!*\
  !*** ./src/js/modules/transition.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultTransition),
/* harmony export */   initialTransition: () => (/* binding */ initialTransition)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _unseenco_taxi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @unseenco/taxi */ "./node_modules/@unseenco/taxi/src/taxi.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/js/modules/animation.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



function initialTransition() {
  var transitionEl = document.querySelector('.pageTransition');
  var initialTimeline = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
    onComplete: _animation__WEBPACK_IMPORTED_MODULE_1__.FadeIns
  });
  initialTimeline.to('.pageTransition', {
    autoAlpha: 0,
    duration: 0.6
  });
}
var DefaultTransition = /*#__PURE__*/function (_Transition) {
  _inherits(DefaultTransition, _Transition);
  var _super = _createSuper(DefaultTransition);
  function DefaultTransition() {
    _classCallCheck(this, DefaultTransition);
    return _super.apply(this, arguments);
  }
  _createClass(DefaultTransition, [{
    key: "onLeave",
    value: function onLeave(_ref) {
      var from = _ref.from,
        trigger = _ref.trigger,
        done = _ref.done;
      console.log('leave transition');
      var leaveTimeline = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
        onComplete: function onComplete() {
          return done();
        }
      });
      leaveTimeline.to('.pageTransition', {
        autoAlpha: 1,
        duration: 0.6
      });
    }
  }, {
    key: "onEnter",
    value: function onEnter(_ref2) {
      var to = _ref2.to,
        trigger = _ref2.trigger,
        done = _ref2.done;
      console.log('enter transition');
      var enterTimeline = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.timeline({
        onComplete: function onComplete() {
          (0,_animation__WEBPACK_IMPORTED_MODULE_1__.FadeIns)();
          done();
        }
      });
      enterTimeline.to('.pageTransition', {
        autoAlpha: 0,
        duration: 0.6
      });
    }
  }]);
  return DefaultTransition;
}(_unseenco_taxi__WEBPACK_IMPORTED_MODULE_0__.Transition);


/***/ }),

/***/ "./src/js/modules/video.js":
/*!*********************************!*\
  !*** ./src/js/modules/video.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Videos: () => (/* binding */ Videos)
/* harmony export */ });
function Videos() {
  // Custom Vimeo/Youtube play buttons
  var articleVideos = document.querySelectorAll('.articleVideo');
  articleVideos.forEach(function (articleVideo) {
    var cover = articleVideo.querySelector(".cover");
    if (articleVideo.querySelector("iframe")) {
      var iframe = articleVideo.querySelector("iframe");
      var iframeUrl = iframe.src;
      cover.addEventListener('click', function () {
        iframe.src = iframeUrl + '?autoplay=1';
        cover.classList.add('hidden');
      });
    } else if (articleVideo.querySelector("video")) {
      var video = articleVideo.querySelector("video");
      cover.addEventListener('click', function () {
        video.play();
        cover.classList.add('hidden');
      });
    }
  });

  // Autoplay videos on page enter
  var vids = document.querySelectorAll("video");
  vids.forEach(function (vid) {
    var playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.then(function (_) {})["catch"](function (error) {});
    }
  });
}

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./src/js/app.js"), __webpack_exec__("./src/scss/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);