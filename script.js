// script.js

function encriptarTexto() {
    // Obtener el texto del textarea
    let texto = document.getElementById("contenidoTextual").value;

    // Definir el diccionario de encriptación
    const encriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Variable para almacenar el texto encriptado
    let textoEncriptado = '';

    // Recorrer cada caracter del texto ingresado
    for (let char of texto) {
        // Si el caracter está en el diccionario de encriptación, agregar su valor encriptado
        if (encriptacion[char]) {
            textoEncriptado += encriptacion[char];
        } else {
            // Si no, agregar el caracter tal cual
            textoEncriptado += char;
        }
    }

    // Mostrar el resultado en el párrafo
    document.getElementById("resultado").innerText = textoEncriptado;
}

function desencriptarTexto() {
    // Obtener el texto del textarea
    let texto = document.getElementById("contenidoTextual").value;

    // Definir el diccionario de desencriptación
    const desencriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Variable para almacenar el texto desencriptado
    let textoDesencriptado = texto;

    // Reemplazar cada clave del diccionario por su valor correspondiente
    for (let clave in desencriptacion) {
        textoDesencriptado = textoDesencriptado.split(clave).join(desencriptacion[clave]);
    }

    // Mostrar el resultado en el párrafo
    document.getElementById("resultado").innerText = textoDesencriptado;
}

function copiarTexto() {
    // Selecciona el elemento <p> cuyo texto quieres copiar
    const resultadoP = document.getElementById('resultado');
    
    // Crea un elemento de texto temporal para seleccionar el contenido
    const tempInput = document.createElement('textarea');
    tempInput.value = resultadoP.textContent;
    document.body.appendChild(tempInput);
    
    // Selecciona el texto del elemento temporal
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles
    
    // Copia el texto al portapapeles
    document.execCommand('copy');
    
    // Elimina el elemento temporal
    document.body.removeChild(tempInput);
    
    // Opcional: Mostrar una notificación al usuario
    alert('Texto copiado al portapapeles!');
}

// Agrega un event listener al botón de copiar
document.getElementById('copiarBoton').addEventListener('click', copiarTexto);

function validarTexto(textarea) {
    const regex = /^[a-z\s]*$/;
    if (!regex.test(textarea.value)) {
      textarea.value = textarea.value.replace(/[^a-z\s]/g, '');
    }
  }
