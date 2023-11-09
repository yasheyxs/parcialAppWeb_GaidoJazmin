const imageGallery = document.getElementById("imageGallery");
const imageForm = document.getElementById("imageForm");

let images = []; // Almacena las imágenes cargadas
let idCounter = 1; // ID autoincremental

imageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const imageUrl = document.getElementById("imageUrl").value;

    const newImage = {
        id: idCounter++,
        title,
        description,
        imageUrl
    };

    images.push(newImage);
    displayImages();
    imageForm.reset(); // Limpia el formulario
});

function displayImages() {
    const emptyGalleryMessage = document.getElementById("emptyGalleryMessage");

    imageGallery.innerHTML = "";

    images.forEach((image) => {
        const imageCard = document.createElement("div");
        imageCard.classList.add("image-card");
        imageCard.innerHTML = `
            <img src="${image.imageUrl}" alt="${image.title}">
            <h3>${image.title}</h3>
            <p>${image.description}</p>
            <button onclick="confirmDeleteImage(${image.id})">Eliminar</button> <!-- Agrega confirmación al eliminar -->
        `;
        imageGallery.appendChild(imageCard);
    });
}

function confirmDeleteImage(id) {
    const confirmDelete = confirm("¿Estás seguro de que quieres eliminar esta imagen?");

    if (confirmDelete) {
        deleteImage(id);
    }
}

function deleteImage(id) {
    images = images.filter((image) => image.id !== id);
    displayImages();
}