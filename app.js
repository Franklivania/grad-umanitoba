function revealError(event) {
  event.preventDefault();
  const errorElement = document.querySelector('.error');
    errorElement.style.display = 'block';
}

// Hide error message when page loads
document.addEventListener('DOMContentLoaded', () => {
  const errorElement = document.querySelector('.error');
  if (errorElement) {
    errorElement.style.display = 'none';
  }
});
