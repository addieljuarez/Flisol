Titanium.include('/db/db.js');
Titanium.include('/data/images.js');
var sede = Ti.UI.currentWindow;
sede.backgroundColor = '#f0efee';

var sedeBD = new BaseDeDatos().InformacionSede(sede.ID);
var view = Ti.UI.createView({
	backgroundColor : '#f1701c',
	width : 320,
	height : 44,
	top : 0,
});

var footer = Ti.UI.createView({
	backgroundColor : '#f0efee',
	width : '320dp',
	height : '120dp',
	top : '50dp',
});

var nombre = Ti.UI.createLabel({
	text : sedeBD[0].nombre,
	font : {
		fontSize : '24dp',
		fontWeight : 'bold',
		fontFamily:'Arial'
	},
	 shadowColor:'#aaa',
    shadowOffset:{x:3,y:3},
	height : 'auto',
	width : '240dp',
	top : 10,
	left : 80,
	textAlign : 'left',
	color : '#c5500b'
});
imagen = Ti.UI.createImageView({
	height : '60dp',
	width : '60dp',
	top : '10dp',
	left : '10dp',
	image : getImage(sedeBD[0].logo),
	touchEnabled : false,
	borderColor : '#a09691',
	borderWidth : '2'
});

var horario = Titanium.UI.createLabel({
	text : sedeBD[0].horario,
	font : {
		fontSize : '14dp',
	},
	height : 'auto',
	left : '80dp',
	top : '38dp',
	color : '#878681',
	touchEnabled : false

});

var lugar = Ti.UI.createLabel({
	text : ' ' + sedeBD[0].direccion,
	font : {
		fontSize : '14dp',

	},
	height : 'auto',
	width : '300dp',
	top : '90dp',
	left : '10dp',
	textAlign : 'left',
	color : '#332C28',
	backgroundColor : '#d4d0cd'
});
data = [{
	leftImage : '/images/casa.png',
	title : 'Pagina',
	hasChild : true
}, {
	leftImage : '/images/mapa.png',
	title : ' Mapa',
	hasChild : true
}, {
	leftImage : '/images/contacto.png',
	title : 'Contacto',
	hasChild : true
}];

var table = Ti.UI.createTableView({
	editable : true,
	backgroundColor : '#f0efee',
	top : '190dp',
	width : '200p',
	height : '130dp',
	left : '60dp',
	data : data,
	editable : true,
	opacity : '.8',
	//rowBackgroundColor : 'white',
	//rowHeight : 'auto',
	barColor : 'black',
	//style:Titanium.UI.iPhone.TableViewStyle.PLAIN,
});

footer.add(lugar);
footer.add(imagen);
footer.add(nombre);
footer.add(horario);

view.addEventListener('click', function(e) {
	sede.close();
});

table.addEventListener('click', function(e) {

	if(e.index == 0) {
		var pagina = sedeBD[0].pagina;
		var win = Ti.UI.createWindow({
			url : '/ui/pagina.js',
			pagina : pagina,
		});
		win.open();
	} else {
		if(e.index == 1) {
			var id = sedeBD[0].idSede;
			var logo = sedeBD[0].logo;
			var win = Ti.UI.createWindow({
				url : '/ui/mapa.js',
				id : id,
				logo:logo
			});
			win.open();
		}
		
	}
});
sede.add(table);
sede.add(view);
sede.add(footer);
