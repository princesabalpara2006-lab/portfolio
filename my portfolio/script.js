document.addEventListener('DOMContentLoaded', () => {
  // --- Navbar Logic ---
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  const navLinks = document.querySelectorAll('.nav-link');
  const desktopNavItems = document.querySelectorAll('.desktop-nav-item');
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.replace('opacity-0', 'opacity-100');
      mobileMenu.classList.replace('pointer-events-none', 'pointer-events-auto');
      menuBtn.classList.replace('bg-muted', 'bg-accent');
      menuBtn.classList.replace('text-secondary', 'text-primary');
      menuIconOpen.classList.add('hidden');
      menuIconClose.classList.remove('hidden');
      
      // Animate links in
      navLinks.forEach((link, index) => {
        setTimeout(() => {
          link.classList.replace('opacity-0', 'opacity-100');
          link.classList.replace('-translate-x-8', 'translate-x-0');
        }, index * 80 + 200);
      });
      
      const mobileInfo = document.getElementById('mobile-info');
      setTimeout(() => {
        mobileInfo.classList.replace('opacity-0', 'opacity-100');
        mobileInfo.classList.replace('translate-y-8', 'translate-y-0');
      }, 500);

    } else {
      mobileMenu.classList.replace('opacity-100', 'opacity-0');
      mobileMenu.classList.replace('pointer-events-auto', 'pointer-events-none');
      menuBtn.classList.replace('bg-accent', 'bg-muted');
      menuBtn.classList.replace('text-primary', 'text-secondary');
      menuIconOpen.classList.remove('hidden');
      menuIconClose.classList.add('hidden');
      
      navLinks.forEach((link) => {
        link.classList.replace('opacity-100', 'opacity-0');
        link.classList.replace('translate-x-0', '-translate-x-8');
      });
      
      const mobileInfo = document.getElementById('mobile-info');
      mobileInfo.classList.replace('opacity-100', 'opacity-0');
      mobileInfo.classList.replace('translate-y-0', 'translate-y-8');
    }
  };

  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      if (isMenuOpen) toggleMenu();
    }
  };

  // Add click events to links
  document.querySelectorAll('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToSection(btn.getAttribute('data-scroll-to'));
    });
  });

  // Scroll active section logic
  const sections = ['home', 'about', 'skills', 'contact'];
  window.addEventListener('scroll', () => {
    let currentSectionId = 'home';
    let minOffset = Infinity;

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        const offset = Math.abs(element.getBoundingClientRect().top - 200);
        if (offset < minOffset) {
          minOffset = offset;
          currentSectionId = id;
        }
      }
    });

    // Update Desktop Nav
    desktopNavItems.forEach(item => {
      const id = item.getAttribute('data-id');
      const icon = item.querySelector('svg');
      if (id === currentSectionId) {
        item.classList.add('bg-accent', 'text-primary');
        item.classList.remove('text-secondary/40', 'hover:text-secondary', 'hover:bg-secondary/5');
        icon?.classList.add('scale-110');
      } else {
        item.classList.remove('bg-accent', 'text-primary');
        item.classList.add('text-secondary/40', 'hover:text-secondary', 'hover:bg-secondary/5');
        icon?.classList.remove('scale-110');
      }
    });

    // Update Mobile Nav Links
    navLinks.forEach(link => {
      const id = link.getAttribute('data-scroll-to');
      const text = link.querySelector('.nav-text');
      const arrow = link.querySelector('.nav-arrow');
      if (id === currentSectionId) {
        text.classList.add('text-accent');
        text.classList.remove('text-secondary', 'group-hover:text-accent');
        arrow.classList.add('text-accent', 'opacity-100', 'rotate-0');
        arrow.classList.remove('text-secondary/30', 'group-hover:text-accent', 'group-hover:rotate-45');
      } else {
        text.classList.remove('text-accent');
        text.classList.add('text-secondary', 'group-hover:text-accent');
        arrow.classList.remove('text-accent', 'opacity-100', 'rotate-0');
        arrow.classList.add('text-secondary/30', 'group-hover:text-accent', 'group-hover:rotate-45');
      }
    });
  });

  // --- Hero Logic ---
  setTimeout(() => {
    document.querySelectorAll('.hero-anim').forEach(el => {
      el.classList.replace('opacity-0', 'opacity-100');
      if (el.classList.contains('translate-y-8')) {
        el.classList.replace('translate-y-8', 'translate-y-0');
      }
    });
  }, 100);

  // --- Intersection Observers for Scroll Reveal ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        const elements = entry.target.querySelectorAll('.reveal-anim');
        elements.forEach(el => {
          el.classList.replace('opacity-0', 'opacity-100');
          if (el.classList.contains('translate-y-4')) el.classList.replace('translate-y-4', 'translate-y-0');
          if (el.classList.contains('translate-y-8')) el.classList.replace('translate-y-8', 'translate-y-0');
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(sec => {
    if (sec.id !== 'home') {
      revealObserver.observe(sec);
    }
  });



  // --- Services Tabs Logic ---
  const serviceBtns = document.querySelectorAll('.service-btn');
  const serviceDesc = document.getElementById('service-desc');
  const serviceIndicators = document.querySelectorAll('.service-indicator');

  const servicesData = [
    'Building responsive and dynamic web applications using modern frameworks and technologies like React, Node.js, and more.',
    'Implementing efficient algorithms and understanding complex data structures for optimized problem solving.',
    'Designing and managing relational and NoSQL databases for scalable data storage and quick retrieval.',
    'Creating intuitive and user-friendly interfaces with a focus on user experience and accessibility principles.'
  ];

  serviceBtns.forEach((btn, index) => {
    const handleActivate = () => {
      // Update buttons
      serviceBtns.forEach((b, i) => {
        if (i === index) {
          b.classList.add('text-accent');
          b.classList.remove('text-secondary/30', 'hover:text-secondary/60');
        } else {
          b.classList.remove('text-accent');
          b.classList.add('text-secondary/30', 'hover:text-secondary/60');
        }
      });

      // Update text
      if (serviceDesc) {
        serviceDesc.textContent = servicesData[index];
      }

      // Update indicators
      serviceIndicators.forEach((ind, i) => {
        if (i === index) {
          ind.classList.add('w-8', 'bg-accent');
          ind.classList.remove('w-2', 'bg-secondary/20', 'hover:bg-secondary/40');
        } else {
          ind.classList.remove('w-8', 'bg-accent');
          ind.classList.add('w-2', 'bg-secondary/20', 'hover:bg-secondary/40');
        }
      });
    };

    btn.addEventListener('click', handleActivate);
    btn.addEventListener('mouseenter', handleActivate);
  });

});
