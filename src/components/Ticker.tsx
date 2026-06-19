import { tickerItems } from "../data/portfolio";

export function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-b border-[rgba(0,255,65,0.15)] bg-[#050505] py-2">
      <div
        className="flex w-max gap-8 whitespace-nowrap text-xs tracking-wide text-[#00aa2a] md:text-sm"
        style={{ animation: "ticker 40s linear infinite" }}
      >
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
