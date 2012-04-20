var mapas = Ti.UI.currentWindow;

mapas.backgroundColor = '#f0efee';

var view = Titanium.UI.createView({
	backgroundColor : '#f1701c',
	width : 320,
	height : 44,
	top : 0
});

var flisol1 = Ti.UI.createView({
	width : '216dp',
	height : '156dp',
	backgroundImage : '/images/flisol1.jpg'
});
var flisol2 = Ti.UI.createView({
	width : '216dp',
	height : '156dp',
	backgroundImage : '/images/flisol2.jpg'
});
var flisol3 = Ti.UI.createView({
	width : '216dp',
	height : '156dp',
	backgroundImage : '/images/flisol3.jpg'
});

var scrollView = Ti.UI.createScrollableView({
	views : [flisol1, flisol2, flisol3],
	showPagingControl : true,
	clipViews : false,
	pagingControlColor : '#d4d0cd',
	top : '45dp',
	left : '10dp',
	width : '300dp',
	height : '180dp',

});
data = [{
	leftImage : '/images/casa.png',
	title : 'Tu sede ',
	hasChild : true
}, {
	leftImage : '/images/mapa.png',
	title : ' Lista de Sedes',
	hasChild : true
}, {
	leftImage : '/images/contacto.png',
	title : 'Mapa General',
	hasChild : true
}];

var table = Ti.UI.createTableView({
	editable : true,
	backgroundColor : '#f0efee',
	top : '225dp',
	width : '250p',
	height : '130dp',
	left : '35dp',
	data : data,
	editable : true,
	opacity : '.8',
	font : {
		fontSize : '12dp',
		fontWeight : 'bold',
		fontFamily : 'Arial'
	},
	//rowBackgroundColor : 'white',
	//rowHeight : 'auto',
	barColor : 'black',
	//style:Titanium.UI.iPhone.TableViewStyle.PLAIN,
});

table.addEventListener('click', function(e) {
	if(e.index == 0) {
		var win = Ti.UI.createWindow({
			opacity : .9,
			backgroundColor : '#fff'
		});

		var cancel = Titanium.UI.createButton({
			title : 'Cancel',
			style : Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		
		cancel.addEventListener('click', function(e){
			win.close();
		});

		var done = Titanium.UI.createButton({
			title : 'Done',
			style : Titanium.UI.iPhone.SystemButtonStyle.DONE
		});

		var spacer = Titanium.UI.createButton({
			systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});

		var toolbar = Titanium.UI.createToolbar({
			top : 0,
			items : [cancel, spacer, done]
		});
	
	
		
		var picker = Ti.UI.createPicker({
			bottom : 0,
			
		});

		var data = [];
		data[0] = Ti.UI.createPickerRow({
			title : 'Bananas'
		});
		data[1] = Ti.UI.createPickerRow({
			title : 'Strawberries'
		});
		data[2] = Ti.UI.createPickerRow({
			title : 'Mangos'
		});
		data[3] = Ti.UI.createPickerRow({
			title : 'Grapes'
		});

		picker.add(data);
		picker.selectionIndicator = true;
		win.add(toolbar);
		win.add(picker);
		win.open();
	}

});

mapas.add(table);
mapas.add(view);
mapas.add(scrollView);
