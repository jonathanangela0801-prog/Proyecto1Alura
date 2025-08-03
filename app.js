// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Paso 1: Declarar el array para almacenar los nombres
let amigos = [];

// Paso 2: Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

// Paso 3: Mostrar la lista de amigos en el DOM
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Paso 4: Función para sortear un amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultados previos

    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const li = document.createElement('li');
    li.textContent = `🎉 El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}
