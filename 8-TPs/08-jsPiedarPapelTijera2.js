var eleccionMaquina;
var contadorDeEmpates = 0;
var contadorDeGanadas = 0;
var contadorDePerdidas = 0;

function comenzar()
{
    eleccionMaquina = Math.floor(Math.random() * 3) + 1;

	console.log(eleccionMaquina);
	
	

}//FIN DE LA FUNCIÓN
function piedra()
{
    if(eleccionMaquina == 1)
    {
		alert("Empate.");

		contadorDeEmpates++;
    }
    else if(eleccionMaquina == 2)
    {
		alert("Perdiste.");

		contadorDePerdidas++;
    }
    else
    {
		alert("Ganaste.");
		
		contadorDeGanadas++;
	}

	eleccionMaquina = Math.floor(Math.random() * 3) + 1;

}//FIN DE LA FUNCIÓN
function papel()
{
    if(eleccionMaquina == 2)
    {
		alert("Empate.");
		
		contadorDeEmpates++;
    }
    else if(eleccionMaquina == 3)
    {
		alert("Perdiste.");
		
		contadorDePerdidas++;
    }
    else
    {
		alert("Ganaste.");
			
		contadorDeGanadas++;
	}

	eleccionMaquina = Math.floor(Math.random() * 3) + 1;

}//FIN DE LA FUNCIÓN
function tijera()
{
    if(eleccionMaquina == 3)
    {
		alert("Empate.");
		
		contadorDeEmpates++;
    }
    else if(eleccionMaquina == 1)
    {
		alert("Perdiste.");
		
		contadorDePerdidas++;
    }
    else
    {
		alert("Ganaste.");
			
		contadorDeGanadas++;
	}
	
	eleccionMaquina = Math.floor(Math.random() * 3) + 1;

}//FIN DE LA FUNCIÓN

function mostrarResultado() //No funciona
{	
	txtIdGanadas.value = contadorDeGanadas;
	txtIdPerdidas.value = contadorDePerdidas;
	txtIdEmpatadas.value = contadorDeEmpates;
}