//actividad 1

function calcular() {

    // Obtener los valores de los campos de entrada
    
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var operador = document.getElementById('operador').value;
    var resultado = 0;

    // Realizar el cálculo según el operador seleccionado
    if (operador === 'suma') {
        resultado = numero1 + numero2;
    } else if (operador === 'resta') {
        resultado = numero1 - numero2;
    } else if (operador === 'multiplicacion') {
        resultado = numero1 * numero2;
    } else if (operador === 'division') {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            alert("No se puede dividir por cero.");
            return;
        }
    }

    // Mostrar el resultado en la página
    document.getElementById('resultado').textContent = resultado;
}
