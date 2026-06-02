import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg" | "xl";
};

export function Container({ className, size = "lg", ...props }: ContainerProps) {
  const max = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
  }[size];

  return (
    <div
      className={cn("mx-auto w-full px-6 sm:px-8 lg:px-12", max, className)}
      {...props}
    />
  );
}
