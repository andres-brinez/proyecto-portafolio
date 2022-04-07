const formulario = document.getElementById('form')

formulario.addEventListener('submit', (evento) => {


    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const asunt = document.getElementById('asunto')
    const mensaje = document.getElementById('mensaje')

    //validar
    let mensajes = [];
    const mensajesError = {
        name: 'No has escrito tu nombre ',
        email: 'No has escrito tu correro electronico ',
        asunt: 'No has escrito el asunto del mensaje ',
        mensaje: 'No has escrito el mensaje',
    }

    if (name.value.length == 0) {
        name.classList.add("input-container--invalid");
        mensajes.push(mensajesError.name)
    }

    else {
        mensajes.splice(mensajesError.name)
        name.classList.remove("input-container--invalid");
    }
    if (email.value.length == 0) {
        email.classList.add("input-container--invalid");
        mensajes.push(mensajesError.email)
    }
    else {
        mensajes.splice(mensajesError.email)
        email.classList.remove("input-container--invalid");
    }
    if (asunt.value.length == 0) {
        asunt.classList.add("input-container--invalid");
        mensajes.push(mensajesError.asunt)
        
    }
    else {
        mensajes.splice(mensajesError.asunt)
        asunt.classList.remove("input-container--invalid");
    }
    if (mensaje.value.length == 0) {
        mensaje.classList.add("input-container--invalid");
        mensajes.push(mensajesError.mensaje)
    }
    else {
        mensajes.splice(mensajesError.mensaje)
        mensaje.classList.remove("input-container--invalid");
    }

    //mostrar mensajes

    if (mensajes.length > 0) {
        evento.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            html:
                mensajes[0] + '<br>', //muestra solo el primer mensaje

        })


    }
    if (mensajes.length == 0) {
        evento.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado ',
            text: 'Me  pondré en contacto con tigo lo mas  pronto posible!',
        })

        name.value = ''
        email.value = ''
        asunt.value = ''
        mensaje.value = ''


    }






})
