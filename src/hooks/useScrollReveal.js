import { onMount, onCleanup } from 'solid-js';

const SELECTORS = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger';

export function useScrollReveal() {
  let io;
  let mo;

  onMount(() => {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    function observeNew() {
      document.querySelectorAll(SELECTORS).forEach((el) => {
        if (!el.classList.contains('visible')) {
          io.observe(el);
        }
      });
    }

    // Watch for any new elements added by route navigation
    mo = new MutationObserver(() => requestAnimationFrame(observeNew));
    mo.observe(document.body, { childList: true, subtree: true });

    // Observe elements already in DOM on mount
    requestAnimationFrame(() => requestAnimationFrame(observeNew));
  });

  onCleanup(() => {
    io?.disconnect();
    mo?.disconnect();
  });
}
