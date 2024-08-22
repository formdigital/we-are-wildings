import { Core } from '@unseenco/taxi'

import DefaultRenderer from './modules/renderers'
import DefaultTransition from './modules/transition'

// Page transitions
const taxi = new Core({
    renderers: {
        default: DefaultRenderer
    },
    transitions: {
        default: DefaultTransition
    }
})