const header = document.querySelector('.hdr_cnt')
const mobileNav = document.querySelector('.hdr_mobile-nav-ct')
const carouselBtns = document.querySelectorAll('.crsl-btn')
const carouselCt = document.querySelector('.crsl-btns-ct')
const classList = (el, act, val) => el.classList[act](val)
const viewport = () => window.innerWidth

header.addEventListener('click', e => {
   const target = e.target
   if (viewport() < 800) {
      if (target.matches('.hamburger-btn') || target.matches('.btn-hmb')) {
         classList(mobileNav, 'remove', 'hidden')
      } else if (target.matches('.close-btn') || target.matches('.icn-close')) {
         classList(mobileNav, 'add', 'hidden')
      }
   }
})

carouselCt.addEventListener('click', e => {
   const target = e.target
   if (target.matches('.crsl-btn')) {
      for (const btn of carouselBtns) classList(btn, 'remove', 'active')
      classList(target, 'add', 'active')
   }
})

// Opactity for hamburger + logo vs hidden class
// Match viewport size to CSS breakpoints
