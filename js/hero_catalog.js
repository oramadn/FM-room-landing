document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const images = slider.children;
  const totalImages = images.length;
  let currentIndex = 0;

  function updateSlide() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  document.querySelector(".left-arrow").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlide();
  });

  document.querySelector(".right-arrow").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlide();
  });
});
