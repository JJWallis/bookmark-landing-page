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

NPM + packages - Parcel bundler | Font Awesome icons

```html
<button class="faq_btn">
   <p class="faq_qstn">What is Bookmark?</p>
   <img
      src="/images/icon-arrow.svg"
      alt="Downwards facing arrow."
      class="arrow"
   />
</button>
```

FAQ - arrows translating direction on click (new technique) | colour change of arrows - creating a diff asset after modifying fill in code | learnt from 2nd FEM project (FAQ Accordian) - button parent to space-between arrow img + p | no max-height because plently of room for content to breathe within a landing page layout (vs App centered style layout)

```css
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

Sass - 1st project | 7 - 1 pattern | basic mixins + Sass vars (compiling for browser support) | maps for mq breakpoints | nesting media queries + & selector (BEM) | modern reset for reset.scss (normalise outdated) | @use + @forward vs @import

SVG Blue bg-img - had to create ourself | learnt loads about SVGS - viewbox + viewport + strokes | made two version - one very long one for wider screens to stay pinned with img + keep scaling horizontally as viewport grows (smaller for mobile-tablet) | fluid size on smaller screens (scales) + fixed vertical with fluid horizontal for wider

```css
&:hover::after {
   transform: scaleX(1);
   transform-origin: left;
}
```

Underline pseudo el trick - not part of design (but sometime nice to experiment with diff ideas to test whether they were appropiate for virtual audience/company) | transform-origin (changing direction it starts + stops)

```scss
.card-brwsr {
   @include flexParent(row, center, unset);
   flex-wrap: wrap;
   & > * {
      flex-basis: 340px;
   }
}
```

Flexbox browser cards - flex-wrap + basis without flex-grow (don't get stretched bottom flex item but still wrapping behaviour - great to maintain card layout)

```css
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
```

Animation - mobile nav (transalted default off of screen + transalted back to 100% on hamburger click via descendant class selector) | power of transitions + dynamic 'open' class (solves most of the animation required - unless more complicated than 'to' - 'from') | performant animation - only animating opacity + transform | animation used for hero illustration (little finess + appropiate for a bookmark company based around modern technology)

```css
:focus {
   outline: 3px dotted $softBlue;
}
```

Outlines for accessibility - dotted style + on :focus / :hover

```js
const observer = new IntersectionObserver(
   (entries, observer) =>
      entries.forEach((entry) => {
         !entry.isIntersecting
            ? header.classList.add('test')
            : header.classList.remove('test')
      }),
   headerOptions
)
```

Intersection observer API (sticky header box-shadow + opacity 0.9)

Modules - 1st time for whole project | much more organised + thinking about how to model the events within App.js (same way designing an App would do - event is the trigger for whole logic - async logic)

### Continued development

I still organised a lot of my styles into the same Sass partials, since I found this more useful when building out the site so I wasn't constantly creating new files all the time. However, grouping styles together to this extent goes against the modular purpose of splitting your code up into re-usable chunks, so therefore I would at least like to finish the project with a much larger components folder.

### Useful resources

-  [Intersection Observer API - Introduction](https://www.youtube.com/watch?v=T8EYosX4NOo&ab_channel=KevinPowell) - Kevin's video provided an introduction to the basics of the API and some best practices when dealing with it. Fading or translating content in on scroll is nice, but in this situation a more appropiate use was applying dynamic styling (box-shadow) to a sticky header, when the viewport reached a certain section of content.

-  [CSS Animation - Introduction](https://www.youtube.com/watch?v=YszONjKpgg4&ab_channel=WebDevSimplified) - My first introduction to CSS animation, explaining all the fundamental properties and their behaviour.

-  [CSS Performant Animations](https://www.youtube.com/watch?v=4PStxeSIL9I&ab_channel=WebDevSimplified) - This was great to learn early on since I used to make the mistake of transitioning everything on a class, instead of specifying certain properties to be more performant.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()
