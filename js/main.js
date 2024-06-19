//Algoritmo 1//
function presion_alterial() {
    const presion = parseInt(document.getElementById("presion-alterial").value);

    if (isNaN(presion) || presion < 0) {
        alert("Por favor, ingrese un valor válido para la presión arterial.");
        return;
    }

    if (presion <= 90) {
        document.getElementById("resultado").innerHTML = "<div class='alert alert-primary  text-center' role='alert'><strong>Nivel: </strong>Su presión arterial está Baja <img src='img/hipertension.png'></div>";
    } else if (presion >= 90 && presion < 120) {
        document.getElementById("resultado").innerHTML = "<div class='alert alert-success text-center' role='alert'><strong>Nivel: </strong>Su presión arterial está Normal <img src='img/hipertension.png'></div>";
    } else if (presion >= 120 && presion < 140) {
        document.getElementById("resultado").innerHTML = "<div class='alert alert-warning   text-center' role='alert'><strong>Nivel: </strong>Usted tiene Prehipertensión <img src='img/hipertension.png'></div>";
    } else if (presion >= 140 && presion < 160) {
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger  text-center' role='alert'><strong>Nivel: </strong>Usted tiene Alta: hipertensión fase I <img src='img/hipertension.png'></div>";
    } else if (presion >= 160) {
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger  text-center' role='alert'><strong>Nivel: </strong>Usted tiene Alta: hipertensión fase II <img src='img/hipertension.png'></div>";
    }
}
//Fin Algoritmo 1//

//Algoritmo 2//
function Edad(){
    const edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad) || edad < 0) {
        alert("Por favor, ingrese una edad válida.");
        return;
    }

    if (edad <= 12) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-primary text-center' role='alert'><strong>Etapa Actual: </strong>Usted es un Niño <img src='img/grupo-de-edad.png'></div>"
    } else if (edad > 12 && edad <= 40) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-success text-center' role='alert'><strong>Etapa Actual: </strong>Usted es un Joven <img src='img/grupo-de-edad.png'></div>";
    } else if (edad > 40 && edad <= 60) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-warning text-center' role='alert'><strong>Etapa Actual: </strong>Usted es un Adulto <img src='img/grupo-de-edad.png'></div>";
    } else if (edad > 60) {
        document.getElementById("resultado2").innerHTML = "<div class='alert alert-danger text-center' role='alert'><strong>Etapa Actual: </strong>Usted es un Adulto Mayor <img src='img/grupo-de-edad.png'></div>";
    }
}
//Fin Algoritmo 2//

//Algoritmo 3//
function Zapatos(){
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseInt(document.getElementById("precio").value);
    let subtotal, descuento, total;

    if (isNaN(cantidad) || cantidad < 0 || isNaN(precio) || precio < 0) {
        alert("Por favor, ingrese valores válidos para cantidad y precio.");
        return;
    }

    subtotal = precio * cantidad;
    if (cantidad < 10) {
        total = subtotal;
        document.getElementById("resultado3").innerHTML = "<div class='alert alert-danger text-center' role='alert'><strong>Total: </strong> El precio es de $" + total +" <img src='img/compra-en-linea.png'></img></div>";
        document.getElementById("resultado4").innerHTML = "<div class='alert alert-danger text-center' role='alert'><strong>Descuento: </strong>No recibe descuento <img src='img/zapateria.png'></div>";
    } else if (cantidad >= 10 && cantidad < 20) {
        descuento = subtotal * 0.10;
        total = subtotal - descuento;
        document.getElementById("resultado3").innerHTML = "<div class='alert alert-warning text-center' role='alert'><strong>Total: </strong> El precio es de $" + total +" <img src='img/compra-en-linea.png'></img></div>";
        document.getElementById("resultado4").innerHTML = "<div class='alert alert-warning text-center' role='alert'><strong>Descuento: </strong>Recibe un 10% de descuento <img src='img/zapateria.png'></div>";
    } else if (cantidad >= 20 && cantidad < 30) {
        descuento = subtotal * 0.20;
        total = subtotal - descuento;
        document.getElementById("resultado3").innerHTML = "<div class='alert alert-primary text-center' role='alert'><strong>Total: </strong> El precio es de $" + total +" <img src='img/compra-en-linea.png'></img></div>";
        document.getElementById("resultado4").innerHTML = "<div class='alert alert-primary text-center' role='alert'><strong>Descuento: </strong>Recibe un 20% de descuento <img src='img/zapateria.png'></div>";
    } else if (cantidad >= 30) {
        descuento = subtotal * 0.40;
        total = subtotal - descuento;
        document.getElementById("resultado3").innerHTML = "<div class='alert alert-success text-center' role='alert'><strong>Total: </strong> El precio es de $" + total +" <img src='img/compra-en-linea.png'></img></div>";
        document.getElementById("resultado4").innerHTML = "<div class='alert alert-success text-center' role='alert'><strong>Descuento: </strong>Recibe un 40% de descuento <img src='img/zapateria.png'></div>";
    }
}
//Fin Algoritmo 3//

