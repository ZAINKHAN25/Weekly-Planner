var cards = document.querySelectorAll('.card');
var modalBody = document.querySelector('.modal-body');
var body = document.querySelector('body');
console.log(cards);
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        modalBody === null || modalBody === void 0 ? void 0 : modalBody.classList.toggle('none');
        body === null || body === void 0 ? void 0 : body.classList.toggle('overflowHidden');
    });
});
modalBody === null || modalBody === void 0 ? void 0 : modalBody.addEventListener('click', function () {
    modalBody === null || modalBody === void 0 ? void 0 : modalBody.classList.add('none');
    body === null || body === void 0 ? void 0 : body.classList.remove('overflowHidden');
});
