// Alain Forton - DP.ESTUDIOS 
// Arquetipos - Fritz Lang - CountDown

// V.NOV21
// Iztapalapa - MX

// TILES representacion grafica del personaje

//testing cuerpo simple

let tiles = {} || undefinde;


tiles.fritzLang = [

	[0, 0, 4, 7, 7, 4, 0, 0],
	[0, 0, 7, 6, 6, 7, 0, 0],
	[0, 0, 0, 7, 7, 0, 0, 0],
	[0, 1, 4, 3, 3, 4, 1, 0],
	[0, 7, 3, 6, 6, 3, 7, 0],
	[0, 1, 5, 5, 5, 5, 1, 0],
	[0, 7, 6, 3, 3, 6, 7, 0],
	[0, 6, 7, 5, 5, 7, 6, 0],
	[0, 7, 1, 5, 5, 1, 7, 0],
	[0, 0, 7, 5, 5, 7, 0, 0],
	[0, 0, 7, 5, 5, 7, 0, 0],
	[0, 0, 7, 0, 0, 7, 0, 0],
	[0, 0, 7, 0, 0, 7, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 7, 7, 0, 0, 7, 7, 0],
	[0, 6, 6, 0, 0, 6, 6, 0]
];

tiles.colores = [	"", 
						"#fffe51", 
						"#f37b1a", 
						"#886209", 
						"#600a09", 
						"#09239b", 
						"#b5d4b7", 
						"#01615d" , 
						"#000"];


//pinta donde, pasar elemento donde pintar, mas tile array mas el tile color
function pinta(){
	var eldiv = document.createElement('div');
	eldiv.className = 'divCont';
	
	for(var i = 0; i < tiles.fritzLang.length; i++){
		var contdiv = document.createElement('div');
		contdiv.style.display = "flex";
		for(var j = 0; j < tiles.fritzLang[i].length; j++){
			var div = document.createElement('div');
			div.className = 'divFL';
			div.style.backgroundColor = tiles.colores[tiles.fritzLang[i][j]];
			contdiv.appendChild(div);	
		}
		eldiv.appendChild(contdiv);	
	}	
	
	
	document.body.appendChild(eldiv);	
}


console.log(tiles);
