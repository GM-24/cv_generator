const imageInput = document.querySelector(".image-uploader");
const image = document.querySelector(".image");

imageInput.addEventListener("change", () => {
  let file = imageInput.files[0];
  let reader = new FileReader();

  reader.addEventListener("load", () => {
    image.src = reader.result;
    sessionStorage.setItem("image", reader.result);
  });

  reader.readAsDataURL(file);
});

image.src = sessionStorage.getItem("image");
