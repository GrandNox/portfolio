import { FLOATING_DOTS } from "../../utils/animations";

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0">
        <img
          src="/bg.png"
          alt="Background image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {FLOATING_DOTS.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#05C4D6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}