document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('You have submitted the form!');
  });
});