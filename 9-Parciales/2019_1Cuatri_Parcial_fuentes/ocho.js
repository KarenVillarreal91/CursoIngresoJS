function mostrar()
{
    var letra;
    var numero;
    var respuesta = true;
    var promedio;
    var cantidadNumerosPares = 0;
    var cantidadNumerosImpares = 0;
    var cantidadCeros = 0;
    var cantidadNumerosPositivos = 0;
    var sumaPositivos = 0;
    var sumaNegativos = 0;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaximo;
    var letraMinimo;
    var flagMaximoMinimo = true;

    while(respuesta)
    {
        do
        {
            letra = prompt("Ingrese una letra.");
        }while(!isNaN(letra));

        do
        {
            numero = prompt("Ingrese un número. (De -100 a 100)");
            numero = parseInt(numero);
        }while(isNaN(numero) || numero < -100 || numero > 100);

        respuesta = confirm("Datos agregados correctamente. ¿Desea continuar?");

        if(numero % 2 == 0) //Punto A
        {
            cantidadNumerosPares++;

            if(numero == 0) //Punto C
            {
                cantidadCeros++;
            }
        }
        else //Punto B
        {
            cantidadNumerosImpares++;
        }

        if(numero > -1) //Punto D
        {
            cantidadNumerosPositivos++;
            sumaPositivos += numero;
        }
        else //Punto E
        {
            sumaNegativos += numero;
        }

        if(flagMaximoMinimo) //Punto F
        {
            numeroMaximo = numero;
            numeroMinimo = numero;
            letraMinimo = letra;
            letraMaximo = letra;
            flagMaximoMinimo = false;
        }
        if(numero > numeroMaximo)
        {
            numeroMaximo = numero;
            letraMaximo = letra;
        }
        else
        {
            if(numero < numeroMinimo)
            {
                numeroMinimo = numero;
                letraMinimo = letra;
            }
        }
    }

    promedio = sumaPositivos / cantidadNumerosPositivos;

    document.write("La cantidad de números pares es: "+cantidadNumerosPares+".",
    "<br>La cantidad de números impares es: "+cantidadNumerosImpares+".",
    "<br>La cantidad de ceros es: "+cantidadCeros+".",
    "<br>El promedio de los números ingresado es: "+promedio+".",
    "<br>La suma de todos los números negativos es: "+sumaNegativos+".",
    "<br>El número máximo es: "+numeroMaximo+" y la letra es: "+letraMaximo+".",
    "<br>El número mínimo es: "+numeroMinimo+" y la letra es: "+letraMinimo+".");
}
