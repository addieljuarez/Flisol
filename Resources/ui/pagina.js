Titanium.include('/db/db.js');
Titanium.include('/data/images.js');


var pagina = Ti.UI.currentWindow;
pagina.backgroundColor='#000';

//var paginaDB = new BaseDeDatos().InformacionSede(sede);
//var infoPagina = new BaseDeDatos().InformacionPagina(id)
//var sedeBD = new BaseDeDatos().InformacionSede(sede.ID);

//imagen para regresar
var regresar = Ti.UI.createImageView({
	image:'../images/BARRITA.png',
	width : '320dp',
	height : '35dp',
	top : '0dp',
});
pagina.add(regresar);

regresar.addEventListener('click', function(e) {
	pagina.close();
});




//imagen y logo de flisol
var logoPantalla = Titanium.UI.createImageView({
	image:'../images/FLISOLgeneral.png',
	height:'40dp',
	width:'230dp',
	top:'40dp',
});
pagina.add(logoPantalla);

// cuadro grande contenedor
var cuadroPrincipal= Ti.UI.createView({
	borderRadius:7,
	backgroundColor:'#fff',
	borderColor:'#f1701c',
	borderWidth:'6',
	left:'15dp',
	right:'15dp',
	down:'25dp',
	top : '85dp',
});
pagina.add(cuadroPrincipal)

//espacio para la pagina web
// var webP = Titanium.UI.createWebView({
		// url : 'http://creandoapp.blogspot.mx/',
		// touchEnabled:true,
		// borderRadius:7,
		// backgroundColor:'#fff',
		// borderColor:'#f1701c',
		// borderWidth:'6',
		// left:'15dp',
		// right:'15dp',
		// down:'25dp',
		// top : '85dp',
// });
// 
// 
// pagina.add(webP);
//pagina.add(view);
 
 
 
 
 
 
 
 
 // var nombre = Ti.UI.createLabel({
	// text : infoPagina[0].url,
	// font : {
		// fontSize : '24dp',
		// fontWeight : 'bold',
		// fontFamily:'Arial'
	// },
	 // shadowColor:'#aaa',
    // shadowOffset:{x:3,y:3},
	// height : 'auto',
	// width : '240dp',
	// top : '10dp',
	// left : '90dp',
	// textAlign : 'left',
	// color : '#c5500b'
// });
// cuadroPrincipal.add(nombre);
