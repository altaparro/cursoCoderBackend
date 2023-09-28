// prueba de extensiones


let entrada = Number(prompt("Seleccione la opción deseada: 1) Realizar suma 2) Realizar resta 3) Realizar multiplicación 4) Realizar división 5) Salir"))


while (entrada != 5){
    num1 = Number(prompt("ingrese el primer numero"));
    num2 = Number(prompt("ingrese el segundo numero"));
    switch(entrada){
        case 1:
         resultado= num1+num2;

         alert("El resultado de la suma es: "+ resultado);
         break;
        

    }
    entrada = prompt("Seleccione la opción deseada: 1) Realizar suma 2) Realizar resta 3) Realizar multiplicación 4) Realizar división 5) Salir")
}
prompt("Salio correctamente del sistema.")
