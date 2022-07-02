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

menu.addEventListener('click', () => { //*UTILIZANDO LIBRERIA PARA CUADRO DE ALERTA*/
    Swal.fire({
        title: 'Menu ILUSTRATIVO',
        width: 400,
        icon: 'warning',
        color: '#ffffff',
        confirmButtonText: 'ok'
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

