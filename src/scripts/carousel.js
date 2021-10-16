const carouselBtns = document.querySelectorAll('.crsl-btn')
const carouselCnt = document.querySelectorAll('.feat_dynamic')
const carouselImgs = document.querySelectorAll('.feat_illustration')
const classList = (el, act, val) => el.classList[act](val)
const resetStyles = (list, action, className) => {
   for (const el of list) classList(el, action, className)
}

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

export default function listener(e) {
   const target = e.target
   if (target.matches('.crsl-btn')) {
      resetStyles(carouselBtns, 'remove', 'active')
      classList(target, 'add', 'active')
      carouselMethods.action(target.id)
   }
}
