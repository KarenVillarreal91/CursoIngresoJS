/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero;
	var numeroDos;
	var resultadoSuma;
		numero = document.getElementById('txtIdNumeroUno').value;
		numero = parseInt(numero);
		numeroDos = document.getElementById('txtIdNumeroDos').value;
		numeroDos = parseInt(numeroDos);
		resultadoSuma = numero + numeroDos;
		resultadoSuma = parseInt(resultadoSuma);
		alert("La suma es "+resultadoSuma);
}

function restar()
{
	var numero;
	var numeroDos;
	var resultadoResta;
		numero = document.getElementById('txtIdNumeroUno').value;
		numero = parseInt(numero);
		numeroDos = document.getElementById('txtIdNumeroDos').value;
		numeroDos = parseInt(numeroDos);
		resultadoResta = numero - numeroDos;
		resultadoResta = parseInt(resultadoResta);
		alert("La resta es "+resultadoResta);
}

function multiplicar()
{ 
	var numero;
	var numeroDos;
	var resultadoMulti;
		numero = document.getElementById('txtIdNumeroUno').value;
		numero = parseInt(numero);
		numeroDos = document.getElementById('txtIdNumeroDos').value;
		numeroDos = parseInt(numeroDos);
		resultadoMulti = numero * numeroDos;
		resultadoMulti = parseInt(resultadoMulti);
		alert("La multiplicación es "+resultadoMulti);
}

function dividir()
{
	var numero;
	var numeroDos;
	var resultadoDivi;
		numero = document.getElementById('txtIdNumeroUno').value;
		numero = parseInt(numero);
		numeroDos = document.getElementById('txtIdNumeroDos').value;
		numeroDos = parseInt(numeroDos);
		resultadoDivi = numero / numeroDos;
		resultadoDivi = parseInt(resultadoDivi);
		alert("La división es "+resultadoDivi);
}

