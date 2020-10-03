// Toggle theme

const theme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");
const isDark = theme === "dark";
var metaThemeColor = document.querySelector("meta[name=theme-color]");

if (theme !== null) {
  document.body.classList.toggle("dark-theme", isDark);
  isDark
    ? metaThemeColor.setAttribute("content", "#252627")
    : metaThemeColor.setAttribute("content", "#fafafa");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  window.localStorage &&
    window.localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
  document.body.classList.contains("dark-theme")
    ? metaThemeColor.setAttribute("content", "#252627")
    : metaThemeColor.setAttribute("content", "#fafafa");
});

// triple click content change theme
const contentDiv = document.querySelector(".theme-tc");
var count = 0;
contentDiv.addEventListener("click", () => {
  if (count > 0) {
    if (count == 2) {
      themeToggle.click();
      count = 0;
    }
    count++;
  } else {
    count++;
    setTimeout(() => {
      count = 0;
    }, 420);
  }
});