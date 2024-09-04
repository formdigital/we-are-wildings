export function HeaderHide() {

    // Show/hide header on scroll
    const header = document.querySelector(".siteHeader");
    let lastScroll = 0;

    const throttle = (func, time = 100) => {
        let lastTime = 0;
        return () => {
            const now = new Date();
            if (now - lastTime >= time) {
                func();
                time = now;
            }
        };
    };

    const validateHeader = () => {
        const windowY = window.scrollY;
        const headerHeight = header.offsetHeight;
        if (windowY > headerHeight * 2) {
            document.body.classList.add("siteHeader__fixed");
            if (windowY > (window.innerHeight / 2)) {
                document.body.classList.add("siteHeader__can-animate");
                if (windowY < lastScroll) {
                    document.body.classList.add("siteHeader__scroll-up");
                } else {
                    document.body.classList.remove("siteHeader__scroll-up");
                }
            } else {
                document.body.classList.remove("siteHeader__scroll-up");
            }
        } else {
            document.body.classList.remove("siteHeader__fixed", "siteHeader__can-animate");
        }
        lastScroll = windowY;
    };

    document.addEventListener("scroll", throttle(validateHeader, 100));
}