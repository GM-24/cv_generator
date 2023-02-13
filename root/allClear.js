const STARTER_PAGE = document.querySelector(".backBtn");

STARTER_PAGE.addEventListener("click", () => {
  for (let key of Object.keys(sessionStorage)) {
    sessionStorage.setItem(key, "");
  }
});
