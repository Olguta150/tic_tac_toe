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

const taskModal = document.querySelector('.task-modal');
const openTaskModal = document.querySelector('.create-new-task-btn');
const closeTaskModal = document.querySelector('.close-project-modal');

openTaskModal.addEventListener('click', () => {
    taskModal.showModal();
});

closeTaskModal.addEventListener('click', () => {
    taskModal.close();
})