import { Shield, Layers, MapPin, Truck } from 'lucide-solid';

export default function Features() {
  const features = [
    {
      icon: () => <Shield size={20} strokeWidth={1.5} />,
      title: 'Chất liệu bền bỉ',
      desc: 'Canvas 12oz chống thấm nhẹ, chịu lực tốt — bạn đồng hành đáng tin cậy cho mọi hành trình.',
      num: '01',
      stat: '12oz',
    },
    {
      icon: () => <Layers size={20} strokeWidth={1.5} />,
      title: 'In nhiệt chống phai',
      desc: 'Công nghệ in chuyển nhiệt cao cấp, hình ảnh sắc nét và bền màu sau nhiều lần giặt.',
      num: '02',
      stat: 'HD Print',
    },
    {
      icon: () => <MapPin size={20} strokeWidth={1.5} />,
      title: 'Nghệ thuật An Giang',
      desc: 'Hoạ tiết lấy cảm hứng từ di sản văn hoá bản địa — mỗi chiếc túi kể một câu chuyện.',
      num: '03',
      stat: 'Bản địa',
    },
    {
      icon: () => <Truck size={20} strokeWidth={1.5} />,
      title: 'Giao hàng toàn quốc',
      desc: 'Miễn phí vận chuyển từ 500K. Đóng gói cẩn thận, giao nhanh chỉ trong 2–4 ngày.',
      num: '04',
      stat: '2–4 ngày',
    },
  ];

  return (
    <section id="features" class="bg-[#f7f4ef]">
      <div class="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">

        {/* Header */}
        <div class="reveal text-center mb-20">
          <div class="inline-flex items-center gap-3 mb-5">
            <div class="w-6 h-[1px] bg-[#c8bfaf]" />
            <span class="text-[10px] font-bold tracking-[0.22em] uppercase text-[#a8987e]">Đặc điểm nổi bật</span>
            <div class="w-6 h-[1px] bg-[#c8bfaf]" />
          </div>
          <h2 class="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-light leading-[1.05] tracking-[-0.03em] text-[#1a1917] mb-5">
            Tại sao chọn <span class="italic text-[#8a7a66]">LoreTote?</span>
          </h2>
          <p class="text-[14px] text-[#6b6358] leading-[1.9] max-w-[440px] mx-auto">
            Mỗi chi tiết đều được cân nhắc kỹ — từ sợi vải đến từng nét in —
            để tạo sản phẩm xứng đáng với bạn.
          </p>
        </div>

        {/* Feature cards — 2×2 warm-toned grid, no dark bg */}
        <div class="stagger grid grid-cols-1 sm:grid-cols-2 gap-5">

          {features.map((f, i) => {
            const bgs   = ['bg-white', 'bg-[#f0ebe2]', 'bg-[#e8e2d5]', 'bg-white'];
            const nums  = ['text-[#e8e2d8]', 'text-[#ddd6c8]', 'text-[#d4cdc0]', 'text-[#e8e2d8]'];
            const accents = ['border-[#e0d8cc]', 'border-[#d8d0c0]', 'border-[#cec6b4]', 'border-[#e0d8cc]'];
            return (
              <div class={`group relative ${bgs[i]} rounded-3xl overflow-hidden border ${accents[i]} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default flex flex-col`}>
                {/* Top accent bar */}
                <div class="h-[3px] w-full bg-gradient-to-r from-[#c8bfaf] to-transparent group-hover:from-[#8a7a66] transition-all duration-300" />
                <div class="p-8 md:p-10 flex flex-col flex-1">
                  {/* Number + icon row */}
                  <div class="flex items-start justify-between mb-6">
                    <span class={`font-display text-[5rem] font-light leading-none ${nums[i]} group-hover:text-[#c8bfaf] transition-colors duration-300`}>{f.num}</span>
                    <div class="w-11 h-11 rounded-2xl bg-[#f7f4ef] border border-[#e0d8cc] flex items-center justify-center text-[#8a7a66] group-hover:bg-[#1a1917] group-hover:text-white group-hover:border-[#1a1917] transition-all duration-300">
                      {f.icon()}
                    </div>
                  </div>
                  {/* Title + stat */}
                  <div class="flex items-baseline gap-3 mb-3">
                    <h3 class="text-[17px] font-bold text-[#1a1917] tracking-[-0.02em]">{f.title}</h3>
                    <span class="text-[10px] font-semibold text-[#a8987e] tracking-[0.12em] uppercase shrink-0 bg-[#f0ebe2] px-2 py-0.5 rounded-full">{f.stat}</span>
                  </div>
                  <p class="text-[13.5px] text-[#6b6358] leading-[1.85] flex-1">{f.desc}</p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