//Algoritmo 4//
function imc() {
    const estatura = parseFloat(document.getElementById("estatura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    let calcular = peso / (estatura * estatura);

    if (isNaN(estatura) || estatura <= 0 || isNaN(peso) || peso <= 0) {
        alert("Por favor, ingrese valores válidos para estatura y peso.");
        return;
    }
    if (calcular < 18.5) {
        document.getElementById("resultado5").innerHTML = "<div class='alert alert-warning text-center' role='alert'><strong>IMC: </strong>Su índice de masa corporal es de " + calcular +"</div>";
        document.getElementById("resultado6").innerHTML = "<div class='alert alert-warning text-center' role='alert'><strong>Clasificación: </strong>Usted está bajo de peso <img src='img/indice-de-masa-corporal.png'></div>";
    } else if (calcular >= 18.5 && calcular <= 24.9) {
        document.getElementById("resultado5").innerHTML = "<div class='alert alert-success text-center' role='alert'><strong>IMC: </strong>Su índice de masa corporal es de " + calcular +"</div>";
        document.getElementById("resultado6").innerHTML = "<div class='alert alert-success text-center' role='alert'><strong>Clasificación: </strong>Usted está normal <img src='img/indice-de-masa-corporal.png'></div>";
    } else if (calcular >= 25 && calcular < 29.9) {
        document.getElementById("resultado5").innerHTML = "<div class='alert alert-warning text-center' role='alert'><strong>IMC: </strong>Su índice de masa corporal es de " + calcular +"</div>";
        document.getElementById("resultado6").innerHTML = "<div class='alert alert-warning text-center' role='alert'><strong>Clasificación: </strong>Usted está con sobrepeso <img src='img/indice-de-masa-corporal.png'></div>";
    } else if (calcular >= 30 && calcular <= 34.9) {
        document.getElementById("resultado5").innerHTML = "<div class='alert alert-danger text-center' role='alert'><strong>IMC: </strong>Su índice de masa corporal es de " + calcular +"</div>";
        document.getElementById("resultado6").innerHTML = "<div class='alert alert-danger  text-center' role='alert'><strong>Clasificación: </strong>Usted tiene una obesidad I <img src='img/indice-de-masa-corporal.png'></div>";
    } else if (calcular >= 35 && calcular <= 39.9) {
        document.getElementById("resultado5").innerHTML = "<div class='alert alert-danger text-center' role='alert'><strong>IMC: </strong>Su índice de masa corporal es de " + calcular +"</div>";
        document.getElementById("resultado6").innerHTML = "<div class='alert alert-danger text-center' role='alert'><strong>Clasificación: </strong>Usted tiene una obesidad II <img src='img/indice-de-masa-corporal.png'></div>";
    } else if (calcular >= 40 && calcular <= 49.9) {
        document.getElementById("resultado5").innerHTML = "<div class='alert alert-danger text-center' role='alert'><strong>IMC: </strong>Su índice de masa corporal es de " + calcular +"</div>";
        document.getElementById("resultado6").innerHTML = "<div class='alert alert-danger text-center' role='alert'><strong>Clasificación: </strong>Usted tiene una obesidad III <img src='img/indice-de-masa-corporal.png'></div>";
    } else if (calcular >= 50) {
        document.getElementById("resultado5").innerHTML = "<div class='alert alert-danger text-center' role='alert'><strong>IMC: </strong>Su índice de masa corporal es de " + calcular +"</div>";
        document.getElementById("resultado6").innerHTML = "<div class='alert alert-danger  text-center' role='alert'><strong>Clasificación: </strong>Usted tiene una obesidad IV <img src='img/indice-de-masa-corporal.png'></div>";
    }
}
//Fin Algoritmo 4//