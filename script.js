document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtiene los datos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Prepara el mensaje de WhatsApp
    var whatsappMessage = `Hola, mi nombre es ${nombre}. Mi correo es ${email}. Quisiera hacer la siguiente consulta sobre el servicio de diseños web: ${mensaje}`;

    // Número de teléfono al que se enviará el mensaje (coloca tu número de WhatsApp)
    var telefono = "543794884299"; // Reemplaza con tu número en formato internacional (código de país)

    // URL de WhatsApp con el mensaje prellenado
    var whatsappURL = `https://wa.me/${telefono}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirige a WhatsApp
    window.open(whatsappURL, '_blank');
});