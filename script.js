let body = document.querySelector("body");
let toggleBtn = document.querySelector(".toggle-btn");
let currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  body.classList.add("dark-theme");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("currentTheme", "activeTheme");
  } else {
    localStorage.removeItem("currentTheme");
  }
});
