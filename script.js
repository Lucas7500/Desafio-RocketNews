const sendButton = document.getElementById("button-bg")
const readFirst = document.getElementById("read-first")

sendButton.addEventListener("click", send)
readFirst.addEventListener("click", noNews)

function send() {
  alert("Email Enviado")
  document.location.reload(true)
  return
}

function noNews() {
  return alert("A notícia de hoje ainda não foi lançada.")
}
