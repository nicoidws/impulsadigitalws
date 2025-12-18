const modal = document.getElementById("ad-modal");
const closeBtn = document.querySelector(".close-btn");

// Mostrar al cargar
window.addEventListener("load", () => {
  modal.style.display = "flex";
});

// Cerrar con X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar con ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

// Cerrar clic fuera
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
