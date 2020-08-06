function mostrar()
{
	var respuesta;

	for(var i = 1;; i++)
	{
		respuesta = confirm(i);

		if(respuesta == false)
		{
			break;
		}
	}
}//FIN DE LA FUNCIÓN