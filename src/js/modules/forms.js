import flatpickr from "flatpickr"

export function Forms() {

    if (document.querySelector('.datePickerInput')) {

        const datePickers = document.querySelectorAll('.datePickerInput')

        datePickers.forEach(el => {

            flatpickr(el)
        })
    }
}