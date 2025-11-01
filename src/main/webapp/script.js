// Handle Login Modal
const modal = document.getElementById("loginModal");
const btn = document.getElementById("login-btn");
const closeBtn = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "block";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Handle Add Buttons
const addButtons = document.querySelectorAll(".add-btn");
addButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("added");
    button.textContent = button.classList.contains("added") ? "ADDED" : "ADD";
  });
});
