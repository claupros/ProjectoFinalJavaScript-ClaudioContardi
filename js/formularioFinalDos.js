//!--------------------------👇SECTOR CONTENIDO DOM----------------------------/
function formDos() {  
let contenidoDom2 = document.createElement('section');
final.innerHTML += `<form action="#" class="color-formulario z-depth-2">
          <div class="tablaFinal h2final" >
             "¡¡Gracias por elegirnos!! Nos comunicaremos a la brevedad"
          </div>
         </form>`
};
formDos()
//!-------------------------------👇SECTOR MENU-------------------------------/
    Swal.fire({
        background: "#D7E1EC",
        title: '¡ Seleccione REGRESAR para volver a Home!👇',
        color: 'whith',
        timer: 7000,
        timerProgressBar: true,
        showConfirmButton: false,
        toast: true,
        position: 'top-start',
        customClass: {
            popup: 'popup-class',
        }
    })

    
