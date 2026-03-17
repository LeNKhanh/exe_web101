import { createSignal, Show } from 'solid-js';
import { useParams, A } from '@solidjs/router';
import { products } from '../data/products';

function DetailImage(props) {
  const [failed, setFailed] = createSignal(false);
  return failed() ? (
    <div class="w-full h-full bg-[#f0f0f0] flex flex-col items-center justify-center gap-2 rounded-2xl">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span class="text-[11px] text-[#bbb] uppercase tracking-[0.12em] font-medium">{props.alt}</span>
    </div>
  ) : (
    <img
      src={props.src}
      alt={props.alt}
      class="w-full h-full object-cover rounded-2xl"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function ProductDetail() {
  const params = useParams();
  const product = () => products.find((p) => p.slug === params.slug);

  return (
    <Show when={product()} fallback={<NotFound />}>
      {(p) => (
        <div class="min-h-screen bg-white">

          {/* ── Top band: breadcrumb, clear of fixed header ── */}
          <div class="border-b border-[#f0f0f0] bg-[#fafaf9] pt-20">
            <div class="max-w-[1400px] mx-auto px-6 lg:px-10 h-14 flex items-center gap-2 text-[11px] text-[#aaa] tracking-[0.04em]">
              <A href="/" class="hover:text-[#111] transition-colors">Trang chủ</A>
              <span>/</span>
              <A href="/#products" class="hover:text-[#111] transition-colors">Sản phẩm</A>
              <span>/</span>
              <span class="text-[#444] font-semibold">{p().name}</span>
            </div>
          </div>

          {/* ── Main content ── */}
          <div class="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
            <div class="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">

              {/* LEFT — image */}
              <div class="reveal-left visible">
                <div class="aspect-[4/5] overflow-hidden rounded-3xl bg-[#f5f5f3] lg:sticky lg:top-24 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.10)]">
                  <DetailImage src={p().image} alt={p().name} />
                </div>
              </div>

              {/* RIGHT — detail panel */}
              <div class="reveal-right visible">

                {/* ── 1. Tag + Title + Subtitle ── */}
                <div class="mb-8">
                  <span class="inline-block bg-[#f7f4ef] text-[#8a7a66] text-[10px] font-bold tracking-[0.24em] uppercase px-4 py-1.5 rounded-full border border-[#e8e0d4] mb-5">
                    {p().tag}
                  </span>
                  <h1 class="font-display text-[clamp(2.8rem,5vw,4.2rem)] font-light tracking-[-0.03em] leading-[0.97] text-[#111] mb-4">
                    {p().name}
                  </h1>
                  <p class="text-[14px] text-[#999] leading-[1.85]">
                    {p().desc}
                  </p>
                </div>

                {/* ── 2. Price row ── */}
                <div class="py-7 border-y border-[#efefef] mb-7">
                  <div class="flex items-end gap-5 flex-wrap">
                    <span class="font-display text-[3.2rem] font-light text-[#1a1917] leading-none tracking-[-0.02em]">
                      {p().price}
                    </span>
                    <span class="inline-flex items-center gap-1.5 mb-1 text-[11px] font-semibold text-[#2e9e5b] bg-[#edf7f1] px-3 py-1.5 rounded-full">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#2e9e5b]" />
                      Còn hàng
                    </span>
                  </div>
                </div>

                {/* ── 3. Origin & Materials ── */}
                <div class="mb-7 p-5 rounded-2xl bg-[#faf8f5] border border-[#ede7dc]">
                  <p class="text-[10px] font-bold tracking-[0.2em] uppercase text-[#b0a090] mb-4">Nguồn gốc & Chất liệu</p>
                  <div class="space-y-3">
                    {p().origin.map((item) => (
                      <div class="flex items-start gap-3">
                        <span class="mt-[3px] w-4 h-4 rounded-full bg-[#e8e2d8] flex items-center justify-center shrink-0">
                          <span class="w-1.5 h-1.5 rounded-full bg-[#8a7a66]" />
                        </span>
                        <span class="text-[13px] text-[#5a5248] leading-[1.7]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div class="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[#e4ddd4]">
                    {p().materials.map((tag) => (
                      <span class="text-[10px] font-bold text-[#7a6a58] border border-[#dbd3c8] px-3.5 py-1.5 rounded-full tracking-[0.08em] uppercase bg-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── 4. CTA ── */}
                <button class="group w-full inline-flex items-center justify-center gap-3 bg-[#1a1917] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.18em] rounded-2xl hover:bg-[#2d2b26] transition-all duration-300 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] mb-10">
                  Thêm vào giỏ hàng
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:translate-x-1">
                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>

                {/* ── 5. Story ── */}
                <div class="border-t border-[#efefef] pt-8">
                  <div class="flex items-center gap-3 mb-6">
                    <div class="w-5 h-[1px] bg-[#ccc]" />
                    <span class="text-[10px] font-bold tracking-[0.24em] uppercase text-[#bbb]">
                      Câu chuyện & Nguồn cảm hứng
                    </span>
                  </div>
                  <div class="space-y-5">
                    {p().story.split('\n\n').map((para) => (
                      <p class="text-[14px] text-[#5a5a5a] leading-[2.0]">{para}</p>
                    ))}
                  </div>
                </div>

                {/* ── Back link ── */}
                <div class="pt-10 mt-6 border-t border-[#efefef]">
                  <A
                    href="/#products"
                    class="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#bbb] hover:text-[#111] transition-colors duration-300 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:-translate-x-1">
                      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                    </svg>
                    Xem tất cả sản phẩm
                  </A>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </Show>
  );
}

function NotFound() {
  return (
    <section class="min-h-screen bg-white flex items-center justify-center">
      <div class="text-center">
        <h1 class="font-display text-[3rem] font-light text-[#111] mb-4">Không tìm thấy sản phẩm</h1>
        <p class="text-[14px] text-[#888] mb-8">Sản phẩm bạn tìm kiếm không tồn tại.</p>
        <A href="/" class="inline-flex items-center gap-2 bg-[#111] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.13em] rounded-full hover:bg-[#000] transition-all duration-300">
          Về trang chủ
        </A>
      </div>
    </section>
  );
}
