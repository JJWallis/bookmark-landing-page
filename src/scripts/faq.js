import Arrow from '../images/icon-arrow.svg'
import ArrowClose from '../images/icon-arrow-close.svg'
const classList = (el, act, val) => el.classList[act](val)

export default function faq(e) {
   const target = e.target
   if (target.matches('.faq_btn')) {
      const arrow = target.children[target.children.length - 1]
      arrow.src.includes(Arrow) ? (arrow.src = ArrowClose) : (arrow.src = Arrow)
      classList(arrow, 'toggle', 'arrow-down')
      classList(target.nextElementSibling, 'toggle', 'hidden')
   }
}
