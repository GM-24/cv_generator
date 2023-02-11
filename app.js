let input1 = document.querySelector(".test1");
let input2 = document.querySelector(".test2");

// const nextBtn = document.querySelector(".next-btn");

const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");

let firstName = sessionStorage.getItem("firstName");
let lastName = sessionStorage.getItem("lastName");

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
