Titanium.include('/db/db.js');
var acerca = Ti.UI.currentWindow;

acerca.backgroundColor='#000';

// var view = Ti.UI.createView({
	// backgroundColor : '#f1701c',
	// width : 320,
	// height : 44,
	// top : 0,
// });
// 
// acerca.add(view);
// 
// 
// 
// var boton = Titanium.UI.createButton({
	// title:'prueba',
	// top:100,
// });
// 
// acerca.add(boton);
// 
// boton.addEventListener('click', function(e){
	// alert( new BaseDeDatos().NumeroDeFilas());
// });
// 
// var historia = Ti.UI.createLabel({
	// text:'Historia',
	// left:'40dp',
	// top:'45dp',
	// width:'300dp',
	// height:'35dp',
	// font : {
		// fontSize : '30dp',
		// //fontWeight : 'bold',
		// fontFamily:'Arial'
	// },
	 // shadowColor:'#aaa',
    // shadowOffset:{x:3,y:3},
    // color:'#4b819c'
//      
// });
// 
// var queEs = Ti.UI.createLabel({
			// text : 'El Festival Latinoamericano de Instalación de Software Libre (FLISoL) es el evento de difusión de Software Libre más grande en Latinoamérica. Se realiza desde el año 2005 y desde el 2008 se adoptó su realización el 4to Sábado de abril de cada año. En el 2012 será el día 28 de Abril.',
			// left : '20',
			// height : '200dp',
			// top : '90dp',
			// width:'280dp',
			// color: '#312c2a'
		// });
// acerca.add(queEs);
// acerca.add(historia);


var logoPantalla = Titanium.UI.createImageView({
	image:'../images/FLISOLgeneral.png',
	height:'40dp',
	width:'230dp',
	top:'5dp',
});
acerca.add(logoPantalla);

// cuadro grande contenedor
var cuadroPrincipal= Ti.UI.createView({
	borderRadius:7,
	backgroundColor:'#fff',
	borderColor:'#f1701c',
	borderWidth:'6',
	//top : '50dp',
	left:'15dp',
	right:'15dp',
	down:'25dp',
	
	top : '50dp',
});
acerca.add(cuadroPrincipal)
