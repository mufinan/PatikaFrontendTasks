
const menu = [
  {
    id: 1,
    title: "Sushi",
    category: "Japanese",
    price: 15.99,
    img: "https://via.placeholder.com/150",
    desc: "Delicious sushi with fresh ingredients."
  },
  {
    id: 2,
    title: "Dim Sum",
    category: "Chinese",
    price: 12.99,
    img: "https://via.placeholder.com/150",
    desc: "Steamed dumplings filled with meat and vegetables."
  },
  {
    id: 3,
    title: "Pad Thai",
    category: "Thai",
    price: 10.99,
    img: "https://via.placeholder.com/150",
    desc: "Stir-fried noodles with peanuts and lime."
  },
  {
    id: 4,
    title: "Ramen",
    category: "Japanese",
    price: 13.99,
    img: "https://via.placeholder.com/150",
    desc: "Warm noodle soup with savory broth."
  },
];

const btnContainer = document.querySelector(".btn-container");
const menuContainer = document.querySelector(".menu-container");

const categories = ["All", ...new Set(menu.map((item) => item.category))];

categories.forEach((category) => {
  const button = document.createElement("button");
  button.textContent = category;
  button.addEventListener("click", () => filterMenu(category));
  btnContainer.appendChild(button);
});

const displayMenu = (menuItems) => {
  menuContainer.innerHTML = "";
  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h4>${item.title} - $${item.price.toFixed(2)}</h4>
      <p>${item.desc}</p>
    `;
    menuContainer.appendChild(menuItem);
  });
};

const filterMenu = (category) => {
  const filteredMenu = category === "All" ? menu : menu.filter((item) => item.category === category);
  displayMenu(filteredMenu);
};

displayMenu(menu);
