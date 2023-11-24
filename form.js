/* CORRIEGIENDO ARCHIVOS

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")
const form = document.getElementById("form")

const warningName = document.getElementById("warning-name")
const warningEmail = document.getElementById("warning-email")
const warningMessage = document.getElementById("warning-message")


form.addEventListener("submit", e => {
    e.preventDefault()

    let enviar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    
    warningName.innerHTML = ""
    warningEmail.innerHTML = ""
    warningMessage.innerHTML = ""

    
    if(nombre.value.length <3){
        warningName.innerHTML += `El nombre no es válido! <br>`
        enviar = true
    }
    if(!regexEmail.test(email.value)){
        warningEmail.innerHTML += `El email no es válido! <br>`
        enviar = true
    }
   

    if(enviar){
        
    }else{
        parrafo.innerHTML = "Enviado";
    }
})
*/
