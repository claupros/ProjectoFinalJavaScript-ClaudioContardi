

//! MATERIAL DE APOYO EJEMPLOS NO ACTIVAR 👇👇👇👇👇👇👇👇

// class Prestamo {
//     constructor(nombre, apellido, monto, cuotas) {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.monto = monto
//         this.cuotas = cuotas
//         this.intereses = 1.81
//          this.getFactorCrediticio = () => {
//              switch (this.cuotas) {
//                  case 1:
//                      return parseInt(this.cuotas)/ 1
//                  case 3:
//                      return parseInt(this.cuotas)/ 3
//                  case 6:
//                      return parseInt(this.cuotas)/ 6
//                  case 12:
//                      return parseInt(this.cuotas)/ 12
//                  default:
//                      return 0
//              }
//          }
//         this.prestamoAprobado = () => {
//             const factorCrediticio = this.getFactorCrediticio()
//             const resultado = (this.monto * this.intereses) / this.cuotas
//                 return parseFloat(resultado.toFixed(2))
//         }

//     }
// }

// //! variables
// let monto = 0
// let cuotas = 0

// //!app.js
// function nuevoPrestamo() {
//     debugger
//     nombre = prompt("ingrese su nombre")
//     apellido = prompt ("ingrese su apellido")
//     monto = parseInt(prompt("Ingresa el monto a solicitar:"))
//     cuotas = parseInt(prompt("¿que cuota prefieres? 1/ 3/ 6/ 12"))

//     const prestamoSolcitado = new Prestamo(nombre, apellido, monto, cuotas)
//     const prestamoAprobado = prestamoSolcitado.prestamoAprobado()
//     console.log("Valor de cuota a pagar, es: ARS", prestamoAprobado)
// }

// let input1  = document.getElementById("nombre");
// let input2  = document.getElementById("apellido");
// input1.onchange = () => {console.log("valor1")};
// input2.onchange = () => {console.log("valor2")};

//! libreria probar en el codigo👇
// const swa = ()=> {
//     Swal.fire({
//         title: 'complete los campos',
//         // text: 'No se encontró el servidor remoto',
//         // icon: 'error',
//         confirmButtonText: 'Ouch'
//       })
// }

// const toastSA = (mensaje, bgColor, tiempo)=> {
//     Swal.fire({
//         icon: 'error',
//         title: mensaje,
//         position: 'top-end',
//         showConfirmButton: false,
//         toast: true,
//         timer: tiempo || 3000,
//         timerProgressBar: true,
//         background: bgColor || 'white',
//         color: '#ffffff'
//     })
// }
//***PRACTICA */
// let username = "coderhouse"

// if (username === "cosderhouse") {
//     alert("bienvenido" + username)
// }
// else {
//         alert ("no se reconoce")
// }

//*** codigo simplificado   operador ternario*/ */
//username ==="cosderhouse" ? alert("bienvenido" + username) : alert ("no se recconoce") //*opcion 2
//let mensaje = username ==="coderhouse" ? "bienvenido" + username : "no se recconoce" //*opcion 3
//alert(mensaje)
//! MATERIAL DE APOYO EJEMPLOS NO ACTIVAR 👆👆👆👆👆👆👆👆

titulo.innerText = "BANCO AQUA"
tituloDos.innerText = "PRESTAMO PERSONAL"

menu.addEventListener('click', () => {  //*UTILIZANDO LIBRERIA PARA CUADRO DE ALERTA*/
    Swal.fire({
        title: 'Menu ILUSTRATIVO',
        width: 400,
        icon: 'warning',
        color: '#ffffff',
        confirmButtonText: 'ok',
    })
})

btnCalcular.addEventListener('click', () => { //*UTILIZANDO LIBRERIA PARA CUADRO DE ALERTA*/
    //debugger
    monto.value === '' || cuotas.value === '' || interes.value === '' ? //*CODIGO SIMPLIFICADO*/
        Swal.fire({
            title: 'Complete los campos para continuar',
            icon: 'warning',
            confirmButtonText: 'Ok',
            color: '#ffffff',
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




























