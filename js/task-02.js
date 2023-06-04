const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const itemEl = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++) {
 const name = ingredients[i];
 console.log(name);
 const list = document.createElement("li");
 list.classList.add("item");
 list.textContent = `${name}`;
 itemEl.append(list);
}
