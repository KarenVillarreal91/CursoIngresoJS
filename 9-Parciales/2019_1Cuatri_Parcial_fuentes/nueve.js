function mostrar()
{
    var pais;
    var habitantes;
    var temperatura;
    var respuesta = true;
    var promedio;
    //contadores
    var contadorTemperaturaPar = 0;
    var contadorTemperaturaMayor = 0;
    var contadorPaises = 0;
    var sumaHabitantes = 0;
    //minimos
    var flagHabitantes = true;
    var minimoHabitantes;
    var minimoHabitantesPais;
    var flagTemperatura = true;
    var temperaturaMinima;
    var temperaturaMinimaPais;

    while(respuesta)
    {
        do
        {
            pais = prompt("Ingrese el nombre del país.");
        }while(!isNaN(pais));

        do
        {
            habitantes = prompt("Ingrese la cantidad de habitantes. (Entre 1 y 7000 en millones)");
            habitantes = parseInt(habitantes);
        }while(isNaN(habitantes) || habitantes < 1 || habitantes > 7000);

        do
        {
            temperatura = prompt("Ingrese la temperatura mínima del país. (Entre -50 y 50)");
            temperatura = parseInt(temperatura);
        }while(isNaN(temperatura) || temperatura < -50 || temperatura > 50);

        respuesta = confirm("Datos ingresados correctamente. ¿Desea continuar?");

        //Punto A
        if(temperatura % 2 == 0)
        {
            contadorTemperaturaPar++;
        }

        //Punto B
        if(flagHabitantes)
        {
            minimoHabitantes = habitantes;
            minimoHabitantesPais = pais;
            flagHabitantes = false;
        }
        if(habitantes < minimoHabitantes)
        {
            minimoHabitantes = habitantes;
            minimoHabitantesPais = pais;
        }

        //Punto C
        if(temperatura > 40)
        {
            contadorTemperaturaMayor++;
        }
        
        //Punto D
        contadorPaises++;
        sumaHabitantes += habitantes;

        //Punto E
        if(flagTemperatura)
        {
            temperaturaMinima = temperatura;
            temperaturaMinimaPais = pais;
            flagTemperatura = false;
        }
        if(temperatura < temperaturaMinima)
        {
            temperaturaMinima = temperatura;
            temperaturaMinimaPais = pais;
        }
    }

    promedio = sumaHabitantes / contadorPaises;

    document.write("La cantidad de temperaturas pares es: "+contadorTemperaturaPar+".",
    "<br>El nombre del país con menos habitantes es: "+minimoHabitantesPais+". Con "+minimoHabitantes+" millones.",
    "<br>La cantidad de paises que superan los 40 grados son: "+contadorTemperaturaMayor+".",
    "<br>El promedio de habitantes entre los paises ingresados es: "+promedio+".",
    "<br>La temperatura mínima ingresada es: "+temperaturaMinima+" grados, del país "+temperaturaMinimaPais+".");
}
