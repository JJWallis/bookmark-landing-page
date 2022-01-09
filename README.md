# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158) on Frontend Mentor

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Your users should be able to:

-  View the optimal layout for the site depending on their device's screen size
-  See hover states for all interactive elements on the page
-  Receive an error message when the newsletter form is submitted if:
-  The input field is empty
-  The email address is not formatted correctly

### Screenshot

![](./Screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  Flexbox
-  Mobile-first workflow
-  Sass - CSS preprocessor
-  Vanilla JS
-  ES6 Modules

### What I learned

```html
<i class="fab fa-facebook-square social-icon social-icon-fb"></i>
```

This project was my first time using NPM through which I was able to install multiple packages to produce this project, including Font Awesome's icon library. These icons come with great JavaScript support already built in, providing a much greater hover target for transitioning icons based off a user's actions.

I was also able to successfully install the bundler Parcel which provides a massive boost to productivity by compiling all of our Sass and JavaScript code into a 'browser-readable' format every time we save, whilst setting up a live-server that auto-refreshes.

```scss
.hero {
   &-wrapper {
      background: url('/images/bg-blue-shape.svg') no-repeat -45% 15% / 150%;
      @include mq(hero-illustration) {
         background-position: calc(100% + 100px) 15%;
         background-size: 80% 400px;
      }
   }
}
```

I chose to write all my CSS using the pre-processor Sass where I adopted the 7-1 pattern for organisation, whilst learning how to use nesting with the '&' operator to inherit the parent selector. I also used mixins which are able to dynamically generate re-usable sections of CSS code based on potential arguments we provide to them, all within a function like syntax.

The code example above highlights my solution to the blue background SVG which we had to manually create through code. In order to create this shape, I had to research additional information about the basics of XML code and the tags we can use to create different shapes, such as the `<cicle>` tag.

```scss
&:hover::after {
   transform: scaleX(1);
   transform-origin: left;
}
```

I adapted the original design slightly to play around with more complicated transitions and hover effects for the primary navigation, since the original design merely required a colour change. I had recently learnt about the `transform-origin` property and used it here to allow each small line (attatched to each link) to scale horizontally on hover, whilst then performing the same effect but in the opposite direction due to a different transform-origin value being applied on hover.

```scss
.card-brwsr {
   @include flexParent(row, center, unset);
   flex-wrap: wrap;
   & > * {
      flex-basis: 340px;
   }
}
```

My original solution to controlling the 'browser-extension' cards resolved around applying a standard `flex-wrap` to the parent, with a fixed `flex-basis` value to reproduce the classic wrapping behaviour. However, I did also apply a `flex-grow: 1` to each flex-child, which at tablet devices caused the bottom flex-child to become stretched to fill up all remaining space. Once I removed that value, the wrapping behaviour still occured but without any fluid stretching alongside it.

```scss
@keyframes left-right {
   0% {
      transform: translateY(-50%) translateX(0);
   }
   33% {
      transform: translateY(-50%) translateX(10px);
   }
   66% {
      transform: translateY(-50%) translateX(-10px);
   }
   100% {
      transform: translateY(-50%) translateX(0);
   }
}

&_illustration {
   animation: left-right 3000ms linear backwards infinite;
}
```

I decided to implement my first official animation within this project, learning how to represent the different stages through either percentages or the keywords 'to' and 'from', as well as allowing the animation to continue running for an infinite amount of time.

### Continued development

I organised a lot of my styles into the same Sass partials so I wasn't having to constantly create new files as I was building out the page. However, I'm aware this goes against the modular purpose of splitting your code up into re-usable chunks, and therefore look forward to finishing a project with a more diverse range of populated folders.

I feel as if now I am becoming relatively confident with building single-page layouts in accordance with the original designs provided. I would like to branch out further in tackling larger scale projects, such as multi-page sites which would take my organisation and CSS skills to the next level.

### Useful resources

-  [CSS Animation - Introduction](https://www.youtube.com/watch?v=YszONjKpgg4&ab_channel=WebDevSimplified) - My first introduction to CSS animation, explaining all the fundamental properties and their behaviour.

-  [CSS Performant Animations](https://www.youtube.com/watch?v=4PStxeSIL9I&ab_channel=WebDevSimplified) - This was great to learn early on since I used to make the mistake of transitioning everything on a class, instead of specifying certain properties to be more performant.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)
