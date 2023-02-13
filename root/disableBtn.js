const nextBtn = document.querySelector(".next-btn");
const FirstName = document.querySelector(".iMessedUp");
const LastName = document.querySelector(".lastF-ing_name");
const mfEmail = document.querySelector(".mf-email");

function checkClass() {
  if (
    FirstName.classList.contains("check") &&
    LastName.classList.contains("check") &&
    mfEmail.classList.contains("check")
  ) {
    nextBtn.disabled = false;
    nextBtn.classList.remove("disabled");
  } else {
    nextBtn.disabled = true;
    nextBtn.classList.add("disabled");
  }
}

FirstName.addEventListener("input", checkClass);
LastName.addEventListener("input", checkClass);
mfEmail.addEventListener("input", checkClass);
