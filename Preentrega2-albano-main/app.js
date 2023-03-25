const menu = [
    {
      id: 1,
      title: "Medialuna",
      category: "desayuno",
      price: 4,
      img : "./fotos/medialunas.jpeg",
      desc: `Como una luna,pero media y tengo un hermano frances llamado Croissant `,
    },
    {
      id: 2,
      title: "Hamburguesa con papa fritas",
      category: "almuerzo",
      price: 25,
      img :   "./fotos/burgir.jpeg",
      desc: `Cuando tenes tremendo hambre y queres partirte la boca`,
    },
    {
      id: 3,
      title: "milkshake",
      category: "batidos",
      price: 6,
      img: "./fotos/milkshake.jpeg",
      desc: `Lo mismo que Mcdonald pero mas rico`,
    },
    {
      id: 4,
      title: "Facturas/bizcochos",
      category: "desayuno",
      price: 0.25,
      img: "./fotos/bizco.jpeg",
      desc: `Si venis a nuestro restaurante mas corto que julio Cortaza 💸 pedite esto `,
    },
    {
      id: 5,
      title: "Ravioles",
      category: "almuerzo",
      price: 22,
      img: "./fotos/rav.jpeg",
      desc: `Pasta pasta y pasta `,
    },
    {
      id: 6,
      title: "oreo shake",
      category: "batidos",
      price: 8,
      img: "./fotos/oreo.jpeg",
      desc: `Exactamente lo mismo que el milkshake pero con oreo`,
    },
    {
      id: 7,
      title: "Huevo revuelto con jugo de naranja re americano",
      category: "desayuno",
      price: 7,
      img: "./fotos/amer.jpeg",
      desc: `Vendiste un pulmon y te fuiste a new york por dos dias y cuando volviste,te haces el fantasma diciendo que olvidaste palabras en 
      español y que solo comes cosas americanas y que te encanta la NFL?, bueno no esperes mas,pedite este desayuno pedazo de trolo `,
    },
    {
      id: 8,
      title: "Chivito",
      category: "almuerzo",
      price: 12,
      img: "./fotos/chiv.jpeg",
      desc: `Soy lo que te pedis cuando tenes mucha hambre pero nunca te lo terminas `,
    },
    {
      id: 9,
      title: "multifrutal",
      category: "batidos",
      price: 7,
      img: "./fotos/multifruta.jpeg",
      desc: `Es un batido vegano digamos`,
    },
    {
      id: 10,
      title: "milanga napolitana con fritas",
      category: "almuerzo",
      price: 30,
      img: "./fotos/mila.jpeg",
      desc: `Probablemente lo que comen los dioses en el olimpo .`,
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // desplegar todos los items cuando se inicie la pagina
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
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
    
  
    sectionCenter.innerHTML = displayMenu;
  }
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
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        
        const category = e.currentTarget.dataset.id;
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
  }