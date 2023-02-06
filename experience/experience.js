const positionInput = document.querySelector(".position-input");
const positionInfo = document.querySelector(".position-info");
const compInput = document.querySelector(".comp-name-input");
const compName = document.querySelector(".comp-name");
const jobDesc = document.querySelector(".job-desc");
const jobDescInput = document.querySelector(".job-desc-info");

const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");

const startDateDisplay = document.querySelector(".start-date-display");
const endDateDisplay = document.querySelector(".end-date-display");

let POSITION = sessionStorage.getItem("POSITION");
let START_DATE = sessionStorage.getItem("START_DATE");
let END_DATE = sessionStorage.getItem("END_DATE");
let COMP_NAME = sessionStorage.getItem("COMP_NAME");
let JOB_DESC = sessionStorage.getItem("JOB_DESC");

if (!POSITION) {
  POSITION = "";
}

if (!START_DATE) {
  START_DATE = "";
}

if (!END_DATE) {
  END_DATE = "";
}

if (!COMP_NAME) {
  COMP_NAME = "";
}

if (!JOB_DESC) {
  JOB_DESC = "";
}

positionInfo.innerHTML = POSITION;
startDateDisplay.innerHTML = START_DATE;
endDateDisplay.innerHTML = END_DATE;
compName.innerHTML = COMP_NAME;
jobDesc.innerHTML = JOB_DESC;

positionInput.onkeyup = () => {
  positionInfo.innerHTML = positionInput.value;

  sessionStorage.setItem("POSITION", positionInput.value);
};

compInput.onkeyup = () => {
  compName.innerHTML = compInput.value;

  sessionStorage.setItem("COMP_NAME", compInput.value);
};

startDate.addEventListener("click", () => {
  startDateDisplay.innerHTML = startDate.value + "  -  ";
  sessionStorage.setItem("START_DATE", startDate.value);
});

endDate.addEventListener("click", () => {
  endDateDisplay.innerHTML = endDate.value;
  sessionStorage.setItem("END_DATE", endDate.value);
});

jobDesc.onkeyup = () => {
  jobDesc.innerHTML = jobDescInput.value;
  sessionStorage.setItem("JOB_DESC", jobDescInput.value);
};
