import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ className = "", variant = "default", ...props }: ButtonProps) {
  const styles =
    variant === "outline"
      ? "border border-[#c9c5bf] bg-transparent text-[#171717] hover:bg-white"
      : "bg-[#171717] text-white hover:bg-[#36312d]";

  return (
    <button
      className={`inline-flex h-11 items-center justify-center gap-2 px-5 text-[13px] font-bold transition hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50 ${styles} ${className}`}
      {...props}
    />
  );
}
