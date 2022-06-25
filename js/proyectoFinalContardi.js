

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

//! MATERIAL DE APOYO EJEMPLOS NO ACTIVAR 👆👆👆👆👆👆👆👆


titulo.innerText = "BANCO AQUA"
tituloDos.innerText = "PRESTAMO PERSONAL"

menu.addEventListener('click', () => {  //*ejemplo addEventListener*/
    monto.value = ""
    alert("Menu ILUSTRATIVO")
})

irFormulario.addEventListener('click', () => { //*ejemplo addEventListener*/
    monto.value = ""
    cuotas.value = ""
    interes.value = ""
})


btnCalcular.addEventListener('click', () => {
    //debugger
    if (monto.value === '' || cuotas.value === '' || interes.value === '') {
        alerta.hidden = false;
        setTimeout(() => {
            alerta.hidden = true;
        }, 2000);
    } else {
        calcularCronograma(monto.value, interes.value, cuotas.value);
    }
})

function calcularCronograma(monto, interes, cuotas) {

    while (llenarTabla.firstChild) {
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let amortizacionConstante, pagoInteres, cuota;
    amortizacionConstante = monto / cuotas;
    for (let i = 1; i <= cuotas; i++) {
        pagoInteres = monto * (interes / 100);
        cuota = amortizacionConstante + pagoInteres;
        monto = monto - amortizacionConstante;

        const rowt = document.createElement('tr');
        rowt.innerHTML = `
            <td>${amortizacionConstante.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(rowt);

    }
}






























