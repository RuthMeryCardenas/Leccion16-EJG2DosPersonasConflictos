var calculateIMC = document.getElementById('submit');
calculateIMC.onclick = function (){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    if(weight==="" || height=== ""){
        alert("Ingresa los datos");
    }else{
      var imc = (weight/Math.pow(height / 100,2)).toFixed(2);
      alert("Tu IMC es: "+imc);
    }
  }
