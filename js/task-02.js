const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments"
];

const navEl = document.querySelector("#ingredients");

let ingredientsArr = [];

ingredients.map(function (ingredients) {
  const navItemEl = document.createElement("li");
  navItemEl.textContent = ingredients;
  navItemEl.classList.add("item");
  return ingredientsArr.push(navItemEl);
});

navEl.append(...ingredientsArr);
