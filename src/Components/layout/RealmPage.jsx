import ReturnToMap from "../common/ReturnToMap";
import EmberField from "../common/EmberField";
import SectionTitle from "../common/SectionTitle";

/**
 * Shared shell for every holding: the return-to-map control (map-only realm),
 * ambient embers, a titled header, the content, and the footer.
 */
export default function RealmPage({ kicker, title, shimmerTitle = false, embers = 20, children }) {
  return (
    <main className="relative min-h-screen overflow-hidden px-5 pt-10 pb-10">
      <ReturnToMap />
      <EmberField count={embers} className="opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionTitle
          kicker={kicker}
          title={title}
          titleClassName={shimmerTitle ? "heading-shimmer" : ""}
        />
        <div className="mt-12">{children}</div>
      </div>
    </main>
  );
}
