function modalAction(openModal, closeModal, modal, input) {
    openModal.addEventListener('click', () => {
        modal.showModal();
    })

    closeModal.addEventListener('click', () => {
        modal.close();
        input.value = '';
    })
}

export {modalAction};