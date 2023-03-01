const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments"
];

const navEl = document.querySelector("#ingredients");

const navItemEl = document.createElement("li");

navItemEl.textContent = ingredients;
navItemEl.classList.add("item");

navEl.appendChild(navItemEl);

console.log(navItemEl);
console.log(navEl);
