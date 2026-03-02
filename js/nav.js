/* Shared navigation behavior */

document.addEventListener('DOMContentLoaded', function () {
  // Highlight active page link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Show current player indicator
  const playerEl = document.querySelector('.navbar-player');
  if (playerEl) {
    const current = PokerStorage.getCurrentPlayer();
    if (current) {
      playerEl.innerHTML = 'Playing as: <strong>' + current.name + '</strong>';
    } else {
      playerEl.style.display = 'none';
    }
  }
});
