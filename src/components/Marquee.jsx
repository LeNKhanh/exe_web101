export default function Marquee() {
  const items = ['LoreTote', '●', 'Canvas Art', '●', 'An Giang', '●', 'Handcrafted', '●', 'Since 2026', '●'];
  const repeated = items.join(' ').repeat(6);

  return (
    <section class="py-5 border-y border-[#eee] overflow-hidden bg-[#fafafa]">
      <div class="marquee-track whitespace-nowrap inline-flex">
        <span class="text-[12px] font-medium tracking-[0.25em] uppercase text-[#bbb]">
          {repeated}
        </span>
        <span class="text-[12px] font-medium tracking-[0.25em] uppercase text-[#bbb] ml-8">
          {repeated}
        </span>
      </div>
    </section>
  );
}
