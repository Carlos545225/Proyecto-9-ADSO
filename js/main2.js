function Calculadora() {
    // Obtener valores del formulario
    const sexo = document.getElementById('sexo').value;
    const edad = parseInt(document.getElementById('edad1').value);
    const altura = parseInt(document.getElementById('altura1').value);
    const pesoActual = parseFloat(document.getElementById('peso1').value);
    
    // Verificar que todos los campos hayan sido completados
    if (sexo === '-Seleccionar su sexo-' || isNaN(edad) || isNaN(altura) || isNaN(pesoActual)) {
        alert('Por favor, complete todos los campos correctamente.');
      return;
    }
  
    // Calcular peso ideal usando la fórmula de Lorentz
    let pesoIdeal;
    if (sexo === 'Hombre') {
      pesoIdeal = altura - 100 - ((altura - 150) / 4); // Fórmula para hombres
    } else if (sexo === 'Mujer') {
      pesoIdeal = altura - 100 - ((altura - 150) / 2.5); // Fórmula para mujeres
    }
  
    // Calcular IMC
    const alturaEnMetros = altura / 100;
    const imc = pesoActual / (alturaEnMetros * alturaEnMetros);
  
    // Calcular peso a perder si es necesario
    let pesoAPerder = 0;
    if (pesoActual > pesoIdeal) {
      pesoAPerder = pesoActual - pesoIdeal;
    }
  
    // Determinar la categoría del IMC
    let categoriaIMC;
    if (imc < 18.5) {
      categoriaIMC = "<span class='bg-warning text-light  p-1 rounded-2'>Bajo peso</span>";
    } else if (imc >= 18.5 && imc <= 24.9) {
      categoriaIMC = "<span class='bg-success text-light  p-1 rounded-2'>Normal</span>";
    } else if (imc >= 25 && imc < 29.9) {
      categoriaIMC = "<span class='bg-warning text-light  p-1 rounded-2'>Sobrepeso</span>";
    } else if (imc >= 30 && imc <= 34.9) {
      categoriaIMC = "<span class='bg-danger text-light  p-1 rounded-2'>Obesidad I</span>";
    } else if (imc >= 35 && imc <= 39.9) {
      categoriaIMC = "<span class='bg-danger text-light  p-1 rounded-2'>Obesidad II</span>";
    } else if (imc >= 40 && imc <= 49.9) {
      categoriaIMC = "<span class='bg-danger text-light  p-1 rounded-2'>Obesidad III</span>";
    } else if (imc >= 50) {
      categoriaIMC = "<span class='bg-danger text-light  p-1 rounded-2'>Obesidad IV</span>";
    }
  
    // Mostrar el resultado
    let resultado =  "<div class= 'alert alert-dark mb-3'><span class='fw-bold'>Resultado:</span><br> Sexo: " + sexo + "<br>Edad: " + edad + " años<br>Peso actual: " + pesoActual.toFixed(2) + " kg<br>Altura: " + altura + " cm<br>IMC: <span class='bg-primary text-light p-1 rounded-2'>" + imc.toFixed(2) + "</span> Categoria: " + categoriaIMC + "<br>Peso ideal: <span class='bg-info  text-light  p-1 rounded-2'> " + pesoIdeal.toFixed(2) + " kg </span><br>Deberías perder: <span class='bg-dark p-1 rounded-2  text-light'>" + (pesoAPerder > 0 ? pesoAPerder.toFixed(2) + " kg" : "No necesitas perder peso </span></div>");
  // Mostrar el resultado
  document.getElementById('resultado7').innerHTML = resultado;
    }