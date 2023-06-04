const myInput = document.getElementById("name-input");
const mySpan = document.getElementById("name-output");

myInput.addEventListener("input", newInput);

function newInput(el) {
 mySpan.textContent = el.currentTarget.value;

 if (el.currentTarget.value === "") {
  mySpan.textContent = "Anonymous";
 }
}
