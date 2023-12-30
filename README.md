# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./Screenshots/Screenshot%20(387).png)
![](./Screenshots/Screenshot%20(389).png)
![](./Screenshots/Screenshot%20(391).png)


### Links

- Solution URL: (https://www.github.com/ARMANIE4L/age=calculator)
- Live Site URL:(https://armanie4l.github.io/age=calculator)

## My process
I first created the html, then styled it and gave it live with javascript. The entire process took me 24 Hours and it was such an exciting journey.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- css bootsrap
- Javascript

### What I learned

In this project, i learned how to integrate current dates into a project using javascript Date method. I aslo laerned how to use the setinterval function to time an event.

A snippet example of the codes i am proud of:
```js
    function calculateYear(birthdate) {
        const today = new Date();
        const year = yearInput.value;

        let yearsDiff = today.getFullYear() - year
        yearCont.textContent = yearsDiff
    }
```

### Continued development

I will still have to practice how to work with time and date. Mt next project is gonna be a countdown page.

## Author
- Website - (https://www.github.com/armanie4l/)
- Frontend Mentor - [@armanie4l](https://www.frontendmentor.io/profile/armanie4l)
- Twitter - [@armanie4l](https://www.twitter.com/armanie4l)


## Acknowledgments

All thanks to the frontEndmentor community for this and other amazing projects out there,

