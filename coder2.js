function calcular() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let operador = document.getElementById('operador').value;
    let resultado = 0;

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

    document.getElementById('resultado').textContent = resultado;

    setTimeout(function() {
        if (confirm("¿Desea realizar otro cálculo?")) {
            document.getElementById('numero1').value = '';
            document.getElementById('numero2').value = '';
            document.getElementById('resultado').textContent = '-';
        }
    }, 1);
}