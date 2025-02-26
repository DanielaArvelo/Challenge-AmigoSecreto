// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Función para agregar amigo a la lista
function agregarAmigo() {
    // Obtener el valor ingresado en el input
    const nombreAmigo = document.getElementById('amigo').value;
    
    // Crear un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = nombreAmigo;

    // Agregar el nuevo elemento al <ul> con id 'listaAmigos'
    document.getElementById('listaAmigos').appendChild(li);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';
}
