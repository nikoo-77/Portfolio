type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-10 space-y-3">
      <p className="section-label">{label}</p>
      <h2 className="glow-text text-4xl md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm text-[#ffc107] md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
