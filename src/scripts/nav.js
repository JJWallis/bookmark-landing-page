const body = document.querySelector('body')
const header = document.querySelector('.hdr_cnt')
const logo = document.querySelector('.hdr_logo-bm')
const classList = (el, act, val) => el.classList[act](val)
const viewport = () => window.innerWidth

window.addEventListener('resize', () => {
   const vp = viewport()
   if (vp >= 879) logo.style.opacity = 1
})

export default function nav(e) {
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
}
