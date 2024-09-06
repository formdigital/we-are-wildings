import Swiper from 'swiper'
import { FreeMode, Navigation } from 'swiper/modules'

export function PageNavs() {
    
    const pageNav = document.querySelector('.pageNav')
    const pageNavLinks = document.querySelectorAll('.pageNavLink')
    const pageNavTargets = document.querySelectorAll('.pageNavTarget');
    const pageNavCarousels = document.querySelectorAll('.pageNavCarousel')
    const pageNavDropdown = document.querySelector('.pageNavDropdown')
    const dropdownBreakpoint = window.matchMedia("(min-width: 720px)")

    // Add active state to links
    window.onscroll = () => {
        let current

        pageNavTargets.forEach((target) => {

            let targetTopDistance = window.scrollY + target.getBoundingClientRect().top
            let headerHeight = document.querySelector('.siteHeader').offsetHeight

            if (pageNavDropdown && !dropdownBreakpoint.matches) {

                if (window.scrollY >= targetTopDistance - headerHeight - 60) {
                    current = target.getAttribute('id')
                }

            } else {

                let pageNavHeight = document.querySelector('.pageNav').offsetHeight

                if (window.scrollY >= targetTopDistance - headerHeight - pageNavHeight - 60) {
                    current = target.getAttribute('id')
                }
            }
        })

        pageNavLinks.forEach((link) => {
            const target = link.dataset.target
            link.classList.remove('active')
            if (current == target) {
                link.classList.add('active')
            }
        })
    }

    // Scroll to link target
    pageNavLinks.forEach(link => {
        const target = document.querySelector(`#${link.dataset.target}`)

        link.addEventListener('click', () => {

            let headerHeight = document.querySelector('.siteHeader').offsetHeight
            let pageScroll = window.scrollY
            let targetTopDistance = window.scrollY + target.getBoundingClientRect().top
            
            if (pageNavDropdown && !dropdownBreakpoint.matches) {

                if (pageScroll > (targetTopDistance - 30)) {
                    window.scrollTo({
                        top: targetTopDistance - headerHeight - 30,
                        behavior: "smooth",
                    })
                } else {
                    window.scrollTo({
                        top: targetTopDistance - 30,
                        behavior: "smooth",
                    })
                }

            } else {

                let pageNavHeight = document.querySelector('.pageNav').offsetHeight

                if (pageScroll > (targetTopDistance - pageNavHeight - 30)) {
                    window.scrollTo({
                        top: targetTopDistance - pageNavHeight - headerHeight - 30,
                        behavior: "smooth",
                    })
                } else {
                    window.scrollTo({
                        top: targetTopDistance - pageNavHeight - 30,
                        behavior: "smooth",
                    })
                }
            }
        })
    })
    
    // Carousel
    pageNavCarousels.forEach(carousel => {
        const prevBtn = carousel.querySelector('.pageNavCarousel .prev')
        const nextBtn = carousel.querySelector('.pageNavCarousel .next')
        const pageNavSwiper = new Swiper(carousel, {
            modules: [FreeMode,Navigation],
            slidesPerView: 'auto',
            freeMode: true,
            slideToClickedSlide: true,
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

    // Responsive dropdown
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