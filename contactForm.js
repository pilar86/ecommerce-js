const nombre = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")
const form = document.getElementById("form")
const warningNameContainer = document.getElementById("warning-name-container");
const warningEmailContainer = document.getElementById("warning-email-container");
const warningMessageContainer = document.getElementById("warning-message-container");


form.addEventListener("submit", e=>{
    e.preventDefault();

    let enviar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
    warningNameContainer.innerHTML = "";
    warningEmailContainer.innerHTML = "";
    warningMessageContainer.innerHTML = "";

    
    if(nombre.value.length <=3){
        warningNameContainer.innerHTML += `El nombre no es valido <br>`
        enviar = true;
    }
    if(!regexEmail.test(email.value)){
        warningEmailContainer.innerHTML+= `El email no es valido <br>`
        enviar = true;
    }
    if(enviar){
        warningMessageContainer.innerHTML = "Por favor, asegurese de que la información de los campos sea correcta y estén completos.";
    }else{
        warningMessageContainer.innerHTML = "";
        envio();
    }
});


function envio(){
    Swal.fire({
        title: 'Mensaje enviado!',
        text: 'Revise su casilla de correo',
        icon:'success',
        timer:5000
     });
}
