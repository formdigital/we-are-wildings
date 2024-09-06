export function AmenitiesList() {

    const amenitiesLists = document.querySelectorAll('.amenitiesList')

    amenitiesLists.forEach(list => {
        const toggle = list.querySelector('.amenitiesListBtn')
        const toggleLabel = toggle.querySelector('.label')
        const collapse = list.querySelector('.amenitiesListCollapse')
        const container = list.querySelector('.amenitiesListContainer')
        let containerHeight = container.offsetHeight
        let isOpen

        toggle.addEventListener('click', () => {
            containerHeight = container.offsetHeight
            isOpen = !isOpen
            if (isOpen) {
                toggleLabel.innerHTML = 'View less'
                list.classList.add('is-open')
                collapse.style.height = `${containerHeight}px`
            } else {
                toggleLabel.innerHTML = 'View more'
                list.classList.remove('is-open')
                collapse.style.height = '300px'
            }
        })
    })
}