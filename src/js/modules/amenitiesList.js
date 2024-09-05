export function AmenitiesList() {

    const amenitiesLists = document.querySelectorAll('.amenitiesList')

    amenitiesLists.forEach(list => {
        const container = list.querySelector('.amenitiesListContainer')
        const toggle = list.querySelector('.amenitiesListBtn')
        let isOpen

        toggle.addEventListener('click', () => {
            isOpen = !isOpen
            if (isOpen) {
                toggle.innerHTML = 'View less'
                list.classList.add('is-open')
            } else {
                toggle.innerHTML = 'View more'
                list.classList.remove('is-open')
            }
        })
    })
}