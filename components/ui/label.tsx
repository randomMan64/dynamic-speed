import type { LabelHTMLAttributes } from "react";

export function Label({ className = "", ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={`text-xs font-bold text-[#4f4b46] ${className}`} {...props} />;
}
