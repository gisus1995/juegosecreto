let numeroSecreto= 0;
let intentos= 0;
let numeroMaximo=10;
let listaNumerosSorteados=[];



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numerodeusuario= parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto===numerodeusuario){
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numerodeusuario>numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        } else{
            asignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos ++;
        LimpiarCaja();
    }
    return;
}

function LimpiarCaja(){
    document.querySelector('#valorUsuario').value= '';
}


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10+1);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros');
    }
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`indica un mensaje del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
    LimpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();