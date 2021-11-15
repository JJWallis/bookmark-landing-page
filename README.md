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

### What I learned

```html
<i class="fab fa-facebook-square social-icon social-icon-fb"></i>
<!-- FA icons -->

<button class="faq_btn">
   <p class="faq_qstn">What is Bookmark?</p>
   <img
      src="/images/icon-arrow.svg"
      alt="Downwards facing arrow."
      class="arrow"
   />
</button>
<!-- FAQ questions -->
```

```css
.proud-of-this-css {
   color: papayawhip;
}
```

```js
document.querySelector('.form').addEventListener('submit', validate) // validate as module imported - refactored

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

### Continued development

Sass - Components (in future should create more + split up styles further)

SVG 0 attempted to change fill of arrows on click (unsuccessful)

### Useful resources

-  [Intersection Observer API - Introduction](https://www.youtube.com/watch?v=T8EYosX4NOo&ab_channel=KevinPowell) - Kevin Powell's video on the basics of the API & best practices/techniques possible with it. Fading/translating content in on scroll is nice, but a more common usecase is styling applied to a sticky header when the viewport reaches a certain section of content.

-  [CSS Animation - Introduction](https://www.youtube.com/watch?v=YszONjKpgg4&ab_channel=WebDevSimplified) - My first introduction to CSS animation.

-  [CSS Performant Animations](https://www.youtube.com/watch?v=4PStxeSIL9I&ab_channel=WebDevSimplified) - Great to learn early on, used to make the mistake of transitioning everything on a class (instead of specifying) + transition not on pseudo class but base class/el itself.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

###### TODO

GIT:

Branches - dev branch | tons of merging bugs due to Parcel - within 'dist' folder (doesn't happen on React based projects)

HTML:

Sep container for mobile navigation (not the same one - lesson learned from Bloggr project)

CSS:

Sass - 1st project | 7 - 1 pattern | basic mixins + Sass vars (compiling for browser support) | maps for mq breakpoints | nesting media queries + & selector (BEM) | modern reset for reset.scss (normalise outdated) | @use + @forward vs @import

Underline pseudo el trick - not part of design (but sometime nice to experiment with diff ideas to test whether they were appropiate for virtual audience/company) | transform-origin (changing direction it starts + stops)

Animation - mobile nav (transalted default off of screen + transalted back to 100% on hamburger click via descendant class selector) | power of transitions + dynamic 'open' class (solves most of the animation required - unless more complicated than 'to' - 'from') | performant animation - only animating opacity + transform | animation used for hero illustration (little finess + appropiate for a bookmark company based around modern technology)

Outlines for accessibility - dotted style + on :focus / :hover

FAQ - arrows translating direction on click (new technique) | colour change of arrows - creating a diff asset after modifying fill in code | learnt from 2nd FEM project (FAQ Accordian) - button parent to space-between arrow img + p | no max-height because plently of room for content to breathe within a landing page layout (vs App centered style layout)

Flexbox browser cards - flex-wrap + basis without flex-grow (don't get stretched bottom flex item but still wrapping behaviour - great to maintain card layout)

Carousel imgs - translateY 50% centre trick to control img changing (assets were diff sizes slightly - keep centre point same position) | could use transform-origin next time

SVG Blue bg-img - had to create ourself | learnt loads about SVGS - viewbox + viewport + strokes | made two version - one very long one for wider screens to stay pinned with img + keep scaling horizontally as viewport grows (smaller for mobile-tablet) | fluid size on smaller screens (scales) + fixed vertical with fluid horizontal for wider

JS:

NPM + packages - Parcel bundler | Font Awesome icons

Intersection observer API (sticky header box-shadow + opacity 0.9)

Modules - 1st time for whole project | much more organised + thinking about how to model the events within App.js (same way designing an App would do - event is the trigger for whole logic - async logic)

Carousel - 1st time linking sections of content via className (+ toggling visiblity)

Regex - massive pre-built one for email validation | error msg built + appended in JS - originally done in CSS pseudo el on input (can't apply pseudo els to inputs as self-closing) | could next time use a descendant class selector for the msg on a diff el - positioning slightly harder

Testing, testing, testing
