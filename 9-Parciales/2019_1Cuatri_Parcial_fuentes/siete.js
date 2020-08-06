function mostrar()
{
    var altura;
    var sexo;
    var promedio;
    var alturaSuma = 0;
    var alturaMasBaja;
    var alturaMasBajaSexo;
    var flagAltura = true;
    var cantidadMujeresAltura = 0;

    for(var i = 0; i < 5; i++)
    {
        do
        {
            altura = prompt("Ingrese una altura en centimetros. (De 0 a 250)");
            altura = parseInt(altura);
        }while(isNaN(altura) || altura < 0 || altura > 250);

        do
        {
            sexo = prompt("Ingrese su sexo. (f o m)");
        }while(!isNaN(sexo) || sexo != "f" && sexo != "m");

        alert("Jugador de básquet agregado correctamente.");
        
        alturaSuma += altura;

        //Punto B
        if(!flagAltura && altura < alturaMasBaja)
        {
            flagAltura = true;
        }
        if(flagAltura)
        {
            alturaMasBaja = altura;
            alturaMasBajaSexo = sexo;
            flagAltura = false;
        }

        //Punto C
        if(sexo == "f" && altura > 190)
        {
            cantidadMujeresAltura++;
        }
    }
    //Punto A
    promedio = alturaSuma / 5;

    alert("El promedio de alturas en total es: "+promedio+".");
    alert("La altura más baja es de "+alturaMasBaja+" centimentros y el sexo es: "+alturaMasBajaSexo+".");
    alert("La cantidad de mujeres que superan los 190 centimentros son: "+cantidadMujeresAltura+".");
}
