var cards = document.querySelectorAll(".card");
var modalBody = document.querySelector(".modal-body");
var body = document.querySelector("body");
var modalHeading = document.querySelector(".modal-heading");
var modalCloseBtn = document.querySelector(".modal-close-btn");
console.log(cards);
cards.forEach(function (card) {
    card.addEventListener("click", function () {
        var currentCardHeading = card.querySelector(".heading");
        if (currentCardHeading) {
            modalHeading.textContent = currentCardHeading.textContent;
            modalBody.classList.toggle("none");
            body.classList.toggle("overflowHidden");
        }
    });
});
modalCloseBtn === null || modalCloseBtn === void 0 ? void 0 : modalCloseBtn.addEventListener("click", function () {
    modalBody.classList.add("none");
    body.classList.remove("overflowHidden");
});
