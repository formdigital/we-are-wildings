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

/***/ "./src/js/modules/animation.js":
/*!*************************************!*\
  !*** ./src/js/modules/animation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animations: () => (/* binding */ Animations)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


function Animations() {
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);

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
  var accommodationCarousels = document.querySelectorAll('.accommodationCarousel');
  var newsCarousels = document.querySelectorAll('.newsCarousel');
  var testimonialsCarousels = document.querySelectorAll('.testimonialsCarousel');
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
  var pageNavLinks = document.querySelectorAll('.pageNavLink');
  var pageNavCarousels = document.querySelectorAll('.pageNavCarousel');
  pageNavLinks.forEach(function (link) {
    var target = document.querySelector("".concat(link.dataset.target));
    link.addEventListener('click', function () {
      var pageNavHeight = document.querySelector('.pageNavCarousel').offsetHeight;
      window.scrollTo({
        top: window.scrollY + target.getBoundingClientRect().top - pageNavHeight - 16,
        behavior: "smooth"
      });
    });
  });
  pageNavCarousels.forEach(function (carousel) {
    var prevBtn = carousel.querySelector('.pageNavCarousel .prev');
    var nextBtn = carousel.querySelector('.pageNavCarousel .next');
    var pageNavSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](carousel, {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
      slidesPerView: 'auto',
      centerInsufficientSlides: true,
      focusableElements: 'input, select, option, textarea, video, label',
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn
      }
    });
  });
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
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "./src/js/modules/animation.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel */ "./src/js/modules/carousel.js");
/* harmony import */ var _pageNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageNav */ "./src/js/modules/pageNav.js");
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
  (0,_animation__WEBPACK_IMPORTED_MODULE_2__.Animations)();
  (0,_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousels)();
  (0,_pageNav__WEBPACK_IMPORTED_MODULE_4__.PageNavs)();
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
/* harmony import */ var _unseenco_taxi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @unseenco/taxi */ "./node_modules/@unseenco/taxi/src/taxi.js");
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

function initialTransition() {}
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
      done();
    }
  }, {
    key: "onEnter",
    value: function onEnter(_ref2) {
      var to = _ref2.to,
        trigger = _ref2.trigger,
        done = _ref2.done;
      done();
    }
  }]);
  return DefaultTransition;
}(_unseenco_taxi__WEBPACK_IMPORTED_MODULE_0__.Transition);


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