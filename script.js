document.querySelector('.booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Handle form submission, e.g., display a confirmation message
    alert('Thank you for booking! You will receive a confirmation email shortly.');
    
    // Reset the form
    this.reset();
});
