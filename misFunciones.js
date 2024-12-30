
// // Se selecciona lo que se va usar , el boton y el formulario llamados por su id
// const boton = document.getElementById('registro');
// const NOMBRE= document.getElementById('nombres');
// const APELLIDO= document.getElementById('apellido');
// const CORREO= document.getElementById('correo');
// const CLAVE= document.getElementById('contraseña');

// let nombreGuardado
// let apellidoGuardado
// let correoGuardado
// let claveGuardada

//     // : Leer lo que escribió el usuario en el campo de texto
// nombreGuardado = NOMBRE.value;
// apellidoGuardado = APELLIDO.value
// correoGuardado = CORREO.value
// claveGuardada = CLAVE.value








// // Paso 2: Agregamos un "evento" al botón
// // Este evento hará algo cuando se haga clic en el botón
// boton.addEventListener('click',async function() {


//  // Paso 4: Guardar el texto en una variable
// //  guardado = textoIngresado;

//  // Paso 5: Mostrar el valor guardado en la consola (o hacer algo más con él)
//  console.log('Texto guardado:', nombreGuardado, apellidoGuardado,correoGuardado,claveGuardada);


//    // 2. Enviamos el nombre al servidor
//    try {
//     const respuesta = await fetch('http://localhost:3000/guardar', {
//         method: 'POST', // Especificamos que estamos enviando datos
//         headers: {
//             'Content-Type': 'application/json', // Indicamos que el contenido es JSON
//         },
//         body: JSON.stringify({ NOMBRE:nombreGuardado, APELLIDO:apellidoGuardado, CORREO:correoGuardado, CLAVE:claveGuardada }), // Convertimos el nombre a formato JSON
        
//     });

//     const resultado = await respuesta.text(); // Leemos la respuesta del servidor
//     console.log("Respuesta del servidor:", resultado); // Mostramos la respuesta en la consola
// } catch (error) {
//     console.error("Error al enviar los datos:", error); // Mostramos cualquier error en la consola
// }
// });


// document.addEventListener('DOMContentLoaded', function(){

//     console.log("Pagina Cargada")
//    boton.addEventListener('click', error);
    
// })




// Se selecciona lo que se va usar, el botón y los campos del formulario por su id
const boton = document.getElementById('registro');
const NOMBRE = document.getElementById('nombres');
const APELLIDO = document.getElementById('apellido');
const CORREO = document.getElementById('correo');
const CLAVE = document.getElementById('contraseña');

// Función para validar si un campo tiene texto válido
function textValido(texto) {
    return texto != null && texto.trim() !== ""; // .trim() elimina espacios en blanco al inicio y final
}

// Función para mostrar un mensaje de error
function mostrarError(mensaje) {
    const errorDiv = document.getElementById('Error');
    errorDiv.innerHTML = `${mensaje}`;
}


        `<br>
        <div class="alert alert-danger" role="alert">
            "El campo 'Nombre' no puede estar vacío.<br>"
        </div>`;



// Función para limpiar el mensaje de error
function limpiarError() {
    const errorDiv = document.getElementById('Error');
    errorDiv.innerHTML = ""; // Limpia el contenedor del error
}

// Función principal para manejar validaciones y errores
function error() {
    // Capturar los valores de los campos dinámicamente
    const nombreGuardado = NOMBRE.value.trim();
    const apellidoGuardado = APELLIDO.value.trim();
    const correoGuardado = CORREO.value.trim();
    const claveGuardada = CLAVE.value.trim();

    let mensajeError = '';

    // Validar cada campo y construir un mensaje de error si está vacío
    if (!textValido(nombreGuardado)) {
        mensajeError +=  `
        <div class=" container alert alert-danger" role="alert">
            El campo 'Nombre' no puede estar vacío.<br>
            
        </div>`;
;
    }
    if (!textValido(apellidoGuardado)) {
        mensajeError +=`
        <style>
        .error{
       font-family:Montserrat;
    
        }
        
        </style>
        <div class=" error container alert alert-danger" role="alert">
            El campo 'Apellido' no puede estar vacío.
        </div>`; ;
    }
    if (!textValido(correoGuardado)) {
        mensajeError +=`
        <div class=" container alert alert-danger" role="alert">
            El campo 'Correo' no puede estar vacío.<br>
        </div>`; ;
    }
    if (!textValido(claveGuardada)) {
        mensajeError +=`
        <div class=" container alert alert-danger" role="alert">
            El campo 'Clave' no puede estar vacío.<br>
        </div>`; ;
    }

    // Si hay errores, mostrar el mensaje de error
    if (mensajeError !== '') {
        mostrarError(mensajeError);
    } else {
        // Si no hay errores, limpiar el mensaje de error y proceder
        limpiarError();
        console.log("Datos validados correctamente:", {
            nombre: nombreGuardado,
            apellido: apellidoGuardado,
            correo: correoGuardado,
            clave: claveGuardada
        });

        // Aquí puedes enviar los datos al servidor
        enviarDatosAlServidor(nombreGuardado, apellidoGuardado, correoGuardado, claveGuardada);
    }
}

// Función para enviar datos al servidor (solo si todo es válido)
async function enviarDatosAlServidor(nombre, apellido, correo, clave) {
    try {
        const respuesta = await fetch('http://localhost:3000/guardar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ NOMBRE: nombre, APELLIDO: apellido, CORREO: correo, CLAVE: clave }),
        });

        const resultado = await respuesta.text();
        console.log("Respuesta del servidor:", resultado);
    } catch (error) {
        console.error("Error al enviar los datos:", error);
    }
}

// Event listener para el botón de registro
document.addEventListener('DOMContentLoaded', function () {
    console.log("Página cargada");
    boton.addEventListener('click', error); // Asigna la función error al evento click del botón
});
