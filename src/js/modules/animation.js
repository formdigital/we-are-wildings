import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Animations() {

    gsap.registerPlugin(ScrollTrigger)

    // Hero background parallax
    if (document.querySelector('.heroBg')) {

        gsap.to('.heroBg', {
            yPercent: 20,
            opacity: 0.2,
            ease: 'none',
            scrollTrigger: {
                trigger: '.heroBg',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        })
    }

    // Parallax images
    const parallaxContainers = document.querySelectorAll('.parallaxContainer')
    parallaxContainers.forEach(container => {
        const media = container.querySelector('img')

        gsap.to(media, {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        })
    })

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

    // Fade in reveals on scroll
    if (document.querySelector('.fadeInReveal')) {
        gsap.set('.fadeInReveal', {autoAlpha: 0, y: 30})
    }

    // About page history section
    if (document.querySelector('.historyContainer')) {

        const background = document.querySelector('.historySticky .background')
        const backgroundImage = background.querySelector('img')
        const left = document.querySelector('.historySticky .left')
        const right = document.querySelector('.historySticky .right')
        const content = document.querySelector('.historyContent')

        let mm = gsap.matchMedia()

        mm.add("(max-width: 959px)", () => {

            gsap.set(background, {
                clipPath: 'inset(20% 5% round 4px)',
            })

            gsap.set(content, {
                opacity: 0,
            })

            gsap.to(background, {
                clipPath: 'inset(0% 0% round 4px)',
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                },
            })

            gsap.to(backgroundImage, {
                opacity: 0.2,
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                },
            })

            gsap.to(content, {
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: '50% 70%',
                    end: '50% 60%',
                    scrub: true,
                },
            })
        })

        mm.add("(min-width: 960px) and (max-width: 1599px)", () => {

            gsap.set(background, {
                clipPath: 'inset(15% 25% round 4px)',
            })

            gsap.set(content, {
                opacity: 0,
            })

            gsap.to(background, {
                clipPath: 'inset(0% 0% round 4px)',
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                },
            })

            gsap.to(backgroundImage, {
                opacity: 0.2,
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                },
            })

            gsap.to(left, {
                xPercent: -100,
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                },
            })

            gsap.to(right, {
                xPercent: 100,
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                },
            })

            gsap.to(content, {
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: '50% 70%',
                    end: '50% 60%',
                    scrub: true,
                },
            })
        })

        mm.add("(min-width: 1600px)", () => {

            gsap.set(background, {
                clipPath: 'inset(10% 30% round 4px)',
            })

            gsap.set(content, {
                opacity: 0,
            })

            gsap.to(background, {
                clipPath: 'inset(0% 0% round 4px)',
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                },
            })

            gsap.to(backgroundImage, {
                opacity: 0.2,
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                },
            })

            gsap.to(left, {
                xPercent: -100,
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                },
            })

            gsap.to(right, {
                xPercent: 100,
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                },
            })

            gsap.to(content, {
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: content,
                    start: '50% 70%',
                    end: '50% 60%',
                    scrub: true,
                },
            })
        })
    }
}

export function FadeIns() {
    
    if (document.querySelector('.fadeInReveal')) {
        ScrollTrigger.batch(".fadeInReveal", {
            batchMax: 10,
            onEnter: (elements) => {
                gsap.to(elements, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    stagger: 0.1,
                    clearProps: "all",
                })
            },
            start: batch => {
                if ((batch.trigger.getBoundingClientRect().top + window.scrollY) > window.innerHeight) {
                    return "top bottom-=100px"
                } else {
                    return "top bottom"
                }
            },
            once: true,
        })
    }
}