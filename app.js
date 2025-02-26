// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear un array vacío para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigo a la lista
function agregarAmigo() {
    // Obtener el valor ingresado en el input
    const nombreAmigo = document.getElementById('amigo').value;

    // Agregar el nombre al array
    amigos.push(nombreAmigo);

    // Crear un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = nombreAmigo;

    // Agregar el nuevo elemento al <ul> con id 'listaAmigos'
    document.getElementById('listaAmigos').appendChild(li);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';
}
