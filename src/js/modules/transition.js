import { gsap } from "gsap"
import { Transition } from '@unseenco/taxi'
import { FadeIns } from './animation'

export function initialTransition() {

    const transitionEl = document.querySelector('.pageTransition')
    let initialTimeline = gsap.timeline({ onComplete: FadeIns })
    initialTimeline.to('.pageTransition', { autoAlpha: 0, duration: 0.6 })
}

export default class DefaultTransition extends Transition {

    onLeave({ from, trigger, done }) {
        console.log('leave transition')

        let leaveTimeline = gsap.timeline({ onComplete: () => done() })
        leaveTimeline.to('.pageTransition', { autoAlpha: 1, duration: 0.6 })
    }

    onEnter({ to, trigger, done }) {
        console.log('enter transition')

        let enterTimeline = gsap.timeline({
            onComplete: () => {
                FadeIns()
                done()
            }
        })
        enterTimeline.to('.pageTransition', { autoAlpha: 0, duration: 0.6 })
    }
}