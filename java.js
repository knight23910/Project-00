
// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});


//navbar 
 const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('open');
  });


//horizontel scroll
  const container = document.getElementById('scrollContainer');

    container.addEventListener('wheel', function(e) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    });


     const shareContainer = document.querySelector('.share-container');
  const shareButton = document.querySelector('.share-button');

  function toggleShareMenu() {
    shareContainer.classList.toggle('active');
  }

  // Close share menu when clicking outside of it
  document.addEventListener('click', function (e) {
    if (!shareContainer.contains(e.target)) {
      shareContainer.classList.remove('active');
    }
  });


