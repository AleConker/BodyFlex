document.addEventListener('DOMContentLoaded', function () {
    const filtersForm = document.getElementById('filters');
    const resultsTable = document.getElementById('results-body');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const pageInfo = document.getElementById('page-info');

    let currentPage = 1;
    const productsPerPage = 10;
    let filteredResults = []; // Variable para almacenar los resultados filtrados

    const KEY_LOCAL_STORAGE = "nuevos_ejercicios";

    function obtenerDatos(key) {
        const dataString = localStorage.getItem(key);
        return dataString ? JSON.parse(dataString) : [];
    }

    const nuevosEjercicios = obtenerDatos(KEY_LOCAL_STORAGE);

    const allEntrenamientos = entrenamientos.concat(nuevosEjercicios);

    // Función para obtener los resultados filtrados
    function applyFilters() {
        // Obtener valores de los filtros
        const minPrice = document.getElementById('price-min').value.trim();
        const maxPrice = document.getElementById('price-max').value.trim();
        const category = document.getElementById('category-filter').value;
        const availability = document.getElementById('availability-filter').value;

        // Filtrar resultados
        filteredResults = allEntrenamientos.filter(product => {
            const meetsPriceCondition = (!minPrice || product.precio >= minPrice) && (!maxPrice || product.precio <= maxPrice);
            const meetsCategoryCondition = !category || product.categoria.toLowerCase() === category.toLowerCase();
            const meetsAvailabilityCondition = !availability || (availability === 'true' && product.disponibilidad) || (availability === 'false' && !product.disponibilidad);
            return meetsPriceCondition && meetsCategoryCondition && meetsAvailabilityCondition;
        });

        // Mostrar resultados en la tabla
        showResults();
    }

    // Función para mostrar los resultados en la tabla
    function showResults() {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = Math.min(startIndex + productsPerPage, filteredResults.length);
        const resultsToShow = filteredResults.slice(startIndex, endIndex);

        resultsTable.innerHTML = ''; // Limpiar resultados anteriores

        resultsToShow.forEach(result => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${result.nombre_ejercicio}</td>
                <td>${result.categoria}</td>
                <td>${result.precio}</td>
                <td>${result.entrenador}</td>
                <td>${result.disponibilidad ? 'Disponible' : 'No Disponible'}</td>
                <td><img src="${result.img}" alt="${result.nombre_ejercicio}" width="100"></td>
            `;
            resultsTable.appendChild(row);
        });

        // Actualizar información de paginación
        const totalPages = Math.ceil(filteredResults.length / productsPerPage);
        pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    // Event listener para el botón de búsqueda
    document.getElementById('search-btn').addEventListener('click', function () {
        currentPage = 1; // Reiniciar a la primera página al realizar una nueva búsqueda
        applyFilters();
    });

    // Event listener para el botón de limpiar
    document.getElementById('clear-btn').addEventListener('click', function () {
        // Limpiar los valores de los campos del formulario manualmente
        document.getElementById('price-min').value = '';
        document.getElementById('price-max').value = '';
        document.getElementById('category-filter').selectedIndex = 0;
        document.getElementById('availability-filter').selectedIndex = 0;
        
        // Limpiar los resultados y la información de paginación
        filteredResults = [];
        resultsTable.innerHTML = '';
        pageInfo.textContent = '';
        prevButton.disabled = true;
        nextButton.disabled = true;
    });

    // Event listeners para la paginación
    prevButton.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            showResults();
        }
    });

    nextButton.addEventListener('click', function () {
        const totalPages = Math.ceil(filteredResults.length / productsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            showResults();
        }
    });
});

