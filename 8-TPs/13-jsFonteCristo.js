/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var numeroIngresado;
var i;

function NumerosPares()
{
    var cantidadPares = 0;

    numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);
    
    if(!isNaN(numeroIngresado) && numeroIngresado > -1)
    {
        for(i = 0; i <= numeroIngresado; i++)
        {
            if(i % 2 == 0)
            {
                cantidadPares++;
            }
        }

        alert("La cantidad de números pares es: "+cantidadPares+"."); 
    }
    else
    {
        alert("Eso no es un número o es número negativo.");
    }

}

function NumerosImpares()
{
    var cantidadImpares = 0;

    numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);

    if(!isNaN(numeroIngresado) && numeroIngresado > -1)
    {
        for(i = 0; i <= numeroIngresado; i++)
        {
            if(!(i % 2 == 0))
            {
                cantidadImpares++;
            }
        }
    
        alert("La cantidad de números impares es: "+cantidadImpares+".");
    }
    else
    {
        alert("Eso no es un número o es número negativo.");
    }
}

function NumerosDivisibles()
{
    var cantidadDivisible = 0;
    
    numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);

    if(!isNaN(numeroIngresado) && numeroIngresado > -1)
    {
        for(i = 1; i < 101; i++)
        {
            if(numeroIngresado % i == 0)
            {
                cantidadDivisible++;
            }
        }

        alert("La cantidad de números divisibles es: "+cantidadDivisible+".");
    }
    else
    {
        alert("Eso no es un número o es número negativo.");
    }
}

function VerificarPrimo()
{
    var cantidadDivisibleVerificarPrimo = 0;
    
    numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);

    if(!isNaN(numeroIngresado) && numeroIngresado > -1)
    {
        for(i = 1; i <= numeroIngresado; i++)
        {
            if(numeroIngresado % i == 0)
            {
                cantidadDivisibleVerificarPrimo++;
            }
        }

        if(cantidadDivisibleVerificarPrimo == 2)
        {
            alert("Es número primo.");
        }
        else
        {
            if(numeroIngresado == 1)
            {
                alert("El número no es primo ni compuesto.");
            }
            else
            {
                alert("No es número primo.");
            }
        }
    }
    else
    {
        alert("Eso no es un número o es número negativo.");
    }
}

function NumerosPrimos()
{
    var cantidadPrimos = 0;
    var valorPrimo;
    var maximoDivisor;
    var divisor;

    numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);

    if(!isNaN(numeroIngresado) && numeroIngresado > -1)
    {
        for(i = 2; i <= numeroIngresado; i++) 
        {   
            valorPrimo = true;
            maximoDivisor = Math.floor(Math.sqrt(i));
            
            for(divisor = 2; divisor <= maximoDivisor; divisor++)
            {
                if(i % divisor == 0) 
                {
                    valorPrimo = false;
                    break;
                }
            }
                if(valorPrimo)
                {
                    cantidadPrimos++;
                }
        }
            alert("La cantidad de primos es: "+cantidadPrimos+".");
    }
    else
    {
        alert("Eso no es un número o es número negativo.");
    }
}