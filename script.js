document.addEventListener('DOMContentLoaded', function() {
    // Sign-up button functionality
    const signupButtons = document.querySelectorAll('.signup-button');
    signupButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'sign_up.html';
        });
    });

    // Price list button functionality
    const priceLinks = document.querySelectorAll('.price-link');
    priceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const service = this.dataset.service; // Get the service type from the data attribute
            // Redirect to a price list page or display a modal, etc.
            // For now, let's just alert the service type
            alert(`Прайс для услуги: ${service}`);

            // OR, redirect to a specific price list page:
            // window.location.href = `price_list_${service}.html`; // Example: price_list_grooming.html
        });
    });
});