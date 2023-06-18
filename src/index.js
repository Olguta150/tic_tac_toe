import './style.css';
import { addModalFunctionality } from './dom_manipulation';
import { extendToDo } from './dom_manipulation';

console.log("let's get started");

addModalFunctionality();
extendToDo();


// openModal.addEventListener('click', () => {
//     modal.showModal();
// });

// closeModal.addEventListener('click', () => {
//     modal.close();
//     inputProjectName.value = '';
// });

// const taskModal = document.querySelector('.task-modal');
// const openTaskModal = document.querySelector('.create-new-task-btn');
// const closeTaskModal = document.querySelector('.close-project-modal');

// openTaskModal.addEventListener('click', () => {
//     taskModal.showModal();
// });

// closeTaskModal.addEventListener('click', () => {
//     taskModal.close();
// })