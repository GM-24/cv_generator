const aboutMe = document.querySelector(".client-about-me-input");
const aboutMeInput = document.querySelector(".about-me-info");
const header = document.querySelector(".about--me");

let AboutMe = sessionStorage.getItem("AboutMe");

if (!AboutMe) {
  AboutMe = "";
}

aboutMe.innerHTML = AboutMe;

if (sessionStorage.getItem("AboutMe")) {
  header.classList.remove("hidden");
} else {
  header.classList.add("hidden");
}

aboutMeInput.onkeyup = () => {
  aboutMe.innerHTML = aboutMeInput.value;
  sessionStorage.setItem("AboutMe", aboutMeInput.value);

  if (aboutMeInput.value) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }
};
