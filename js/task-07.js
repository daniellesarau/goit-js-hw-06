const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", abra);
function abra(e) {
 text.style.fontSize = `${e.target.value}px`;
}
