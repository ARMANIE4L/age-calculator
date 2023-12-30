document.addEventListener("DOMContentLoaded", function () {
    let dayInput = document.querySelector("#dayInput")
    let monthInput = document.querySelector("#monthInput")
    let yearInput = document.querySelector("#yearInput")
    let dayText = document.querySelector("#dayText")
    let monthText = document.querySelector("#monthText")
    let yearText = document.querySelector("#yearText")
    let dayErrorMessage = document.querySelector("#dayErrorMessage")
    let monthErrorMessage = document.querySelector("#monthErrorMessage")
    let yearErrorMessage = document.querySelector("#yearErrorMessage")
    let arrowIcon = document.querySelector("#arrowIcon")
    let yearCont = document.querySelector("#yearCont")
    let dayNum = document.querySelector("#dayNum")
    let monthNum = document.querySelector("#monthNum")


    //FORM VALIDATIONS
    let valid = true

    function validateDay(event) {
        if (dayInput.value === "") {
            valid = false
            dayInput.style.borderColor = 'red'
            dayText.style.color = 'red'
            dayErrorMessage.textContent = 'This field is required'
            event.preventDefault()
            
        } else {
            valid
            dayInput.style.borderColor = 'gray'
            dayText.style.color = 'gray'
            dayErrorMessage.textContent = ""
        }

        if (dayInput.value > 31) {
            valid = false
            dayInput.style.borderColor = 'red'
            dayText.style.color = 'red'
            dayErrorMessage.textContent = 'Must be a valid day'
            event.preventDefault()
        } else {
            valid
            dayInput.style.borderColor = 'gray'
            dayText.style.color = 'gray'
            dayErrorMessage.textContent = ""
        }
    }

    function validateMonth(event) {
        if (monthInput.value === "") {
            valid = false
            monthInput.style.borderColor = 'red'
            monthText.style.color = 'red'
            monthErrorMessage.textContent = 'This field is required'
            event.preventDefault()
        } else {
            valid
            monthInput.style.borderColor = 'gray'
            monthText.style.color = 'gray'
            monthErrorMessage.textContent = ""
        }

        if (monthInput.value > 12) {
            valid = false
            monthInput.style.borderColor = 'red'
            monthText.style.color = 'red'
            monthErrorMessage.textContent = 'Must be a valid month'
            event.preventDefault()
        } else {
            valid
            monthInput.style.borderColor = 'gray'
            monthText.style.color = 'gray'
            monthErrorMessage.textContent = ""
        }
    }

    function validateYear(event) {
        if (yearInput.value === "") {
            valid = false
            yearInput.style.borderColor = 'red'
            yearText.style.color = 'red'
            yearErrorMessage.textContent = 'This field is required'
            event.preventDefault()
        } else {
            valid
            yearInput.style.borderColor = 'gray'
            yearText.style.color = 'gray'
            yearErrorMessage.textContent = ""
        }

        if (yearInput.value > 2024) {
            valid = false
            yearInput.style.borderColor = 'red'
            yearText.style.color = 'red'
            yearErrorMessage.textContent = 'Must be in the past'
            event.preventDefault()
        } else {
            valid
            yearInput.style.borderColor = 'gray'
            yearText.style.color = 'gray'
            yearErrorMessage.textContent = ""
        }
    }



    //VALIDATE DAY
    function calculateDay(birthdate) {
        const today = new Date();
        const day = dayInput.value;

        let daysDiff = today.getDay() - day

        if (daysDiff < 0) {
            let prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
            daysDiff += prevMonthLastDay
        }
        dayCont.textContent = daysDiff + "  "

        //CHANGE DAYS TO DAY
        if (daysDiff === 1) {
            dayNum.textContent = "day"
        } else {
            dayNum.textContent = "days"
        }
    }

    dayInput.addEventListener("input", function (event) {
        validateDay()
    })

    
    function calculateMonth(birthdate) {
        const today = new Date();
        const month = monthInput.value;

        let monthsDiff = today.getMonth() - month
        monthCont.textContent = monthsDiff + "  "

        if (monthsDiff < 1) {
            monthCont.textContent = 0
        }

        //CHANGE MONTHS TO MONTH
        if (monthsDiff <= 1) {
            monthNum.textContent = "month"
        } else {
            monthNum.textContent = "months"
        }
    }

    monthInput.addEventListener("input", function (event) {
        validateMonth()
    })


    function calculateYear(birthdate) {
        const today = new Date();
        const year = yearInput.value;

        let yearsDiff = today.getFullYear() - year
        yearCont.textContent = yearsDiff
    }

    yearInput.addEventListener("input", function (event) {
        validateYear()
    })


    //RESET ARROW ICON COLOR
    function resetButtonColor() {
        arrowIcon.style.backgroundColor = ''
    }
    //TARGET ARROW ICON
    arrowIcon.addEventListener("click", function (event) {
        calculateDay()
        calculateMonth()
        calculateYear()
        arrowIcon.style.backgroundColor = 'black'
        if (!valid) {
            event.preventDefault()
        }

        //RESET
        setTimeout(resetButtonColor, 700)
    })
})