import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

export function PageNavs() {
    
    const pageNav = document.querySelector('.pageNav')
    const pageNavLinks = document.querySelectorAll('.pageNavLink')
    const pageNavCarousels = document.querySelectorAll('.pageNavCarousel')
    const pageNavDropdown = document.querySelector('.pageNavDropdown')
    const dropdownBreakpoint = window.matchMedia("(min-width: 720px)")

    pageNavLinks.forEach(link => {
        const target = document.querySelector(`${link.dataset.target}`)

        link.addEventListener('click', () => {

            let headerHeight = document.querySelector('.siteHeader').offsetHeight
            
            if (pageNavDropdown && !dropdownBreakpoint.matches) {

                window.scrollTo({
                    top: window.scrollY + target.getBoundingClientRect().top - headerHeight,
                    behavior: "smooth",
                })

            } else {

                let pageNavHeight = document.querySelector('.pageNav').offsetHeight
                window.scrollTo({
                    top: window.scrollY + target.getBoundingClientRect().top - pageNavHeight - 16,
                    behavior: "smooth",
                })

            }
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
        let windowWidth = window.innerWidth
        let heroHeight

        function showHeroPageNav() {
            heroHeight = `${window.innerHeight - nav.offsetHeight}px`
            hero.style.minHeight = heroHeight
        }

        showHeroPageNav()
        window.addEventListener('resize', () => {
            if (window.innerWidth !== windowWidth) {
                showHeroPageNav()
                windowWidth = window.innerWidth
            }
        })
    }

    if (pageNavDropdown) {

        const toggle = pageNavDropdown.querySelector('.toggle')
        const backdrop = pageNavDropdown.querySelector('.backdrop')
        const dropdownLinks = pageNavDropdown.querySelectorAll('.pageNavLink')
        const bookBtn = document.querySelector('.pageNav .book-btn .pageNavLink')
        let isActive

        function showDropdown() {
            pageNavDropdown.classList.add('is-open')
            if (document.body.classList.contains("siteHeader__scroll-up")) {
                document.body.classList.remove("siteHeader__scroll-up")
            }
        }

        function hideDropdown() {
            pageNavDropdown.classList.remove('is-open')
        }

        function toggleDropdown() {
            isActive = !isActive
            if (isActive) {
                showDropdown()
            } else {
                hideDropdown()
            }
        }

        toggle.addEventListener('click', toggleDropdown)
        backdrop.addEventListener('click', toggleDropdown)
        dropdownLinks.forEach(link => {
            link.addEventListener('click', toggleDropdown)
        })
        bookBtn.addEventListener('click', () => {
            if (isActive) {
                hideDropdown()
                isActive = !isActive
            }
        })

        // Hide dropdown when scrolled to the bottom of page
        if (!dropdownBreakpoint.matches) {
            window.addEventListener('scroll', () => {
                let pageNavTop = pageNav.getBoundingClientRect().top
                let footerTop = document.querySelector('.siteFooter').getBoundingClientRect().top
                
                if (footerTop < pageNavTop) {

                    if (isActive) {
                        hideDropdown()
                        setTimeout(() => { 
                            isActive = !isActive
                            pageNav.classList.add('is-hidden')
                        },400)
                    } else {
                        pageNav.classList.add('is-hidden')
                    }

                } else if (pageNavTop < footerTop && pageNav.classList.contains('is-hidden')) {

                    pageNav.classList.remove('is-hidden')

                }
            })
        }
    }
}