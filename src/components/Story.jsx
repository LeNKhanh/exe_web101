import { createSignal } from 'solid-js';

function StoryImage(props) {
  const [failed, setFailed] = createSignal(false);
  return (
    <div class={`img-slot ${props.class || ''}`}>
      {failed() ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span class="text-[10px] text-[#bbb] uppercase tracking-[0.12em] font-medium">{props.label}</span>
        </>
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

export default function Story() {
  const stats = [
    { value: '12oz', label: 'Canvas dày' },
    { value: '100%', label: 'Cotton tự nhiên' },
    { value: '∞', label: 'Tái sử dụng' },
  ];

  return (
    <section id="story" class="py-24 md:py-32 bg-[#fafafa]">
      <div class="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <div class="reveal-left">
            <StoryImage
              src="/images/story/story-main.jpg"
              label="Ảnh câu chuyện"
              class="aspect-[4/5] rounded-2xl w-full"
            />
          </div>

          {/* Right — Content */}
          <div>
            <div class="reveal-right flex items-center gap-4 mb-6">
              <div class="w-8 h-[1px] bg-[#999]" />
              <span class="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#888]">Câu chuyện</span>
            </div>

            <h2 class="reveal-right font-display text-4xl md:text-[3.2rem] font-light tracking-[-0.01em] leading-[1.1] text-[#111] mb-8">
              Từ An Giang,
              <br />
              <span class="italic">đến mọi hành trình</span>
            </h2>

            <div class="reveal-right space-y-5 text-[14px] md:text-[15px] text-[#666] leading-[1.8] mb-10">
              <p>
                LoreTote sinh ra từ tình yêu với vùng đất An Giang — nơi cây thốt nốt vươn cao
                giữa cánh đồng bạt ngàn, nơi sông Hậu hiền hoà chảy qua những làng nghề trăm năm.
              </p>
              <p>
                Mỗi thiết kế trên túi canvas là sự kết hợp giữa nghệ thuật truyền thống dân gian
                và phong cách đương đại — mang đậm bản sắc miền Tây Nam Bộ, đồng thời phù hợp
                với cuộc sống hiện đại.
              </p>
              <p>
                Chúng tôi sử dụng canvas dày 12oz, in nhiệt chống phai, đảm bảo bền đẹp
                theo thời gian. Mỗi chiếc túi không chỉ là phụ kiện — mà là câu chuyện bạn mang theo.
              </p>
            </div>

            {/* Stats */}
            <div class="reveal-right grid grid-cols-3 gap-6 pt-8 border-t border-[#e0e0e0]">
              {stats.map((s) => (
                <div>
                  <span class="font-display text-[2rem] md:text-[2.5rem] font-light text-[#111]">{s.value}</span>
                  <p class="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#999] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
