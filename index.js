let slideIndex = [1, 1]; // Índice de la imagen actual para ambos carruseles
let slideId = ["carrusel-1", "carrusel-2"]; // IDs de los carruseles

showSlides(1, 0);
showSlides(1, 1);

function moveSlide(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.querySelectorAll(`#${slideId[no]} .carrusel-item`);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex[no] - 1].style.display = "block";  
}
