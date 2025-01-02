export class Navigation {
  constructor() {
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', () => {
      this.nav = document.querySelector('.navbar');
      this.mobileMenuBtn = document.querySelector('#mobileMenuBtn');
      this.navLinks = document.querySelector('#navLinks');
      
      if (this.nav) {
        this.initNavigation();
      }
      
      if (this.mobileMenuBtn && this.navLinks) {
        this.initMobileMenu();
      }
    });
  }

  initNavigation() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  initMobileMenu() {
    this.mobileMenuBtn.addEventListener('click', () => {
      this.navLinks.classList.toggle('active');
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
}