exports.Main = function() {

	Ti.UI.setBackgroundColor('#fff');

	var tabGroup = Titanium.UI.createTabGroup();

	var sedesW = Titanium.UI.createWindow({
		title : 'Sedes',
		url:'/ui/sedes.js',
		navBarHidden:true  
	});

	var mapasW = Ti.UI.createWindow({
		title : 'Mapa',
		url:'/ui/mapas.js',
		navBarHidden:true  
	});

	var redesW = Ti.UI.createWindow({
		title:'Redes',
		url:'/ui/redes.js',
		navBarHidden:true  
	});
	
	var acercaW = Ti.UI.createWindow({
		title : 'Acerca',
		url:'/ui/acerca.js',
		navBarHidden:true  
	});

	var sedesT = Titanium.UI.createTab({
		title : 'Sedes',
		icon:'/images/casa.png',
		window : sedesW
	});

	var mapasT = Ti.UI.createTab({
		title : 'Mapas',
		icon:'/images/mapa.png',
		window : mapasW
	});

	var redesT = Ti.UI.createTab({
		title : 'Redes',
		icon:'/images/contacto.png',
		window : redesW
	});

	var acercaT = Ti.UI.createTab({
		icon:'/images/acerca.png',
		title : 'Acerca',
		window : acercaW
	})
	tabGroup.addTab(sedesT);
	tabGroup.addTab(mapasT);
	tabGroup.addTab(redesT);
	tabGroup.addTab(acercaT);

	return tabGroup;

}