// Get all events and modals
const events = document.querySelectorAll('.event');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Add event listeners to open the corresponding modal
events.forEach(event => {
    event.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

// Add event listeners to close modals
closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
    });
});

// Close modal when clicking outside the modal content
modals.forEach(modal => {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
