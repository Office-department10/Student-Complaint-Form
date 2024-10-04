const scriptURL = 'https://script.google.com/macros/s/AKfycbxZzEnvoNwxzuCr0X_6I547L9BsuoRrWQYKG-JsD2A_y4Zb7uViE_nwYaHrQCek-c63/exec'


const form = document.forms['Student complaint form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
