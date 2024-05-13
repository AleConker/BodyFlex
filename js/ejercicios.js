document.addEventListener('DOMContentLoaded', function () {
    const productosSection = document.getElementById('productos-section');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const pageInfo = document.getElementById('page-info');
    
    const productsPerPage = 15;
    let currentPage = 1;
    let totalPages = Math.ceil(entrenamientos.length / productsPerPage);

    function renderProducts() {
        productosSection.innerHTML = ''; // Limpiar la sección de productos
        
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = Math.min(startIndex + productsPerPage, entrenamientos.length);

        for (let i = startIndex; i < endIndex; i++) {
            const product = entrenamientos[i];
            const productCard = createProductCard(product);
            productosSection.appendChild(productCard);
        }

        pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <h2>${product.nombre_ejercicio}</h2>
            <p><strong>Categoría:</strong> ${product.categoria}</p>
            <img src="${product.img}" alt="${product.nombre_ejercicio}">
            <p><strong>Código:</strong> ${product.codigo}</p>
            <p><strong>Precio:</strong> $ ${product.precio} COP</p>
            <p><strong>Descripción:</strong> ${product.descripcion}</p>
            <p><strong>Entrenador:</strong> ${product.entrenador}</p>
            <p><strong>Disponibilidad:</strong> ${product.disponibilidad ? 'Disponible' : 'No Disponible'}</p>
        `;

        return productCard;
    }

    // Event listeners para la paginación
    prevButton.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
        }
    });

    // Renderizar los productos iniciales
    renderProducts();
});
