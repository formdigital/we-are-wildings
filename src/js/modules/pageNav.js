import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

export function PageNavs() {
    
    const pageNavLinks = document.querySelectorAll('.pageNavLink')
    const pageNavCarousels = document.querySelectorAll('.pageNavCarousel')
    const pageNavDropdown = document.querySelector('.pageNavDropdown')

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

    if (document.querySelector('.heroFull + .pageNavContainer')) {

        const hero = document.querySelector('.heroFull')
        const nav = document.querySelector('.heroFull + .pageNavContainer > .pageNavSticky')
        let heroHeight

        function showHeroPageNav() {
            heroHeight = `${window.innerHeight - nav.offsetHeight}px`
            hero.style.minHeight = heroHeight
        }

        showHeroPageNav()
        window.addEventListener('resize', showHeroPageNav)
    }

    if (pageNavDropdown) {

        const toggle = pageNavDropdown.querySelector('.toggle')
        let isActive

        function showDropdown() {
            pageNavDropdown.classList.add('is-open')
        }

        function hideDropdown() {
            pageNavDropdown.classList.remove('is-open')
        }

        toggle.addEventListener('click', () => {
            isActive = !isActive
            if (isActive) {
                showDropdown()
            } else {
                hideDropdown()
            }
        })
    }
}