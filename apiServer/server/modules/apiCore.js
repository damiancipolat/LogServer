//Generador de hoteles.
const hotelGenerator = require('./builderDirector');

//Servicio de busqueda.
module.exports.search = (req,res)=>
{
	//Antes, envio los headers para permitir el cross-origin.
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	//Invoco al generador de hoteles y obtendo un listado.
	let hotelGen  = new hotelGenerator();
	let resu      = hotelGen.buildHotelList();  	

	if (resu.length>0)	
		res.json({hotels:resu});
	else
		res.json({hotels:[],msj:"No se encontraron resultados para la busqueda"});
};

//Service not found.
module.exports.notFound = (req,res)=>{
	res.json({error:"Servicio inexistente."});
};