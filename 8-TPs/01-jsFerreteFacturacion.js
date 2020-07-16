/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultadoSuma;

        precioUno = document.getElementById('txtIdPrecioUno').value;
        precioDos = document.getElementById('txtIdPrecioDos').value;
        precioTres = document.getElementById('txtIdPrecioTres').value;

        precioUno = parseInt(precioUno);
        precioDos = parseInt(precioDos);
        precioTres = parseInt(precioTres);

        resultadoSuma = precioUno + precioDos + precioTres;

        alert("La suma de todos los precios es: "+resultadoSuma+".");

    
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultadoPromedio;

        precioUno = document.getElementById('txtIdPrecioUno').value;
        precioDos = document.getElementById('txtIdPrecioDos').value;
        precioTres = document.getElementById('txtIdPrecioTres').value;

        precioUno = parseInt(precioUno);
        precioDos = parseInt(precioDos);
        precioTres = parseInt(precioTres);

        resultadoPromedio = (precioUno + precioDos + precioTres) / 3;

        alert("El promedio de todos los precios es: "+resultadoPromedio+".");
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultadoFinalSuma;
    var resultadoFinal;

        precioUno = document.getElementById('txtIdPrecioUno').value;
        precioDos = document.getElementById('txtIdPrecioDos').value;
        precioTres = document.getElementById('txtIdPrecioTres').value;

        precioUno = parseInt(precioUno);
        precioDos = parseInt(precioDos);
        precioTres = parseInt(precioTres);

        resultadoFinalSuma = precioUno + precioDos + precioTres;

        resultadoFinal = (resultadoFinalSuma * 0.21) + resultadoFinalSuma;

        alert("La suma de todos los precios más el IVA es: "+resultadoFinal+".");
}