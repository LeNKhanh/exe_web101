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
        <section class="min-h-screen bg-white pt-24 pb-20">
          <div class="max-w-[1400px] mx-auto px-6 lg:px-10">
            {/* Breadcrumb */}
            <nav class="reveal visible flex items-center gap-2 mb-10 text-[12px] text-[#999]">
              <A href="/" class="hover:text-[#111] transition-colors">Trang chủ</A>
              <span>/</span>
              <A href="/#products" class="hover:text-[#111] transition-colors">Sản phẩm</A>
              <span>/</span>
              <span class="text-[#111] font-medium">{p().name}</span>
            </nav>

            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left — Image */}
              <div class="reveal-left visible">
                <div class="aspect-[3/4] overflow-hidden rounded-2xl bg-[#f5f5f5] sticky top-28">
                  <DetailImage src={p().image} alt={p().name} />
                </div>
              </div>

              {/* Right — Product info */}
              <div class="flex flex-col">
                <div class="reveal-right visible">
                  {/* Tag */}
                  <span class="inline-block bg-[#f7f4ef] text-[#8a7a66] text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5 border border-[#e8e0d4]">
                    {p().tag}
                  </span>

                  {/* Name */}
                  <h1 class="font-display text-[clamp(2.4rem,4vw,3.6rem)] font-light tracking-[-0.02em] leading-[1.05] text-[#111] mb-4">
                    {p().name}
                  </h1>

                  {/* Description */}
                  <p class="text-[15px] text-[#888] leading-[1.8] mb-6">
                    {p().desc}
                  </p>

                  {/* Price */}
                  <div class="flex items-baseline gap-3 mb-8">
                    <span class="font-display text-[2.8rem] font-light text-[#1a1917] leading-none">
                      {p().price}
                    </span>
                  </div>

                  {/* Material tags */}
                  <div class="flex flex-wrap gap-2 mb-8">
                    {p().materials.map((tag) => (
                      <span class="text-[11px] font-medium text-[#8a7a66] border border-[#d8cfc4] px-4 py-1.5 rounded-full tracking-[0.05em] bg-[#f7f4ef]/60">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button class="group inline-flex items-center gap-2.5 bg-[#1a1917] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.14em] rounded-full hover:bg-[#2d2b26] transition-all duration-300 hover:shadow-lg mb-10">
                    Thêm vào giỏ
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:translate-x-0.5">
                      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>

                {/* Story section */}
                <div class="reveal visible border-t border-[#ebebeb] pt-10">
                  <div class="flex items-center gap-3 mb-6">
                    <div class="w-6 h-[1px] bg-[#ccc]" />
                    <span class="text-[11px] font-bold tracking-[0.2em] uppercase text-[#999]">
                      Câu chuyện sản phẩm
                    </span>
                  </div>
                  <div class="space-y-5">
                    {p().story.split('\n\n').map((paragraph) => (
                      <p class="text-[14px] md:text-[15px] text-[#666] leading-[1.9]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Back link */}
                <div class="mt-12 pt-8 border-t border-[#ebebeb]">
                  <A
                    href="/#products"
                    class="inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.14em] uppercase text-[#555] hover:text-[#111] transition-colors duration-300 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:-translate-x-1">
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
