//Incluyo modulos.
const http   	 = require('http');
const express 	 = require('express');

//Instancias.
const app 	 	 = express();
const server 	 = http.createServer(app);
const port 		 = 5000;

//Clase con el nucleo del api.
const apiCore 	 = require('./server/modules/apiCore');

//Cuando hago http://localhost:5000/search, me genera una lista de hoteles al azar.
app.get('/search/:iata/:checkin/:checkout/:rooms/',apiCore.search);

//Cuando no se encuentra el servicio.
app.get('*',apiCore.notFound);

//Inicio el server.
app.listen(port,(err)=>
{
	//Si hay un error, muestro por la consola, sino msj de inicio.
	if (err)
		console.log('ERROR: hubo un problema al inciar el server.');
	else
	{
		console.log('Server | Api Hoteles');		
		console.log('>Listen on port: '+port);
	}
});