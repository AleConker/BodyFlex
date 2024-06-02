document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('exercise-form');
    const imageSelect = document.getElementById('imagen');
    const imagePreview = document.getElementById('image-preview');

    // Clave de almacenamiento en Local Storage
    const KEY_LOCAL_STORAGE = "nuevos_ejercicios";

    // Función para obtener datos desde el Local Storage
    function obtenerDatos(key) {
        const dataString = localStorage.getItem(key);
        return dataString ? JSON.parse(dataString) : [];
    }

    // Obtener ejercicios desde Local Storage
    const nuevosEjercicios = obtenerDatos(KEY_LOCAL_STORAGE);

    

    // Mostrar previsualización de la imagen seleccionada
    imageSelect.addEventListener('change', () => {
        const selectedImage = imageSelect.value;
        if (selectedImage) {
            imagePreview.src = `../img/${selectedImage}.jpg`;
            imagePreview.style.display = 'block';
        } else {
            imagePreview.style.display = 'none';
        }
    });

    // Función para verificar si el código ya existe
    function codigoExiste(codigo) {
        const allEntrenamientos = entrenamientos.concat(nuevosEjercicios);
        return allEntrenamientos.some(ejercicio => ejercicio.codigo === codigo);
    }

    // Validación y envío del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombreEjercicio = document.getElementById('nombre_ejercicio').value.trim();
        const categoria = document.getElementById('categoria').value;
        const imagen = document.getElementById('imagen').value;
        const precio = document.getElementById('precio').value;
        const codigo = document.getElementById('codigo').value.trim();
        const entrenador = document.getElementById('entrenador').value.trim();
        const disponibilidad = document.querySelector('input[name="disponibilidad"]:checked');
        const descripcion = document.getElementById('descripcion').value.trim();

        let errorMessage = '';

        if (!nombreEjercicio) errorMessage += 'Falta ingresar el nombre del ejercicio.\n';
        if (!categoria) errorMessage += 'Falta seleccionar la categoría.\n';
        if (!imagen) errorMessage += 'Falta seleccionar la imagen.\n';
        if (!precio) errorMessage += 'Falta ingresar el precio.\n';
        if (!codigo || codigo.length < 8 || !/[a-z]/.test(codigo) || !/[A-Z]/.test(codigo) || !/(\d.*\d)/.test(codigo)) {
            errorMessage += 'El código no cumple con las especificaciones.\n';
        } else if (codigoExiste(codigo)) {
            errorMessage += 'Este código pertenece a un ejercicio existente, por favor escriba uno distinto.\n';
        }
        if (!entrenador) errorMessage += 'Falta ingresar el nombre del entrenador.\n';
        if (!disponibilidad) errorMessage += 'Falta seleccionar la disponibilidad.\n';
        if (!descripcion) errorMessage += 'Falta ingresar la descripción.\n';

        if (errorMessage) {
            const userChoice = confirm(`${errorMessage}\n¿Desea ver las instrucciones de cómo llenar el formulario?`);
            if (userChoice) {
                window.location.href = 'instrucciones.html';
            }
        } else {
            const nuevoEjercicio = {
                "nombre_ejercicio": nombreEjercicio,
                "categoria": categoria,
                "img": `../img/${imagen}.jpg`,
                "codigo": codigo,
                "precio": Number(precio),
                "descripcion": descripcion,
                "entrenador": entrenador,
                "disponibilidad": disponibilidad.value === 'true'
            };

            // Guardar el nuevo ejercicio en Local Storage
            nuevosEjercicios.push(nuevoEjercicio);
            localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(nuevosEjercicios));

            // Redirigir a la página de ejercicios
            window.location.href = 'ejercicios.html';
        }
    });

    // Limpiar el formulario y ocultar la previsualización de la imagen
    form.addEventListener('reset', () => {
        imagePreview.style.display = 'none';
    });
});




