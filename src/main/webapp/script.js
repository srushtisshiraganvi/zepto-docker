document.addEventListener("DOMContentLoaded", () => {
  const data = {
    fruits: [
      { name: "Apple Granny Smith", price: 106, img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", off: 28 },
      { name: "Custard Apple", price: 70, img: "https://images.unsplash.com/photo-1606813908474-1ec2e6c07e6b", off: 18 },
      { name: "Kiwi", price: 77, img: "https://images.unsplash.com/photo-1574226516831-e1dff420e12a", off: 32 },
      { name: "Grapes Imported", price: 98, img: "https://images.unsplash.com/photo-1576402187877-9b0e1b3fdf8f", off: 36 },
      { name: "Blueberry Imported", price: 198, img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc", off: 98 },
    ],
    veggies: [
      { name: "Broccoli", price: 45, img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2", off: 12 },
      { name: "Carrot", price: 30, img: "https://images.unsplash.com/photo-1582515073490-39981397c445", off: 10 },
      { name: "Tomato", price: 25, img: "https://images.unsplash.com/photo-1572441710534-680c1a6bdc37", off: 5 },
    ],
    herbs: [
      { name: "Coriander", price: 15, img: "https://images.unsplash.com/photo-1600093463592-3d3d0d55c8c4", off: 5 },
      { name: "Mint Leaves", price: 20, img: "https://images.unsplash.com/photo-1615485299964-84eb3025d8f7", off: 8 },
    ],
    exotics: [
      { name: "Avocado", price: 150, img: "https://images.unsplash.com/photo-1605478039916-9c12b8f5b16d", off: 30 },
      { name: "Zucchini", price: 60, img: "https://images.unsplash.com/photo-1590080875831-3a72a6a3e813", off: 12 },
    ],
    organic: [
      { name: "Organic Banana", price: 55, img: "https://images.unsplash.com/photo-1617134839260-97b1b0f02f4e", off: 10 },
      { name: "Organic Orange", price: 80, img: "https://images.unsplash.com/photo-1615485299468-d7f23b91b8f4", off: 15 },
    ],
    sprouts: [
      { name: "Mixed Sprouts", price: 40, img: "https://images.unsplash.com/photo-1615485737456-d8a9679c8e84", off: 10 },
      { name: "Cut Salad Mix", price: 65, img: "https://images.unsplash.com/photo-1621932954980-df7e30dc6cc7", off: 15 },
    ],
  };

  const grid = document.querySelector(".products-grid");
  const sectionTitle = document.getElementById("section-title");
  const categories = document.querySelectorAll(".category");

  function renderProducts(categoryKey) {
    const products = data[categoryKey];
    grid.innerHTML = "";
    sectionTitle.textContent =
      document.querySelector(`.category[data-cat="${categoryKey}"]`).textContent;
    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p class="price">₹${p.price} <small style="color:gray">(${p.off}₹ OFF)</small></p>
        <button class="add">ADD</button>
      `;
      grid.appendChild(card);
    });
  }

  // Default: show fruits
  renderProducts("fruits");

  categories.forEach(cat => {
    cat.addEventListener("click", () => {
      categories.forEach(c => c.classList.remove("active"));
      cat.classList.add("active");
      renderProducts(cat.dataset.cat);
    });
  });

  grid.addEventListener("click", e => {
    if (e.target.classList.contains("add")) {
      e.target.textContent = "✔ Added";
      e.target.style.background = "green";
      setTimeout(() => {
        e.target.textContent = "ADD";
        e.target.style.background = "";
      }, 1500);
    }
  });
});
