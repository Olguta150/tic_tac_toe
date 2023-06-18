import { modalAction } from './dom_manipulation_func';

function addModalFunctionality() {

    const projectModal = document.querySelector('.modal');
    const openProjectModal = document.querySelector('.create-new-project-btn');
    const closeProjectModal = document.querySelector('.close-modal');
    const inputProjectName = document.querySelector('.add-project-name');

    const taskModal = document.querySelector('.task-modal');
    const openTaskModal = document.querySelector('.create-new-task-btn');
    const closeTaskModal = document.querySelector('.close-project-modal');

    modalAction(openProjectModal, closeProjectModal, projectModal, inputProjectName);
    modalAction(openTaskModal, closeTaskModal, taskModal);
}

function extendToDo() {
    const extendTask = document.querySelectorAll('.extend-task');
    const todoItemDescription = document.querySelectorAll('.todo-item__description');
    
    extendTask.forEach(task => {
        task.addEventListener('click', (elem) => {
            todoItemDescription.forEach(description => {
                if(description.dataset.indexDescription === elem.target.dataset.indexArrow) {
                    if(task.classList.contains('extend-task__arrow-down')) {
                        description.style.display = 'block';
                        task.classList.replace('extend-task__arrow-down', 'extend-task__arrow-up');
                    } else if(task.classList.contains('extend-task__arrow-up')) {
                        description.style.display = 'none';
                        task.classList.replace('extend-task__arrow-up', 'extend-task__arrow-down');
                    }
                }
            })
        })
    });
}

export {addModalFunctionality, extendToDo};