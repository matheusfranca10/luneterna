// JavaScript para abrir e fechar o modal
const threats = document.querySelectorAll('.threat img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content img');

threats.forEach(threat => {
    threat.addEventListener('click', () => {
        modalImg.src = threat.src;
        modal.style.display = 'block';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
