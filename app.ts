const cards = document.querySelectorAll('.card');
const modalBody = document.querySelector('.modal-body');
const body = document.querySelector('body');
const modalHeading = document.querySelector('.modal-heading');

console.log(cards);

cards.forEach(card => {
    card.addEventListener('click', () => {
        const currentCardHeading = card.querySelector('.heading');
        if (currentCardHeading) {
            modalHeading.textContent = currentCardHeading.textContent;
            modalBody.classList.toggle('none');
            body.classList.toggle('overflowHidden');
        }
    });
});
