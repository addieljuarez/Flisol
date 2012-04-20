Titanium.include('/db/db.js');
Titanium.include('/data/images.js');
mapaSede = Titanium.UI.currentWindow;

var view = Ti.UI.createView({
	backgroundColor : '#f1701c',
	width : 320,
	height : 44,
	top : 0,
});
MapaView = Ti.UI.createView({
	height : 400,
	width : 320
});

var mapa = new BaseDeDatos().InformacionMapa(mapaSede.id);

var datos = Titanium.Map.createAnnotation({

	latitude : parseFloat(mapa[0].latitudP),
	longitude : parseFloat(mapa[0].longitudP),
	title : mapa[0].nombreMapa,
	subtitle : 'Sede FLISOL',
	pincolor : Titanium.Map.ANNOTATION_RED,
	animate : true,
	//leftButton:getImage(mapaSede.logo),
	//leftButton: '../images/appcelerator_small.png',
	myid : 1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
});

var mapita = Ti.Map.createView({

	mapType : Titanium.Map.STANDARD_TYPE,
	region : {
		latitude : parseFloat(mapa[0].latitud),
		longitude : parseFloat(mapa[0].longitud),
		latitudeDelta : 0.005,
		longitudeDelta : 0.005,
		
	},
	animate : true,
	regionFit : true,
	userLocation : true,
	annotations : [datos]
});

view.addEventListener('click', function(e){
	mapaSede.close();
});


MapaView.add(mapita);
mapaSede.add(MapaView);
mapaSede.add(view);
