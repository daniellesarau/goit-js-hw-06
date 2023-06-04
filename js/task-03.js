const images = [
 {
  url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "White and Black Long Fur Cat",
 },
 {
  url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "Orange and White Koi Fish Near Yellow Koi Fish",
 },
 {
  url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "Group of Horses Running",
 },
];

const list = document.querySelector(".gallery");
const newElement = images.map((element) => `<li><img class="picture" src=${element.url} height = "150" width = '200' alt='${element.alt}'></img></li>`).join("");
list.insertAdjacentHTML("beforeend", newElement);

list.style.listStyle = "none";
list.style.display = "flex";
list.style.gap = "10px";
list.style.justifyContent = "center";
list.style.alignItems = "center";
