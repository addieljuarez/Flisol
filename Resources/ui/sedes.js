Titanium.include('/db/db.js');
Titanium.include('/json/json.js');
Titanium.include('/data/images.js');

var sedes = Ti.UI.currentWindow;
//sedes.backgroundColor = '#000';
//sedes.backgroundImage = '../image/general.jpg';
// var view = Titanium.UI.createView({
	// backgroundColor : '#f1701c',
	// width : 'auto',
	// height : '35dp',
	// top : '0dp',
// 	
// });
// var labelActualizar = Titanium.UI.createLabel({
	// text:'Toque aqui para actualizar la lista'
// });
// 
// sedes.add(labelActualizar);



var search = Titanium.UI.createSearchBar({
	barColor : '#f38239',
	height : '40dp',
	hintText : 'Busca tu sede',
	top : '0dp',
	showCancel:false,
	
});

var logoPantalla = Titanium.UI.createImageView({
	image:'../images/FLISOLgeneral.png',
	height:'40dp',
	width:'230dp',
	top:'5dp',
	//left:'40dp',
});
sedes.add(logoPantalla);

// var labelFlisol = Titanium.UI.createLabel({
	// text:'      FLISOL    2012',
	// font:
	// {
		// fontSize : '30dp',
		// fontWeight : 'bold',
	// },
	// //color:'#fff',
	// top:'5dp'
// });
// sedes.add(labelFlisol)





var sedesTV = Titanium.UI.createTableView({
	borderRadius:7,
	borderColor:'#f1701c',
	borderWidth:'6',
	top : '50dp',
	left:'15dp',
	right:'15dp',
	down:'25dp',
	//width:'25dp',
	minRowHeight : '55dp',
	maxRowHeight : '60dp',
	
	editable : true,
	backgroundColor:'#f0efee',
	search: search,
     filterAttribute:'filter',
     
	
});


var boton = Titanium.UI.createButton({
	
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
					height : '45dp',
					width : '45dp',
					top : '2dp',
					left : '9dp',
					image : getImage(json[i].logo),
					touchEnabled : false,
					backgroundColor : '#fff',

				});

				var nombreSede = Titanium.UI.createLabel({
					text : json[i].nombre,
					font : 
					{
						fontSize : '15dp',
						fontWeight : 'bold',
						//color:'#000'
					},
					left : '60dp',
					//top : '-20dp',
					touchEnabled : false,
					color:'#000'
				});

				// var direccionSede = Titanium.UI.createLabel({
					// text : json[i].direccion.substring(0, 40),
					// font : {
						// fontSize : '12dp'
					// },
					// left : '60dp',
					// top : '10dp',
					// color : '#1f1f1d',
					// touchEnabled : false
				// });
// 
				// var horarioSede = Titanium.UI.createLabel({
					// text : json[i].horario,
					// font : {
						// fontSize : '12dp',
					// },
					// height : 'auto',
					// left : '64dp',
					// top : '38dp',
					// color : '#878681',
					// touchEnabled : false
// 
				// });
			caja.add(logoSede);
			caja.add(nombreSede);
		//	caja.add(direccionSede);
		//	caja.add(horarioSede);
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

// view.addEventListener('click', function(e){
	// sedesTV.setData();
	// alert('Actualizando');
	// parsearJson(1);
// });

sedesTV.addEventListener('click', function(e){
	
	E=e.rowData.id;
	
	var sede = Ti.UI.createWindow({
		title:e.rowData.id,
		url:'/ui/detalleSede.js',
		ID:E,
		navBarHidden:true ,
		
	});
	sede.open({modal:true});

});

//sedes.add(view);
//sedes.add(search);
sedes.add(sedesTV);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//  menu del botón
if(Titanium.Platform.osname == 'android') {
	//Se hace referencia a la activity
	var activity = Ti.Android.currentActivity;

	//Se crea el menu y se agrega la opcion de 
	//salir, desautentificacion
	activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;

		var actualizar = menu.add({
			title : "Actualizar Lista"
		});

		//cuando se selecciona 'salir' se cambia el valor de
		//autenficacion a falso, y se activa el evento desautenticacion
		//para que se abra la ventana de autentificacion
		actualizar.addEventListener("click", function(e) {
			sedesTV.setData();
	        alert('Actualizando');
			parsearJson(1);
		});
	}
}