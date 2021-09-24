const input = document.querySelector('#email')
const form = document.querySelector('.form')
const regex =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function isValid(e) {
   if (!regex.test(input.value)) {
      e.preventDefault()
      input.classList.add('error')
      const errMsg = document.createElement('p')
      errMsg.innerText = `Whoops, make sure it's an email`
      errMsg.classList.add('error-msg')
      form.append(errMsg)
      input.value = null
   }
}

form.addEventListener('submit', isValid)
