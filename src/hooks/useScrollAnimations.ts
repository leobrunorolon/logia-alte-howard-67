import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    // Reveal elements on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Parallax on hero
    const hero = document.querySelector('.hero') as HTMLElement | null;
    const handleScroll = () => {
      if (!hero) return;
      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;
      if (scrollY <= heroHeight) {
        hero.style.setProperty('--parallax-y', `${scrollY * 0.35}px`);
        hero.style.setProperty('--parallax-opacity', `${1 - scrollY / heroHeight}`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
