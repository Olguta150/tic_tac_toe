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

const projectModal = document.querySelector('.project-modal');
const openProjectModal = document.querySelector('.create-new-task-btn');
const closeProjectModal = document.querySelector('.close-project-modal');

openProjectModal.addEventListener('click', () => {
    projectModal.showModal();
});

closeProjectModal.addEventListener('click', () => {
    projectModal.close();
})