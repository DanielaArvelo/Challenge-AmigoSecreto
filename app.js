// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear un array vacío para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigo a la lista
function agregarAmigo() {
    // Obtener el valor ingresado en el input
    const nombreAmigo = document.getElementById('amigo').value;

    // Validar si el campo está vacío
    if (nombreAmigo.trim() === "") {
        // Mostrar un mensaje de error si el campo está vacío
        alert("Por favor, inserte un nombre.");
    } else {
        // Verificar si el nombre ya está en el array 'amigos'
        if (amigos.includes(nombreAmigo)) {
            alert("Este amigo ya ha sido agregado.");
        } else {
            // Agregar el nombre al array
            amigos.push(nombreAmigo);

            // Limpiar el campo de entrada
            document.getElementById('amigo').value = '';

            // Actualizar la lista en la interfaz
            actualizarListaAmigos();
        }
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    // Obtener el elemento de la lista donde se mostrarán los amigos
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente (eliminar los elementos actuales)
    lista.innerHTML = "";

    // Iterar sobre el arreglo 'amigos' y agregar cada amigo como un <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i]; // Establecer el texto del <li> como el nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista HTML
    }
}
