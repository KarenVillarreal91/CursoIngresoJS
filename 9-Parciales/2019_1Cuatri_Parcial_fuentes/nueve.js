function mostrar()
{
    var nombrePais;
    var cantHabitantes;
    var tMin;
    var confirmar;
    var tPares = 0;
    var paisMenosHab;
    var minHab= 0;
    var maxHab = 0;
    var cont = 0;
    var cantPaisesTAlta = 0;
    var cantPaises = 0;
    var promedioHab = 0;
    var acumHab = 0;
   
    tPares = parseInt(tPares);
    minHab = parseInt(minHab);
    cantPaisesTAlta = parseInt(cantPaisesTAlta);
    cantPaises = parseInt(cantPaises);
    promedioHab = parseInt(promedioHab);
    acumHab = parseInt(acumHab);


    do
    {
        nombrePais = prompt("Ingrese el nombre del pais");
       
        if(isNaN(nombrePais))
        {     
            cantHabitantes = prompt("Ingrese la cantidad de habitantes(Entre 1.000.000 y 7.000.000.000)");
            cantHabitantes = parseInt(cantHabitantes);
            
            

            if(!(isNaN(cantHabitantes)) && (cantHabitantes > 999999) && (cantHabitantes < 7000000000))
            {

                paisMenosHab = nombrePais;
                minHab = cantHabitantes;
                maxHab = cantHabitantes;
                
               cont++;
               if(cont > 0 && minHab < maxHab)
               {
                paisMenosHab = nombrePais;

               }        
               
                acumHab = acumHab + cantHabitantes;

                tMin = prompt("Ingrese la temperatura minima del territorio (entre -50 y 50)");
                tMin  = parseInt(tMin);

                if(!(isNaN(tMin)) && tMin >= -50 && tMin <= 50)
                {
                    if(tMin >= 40)
                    {
                        cantPaisesTAlta++;

                    }
                    if((tMin % 2) == 0)
                    {
                        tPares++;

                    }
                    cantPaises++;
                    confirmar = prompt("Desea salir? s/n");

                }
            }
            else
            {

                alert("Error. Ingrese datos validos.");


            } 
        
        }
        else
        {

            alert("Error. Ingrese un nombre valido.");


        } 
    }while(confirmar != 's');


    promedioHab = acumHab / cantPaises;
    

    
    document.write("<br>Cantidad de temperaturas pares: "+tPares);
    document.write(" <br>  Pais con menos habitantes: " +paisMenosHab);
    document.write("  <br> El promedio de habitantes es: " +promedioHab);

  

}
