import { onMount, onCleanup } from 'solid-js';

export function useScrollReveal() {
  let observer;

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger';

    // Use requestAnimationFrame to ensure DOM is fully painted before observing
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelectorAll(selectors).forEach((el) => observer.observe(el));
      });
    });
  });

  onCleanup(() => observer?.disconnect());
}
