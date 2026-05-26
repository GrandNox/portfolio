export function HeroProfile() {
  return (
    <div className="relative animate-fade-in animation-delay-300">
      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

        <div className="relative glass rounded-3xl p-2 glow-border">
          <img
            src="/profile-photo.png"
            alt="Anastasia Zhahlevska"
            className="w-full aspect-4/5 rounded-2x1"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Available for work</span>
          </div>
        </div>
        <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
          <div className="text-2xl font-bold text-primary">5+</div>
          <div className="text-xs text-muted-foreground">Years Exp.</div>
        </div>
      </div>
    </div>
  );
}
