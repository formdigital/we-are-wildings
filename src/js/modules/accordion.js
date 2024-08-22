import Accordion from 'accordion-js'

export function Accordions() {
    const accordions = document.querySelectorAll('.accordionContainer')
    accordions.forEach(accordion => {
        new Accordion(accordion)
    })
}