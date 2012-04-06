var pagina = Ti.UI.currentWindow;
pagina.backgroundColor='#fff';

var view = Titanium.UI.createView({
	backgroundColor : '#f1701c',
	width : 320,
	height : 44,
	top : 0
});

var webP = Titanium.UI.createWebView({
		url : pagina.pagina,
		top:'44dp',
		width : '320dp',
		height:'436dp',
		left:'0',
		touchEnabled:true,
		
	});



view.addEventListener('click', function(e){
	pagina.close();
});

pagina.add(webP);
pagina.add(view);

