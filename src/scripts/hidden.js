const header = document.querySelector('.hdr_cnt')
const mobileNav = document.querySelector('.hdr_mobile-nav-ct')
const carouselBtns = document.querySelectorAll('.crsl-btn')
const carouselCt = document.querySelector('.crsl-btns-ct')
const carouselCnt = document.querySelectorAll('.feat_dynamic')
const carouselImgs = document.querySelectorAll('.feat_illustration')
const classList = (el, act, val) => el.classList[act](val)
const viewport = () => window.innerWidth
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
      carouselMethods[target.id]()
   }
})

function isVisible(els) {
   if (classList(els[0], 'contains', 'hidden')) {
      for (const img of carouselImgs) classList(img, 'add', 'hidden')
      for (const cnt of carouselCnt) classList(cnt, 'add', 'hidden')
      for (const cnt of els) classList(cnt, 'remove', 'hidden')
   }
}

// Opactity for hamburger + logo vs hidden class
// Match viewport size to CSS breakpoints
// target.matches() re-factored arrow func
// Re-factored querySelectr + ... all arrow funcs
// Re-factor - sep func to run loops for carousel (use params for diff)
