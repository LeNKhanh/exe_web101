export default function Contact() {
  const contactInfo = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
      label: 'Email',
      value: 'hello@loretote.vn',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>,
      label: 'Điện thoại',
      value: '0123 456 789',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      label: 'Địa chỉ',
      value: 'An Giang, Việt Nam',
    },
  ];

  return (
    <section id="contact" class="py-24 md:py-32 bg-[#111] text-white relative overflow-hidden">
      {/* Subtle grain texture */}
      <div class="absolute inset-0 opacity-[0.03]" style={{
        "background-image": "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
        "background-size": "24px 24px"
      }} />

      <div class="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div class="text-center mb-16">
          <div class="reveal flex items-center justify-center gap-4 mb-5">
            <div class="w-8 h-[1px] bg-[#555]" />
            <span class="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#666]">Liên hệ</span>
            <div class="w-8 h-[1px] bg-[#555]" />
          </div>
          <h2 class="reveal font-display text-4xl md:text-[3.2rem] font-light tracking-[-0.01em] leading-[1.1] text-white">
            Hãy kết nối <span class="italic">với chúng tôi</span>
          </h2>
        </div>

        <div class="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
          {/* Left — Info */}
          <div>
            <p class="reveal text-[14px] md:text-[15px] text-[#999] leading-[1.8] mb-10">
              Bạn muốn đặt hàng số lượng lớn, hợp tác thiết kế hoặc có câu hỏi?
              Liên hệ ngay — chúng tôi luôn sẵn lòng lắng nghe.
            </p>

            <div class="reveal space-y-6">
              {contactInfo.map((item) => (
                <div class="flex items-start gap-4 group">
                  <div class="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#777] group-hover:border-white group-hover:text-white transition-all duration-300 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <span class="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#666] block mb-1">{item.label}</span>
                    <span class="text-[15px] text-white/80">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div class="reveal mt-12 pt-8 border-t border-[#222]">
              <span class="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#666] block mb-4">Theo dõi chúng tôi</span>
              <div class="flex gap-3">
                {['Facebook', 'Instagram', 'TikTok'].map((name) => (
                  <a href="#" class="text-[12px] font-medium tracking-[0.08em] uppercase text-[#777] hover:text-white border border-[#333] hover:border-white px-4 py-2 rounded-full transition-all duration-300">
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div class="reveal-scale">
            <form class="bg-[#1a1a1a] rounded-xl p-8 md:p-12 space-y-7" onSubmit={(e) => e.preventDefault()}>
              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-[10px] font-semibold tracking-[0.15em] uppercase text-[#666] mb-3">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    class="w-full bg-transparent border-b border-[#333] py-3 text-white text-[14px] placeholder-[#555] focus:border-white outline-none transition-colors duration-300"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label class="block text-[10px] font-semibold tracking-[0.15em] uppercase text-[#666] mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    class="w-full bg-transparent border-b border-[#333] py-3 text-white text-[14px] placeholder-[#555] focus:border-white outline-none transition-colors duration-300"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label class="block text-[10px] font-semibold tracking-[0.15em] uppercase text-[#666] mb-3">
                  Chủ đề
                </label>
                <input
                  type="text"
                  class="w-full bg-transparent border-b border-[#333] py-3 text-white text-[14px] placeholder-[#555] focus:border-white outline-none transition-colors duration-300"
                  placeholder="Đặt hàng / Hợp tác / Khác"
                />
              </div>
              <div>
                <label class="block text-[10px] font-semibold tracking-[0.15em] uppercase text-[#666] mb-3">
                  Tin nhắn
                </label>
                <textarea
                  rows="4"
                  class="w-full bg-transparent border-b border-[#333] py-3 text-white text-[14px] placeholder-[#555] focus:border-white outline-none transition-colors duration-300 resize-none"
                  placeholder="Nội dung tin nhắn..."
                />
              </div>
              <button
                type="submit"
                class="w-full sm:w-auto bg-white text-[#111] px-10 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] hover:bg-[#eee] transition-colors duration-300 rounded-full mt-2"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
