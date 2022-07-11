titulo.innerText = "BANCO AQUA"
tituloDos.innerText = "FINALIZAR PEDIDO"

const focoEnCampos = () => {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "button") {
            campo.addEventListener("focus", () => campo.className = "form-select")
            campo.addEventListener("blur", () => campo.className = "")
        }
    }
}
focoEnCampos()

menu.addEventListener('click', () => {  //*UTILIZANDO LIBRERIA PARA CUADRO DE ALERTA*/
    Swal.fire({
        background: "#D7E1EC",
        title: 'Menu ILUSTRATIVO',
        // width: '25%',
        icon: 'warning',
        color: 'whith',
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: 'top-end',
        // confirmButtonText: 'ok',
        customClass: {
            popup: 'popup-class',
        }
    })
})

document.addEventListener("button", (e) => {
    e.preventDefault()
    guardarDatosUsuario()
})

function guardarDatosUsuario() {
    const datosUsuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        telefono: inputTelefono.value,
        email: inputEmail.value,
    }
    let aTexto = JSON.stringify(datosUsuario)
    localStorage.setItem("registroUsr", aTexto)
}

function recuperoDatosUsuario() {
    if (localStorage.getItem("registroUsr")) {
        const datosUsuario = JSON.parse(localStorage.getItem("registroUsr"))
        inputNombre.value = datosUsuario.nombre
        inputApellido.value = datosUsuario.apellido
        inputTelefono.value = datosUsuario.telefono
        inputEmail.value = datosUsuario.email
    }

}

recuperoDatosUsuario()

//***** ALERTA 1 publicidad formularioFinal *******/

Swal.fire({   /** anuncio */
    title: 'Camara SONY',
    // text:
    // html:'<div id="contenido" class="parent absolute row bottom-0"></div>',
    icon: undefined,
    // confirmButtonText:
    footer: 'Anuncio',
    width: '300px',
    padding: '1rem',
    background: '#fff',
    grow: false,
    backdrop: false,
    timer: 5000,
    timerProgressBar: true,
    toast: false,
    position: 'bottom-end',
    allowOutsideClick: false,
    allowEscapeKey: false,
    // allowEnterKey:
    stopKeydownPropagation: false,
    // input:
    // inputPlaceholder:
    // inputValue:
    // inputOptions:
    //  customClass:
    // 	container:
    // 	popup:
    // 	header:
    // 	title:
    // 	closeButton:
    // 	icon:
    // 	image:
    // 	content:
    // 	input:
    // 	actions:
    // 	confirmButton:
    // 	cancelButton:
    // 	footer:	

    showConfirmButton: false,
    // confirmButtonColor:
    // confirmButtonAriaLabel:

    showCancelButton: false,
    // cancelButtonText:
    // cancelButtonColor:
    // cancelButtonAriaLabel:

    // buttonsStyling:
    showCloseButton: true,
    closeButtonAriaLabel: 'cerrar esta alerta',


    imageUrl: 'img/Camara.png',
    imageWidth: '100%',
    // imageHeight:
    imageAlt: 'imagen de una camara fotografica',
});

//***** ALERTA 2 publicidad formularioFinal *******/
setTimeout(() => {
    Swal.fire({   /** anuncio */
        title: 'Alimento Balanceado',
        // text:
        // html:'<div id="contenido" class="parent absolute row bottom-0"></div>',
        icon: undefined,
        // confirmButtonText:
        footer: 'Anuncio',
        width: '300px',
        padding: '1rem',
        background: '#fff',
        grow: false,
        backdrop: false,
        timer: 5000,
        timerProgressBar: true,
        toast: false,
        position: 'top-end',
        allowOutsideClick: false,
        allowEscapeKey: false,
        // allowEnterKey:
        stopKeydownPropagation: false,
        // input:
        // inputPlaceholder:
        // inputValue:
        // inputOptions:
        //  customClass:
        // 	container:
        // 	popup:
        // 	header:
        // 	title:
        // 	closeButton:
        // 	icon:
        // 	image:
        // 	content:
        // 	input:
        // 	actions:
        // 	confirmButton:
        // 	cancelButton:
        // 	footer:	

        showConfirmButton: false,
        // confirmButtonColor:
        // confirmButtonAriaLabel:

        showCancelButton: false,
        // cancelButtonText:
        // cancelButtonColor:
        // cancelButtonAriaLabel:

        // buttonsStyling:
        showCloseButton: true,
        closeButtonAriaLabel: 'cerrar esta alerta',


        imageUrl: 'img/alimento.png',
        imageWidth: '100%',
        // imageHeight:
        imageAlt: 'imagen de producto alimenticio',
    })
}, 6000);
setInterval(() => {
    Swal.fire({   /** anuncio */
        title: 'Camara SONY',
        // text:
        // html:'<div id="contenido" class="parent absolute row bottom-0"></div>',
        icon: undefined,
        // confirmButtonText:
        footer: 'Anuncio',
        width: '300px',
        padding: '1rem',
        background: '#fff',
        grow: false,
        backdrop: false,
        timer: 5000,
        timerProgressBar: true,
        toast: false,
        position: 'bottom-end',
        allowOutsideClick: false,
        allowEscapeKey: false,
        // allowEnterKey:
        stopKeydownPropagation: false,
        // input:
        // inputPlaceholder:
        // inputValue:
        // inputOptions:
        //  customClass:
        // 	container:
        // 	popup:
        // 	header:
        // 	title:
        // 	closeButton:
        // 	icon:
        // 	image:
        // 	content:
        // 	input:
        // 	actions:
        // 	confirmButton:
        // 	cancelButton:
        // 	footer:	

        showConfirmButton: false,
        // confirmButtonColor:
        // confirmButtonAriaLabel:

        showCancelButton: false,
        // cancelButtonText:
        // cancelButtonColor:
        // cancelButtonAriaLabel:

        // buttonsStyling:
        showCloseButton: true,
        closeButtonAriaLabel: 'cerrar esta alerta',


        imageUrl: 'img/Camara.png',
        imageWidth: '100%',
        // imageHeight:
        imageAlt: 'imagen de una camara fotografica',
    });
}, 11000);

//! MATERIAL DE APOYO EJEMPLOS NO ACTIVAR 👇👇👇👇👇👇👇👇
// localStorage.setItem("Nombre", inputNombre.value)  //*********ALMACENA LOS DATOS DEL INPUT */
// localStorage.setItem("Apellido", inputApellido.value)//*********ALMACENA LOS DATOS DEL INPUT */
// localStorage.setItem("Telefono", inputTelefono.value)//*********ALMACENA LOS DATOS DEL INPUT */
// localStorage.setItem("Email", inputEmail.value)//*********ALMACENA LOS DATOS DEL INPUT */

// inputNombre.value = localStorage.getItem("Nombre")  //*********RECUPERA LOS DATOS GUARDADOS */
// inputApellido.value = localStorage.getItem("Apellido")//*********RECUPERA LOS DATOS GUARDADOS */
// inputTelefono.value = localStorage.getItem("Telefono")//*********RECUPERA LOS DATOS GUARDADOS */
// inputEmail.value = localStorage.getItem("Email")//*********RECUPERA LOS DATOS GUARDADOS */
// JSON.stringify //*(convierte a cadena de texto los datros guardados ejemplo: [object Object] lo pasa: {"nombre":"Esteban","apellido":"Rojas","telefono":"66666666","email":"quiensoy@loco.net"}*/
// JSON.parse //*(el ejemplo de stringify pero a la inversa)*/
//! MATERIAL DE APOYO EJEMPLOS NO ACTIVAR 👆👆👆👆👆👆👆👆

