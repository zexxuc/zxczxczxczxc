AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});
  
document.getElementById("hireMeBtn").addEventListener("click", () => {
  alert("Связаться можно по почте: toktogulovat23@gmail.com");
});

document.getElementById("seeProjectsBtn").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

const scrollUpBtn = document.getElementById("scrollUpBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burgerBtn.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
});
