
function mostrar()
{
    var lados;
    var perimetro;

    do
    {
        lados = prompt("Ingrese la medida de uno de los lados del triangulo equilatero.");
        lados = parseInt(lados);
    }while(isNaN(lados));

    perimetro = lados * 3;

    alert("El perimetro es: "+perimetro+".");
}
