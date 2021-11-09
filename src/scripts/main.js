import validate from './validation'
import carousel from './carousel'
import faq from './faq'
import nav from './nav'

document.querySelector('.hdr_cnt').addEventListener('click', nav)
document.querySelector('.crsl-btns-ct').addEventListener('click', carousel)
document.querySelector('.faq_qstns-ct').addEventListener('click', faq)
document.querySelector('.form').addEventListener('submit', validate)

// Intersection observer:

const header = document.querySelector('.hdr')
const hero = document.querySelector('.hero-wrapper')

const headerOptions = {
   rootMargin: '-200px 0px 0px 0px',
}

const observer = new IntersectionObserver(
   (entries, observer) =>
      entries.forEach((entry) => {
         !entry.isIntersecting
            ? header.classList.add('test')
            : header.classList.remove('test')
      }),
   headerOptions
)

observer.observe(hero)
