import { mostrar_mensajes } from "./3-mostrar-mensajes.js";

let mensajes = [];


const mensajesError= {
    name:'No has escrito tu nombre ',
    email:'No has escrito tu correro electronico ',
    asunt:'No has escrito el asunto del mensaje ',
    mensaje:'No has escrito el mensaje',
}

export function validar(input1,input2,input3,input4, evento) {
 
    if ( input1.value.length==0){
       mensajes.push(mensajesError.name)
    }

    else{
        mensajes.splice(mensajesError.name)
    }
    if ( input2.value.length==0){
       mensajes.push( mensajesError.email)
     }
     else{
        mensajes.splice( mensajesError.email)
    }
     if ( input3.value.length==0){
        mensajes.push(mensajesError.asunt)
     }
     else{
        mensajes.splice(mensajesError.asunt)
    }
     if ( input4.value.length==0){
      mensajes.push(mensajesError.mensaje)
     }
     else{
        mensajes.splice(mensajesError.mensaje)
    }

mostrar_mensajes(mensajes,evento)


 
}




