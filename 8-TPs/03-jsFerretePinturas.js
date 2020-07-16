/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() 
{
    var fahrenheit;
    var centigrado;

        fahrenheit = txtIdTemperatura.value;

        fahrenheit = parseInt(fahrenheit);

        centigrado = (fahrenheit - 32) * 5/9;

        alert(+fahrenheit+" fahrenheit son "+centigrado+" centigrados.");
}

function CentigradosFahrenheit() 
{
    var fahrenheit;
    var centigrado;

        centigrado = txtIdTemperatura.value;

        centigrado = parseInt(centigrado);

        fahrenheit = (centigrado * 9/5) + 32;

        alert(+centigrado+" centigrados son "+fahrenheit+" fahrenheit.");
}
