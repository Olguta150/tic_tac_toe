function modalAction(openModal, closeModal, modal) {
    openModal.addEventListener('click', () => {
        modal.showModal();
    })

    closeModal.addEventListener('click', () => {
        modal.close();
    })
}

export {modalAction};