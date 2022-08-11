const nueve = document.getElementById('nueve');
const ocho = document.getElementById('ocho');
const siete = document.getElementById('siete');
const seis = document.getElementById('seis');
const cinco = document.getElementById('cinco');
const cuatro = document.getElementById('cuatro');
const tres = document.getElementById('tres');
const dos = document.getElementById('dos');
const uno = document.getElementById('uno');
const cero = document.getElementById('cero');
var pantalla = document.getElementById('pantalla');
const reset = document.getElementById('reset');
const punto = document.getElementById('punto');




var numeros = "0";
var operador;
var almacenado;
var almacenado2;

pantalla.innerHTML = numeros;




quitar.addEventListener('click',()=>{
		quitaruno = numeros.substring(0,numeros.length - 1);
		numeros = quitaruno;
		pantalla.innerHTML = numeros;
});



dividir.addEventListener('click',()=>{
operador = "dividir";
almacenado = numeros;
numeros = "0";
});

multiplicar.addEventListener('click',()=>{
operador = "multiplicar";
almacenado = numeros;
numeros = "0";
});

restar.addEventListener('click',()=>{
operador = "restar";
almacenado = numeros;
numeros = "0";
});

sumar.addEventListener('click',()=>{
operador = "sumar";
almacenado = numeros;
numeros = "0";
});





igual.addEventListener('click',()=>{
	almacenado2 = numeros;

	if (numeros !== "0"){
		switch (operador){
		     case "dividir":
		 res = almacenado / almacenado2;
		 numeros = res;
		 pantalla.innerHTML = numeros;

		          break;
		 	case "multiplicar":
		 res = almacenado * almacenado2;
		 numeros = res;
		 pantalla.innerHTML = numeros;

		          break;
		    case "restar":
		 res = almacenado - almacenado2;
		 numeros = res;
		 pantalla.innerHTML = numeros;

		          break;
		     case "sumar":
		 res = parseInt(almacenado) + parseInt(almacenado2);
		 numeros = res;
		 pantalla.innerHTML = numeros;
	
		          break;
		 }
	}
});


punto.addEventListener('click',()=>{
 if (numeros == "0"){
 	numeros = ".";
 	pantalla.innerHTML = numeros;
 }else{ 
 	memoria = ".";
    res = numeros.concat(memoria);
    numeros = res;
    pantalla.innerHTML = numeros;
 }
});

nueve.addEventListener('click',()=>{
 if (numeros == "0"){
 	numeros = "9";
 	pantalla.innerHTML = numeros;
 }else{ 
 	memoria = "9";
    res = numeros.concat(memoria);
    numeros = res;
    pantalla.innerHTML = numeros;
 }
});

ocho.addEventListener('click',()=>{
 if (numeros == "0"){
 	numeros = "8";
 	pantalla.innerHTML = numeros;
 }else{ 
 	memoria = "8";
    res = numeros.concat(memoria);
    numeros = res;
    pantalla.innerHTML = numeros;
 }
});

siete.addEventListener('click',()=>{
 if (numeros == "0"){
 	numeros = "7";
 	pantalla.innerHTML = numeros;
 }else{ 
 	memoria = "7";
    res = numeros.concat(memoria);
    numeros = res;
    pantalla.innerHTML = numeros;
 }
});

seis.addEventListener('click',()=>{
 if (numeros == "0"){
 	numeros = "6";
 	pantalla.innerHTML = numeros;
 }else{ 
 	memoria = "6";
    res = numeros.concat(memoria);
    numeros = res;
    pantalla.innerHTML = numeros;
 }
});

cinco.addEventListener('click',()=>{
 if (numeros == "0"){
 	numeros = "5";
 	pantalla.innerHTML = numeros;
 }else{ 
 	memoria = "5";
    res = numeros.concat(memoria);
    numeros = res;
    pantalla.innerHTML = numeros;
 }
});

cuatro.addEventListener('click',()=>{
 if (numeros == "0"){
 	numeros = "4";
 	pantalla.innerHTML = numeros;
 }else{ 
 	memoria = "4";
    res = numeros.concat(memoria);
    numeros = res;
    pantalla.innerHTML = numeros;
 }
});

tres.addEventListener('click',()=>{
 if (numeros == "0"){
 	numeros = "3";
 	pantalla.innerHTML = numeros;
 }else{ 
 	memoria = "3";
    res = numeros.concat(memoria);
    numeros = res;
    pantalla.innerHTML = numeros;
 }
});

dos.addEventListener('click',()=>{
 if (numeros == "0"){
 	numeros = "2";
 	pantalla.innerHTML = numeros;
 }else{ 
 	memoria = "2";
    res = numeros.concat(memoria);
    numeros = res;
    pantalla.innerHTML = numeros;
 }
});

uno.addEventListener('click',()=>{
 if (numeros == "0"){
 	numeros = "1";
 	pantalla.innerHTML = numeros;
 }else{ 
 	memoria = "1";
    res = numeros.concat(memoria);
    numeros = res;
    pantalla.innerHTML = numeros;
 }
});

cero.addEventListener('click',()=>{
 if (numeros == "0"){
 	numeros = "0";
 	pantalla.innerHTML = numeros;
 }else{ 
 	memoria = "0";
    res = numeros.concat(memoria);
    numeros = res;
    pantalla.innerHTML = numeros;
 }
});


reset.addEventListener('click',()=>{
	numeros = 0;
	pantalla.innerHTML = "0";
});