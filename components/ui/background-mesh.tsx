import { cn } from "@/lib/utils";

type BackgroundMeshProps = {
  variant?: "hero" | "subtle" | "grid";
  className?: string;
};

export function BackgroundMesh({ variant = "hero", className }: BackgroundMeshProps) {
  if (variant === "grid") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]",
          className,
        )}
        aria-hidden
      />
    );
  }

  if (variant === "subtle") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
          className,
        )}
        aria-hidden
      >
        <div
          className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, var(--color-violet) 0%, transparent 70%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_70%)]" />

      <div
        className="absolute -top-40 -left-20 h-[520px] w-[520px] rounded-full opacity-40 blur-[140px] animate-drift"
        style={{
          background:
            "radial-gradient(circle, var(--color-violet) 0%, transparent 65%)",
        }}
      />

      <div
        className="absolute top-20 right-0 h-[480px] w-[480px] rounded-full opacity-30 blur-[140px] animate-drift"
        style={{
          background:
            "radial-gradient(circle, var(--color-cyan) 0%, transparent 65%)",
          animationDelay: "-9s",
        }}
      />

      <div
        className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full opacity-15 blur-[120px] animate-drift"
        style={{
          background:
            "radial-gradient(circle, var(--color-pink) 0%, transparent 70%)",
          animationDelay: "-4s",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, var(--color-background) 95%)",
        }}
      />
    </div>
  );
}
