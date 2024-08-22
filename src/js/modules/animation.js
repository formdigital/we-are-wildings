import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Animations() {

    gsap.registerPlugin(ScrollTrigger)

    // Footer logo animation
    gsap.from('.siteFooterLogo .type', {
        rotate: -135,
        transformOrigin: '50% 50%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.siteFooter',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
        },
    })
}