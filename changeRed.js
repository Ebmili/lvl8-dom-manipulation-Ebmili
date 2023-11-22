document.addEventListener('DOMContentLoaded', function() {
  const square = document.getElementById('square');

  square.addEventListener('mouseover', function() {
      this.style.backgroundColor = 'red';
  });

  square.addEventListener('mouseout', function() {
      this.style.backgroundColor = 'blue';
  });
});