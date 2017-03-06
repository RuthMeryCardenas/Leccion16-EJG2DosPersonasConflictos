var calculateIMC = document.getElementById('submit');
calculateIMC.onclick = function (){
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  var imc = (weight/(height*height)).toFixed(2);

if(weight==="" || height=== ""){
    alert("Ingresa los datos");
}else{
  alert("Tu IMC es: "+imc);
}
}
