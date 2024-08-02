const cards = document.querySelectorAll(".card");
const modalBody = document.querySelector(".modal-body");
const body = document.querySelector("body");
const modalHeading = document.querySelector(".modal-heading");
const modalCloseBtn = document.querySelector(".modal-close-btn");

console.log(cards);

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const currentCardHeading = card.querySelector(".heading");
    if (currentCardHeading) {
      modalHeading.textContent = currentCardHeading.textContent;
      modalBody.classList.toggle("none");
      body.classList.toggle("overflowHidden");
    }
});
});

modalCloseBtn?.addEventListener("click", () => {
    modalBody.classList.add("none");
    body.classList.remove("overflowHidden");
});
