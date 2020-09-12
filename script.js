let body = document.querySelector("body");
let toggleBtn = document.querySelector(".toggle-btn");
let currentTheme = localStorage.getItem("currentTheme");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});
