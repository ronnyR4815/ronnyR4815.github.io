document.addEventListener("DOMContentLoaded", function () {
    // Aparece el header con animación
    setTimeout(() => {
        document.querySelector("header").classList.add("visible");
    }, 500);

    // Detecta el scroll para mostrar las secciones progresivamente
    const sections = document.querySelectorAll("section");

    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    // Ejecutar en scroll y al cargar
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
