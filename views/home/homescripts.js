const images = [
    '../img/imagen1.jpg', // Ruta a la primera imagen
    '../img/imagen2.jpg', // Ruta a la segunda imagen
    '../img/imagen3.jpg'  // Ruta a la tercera imagen
];

let currentImageIndex = 0;
let currentNewsIndex = 0;

const news = [
    'Noticia 1: Descripción breve de la noticia.',
    'Noticia 2: Descripción breve de la noticia.',
    'Noticia 3: Descripción breve de la noticia.'
];

function changeImage() {
    const leftBox = document.querySelector('.left-box');
    leftBox.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

function changeNews() {
    const rightBox = document.querySelector('.right-box p');
    rightBox.textContent = news[currentNewsIndex];
    currentNewsIndex = (currentNewsIndex + 1) % news.length;
}

setInterval(changeImage, 5000); // Cambia la imagen cada 5 segundos
setInterval(changeNews, 5000);  // Cambia la noticia cada 5 segundos
