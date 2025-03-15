document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add fade-in animation to elements as they enter the viewport
  const fadeElements = document.querySelectorAll('.post-card, .blog-post, .section-title');

  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
      element.classList.remove('fade-in');
      fadeObserver.observe(element);
    });
  }

  // Add active class to current nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (currentPath === linkPath || (linkPath !== '/' && currentPath.startsWith(linkPath))) {
      link.classList.add('nav-link-active');
    }
  });

  // Add copy button to code blocks
  document.querySelectorAll('pre code').forEach(codeBlock => {
    const container = codeBlock.parentNode;
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';

    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(codeBlock.textContent)
        .then(() => {
          copyButton.textContent = 'Copied!';
          setTimeout(() => {
            copyButton.textContent = 'Copy';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          copyButton.textContent = 'Failed';
        });
    });

    container.style.position = 'relative';
    container.appendChild(copyButton);
  });
});
