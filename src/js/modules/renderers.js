import { Renderer } from '@unseenco/taxi'
import Lenis from 'lenis'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Accordions } from './accordion'
import { AmenitiesList } from './amenitiesList'
import { Animations } from './animation'
import { Carousels } from './carousel'
import { FancyboxModals } from './fancybox'
import { Filters } from './filter'
import { Forms } from './forms'
import { HeaderHeight, HeaderHide } from './header'
import { Menu } from './menu'
import { PageNavs } from './pageNav'
import { initialTransition } from './transition'
import { Videos } from './video'

// Scripts to load on initial page entry
function initialScripts() {
    const bodyScrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.setAttribute('style',`--body-scrollbar-width: ${bodyScrollbarWidth}px;`)
    
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    initialTransition()
}

// Scripts to load on every page entry
function enterScripts() {
    console.log('page entered')
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    Accordions()
    AmenitiesList()
    Animations()
    Carousels()
    FancyboxModals()
    Filters()
    Forms()
    HeaderHeight()
    HeaderHide()
    Menu()
    PageNavs()
    Videos()
}

// Scripts to load on every page exit
function leaveScripts() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

export default class DefaultRenderer extends Renderer {

    initialLoad() {
        initialScripts()
        this.onEnter()
        this.onEnterCompleted()
    }

    onLeave() {}

    onLeaveCompleted() {
        leaveScripts()
    }

    onEnter() {
        enterScripts()
    }

    onEnterCompleted() {}
}