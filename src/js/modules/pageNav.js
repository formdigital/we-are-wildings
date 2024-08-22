import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

export function PageNavs() {
    const pageNavLinks = document.querySelectorAll('.pageNavLink')
    const pageNavCarousels = document.querySelectorAll('.pageNavCarousel')

    pageNavLinks.forEach(link => {
        const target = document.querySelector(`${link.dataset.target}`)
        link.addEventListener('click', () => {
            let pageNavHeight = document.querySelector('.pageNavCarousel').offsetHeight
            window.scrollTo({
                top: window.scrollY + target.getBoundingClientRect().top - pageNavHeight - 16,
                behavior: "smooth",
            })
        })
    })
    
    pageNavCarousels.forEach(carousel => {
        const prevBtn = carousel.querySelector('.pageNavCarousel .prev')
        const nextBtn = carousel.querySelector('.pageNavCarousel .next')
        const pageNavSwiper = new Swiper(carousel, {
            modules: [Navigation],
            slidesPerView: 'auto',
            centerInsufficientSlides: true,
            focusableElements: 'input, select, option, textarea, video, label',
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn,
            },
        })
    })
}