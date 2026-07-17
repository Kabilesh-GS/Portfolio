/**
 * A themed section heading: small kicker + engraved gold title + gilded rule.
 */
export default function SectionTitle({ kicker, title, subtitle, titleClassName = "", align = "center" }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignment} gap-2 animate-[rise-in_1s_ease_both]`}>
      {kicker && (
        <span className="heading-cinzel text-xs md:text-sm uppercase tracking-[0.35em] text-gold/70">
          {kicker}
        </span>
      )}
      <h2 className={`heading-deco text-3xl md:text-5xl font-black ${titleClassName}`}>{title}</h2>
      <div className="gold-rule w-40 mt-1" />
      {subtitle && (
        <p className="font-script text-lg md:text-xl text-parchment-dim mt-2 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
