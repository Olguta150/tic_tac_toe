import './style.css';

console.log("let's get started");

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.create-new-project-btn');
const closeModal = document.querySelector('.close-modal');
const inputProjectName = document.querySelector('.add-project-name');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
    inputProjectName.value = '';
});