// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;
    if (!amigo) {
        alert('Por favor inserte un nombre');
        return;
    } else {
        amigos.push(amigo);
        inputAmigo.value = '';
        inputAmigo.focus();
        mostrarAmigos();
    }
    return;
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
    return;
}

function sortearAmigo() {
    if(amigos.length === 0){
        alert('Agrega varios amigos para realizar el sorteo');
        return;
    }else{
        let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = "";
        return;
    }
}