import { validar } from "./2-validar-formulario.js";


const formulario = document.getElementById('form')

formulario.addEventListener('submit', (evento) => {


    const name = document.getElementById('name');
    const email= document.getElementById('email');
    const asunt = document.getElementById('asunto')
    const mensaje = document.getElementById('mensaje')

    validar(name,email,asunt,mensaje,evento);
    
   
   
})
