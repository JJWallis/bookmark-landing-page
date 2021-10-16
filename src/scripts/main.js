import validate from './validation'
import carousel from './carousel'
import faq from './faq'
import nav from './nav'

document.querySelector('.hdr_cnt').addEventListener('click', nav)
document.querySelector('.crsl-btns-ct').addEventListener('click', carousel)
document.querySelector('.faq_qstns-ct').addEventListener('click', faq)
document.querySelector('.form').addEventListener('submit', validate)
