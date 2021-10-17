import validate from './validation'
import carousel from './carousel'
import faq from './faq'
import nav from './nav'

document.querySelector('.hdr_cnt').addEventListener('click', nav)
document.querySelector('.crsl-btns-ct').addEventListener('click', carousel)
document.querySelector('.faq_qstns-ct').addEventListener('click', faq)
document.querySelector('.form').addEventListener('submit', validate)

// Intersection observer:

/*
    callback refs back to observer var itself

    2nd param - obj of options (3 options can set - root (null default representing viewport - 99% of time dont specify as this desired)) | 
    threshold - 0-1 scale range (0 default), how much is actually on page before callback fires (1 = 100% of desired el must be on page b4 fires, 0 = any tiny bit)
    1 - maybe for imgs (whole img viewable before running)
    rootMargin - margin on viewport (px or % = -150px pulls viewport in by that much - makes viewport box smaller on all 4 sides)
    control distance over when callback fires - 150px before box leaves viewport (doesn't have to fully leave anymore)
    callback only fires when met all options - even if hit margin won't fire if not hit threshold
    
    entries param - built in arr (containg an IntersectionObserverEntry)
    observes desired el + provides info on it (isIntersecting prop - is visible on viewport)
    target prop - most important (returns el itself - where we can manipulate)
    when you scroll + desired el going off screen (bottom edge of box) - code within callback fires again (isIntersecting === false)
    more efficient than scroll event listener - constantly using CPU to check

    node list to observe - can't have 1 observer on whole list | forEach() to observe all individually 
    observer fires synchronously + for all desired els default (even if off screen)
    use isIntersecting prop to fire only if true (lazy img loading - don't load if off screen) 
    doesn't fire when leaves page - only when intersecting (styles stay unless manually changed) 
    check isIntersecting prop when false - add invisible class to become invisible again

    unobserve func once something happens - lazy img loading (other things maybe not) 
    nothing happens when scroll back up + once observed

*/

const sectionOne = document.querySelector('.hero-wrapper')
const sections = document.querySelectorAll('.alignment')

const options = {
   root: null,
   rootMargin: '-150px',
   threshold: 0,
}
const observer = new IntersectionObserver(
   (entries, observer) =>
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            console.log(entry.target)
            entry.target.classList.toggle('test')
            //  remove invisible class when intersects
         } else {
            //  add invisible class when false
         }
         observer.unobserve(entry.target)
      }),
   options
)

sections.forEach((section) => observer.observe(section))
