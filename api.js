const optionCont = document.querySelector(".option-container");

fetch("https://resume.redberryinternship.ge/api/degrees")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const option = document.createElement("option");
      option.innerHTML = data[i].title;
      optionCont.append(option);
    }
  })
  .catch((error) => {
    console.error(error);
  });
