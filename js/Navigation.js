export class Navigation {
  constructor() {
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', () => {
      this.nav = document.querySelector('.navbar');
      this.mobileMenuBtn = document.querySelector('#mobileMenuBtn');
      this.navLinks = document.querySelector('#navLinks');
      this.menuIcon = this.mobileMenuBtn?.querySelector('i');
      
      if (this.nav) {
        this.initNavigation();
      }
      
      if (this.mobileMenuBtn && this.navLinks) {
        this.initMobileMenu();
      }

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (this.navLinks?.classList.contains('active') && 
            !this.nav.contains(e.target)) {
          this.closeMenu();
        }
      });

      // Close menu when clicking on a link
      this.navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });

      // Handle escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.navLinks?.classList.contains('active')) {
          this.closeMenu();
        }
      });
    });
  }

  initNavigation() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  initMobileMenu() {
    this.mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMenu();
    });
  }

  handleScroll() {
    if (this.nav) {
      if (window.scrollY > 50) {
        this.nav.classList.add('nav-scrolled');
      } else {
        this.nav.classList.remove('nav-scrolled');
      }
    }
  }

  toggleMenu() {
    this.navLinks?.classList.toggle('active');
    this.mobileMenuBtn?.setAttribute(
      'aria-expanded',
      this.navLinks?.classList.contains('active').toString()
    );
    
    // Toggle between menu and x icon
    if (this.menuIcon) {
      this.menuIcon.setAttribute(
        'name',
        this.navLinks?.classList.contains('active') ? 'x' : 'menu'
      );
    }

    // Prevent body scroll when menu is open
    document.body.style.overflow = 
      this.navLinks?.classList.contains('active') ? 'hidden' : '';
  }

  closeMenu() {
    this.navLinks?.classList.remove('active');
    this.mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    if (this.menuIcon) {
      this.menuIcon.setAttribute('name', 'menu');
    }
    document.body.style.overflow = '';
  }
}