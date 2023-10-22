document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const result = document.getElementById("result");
    const imageContainer = document.getElementById("imageContainer");

    calculateButton.addEventListener("click", function() {
        const age = parseFloat(document.getElementById("age").value);

        if (isNaN(age)) {
            result.textContent = "Por favor, ingresa una edad válida.";
            imageContainer.innerHTML = "";
        } else {
            let stage = "";
            let imageName = "";

            } if (age >= 0.1 && age <= 13) {
                stage = "Niñez";
                imageName = "Niñez.jpg";
                
            } else if (age >= 14 && age <= 23) {
                stage = "Adolescencia";
                imageName = "Adolescencia.jpg";

            } else if (age >= 24 && age <= 48) {
                stage = "Juventud";
                imageName = "Juventud.jpg";

            } else {
                stage = "Senectud";
                imageName = "Senectud.jpg";
            }

            result.textContent = "Tu etapa de vida es: " + stage;
            imageContainer.innerHTML = `<img src="${imageName}" alt="${stage}">`;
        })
    })