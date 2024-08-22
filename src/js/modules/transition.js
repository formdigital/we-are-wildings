import { Transition } from '@unseenco/taxi'

export function initialTransition() {}

export default class DefaultTransition extends Transition {
    onLeave({ from, trigger, done }) {
        done()
    }
    onEnter({ to, trigger, done }) {
        done()
    }
}