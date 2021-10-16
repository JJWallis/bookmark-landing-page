const body = document.querySelector('body')
const header = document.querySelector('.hdr_cnt')
const carouselBtns = document.querySelectorAll('.crsl-btn')
const carouselCt = document.querySelector('.crsl-btns-ct')
const carouselCnt = document.querySelectorAll('.feat_dynamic')
const carouselImgs = document.querySelectorAll('.feat_illustration')
const faqCt = document.querySelector('.faq_qstns-ct')
import Arrow from '../images/icon-arrow.svg'
import ArrowClose from '../images/icon-arrow-close.svg'
const classList = (el, act, val) => el.classList[act](val)
const viewport = () => window.innerWidth
const resetStyles = (list, action, className) => {
   for (const el of list) classList(el, action, className)
}

// Carousel

const carouselMethods = {
   action(id) {
      let cnt
      if (id === 'simple ') {
         cnt = '.feat_pm'
      } else if (id === 'speedy') {
         cnt = '.feat_sd'
      } else {
         cnt = '.feat_tr'
      }
      this.isVisible(document.querySelectorAll(cnt))
   },
   isVisible(els) {
      if (classList(els[0], 'contains', 'hidden')) {
         resetStyles(carouselImgs, 'add', 'hidden')
         resetStyles(carouselCnt, 'add', 'hidden')
         resetStyles(els, 'remove', 'hidden')
      }
   },
}

carouselCt.addEventListener('click', (e) => {
   const target = e.target
   if (target.matches('.crsl-btn')) {
      for (const btn of carouselBtns) classList(btn, 'remove', 'active')
      classList(target, 'add', 'active')
      carouselMethods.action(target.id)
   }
})

// Nav

header.addEventListener('click', (e) => {
   const target = e.target
   if (viewport() < 879) {
      if (target.matches('.hamburger-btn') || target.matches('.btn-hmb')) {
         classList(header, 'add', 'nav-open')
         classList(body, 'add', 'overflow')
      } else if (target.matches('.close-btn') || target.matches('.icn-close')) {
         classList(header, 'remove', 'nav-open')
         classList(body, 'remove', 'overflow')
      }
   }
})

// FAQ

faqCt.addEventListener('click', (e) => {
   const target = e.target
   if (target.matches('.faq_btn')) {
      const arrow = target.children[target.children.length - 1]
      arrow.src.includes(Arrow) ? (arrow.src = ArrowClose) : (arrow.src = Arrow)
      classList(arrow, 'toggle', 'arrow-down')
      classList(target.nextElementSibling, 'toggle', 'hidden')
   }
})
