// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;
    if (!amigo) {
        alert('Por favor inserte un nombre');
    } else {
        amigos.push(amigo);
        inputAmigo.value = '';
        inputAmigo.focus();
    }
}