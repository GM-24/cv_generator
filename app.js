// let input1 = document.querySelector(".test1"); /// i know it's lame approach
// let input2 = document.querySelector(".test2");

// const fname = document.querySelector(".fname");
// const lname = document.querySelector(".lname");

// input1.onkeyup = () => {
//   fname.innerHTML = input1.value + " ";
// };
// input2.onkeyup = () => {
//   lname.innerHTML = input2.value;
// };

let input1 = document.querySelector(".test1");
let input2 = document.querySelector(".test2");

const nextBtn = document.querySelector(".next-btn");
const prevtBtn = document.querySelector(".prev-btn");
const resetBtn = document.querySelector(".reset-btn");

const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");

// Get values from localStorage
let firstName = sessionStorage.getItem("firstName");
let lastName = sessionStorage.getItem("lastName");

// If values are not found in localStorage, set them to an empty string
if (!firstName) {
  firstName = "";
}
if (!lastName) {
  lastName = "";
}

fname.innerHTML = firstName;
lname.innerHTML = lastName;

input1.onkeyup = () => {
  fname.innerHTML = input1.value;
  sessionStorage.setItem("firstName", input1.value);
};

input2.onkeyup = () => {
  lname.innerHTML = input2.value;
  sessionStorage.setItem("lastName", input2.value);
};

nextBtn.onclick = () => {
  // Save the values to localStorage
  if (!sessionStorage.getItem("firstName")) {
    sessionStorage.setItem("firstName", input1.value);
  }
  if (!sessionStorage.getItem("lastName")) {
    sessionStorage.setItem("lastName", input2.value);
  }
};

prevtBtn.onclick = () => {
  // Save the values to localStorage
  if (!sessionStorage.getItem("firstName")) {
    sessionStorage.setItem("firstName", input1.value);
  }
  if (!sessionStorage.getItem("lastName")) {
    sessionStorage.setItem("lastName", input2.value);
  }
};
