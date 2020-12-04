// Alain Forton - DP.ESTUDIOS 
// Arquetipos - Fritz Lang - CountDown

// V.NOV12
// Iztapalapa - MX

function fl() {
  let frase = 'Si empezamos a contar a partir de uno, no sabremos cuándo terminar. Pero si vamos desde diez hacia atrás, todos sabrán que la cuenta acabará en cero. Eso le da un interesante dramatismo a la situación.';
  let inputUser = prompt(frase);
  console.log(inputUser);
}

let objTextos = {
  intro : ['Noch 20 sekunden ruhig liegen tief Atem holen','Quédese quieto durante 20 segundos y respire profundamente']  
};

//Liga/url de youtube con el contenido de la pelicula original
//de Fritz Lang - Frau im Mond (Mujer en la luna)
var youtube = 'https://www.youtube.com/watch?v=uQlwhG76P9A';
//peli completa 
var ytbdos ='https://www.youtube.com/watch?v=lZiU9Gc-kWk';
//TODO aforton
//hacer funcion generica start y pasar fecha
// mostrar "frase" mediante div
// cuenta atras de 10 segundos
// fin sale nombre

// opcion de poner una fecha cualquiera
// ejemplos
// descargar html formateado para que te lo puedas guardar


//copia en bruto de jhon wick cuntdown 
function start(){
var end = new Date('12/22/2021 11:30 AM');
    
    
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
         
        var zeroD = days < 10 ? "0" : "";
        var zeroH = hours < 10 ? "0" : "";
        var zeroM = minutes < 10 ? "0" : "";
        var zeroS = seconds < 10 ? "0" : "";
        console.log(zeroD+days+'D '+zeroH+hours+'H '+zeroM+minutes+'M '+zeroS+seconds+'s\nMatrix IV');
    }
    timer = setInterval(showRemaining, 10);
}
