// Obtener referencia al botón
var boton = document.querySelector('.btncal');
console.log(boton);

function suma () {
    let mayor = document.querySelector('.mayor');
    let menor = document.querySelector('.menor');
    let viajeros = document.querySelector('.viajero');

    // Obtener los valores de los elementos
    let valorMayor = parseInt(mayor.value);
    let valorMenor = parseInt(menor.value);

    let regex = /^\d+$/;
    if (!regex.test(valorMayor) || !regex.test(valorMenor)) {
        alert('Por favor, ingrese sólo valores numéricos en el apartado de <Viajeros>.');
        mayor.value = '';
        menor.value = '';
        viajeros.value = '';
        return;
    }

    let resultado = valorMayor + valorMenor;
    viajeros.value = resultado;
}

// Agregar el evento de clic al botón
boton.addEventListener('click', suma);

function limitarSeleccion(checkbox) {
    var checkboxes = document.getElementsByName('hab');
    checkboxes.forEach(function(currentCheckbox) {
        if (currentCheckbox !== checkbox) {
        currentCheckbox.checked = false;
        }
    });
}