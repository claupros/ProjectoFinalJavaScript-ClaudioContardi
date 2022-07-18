

//!---------------------------------👇SECTOR MENU -------------------------------------/
titulo.innerText = "BANCO AQUA"
tituloDos.innerText = "PRESTAMO PERSONAL"

menu.addEventListener('click', () => {
    Swal.fire({
        background: "#D7E1EC",
        title: 'Menu ILUSTRATIVO',
        icon: 'warning',
        color: 'whith',
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: 'top-start',
        timerProgressBar: true,
        customClass: {
            popup: 'popup-class',
        }
    })
})

//!--------------------------👇SECTOR TABLA DE RESULTADOS----------------------------/
btnCalcular.addEventListener('click', () => {
    //debugger
    monto.value === '' || cuotas.value === '' || interes.value === '' ? //*CODIGO SIMPLIFICADO*/
        Swal.fire({
            background: "#D7E1EC",
            title: '👉Complete los campos para continuar',
            icon: 'warning',
            toast: true,
            confirmButtonText: 'Ok',
            color: 'whith',
            with: '30%',
            customClass: {
                popup: 'popup-class',
            }
        }) : calcularCronograma(monto.value, interes.value, cuotas.value) //*CODIGO SIMPLIFICADO*/
})

function calcularCronograma(monto, interes, cuotas) {

    while (llenarTabla.firstChild) {
        llenarTabla.removeChild(llenarTabla.firstChild);
    }
    let mesActual = dayjs().add(1, 'month')
    let amortizacionConstante, pagoInteres, cuota;
    amortizacionConstante = monto / cuotas;
    for (let i = 1; i <= cuotas; i++) {
        pagoInteres = monto * (interes / 100);
        cuota = amortizacionConstante + pagoInteres;
        monto = monto - amortizacionConstante;
        let fecha = mesActual.format('DD-MM-YYYY')
        mesActual = mesActual.add(1, 'month')
        const rowt = document.createElement('tr');
        rowt.innerHTML = `
            <td>${fecha}</td>
            <td>${amortizacionConstante.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(rowt);
    }
}

//!--------------------------------👇 SECTOR API de JSON----------------------------/
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        obtenerContenido(URL)
    }, 8000);
    setInterval(() => {
        obtenerContenido(URL)
    }, 4000);
})

const retornoCardContenido = (contenido) => {
    const { imagen, titulo, genero } = contenido
    return `<div class="index card text-dark bg-warning mb-3" style="max-width: 18rem;">
    <button type="button" class=" btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    <img src=${imagen} class="rounded me-2" alt="publicidad">
     <div class="card-body">
       <h5 class="card-title"> ${titulo}</h5>
       <a href="https://www.mercadolibre.com.ar" target="_blank" class="btn btn-primary">Comprar ahora</a>
       <p class="card-text">${genero}</p>
     </div>
   </div>`
}

const retornoCardError = () => {
    return `<div class="center white-text"> 
                <br><br><br><br> 
                <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                <br><br> 
                <i class="large material-icons">sentiment_very_dissatisfied</i> 
                <br><br> 
            </div>`
}

const obtenerContenido = (URL) => {
    let cardsAmostrar = ""
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            for (contenido of data)
                cardsAmostrar += retornoCardContenido(contenido)
            contenidoDOM.innerHTML = cardsAmostrar
        })
        .catch((error) => contenidoDOM.innerHTML = retornoCardError())
        .finally(() => retornoCardContenido(contenido))
}






























