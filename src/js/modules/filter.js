import mixitup from 'mixitup'

export function Filters() {

    // Carousel filtering
    const newsFilter = document.querySelector('.newsListings.mix-container')

    if (newsFilter) {
    
        const mixer = mixitup(newsFilter, {
            animation: {
                effects: 'fade scale(0.8) stagger(50ms)',
                duration: 400,
            },
        })
    }
}