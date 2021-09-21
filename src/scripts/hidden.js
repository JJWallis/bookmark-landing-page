const header = document.querySelector('.hdr_cnt')
const mobileNav = document.querySelector('.hdr_mobile-nav-ct')
const classList = (el, act, val) => el.classList[act](val)
const viewport = () => window.innerWidth

header.addEventListener('click', e => {
   if (viewport() < 800) {
      if (e.target.matches('.hamburger-btn') || e.target.matches('.btn-hmb')) {
         classList(mobileNav, 'remove', 'hidden')
      } else if (
         e.target.matches('.close-btn') ||
         e.target.matches('.icn-close')
      ) {
         classList(mobileNav, 'add', 'hidden')
      }
   }
})

// Opactity for hamburger + logo vs hidden class
// Match viewport size to CSS breakpoints
// Modules to export
