document.querySelector('.menu-toggle').addEventListener('click', function() {
    let menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
  });
  