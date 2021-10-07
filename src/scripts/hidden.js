const body = document.querySelector('body')
const header = document.querySelector('.hdr_cnt')
const logo = document.querySelector('.hdr_logo-bm')
const hamburger = document.querySelector('.btn-hmb')
const mobileNav = document.querySelector('.hdr_mobile-nav-ct')
const carouselBtns = document.querySelectorAll('.crsl-btn')
const carouselCt = document.querySelector('.crsl-btns-ct')
const carouselCnt = document.querySelectorAll('.feat_dynamic')
const carouselImgs = document.querySelectorAll('.feat_illustration')
const faqCt = document.querySelector('.faq_qstns-ct')
const classList = (el, act, val) => el.classList[act](val)
const viewport = () => window.innerWidth

// Carousel

const carouselMethods = {
   simple() {
      const cntPm = document.querySelectorAll('.feat_pm')
      isVisible(cntPm)
   },
   speedy() {
      const cntSd = document.querySelectorAll('.feat_sd')
      isVisible(cntSd)
   },
   easy() {
      const cntTr = document.querySelectorAll('.feat_tr')
      isVisible(cntTr)
   },
}

function isVisible(els) {
   if (classList(els[0], 'contains', 'hidden')) {
      for (const img of carouselImgs) classList(img, 'add', 'hidden')
      for (const cnt of carouselCnt) classList(cnt, 'add', 'hidden')
      for (const cnt of els) classList(cnt, 'remove', 'hidden')
   }
}

carouselCt.addEventListener('click', (e) => {
   const target = e.target
   if (target.matches('.crsl-btn')) {
      for (const btn of carouselBtns) classList(btn, 'remove', 'active')
      classList(target, 'add', 'active')
      carouselMethods[target.id]()
   }
})

// Nav

header.addEventListener('click', (e) => {
   const target = e.target
   if (viewport() < 800) {
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
      arrow.src.includes('56d7c493')
         ? (arrow.src = '/icon-arrow-close.91ded9a2.svg')
         : (arrow.src = '/icon-arrow.56d7c493.svg')
      classList(arrow, 'toggle', 'arrow-down')
      classList(target.nextElementSibling, 'toggle', 'hidden')
   }
})

// TODO:
//    Carousel btns:
//       don't need obj methods | use class for speedy, easy + simply vs id
//       isVisible ran with node list of that class + create arr from it removes 1st el (btn)
//       rest is same
//    Add event listeners for FAQ content - longer conditional but traverse (closest()) to nearest btn parent to determine arrow
//    Re-factor - sep func to run for...of loops (use params for diff)
//    Match viewport size to CSS breakpoints
