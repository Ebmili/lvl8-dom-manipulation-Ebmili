document.addEventListener('DOMContentLoaded', function() {
  document.title = 'My first (dynamic) webpage';

  document.getElementById('thenHeading').addEventListener('click', function() {
      alert('The Beatles (January 13, 1969)');
  });

  document.getElementById('nowHeading').addEventListener('click', function() {
      alert('Carly Rae Jepsen (March 1, 2012)');
  });
});