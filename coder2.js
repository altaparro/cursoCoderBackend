// prueba de extensiones

let entrada = Number(prompt("Seleccione la opción deseada: 1) Realizar suma 2) Realizar resta 3) Realizar multiplicación 4) Realizar división 5) Salir"));

    while (entrada != 5 && entrada > 0 && entrada <= 5) {
        num1 = Number(prompt("ingrese el primer numero"));
        num2 = Number(prompt("ingrese el segundo numero"));
        switch (entrada) {
            case 1:
            alert("El resultado de la suma es: " + (num1 + num2));
            break;
            case 2:
            alert("El resultado de la resta es: " + (num1 - num2));
            break;
            case 3:
            alert("El resultado de la multiplicacion es: " + (num1 * num2));
            break;
            case 4:
            alert("El resultado de la division es: " + (num1 / num2));
            break;
            default:
            alert("Opción no válida.");
        }
        entrada = prompt("Seleccione la opción deseada: 1) Realizar suma 2) Realizar resta 3) Realizar multiplicación 4) Realizar división 5) Salir");
    }
    
    
    alert("Salio correctamente del sistema.");
