const button = document.querySelector("#toggleTheme");
const prefersDarkScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const currentTheme = sessionStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
  document.body.classList.remove("light-theme");
} else if (currentTheme == "light") {
  document.body.classList.add("light-theme");
  document.body.classList.remove("dark-theme");
}

button.addEventListener("click", function () {
  let theme;
  if (prefersDarkScheme) {
    document.body.classList.toggle("light-theme");
    theme = document.body.classList.contains("light-theme") ? "light" : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  }
  sessionStorage.setItem("theme", theme);
});
