/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var primerNumeroRandom;
var segundoNumeroRandom;
var resultado;
var operadorRandom;
var operador;

function comenzar()
{
    primerNumeroRandom = Math.floor(Math.random() * 10) + 1;
    segundoNumeroRandom = Math.floor(Math.random() * 10) + 1;
    operadorRandom = Math.floor(Math.random() * 4) + 1;

    txtIdPrimerNumero.value = primerNumeroRandom;
    txtIdSegundoNumero.value = segundoNumeroRandom;

    switch(operadorRandom)
    {
        case 1:
            operador = "+";
            resultado = primerNumeroRandom + segundoNumeroRandom;
        break;

        case 2:
            operador = "-";
            resultado = primerNumeroRandom - segundoNumeroRandom;
        break;

        case 3:
            operador = "*";
            resultado = primerNumeroRandom * segundoNumeroRandom;
        break;
        
        case 4:
            operador = "/";
            resultado = primerNumeroRandom / segundoNumeroRandom;
        break;
    }

    txtIdOperador.value = operador;

}//FIN DE LA FUNCIÓN
function Responder()
{
    respuesta = txtIdRespuesta.value;
    
    if(resultado == respuesta && !isNaN(respuesta))
    {
        alert("Correcto.");
    }
    else
    {
        alert("Le erraste.");
    }

   
}//FIN DE LA FUNCIÓN
