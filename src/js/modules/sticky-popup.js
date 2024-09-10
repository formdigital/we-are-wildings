export default class StickyPopUp {
    constructor(storage) {
        this.storage = storage;
        this.holder = document.getElementById('sticky-pop-up')
        this.closeBtn = document.getElementById('sticky-pop-up--close')
        this.showState = false;

        if(!this.holder) {
            return false
        }

        if(this.checkCache()) {
            this.show()
        }

        this.bindEvents()
    }

    close() {
        this.animate()
        this.showState = false
        this.cache()
    }

    show() {
        this.showState = true;
        this.holder.classList.remove('d-none')
    }

    cache() {
        this.storage.setItem('stickyPopUp', true)
    }

    checkCache() {
        return !this.storage.getItem('stickyPopUp')
    }

    animate() {
        this.fadeOutEffect(this.holder)
        
    }

    bindEvents() {
        document.body.addEventListener('click', e => {
            if (e.target.classList.contains(`sticky-pop-up-hide`)) {
                this.close()
            }
        })
    }

    fadeOutEffect(element) {        
        const fadeEffect = setInterval(function () {
            if (!element.opacity) {
                element.style.opacity = 1
            }
            if (element.style.opacity > 0) {
                element.style.opacity = 0
                // element.classList.add('d-none')
            } else {
                clearInterval(fadeEffect);
            }
        }, 800)
    }
    
}
