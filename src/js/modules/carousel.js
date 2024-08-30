import Swiper from 'swiper'
import { EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import mixitup from 'mixitup'

export function Carousels() {

    const articleGalleries = document.querySelectorAll('.articleGallery')
    const accommodationCarousels = document.querySelectorAll('.accommodationCarousel')
    const newsCarousels = document.querySelectorAll('.newsCarousel')
    const testimonialsCarousels = document.querySelectorAll('.testimonialsCarousel')
    
    articleGalleries.forEach(carousel => {
        const prevBtn = carousel.querySelector('.prev')
        const nextBtn = carousel.querySelector('.next')
        const pagination = carousel.querySelector('.articleGalleryPagination')
        const articleGallerySwiper = new Swiper(carousel, {
            modules: [EffectFade,Navigation,Pagination],
            slidesPerView: 1,
            autoHeight: true,
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn,
            },
            pagination: {
                el: pagination,
                clickable: true,
            },
        })
    })
    
    accommodationCarousels.forEach(carousel => {
        const prevBtn = carousel.querySelector('.prev')
        const nextBtn = carousel.querySelector('.next')
        const scrollbar = carousel.querySelector('.scrollbar')
        const accommodationCarouselSwiper = new Swiper(carousel, {
            modules: [Navigation,Scrollbar],
            slidesPerView: 1.1,
            spaceBetween: 16,
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn,
            },
            scrollbar: {
                el: scrollbar,
                draggable: true,
            },
            breakpoints: {
                600: {
                    slidesPerView: 1.5,
                    spaceBetween: 18,
                },
                800: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1000: {
                    slidesPerView: 2.5,
                    spaceBetween: 22,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        })
    })
    
    newsCarousels.forEach(carousel => {
        const prevBtn = carousel.querySelector('.prev')
        const nextBtn = carousel.querySelector('.next')
        const scrollbar = carousel.querySelector('.scrollbar')
        const newsCarouselSwiper = new Swiper(carousel, {
            modules: [Navigation,Scrollbar],
            slidesPerView: 1.1,
            spaceBetween: 16,
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn,
            },
            scrollbar: {
                el: scrollbar,
                draggable: true,
            },
            breakpoints: {
                600: {
                    slidesPerView: 1.5,
                    spaceBetween: 18,
                },
                800: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1000: {
                    slidesPerView: 2.5,
                    spaceBetween: 22,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        })

        // Carousel filtering
        const filter = carousel.querySelector('.mix-container')

        if (filter) {
        
            const mixer = mixitup(filter, {
                load: {
                    filter: '.mix-category-news'
                },
                animation: {
                    effects: 'fade translateX(200px) stagger(50ms)',
                    duration: 400,
                    reverseOut: true,
                    nudge: false,
                },
                callbacks: {
                    onMixStart: function() {
                        newsCarouselSwiper.setProgress(0, 100)
                    },
                    onMixEnd: function() {
                        newsCarouselSwiper.update()
                    },
                }
            })
        }
    })
    
    testimonialsCarousels.forEach(carousel => {
        const prevBtn = carousel.querySelector('.prev')
        const nextBtn = carousel.querySelector('.next')
        const pagination = carousel.querySelector('.pagination')
        const testimonialsCarouselSwiper = new Swiper(carousel, {
            modules: [EffectFade,Navigation,Pagination],
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn,
            },
            pagination: {
                el: pagination,
            },
        })
    })
}