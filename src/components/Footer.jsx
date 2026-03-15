import { FaBrandsFacebook, FaBrandsInstagram, FaBrandsTiktok } from 'solid-icons/fa';

export default function Footer() {
  const navLinks = [
    ['Sản phẩm', '#products'],
    ['Câu chuyện', '#story'],
    ['Đặc điểm', '#features'],
    ['Chính sách', '#'],
    ['Vận chuyển', '#'],
  ];

  const socials = [
    { icon: () => <FaBrandsFacebook size={15} />, label: 'Facebook' },
    { icon: () => <FaBrandsInstagram size={15} />, label: 'Instagram' },
    { icon: () => <FaBrandsTiktok size={14} />, label: 'TikTok' },
  ];

  return (
    <footer class="bg-[#f7f4ef] border-t border-[#e0d8cc]">
      <div class="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-8">

        {/* Main grid: brand | nav | contact */}
        <div class="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1.4fr] gap-12 mb-14">

          {/* Brand */}
          <div>
            <span class="font-display text-[30px] text-[#1a1917] font-semibold block leading-none mb-3">
              Lore<span class="font-light italic">Tote</span>
            </span>
            <p class="text-[13px] text-[#8a7a66] leading-[1.8] mb-6 max-w-[240px]">
              Túi canvas mang hồn An Giang — đồng hành trên mọi hành trình của bạn.
            </p>
            <div class="flex gap-2.5">
              {socials.map((s) => (
                <a href="#" aria-label={s.label}
                  class="w-9 h-9 rounded-full border border-[#d0c8bb] flex items-center justify-center text-[#8a7a66] hover:bg-[#1a1917] hover:text-white hover:border-[#1a1917] transition-all duration-200">
                  {s.icon()}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 class="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a8987e] mb-5">Điều hướng</h4>
            <ul class="space-y-3">
              {navLinks.map(([label, href]) => (
                <li>
                  <a href={href} class="text-[13.5px] text-[#4a4238] hover:text-[#1a1917] transition-colors duration-150">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 class="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a8987e] mb-5">Liên hệ</h4>
            <ul class="space-y-3">
              <li>
                <a href="mailto:hello@loretote.vn" class="text-[13.5px] text-[#4a4238] hover:text-[#1a1917] transition-colors duration-150">hello@loretote.vn</a>
              </li>
              <li><span class="text-[13.5px] text-[#4a4238]">0123 456 789</span></li>
              <li><span class="text-[13.5px] text-[#4a4238]">An Giang, Việt Nam</span></li>
            </ul>
            <p class="mt-6 text-[12px] text-[#a8987e] leading-[1.7]">
              Hỗ trợ khách hàng<br />
              Thứ 2 – Thứ 7, 8:00 – 17:00
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div class="border-t border-[#e0d8cc] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p class="text-[11px] text-[#b0a492]">&copy; 2026 LoreTote. All rights reserved.</p>
          <p class="text-[11px] text-[#b0a492]">Thiết kế &amp; sản xuất tại An Giang, Việt Nam</p>
        </div>

      </div>
    </footer>
  );
}
