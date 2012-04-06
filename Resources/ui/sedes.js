Titanium.include('/db/db.js');
Titanium.include('/json/json.js');
Titanium.include('/data/images.js');

var sedes = Ti.UI.currentWindow;
sedes.backgroundColor = '#fff';

var view = Titanium.UI.createView({
	backgroundColor : '#f1701c',
	width : 320,
	height : 44,
	top : 0
});

var search = Titanium.UI.createSearchBar({
	barColor : '#f38239',
	height : 40,
	hintText : 'Busca tu sede',
	top : 0,
	showCancel:false
});

var sedesTV = Titanium.UI.createTableView({
	top : 44,
	minRowHeight : '55dp',
	maxRowHeight : '60dp',
	editable : true,
	backgroundColor:'#f0efee',
	search: search,
     filterAttribute:'filter'
	
});

parsearBd = function(){
			var tableData = [];
			
			var json= new BaseDeDatos().Sedes();
						
			for( i = 0; i < json.length; i++) {
				
				var caja = Titanium.UI.createTableViewRow({
					id : json[i].idSede,
					hasChild : true,
					filter:json[i].nombre,
				});
				var logoSede = Titanium.UI.createImageView({
					height : 50,
					width : 50,
					top : 2,
					left : 3,
					image : getImage(json[i].logo),
					touchEnabled : false,
					backgroundColor : '#fff',

				});

				var nombreSede = Titanium.UI.createLabel({
					text : json[i].nombre,
					font : {
						fontSize : '16dp',
						fontWeight : 'bold'
					},
					left : '60dp',
					top : '-20dp',
					touchEnabled : false
				});

				var direccionSede = Titanium.UI.createLabel({
					text : json[i].direccion.substring(0, 40),
					font : {
						fontSize : '12dp'
					},
					left : '60dp',
					top : '10dp',
					color : '#1f1f1d',
					touchEnabled : false
				});

				var horarioSede = Titanium.UI.createLabel({
					text : json[i].horario,
					font : {
						fontSize : '12dp',
					},
					height : 'auto',
					left : '64dp',
					top : '38dp',
					color : '#878681',
					touchEnabled : false

				});
			caja.add(logoSede);
			caja.add(nombreSede);
			caja.add(direccionSede);
			caja.add(horarioSede);
			tableData.push(caja);
			
			}
			
			sedesTV.setData(tableData);
	
}

parsearJson = function(num) {
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET", "https://www.dimsatec.com/services/flisol/index.php/services/sedes");
	xhr.onload = function() {
		try {
			var tableData = [];
			json = JSON.parse(this.responseText);
			
			if(num==1){
				new BaseDeDatos().EliminarTablas();
				Ti.API.info("Se elimina base de datos");
				};

			for( i = 0; i < json.length; i++) {
				
				var caja = Titanium.UI.createTableViewRow({
					id : json[i].idSede,
					hasChild : true,
					filter:json[i].nombre,
				});
				var logoSede = Titanium.UI.createImageView({
					height : 50,
					width : 50,
					top : 2,
					left : 3,
					image : getImage(json[i].logo),
					touchEnabled : false,
					backgroundColor : '#fff',

				});

				var nombreSede = Titanium.UI.createLabel({
					text : json[i].nombre,
					font : {
						fontSize : '16dp',
						fontWeight : 'bold'
					},
					left : '60dp',
					top : '-20dp',
					touchEnabled : false
				});

				var direccionSede = Titanium.UI.createLabel({
					text : json[i].direccion.substring(0, 40),
					font : {
						fontSize : '12dp'
					},
					left : '60dp',
					top : '10dp',
					color : '#1f1f1d',
					touchEnabled : false
				});

				var horarioSede = Titanium.UI.createLabel({
					text : json[i].horario,
					font : {
						fontSize : '12dp',
					},
					height : 'auto',
					left : '64dp',
					top : '38dp',
					color : '#878681',
					touchEnabled : false

				});
			caja.add(logoSede);
			caja.add(nombreSede);
			caja.add(direccionSede);
			caja.add(horarioSede);
			tableData.push(caja);
			

			}
			new BaseDeDatos().ActualizarSedes(json);
			sedesTV.setData(tableData);

		} catch(E) {
			Ti.API.info(E);
			return 0;

		}

	};
	xhr.send();
}

if (new BaseDeDatos().NumeroDeFilas()==0){
	alert('Se va a actualizar');
	parsearJson(0); 
	Ti.API.info("Nop hay datos en la tabla");
	}
	else{
		parsearBd();
	}

view.addEventListener('click', function(e){
	sedesTV.setData();
	alert('Se van a eliminar datos de la tabla');
	parsearJson(1);
});

sedesTV.addEventListener('click', function(e){
	
	E=e.rowData.id;
	
	var sede = Ti.UI.createWindow({
		title:e.rowData.id,
		url:'/ui/detalleSede.js',
		ID:E
	});
	sede.open();

});

sedes.add(view);
//sedes.add(search);
sedes.add(sedesTV);
