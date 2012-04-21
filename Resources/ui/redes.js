// 
//  redes.js
//  Flisol
//  
//  Created by addiel on 2012-04-21.
//  Copyright 2012 addiel. All rights reserved.
// 


var winRedes = Titanium.UI.currentWindow;
winRedes.backgroundColor='#000';

// var regresar = Ti.UI.createImageView({
	// image:'../images/BARRITA.png',
	// width : '320dp',
	// height : '35dp',
	// top : '0dp',
// });
// winRedes.add(regresar);

// regresar.addEventListener('click', function(e) {
	// winRedes.close();
// });




//imagen y logo de flisol
var logoPantalla = Titanium.UI.createImageView({
	image:'../images/FLISOLgeneral.png',
	height:'40dp',
	width:'230dp',
	top:'5dp',
	//left:'40dp',
});
winRedes.add(logoPantalla);

// cuadro grande contenedor
var cuadroPrincipal= Ti.UI.createView({
	borderRadius:7,
	backgroundColor:'#fff',
	borderColor:'#f1701c',
	borderWidth:'6',
	left:'15dp',
	right:'15dp',
	down:'25dp',
	top : '50dp',
});
winRedes.add(cuadroPrincipal)

