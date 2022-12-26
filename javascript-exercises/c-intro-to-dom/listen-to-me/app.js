const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const div = document.querySelector(".div");
const input = document.querySelector("#input");
const para = document.querySelector(".input-text");
const form = document.querySelector(".form");
const submitPara = document.querySelector(".submit-para");

h1.addEventListener("click", () => {
  h1.textContent = "Hi!"
})

h2.addEventListener("dblclick", () => {
  h2.style.color = "#B000B5"
})

div.addEventListener("mouseover", () => {
  div.textContent = "Inside the box"
})

div.addEventListener("mouseout", () => {
  div.textContent = "Mouse outside the box"
})

input.addEventListener("input", () => {
  para.textContent = input.value;
})

form.addEventListener("submit", (e) => {
  submitPara.textContent = "Form Submitted"
  e.preventDefault();
})

window.addEventListener('copy', () => {
  submitPara.textContent = "Ha! You Copied something"
  submitPara.style.color = "#C90076"
});

window.addEventListener("resize", () => {
  submitPara.textContent = "Hey! You're resizing the window"
  submitPara.style.color = "#482b7d"
})