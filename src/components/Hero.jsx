import { createSignal } from 'solid-js';

function HeroImage(props) {
  const [failed, setFailed] = createSignal(false);
  return (
    <div class={`hero-img ${props.class || ''}`}>
      {failed() ? (
        <div class="w-full h-full bg-[#f0f0f0] flex flex-col items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span class="text-[10px] text-[#bbb] uppercase tracking-[0.15em]">{props.label}</span>
        </div>
      ) : (
        <img
          src={props.src}
          alt={props.label}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section class="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div class="relative w-full">
        {/* Full content grid — image right, text left */}
        <div class="grid lg:grid-cols-2 min-h-screen">

          {/* LEFT — Text panel */}
          <div class="flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-24 pt-28 pb-16 lg:pt-0 lg:pb-0">
            <div class="reveal mb-5">
              <div class="inline-flex items-center gap-2.5">
                <div class="w-6 h-[1px] bg-[#bbb]" />
                <span class="text-[10px] font-bold tracking-[0.22em] uppercase text-[#aaa]">
                  Bộ sưu tập 2026
                </span>
              </div>
            </div>

            <h1 class="reveal font-display text-[clamp(3.2rem,7vw,6rem)] font-light leading-[0.9] tracking-[-0.03em] text-[#111] mb-6">
              Túi Canvas
              <br />
              <em class="not-italic italic text-[#aaa]">Du lịch</em>
              <br />
              An Giang
            </h1>

            <p class="reveal text-[14px] leading-[1.9] text-[#888] max-w-[340px] mb-8">
              Mỗi chiếc túi là một câu chuyện — nghệ thuật truyền thống An Giang trên chất liệu canvas bền bỉ, đồng hành cùng bạn trên mọi hành trình.
            </p>

            <div class="reveal flex items-center gap-3 mb-12">
              <a href="#products" class="group inline-flex items-center gap-2.5 bg-[#111] text-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.13em] rounded-full hover:bg-[#000] transition-all duration-300">
                Khám phá ngay
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#story" class="inline-flex items-center px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.13em] border border-[#ddd] text-[#666] rounded-full hover:border-[#111] hover:text-[#111] transition-all duration-300">
                Câu chuyện
              </a>
            </div>

            {/* Stats */}
            <div class="reveal flex items-center gap-8 pt-6 border-t border-[#ebebeb]">
              <div>
                <p class="font-display text-[26px] font-light text-[#111] leading-none">5+</p>
                <p class="text-[10px] text-[#bbb] tracking-[0.1em] uppercase mt-1">Mẫu túi</p>
              </div>
              <div class="w-[1px] h-8 bg-[#ebebeb]" />
              <div>
                <p class="font-display text-[26px] font-light text-[#111] leading-none">12oz</p>
                <p class="text-[10px] text-[#bbb] tracking-[0.1em] uppercase mt-1">Canvas dày</p>
              </div>
              <div class="w-[1px] h-8 bg-[#ebebeb]" />
              <div>
                <p class="font-display text-[26px] font-light text-[#111] leading-none">100%</p>
                <p class="text-[10px] text-[#bbb] tracking-[0.1em] uppercase mt-1">Thủ công</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Images panel */}
          <div class="relative overflow-hidden bg-[#f5f4f2] min-h-[70vw] lg:min-h-0">
            <div class="stagger absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2.5 p-4 md:p-6">
              {/* Left column: tall portrait spanning both rows */}
              <div class="row-span-2">
                <HeroImage
                  src="/images/hero/hero-1.png"
                  label="Hero 1"
                  class="h-full w-full"
                />
              </div>
              {/* Right top */}
              <div>
                <HeroImage
                  src="/images/hero/hero-2.png"
                  label="Hero 2"
                  class="h-full w-full"
                />
              </div>
              {/* Right bottom */}
              <div>
                <HeroImage
                  src="/images/hero/hero-3.png"
                  label="Hero 3"
                  class="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
