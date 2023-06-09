import { modalAction } from './dom_manipulation_func';

function addModalFunctionality() {

    const projectModal = document.querySelector('.modal');
    const openProjectModal = document.querySelector('.create-new-project-btn');
    const closeProjectModal = document.querySelector('.close-modal');
    const inputProjectName = document.querySelector('.add-project-name');

    const taskModal = document.querySelector('.task-modal');
    const openTaskModal = document.querySelector('.create-new-task-btn');
    const closeTaskModal = document.querySelector('.close-project-modal');

    modalAction(openProjectModal, closeProjectModal, projectModal);
    modalAction(openTaskModal, closeTaskModal, taskModal);
}

export {addModalFunctionality};