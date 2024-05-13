const addForm = document.getElementById("form-validation");

addForm.addEventListener("submit", (e)=> {
    if (addForm.checkValidity() === false){
        e.preventDefault();
        e.stopPropagation();
        // addForm.classList.add('was-validate');
        const messageDiv = document.createElement('div');
        messageDiv.textContent = "Ups, parece que no digitaste correctamente los datos para hacer un registro exitoso. Te vamos a redirigir a una página de indicaciones para aclararte el paso a paso de cómo hacer el registro correctamente.";
        messageDiv.classList.add('error-message');
        document.body.appendChild(messageDiv);
        // Redirigir a la página de indicaciones.html después de unos segundos
        setTimeout(() => {
            window.location.href = 'indicaciones.html';
        }, 5000);
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const addForm = document.getElementById('form-validation');

    addForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores del formulario
        const nombreEjercicio = addForm.querySelector('input[name="nombre-ejercicio"]').value;
        const categoria = addForm.querySelector('input[name="categoria"]').value;
        const img = addForm.querySelector('input[name="imagen"]').value;
        const codigo = addForm.querySelector('input[name="codigo"]').value;
        const precio = addForm.querySelector('input[name="precio"]').value;
        const descripcion = addForm.querySelector('input[name="descripcion"]').value;
        const entrenador = addForm.querySelector('input[name="entrenador"]').value;
        const disponibilidad = addForm.querySelector('input[name="disponibilidad"]').value === "Verdadero" ? true : false;

        // Crear un nuevo objeto con los valores del formulario
        const nuevoEntrenamiento = {
            "nombre_ejercicio": nombreEjercicio,
            "categoria": categoria,
            "img": img,
            "codigo": codigo,
            "precio": parseFloat(precio), // Convertir a número
            "descripcion": descripcion,
            "entrenador": entrenador,
            "disponibilidad": disponibilidad
        };

        // Agregar el nuevo objeto al array de entrenamientos
        entrenamientos.push(nuevoEntrenamiento);

        // Mostrar un mensaje de éxito o redirigir a otra página
        alert("¡El ejercicio ha sido registrado exitosamente!");

        // Limpiar el formulario después de agregar el nuevo entrenamiento
        addForm.reset();
    });
});