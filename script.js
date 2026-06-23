// Lógica do Menu Abrir/Fechar
const btnMobile = document.getElementById('menu-btn');
const nav = document.getElementById('main-nav');

btnMobile.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Lógica do Carrossel Automático
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}
