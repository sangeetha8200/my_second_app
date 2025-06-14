function sendMessage(event) {
      event.preventDefault();
      document.getElementById('form-message').textContent = 'Message sent successfully!';
      // Reset form fields
      document.querySelector('.contact-form').reset();
      return false;
    }