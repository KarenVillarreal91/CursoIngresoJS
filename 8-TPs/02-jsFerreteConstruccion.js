/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var total;

        largo = txtIdLargo.value;
        ancho = txtIdAncho.value;
        
        largo = parseInt(largo);
        ancho = parseInt(ancho);

        perimetro = (largo * 2) + (ancho * 2);
        
        total = perimetro * 3;
        
        alert("La cantidad de alambre a comprar es: "+total+" metros.")
}
function Circulo () 
{
    var radio;
    var perimetro;
    var total;

        radio = txtIdRadio.value;

        radio = parseInt(radio);

        perimetro = (2 * Math.PI) * radio;

        perimetro = Math.ceil(perimetro); //Math.ceil redondea para arriba y Math.floor para abajo

        total = perimetro * 3;

        alert("La cantidad de alambre a comprar es: "+total+" metros.");
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cal;
    var cemento;

        largo = txtIdLargo.value;
        ancho = txtIdAncho.value;

        largo = parseInt(largo);
        ancho = parseInt(ancho);

        area = largo * ancho;

        cal = area * 3;

        cemento = area * 2;

        alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");
}