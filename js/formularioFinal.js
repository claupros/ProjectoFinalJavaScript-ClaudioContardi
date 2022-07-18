titulo.innerText = "BANCO AQUA"
tituloDos.innerText = "FINALIZAR PEDIDO"
//!-------------------------------👇SECTOR INPUT VACIO---------------------------------/
 function submitForm(event){
    event.preventDefault();
     window.location="formularioDos.html";
}
  
//!-------------------------------👇SECTOR MENU-------------------------------/
menu.addEventListener('click', () => {
    Swal.fire({
        background: "#D7E1EC",
        title: 'Menu ILUSTRATIVO',
        icon: 'warning',
        color: 'whith',
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: 'top-start',
        customClass: {
            popup: 'popup-class',
        }
    })
})

//!-------------------------------👇SECTOR STORAGE-------------------------------/
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

//!-------------------------------👇SECTOR ANUNCIOS (NO JSON)-------------------------------/
Swal.fire({
    title: 'Camara SONY',
    icon: undefined,
    footer: 'Anuncio',
    width: '300px',
    padding: '1rem',
    background: '#ffc107',
    grow: false,
    backdrop: false,
    timer: 5000,
    timerProgressBar: true,
    toast: false,
    position: 'center-start',
    allowOutsideClick: false,
    allowEscapeKey: false,
    stopKeydownPropagation: false,
    showConfirmButton: false,
    showCancelButton: false,
    showCloseButton: true,
    html: `<a href="https://www.mercadolibre.com.ar" target="_blank" class="anim btn btn-primary">Comprar ahora</a>`,
    closeButtonAriaLabel: 'cerrar esta alerta',
    imageUrl: 'img/camarauno.jpg',
    imageWidth: '100%',
    imageAlt: 'imagen de una camara fotografica',
});

setTimeout(() => {
    Swal.fire({
        title: 'Alimento Balanceado',
        icon: undefined,
        footer: 'Anuncio',
        width: '300px',
        padding: '1rem',
        background: '#ffc107',
        grow: false,
        backdrop: false,
        timer: 5000,
        timerProgressBar: true,
        toast: false,
        position: 'top-end',
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
        showConfirmButton: false,
        showCancelButton: false,
        showCloseButton: true,
        html: `<a href="https://www.mercadolibre.com.ar" target="_blank" class="anim btn btn-primary">Comprar ahora</a>`,
        closeButtonAriaLabel: 'cerrar esta alerta',
        imageUrl: 'img/alimento.png',
        imageWidth: '100%',
        imageAlt: 'imagen de producto alimenticio',
    })
}, 8000);
setInterval(() => {
    Swal.fire({
        title: 'Camara SONY PRO',
        icon: undefined,
        footer: 'Anuncio',
        width: '300px',
        padding: '1rem',
        background: '#ffc107',
        grow: false,
        backdrop: false,
        timer: 5000,
        timerProgressBar: true,
        toast: false,
        position: 'bottom-end',
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
        showConfirmButton: false,
        showCancelButton: false,
        showCloseButton: true,
        html: `<a href="https://www.mercadolibre.com.ar" target="_blank" class="anim btn btn-primary">Comprar ahora</a>`,
        closeButtonAriaLabel: 'cerrar esta alerta',
        imageUrl: 'img/camara.png',
        imageWidth: '100%',
        imageAlt: 'imagen de una camara fotografica',
    });
}, 13000);


