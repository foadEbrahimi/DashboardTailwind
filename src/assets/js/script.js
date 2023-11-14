const lightBtn = document.querySelector(".lightMode");
const darkBtn = document.querySelector(".darkMode");
const HTML = document.querySelector(".html");
lightBtn.addEventListener("click", () => HTML.classList.remove("dark"));
darkBtn.addEventListener("click", () => HTML.classList.add("dark"));
