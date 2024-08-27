import gsap from "gsap"

export function Menu() {

    const siteMenuToggles = document.querySelectorAll('.siteMenuToggle')

    MenuReset()

    siteMenuToggles.forEach(toggle => {

        toggle.addEventListener('click', () => {
    
            if (document.body.classList.contains('siteMenuOpen')) {
                MenuClose()
            } else {
                MenuOpen()
            }
        })
    })

    // Update images on link hover
    const siteMenuLinks = document.querySelectorAll('.siteMenuNav a:not(.btn)')
    const siteMenuImages = document.querySelector('.siteMenuImages')

    siteMenuLinks.forEach(link => {
        const id = link.dataset.image
        const image = siteMenuImages.querySelector(`#${id}`)
        let activeImage

        if (link.classList.contains('active')) {
            image.classList.add('active')
        }

        link.addEventListener('mouseenter', () => {
            activeImage = siteMenuImages.querySelector('.active')

            if (!image.classList.contains('active')) {
                activeImage.classList.remove('active')
                image.classList.add('active')
            }
        })
    })
}

export function MenuOpen() {

    const siteMenu = document.querySelector('.siteMenu')

    document.body.classList.add('siteMenuOpen')

    let menuOpenTimeline = gsap.timeline({
        onStart: () => {
            document.body.classList.add('siteMenuOpening')
        },
        onComplete: () => {
            document.body.classList.remove('siteMenuOpening')
        }
    })
    menuOpenTimeline.set(siteMenu, { delay: 0.3, autoAlpha: 1 })
    menuOpenTimeline.to(siteMenu, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 0.6, ease: 'power3.inOut' })
    menuOpenTimeline.to('.siteMenu__fadeIn', { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.1 })

    console.log('open menu')
}

export function MenuClose() {

    const siteMenu = document.querySelector('.siteMenu')

    let menuCloseTimeline = gsap.timeline({
        onStart: () => {
            document.body.classList.add('siteMenuClosing')
        },
        onComplete: () => {
            document.body.classList.remove('siteMenuClosing')
            document.body.classList.remove('siteMenuOpen')
        }
    })
    menuCloseTimeline.to('.siteMenu__fadeIn', { autoAlpha: 0, duration: 0.6, ease: 'power2.inOut' })
    menuCloseTimeline.to(siteMenu, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', duration: 0.6, ease: 'power3.inOut' })
    menuCloseTimeline.set('.siteMenu__fadeIn', { y: 30 })
    menuCloseTimeline.set(siteMenu, { autoAlpha: 0 })

    console.log('close menu')
}

export function MenuReset() {
    gsap.set('.siteMenu', { autoAlpha: 0, clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
    gsap.set('.siteMenu__fadeIn', { autoAlpha: 0, y: 30 })
}