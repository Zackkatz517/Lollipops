// Smooth scrolling for nav links
// Only apply to links that start with '#' and are on the current page

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    // Only prevent default if href starts with '#' and is not just '#'
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Otherwise, let the browser handle navigation to other pages
  });
});

// Placeholder for future interactive features 