import { createSignal, onMount } from 'solid-js';
import { A } from '@solidjs/router';

export default function Header() {
  const [scrolled, setScrolled] = createSignal(false);
  const [menuOpen, setMenuOpen] = createSignal(false);

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
  });

  const navLinks = [
    { href: '#products', label: 'Sản phẩm' },
    { href: '#story', label: 'Câu chuyện' },
    { href: '#features', label: 'Đặc điểm' },
    { href: '#contact', label: 'Liên hệ' },
  ];

  return (
    <header
      class={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled()
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.07)] py-2'
          : 'bg-white/60 backdrop-blur-sm py-4'
      }`}
    >
      <div class="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <A href="/" class="relative z-10">
          <span class="font-display text-[22px] font-semibold tracking-[0.01em] text-[#111]">
            Lore<span class="font-light italic">Tote</span>
          </span>
        </A>

        {/* Desktop nav — centered */}
        <nav class="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              href={link.href}
              class="text-[11px] font-semibold tracking-[0.13em] uppercase text-[#777] hover:text-[#111] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#111] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div class="hidden lg:flex items-center gap-0.5">
          <button
            class="p-2 rounded-full hover:bg-black/5 transition-all duration-300 group"
            aria-label="Tìm kiếm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-[#111] transition-colors">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button
            class="relative p-2 rounded-full hover:bg-black/5 transition-all duration-300 group"
            aria-label="Giỏ hàng"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-[#111] transition-colors">
              <path d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          class="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f0f0f0] transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen())}
          aria-label="Menu"
        >
          <div class="w-[20px] flex flex-col gap-[5px]">
            <span class={`block h-[1.5px] bg-[#111] transition-all duration-400 origin-center ${menuOpen() ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span class={`block h-[1.5px] bg-[#111] transition-all duration-300 ${menuOpen() ? 'opacity-0 scale-x-0' : ''}`} />
            <span class={`block h-[1.5px] bg-[#111] transition-all duration-400 origin-center ${menuOpen() ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        class={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen() ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div class="absolute top-6 left-6">
          <span class="font-display text-[22px] font-semibold tracking-[0.02em] text-[#111]">
            Lore<span class="font-light italic">Tote</span>
          </span>
        </div>
        <nav class="flex flex-col items-center gap-6">
          {navLinks.map((link, i) => (
            <a
              href={link.href}
              onClick={() => setMenuOpen(false)}
              class="font-display text-[2.5rem] font-light text-[#111] hover:text-[#888] transition-all duration-300 hover:tracking-[0.05em]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div class="absolute bottom-10 flex gap-4">
          {['Facebook', 'Instagram', 'TikTok'].map((s) => (
            <span class="text-[11px] font-medium tracking-[0.1em] uppercase text-[#aaa]">{s}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
