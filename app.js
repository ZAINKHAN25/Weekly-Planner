var cards = document.querySelectorAll('.card');
var modalBody = document.querySelector('.modal-body');
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
