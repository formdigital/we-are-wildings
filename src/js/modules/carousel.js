import Swiper from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'

export function Carousels() {

    const accommodationCarousels = document.querySelectorAll('.accommodationCarousel')
    const newsCarousels = document.querySelectorAll('.newsCarousel')
    
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
    })
}