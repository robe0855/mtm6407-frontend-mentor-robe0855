// Toggle dropdown menu for mobile
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', () => {
      const dropdownMenu = item.querySelector('.dropdown-menu');
      dropdownMenu.classList.toggle('show');
    });
  });
  