const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');
const botonCopiar = document.getElementById('copiar');
const texto = document.getElementById('text-area');

const mostrarBox = document.getElementById('mostrar-mensaje');
const divMensaje = document.getElementsByClassName('div-mensajes');
const muñeco = document.getElementById("muñeco");

muñeco.hidden = false;
mostrarBox.hidden = true;

let mensajeEncriptado = [];
let mensajeDesencriptado = [];
botonCopiar.hidden = true;


botonEncriptar.addEventListener('click', () => {

    encriptarMensaje();
    console.log(mensajeEncriptado);
    texto.value = "";
    
   
  
    muñeco.hidden = true;
    mostrarBox.hidden = false;
    mostrarBox.innerHTML = mensajeEncriptado;
    
    botonCopiar.hidden = false;




}
);


botonCopiar.addEventListener('click', () => {
let mensaje = mostrarBox.innerHTML;
texto.value = mensaje;


});


botonDesencriptar.addEventListener('click', () => {
    desencriptarMensaje();
    console.log(mensajeDesencriptado);
    texto.value = "";
    
   
  
    muñeco.hidden = true;
    mostrarBox.hidden = false;
    mostrarBox.innerHTML =mensajeDesencriptado;
    
    botonCopiar.hidden = false;


});


function encriptarMensaje(){
    let mensaje = texto.value;

    mensajeEncriptado = [];
    for (let i = 0; i < mensaje.length; i++) {
        if(mensaje[i] === 'a') mensajeEncriptado.push("ai");
        else if(mensaje[i] === 'e') mensajeEncriptado.push("enter");
        else if(mensaje[i] === 'i') mensajeEncriptado.push("imes");
        else if(mensaje[i] === 'o') mensajeEncriptado.push("ober");
        else if(mensaje[i] === 'u') mensajeEncriptado.push("ufat");
        else mensajeEncriptado.push(mensaje[i]);

    }
    mensajeEncriptado = mensajeEncriptado.join('');

    console.log(mensajeEncriptado);
    return mensajeEncriptado;
}

function desencriptarMensaje(){
    let mensaje = texto.value;
   let i = 0;
   mensajeDesencriptado=[];

   while (i < mensaje.length) {
       if(mensaje[i] === 'a') {
        mensajeDesencriptado.push("a");
        i ++;}
       else if(mensaje[i] === 'e') {
        mensajeDesencriptado.push("e");
        i += 4;}
       else if(mensaje[i] === 'i'){ 
        mensajeDesencriptado.push("i");
        i += 3;}
       else if(mensaje[i] === 'o') {
        mensajeDesencriptado.push("o")
        i += 3;}
       else if(mensaje[i] === 'u') {
        mensajeDesencriptado.push("u");
        i += 3;}
       else mensajeDesencriptado.push(mensaje[i]);
         i++;
   }
    mensajeDesencriptado = mensajeDesencriptado.join('');
    return mensajeDesencriptado;
};