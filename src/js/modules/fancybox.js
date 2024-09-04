import { Fancybox } from "@fancyapps/ui"

export function FancyboxModals() {
    Fancybox.bind("[data-fancybox]", {
        Thumbs: false,
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ["close"],
            },
        },
        Carousel: {
            transition: "slide",
        },
    })
}