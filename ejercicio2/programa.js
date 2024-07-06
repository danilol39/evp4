var num1 = 0, num2 = 0
var numeros=new Array(20);
var resultado = "<ul>";
const aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
function nums() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    for (x = 1; x <= 20; x++) {
        numeros[x] = aleatorio(num1, num2+1);
        resultado += "<li>"+x+ ".- "+ numeros[x] + "</li>";
    }
    resultado += "</ul>"
    console.log(numeros);
    document.getElementById("resultado").innerHTML = resultado;
}
