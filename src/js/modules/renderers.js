import { Renderer } from '@unseenco/taxi'

import { Accordions } from './accordion'
import { Animations } from './animation'
import { Carousels } from './carousel'
import { Menu } from './menu'
import { PageNavs } from './pageNav'

// Scripts to load on initial page entry
function initialScripts() {
    const bodyScrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.setAttribute('style',`--body-scrollbar-width: ${bodyScrollbarWidth}px;`)
}

// Scripts to load on every page entry
function enterScripts() {
    console.log('page entered')
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    Accordions()
    Animations()
    Carousels()
    Menu()
    PageNavs()
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