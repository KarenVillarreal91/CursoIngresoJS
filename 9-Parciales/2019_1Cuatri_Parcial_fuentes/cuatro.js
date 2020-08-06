function mostrar()
{
    var primerNumero;
    var segundoNumero;
    var resta;
    var suma;

    do
    {
        primerNumero = prompt("Ingrese un número.");
        primerNumero = parseInt(primerNumero);
    }while(isNaN(primerNumero));

    do
    {
        segundoNumero = prompt("Ingrese otro número.");
        segundoNumero = parseInt(segundoNumero);
    }while(isNaN(segundoNumero));

    if(primerNumero == segundoNumero)
    {
        alert("Los números son iguales y se concatenaron a "+primerNumero+ +segundoNumero+".");
    }
    else
    {
        if(primerNumero > segundoNumero)
        {
            resta = primerNumero - segundoNumero;
            
            if(resta > 10)
            {
                alert("El primer número es mayor y se restaron. La resta es "+resta+" y superó el 10.");
            }
            else
            {
                alert("El primer número es mayor y se restaron. La resta es "+resta+".");
            }
        }
        else
        {
            suma = primerNumero + segundoNumero;

            alert("El segundo número es mayor y se sumaron. La suma es "+suma+".");
        }
    }
}
