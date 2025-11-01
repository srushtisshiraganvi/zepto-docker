document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "Apple Granny Smith", price: 106, img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", off: 28 },
    { name: "Custard Apple", price: 70, img: "https://images.unsplash.com/photo-1606813908474-1ec2e6c07e6b", off: 18 },
    { name: "Snacky Kiwi", price: 77, img: "https://images.unsplash.com/photo-1574226516831-e1dff420e12a", off: 32 },
    { name: "Grapes Imported", price: 98, img: "https://images.unsplash.com/photo-1576402187877-9b0e1b3fdf8f", off: 36 },
    { name: "Blueberry Imported", price: 198, img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc", off: 98 }
  ];

  const grid = document.querySelector(".products-grid");

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p class="price">₹${p.price} <small style="color:gray">(${p.off}₹ off)</small></p>
      <button class="add">ADD</button>
    `;
    grid.appendChild(card);
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
