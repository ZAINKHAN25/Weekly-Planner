var cards = document.querySelectorAll('.card');
var modalBody = document.querySelector('.modal-body');
var modalCard = document.querySelector('.modal-card');
var body = document.querySelector('body');
var modalHeading = document.querySelector('.modal-heading');
console.log(cards);
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        var currentCardHeading = card.querySelector('.heading');
        if (currentCardHeading) {
            modalHeading.textContent = currentCardHeading.textContent;
            modalBody.classList.toggle('none');
            body.classList.toggle('overflowHidden');
        }
    });
});
modalBody === null || modalBody === void 0 ? void 0 : modalBody.addEventListener('click', function () {
    modalBody.classList.add('none');
    body.classList.remove('overflowHidden');
});
modalCard === null || modalCard === void 0 ? void 0 : modalCard.addEventListener('click', function () {
    modalBody.classList.remove('none');
    body.classList.add('overflowHidden');
});
