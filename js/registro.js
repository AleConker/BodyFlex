document.addEventListener('DOMContentLoaded', function () {
    const exerciseForm = document.getElementById('exercise-form');
    
    exerciseForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener los valores de los campos del formulario
        const name = document.getElementById('exercise-name').value.trim();
        const category = document.getElementById('exercise-category').value;
        const image = document.getElementById('exercise-image').value;
        const code = document.getElementById('exercise-code').value.trim();
        const price = document.getElementById('exercise-price').value.trim();
        const description = document.getElementById('exercise-description').value.trim();
        const trainer = document.getElementById('exercise-trainer').value.trim();
        const availability = document.querySelector('input[name="availability"]:checked');

        // Validar los campos del formulario
        if (!name || !category || !image || !code || !price || !description || !trainer || !availability) {
            alert('Por favor complete todos los campos.');
            // Redirigir al usuario a la página de indicaciones.html
            window.location.href = 'indicaciones.html';
            return;
        }

        // Crear el nuevo objeto de ejercicio
        const newExercise = {
            nombre_ejercicio: name,
            categoria: category,
            img: `../img/${image}.jpg`, // Asumiendo que las imágenes tienen extensión .jpg
            codigo: code,
            precio: parseInt(price), // Convertir el precio a un número entero
            descripcion: description,
            entrenador: trainer,
            disponibilidad: availability.value === 'true' ? true : false // Convertir la disponibilidad a booleano
        };

        // Agregar el nuevo ejercicio al array de ejercicios en la base de datos
        entrenamientos.push(newExercise);

        // Redireccionar a la página de ejercicios
        window.location.href = 'ejercicios.html';
    });
});
