var x;     //Declaración de arreglo
    var lista1 = "<ul>";
    var lista2 = "<h2>Arreglo Ordenado Alfabeticamente</h2><ul>";
    var lista3 = "<h2>Arreglo Invertido</h2><ul>";
    var lista4 = "<h2>Insertar Elemento 'Pera'</h2><ul>";
    var lista5 = "<h2>Eliminación del primer elemento</h2><ul>";
    var frutas = ["Platano", "Naranja", "Manzana", "Mango","Fresa","Uva","Granadilla"];
    function ver() {
        for (x = 0; x < frutas.length; x++) {
            lista1 += "<li>" + frutas[x] + "</li>";
        }
        lista1 += "</ul>";
        document.getElementById("ver").innerHTML = lista1; 
    }
    function ordenar() { //Ordenar Alfabeticamente el Arreglo
        frutas.sort();
        for (x = 0; x < frutas.length; x++) {
            lista2 += "<li>" + frutas[x] + "</li>";
        }
        lista2 += "</ul>";
        document.getElementById("ordenar").innerHTML = lista2; 
    }
    function invertir() { //Invertir Arreglo
        frutas.reverse(); 
        for (x = 0; x < frutas.length; x++) {
            lista3 += "<li>" + frutas[x] + "</li>";
        }
        lista3 += "</ul>";
        document.getElementById("invertir").innerHTML = lista3; 
    }
    function longitud() { //Cantidad de datos en el Arreglo
        var cantidad=frutas.length;
        document.getElementById("longitud").innerHTML =
        "<h2>La cantidad de elementos de elementos del arreglo es: "+cantidad+"</h2>"; 
    }
    function insertar() { //Insertar dato en el Arreglo
        frutas.push("Pera");
        for (x = 0; x < frutas.length; x++) {
            lista4 += "<li>" + frutas[x] + "</li>";
        }
        lista4 += "</ul>";
        document.getElementById("insertar").innerHTML = lista4; 
    }
    function eliminar() { //Eliminar dato en el Arreglo
        frutas.splice(0, 1);
        for (x = 0; x < frutas.length; x++) {
            lista5 += "<li>" + frutas[x] + "</li>";
        }
        lista5+= "</ul>";
        document.getElementById("eliminar").innerHTML = lista5; 
    }
