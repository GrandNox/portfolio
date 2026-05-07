export function Availability() {
  return (
    <div className="glass rounded-3xl p-8 border border-primary/30">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        <span className="font-medium">Currently Available</span>
      </div>
      <p className="text-muted-foreground text-sm">
        Currently open to new frontend engineering opportunities and available
        for full-time or contract roles.
      </p>
    </div>
  );
}
