document.addEventListener('DOMContentLoaded', function () {
    const newsForm = document.getElementById('news-form');

    newsForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email-form').value;

        if (validateEmail(email)) {
            // se simula el envío del formulario
            simulateFormSubmission(email);
        } else {
            // si la validación falla, muestra un SweetAlert de error
            Swal.fire({
                icon: 'error',
                title: 'Error de suscripción',
                text: 'Por favor, ingresa una dirección de correo electrónico válida.',
            });
        }
    });

    function validateEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    function simulateFormSubmission(email){
        setTimeout(function(){
            swal.fire({
                icon: 'success',
                title: '¡Gracias por suscribirte!',
                text: 'Pronto recibirás nuestras últimas noticias y ofertas.',
            });

            newsForm.reset();
        }, 1500); 
    }
});