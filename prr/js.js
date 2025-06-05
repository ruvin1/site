document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dotsNav = document.querySelector('.slider-dots');
  const dots = Array.from(dotsNav.children);
  
  let currentIndex = 0;
  
  function updateSlider(index) {
    // Ограничиваем индекс
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;
    
    // Смещаем трек
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Обновляем активную точку
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }
  
  prevBtn.addEventListener('click', () => {
    updateSlider(currentIndex - 1);
  });
  
  nextBtn.addEventListener('click', () => {
    updateSlider(currentIndex + 1);
  });
  
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      updateSlider(idx);
    });
  });
  
  // Инициализация
  updateSlider(0);
});
