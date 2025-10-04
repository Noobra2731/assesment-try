document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // Email and message validation for form submission
  const form = document.getElementById("myForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      const emailInput = document.getElementById("email");
      const msgInput = document.getElementById("message");
      // Only allow submission if both fields are filled and valid
      if (
        !emailInput || !emailInput.value.trim() || !emailInput.checkValidity() ||
        !msgInput || !msgInput.value.trim()
      ) {
        alert("Please enter a valid email and message!");
        event.preventDefault();
        return false;
      }
      // If both are filled, allow submission and show success alert
      window.alert("Your Submission is Sent Successfully");
    });
  }

  // Card filter logic
  const cardFilter = document.getElementById('card-filter');
  const cardGrid = document.getElementById('card-grid');
  if (cardFilter && cardGrid) {
    cardFilter.addEventListener('change', function() {
      const value = this.value;
      cardGrid.querySelectorAll('.card').forEach(card => {
        if (value === 'all' || card.getAttribute('data-category') === value) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});

