document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector("[data-carousel-prev]");
    const nextButton = document.querySelector("[data-carousel-next]");
    const items = document.querySelectorAll("[data-carousel-item]");
  
    let currentIndex = 0;
  
    function showItem(index) {
      items.forEach(item => item.classList.add("hidden"));
      items[index].classList.remove("hidden");
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    }
  
    // Event listeners para los botones de deslizamiento
    if (prevButton && nextButton) {
      prevButton.addEventListener("click", prevSlide);
      nextButton.addEventListener("click", nextSlide);
    }
  
    // Mostrar el primer ítem por defecto al cargar la página
    showItem(currentIndex);
  });
  