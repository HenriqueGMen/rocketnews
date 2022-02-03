const email = document.querySelector('#input-email');
const button = document.querySelector('.button')

button.addEventListener('click', function(e) {
  e.preventDefault()
 
  if (!email.value) {
    alert('Email não enviado')
    return false
   }
   
   email.value = ''
   alert('Email enviado!')  
})