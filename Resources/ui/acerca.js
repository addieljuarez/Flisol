var acerca = Ti.UI.currentWindow;

acerca.backgroundColor='#fff';

var view = Ti.UI.createView({
	backgroundColor : '#f1701c',
	width : 320,
	height : 44,
	top : 0,
});

acerca.add(view);


var historia = Ti.UI.createLabel({
	text:'Historia',
	left:'40dp',
	top:'45dp',
	width:'300dp',
	height:'35dp',
	font : {
		fontSize : '30dp',
		//fontWeight : 'bold',
		fontFamily:'Arial'
	},
	 shadowColor:'#aaa',
    shadowOffset:{x:3,y:3},
    color:'#4b819c'
     
});

var queEs = Ti.UI.createLabel({
			text : 'El Festival Latinoamericano de Instalación de Software Libre (FLISoL) es el evento de difusión de Software Libre más grande en Latinoamérica. Se realiza desde el año 2005 y desde el 2008 se adoptó su realización el 4to Sábado de abril de cada año. En el 2012 será el día 28 de Abril.',
			left : '20',
			height : '200dp',
			top : '90dp',
			width:'280dp',
			color: '#312c2a'
		});
acerca.add(queEs);
acerca.add(historia);
