const cards = document.querySelectorAll('.card');
const modalBody = document.querySelector('.modal-body');
const body = document.querySelector('body');
console.log(cards);

cards.forEach(card => {
    card.addEventListener('click', () => {
        modalBody?.classList.toggle('none');
        body?.classList.toggle('overflowHidden');
    });
})

modalBody?.addEventListener('click', () => {
    modalBody?.classList.add('none');
    body?.classList.remove('overflowHidden');
});