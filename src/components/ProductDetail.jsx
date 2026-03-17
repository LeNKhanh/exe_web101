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
        <section class="min-h-screen bg-white pt-28 pb-24">
          <div class="max-w-[1400px] mx-auto px-6 lg:px-10">

            {/* Breadcrumb */}
            <nav class="reveal visible flex items-center gap-2 mb-12 text-[11px] text-[#aaa] tracking-[0.05em]">
              <A href="/" class="hover:text-[#111] transition-colors duration-200">Trang chủ</A>
              <span class="text-[#ddd]">/</span>
              <A href="/#products" class="hover:text-[#111] transition-colors duration-200">Sản phẩm</A>
              <span class="text-[#ddd]">/</span>
              <span class="text-[#555] font-semibold">{p().name}</span>
            </nav>

            <div class="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">

              {/* LEFT — Sticky image */}
              <div class="reveal-left visible">
                <div class="aspect-[3/4] overflow-hidden rounded-3xl bg-[#f5f5f5] lg:sticky lg:top-28 shadow-sm">
                  <DetailImage src={p().image} alt={p().name} />
                </div>
              </div>

              {/* RIGHT — Info */}
              <div class="reveal-right visible flex flex-col gap-0">

                {/* ── Block 1: Tag + Name + Desc ── */}
                <div class="pb-8 border-b border-[#f0f0f0]">
                  <span class="inline-block bg-[#f7f4ef] text-[#8a7a66] text-[10px] font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full border border-[#e8e0d4] mb-6">
                    {p().tag}
                  </span>
                  <h1 class="font-display text-[clamp(2.6rem,4.5vw,4rem)] font-light tracking-[-0.025em] leading-[1.0] text-[#111] mb-5">
                    {p().name}
                  </h1>
                  <p class="text-[14px] text-[#999] leading-[1.85] max-w-[440px]">
                    {p().desc}
                  </p>
                </div>

                {/* ── Block 2: Price ── */}
                <div class="py-8 border-b border-[#f0f0f0] flex items-center justify-between">
                  <div>
                    <p class="text-[10px] font-bold tracking-[0.18em] uppercase text-[#bbb] mb-2">Giá</p>
                    <span class="font-display text-[3rem] font-light text-[#1a1917] leading-none tracking-[-0.02em]">
                      {p().price}
                    </span>
                  </div>
                  <div class="text-right">
                    <p class="text-[10px] font-bold tracking-[0.18em] uppercase text-[#bbb] mb-2">Tình trạng</p>
                    <span class="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#3a9a5c]">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#3a9a5c] inline-block" />
                      Còn hàng
                    </span>
                  </div>
                </div>

                {/* ── Block 3: Materials + CTA ── */}
                <div class="py-8 border-b border-[#f0f0f0]">
                  <p class="text-[10px] font-bold tracking-[0.18em] uppercase text-[#bbb] mb-4">Chất liệu</p>
                  <div class="flex flex-wrap gap-2 mb-8">
                    {p().materials.map((tag) => (
                      <span class="text-[11px] font-semibold text-[#6b6358] border border-[#e0d8cc] px-4 py-2 rounded-full tracking-[0.06em] bg-[#faf8f4]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button class="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1a1917] text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.16em] rounded-full hover:bg-[#333] transition-all duration-300 hover:shadow-xl">
                    Thêm vào giỏ hàng
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:translate-x-1">
                      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>

                {/* ── Block 4: Story ── */}
                <div class="reveal visible pt-8">
                  <div class="flex items-center gap-3 mb-7">
                    <div class="w-6 h-[1px] bg-[#ccc]" />
                    <span class="text-[10px] font-bold tracking-[0.22em] uppercase text-[#aaa]">
                      Câu chuyện sản phẩm
                    </span>
                  </div>
                  <div class="space-y-5 text-[14px] text-[#666] leading-[1.9]">
                    {p().story.split('\n\n').map((paragraph) => (
                      <p>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* ── Back link ── */}
                <div class="pt-10 mt-2">
                  <A
                    href="/#products"
                    class="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.16em] uppercase text-[#aaa] hover:text-[#111] transition-colors duration-300 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:-translate-x-1">
                      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                    </svg>
                    Xem tất cả sản phẩm
                  </A>
                </div>

              </div>
            </div>
          </div>
        </section>
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
