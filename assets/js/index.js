const contactSubmit = document.querySelectorAll(".contact-submit");
const modal = document.getElementById("modal-wrapper");
const closeModal = document.getElementById("close-modal-button");
const modalContent = document.querySelector(".custom-modal-content");

closeModal.addEventListener("click", () => {
  modal.classList.add("d-none");
});

modal.addEventListener("click", () => {
  modal.classList.add("d-none");
});

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

for (let i = 0; i < contactSubmit.length; i++) {
  contactSubmit[i].addEventListener("click", () => {
    modal.classList.remove("d-none");
  });
}
