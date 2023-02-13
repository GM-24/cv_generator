const fullName = document.querySelector(".name");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const aboutMeText = document.querySelector(".about-me-text");
const position = document.querySelector(".position");
const company = document.querySelector(".company");
const startTime = document.querySelector(".start-time");
const aboutExp = document.querySelector(".about-exp");
const uniName = document.querySelector(".uni-name");
const uniEndDate = document.querySelector(".uni-end-time");
const uniExp = document.querySelector(".about-uni-exp");

email.innerHTML = sessionStorage.getItem("Email");
fullName.innerHTML =
  sessionStorage.getItem("firstName") +
  " " +
  sessionStorage.getItem("lastName");

phone.innerHTML = sessionStorage.getItem("Num");
aboutMeText.innerHTML = sessionStorage.getItem("AboutMe");
position.innerHTML = sessionStorage.getItem("POSITION");
company.innerHTML = sessionStorage.getItem("COMP_NAME");
startTime.innerHTML =
  sessionStorage.getItem("START_DATE") +
  " - " +
  sessionStorage.getItem("END_DATE");

aboutExp.innerHTML = sessionStorage.getItem("JOB_DESC");

uniName.innerHTML =
  sessionStorage.getItem("UNI_NAME") +
  " , " +
  sessionStorage.getItem("SELECTED");

uniEndDate.innerHTML = sessionStorage.getItem("UNI_END_DATE");
uniExp.innerHTML = sessionStorage.getItem("UNI_DESC");
