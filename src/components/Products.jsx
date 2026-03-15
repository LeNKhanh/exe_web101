import { For, createSignal } from 'solid-js';

function ProductImage(props) {
  const [failed, setFailed] = createSignal(false);
  return failed() ? (
    <div class="w-full h-full bg-[#f0f0f0] flex flex-col items-center justify-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span class="text-[10px] text-[#bbb] uppercase tracking-[0.12em] font-medium">{props.alt}</span>
    </div>
  ) : (
    <img
      src={props.src}
      alt={props.alt}
      class="w-full h-full object-cover transition-transform duration-600"
      style={{ "object-position": props.position || 'center' }}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

const products = [
  {
    id: 1,
    name: 'Túi Thốt Nốt Xanh',
    price: '320.000₫',
    image: '/images/products/product-1.jpg',
    tag: 'Bestseller',
    desc: 'Canvas xanh nhạt — hoạ tiết cây thốt nốt & quả măng cụt truyền thống',
  },
  {
    id: 2,
    name: 'Túi Thốt Nốt Đen',
    price: '320.000₫',
    image: '/images/products/product-2.jpg',
    tag: 'Classic',
    desc: 'Canvas đen tuyền — hoạ tiết cây thốt nốt & quả măng cụt',
  },
  {
    id: 3,
    name: 'Túi Rồng An Giang',
    price: '350.000₫',
    image: '/images/products/product-3.png',
    tag: 'Limited',
    desc: 'Canvas trắng ngà — hoạ tiết rồng truyền thống sắc màu',
  },
  {
    id: 4,
    name: 'Túi Cá Sấu Sông Hậu',
    price: '340.000₫',
    image: '/images/products/product-4.png',
    tag: 'New',
    desc: 'Canvas trắng — hoạ tiết cá sấu vintage cổ điển',
  },
  {
    id: 5,
    name: 'Túi Cá Sấu Thiên Nhiên',
    price: '340.000₫',
    image: '/images/products/product-5.png',
    tag: 'Popular',
    desc: 'Canvas trắng — hoạ tiết cá sấu giữa dòng nước xanh',
    position: '20% 15%',
  },
];

export default function Products() {
  return (
    <section id="products" class="py-24 md:py-36 bg-white">
      <div class="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div class="text-center mb-16 md:mb-24">
          <div class="reveal flex items-center justify-center gap-4 mb-6">
            <div class="w-8 h-[1px] bg-[#ccc]" />
            <span class="text-[11px] font-bold tracking-[0.2em] uppercase text-[#999]">
              Bộ sưu tập
            </span>
            <div class="w-8 h-[1px] bg-[#ccc]" />
          </div>
          <h2 class="reveal font-display text-[clamp(2.4rem,5vw,4rem)] font-light tracking-[-0.02em] leading-[1.1] text-[#111] mb-5">
            Sản phẩm <span class="italic text-[#888]">nổi bật</span>
          </h2>
          <p class="reveal text-[14px] text-[#888] max-w-md mx-auto leading-[1.8]">
            Năm thiết kế độc đáo mang đậm dấu ấn An Giang — mỗi chiếc túi là một tác phẩm nghệ thuật bạn mang theo.
          </p>
        </div>

        {/* Featured product — hero card */}
        <div class="reveal-scale mb-40 md:mb-56">
          <div class="product-card group cursor-pointer relative overflow-hidden rounded-3xl bg-[#f7f4ef] border border-[#e8e0d4]">
            <div class="grid md:grid-cols-2 min-h-[440px] md:min-h-[540px]">
              <div class="relative overflow-hidden">
                <div class="absolute inset-0">
                  <ProductImage src={products[0].image} alt={products[0].name} />
                </div>
                <div class="absolute top-5 left-5">
                  <span class="inline-block bg-[#1a1917] text-white text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
                    {products[0].tag}
                  </span>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16">
                <span class="text-[10px] font-bold tracking-[0.22em] uppercase text-[#b0a898] mb-4 block">01 / 05</span>
                <h3 class="font-display text-[clamp(2rem,3.2vw,3rem)] font-light text-[#1a1917] mb-3 leading-[1.05]">
                  {products[0].name}
                </h3>
                <p class="text-[14px] text-[#6b6358] leading-[1.85] mb-6 max-w-[280px]">{products[0].desc}</p>
                {/* Material tags */}
                <div class="flex flex-wrap justify-center gap-2 mb-10">
                  {['Canvas 12oz', 'In nhiệt HD', 'Chống thấm'].map((tag) => (
                    <span class="text-[10px] font-medium text-[#8a7a66] border border-[#d8cfc4] px-3 py-1 rounded-full tracking-[0.05em] bg-white/60">{tag}</span>
                  ))}
                </div>
                {/* Price */}
                <span class="font-display text-[2.4rem] font-light text-[#1a1917] leading-none mb-5">{products[0].price}</span>
                {/* CTA */}
                <button class="group/btn inline-flex items-center gap-2.5 bg-[#1a1917] text-white px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] rounded-full hover:bg-[#2d2b26] transition-all duration-300 hover:shadow-lg">
                  Thêm vào giỏ
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover/btn:translate-x-0.5">
                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product grid — 2x2 on desktop */}
        <div class="stagger grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16">
          <For each={products.slice(1)}>
            {(product, i) => (
              <div class="product-card group cursor-pointer">
                <div class="aspect-[3/4] overflow-hidden rounded-2xl bg-[#f5f5f5] mb-5 relative">
                  <ProductImage src={product.image} alt={product.name} position={product.position} />
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <span class="absolute top-3 left-3 bg-white text-[9px] font-bold tracking-[0.15em] uppercase text-[#555] px-3 py-1.5 rounded-full shadow-sm">
                    {product.tag}
                  </span>
                  <div class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>
                <div class="px-1">
                  <div class="flex items-center justify-between mb-1.5">
                    <h3 class="text-[13px] font-semibold text-[#111] tracking-[-0.01em]">{product.name}</h3>
                    <span class="text-[10px] font-bold tracking-[0.1em] uppercase text-[#bbb]">0{() => i() + 2}/05</span>
                  </div>
                  <p class="text-[12px] text-[#aaa] mb-2 line-clamp-1">{product.desc}</p>
                  <span class="text-[14px] font-semibold text-[#111]">{product.price}</span>
                </div>
              </div>
            )}
          </For>
        </div>

        {/* View all CTA */}
        <div class="reveal text-center mt-16 md:mt-20">
          <a href="#" class="inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.14em] uppercase text-[#555] hover:text-[#111] transition-colors duration-300 group">
            Xem tất cả sản phẩm
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
