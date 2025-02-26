// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear un array vacío para almacenar los nombres de los amigos
let amigos = [];
let sorteado = false;  // Variable para saber si ya se ha sorteado un amigo

// Función para agregar amigo a la lista
function agregarAmigo() {
    // Obtener el valor ingresado en el input
    const nombreAmigo = document.getElementById('amigo').value;

    // Validar si el campo está vacío
    if (nombreAmigo.trim() === "") {
        // Mostrar un mensaje de error si el campo está vacío
        alert("Por favor, inserte un nombre.");
    } else {
        // Verificar si el nombre ya existe en el array 'amigos'
        if (amigos.includes(nombreAmigo)) {
            // Si el nombre ya está en la lista, mostrar una alerta
            alert("Este amigo ya ha sido agregado.");
        } else {
            // Si ya se sorteó, reiniciar la lista con solo el nuevo amigo
            if (sorteado) {
                amigos = [nombreAmigo];  // Reiniciar el array con solo el nuevo amigo
                sorteado = false; // Resetear la variable de sorteado
            } else {
                // Si no se ha sorteado, solo añadir el nuevo amigo sin reiniciar la lista
                amigos.push(nombreAmigo);
            }

            // Limpiar el campo de entrada
            document.getElementById('amigo').value = '';

            // Limpiar el resultado anterior si ya fue sorteado
            document.getElementById('resultado').innerHTML = '';

            // Actualizar la lista de amigos en la interfaz
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

// Función para sortear un amigo secreto aleatoriamente
function sortearAmigo() {
    // Verificar si el array 'amigos' no está vacío
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
    } else {
        // Generar un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtener el amigo sorteado
        const amigoSorteado = amigos[indiceAleatorio];

        // Mostrar el resultado en el HTML
        document.getElementById('resultado').innerHTML = `Amigo secreto sorteado: <strong>${amigoSorteado}</strong>`;

        // Marcar que ya se sorteó
        sorteado = true;
    }
}
