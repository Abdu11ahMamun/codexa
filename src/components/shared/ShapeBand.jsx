export function ShapeBand({ tone }) {
  const c1 = tone === "blue" ? "rgba(37,99,235,0.10)" : "rgba(15,23,42,0.06)";
  const c2 = tone === "blue" ? "rgba(37,99,235,0.06)" : "rgba(15,23,42,0.04)";

  return (
    <div aria-hidden className="relative my-12">
      <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <svg className="absolute left-0 top-0 h-24 w-full opacity-30" viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path
          d="M0,64 C160,110 320,120 480,92 C640,64 800,10 960,20 C1120,30 1280,92 1440,64 L1440,0 L0,0 Z"
          fill={c1}
        />
        <path
          d="M0,92 C220,120 420,116 640,86 C860,56 1080,10 1440,38 L1440,0 L0,0 Z"
          fill={c2}
        />
      </svg>
    </div>
  );
}
