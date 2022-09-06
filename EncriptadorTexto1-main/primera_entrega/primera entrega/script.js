function encriptar (){
    
    var texto = document.querySelector("#inputTexto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#textInputSalida").value = textoCifrado;
    document.querySelector("#inputTexto").value;
    document.querySelector("#textInputSalida").style.display = "block";
    document.querySelector("#textInputSalida").style.visibility = "visible";
    document.querySelector("#muneco").style.display = "none";
    document.querySelector("#pUno").style.display = "none";
    document.querySelector("#pDos").style.display = "none";
    document.querySelector("#btnCopy").style.display = "block";
    document.querySelector("#btnCopy").style.visibility = "visible";

    }


    
var boton1 = document.querySelector("#btnEncriptar"); boton1.onclick = encriptar;

function desencriptar (){ 
  var texto = document.querySelector("#inputTexto").value; 
  var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
  document.querySelector("#textInputSalida").value = textoCifrado; 
  document.querySelector("#inputTexto").value;

}

var boton2 = document.querySelector("#btnDesencriptar"); boton2.onclick = desencriptar;


function copiar(){
  var aux = document.createElement("input");
  aux.setAttribute("value", document.querySelector("#textInputSalida").value);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);


} 

var boton3 = document.querySelector("#btnCopy"); boton3.onclick = copiar;