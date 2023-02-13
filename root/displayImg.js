const image = document.querySelector(".image");

image.innerHTML = sessionStorage.getItem("image");

window.addEventListener("DOMContentLoaded", () => {
  image.src = sessionStorage.getItem("image");
});
