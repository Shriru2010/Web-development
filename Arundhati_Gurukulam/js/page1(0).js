  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('#splash h1').classList.add('done-typing');
    }, 2430);

    setTimeout(() => {
      const splash = document.getElementById('splash');
      splash.style.opacity = '0'; // Start fade out
      setTimeout(() => {
        splash.style.display = 'none'; // Hide after fade
      }, 900); // Match the transition duration
    }, 3200);
  });
