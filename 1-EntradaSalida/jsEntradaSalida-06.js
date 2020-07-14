/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero;
	var numeroDos;
	var resultado;

		numero = document.getElementById('txtIdNumeroUno').value;
		numero = parseInt(numero);
		
		numeroDos = document.getElementById('txtIdNumeroDos').value;
		numeroDos = parseInt(numeroDos);

		resultado = numero + numeroDos;
		resultado = parseInt(resultado);

		alert("El resultado es "+resultado);
}

