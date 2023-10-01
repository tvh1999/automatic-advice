# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

The logic of this project is fairly easy to understand:

- When the user click the button then a random advice will be shown on the screen along with the id of the advice.
- All the data is taken from the API with the use of async functions, fetch API and Promise.race()
- Each time the user click on the button, the previous advice will be erase to make room for the new one.
- If the connection is bad and the request call takes too long to finish then the program will stop with a custom error.

But the true purpose of this project for me is to experiment on MVC and as such I try to organize the project in such a way.
I also try to use publish-subscriber pattern and I am fairly satisfy with the result.
I also try to refactor the code to the best of my abilities.
Be sure to leave me any errors, bugs or where I need to refactor more and I will try to fix them as soon as possible.
