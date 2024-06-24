document.addEventListener("DOMContentLoaded", () => {
  const toEndLink = document.querySelector(".to-end");
  const spanSmile = document.querySelector(".span-smile");

  // Показати текст з класом .to-end на 2-й секунді
  setTimeout(() => {
    toEndLink.classList.add("visible");
  }, 2000);

  // Повернути вміст span на 90 градусів через секунду після появи .to-end і змінити колір
  setTimeout(() => {
    spanSmile.classList.add("rotated");
  }, 2000);
});
