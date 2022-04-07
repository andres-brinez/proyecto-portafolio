

export function mostrar_mensajes(mensajes, evento) {
    let input=document.querySelectorAll('input');
    let texArea=document.querySelector('textarea')
    
    
    if (mensajes.length > 0) {
        evento.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            html:
                mensajes[0] + '<br>', //muestra solo el primer mensaje

        })

        
    }
    if(mensajes.length == 0) {
        evento.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado ',
            text: 'Me  pondré en contacto con tigo lo mas  pronto posible!',
        })

        input[0].value='';
        input[1].value='';
        input[2].value='';
        texArea.value='';
        
             
    }

}