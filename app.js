const menu = [
  {
    id: 1,
    title: "super fried pancakes",
    category: "breakfast",
    price: 25.99,
    img: "images/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
  },
  {
    id: 2,
    title: "Lunch set",
    category: "lunch",
    price: 33.99,
    img: "images/item-2.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 3,
    title: "Mango cookie blended milkshake",
    category: "shakes",
    price: 6.99,
    img: "images/item-3.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing el.`,
  },
  {
    id: 4,
    title: "Two eggs On Cheese",
    category: "breakfast",
    price: 10.99,
    img: "images/item-4.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. `,
  },
  {
    id: 5,
    title: "Gladiator burger",
    category: "lunch",
    price: 22.99,
    img: "images/item-5.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit `,
  },
  {
    id: 6,
    title: "Live the dream",
    category: "shakes",
    price: 8.99,
    img: "images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu); //Running function to show the dynamic menu
  displayMenuButtons(); //Running function to show all Menu buttons

  //Loading button list
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    console.log(categories);

    //(2) Add new variable categoryBtns to map out all buttons on the list dynamically
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
      })
      .join("");
    console.log(categoryBtns);
    //Load dynamic buttons to the btnContainer class of HTML that contains buttons
    btnContainer.innerHTML = categoryBtns;
  }

  //(1) Loading menu list
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    //displaying menu to HTMl
    sectionCenter.innerHTML = displayMenu;
  }

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      const category = event.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
});
